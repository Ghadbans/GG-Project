import React, { useEffect, useState, useRef, useMemo } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../InvoiceView/AdminView.css'
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TableContainer, Checkbox, MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Table, TableBody, TableCell, TableRow, TableHead, Button, Menu, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import EstimateInformation from './EstimateInformation';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Image from '../../../img/images.png'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { FileCopy } from '@mui/icons-material';
import db from '../../../dexieDb';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit } from '@mui/icons-material';

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
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
const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
})); const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
function EstimateViewAdminAll() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role }));
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      }
    }
    fetchNumber()
  }, [user])

  const estimationInfoU = grantAccess.filter((row) => row.moduleName === "Estimate" && row.access.editM === true);

  const [estimate, setEstimate] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const [item, SetItems] = useState([]);

  const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/estimation';
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get(apiUrl)
          setEstimate(res.data.data);
          const resItem = await axios.get('https://gg-project-production.up.railway.app/endpoint/item')
          SetItems(resItem.data.data)
          setLoadingData(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        const offLineCustomer1 = await db.estimateSchema.toArray();
        setEstimate(offLineCustomer1)
        const offLineItem = await db.itemSchema.toArray();
        SetItems(offLineItem)
        setLoadingData(false)
      }
    }
    fetchData()
  }, [])
  const [invoice, setInvoice] = useState([]);
  const [invoice2, setInvoice2] = useState([]);
  const [purchase, setPurchase] = useState([])
  const [customerName1, setCustomerName1] = useState("");
  const [estimateNumber, setEstimateNumber1] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          const [invoiceResponse, purchaseResponse] = await Promise.all([
            axios.get('https://gg-project-production.up.railway.app/endpoint/invoice'),
            axios.get('https://gg-project-production.up.railway.app/endpoint/purchase')
          ])
          const resEst = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-estimation/${id}`)
          setCustomerName1(resEst.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
          setEstimateNumber1(resEst.data.data.estimateNumber);
          setItems(resEst.data.data.items);
          const filteredInvoice = invoiceResponse.data.data.filter((row) => row.ReferenceName === id)
          setInvoice(filteredInvoice);
          const filteredEstimate = purchaseResponse.data.data.filter((row) => row.ReferenceName === id)
          setPurchase(filteredEstimate);
        } catch (error) {
          console.log(error)
        }
      } else {
        const offLineInvoice = await db.invoiceSchema.toArray();
        const filteredInvoice = offLineInvoice.filter((row) => row.ReferenceName === id)
        setInvoice(filteredInvoice);
        const offLinePurchase = await db.purchaseSchema.toArray();
        const filteredEstimate = offLinePurchase.filter((row) => row.ReferenceName === id)
        setPurchase(filteredEstimate);
      }
    }
    fetchData()
  }, [id])
  const showDiscount = useMemo(() => {
    return items.some(item => item.itemDiscount > 0)
  }, [items])
  useEffect(() => {
    const fetchInvoice2 = async () => {
      if (purchase.length > 0) {
        if (navigator.onLine) {
          try {
            const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/invoice')
            const filteredInvoice = res.data.data.filter((row) => purchase ? purchase.find((Item) => row._id === Item.ReferenceName2) : '')
            setInvoice2(filteredInvoice);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoadingData(false)
          }
        } else {
          const offLineInvoice = await db.invoiceSchema.toArray();
          const filteredInvoice = offLineInvoice.filter((row) => purchase ? purchase.find((Item) => row._id === Item.ReferenceName2) : '')
          setInvoice2(filteredInvoice);
        }
      }
    }
    fetchInvoice2()
  }, [purchase])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'EST-00' + estimateNumber + ' For ' + customerName1,
    onBeforeGetContent: () => {
      const PAGE_HEIGHT = 1045;
      const printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height")
        const height = printElement.clientHeight
        const numberOfPage = Math.ceil(height / PAGE_HEIGHT)
        if (numberOfPage > 1) {
          const heightWithSingleHeader = numberOfPage * PAGE_HEIGHT
          let requiredHeight = heightWithSingleHeader
          const headerHeight = printElement.getElementsByTagName("thead")?.[0]?.clientHeight
          const footerHeight = printElement.getElementsByTagName("tfoot")?.[0]?.clientHeight
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight)
          printElement.style.height = `${requiredHeight}px`;
        }
        printElement.classList.remove("temp-class-for-height")
      }
    },
    onAfterPrint: () => {
      const printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = `auto`
      }
    }
  })
  const handleOpenPrint = () => {
    handlePrint()
    setAnchorEl(null);
  };
  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) => {
    setShow1(e);
    setAnchorEl(null);
  }
  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://gg-project-production.up.railway.app/endpoint/notification')
        setNotification(resNotification.data.data.filter((row) => row.idInfo === id))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [id])

  const CommentInfo =
  {
    idInfo: id,
    person: user.data.userName,
    reason
  }

  {/** Loading Start */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClose = () => {
    setLoadingOpenModal(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const dateComment = dayjs(Date.now());

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-comment/', data)
      if (res) {
        setReason("");
        handleOpen();
        const newData = res.data.data
        setComments([newData, ...Comments1])
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [showRef, setShowRef] = useState(1)
  const handleShowRef = (e) => {
    setShowRef(e);
    setAnchorEl(null);
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const data0 = estimate.filter(row => row._id === id).map((row) => ({
    number: 'EST-00' + row.estimateNumber,
    invoiceDate: dayjs(row.estimateDate).format('DD/MM/YYYY'),
    customerName: row.customerName.customerName,
    Address: row.customerName.billingAddress.toUpperCase() + row.customerName.billingCity.toUpperCase(),
    status: row.status,
  }))
  const data2 = estimate.filter(row => row._id === id).map((row) => ({
    no: '',
    invoiceDate: "",
    invoiceSubject: row.estimateSubject,
    invoiceDefect: row.estimateDefect
  }))
  const data5 = items.map((Item, i) => {
    return ({
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemRate: '$' + Item.itemRate,
      itemDiscount: '%' + Item.itemDiscount,
      itemAmount: '$' + Item.itemAmount
    })
  })
  const data6 = estimate.filter(row => row._id === id).map((row, i) => {
    return ({
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Sub Total (Tax Inclusive)",
      itemAmount: '$' + row.subTotal
    })
  })
  const data9 = estimate.filter(row => row._id === id).map((row, i) => {
    return ({
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total",
      itemAmount: '$' + row.totalInvoice
    })
  })
  const data4 = estimate.filter(row => row._id === id).map((row) => ({
    noteInfo: 'Note ' + row.noteInfo,
  }))
  const data11 = estimate.filter(row => row._id === id).map((row, i) => {
    return ({
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Balance Due",
      itemAmount: '$' + row.balanceDue
    })
  })
  const data12 = estimate.filter(row => row._id === id).map((row, i) => {
    return ({
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total In Words",
      itemAmount: '$' + row.totalW
    })
  })
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    const columns1 = [
      { header: "#", key: 'number', width: 20 },
      { header: "Date", key: 'invoiceDate', width: 20 },
      { header: "Customer", key: 'customerName', width: 20 },
      { header: "Address", key: 'Address', width: 20 },
      { header: "Status", key: 'status', width: 20 },
    ];
    const columns2 = [
      { header: "", key: 'no', width: 20 },
      { header: "", key: 'invoiceDate', width: 20 },
      { header: "Subject", key: 'invoiceSubject', width: 20 },
      { header: "Defect", key: 'invoiceDefect', width: 20 },
    ];
    const columns5 = [
      { header: "#", key: 'no', width: 20 },
      { header: "Item", key: 'item', width: 20 },
      { header: "Item Description", key: 'itemDescription', width: 20 },
      { header: "Qty", key: 'itemQty', width: 20 },
      { header: "Rate", key: 'itemRate', width: 20 },
      { header: "Discount", key: 'itemDiscount', width: 20 },
      { header: "Amount", key: 'itemAmount', width: 20 }
    ];

    workSheet.addRow(columns1.map(col => col.header));
    data0.forEach(item => {
      workSheet.addRow([item.number, item.invoiceDate, item.customerName, item.Address, item.status])
    });
    workSheet.addRow([]);
    workSheet.addRow(columns2.map(col => col.header))
    data2.forEach(item => {
      workSheet.addRow([item.no, item.invoiceDate, item.invoiceSubject, item.invoiceDefect])
    });
    workSheet.addRow([]);
    workSheet.mergeCells('A8,E8')
    data4.forEach(item => {
      workSheet.addRow([item.noteInfo])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Item']);
    workSheet.addRow(columns5.map(col => col.header))
    data5.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });
    data6.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });
    data9.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });
    data11.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });
    data12.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, `${'EST-00' + estimateNumber + ' for ' + customerName1}.xlsx`)
  }
  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(sideBar && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Estimation Information
            </Typography>
            <IconButton onClick={() => navigate('/EstimateViewAdmin')}>
              <ArrowBack style={{ color: 'white' }} />
            </IconButton>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}>
            <SidebarDash />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            width: '100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 2 }} >
            {
              loadingData ? <div>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <Grid container spacing={2}>
                    {show1 === 1 ?
                      (<Grid item xs={3}>
                        <EstimateInformation onId={id} />
                      </Grid>) : ''}
                    <Grid item xs={9}>
                      <div className='itemInfoContainer2' id="myModal">
                        <div style={{ width: '100%' }}>

                          {estimate?.filter(row => row._id === id)?.map((row) => (
                            <div key={row._id}>

                              <header style={{ display: 'block', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                  <div>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{row.customerName.customerName.toUpperCase()} | {row.estimateName} </Typography>
                                  </div>
                                  <div>
                                    <Typography
                                      color={
                                        row.status === "Draft"
                                          ? "gray" : row.status === "Sent"
                                            ? "blue" :
                                            row.status === "Decline"
                                              ? "red" :
                                              row.status === "Approved"
                                                ? "#339ba5" :
                                                row.status === "Invoiced"
                                                  ? "#6a1b9a" : "black"
                                      }
                                    >
                                      {row.status}
                                    </Typography>
                                  </div>
                                  <div>
                                    <Button
                                      aria-controls={open ? 'demo-customized-menu' : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={open ? 'true' : undefined}
                                      variant="contained"
                                      disableElevation
                                      onClick={handleClick}
                                      endIcon={<KeyboardArrowDown />}
                                      sx={{
                                        bgcolor: 'gray', '&:hover': {
                                          color: 'gray',
                                          bgcolor: 'white',
                                          border: '1px solid gray',
                                        }
                                      }}
                                    >
                                      Options
                                    </Button>
                                    <Menu
                                      id="demo-customized-menu"
                                      MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                      }}
                                      anchorEl={anchorEl}
                                      open={open}
                                      onClose={handleCloseMenu}
                                      TransitionComponent={Fade}
                                    >
                                      <MenuItem disabled={row.status !== 'Draft' && estimationInfoU.length === 0 && user.data.role !== 'CEO'}>
                                        <NavLink to={`/EstimateInvoiceFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                          <EditIcon />
                                          <Typography>Edit</Typography>
                                        </NavLink>
                                      </MenuItem>
                                      <Divider />
                                      <MenuItem>
                                        <NavLink to={`/EstimateFormClone/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                          <FileCopy />
                                          <Typography>Clone</Typography>
                                        </NavLink>
                                      </MenuItem>
                                      <Divider />
                                      <MenuItem onClick={handleOpenPrint} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                        <LocalPrintshopIcon />
                                        <span>Print</span>
                                      </MenuItem>
                                      <MenuItem onClick={exportToExcel} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                        <Explicit />
                                        <span>Export to Excel</span>
                                      </MenuItem>
                                      <Divider />
                                      <MenuItem onClick={() => handleShow1(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                      <MenuItem onClick={() => handleShow1(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                      <MenuItem>
                                        {
                                          row.ReferenceName ? (
                                            <span style={{ color: 'gray' }} onClick={() => handleShowRef(2)}>Reference</span>
                                          ) : <span onClick={handleCloseMenu} style={{ color: 'gray' }}>No Related Reference</span>
                                        }
                                      </MenuItem>
                                      <Divider />
                                      <MenuItem>
                                        {
                                          row.status !== 'Converted' && (
                                            <NavLink to={`/EstimateViewConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                              <span>Convert To Invoice</span>
                                            </NavLink>
                                          )
                                        }
                                        {
                                          row.status === 'Converted' && (
                                            <span style={{ color: 'gray' }} onClick={handleCloseMenu}> Already Converted</span>
                                          )
                                        }
                                      </MenuItem>
                                      <MenuItem>
                                        {
                                          row.status !== 'Converted' && (
                                            <NavLink to={`/MakePurchaseConvertToProject/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                              <span>Convert to Project</span>
                                            </NavLink>
                                          )
                                        }
                                        {
                                          row.status === 'Converted' && (
                                            <span style={{ color: 'gray' }} onClick={handleCloseMenu}> Already Converted</span>
                                          )
                                        }
                                      </MenuItem>
                                    </Menu>
                                  </div>
                                </div>
                                {
                                  showRef === 1 ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <h4>Reference</h4>
                                        <p>
                                          {
                                            purchase ? purchase.map((row) => (
                                              <span key={row._id}> | {row.purchaseName}, {row.projectName.projectName}</span>
                                            )) : null
                                          }
                                        </p>
                                        <p>
                                          {
                                            invoice2 ? invoice2.map((row) => (
                                              <span key={row._id}> | {row.invoiceName}</span>
                                            )) : null
                                          }
                                        </p>
                                        <p>
                                          {
                                            invoice ? invoice.map((row) => (
                                              <span key={row._id}> | {row.invoiceName}</span>
                                            )) : null
                                          }
                                        </p>
                                      </div>
                                    </div>
                                  ) : (
                                    <section style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                      {
                                        showRef === 2 ? (
                                          <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px' }}>
                                            <tbody>
                                              {
                                                invoice ?
                                                  invoice.map((row) => (
                                                    <tr key={row._id}>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Date {dayjs(row.invoiceDate).format('DD/MM/YYYY')}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Invoice # {row.invoiceName}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Amount  <span>$</span> {row.totalInvoice}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Paid  <span>$</span> {row.total}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Balance  <span>$</span> {row.balanceDue}</td>
                                                      <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>
                                                        <ViewTooltip>
                                                          <span>
                                                            <IconButton >
                                                              <NavLink to={`/InvoiceViewAdminAll/${row._id}`} className='LinkName'>
                                                                <span style={{ fontSize: '12px' }}>View</span>
                                                              </NavLink>
                                                            </IconButton>
                                                          </span>
                                                        </ViewTooltip>
                                                      </td>
                                                    </tr>
                                                  ))
                                                  : null
                                              }
                                            </tbody>
                                            <tbody>
                                              {
                                                invoice2 ?
                                                  invoice2.map((row) => (
                                                    <tr key={row._id}>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Date {dayjs(row.invoiceDate).format('DD/MM/YYYY')}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Invoice # {row.invoiceName}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Amount  <span>$</span> {row.totalInvoice}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Paid  <span>$</span> {row.total}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Balance  <span>$</span> {row.balanceDue}</td>
                                                      <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>
                                                        <ViewTooltip>
                                                          <span>
                                                            <IconButton >
                                                              <NavLink to={`/InvoiceViewAdminAll/${row._id}`} className='LinkName'>
                                                                <span style={{ fontSize: '12px' }}>View</span>
                                                              </NavLink>
                                                            </IconButton>
                                                          </span>
                                                        </ViewTooltip>
                                                      </td>
                                                    </tr>
                                                  ))
                                                  : null
                                              }
                                            </tbody>
                                            <tbody>
                                              {
                                                purchase ?
                                                  purchase.map((row) => (
                                                    <tr key={row._id}>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Date {dayjs(row.purchaseDate).format('DD/MM/YYYY')}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Purchase # {row.purchaseName}</td>
                                                      <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Purchase Cost  <span>$</span> {row.purchaseAmount1}</td>
                                                      <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>
                                                        <ViewTooltip>
                                                          <span>
                                                            <IconButton >
                                                              <NavLink to={`/PurchasesViewAdminAll/${row._id}`} className='LinkName'>
                                                                <span style={{ fontSize: '12px' }}>View</span>
                                                              </NavLink>
                                                            </IconButton>
                                                          </span>
                                                        </ViewTooltip>
                                                      </td>
                                                    </tr>
                                                  ))
                                                  : null
                                              }
                                            </tbody>
                                          </table>
                                        ) : ''
                                      }
                                      <ViewTooltip title="Close" placement='bottom'>
                                        <IconButton onClick={() => handleShowRef(1)} style={{ position: 'relative', float: 'right' }}>
                                          <Close style={{ color: '#202a5a' }} />
                                        </IconButton>
                                      </ViewTooltip>
                                    </section>
                                  )
                                }
                              </header>
                              <hr />
                              {/*Start Invoice details */}
                              <div style={{ height: '500px', overflow: 'hidden', overflowY: 'scroll', width: '100%', background: 'white' }}>
                                <Box hidden>
                                  <table ref={componentRef} className='invoicedetails'>
                                    <thead>
                                      <tr>
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th style={{ borderBottom: '1px solid black' }}>
                                          <div className='invoiceTest'>
                                            <span>
                                              <img src={Image} />
                                            </span>
                                            <address style={{ textAlign: 'right', fontSize: '70%', marginTop: '10px' }}>
                                              <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                              <p style={{ fontWeight: 'normal' }}>RCM CD/KWZ/RCCM/22-B-00317 <br />
                                                ID NAT 14-H5300N11179P <br />
                                                AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br />
                                                KOLWEZI LUALABA <br />
                                                DR CONGO </p>
                                            </address>
                                          </div>
                                        </th>
                                      </tr>
                                    </tbody>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div>
                                            <p className='invoicehr'>ESTIMATE</p>
                                            <div className='content' style={{ marginBottom: '20px', position: 'relative' }}>
                                              <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                                                  <p >
                                                    <span style={{ fontSize: '10px' }}>Bill To</span> <br />
                                                    <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{row.customerName.customerName.toUpperCase()}</span>
                                                    <br />
                                                    <span style={{ fontSize: '10px' }}>{row.customerName.billingAddress.toUpperCase()},{row.customerName.billingCity.toUpperCase()}</span>
                                                  </p>

                                                </address>

                                                <table className="firstTable" style={{ position: 'relative', fontSize: '80%', left: '83px', marginBottom: '5px' }}>
                                                  <tbody>
                                                    <tr>
                                                      <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Estimate #</span></th>
                                                      <td style={{ backgroundColor: 'white', border: 'none' }}><span >E-00{row.estimateNumber}</span></td>
                                                    </tr>
                                                    <tr>
                                                      <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                                                      <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(row.estimateDate).format('DD/MM/YYYY')}</span></td>
                                                    </tr>
                                                    {row.estimateSubject === '' ? <tr></tr> : (<tr>
                                                      <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Subject</span></th>
                                                      <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.estimateSubject.toUpperCase()}</span></td>
                                                    </tr>)}
                                                    {row.estimateDefect === '' ?
                                                      <tr>

                                                      </tr> : (<tr>
                                                        <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Defect</span></th>
                                                        <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.estimateDefect.toUpperCase()}</span></td>
                                                      </tr>)}
                                                  </tbody>
                                                </table>
                                              </section>
                                              <section style={{}}>
                                                {
                                                  row.noteInfo !== undefined ?
                                                    <table style={{ position: 'relative', fontSize: '70%', float: 'left', left: '0', width: '50%', marginBottom: '5px' }}>
                                                      <tbody>
                                                        <tr>
                                                          <th>Note</th>
                                                          <td>{row.noteInfo !== undefined ? row.noteInfo : ''}</td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    : ''
                                                }
                                                <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                                  <thead>
                                                    <tr>
                                                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                      <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Item</th>
                                                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                                      <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Qty</th>
                                                      <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Rate</th>
                                                      {showDiscount && <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Discount</th>}
                                                      <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Total</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {row.items?.map((Item, i) => {
                                                      const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
                                                      return (
                                                        <tr key={Item.idRow} >
                                                          {
                                                            Item.itemDescription !== 'Labor Fees' ? (
                                                              <>
                                                                {
                                                                  Item.newDescription !== undefined ?
                                                                    (
                                                                      <>
                                                                        <td style={{ textAlign: 'center' }}><span>{i + 1}</span></td>
                                                                        <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={6}>{Item.newDescription}</td>
                                                                      </>
                                                                    )
                                                                    :
                                                                    (
                                                                      <>
                                                                        <td style={{ textAlign: 'center', width: '30px' }}><span>{i + 1}</span></td>
                                                                        <td style={{ width: '200px', borderLeft: '1px solid #DDD' }} ><span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                                                        <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}><span>{Item.itemDescription.toUpperCase()}</span></td>
                                                                        <td style={{ textAlign: 'right', width: '30px', borderLeft: '1px solid #DDD' }}><span>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                                                                        <td style={{ textAlign: 'right', width: '80px', borderLeft: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                                                                        {showDiscount && <td style={{ textAlign: 'right', borderLeft: '1px solid #DDD' }}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                                                                        <td style={{ textAlign: 'right', width: '100px', borderLeft: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                                      </>
                                                                    )
                                                                }
                                                              </>
                                                            ) : <>
                                                              <td style={{ textAlign: 'center', borderLeft: '1px solid #DDD' }}><span>{i + 1}</span></td>
                                                              <td style={{ textAlign: 'left', border: '1px solid #DDD' }} colSpan={showDiscount ? 5 : 4}><span>{Item.itemDescription}</span></td>
                                                              <td style={{ textAlign: 'right', border: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemAmount}</span></td>
                                                            </>
                                                          }
                                                        </tr>
                                                      )
                                                    }
                                                    )}
                                                  </tbody>
                                                </table>
                                                <table style={{ fontSize: '80%', pageBreakInside: 'avoid', pageBreakInside: 'avoid' }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th></th>
                                                      <th></th>
                                                      <th></th>
                                                      <th></th>
                                                      <th></th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}>{row.note}</td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}>
                                                        <span>
                                                          Sub Total
                                                          <br />
                                                          <span style={{ color: 'gray' }}>(Tax Inclusive)</span>
                                                        </span>
                                                      </td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.subTotal}</span></td>
                                                    </tr>
                                                    {
                                                      row.shipping ?
                                                        (
                                                          <tr>
                                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Shipping</span></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                          </tr>
                                                        )
                                                        : ''
                                                    }
                                                    {
                                                      row.adjustmentNumber ?
                                                        (
                                                          <tr>
                                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>{row.adjustment}</span></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                          </tr>
                                                        )
                                                        : ''
                                                    }
                                                    <tr>
                                                      <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Total</span></td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</span></td>
                                                    </tr>
                                                    {
                                                      row.total ?
                                                        (
                                                          <tr>
                                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid</span></td>
                                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                          </tr>
                                                        )
                                                        : ''
                                                    }
                                                    <tr>
                                                      <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span>Balance Due</span></td>
                                                      <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span data-prefix>$</span><span>{row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                      <td style={{ textAlign: 'center' }} colSpan={2}><span>Total In Words</span></td>
                                                      <td style={{ textAlign: 'left', width: '150px' }} colSpan={2}><span>{row.totalW}</span></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <address style={{ float: 'left', fontSize: '70%', textAlign: 'left' }}>
                                                  <p style={{ lineHeight: '14px', fontWeight: 'bold' }}>
                                                    Bank: SOFIBANQUE SA <br />
                                                    Entitled: GLOBAL GATE SARL<br />
                                                    Bank Account: 00023233330214247020073<br />
                                                    Code Swift: SFBXCDKIXXX
                                                  </p>
                                                  <p style={{ fontWeight: 'bold' }}>Terms & Conditions </p>
                                                  <p>{row.terms.toUpperCase()}</p>
                                                </address>
                                              </section>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                      <tr>
                                        <td>
                                          <div style={{ position: 'relative', marginTop: '20px' }}>
                                            <p hidden>...</p>
                                            <p hidden>...</p>
                                            <br />
                                            <section style={{ position: 'fixed', bottom: 0, left: 0, right: 0, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                              <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                <span><EmailIcon /></span>
                                                <span>contact@globalgate.sarl</span>
                                              </p>
                                              <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                <span><PhoneIcon /></span>
                                                <span>+243 827 722 222</span>
                                              </p>
                                              <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                <span><WebIcon /></span>
                                                <span>www.GlobalGate.sarl</span>
                                              </p>
                                            </section>

                                          </div>
                                        </td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </Box>
                                <div className='invoicedetails'>
                                  <header className='invoiceTest'>
                                    <span>
                                      <img src={Image} />
                                    </span>
                                    <address style={{ textAlign: 'right' }}>
                                      <p style={{ fontWeight: 'bold' }}>RCM CD/KWZ/RCCM/22-B-00317 </p>
                                      <p> ID NAT 14-H5300N11179P </p>
                                      <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
                                      <p>  KOLWEZI LUALABA </p>
                                      <p>   DR CONGO </p>
                                    </address>
                                  </header>
                                  <hr /><p className='invoicehr'>ESTIMATE</p>
                                  <article>
                                    <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                      <address style={{ lineHeight: 1.35, width: '60%', marginBottom: '5px' }}>
                                        <p >Bill To<br />
                                          <span style={{ fontWeight: 'bold' }}>{row.customerName.customerName.toUpperCase()}</span>
                                          <br />
                                          {row.customerName.billingAddress.toUpperCase()},{row.customerName.billingCity.toUpperCase()}
                                        </p>
                                      </address>

                                      <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '5px' }}>
                                        <tbody>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Estimate #</span></th>
                                            <td style={{ backgroundColor: 'white', border: 'none' }}><span >E-00{row.estimateNumber}</span></td>
                                          </tr>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                                            <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(row.estimateDate).format('DD/MM/YYYY')}</span></td>
                                          </tr>
                                          {row.estimateSubject === '' ? <tr></tr> : (<tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Subject</span></th>
                                            <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.estimateSubject.toUpperCase()}</span></td>
                                          </tr>)}
                                          {row.estimateDefect === '' ? <tr>

                                          </tr> : (<tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Defect</span></th>
                                            <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.estimateDefect.toUpperCase()}</span></td>
                                          </tr>)}
                                        </tbody>
                                      </table>
                                    </section>
                                    <section>
                                      {
                                        row.noteInfo !== undefined ?
                                          <table style={{ position: 'relative', fontSize: '70%', float: 'left', left: '0', width: '50%', marginBottom: '5px' }}>
                                            <tbody>
                                              <tr>
                                                <th style={{ textAlign: 'left', width: '30px' }}>Note</th>
                                                <td style={{ textAlign: 'left' }}>{row.noteInfo}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          : ''
                                      }
                                      <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                        <thead>
                                          <tr>
                                            <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                            <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Item</th>
                                            <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                            <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Qty</th>
                                            <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Rate</th>
                                            {showDiscount && <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Discount</th>}
                                            <th style={{ textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Total</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {row.items?.map((Item, i) => {
                                            const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
                                            return (
                                              <tr key={Item.idRow} >
                                                {
                                                  Item.itemDescription !== 'Labor Fees' ? (
                                                    <>
                                                      {
                                                        Item.newDescription !== undefined ?
                                                          (
                                                            <>
                                                              <td style={{ textAlign: 'center' }}><span>{i + 1}</span></td>
                                                              <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={6}>{Item.newDescription}</td>
                                                            </>
                                                          )
                                                          :
                                                          (
                                                            <>
                                                              <td style={{ textAlign: 'center', width: '30px' }}><span>{i + 1}</span></td>
                                                              <td style={{ width: '200px', borderLeft: '1px solid #DDD' }} ><span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                                              <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}><span>{Item.itemDescription.toUpperCase()}</span></td>
                                                              <td style={{ textAlign: 'right', width: '30px', borderLeft: '1px solid #DDD' }}><span>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                                                              <td style={{ textAlign: 'right', width: '80px', borderLeft: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                                                              {showDiscount && <td style={{ textAlign: 'right', borderLeft: '1px solid #DDD' }}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                                                              <td style={{ textAlign: 'right', width: '100px', borderLeft: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </>
                                                          )
                                                      }
                                                    </>
                                                  ) : <>
                                                    <td style={{ textAlign: 'center', borderLeft: '1px solid #DDD' }}><span>{i + 1}</span></td>
                                                    <td style={{ textAlign: 'left', border: '1px solid #DDD' }} colSpan={showDiscount ? 5 : 4}><span>{Item.itemDescription}</span></td>
                                                    <td style={{ textAlign: 'right', border: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemAmount}</span></td>
                                                  </>
                                                }
                                              </tr>
                                            )
                                          }
                                          )}
                                        </tbody>
                                      </table>
                                      <table style={{ fontSize: '70%', pageBreakInside: 'avoid', pageBreakInside: 'avoid' }}>
                                        <thead>
                                          <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}>{row.note}</td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}>
                                              <span>
                                                Sub Total
                                                <br />
                                                <span style={{ color: 'gray' }}>(Tax Inclusive)</span>
                                              </span>
                                            </td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.subTotal}</span></td>
                                          </tr>
                                          {
                                            row.shipping ?
                                              (
                                                <tr>
                                                  <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Shipping</span></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                </tr>
                                              )
                                              : ''
                                          }
                                          {
                                            row.adjustmentNumber ?
                                              (
                                                <tr>
                                                  <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>{row.adjustment}</span></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                </tr>
                                              )
                                              : ''
                                          }
                                          <tr>
                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Total</span></td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</span></td>
                                          </tr>
                                          {
                                            row.total ?
                                              (
                                                <tr>
                                                  <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid</span></td>
                                                  <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                </tr>
                                              )
                                              : ''
                                          }
                                          <tr>
                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span>Balance Due</span></td>
                                            <td style={{ textAlign: 'right', borderBottom: '1px solid #DDD', color: '#093170', fontWeight: 'bold' }} colSpan={2}><span data-prefix>$</span><span>{row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</span></td>
                                          </tr>
                                          <tr>
                                            <td style={{ textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                            <td style={{ textAlign: 'center' }} colSpan={2}><span>Total In Words</span></td>
                                            <td style={{ textAlign: 'left', width: '150px' }} colSpan={2}><span>{row.totalW}</span></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style={{ position: 'relative', marginTop: '-50px', fontSize: '80%' }} >
                                        <tbody>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              Bank
                                            </th>
                                            <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              SOFIBANQUE SA
                                            </td>
                                          </tr>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              Entitled
                                            </th>
                                            <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              GLOBAL GATE SARL
                                            </td>
                                          </tr>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', width: '100px', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              Bank Account
                                            </th>
                                            <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              00023233330214247020073
                                            </td>
                                          </tr>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              Code Swift
                                            </th>
                                            <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              SFBXCDKIXXX
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style={{ fontSize: '80%' }}>
                                        <tbody>
                                          <tr>
                                            <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                              Terms & Conditions
                                            </th>
                                          </tr>
                                          <tr>
                                            <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}>
                                              {
                                                row.terms.toUpperCase()
                                              }
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </section>
                                  </article>
                                  <span className='footerinvoice'>
                                    <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                      <span><EmailIcon /></span>
                                      <span>Global@gmail.com</span>
                                    </p>
                                    <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                      <span><PhoneIcon /></span>
                                      <span>+243 827722222</span>
                                    </p>
                                    <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                      <span><WebIcon /></span>
                                      <span>www.GlobalGate.sarl</span>
                                    </p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}

                        </div>
                      </div>
                    </Grid>
                    {show1 === 2 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>COMMENTS</p>
                              <ViewTooltip title="Close" placement='left'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </div>
                            <form onSubmit={handleSubmitEdit}>
                              <Grid container style={{ alignItems: 'center' }} spacing={1}>
                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    id='comments'
                                    name='comments'
                                    multiline
                                    rows={4}
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value.toUpperCase())}
                                    label='Comments'
                                    sx={{ width: '100%', backgroundColor: 'white' }}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>Save</button>
                                </Grid>
                              </Grid>

                            </form>
                            <hr />
                          </div>
                          <div style={{ height: '355px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  {Comments1.map((Item) => (
                                    <tr key={Item._id}>
                                      <td style={{ width: '100%', borderBottom: '1px solid black' }}>
                                        {Item.dateComment ? dayjs(Item.dateComment).format('DD/MM') : ''} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Grid> : ""}
                    {show1 === 3 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>HISTORY</p>
                              <ViewTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </div>
                            <br />

                          </div>
                          <div style={{ height: '518px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
                              {
                                notification.map((row) => (
                                  <p key={row._id}>
                                    <span>{row.person + ' on ' + dayjs(row.dateNotification).format('DD/MMMM')}: {row.reason}</span>
                                  </p>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </Grid> : ""}
                  </Grid>
                </div>
              )} </Container>
        </Box>
      </Box>
      <Modal
        open={loadingOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClose} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={ErrorOpenModal}
        onClose={handleCloseError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2> Data Failed to Saved</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default EstimateViewAdminAll
