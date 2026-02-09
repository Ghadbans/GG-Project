import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Tabs, Tab, Menu, Divider, Card, CardContent, colors, Collapse } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { Add, ArrowUpwardOutlined, ExitToApp, FileCopy, KeyboardArrowUp } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate, NavLink, useParams, Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import { DataGrid } from '@mui/x-data-grid';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Image from '../../../img/images.png'
import Close from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
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
const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
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
}));
const style = {
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
const palette = ['red', 'blue', 'green'];
function MaintenanceViewInformation() {
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
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/grantAccess');
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

  const MaintenanceInfoU = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.editM === true);

  const [maintenance, setMaintenance] = useState([]);
  const [maintenanceList, setMaintenanceList] = useState([]); // New state for sidebar list
  const [item, SetItems] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [itemOut, setItemOut] = useState([]);
  const [itemReturn, setItemReturn] = useState([]);
  const [planingInfo, setPlaningInfo] = useState([]);

  // Optimized Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          console.log('🔍 [FILTERED API] Fetching maintenance related data for:', id);
          // Use professional filtered endpoints (Zoho CRM approach)
          const [resItem, resItemOut, resIReturn, resPlaning] = await Promise.all([
            axios.get('https://globalgate-backend-production.up.railway.app/endpoint/item'),
            axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/itemOut/project/${id}`), // Maintenance often shares project ID
            axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/itemReturn/project/${id}`),
            axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/planing/project/${id}`)
          ]);

          SetItems(resItem.data.data)
          setItemOut(resItemOut.data.data.map((row) => ({ ...row, outNumber: "O-0" + row.outNumber, type: 'Item Out' })))
          setItemReturn(resIReturn.data.data.map((row) => ({ ...row, outNumber: "R-0" + row.outNumber, type: 'Item return' })))

          const resultPlaning = resPlaning.data.data.map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
          }))
          setPlaningInfo(resultPlaning)
          console.log('✅ [FILTERED API] Successfully loaded maintenance related data');
        } catch (error) {
          console.error('❌ [FILTERED API] Error fetching maintenance data:', error);
        }
      } else {
        // Offline logic remains the same
        const offLineItem = await db.itemSchema.toArray();
        SetItems(offLineItem)
        const outItemInfo = await db.itemOutSchema.toArray();
        setItemOut(outItemInfo.filter((row) => row.reference && row.reference._id === id).map((row) => ({ ...row, outNumber: "O-0" + row.outNumber, type: 'Item Out' })))
        const returnInfo = await db.itemReturn.toArray();
        setItemReturn(returnInfo.filter((row) => row.reference && row.reference._id === id).map((row) => ({ ...row, outNumber: "R-0" + row.outNumber, type: 'Item return' })))
        const offLineCustomer2 = await db.planingSchema.toArray();
        const resultPlaning = offLineCustomer2.filter((row) => row.projectName !== undefined && row.projectName._id === id)
          .map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
          }))
        setPlaningInfo(resultPlaning)
      }
    }
    fetchData()
  }, [id]) // Add id dependency

  // Separate Effect for Sidebar List (Non-blocking)
  useEffect(() => {
    const fetchMaintenanceList = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/maintenance');
          setMaintenanceList(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching maintenance list:', error);
        }
      }
    };
    fetchMaintenanceList();
  }, []); // Run once on mount

  const [referenceName, setReferenceName] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalSell, setTotalSell] = useState(0);
  const [customerName1, setCustomerName1] = useState("");
  const [serviceNumber, setServiceNumber] = useState(0);
  const [items, setItem] = useState([]);

  {/** planing start - Memoized */ }
  const planingObject = useMemo(() => {
    return planingInfo?.reduce((acc, item) => {
      const id = item.employeeID;
      const name = item.employeeName;
      const dayPay = item.dayPayUSd;
      if (!acc[id]) {
        acc[id] = { id, name, dayPay, workD: 0, total: 0 }
      }
      acc[id].total += parseFloat(item.totalWorkDay)
      acc[id].workD += parseFloat(item.workNumber)
      return acc
    }, {})
  }, [planingInfo]);

  const totalAmount2 = useMemo(() => Object.keys(planingObject || {}).map((row) => planingObject[row]), [planingObject]);

  const [totalAmountPlaning, setTotalAmountPlaning] = useState(0);
  useEffect(() => {
    const totalPayRoll = totalAmount2?.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll)
  }, [totalAmount2])
  {/** planing end */ }

  useEffect(() => {
    const getMaintenance = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-maintenance/${id}`)
          if (res.data && res.data.data) {
            setReferenceName(res.data.data.ReferenceName);
            setCustomerName1(res.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
            setServiceNumber(res.data.data.serviceNumber);
            setItem(res.data.data.items);

            // Use local variables for calculation to avoid multiple state updates
            const totalInfo = res.data.data.items.reduce((sum, row) => sum + (row.itemOut * row.itemCost), 0);
            const totalInfoSell = res.data.data.items.reduce((sum, row) => sum + (row.itemQty * row.itemRate), 0);

            setTotalSell(res.data.data.subTotal.toFixed(2));
            const totalCostInfo = Number(totalAmountPlaning) + Number(totalInfo)
            setTotalCost(totalCostInfo.toFixed(2))
            // Lazy Load: Show specific record immediately
            setMaintenance([res.data.data])
            setLoadingData(false)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        const resLocal = await db.maintenanceSchema.get({ _id: id })
        if (resLocal) {
          setReferenceName(resLocal.ReferenceName);
          const totalInfo = resLocal.items.reduce((sum, row) => sum + (row.itemOut * row.itemCost), 0);
          const totalInfoSell = resLocal.items.reduce((sum, row) => sum + (row.itemQty * row.itemRate), 0);
          setTotalSell(totalInfoSell.toFixed(2));
          const totalCostInfo = Number(totalAmountPlaning) + Number(totalInfo)
          setTotalCost(totalCostInfo.toFixed(2))
          setMaintenance([resLocal])
          setLoadingData(false)
        }
      }
    }
    if (id) getMaintenance()
  }, [id, totalAmountPlaning])

  {/** Item out sync start - Memoized */ }
  const related = useMemo(() => {
    return itemOut.length > 0 ? itemOut.reduce((acc, row) => {
      row.itemsQtyArray.filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
        const ItemName = item.itemName.itemName;
        const Id = item.itemName._id;
        if (!acc[ItemName]) {
          acc[ItemName] = { ItemName, Id, total: 0 }
        }
        acc[ItemName].total += parseFloat(item.newItemOut)
      });
      return acc
    }, {}) : null
  }, [itemOut]);

  const relatedReturn = useMemo(() => {
    return itemReturn.length > 0 ? itemReturn.reduce((acc, row) => {
      row.itemsQtyArray.filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
        const ItemName1 = item.itemName.itemName;
        const Id1 = item.itemName._id;
        if (!acc[ItemName1]) {
          acc[ItemName1] = { ItemName1, Id1, total1: 0 }
        }
        acc[ItemName1].total1 += parseFloat(item.newItemOut)
      });
      return acc
    }, {}) : null
  }, [itemReturn]);

  const newAllOutReturn = useMemo(() => {
    return related !== null ? Object.values(related).map(({ ItemName, Id, total }) => {
      const related1 = relatedReturn !== null ? Object.values(relatedReturn).find(({ ItemName1, Id1, total1 }) => Id1 === Id) : null
      return ({
        ItemName,
        Id,
        total: related1 ? total - related1.total1 : total
      })
    }) : null
  }, [related, relatedReturn]);

  const relatedPurchase = useMemo(() => {
    return maintenance.filter((row) => row._id === id).map((row) => ({
      ...row,
      items: row.items.map((Item) => {
        const newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find((Item1) => Item1.Id === Item.itemName._id) : null
        return ({
          ...Item,
          itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : 0
        })
      })
    }))
  }, [maintenance, id, newAllOutReturn]);

  const [synchro, setSynchro] = useState('false')
  const handleSynced = async (e) => {
    e.preventDefault()
    const updatePurchase = relatedPurchase.map((row) => {
      return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-maintenance/${row._id}`, {
        items: row.items
      })
    })
    try {
      await Promise.all(updatePurchase);
      setSynchro('true')
      handleOpen();
    } catch (error) {
      console.log('An error as occur');
    }
  }

  {/** Item Out sync end */ }


  const Gain = isNaN(totalSell - totalCost) ? 0 : parseFloat(totalSell - totalCost).toFixed(2)

  const [invoice, setInvoice] = useState([]);
  const [invoice2, setInvoice2] = useState([]);
  useEffect(() => {
    const fetchINvoice = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/invoice')
          const filteredInvoice = res.data.data.filter((row) => row.invoiceName === referenceName)
          const filteredInvoice2 = res.data.data.filter((row) => row.ReferenceName === id)
          setInvoice2(filteredInvoice2);
          setInvoice(filteredInvoice);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        const offLineCustomer1 = await db.invoiceSchema.toArray();
        const filteredInvoice = offLineCustomer1.filter((row) => row.invoiceName === referenceName)
        const filteredInvoice2 = offLineCustomer1.filter((row) => row.ReferenceName === id)
        setInvoice2(filteredInvoice2);
        setInvoice(filteredInvoice);
      }
    }
    fetchINvoice()
  }, [referenceName, id])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
    setAnchorEl(null);
  }
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'M-00' + serviceNumber + ' For ' + customerName1,
  })


  const handleOpenPrint = () => {
    handlePrint()
    setAnchorEl(null);
  };

  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/notification')
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
      const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-comment/', data)
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
  const [maintenance2, SetMaintenance2] = useState({})
  const [show2, setShow2] = useState(1);
  const handleShow2 = (e) => {
    setShow2(e);
  }
  const maintenanceFiltered = maintenance?.filter((row) => row._id === maintenance2._id)
  const [showRef, setShowRef] = useState(1)
  const handleShowRef = (e) => {
    setShowRef(e);
    setAnchorEl(null);
  }
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = maintenanceList.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [maintenanceList, id])
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue)
  }
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const newArray = search !== '' ? maintenanceList.filter((row) =>
    row.serviceName.toLowerCase().includes(search.toLowerCase()) ||
    row.brand && row.brand.toLowerCase().includes(search.toLowerCase()) ||
    row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) ||
    row.items && row.items.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
    row.items && row.items.some((Item) => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()))
  ) : maintenanceList
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('TabMaintenanceView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabMaintenanceView', changeValue)
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const data1 = maintenance.filter(row => row._id === id).map((row) => ({
    number: 'M-0' + row.serviceNumber,
    visitDate: dayjs(row.visitDate).format('DD/MM/YYYY'),
    serviceDate: dayjs(row.serviceDate).format('DD/MM/YYYY'),
    status: row.status,
  }))
  const data2 = maintenance.filter(row => row._id === id).map((row) => ({
    Customer: row.customerName.customerName,
    Phone: row.customerName.phone,
    Address: row.customerName.address
  }))
  const data3 = maintenance.filter(row => row._id === id).map((row) => ({
    itemDescriptionInfo: row.itemDescriptionInfo,
    brand: row.brand,
    serialNo: row.serialNo,
    model: row.model,
    warranty: row.warranty,
    defectDescription: row.defectDescription,
  }))
  const data4 = maintenance.filter(row => row._id === id).map((row) => ({
    action: row.action,
    actionTaken: row.actionTaken,
    note: row.note,
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
  const data6 = maintenance.filter(row => row._id === id).map((row) => ({
    no: '',
    description: 'Labor Fees',
    no1: '',
    laborQty: row.laborQty,
    adjustmentNumber: '$' + row.adjustmentNumber,
    laborDiscount: '%' + row.laborDiscount,
    totalLaborFeesGenerale: '$' + row.totalLaborFeesGenerale,
  }))
  const data7 = maintenance.filter(row => row._id === id).map((row) => ({
    no: '',
    no1: 'Total General',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    laborDiscount: '',
    totalInvoice: '$' + row.totalInvoice,
  }))

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    const columns1 = [
      { header: "#", key: 'number', width: 20 },
      { header: "Date", key: 'visitDate', width: 20 },
      { header: "Service Date", key: 'serviceDate', width: 20 },
      { header: "Status", key: 'status', width: 20 },
    ];
    const columns2 = [
      { header: "Customer", key: 'Customer', width: 20 },
      { header: "Phone", key: 'Phone', width: 20 },
      { header: "Address", key: 'Address', width: 20 },
    ];
    const columns3 = [
      { header: "Item Description", key: 'itemDescriptionInfo', width: 20 },
      { header: "Brand", key: 'brand', width: 20 },
      { header: "Serial No.", key: 'serialNo', width: 20 },
      { header: "Model", key: 'model', width: 20 },
      { header: "Warranty Status", key: 'warranty', width: 20 },
      { header: "Defect Description", key: 'defectDescription', width: 20 },
    ];
    const columns4 = [
      { header: "Action", key: 'action', width: 20 },
      { header: "Action Taken", key: 'actionTaken', width: 20 },
      { header: "Note", key: 'note', width: 20 }
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

    workSheet.addRow([]);
    workSheet.addRow(['Job Card Info']);
    workSheet.addRow(columns1.map(col => col.header));
    data1.forEach(item => {
      workSheet.addRow([item.number, item.visitDate, item.serviceDate, item.status])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Client Info']);
    workSheet.addRow(columns2.map(col => col.header))
    data2.forEach(item => {
      workSheet.addRow([item.Customer, item.Phone, item.Address])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Appliance Info']);
    workSheet.addRow(columns3.map(col => col.header))
    data3.forEach(item => {
      workSheet.addRow([item.itemDescriptionInfo, item.brand, item.serialNo, item.model, item.warranty, item.defectDescription])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Repair Details']);
    workSheet.addRow(columns4.map(col => col.header))
    data4.forEach(item => {
      workSheet.addRow([item.action, item.actionTaken, item.note])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Finance']);
    workSheet.addRow(columns5.map(col => col.header))
    data5.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount])
    });
    data6.forEach(item => {
      workSheet.addRow([item.no, item.description, item.no1, item.laborQty, item.adjustmentNumber, item.laborDiscount, item.totalLaborFeesGenerale])
    });
    data7.forEach(item => {
      workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.laborDiscount, item.totalInvoice])
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, `${'M-00' + serviceNumber + ' for ' + customerName1}.xlsx`)
  }
  function Row2(props) {
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          <td style={{ textAlign: 'left', border: '1px solid black', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <span>1</span>}
          </td>
          <td colSpan={4} align="left" style={{ textAlign: 'left', border: '1px solid black' }}>Employee</td>
          <td colSpan={4} style={{ border: '1px solid black' }} align="left"><span>$</span><span>{totalAmountPlaning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid black', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div">
                  Employee
                </Typography>
                <table style={{ marginBottom: '5px' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', border: '1px solid black' }}>Name</th>
                      <th style={{ textAlign: 'left', border: '1px solid black' }}>Days Works</th>
                      <th style={{ textAlign: 'left', border: '1px solid black' }}>Total Pay Day</th>
                      <th style={{ textAlign: 'left', border: '1px solid black' }}>Total Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      totalAmount2?.map((row, i) => (
                        <tr key={i}>
                          <td align="left" style={{ textAlign: 'left', border: '1px solid black' }}>{row.name}</td>
                          <td style={{ border: '1px solid black' }} align="left"><span></span><span>{row.workD}</span></td>
                          <td style={{ border: '1px solid black' }} align="left"><span>$</span><span>{row.dayPay?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          <td style={{ border: '1px solid black' }} align="left"><span>$</span><span>{row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </td>
        </tr>
      </React.Fragment>
    );
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
              Maintenance Information
            </Typography>
            <IconButton onClick={() => navigate('/MaintenanceViewAdmin')}>
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
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <Grid container spacing={2}>
                    {show === 1 ?
                      <Grid item xs={3}>
                        {
                          show2 === 1 ? (
                            <div className='itemInfoContainer'>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                                  <Checkbox />
                                  <Typography variant='h6'>All Service</Typography>
                                </div>
                                <div style={{ padding: '20px' }}>
                                  <p className='btnCustomer1' onClick={() => handleShow2(2)}>Filter</p>
                                </div>
                              </div>
                              <div style={{ height: '513px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value}
                                  onChange={handleChange}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: 'white',
                                      height: '0px'
                                    }
                                  }}
                                >
                                  {maintenanceList?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.customerName.customerName + ' | ' + row.serviceName}
                                      component={Link}
                                      to={`/MaintenanceViewInformation/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: 'white',
                                          backgroundColor: '#30368a',
                                          borderRadius: '10px'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }
                        {
                          show2 === 2 ? (
                            <div className='itemInfoContainer'>
                              <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                                <Grid item xs={10}>
                                  <TextField
                                    label='search'
                                    id='search'
                                    value={search}
                                    variant="standard"
                                    onChange={handleSearch}
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <ViewTooltip title="Close" placement='bottom'>
                                    <IconButton onClick={() => handleShow2(1)} style={{ position: 'relative', float: 'right' }}>
                                      <Close style={{ color: '#30368a' }} />
                                    </IconButton>
                                  </ViewTooltip>
                                </Grid>
                              </Grid>
                              <div style={{ height: '558px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value2}
                                  onChange={handleChange2}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: '#30368a'
                                    }
                                  }}
                                >
                                  {newArray?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.customerName.customerName + ' | ' + row.serviceName}
                                      component={Link}
                                      to={`/MaintenanceViewInformation/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: '#30368a'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }
                      </Grid>
                      :
                      ""}
                    <Grid item xs={9}>
                      <div className='itemInfoContainer2'>
                        <div style={{ width: '100%', background: 'white' }}>
                          {maintenance?.filter(row => row._id === id)?.map((row) => (
                            <div key={row._id} style={{ padding: '20px' }}>
                              <header style={{ display: 'block' }}>
                                {
                                  showRef === 1 ? (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                      <Typography variant='h5'>{row.customerName.customerName} | <span>  M-00{row.serviceNumber}</span></Typography>

                                      <Typography
                                        color={row.status === "Open"
                                          ? "blue" :
                                          row.status === "Pending"
                                            ? "red" :
                                            row.status === "Reschedule"
                                              ? "Orange" :
                                              row.status === "Close"
                                                ? "green" : "black"
                                        }
                                        sx={{ textAlign: 'center' }}  >
                                        {row.status}
                                      </Typography>
                                      <div>
                                        <Button
                                          aria-controls={open ? 'demo-customized-menu' : undefined}
                                          aria-haspopup="true"
                                          aria-expanded={open ? 'true' : undefined}
                                          variant="contained"
                                          disableElevation
                                          onClick={handleClick}
                                          endIcon={<KeyboardArrowDownIcon />}
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
                                          <MenuItem disabled={row.status === 'Converted' && MaintenanceInfoU.length === 0 && user.data.role !== 'CEO'}>
                                            <NavLink to={`/MaintenanceUpdateView/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                              <EditIcon />
                                              <Typography>Edit</Typography>
                                            </NavLink>
                                          </MenuItem>
                                          <Divider />
                                          <MenuItem>
                                            <NavLink to={`/MaintenanceFormClone/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
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
                                          <MenuItem onClick={() => handleShow(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                          <MenuItem onClick={() => handleShow(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
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
                                              row.status === 'Close' && row.Converted !== true && (
                                                <NavLink to={`/MaintenanceConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                  <span>Convert To Invoice</span>
                                                </NavLink>
                                              )
                                            }
                                            {
                                              row.Converted === true && (
                                                <span style={{ color: 'gray' }} onClick={handleCloseMenu}> Already Converted</span>
                                              )

                                            }
                                          </MenuItem>
                                        </Menu>
                                      </div>
                                    </div>
                                  ) : (
                                    <section>
                                      {
                                        showRef === 2 ? (
                                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Balance  <span>$</span> {row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                                                    : ''
                                                }
                                                {
                                                  invoice2 ?
                                                    invoice2.map((row) => (
                                                      <tr key={row._id}>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Date {dayjs(row.invoiceDate).format('DD/MM/YYYY')}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Invoice # {row.invoiceName}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Amount  <span>$</span> {row.totalInvoice}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Paid  <span>$</span> {row.total}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Balance  <span>$</span> {row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                                                    : ''
                                                }
                                              </tbody>
                                            </table>
                                            <ViewTooltip title="Close" placement='bottom'>
                                              <IconButton onClick={() => handleShowRef(1)} style={{ position: 'relative', float: 'right' }}>
                                                <Close style={{ color: '#202a5a' }} />
                                              </IconButton>
                                            </ViewTooltip>
                                          </div>
                                        ) : ''
                                      } </section>
                                  )
                                }
                              </header>

                              <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext
                                  value={value3}
                                >
                                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange3}
                                      aria-label="lab API tabs example"
                                      sx={{
                                        '& .MuiTabs-indicator': {
                                          backgroundColor: 'white',
                                          height: '0px'
                                        }
                                      }}
                                    >
                                      <Tab
                                        label="Overview"
                                        value="1"
                                        sx={{
                                          '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'gray',
                                            borderRadius: '10px'
                                          }, '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '10px'
                                          }
                                        }}
                                      />
                                      {
                                        user.data.role === 'CEO' && (
                                          <Tab label="Summary" value="2"
                                            sx={{
                                              '&.Mui-selected': {
                                                color: 'white',
                                                backgroundColor: 'gray',
                                                borderRadius: '10px'
                                              },
                                              '&:hover': {
                                                color: 'gray',
                                                bgcolor: 'white',
                                                border: '1px solid gray',
                                                borderRadius: '10px'
                                              }
                                            }}
                                          />
                                        )
                                      }
                                    </TabList>
                                  </Box>
                                  <TabPanel value="1" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                    <div ref={componentRef}>
                                      <Box style={{ backgroundColor: 'white', width: '100%', padding: '10px', fontSize: '90%', color: 'black' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', marginBottom: '5px' }}>
                                          <section>
                                            <img src={Image} style={{ width: '100%', height: '75px' }} />
                                          </section>
                                          <table size="small" style={{ fontSize: '10px', width: '300px' }}>
                                            <tbody>
                                              <tr>
                                                <th style={{ fontSize: '10px', height: '10px' }} align='left'>ADDRESS</th>
                                                <td style={{ fontSize: '10px', height: '10px' }}>KOLWEZI-AV SALONGO-N74</td>
                                              </tr>
                                              <tr>
                                                <th style={{ fontSize: '10px', height: '10px' }} align='left'>EMAIL</th>
                                                <td style={{ fontSize: '10px', height: '10px' }}>contact@globalgate.sarl</td>
                                              </tr>
                                              <tr>
                                                <th style={{ fontSize: '10px', height: '10px' }} align='left'>PHONE</th>
                                                <td style={{ fontSize: '10px', height: '10px' }}>00243 827 722 222 - 00243 900 172 222</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <br />
                                        <div style={{ width: '100%' }}>
                                          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '5px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ width: '100%', textAlign: 'center', border: '1px solid black' }} colSpan={4}>Job Card Info</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Maintenance Order Date</td>
                                                <td style={{ border: '1px solid black' }}>{dayjs(row.serviceDate).format('DD/MM/YYYY')}</td>
                                                <td style={{ border: '1px solid black' }}> Maintenance Order No.</td>
                                                <td style={{ border: '1px solid black' }}>M-00{row.serviceNumber}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Visit Date</td>
                                                <td style={{ border: '1px solid black' }}>{dayjs(row.visitDate).format('DD/MM/YYYY')}</td>
                                                <td style={{ border: '1px solid black' }}>status</td>
                                                <td style={{ border: '1px solid black' }}>{row.status}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br />
                                          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '5px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ width: '100%', textAlign: 'center', border: '1px solid black' }} colSpan={4}>Client Info</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td style={{ border: '1px solid black', width: '10px' }}>Customer Name</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.customerName.customerName}</td>
                                                <td style={{ border: '1px solid black' }}> Phone</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.customerName.phone}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Address</td>
                                                <td colSpan={3} style={{ border: '1px solid black' }}>{row.customerName.address}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br />
                                          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '5px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ width: '100%', textAlign: 'center', border: '1px solid black' }} colSpan={4}>Appliance Info</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Item Description</td>
                                                <td colSpan={3} style={{ border: '1px solid black' }}>{row.itemDescriptionInfo}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Brand</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.brand}</td>
                                                <td style={{ border: '1px solid black' }}> Serial No.</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.serialNo}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Model</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.model}</td>
                                                <td style={{ border: '1px solid black' }}>Warranty Status</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.warranty}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Defect Description</td>
                                                <td colSpan={3} style={{ border: '1px solid black' }}>{row.defectDescription}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br />
                                          <table style={{ width: '100%', borderCollapse: 'collapse', height: '130px', marginBottom: '5px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ width: '100%', textAlign: 'center', border: '1px solid black' }} colSpan={2}>Repair Details</th>
                                              </tr>
                                              <tr>
                                                <th style={{ border: '1px solid black', width: '20px' }}>Action</th>
                                                <td style={{ border: '1px solid black' }}>{row.action !== undefined ? row.action : ''}</td>
                                              </tr>
                                              <tr>
                                                <th style={{ border: '1px solid black' }}>Action Taken</th>
                                                <th style={{ border: '1px solid black' }}>Note</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td style={{ border: '1px solid black', width: '50%', textAlign: 'left' }}>{row.actionTaken}</td>
                                                <td style={{ border: '1px solid black', width: '50%', textAlign: 'left' }}>{row.note !== undefined ? row.note : ''}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br />
                                          <table style={{ width: '100%', borderCollapse: 'collapse', height: '130px', marginBottom: '5px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ width: '100%', textAlign: 'center', border: '1px solid black' }} colSpan={6}>Finance</th>
                                              </tr>
                                              <tr>
                                                <th style={{ textAlign: 'left', border: '1px solid black', width: '120px' }}>Parts/s Model</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black', width: '150px' }}>Description</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black' }}>Brand</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black' }}>Qty</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black' }}>Price</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black', width: '50px' }}>Discount</th>
                                                <th style={{ textAlign: 'left', border: '1px solid black', width: '100px' }}>Total</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                row.items.map((Item, i) => {
                                                  const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
                                                  return (
                                                    <tr key={Item.idRow}>
                                                      {
                                                        Item.newDescription !== undefined ?
                                                          (
                                                            <>
                                                              <td style={{ textAlign: 'center', border: '1px solid black' }} colSpan={5}>{Item.newDescription}</td>
                                                            </>
                                                          )
                                                          :
                                                          (
                                                            <>
                                                              <td style={{ border: '1px solid black' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                                              <td style={{ border: '1px solid black' }}>{Item.itemDescription}</td>
                                                              <td style={{ border: '1px solid black' }}>{relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''}</td>
                                                              <td style={{ border: '1px solid black' }}>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                              <td style={{ border: '1px solid black' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                                              <td style={{ border: '1px solid black' }}> <span data-prefix>% </span>{Item.itemDiscount}</td>
                                                              <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span id='totalItemService'>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </>
                                                          )
                                                      }
                                                    </tr>
                                                  )
                                                }
                                                )
                                              }
                                              <tr>
                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>
                                                <td style={{ border: '1px solid black' }} >{row.laborQty !== undefined ? row.laborQty : 0}</td>
                                                <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.adjustmentNumber}</td>
                                                <td style={{ border: '1px solid black' }} ><span data-prefix>% </span>{row.laborDiscount !== undefined ? row.laborDiscount : 0}</td>
                                                <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.totalLaborFeesGenerale !== undefined ? row.totalLaborFeesGenerale : 0}</td>
                                              </tr>
                                              {
                                                user.data.role === 'CEO' ?
                                                  <Row2 /> :
                                                  <tr></tr>
                                              }
                                              <tr>
                                                <td style={{ border: '1px solid black', width: '100px' }} colSpan={5}>Grand Total</td>
                                                <td style={{ border: '1px solid black', width: '100px' }} colSpan={2} ><span data-prefix>$ </span>{parseFloat(row.totalInvoice)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br />
                                        </div>
                                      </Box>
                                    </div>
                                  </TabPanel>
                                  <TabPanel value="2" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll', padding: '20px' }}>
                                    <Card sx={{ marginBottom: '15px' }}>
                                      <CardContent>
                                        <Typography sx={{ textAlign: 'center', color: 'gray' }}>Summary</Typography>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <button onClick={handleSynced} className='btnCustomer'>sync</button>
                                          <PieChart
                                            colors={palette}
                                            series={[
                                              {
                                                arcLabel: (item) => `${item.label}($${item.value})`,
                                                arcLabelMinAngle: 35,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                                data: [
                                                  {
                                                    "id": 1,
                                                    "label": "Cost",
                                                    "value": totalCost,
                                                  },
                                                  {
                                                    "id": 2,
                                                    "label": "Sell",
                                                    "value": totalSell,
                                                  },
                                                  {
                                                    "id": 3,
                                                    "label": "Gain",
                                                    "value": Gain,
                                                  }
                                                ],
                                              },

                                            ]}
                                            width={450}
                                            height={250}
                                            sx={{
                                              [`& .${pieArcLabelClasses.root}`]: {
                                                fill: 'white',
                                                fontWeight: 'bold',
                                              },
                                            }}
                                          />
                                        </div>
                                        <br />
                                        <table>
                                          <thead>
                                            <tr>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Item Name</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Description</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Qty</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Sell Rate</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Discount</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Total</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Out</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Cost Rate</th>
                                              <th style={{ textAlign: 'left', border: '1px solid black' }}>Total Cost</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {
                                              row.items.map((Item, i) => {
                                                const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
                                                return (
                                                  <tr key={Item.idRow}>
                                                    {
                                                      Item.newDescription !== undefined ?
                                                        (
                                                          <>
                                                            <td style={{ textAlign: 'center', border: '1px solid black' }} colSpan={5}>{Item.newDescription}</td>
                                                          </>
                                                        )
                                                        :
                                                        (
                                                          <>
                                                            <td style={{ border: '1px solid black' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                                                            <td style={{ border: '1px solid black', width: '200px' }}>{Item.itemDescription}</td>
                                                            <td style={{ border: '1px solid black' }}>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                            <td style={{ border: '1px solid black' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span id='totalItemService'>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            <td style={{ border: '1px solid black' }} ><span >{Item.itemOut !== undefined ? Item.itemOut : 0} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span >{Item.itemCost !== undefined ? Item.itemCost : 0}</span></td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span >{Item.itemOut !== undefined ? parseFloat(Item.itemOut * Item.itemCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>
                                                          </>
                                                        )
                                                    }
                                                  </tr>
                                                )
                                              }
                                              )
                                            }
                                            <tr>
                                              <td style={{ textAlign: 'left', border: '1px solid black', cursor: 'pointer' }} >
                                                #
                                              </td>
                                              <td colSpan={4} align="left" style={{ textAlign: 'left', border: '1px solid black' }}>Employee</td>
                                              <td colSpan={4} style={{ border: '1px solid black' }} align="left"><span>$</span><span>{totalAmountPlaning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                            </tr>
                                            <tr>
                                              <td style={{ border: '1px solid black', textAlign: 'center' }} colSpan={9}> Total Sell: (<span data-prefix>$ </span>{totalSell.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}) - Total Cost: (<span data-prefix>$ </span>{totalCost.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}) = Gain: (<span data-prefix>$ </span>{Gain.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}) </td>
                                            </tr>
                                            <tr>
                                              <td style={{ border: '1px solid black' }} colSpan={2}>Labor Fees</td>
                                              <td style={{ border: '1px solid black' }} >{row.laborQty !== undefined ? row.laborQty : 0}</td>
                                              <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.adjustmentNumber}</td>
                                              <td style={{ border: '1px solid black' }} ><span data-prefix>% </span>{row.laborDiscount !== undefined ? row.laborDiscount : 0}</td>
                                              <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.totalLaborFees !== undefined ? row.totalLaborFees : 0}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </CardContent>
                                    </Card>
                                  </TabPanel>
                                </TabContext>
                              </Box>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Grid>
                    {show === 2 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>Comments</p>
                              <p className='btnCustomer1' onClick={() => handleShow(1)}>Close</p>
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
                                    onChange={(e) => setReason(e.target.value)}
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
                          <div style={{ height: '333px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  {Comments1.map((Item) => (
                                    <tr key={Item._id}>
                                      <td style={{ width: '100%', borderBottom: '1px solid black' }}>
                                        {dayjs(Item.dateComment).format('DD/MM')} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Grid> : ""}
                    {show === 3 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>HISTORY</p>
                              <BlackTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </BlackTooltip>
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
                </div>)}
          </Container>
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
              {synchro === 'true' ? <h2> Item Out Sync successfully</h2> : <h2> Data Saved successfully</h2>}
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

export default MaintenanceViewInformation
