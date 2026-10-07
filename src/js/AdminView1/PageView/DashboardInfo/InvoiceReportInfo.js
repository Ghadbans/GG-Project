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
function InvoiceReportInfo({ onMonth, onInvoice }) {
  const [month, setMonth] = useState('');
  const [infoOptions, setInfoOptions] = useState('');
  const [selectOptions, setSelectOptions] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    return date
  });
  const transactionYears = new Date(startDate).getFullYear()
  const [fromDate, setFromDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [endDate, setEndDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [invoiceRevenue, setInvoiceRevenue] = useState([]);

  useEffect(() => {
    if (onMonth) {
      setInfoOptions(onMonth);
    }
    if (onInvoice) {
      setInvoiceRevenue(onInvoice);
    }
  }, [onMonth, onInvoice]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const headers = [];
    const currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [fromDate, endDate])

  const [FilterInvoiceRevenue, setFilterInvoiceRevenue] = useState([])
  useEffect(() => {
    if (selectOptions === 'Month') {
      setFilterInvoiceRevenue(invoiceRevenue?.filter((row) => dayjs(row.invoiceDate).format('MMMM') === month))
    } else if (selectOptions === 'Year') {
      setFilterInvoiceRevenue(invoiceRevenue?.filter((row) => dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY')))
    }
    else if (selectOptions === 'Custom') {
      setFilterInvoiceRevenue(invoiceRevenue?.filter((row) => {
        const itemDate = dayjs(row.invoiceDate);
        return (itemDate.isAfter(dayjs(fromDate).startOf('day')) || itemDate.isSame(dayjs(fromDate).startOf('day'))) &&
               (itemDate.isBefore(dayjs(endDate).endOf('day')) || itemDate.isSame(dayjs(endDate).endOf('day')));
      }))
    }
    else if (selectOptions === 'All') {
      setFilterInvoiceRevenue(invoiceRevenue)
    }
  }, [selectOptions, month, startDate, fromDate, endDate, invoiceRevenue])

  const handleChangeSelected = (e) => {
    setInfoOptions(e.target.value);
  }
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalDExpenses, setTotalDExpenses] = useState(0);
  const [TotalPayRoll, setTotalPayRoll] = useState(0);
  const [TotalPayment, setTotalPayment] = useState(0);
  const [TotalRevenue, setTotalRevenue] = useState(0);
  useEffect(() => {
    const TSell = (FilterInvoiceRevenue || []).reduce((acc, row) => {
      const sell = row.infoSell !== undefined ? parseFloat(row.infoSell) : (parseFloat(row.subTotal) || parseFloat(row.totalInvoice) || 0);
      return acc + (isNaN(sell) ? 0 : sell);
    }, 0);
    const TCost = (FilterInvoiceRevenue || []).reduce((acc, row) => {
      if (row.infoCost !== undefined) {
        const cost = parseFloat(row.infoCost);
        return acc + (isNaN(cost) ? 0 : cost);
      }
      const itemsCost = (row.items || []).reduce((sum, item) => {
        const qty = parseFloat(item.itemOut !== undefined ? item.itemOut : item.itemQty) || 0;
        const c = parseFloat(item.itemCost !== undefined ? item.itemCost : (item.costPrice || item.itemCostPrice)) || 0;
        return sum + (qty * c);
      }, 0);
      return acc + itemsCost;
    }, 0);
    setTotalRevenue(TSell);
    setTotalDExpenses(TCost);
    setTotalPayRoll(TSell - TCost);
  }, [FilterInvoiceRevenue]);

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
            {`INV-${row.invoiceNumber}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row?.customerName : '')}</TableCell>
          <TableCell align="left">{row.invoiceDefect}</TableCell>
          <TableCell align="right">$ {(parseFloat(row.subTotal) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item Sell
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
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
                  <tbody>
                    {
                      row.items.map((Item, i) => {
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
                                    <td style={{ border: '1px solid #DDD' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{Item.itemQty} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </>
                                )
                            }
                          </tr>
                        )
                      }
                      )
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}></td>
                      <td style={{ border: '1px solid #DDD' }}>Total Sell</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={3}>{(parseFloat(row.subTotal) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
            {`INV-${row.invoiceNumber}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row?.customerName : '')}</TableCell>
          <TableCell align="left">{row.invoiceDefect}</TableCell>
          <TableCell align="right">$ {(parseFloat(row.subTotal) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item Cost
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty Out</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate Cost</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.items.map((Item, i) => {
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
                                    <td style={{ border: '1px solid #DDD' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{Item.itemOut} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemCost}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(Item.itemOut * Item.itemCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </>
                                )
                            }
                          </tr>
                        )
                      }
                      )
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}></td>
                      <td style={{ border: '1px solid #DDD' }} >Total Cost</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}><span data-prefix>$ </span>{(parseFloat(row.infoCost) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
            {`INV-${row.invoiceNumber}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row?.customerName : '')}</TableCell>
          <TableCell align="left">{row.invoiceDefect}</TableCell>
          <TableCell align="right">$ {(parseFloat(row.subTotal) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {(parseFloat(row.infoCost) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {((parseFloat(row.subTotal) || 0) - (parseFloat(row.infoCost) || 0)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Discount</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty Out</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate Cost</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.items.map((Item, i) => {
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
                                    <td style={{ border: '1px solid #DDD' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{Item.itemQty} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                    <td style={{ border: '1px solid #DDD' }}>{Item.itemOut} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{Item.itemCost}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(Item.itemOut * Item.itemCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </>
                                )
                            }
                          </tr>
                        )
                      }
                      )
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}></td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Sell</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>{(parseFloat(row.subTotal) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Cost</td>
                      <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span>{(parseFloat(row.infoCost) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
            <MenuItem value="Cost">Cost</MenuItem>
            <MenuItem value="Labor">Labor Fees</MenuItem>
            <MenuItem value="Revenue">Revenue</MenuItem>
            <MenuItem value="All">All</MenuItem>
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
            <MenuItem value="Year">Year</MenuItem>
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Custom">Custom</MenuItem>
            <MenuItem value="All">All</MenuItem>
          </Select>
        </FormControl>
        {
          selectOptions === "Month" && (
            <FormControl sx={{ width: '200px' }}>
              <InputLabel id="month">month</InputLabel>
              <Select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                name="month"
                label="month"
              >
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
          )
        }
        {
          selectOptions === 'Year' && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  required
                  name='startDate'
                  value={dayjs(startDate)}
                  onChange={(date) => setStartDate(date)}
                  format='YYYY'
                  label={'"year"'} views={['year']}
                />
              </DemoContainer>
            </LocalizationProvider>
          )
        }
        {
          selectOptions === 'Custom' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    required
                    name='fromDate'
                    label='From Date'
                    value={dayjs(fromDate)}
                    onChange={(date) => setFromDate(date)}
                    format='DD/MM/YYYY'
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    required
                    name='endDate'
                    label='To Date'
                    value={dayjs(endDate)}
                    onChange={(date) => setEndDate(date)}
                    format='DD/MM/YYYY'
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )
        }
      </section>
      <Box sx={{ padding: '20px' }} component={Paper}>
        <div style={{ padding: '20px' }}>
          <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
          <hr /><p className='invoicehr'></p>
          <article>
            <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '25px', marginBottom: '15px' }}>
              <address style={{ position: 'relative', lineHeight: 1.35, width: '50%' }}>

              </address>
              <table className="firstTable" style={{ minWidth: '360px', fontSize: '13px', borderCollapse: 'collapse', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '15px', pageBreakInside: 'auto' }}>
                <thead>
                  <tr>
                    <th colSpan={2} style={{ backgroundColor: '#093170', color: '#ffffff', padding: '9px 14px', fontSize: '13.5px', fontWeight: 'bold', textAlign: 'left', letterSpacing: '0.3px' }}>Statement of Accounts - Commercial Invoices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '7px 14px', fontSize: '12px', fontWeight: 600, borderBottom: '1px solid #e2e8f0', textAlign: 'right' }}>
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
                          All Transactions
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
                    <td colSpan={2} style={{ backgroundColor: '#e8f7fe', color: '#0369a1', padding: '7px 14px', fontSize: '12.5px', fontWeight: 'bold', borderBottom: '1px solid #bae6fd', textAlign: 'left' }}>Commercial Invoices Summary</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'left' }}><span style={{ fontWeight: 500, color: '#334155' }}>Total Sell</span></td>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Sell' || infoOptions === 'Revenue' || infoOptions === 'All') && (
                          <span style={{ fontWeight: 600, color: '#0f172a' }}>{`$${(TotalRevenue || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )}</td>

                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'left' }}><span style={{ fontWeight: 500, color: '#334155' }}>Total Cost</span></td>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'right' }}>       {
                      (infoOptions === 'Cost' || infoOptions === 'Revenue' || infoOptions === 'All') && (
                        <span style={{ fontWeight: 600, color: '#0f172a' }}>{`$${(TotalDExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                      )}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', textAlign: 'left' }}><span style={{ fontWeight: 500, color: '#334155' }}>Total Revenue</span></td>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Revenue' || infoOptions === 'All') && (
                          <span style={{ fontWeight: 700, color: '#093170' }}>{`$${(TotalPayRoll || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
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
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Defect Description</TableCell>
                        <TableCell align="right">Total Sell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterInvoiceRevenue.map((row) => (
                        <Row key={row._id} row={row} />
                      ))}
                      <TableRow>
                        <TableCell colSpan={4}></TableCell>
                        <TableCell >Total Sell</TableCell>
                        <TableCell ><span >{`$${(TotalRevenue || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            }
            {
              infoOptions === 'Cost' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Defect Description</TableCell>
                        <TableCell align="right">Total Cost</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterInvoiceRevenue.map((row) => (
                        <Row2 key={row._id} row={row} />
                      ))}
                      <TableRow>
                        <TableCell colSpan={4}></TableCell>
                        <TableCell >Total Cost</TableCell>
                        <TableCell ><span >{`$${(TotalDExpenses || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></TableCell>
                      </TableRow>
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
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Defect Description</TableCell>
                        <TableCell align="right">Total Sell</TableCell>
                        <TableCell align="right">Total Cost</TableCell>
                        <TableCell align="right">Revenue</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterInvoiceRevenue.map((row) => (
                        <Row3 key={row._id} row={row} />
                      ))}
                      <TableRow>
                        <TableCell colSpan={6}></TableCell>
                        <TableCell >Total Revenue</TableCell>
                        <TableCell ><span >{`$${(TotalPayRoll || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></TableCell>
                      </TableRow>
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

export default InvoiceReportInfo
