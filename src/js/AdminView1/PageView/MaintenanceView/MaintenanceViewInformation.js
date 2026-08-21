import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import React, { useEffect, useState, useRef, useMemo } from 'react';
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
import { cachedGet } from '../../../utils/apiCache';
import { ENDPOINT_URL } from '../../../apiConfig';
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
import Logout from '../../../component/NetworkLogoutIcon';
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
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])

  const MaintenanceInfoU = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.editM === true);

  const [maintenance, setMaintenance] = useState([]);
  const [quotation, setQuotation] = useState([]);
  const [item, SetItems] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [itemOut, setItemOut] = useState([]);
  const [itemReturn, setItemReturn] = useState([]);
  const [planingInfo, setPlaningInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resM, resI, resSingle, resEstimate] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/maintenance?summary=true`),
          axios.get(`${ENDPOINT_URL}/item`),
          axios.get(`${ENDPOINT_URL}/get-maintenance/${id}`),
          axios.get(`${ENDPOINT_URL}/estimation?summary=true`)
        ]);

        const allMaintenance = resM.data.data;
        setMaintenance(allMaintenance.sort((a,b) => b.serviceNumber - a.serviceNumber));
        SetItems(resI.data.data);

        // Process single maintenance record data
        const maintenanceData = resSingle.data.data;
        let refName = '';
        if (maintenanceData) {
          refName = maintenanceData.ReferenceName || '';
          setReferenceName(refName);
          setCustomerName1(maintenanceData.customerName?.customerName?.replace(/\s+/g, '_').replace(/\./g, '') || "");
          setServiceNumber(maintenanceData.serviceNumber || 0);
          setItem(maintenanceData.items || []);

          const sellTotal = parseFloat(maintenanceData.subTotal || 0).toFixed(2);
          setTotalSell(sellTotal);
          
          const allEstimations = resEstimate.data?.data || [];
          setQuotation(allEstimations.filter(row => row._id === refName || row.ReferenceName === maintenanceData._id));
        }

        try {
          // Attempt to fetch optimized specific data
          const resRelated = await axios.get(`${ENDPOINT_URL}/get-maintenance-related-info/${id}`);
          const relatedData = resRelated.data.data;
          
          setItemOut(relatedData.itemOuts.map((row) => ({ ...row, outNumber: `O-${String(row.outNumber).padStart(6, '0')}`, type: 'Item Out' })));
          setItemReturn(relatedData.itemReturns.map((row) => ({ ...row, outNumber: `R-${String(row.outNumber).padStart(6, '0')}`, type: 'Item return' })));
          
          const resultPlaning = relatedData.planings.map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber || 0).toFixed(2)
          }));
          setPlaningInfo(resultPlaning);

          const filteredInvoice = relatedData.invoices.filter((row) => row.invoiceName === refName);
          const filteredInvoice2 = relatedData.invoices.filter((row) => row.ReferenceName === id);
          setInvoice(filteredInvoice);
          setInvoice2(filteredInvoice2);

          setComments(relatedData.comments.reverse());
          setNotification(relatedData.notifications);
        } catch(fallbackError) {
          // Fallback to old massive data fetch if endpoint not found yet
          const [resIO, resIR, resP, resInvoice, resComment, resNotification] = await Promise.all([
            axios.get(`${ENDPOINT_URL}/itemOut`),
            axios.get(`${ENDPOINT_URL}/itemReturn`),
            axios.get(`${ENDPOINT_URL}/planing`),
            axios.get(`${ENDPOINT_URL}/invoice?summary=true`),
            axios.get(`${ENDPOINT_URL}/comment`),
            axios.get(`${ENDPOINT_URL}/notification`)
          ]);

          setItemOut(resIO.data?.data?.filter((row) => row.reference?._id === id).map((row) => ({ ...row, outNumber: `O-${String(row.outNumber).padStart(6, '0')}`, type: 'Item Out' })));
          setItemReturn(resIR.data?.data?.filter((row) => row.reference?._id === id).map((row) => ({ ...row, outNumber: `R-${String(row.outNumber).padStart(6, '0')}`, type: 'Item return' })));

          const resultPlaning = resP.data?.data?.filter((row) => row.projectName !== undefined && row.projectName?._id === id)
            .map((row) => ({
              ...row,
              totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber || 0).toFixed(2)
            }));
          setPlaningInfo(resultPlaning);

          const allInvoices = resInvoice.data.data;
          const filteredInvoice = allInvoices.filter((row) => row.invoiceName === refName);
          const filteredInvoice2 = allInvoices.filter((row) => row.ReferenceName === id);
          setInvoice(filteredInvoice);
          setInvoice2(filteredInvoice2);

          const filteredComments = resComment.data?.data?.filter((row) => row.CommentInfo.idInfo === id);
          setComments(filteredComments.reverse());
          setNotification(resNotification.data?.data?.filter((row) => row.idInfo === id));
        }

        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    };
    fetchData();
  }, [id]);
  const [referenceName, setReferenceName] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalSell, setTotalSell] = useState(0);
  const [customerName1, setCustomerName1] = useState("");
  const [serviceNumber, setServiceNumber] = useState(0);
  const [items, setItem] = useState([]);
  {/** planing start */ }
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

  const totalAmount2 = useMemo(() => Object.keys(planingObject).map((row) => planingObject[row]), [planingObject]);
  const [totalAmountPlaning, setTotalAmountPlaning] = useState(0);

  useEffect(() => {
    const totalPayRoll = totalAmount2?.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll)
  }, [totalAmount2])

  {/** planing end */ }

  useEffect(() => {
    if (items.length > 0) {
      const totalInfo = items.map((row) => ({
        total: parseFloat(row.itemOut || 0) * parseFloat(row.itemCost || 0)
      }));

      const costInfo = totalInfo.reduce((sum, row) => sum + row.total, 0);
      const totalCostInfo = Number(totalAmountPlaning || 0) + Number(costInfo);
      setTotalCost(totalCostInfo.toFixed(2));
    } else {
      setTotalCost(Number(totalAmountPlaning || 0).toFixed(2));
    }
  }, [items, totalAmountPlaning]);

  {/** Item out sync start */ }
  const itemMap = useMemo(() => {
    const map = {};
    item.forEach(i => { map[i._id] = i; });
    return map;
  }, [item]);

  const related = useMemo(() => {
    if (itemOut.length === 0) return null;
    return itemOut.reduce((acc, row) => {
      (row.itemsQtyArray || []).filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
        const rawId = item.itemName?._id || item.itemName;
        const Id = rawId ? rawId.toString() : '';
        const ItemName = item.itemName?.itemName || Id;
        if (Id) {
          if (!acc[Id]) {
            acc[Id] = { ItemName, Id, total: 0 }
          }
          acc[Id].total += parseFloat(item.newItemOut)
        }
      });
      return acc
    }, {});
  }, [itemOut]);

  const relatedReturn = useMemo(() => {
    if (itemReturn.length === 0) return null;
    return itemReturn.reduce((acc, row) => {
      (row.itemsQtyArray || []).filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
        const rawId = item.itemName?._id || item.itemName;
        const Id1 = rawId ? rawId.toString() : '';
        const ItemName1 = item.itemName?.itemName || Id1;
        if (Id1) {
          if (!acc[Id1]) {
            acc[Id1] = { ItemName1, Id1, total1: 0 }
          }
          acc[Id1].total1 += parseFloat(item.newItemOut)
        }
      });
      return acc
    }, {});
  }, [itemReturn]);

  const newAllOutReturn = useMemo(() => {
    if (related === null) return null;
    return Object.values(related).map(({ ItemName, Id, total }) => {
      const related1 = relatedReturn !== null ? Object.values(relatedReturn).find(({ Id1 }) => Id1 === Id) : null
      return ({
        ItemName,
        Id,
        total: related1 ? total - related1.total1 : total
      })
    });
  }, [related, relatedReturn]);

  const relatedPurchase = useMemo(() => {
    return maintenance.filter((row) => row._id === id).map((row) => ({
      ...row,
      items: (row.items || []).map((Item) => {
        const targetId = Item.itemName?._id ? Item.itemName._id.toString() : '';
        const newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find((Item1) => Item1.Id === targetId) : null
        return ({
          ...Item,
          itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : 0
        })
      })
    }))
  }, [maintenance, id, newAllOutReturn]);

  const [synchro, setSynchro] = useState('false')
  const handleSynced = async (e) => {
    e.preventDefault();
    try {
      const updateTasks = relatedPurchase.map(async (row) => {
        const res = await axios.get(`${ENDPOINT_URL}/get-maintenance/${row._id}`);
        const currentData = res.data.data;
        const mergedItems = (currentData.items || []).map(currentItem => {
          const syncItem = row.items.find(item => item.idRow === currentItem.idRow);
          if (syncItem) {
            return { ...currentItem, itemOut: syncItem.itemOut };
          }
          return currentItem;
        });
        return axios.put(`${ENDPOINT_URL}/update-maintenance/${row._id}`, { items: mergedItems });
      });
      await Promise.all(updateTasks);
      setSynchro('true');
      handleOpen();
    } catch (error) {
      console.error('An error occurred during sync:', error);
      handleError();
    }
  }

  {/** Item Out sync end */ }


  const Gain = isNaN(totalSell - totalCost) ? 0 : parseFloat(totalSell - totalCost).toFixed(2)

  const [invoice, setInvoice] = useState([]);
  const [invoice2, setInvoice2] = useState([]);

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
    documentTitle: `M-${String(serviceNumber).padStart(6, '0')} For ${customerName1}`,
  })


  const handleOpenPrint = () => {
    handlePrint()
    setAnchorEl(null);
  };

  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);


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
      const res = await axios.post(`${ENDPOINT_URL}/create-comment/`, data)
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
    const selectedIndex = maintenance.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [maintenance, id])
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
  const newArray = useMemo(() => {
    if (search === '') return maintenance;
    const lowerSearch = search.toLowerCase();
    return maintenance.filter((row) =>
      (row.serviceName && row.serviceName.toLowerCase().includes(lowerSearch)) ||
      (row.serviceNumber && String(row.serviceNumber).includes(lowerSearch)) ||
      (row.brand && row.brand.toLowerCase().includes(lowerSearch)) ||
      (row.customerName?.customerName?.toLowerCase().includes(lowerSearch)) ||
      (row.items && row.items.some((Item) => Item.itemName && Item.itemName.itemName?.toLowerCase().includes(lowerSearch))) ||
      (row.items && row.items.some((Item) => Item.itemDescription && Item.itemDescription.toLowerCase().includes(lowerSearch)))
    );
  }, [maintenance, search]);

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
    number: `M-${String(row.serviceNumber).padStart(6, '0')}`,
    visitDate: dayjs(row.visitDate).format('DD/MM/YYYY'),
    serviceDate: dayjs(row.serviceDate).format('DD/MM/YYYY'),
    status: row.status,
  }))
  const data2 = maintenance.filter(row => row._id === id).map((row) => ({
    Customer: row.customerName?.customerName,
    Phone: row.customerName?.phone,
    Address: row.customerName?.address
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
      item: Item.itemName?.itemName,
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
    saveAs(bold, `M-${String(serviceNumber).padStart(6, '0')} for ${customerName1}.xlsx`)
  }
const Row2 = ({ totalAmountPlaning, totalAmount2 }) => {
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
};

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
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
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
                              <div style={{ height: 'calc(100vh - 170px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
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
                                  {maintenance?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.customerName?.customerName + ' | ' + row.serviceName}
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
                              <div style={{ height: 'calc(100vh - 125px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
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
                                      label={row.customerName?.customerName + ' | ' + row.serviceName}
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
                                      <Typography variant='h5'>{row.customerName?.customerName} | <span>  M-{String(row.serviceNumber).padStart(6, '0')}</span></Typography>

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
                                          <MenuItem disabled={row.status === 'Converted' && MaintenanceInfoU.length === 0}>
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
                                                <NavLink to={`/MaintenanceConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                  <span>Convert To Invoice (Again)</span>
                                                </NavLink>
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
                                              {
                                                quotation && quotation.length > 0 && (
                                                  <tbody>
                                                    {quotation.map((row) => (
                                                      <tr key={row._id}>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Date {dayjs(row.estimateDate).format('DD/MM/YYYY')}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Quotation # {(row.estimateName || row.invoiceName)?.replace(/EST\s*-?/i, 'QUO-')}</td>
                                                        <td style={{ textAlign: 'left', border: '1px solid #DDD' }}> Amount  <span>$</span> {row.totalInvoice}</td>
                                                        <td colSpan={2} style={{ textAlign: 'left', border: '1px solid #DDD' }}> Status: {row.status}</td>
                                                        <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>
                                                          <ViewTooltip>
                                                            <span>
                                                              <IconButton >
                                                                <NavLink to={`/EstimateViewAdminAll/${row._id}`} className='LinkName'>
                                                                  <span style={{ fontSize: '12px' }}>View</span>
                                                                </NavLink>
                                                              </IconButton>
                                                            </span>
                                                          </ViewTooltip>
                                                        </td>
                                                      </tr>
                                                    ))}
                                                  </tbody>
                                                )
                                              }
                                              {
                                                invoice && invoice.length > 0 && (
                                                  <tbody>
                                                    {invoice.map((row) => (
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
                                                    ))}
                                                  </tbody>
                                                )
                                              }
                                              {
                                                invoice2 && invoice2.length > 0 && (
                                                  <tbody>
                                                    {invoice2.map((row) => (
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
                                                    ))}
                                                  </tbody>
                                                )
                                              }
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
                                        <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
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
                                                <td style={{ border: '1px solid black' }}>M-{String(row.serviceNumber).padStart(6, '0')}</td>
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
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.customerName?.customerName}</td>
                                                <td style={{ border: '1px solid black' }}> Phone</td>
                                                <td style={{ border: '1px solid black', width: '100px' }}>{row.customerName?.phone}</td>
                                              </tr>
                                              <tr>
                                                <td style={{ border: '1px solid black' }}>Address</td>
                                                <td colSpan={3} style={{ border: '1px solid black' }}>{row.customerName?.address}</td>
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
                                                (row.items || []).map((Item, i) => {
                                                  const relatedUnit = itemMap[Item.itemName?._id];
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
                                                              <td style={{ border: '1px solid black' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName?.itemName?.toUpperCase() || ''}</span></td>
                                                              <td style={{ border: '1px solid black' }}>{Item.itemDescription}</td>
                                                              <td style={{ border: '1px solid black' }}>{relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''}</td>
                                                              <td style={{ border: '1px solid black' }}>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                              <td style={{ border: '1px solid black' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                                              <td style={{ border: '1px solid black' }}> <span data-prefix>% </span>{Item.itemDiscount}</td>
                                                              <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span id='totalItemService'>{Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
                                                  <Row2 totalAmountPlaning={totalAmountPlaning} totalAmount2={totalAmount2} /> :
                                                  <tr></tr>
                                              }
                                              <tr>
                                                <td style={{ border: '1px solid black', width: '100px' }} colSpan={5}>Grand Total</td>
                                                <td style={{ border: '1px solid black', width: '100px' }} colSpan={2} ><span data-prefix>$ </span>{Number(row.totalInvoice || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                                              (row.items || []).map((Item, i) => {
                                                const relatedUnit = item.find((Item1) => Item1._id === Item.itemName?._id)
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
                                                            <td style={{ border: '1px solid black' }}> <span hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>{Item.itemName?.itemName?.toUpperCase() || ''}</span></td>
                                                            <td style={{ border: '1px solid black', width: '200px' }}>{Item.itemDescription}</td>
                                                            <td style={{ border: '1px solid black' }}>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                            <td style={{ border: '1px solid black' }}> <span data-prefix>$ </span>{Item.itemRate}</td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                                                            <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span><span id='totalItemService'>{Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
                                              <td colSpan={4} style={{ border: '1px solid black' }} align="left"><span>$</span><span>{Number(totalAmountPlaning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
