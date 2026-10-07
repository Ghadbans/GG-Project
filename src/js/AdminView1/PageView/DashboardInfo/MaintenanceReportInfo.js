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

function MaintenanceReportInfo({ onMonth, onMaintenance }) {

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

  const [maintenanceRevenue, setMaintenanceRevenue] = useState([]);

  useEffect(() => {
    if (onMaintenance) {
      setMaintenanceRevenue(onMaintenance);
    }
    if (onMonth) {
      setInfoOptions(onMonth);
    }
  }, [onMonth, onMaintenance]);

  const [FilterMaintenanceRevenue, setFilterMaintenanceRevenue] = useState([]);
  useEffect(() => {
    if (!selectOptions || selectOptions === 'All') {
      setFilterMaintenanceRevenue(maintenanceRevenue || []);
    } else if (selectOptions === 'Month') {
      setFilterMaintenanceRevenue((maintenanceRevenue || []).filter((row) => dayjs(row.serviceDate).format('MMMM') === month && (dayjs(row.serviceDate).format('YYYY') === dayjs(startDate).format('YYYY'))));
    } else if (selectOptions === 'Year') {
      setFilterMaintenanceRevenue((maintenanceRevenue || []).filter((row) => dayjs(row.serviceDate).format('YYYY') === dayjs(startDate).format('YYYY')));
    } else if (selectOptions === 'Custom') {
      const start = dayjs(fromDate).startOf('day');
      const end = dayjs(endDate).endOf('day');
      const isBetween = (d) => {
        if (!d) return false;
        const day = dayjs(d);
        return (day.isAfter(start) || day.isSame(start)) && (day.isBefore(end) || day.isSame(end));
      };
      setFilterMaintenanceRevenue((maintenanceRevenue || []).filter((row) => isBetween(row.serviceDate)));
    }
  }, [selectOptions, month, startDate, fromDate, endDate, maintenanceRevenue]);

  const handleChangeSelected = (e) => {
    setInfoOptions(e.target.value);
  }

  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalDExpenses, setTotalDExpenses] = useState(0);
  const [TotalPayRoll, setTotalPayRoll] = useState(0);
  const [TotalPayment, setTotalPayment] = useState(0);
  const [TotalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const TSell = (FilterMaintenanceRevenue || []).reduce((acc, row) => {
      const rowSell = (row.infoSell !== undefined && !isNaN(row.infoSell))
        ? parseFloat(row.infoSell)
        : ((parseFloat(row.subTotal) || 0) || (row.items || []).reduce((sum, item) => sum + (parseFloat(item.itemAmount) || (parseFloat(item.itemQty || 0) * parseFloat(item.itemRate || 0)) || 0), 0));
      return acc + (isFinite(rowSell) ? rowSell : 0);
    }, 0);

    const TCost = (FilterMaintenanceRevenue || []).reduce((acc, row) => {
      const rowCost = (row.infoCost !== undefined && !isNaN(row.infoCost))
        ? parseFloat(row.infoCost)
        : (row.items || []).reduce((sum, item) => sum + ((parseFloat(item.itemOut !== undefined ? item.itemOut : (item.itemQty || 0)) * parseFloat(item.itemCost !== undefined ? item.itemCost : (item.costPrice || item.itemCostPrice || 0))) || 0), 0);
      return acc + (isFinite(rowCost) ? rowCost : 0);
    }, 0);

    const TLabor = (FilterMaintenanceRevenue || []).reduce((sum, row) => sum + (parseFloat(row.totalLaborFeesGenerale) || 0), 0);

    setTotalRevenue(TSell);
    setTotalDExpenses(TCost);
    setTotalPayRoll(TSell - TCost);
    setTotalPayment(TLabor);
  }, [FilterMaintenanceRevenue]);

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const customerDisplayName = row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row.customerName : '');
    const rowSell = (row.infoSell !== undefined && !isNaN(row.infoSell)) ? parseFloat(row.infoSell) : (parseFloat(row.subTotal) || 0);

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
            {`M-${row.serviceNumber || (row.maintenanceNumber || '').replace(/\D/g, '')}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.serviceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{customerDisplayName}</TableCell>
          <TableCell align="left">{row.defectDescription || row.defect || ''}</TableCell>
          <TableCell align="right">$ {rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
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
                      (row.items || []).map((Item, i) => {
                        return (
                          <tr key={Item.idRow || i}>
                            {
                              Item.newDescription !== undefined ?
                                (
                                  <>
                                    <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={6}>{Item.newDescription}</td>
                                  </>
                                )
                                :
                                (
                                  <>
                                    <td style={{ border: '1px solid #DDD' }}> <span>{Item.itemName?.itemName ? Item.itemName.itemName.toUpperCase() : (typeof Item.itemName === 'string' && Item.itemName !== 'empty' ? Item.itemName.toUpperCase() : '')}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription || ''}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{Item.itemQty || 0} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{(parseFloat(Item.itemRate) || 0).toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount || 0}</span></td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(parseFloat(Item.itemAmount) || (parseFloat(Item.itemQty || 0) * parseFloat(Item.itemRate || 0)) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
                      <td style={{ border: '1px solid #DDD' }} colSpan={3}>${rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
    const customerDisplayName = row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row.customerName : '');
    const rowCost = (row.infoCost !== undefined && !isNaN(row.infoCost)) ? parseFloat(row.infoCost) : (row.items || []).reduce((sum, item) => sum + ((parseFloat(item.itemOut !== undefined ? item.itemOut : item.itemQty || 0) * parseFloat(item.itemCost !== undefined ? item.itemCost : (item.costPrice || item.itemCostPrice || 0))) || 0), 0);

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
            {`M-${row.serviceNumber || (row.maintenanceNumber || '').replace(/\D/g, '')}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.serviceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{customerDisplayName}</TableCell>
          <TableCell align="left">{row.defectDescription || row.defect || ''}</TableCell>
          <TableCell align="right">$ {rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
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
                      (row.items || []).map((Item, i) => {
                        const itQty = parseFloat(Item.itemOut !== undefined ? Item.itemOut : Item.itemQty) || 0;
                        const itCost = parseFloat(Item.itemCost !== undefined ? Item.itemCost : (Item.costPrice || Item.itemCostPrice)) || 0;
                        return (
                          <tr key={Item.idRow || i}>
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
                                    <td style={{ border: '1px solid #DDD' }}> <span>{Item.itemName?.itemName ? Item.itemName.itemName.toUpperCase() : (typeof Item.itemName === 'string' && Item.itemName !== 'empty' ? Item.itemName.toUpperCase() : '')}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '200px' }}>{Item.itemDescription || ''}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{itQty} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{itCost.toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(itQty * itCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}><span data-prefix>$ </span>{rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
    const customerDisplayName = row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row.customerName : '');
    const rowSell = (row.infoSell !== undefined && !isNaN(row.infoSell)) ? parseFloat(row.infoSell) : (parseFloat(row.subTotal) || 0);
    const rowCost = (row.infoCost !== undefined && !isNaN(row.infoCost)) ? parseFloat(row.infoCost) : (row.items || []).reduce((sum, item) => sum + ((parseFloat(item.itemOut !== undefined ? item.itemOut : item.itemQty || 0) * parseFloat(item.itemCost !== undefined ? item.itemCost : (item.costPrice || item.itemCostPrice || 0))) || 0), 0);
    const rowRevenue = rowSell - rowCost;

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
            {`M-${row.serviceNumber || (row.maintenanceNumber || '').replace(/\D/g, '')}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.serviceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{customerDisplayName}</TableCell>
          <TableCell align="left">{row.defectDescription || row.defect || ''}</TableCell>
          <TableCell align="right">$ {rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {rowRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item Details
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Discount</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total Sell</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty Out</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate Cost</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (row.items || []).map((Item, i) => {
                        const itQty = parseFloat(Item.itemQty) || 0;
                        const itRate = parseFloat(Item.itemRate) || 0;
                        const itAmount = parseFloat(Item.itemAmount) || (itQty * itRate) || 0;
                        const itOut = parseFloat(Item.itemOut !== undefined ? Item.itemOut : Item.itemQty) || 0;
                        const itCost = parseFloat(Item.itemCost !== undefined ? Item.itemCost : (Item.costPrice || Item.itemCostPrice)) || 0;
                        return (
                          <tr key={Item.idRow || i}>
                            {
                              Item.newDescription !== undefined ?
                                (
                                  <>
                                    <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={9}>{Item.newDescription}</td>
                                  </>
                                )
                                :
                                (
                                  <>
                                    <td style={{ border: '1px solid #DDD' }}> <span>{Item.itemName?.itemName ? Item.itemName.itemName.toUpperCase() : (typeof Item.itemName === 'string' && Item.itemName !== 'empty' ? Item.itemName.toUpperCase() : '')}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '180px' }}>{Item.itemDescription || ''}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{itQty} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{itRate.toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount || 0}</span></td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{itAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                    <td style={{ border: '1px solid #DDD' }}>{itOut} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{itCost.toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(itOut * itCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </>
                                )
                            }
                          </tr>
                        )
                      }
                      )
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={3}></td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Sell</td>
                      <td style={{ border: '1px solid #DDD' }}>${rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Cost</td>
                      <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span>{rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
  function Row4(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const customerDisplayName = row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row.customerName : '');
    const rowSell = (row.infoSell !== undefined && !isNaN(row.infoSell)) ? parseFloat(row.infoSell) : (parseFloat(row.subTotal) || 0);
    const rowCost = (row.infoCost !== undefined && !isNaN(row.infoCost)) ? parseFloat(row.infoCost) : (row.items || []).reduce((sum, item) => sum + ((parseFloat(item.itemOut !== undefined ? item.itemOut : item.itemQty || 0) * parseFloat(item.itemCost !== undefined ? item.itemCost : (item.costPrice || item.itemCostPrice || 0))) || 0), 0);
    const rowRevenue = rowSell - rowCost;
    const laborFees = parseFloat(row.totalLaborFeesGenerale) || 0;

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
            {`M-${row.serviceNumber || (row.maintenanceNumber || '').replace(/\D/g, '')}`}
          </TableCell>
          <TableCell component="th" scope="row">
            {dayjs(row.serviceDate).format('DD-MMMM-YYYY')}
          </TableCell>
          <TableCell align="left">{customerDisplayName}</TableCell>
          <TableCell align="left">{row.defectDescription || row.defect || ''}</TableCell>
          <TableCell align="right">$ {rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {rowRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
          <TableCell align="right">$ {laborFees.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span></span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Item Details & Labor
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Item</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Description</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Discount</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total Sell</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Qty Out</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Rate Cost</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (row.items || []).map((Item, i) => {
                        const itQty = parseFloat(Item.itemQty) || 0;
                        const itRate = parseFloat(Item.itemRate) || 0;
                        const itAmount = parseFloat(Item.itemAmount) || (itQty * itRate) || 0;
                        const itOut = parseFloat(Item.itemOut !== undefined ? Item.itemOut : Item.itemQty) || 0;
                        const itCost = parseFloat(Item.itemCost !== undefined ? Item.itemCost : (Item.costPrice || Item.itemCostPrice)) || 0;
                        return (
                          <tr key={Item.idRow || i}>
                            {
                              Item.newDescription !== undefined ?
                                (
                                  <>
                                    <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={9}>{Item.newDescription}</td>
                                  </>
                                )
                                :
                                (
                                  <>
                                    <td style={{ border: '1px solid #DDD' }}> <span>{Item.itemName?.itemName ? Item.itemName.itemName.toUpperCase() : (typeof Item.itemName === 'string' && Item.itemName !== 'empty' ? Item.itemName.toUpperCase() : '')}</span></td>
                                    <td style={{ border: '1px solid #DDD', width: '180px' }}>{Item.itemDescription || ''}</td>
                                    <td style={{ border: '1px solid #DDD' }}>{itQty} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{itRate.toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>% </span><span>{Item.itemDiscount || 0}</span></td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{itAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                    <td style={{ border: '1px solid #DDD' }}>{itOut} </td>
                                    <td style={{ border: '1px solid #DDD' }}> <span data-prefix>$ </span>{itCost.toFixed(2)}</td>
                                    <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span><span id='totalItemService'>{(itOut * itCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  </>
                                )
                            }
                          </tr>
                        )
                      }
                      )
                    }
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={3}></td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Sell</td>
                      <td style={{ border: '1px solid #DDD' }}>${rowSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Cost</td>
                      <td style={{ border: '1px solid #DDD' }} ><span data-prefix>$ </span>{rowCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}></td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Labor Fees</td>
                      <td style={{ border: '1px solid #DDD' }} >Qty: {row.laborQty !== undefined ? row.laborQty : 0}</td>
                      <td style={{ border: '1px solid #DDD' }} >Rate: ${(parseFloat(row.adjustmentNumber) || 0).toFixed(2)}</td>
                      <td style={{ border: '1px solid #DDD' }} >Disc: {row.laborDiscount || 0}%</td>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total: ${(parseFloat(row.totalLaborFeesGenerale) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                    <th colSpan={2} style={{ backgroundColor: '#093170', color: '#ffffff', padding: '9px 14px', fontSize: '13.5px', fontWeight: 'bold', textAlign: 'left', letterSpacing: '0.3px' }}>Statement of Accounts - Maintenance Operations</th>
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
                    <td colSpan={2} style={{ backgroundColor: '#e8f7fe', color: '#0369a1', padding: '7px 14px', fontSize: '12.5px', fontWeight: 'bold', borderBottom: '1px solid #bae6fd', textAlign: 'left' }}>Maintenance Summary</td>
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
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'left' }}><span style={{ fontWeight: 500, color: '#334155' }}>Total Revenue</span></td>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', borderBottom: '1px solid #f1f5f9', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Revenue' || infoOptions === 'All') && (
                          <span style={{ fontWeight: 700, color: '#093170' }}>{`$${(TotalPayRoll || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
                        )
                      }</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', textAlign: 'left' }}><span style={{ fontWeight: 500, color: '#334155' }}>Total Labor</span></td>
                    <td style={{ backgroundColor: 'white', padding: '7px 14px', textAlign: 'right' }}>
                      {
                        (infoOptions === 'Labor' || infoOptions === 'All') && (
                          <span style={{ fontWeight: 600, color: '#059669' }}>{`$${(TotalPayment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
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
                      {FilterMaintenanceRevenue.map((row) => (
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
                      {FilterMaintenanceRevenue.map((row) => (
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
              infoOptions === 'Labor' && (
                <TableContainer >
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Defect Description</TableCell>
                        <TableCell align="right">Labor Qty</TableCell>
                        <TableCell align="right">Rate</TableCell>
                        <TableCell align="right">Discount</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterMaintenanceRevenue.map((row) => (
                        <TableRow key={row._id}>
                          <TableCell>{row.serviceNumber}</TableCell>
                          <TableCell>{dayjs(row.serviceDate).format('DD-MMMM-YYYY')}</TableCell>
                          <TableCell>{row?.customerName?.Customer || row?.customerName?.customerName || (typeof row?.customerName === 'string' ? row?.customerName : '')}</TableCell>
                          <TableCell>{row.defectDescription}</TableCell>
                          <TableCell align="right">{row.laborQty !== undefined ? row.laborQty : 0}</TableCell>
                          <TableCell align="right"><span data-prefix>$ </span>{(parseFloat(row.adjustmentNumber) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                          <TableCell align="right"><span data-prefix>% </span>{row.laborDiscount !== undefined ? (parseFloat(row.laborDiscount) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                          <TableCell align="right"><span data-prefix>$ </span>{row.totalLaborFeesGenerale !== undefined ? (parseFloat(row.totalLaborFeesGenerale) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={6}></TableCell>
                        <TableCell >Total Labor</TableCell>
                        <TableCell ><span >{`$${(TotalPayment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></TableCell>
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
                      {FilterMaintenanceRevenue.map((row) => (
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
            {
              infoOptions === 'All' && (
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
                        <TableCell align="right">LaborFees</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {FilterMaintenanceRevenue.map((row) => (
                        <Row4 key={row._id} row={row} />
                      ))}
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

export default MaintenanceReportInfo
