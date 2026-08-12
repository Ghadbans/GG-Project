import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import React, { useEffect, useState, useRef } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { TableContainer, Checkbox, Menu, MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, Collapse, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Table, TableBody, TableCell, TableRow, TableHead, Tabs, Tab, Button, Card, CardContent } from '@mui/material';
import { Add, KeyboardArrowDownOutlined, KeyboardArrowUp, KeyboardArrowUpOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, NavLink, Link } from 'react-router-dom'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from '../../../img/images.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import { PieChart } from '@mui/x-charts';

const PrintTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function ProjectReportInfo({ onMonth, onProjectName, onPayment }) {
  const [infoOptions, setInfoOptions] = useState('');
  const [selectOptions, setSelectOptions] = useState('');
  const [project, setProject] = useState([]);
  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  useEffect(() => {
    if (onMonth) {
      setInfoOptions(onMonth);
      setProject(onProjectName);
    }
  }, [onMonth, onProjectName]);

  const [FilterProject, setFilterProject] = useState([]);
  useEffect(() => {
    if (selectOptions === 'By Project') {
      const filterO = search2 !== '' ? project.filter((Item) =>
        Item.customerName && Item.customerName.customerName.toLowerCase().includes(search2.toLowerCase()) ||
        Item.description && Item.description.toLowerCase().includes(search2.toLowerCase()) ||
        Item.projectName && Item.projectName.toLowerCase().includes(search2.toLowerCase())
      ) : project
      setFilterProject(filterO)
    } else if (selectOptions === 'All') {
      setFilterProject(project)
    }
  }, [selectOptions, project, search2]);

  const handleChangeSelected = (e) => {
    setInfoOptions(e.target.value);
  }

  const [TotalPayment, setTotalPayment] = useState(0);
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalItemPurchase, setTotalItemPurchase] = useState(0);
  const [TotalAdvances, setTotalAdvances] = useState(0);
  const [TotalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const projectCostInfo = FilterProject.length > 0 ? FilterProject.reduce((acc, row) => {
      const relatedCost = (row.relatedPurchase || []).reduce((sum, item) => sum + Number(item.infoCost || 0), 0);
      return acc + relatedCost;
    }, 0) : 0
    const projectExpensesInfo = FilterProject.length > 0 ? FilterProject.reduce((acc, row) => {
      const relatedExpenses = (row.expenses || []).reduce((sum, item) => sum + Number(item.total || 0), 0);
      return acc + relatedExpenses;
    }, 0) : 0
    const projectSellInfo = FilterProject.length > 0 ? FilterProject.reduce((acc, row) => {
      const relatedSell = (row.relatedPurchase || [])
        .filter((item) => item.RelatedInvoice !== undefined)
        .reduce((sum, item) => sum + Number(item.RelatedInvoice.totalInvoice || 0), 0);
      return acc + relatedSell;
    }, 0) : 0

    const projectAdvancesInfo = FilterProject.length > 0 ? FilterProject.reduce((acc, project) => {
      const projectPayments = (onPayment || []).filter(pay =>
        pay.status !== 'Voided' &&
        pay.TotalAmount?.some(item => item.id === project._id)
      );
      const projectTotal = projectPayments.reduce((s, pay) => {
        const amtValue = pay.TotalAmount?.find(i => i.id === project._id)?.total || 0;
        return s + (pay.transactionType === 'Refund' ? -Number(amtValue) : Number(amtValue));
      }, 0);
      return acc + projectTotal;
    }, 0) : 0;

    const projectRevenue = (projectSellInfo + projectAdvancesInfo) - (Number(projectCostInfo) + Number(projectExpensesInfo))
    setTotalItemPurchase(projectCostInfo)
    setTotalExpenses(projectExpensesInfo)
    setTotalPayment(projectSellInfo)
    setTotalAdvances(projectAdvancesInfo)
    setTotalRevenue(projectRevenue)
  }, [FilterProject, onPayment]);

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.projectNumber}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.customerName?.customerName || 'N/A'}
          </TableCell>
          <TableCell align="left">{row.projectName}</TableCell>
          <TableCell align="left">{row.description}</TableCell>
          <TableCell align="left">
            {
              row.relatedPurchase?.map((row1) => (
                <span key={row1._id}>{row1.RelatedInvoice !== undefined ? 'INV-' + row1.RelatedInvoice.invoiceNumber : ''}</span>
              ))
            }
          </TableCell>
          <TableCell align="right">$ {(row.totalSell || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
          <TableCell align="right">$ {(row.projectAdvances || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Sell Info
                </Typography>
                {
                  row.relatedPurchase?.map((row1) => (
                    <table key={row1._id} className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Discount</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                        </tr>
                      </thead>
                      {
                        row1.RelatedInvoice !== undefined ?
                          <tbody>
                            {
                              row1.RelatedInvoice.items.map((Item, i) => {
                                return (
                                  <tr key={Item.idRow}>
                                    {
                                      Item.newDescription !== undefined ?
                                        (
                                          <>
                                            <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={5}>{Item.newDescription}</td>
                                          </>
                                        )
                                        :
                                        (
                                          <>
                                            <td style={{ border: '1px solid #DDD' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName?.itemName?.toUpperCase() || 'UNKNOWN'}</span></td>
                                            <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription}</td>
                                            <td style={{ border: '1px solid #DDD' }}>{Item.itemQty} </td>
                                            <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                            <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                                            <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                          </>
                                        )
                                    }
                                  </tr>
                                )
                              }
                              )
                            }
                            <tr>
                              <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}>{row.note}</td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}>
                                <span>
                                  Sub Total
                                  {row1.RelatedInvoice.CheckTvA ? '' : <><br /><span style={{ color: 'gray' }}>(Tax Inclusive)</span></>}
                                </span>
                              </td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row1.RelatedInvoice.subTotal}</span></td>
                            </tr>
                            {
                              row1.RelatedInvoice.shipping ?
                                (
                                  <tr>
                                    <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Shipping</span></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{(row1.RelatedInvoice.shipping || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </tr>
                                )
                                : ''
                            }
                            {
                              row1.RelatedInvoice.adjustmentNumber ?
                                (
                                  <tr>
                                    <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>{row.adjustment}</span></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{(row1.RelatedInvoice.adjustmentNumber || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </tr>
                                )
                                : ''
                            }
                            <tr>
                              <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Total</span></td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{(row1.RelatedInvoice.totalInvoice || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            </tr>
                            {
                              row1.RelatedInvoice.total ?
                                (
                                  <tr>
                                    <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid</span></td>
                                    <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{(row1.RelatedInvoice.total || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </tr>
                                )
                                : ''
                            }
                            <tr>
                              <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span>Balance Due</span></td>
                              <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span data-prefix>$</span><span>{(row1.RelatedInvoice.balanceDue || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            </tr>
                          </tbody>
                          : ''
                      }

                    </table>
                  ))
                }

              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  function Row2(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.projectNumber}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.customerName.customerName}
          </TableCell>
          <TableCell align="left">{row.projectName}</TableCell>
          <TableCell align="left">{row.description}</TableCell>
          <TableCell align="right">$ {(row.totalExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Expenses Info
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>#</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Date</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Category</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.expenses?.map((Item) => (
                        <tr key={Item._id}>
                          <td style={{ border: '1px solid #DDD' }}> D-{Item.expenseNumber} </td>
                          <td style={{ border: '1px solid #DDD' }}>{dayjs(Item.expenseDate).format('DD-MMMM-YYYY')} </td>
                          <td style={{ border: '1px solid #DDD' }}>{Item.expenseCategory?.expensesCategory || 'N/A'} </td>
                          <td style={{ border: '1px solid #DDD' }}>{Item.description} </td>
                          <td style={{ border: '1px solid #DDD' }}>$ {(Item.total || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={3}></td>
                      <td style={{ border: '1px solid #DDD' }}>Total Expenses</td>
                      <td style={{ border: '1px solid #DDD' }}>$ {(row.totalExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                    </tr>
                  </tbody>
                </table>

              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  function Row3(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.projectNumber}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.customerName.customerName}
          </TableCell>
          <TableCell align="left">{row.projectName}</TableCell>
          <TableCell align="left">{row.description}</TableCell>
          <TableCell align="left">
            {
              row.relatedPurchase?.map((row1) => (
                <span key={row1._id}>{'PUR-' + row1.purchaseNumber}</span>
              ))
            }
          </TableCell>
          <TableCell align="right">$ {(row.totalItemCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item Purchase Info
                </Typography>
                {
                  row.relatedPurchase?.map((row1) => (
                    <table key={row1._id} className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty Out</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Cost Rate</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          row1.items.map((Item) => (
                            <tr key={Item.idRow}>
                              {
                                Item.newDescription !== undefined ?
                                  (
                                    <>
                                      <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={5}>{Item.newDescription}</td>
                                    </>
                                  )
                                  :
                                  (
                                    <>
                                      <td style={{ border: '1px solid #DDD' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName?.itemName?.toUpperCase() || 'UNKNOWN'}</span></td>
                                      <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription}</td>
                                      <td style={{ border: '1px solid #DDD' }}>{Item.itemOut} </td>
                                      <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemCost}</td>
                                      <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(Item.totalCostInfo || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                    </>
                                  )
                              }
                            </tr>
                          ))
                        }
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={3}></td>
                          <td style={{ border: '1px solid #DDD' }}>Total Item Purchase</td>
                          <td style={{ border: '1px solid #DDD' }}>$ {(row.totalItemCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                }


              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
      <section>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel id="Options">Options</InputLabel>
          <Select
            id="infoOptions"
            value={infoOptions}
            onChange={(e) => handleChangeSelected(e)}
            name="infoOptions"
            label="Options"
          >
            <MenuItem value="Sell">Sell</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
            <MenuItem value="Item Cost">Item Cost</MenuItem>
            <MenuItem value="Revenue">Revenue</MenuItem>
          </Select>
        </FormControl>
      </section>
      <br />
      <section style={{ display: 'flex', alignItems: 'center', gap: '200px' }}>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel id="select">select</InputLabel>
          <Select
            id="selectOptions"
            value={selectOptions}
            onChange={(e) => setSelectOptions(e.target.value)}
            name="selectOptions"
            label="select"
          >
            <MenuItem value="By Project">By Project</MenuItem>
            <MenuItem value="All">All</MenuItem>
          </Select>
        </FormControl>
        {
          selectOptions === 'By Project' &&
          (
            <TextField
              label='Search'
              id='search2'
              value={search2}
              onChange={handleSearch2}
            />
          )
        }
      </section>
      <Box sx={{ padding: '20px' }} component={Paper}>
        <div style={{ padding: '20px' }}>
          <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
          <hr /><p className='invoicehr'></p>
          <article>
            <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
              <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>

              </address>
              <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                <thead>
                  <tr>
                    <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}>
                      {
                        selectOptions === 'Year' && (<span>
                          {dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To {dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}
                        </span>)
                      }
                      {
                        selectOptions === 'Custom' && (<span>
                          {dayjs(fromDate).format('DD/MM/YYYY')} To {dayjs(endDate).format('DD/MM/YYYY')}
                        </span>)
                      }
                      {
                        selectOptions === 'All' && (<span>
                          All Transaction
                        </span>)
                      }
                      {
                        selectOptions === 'Month' && (<span>
                          For {month}
                        </span>)
                      }
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Expenses Summary</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Invoiced</span></td>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Sell' || infoOptions === 'Revenue') && (
                          <span >{`$${(TotalPayment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )}</td>

                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Advances Received</span></td>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Sell' || infoOptions === 'Revenue') && (
                          <span >{`$${(TotalAdvances || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )}</td>

                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Expenses</span></td>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}>       {
                      (infoOptions === 'Expenses' || infoOptions === 'Revenue') && (
                        <span >{`$${(TotalExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                      )}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Item Purchase</span></td>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Item Cost' || infoOptions === 'Revenue') && (
                          <span >{`$${(TotalItemPurchase || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )
                      }</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Net Profit</span></td>
                    <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Revenue') && (
                          <span >{`$${(TotalRevenue || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )
                      }</td>
                  </tr>

                </tbody>
              </table>
            </section>
            {
              infoOptions === 'Sell' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Project Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Ref</TableCell>
                        <TableCell align="right">Total Invoiced</TableCell>
                        <TableCell align="right">Total Advances</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterProject.map((row) => {
                        const projectAdvances = (onPayment || []).filter(pay =>
                          pay.status !== 'Voided' &&
                          pay.TotalAmount?.some(item => item.id === row._id)
                        ).reduce((s, pay) => {
                          const amt = pay.TotalAmount?.find(i => i.id === row._id)?.total || 0;
                          return s + (pay.transactionType === 'Refund' ? -Number(amt) : Number(amt));
                        }, 0);
                        return <Row key={row._id} row={{ ...row, projectAdvances }} />
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            }
            {
              infoOptions === 'Expenses' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Project Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="right">Total Expenses</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterProject.map((row) => (
                        <Row2 key={row._id} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            }
            {
              infoOptions === 'Item Cost' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Project Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Ref</TableCell>
                        <TableCell align="right">Total ITem Cost</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterProject.map((row) => (
                        <Row3 key={row._id} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            }
            {
              infoOptions === 'Revenue' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Project Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="right">Total Invoiced</TableCell>
                        <TableCell align="right">Total Advances</TableCell>
                        <TableCell align="right">Total ITem Cost</TableCell>
                        <TableCell align="right">Total Expenses</TableCell>
                        <TableCell align="right">Net Profit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        FilterProject.map((row) => {
                          const projectAdvances = (onPayment || []).filter(pay =>
                            pay.status !== 'Voided' &&
                            pay.TotalAmount?.some(item => item.id === row._id)
                          ).reduce((s, pay) => {
                            const amt = pay.TotalAmount?.find(i => i.id === row._id)?.total || 0;
                            return s + (pay.transactionType === 'Refund' ? -Number(amt) : Number(amt));
                          }, 0);
                          const totalInv = (row.relatedPurchase || [])
                            .filter((item) => item.RelatedInvoice !== undefined)
                            .reduce((sum, item) => sum + Number(item.RelatedInvoice.totalInvoice || 0), 0);
                          const netProfit = (totalInv + projectAdvances) - (Number(row.totalItemCost || 0) + Number(row.totalExpenses || 0));

                          return (
                            <TableRow key={row._id}>
                              <TableCell component="th" scope="row">
                                {row.projectNumber}
                              </TableCell>
                              <TableCell align="left">
                                {row.customerName?.customerName || 'N/A'}
                              </TableCell>
                              <TableCell align="left">{row.projectName}</TableCell>
                              <TableCell align="left">{row.description}</TableCell>
                              <TableCell align="right">{`$${(totalInv || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</TableCell>
                              <TableCell align="right">{`$${(projectAdvances || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</TableCell>
                              <TableCell align="right">{`$${(row.totalItemCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</TableCell>
                              <TableCell align="right">{`$${(row.totalExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</TableCell>
                              <TableCell align="right" style={{ fontWeight: 'bold', color: netProfit >= 0 ? 'green' : 'red' }}>
                                {`$${(netProfit || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                              </TableCell>
                            </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            }
          </article>
          <div className='footerinvoice'>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><Email /></span>
              <span>Contact@GlobalGate.Sarl</span>
            </p>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><Phone /></span>
              <span>+243 827 722 222</span>
            </p>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><WebIcon /></span>
              <span>www.GlobalGate.sarl</span>
            </p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default ProjectReportInfo
