import React, { useEffect, useRef, useState } from 'react'
import ConfirmDeleteModal from '../component/ConfirmDeleteModal';
import { v4 } from 'uuid';
import './view.css'
import './PageView/Chartview.css';
import SideMaintenance from '../component/SideMaintenance'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Collapse, Pagination } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { invalidateCache } from '../utils/apiCache';
import Container from '@mui/material/Container';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { Add, Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import Image1 from '../img/images.png'
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import { useReactToPrint } from 'react-to-print';
import PrintHeader from '../component/PrintHeader';
import PrintFooter from '../component/PrintFooter';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

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

function ItemPurchaseViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const hasTvaValue = (item) => {
    return !!(item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA);
  };
  const getTaxValue = (item) => {
    const tax = item.tax || item.taxAmount || item.vatAmount || item.TvaAmount || item.taxUSD || 0;
    if (tax > 0) return tax;
    if (hasTvaValue(item)) {
      return (Number(item.totalUSD || item.total || item.amount || 0) * 0.16);
    }
    return 0;
  };

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
      try {
        const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])

  const PurchaseInfoC = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.createM === true);
  const PurchaseInfoV = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.viewM === true);
  const PurchaseInfoU = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.editM === true);
  const PurchaseInfoD = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  
  const [itemPurchase, setItemPurchase] = useState([]);
  const [newPurchase, setNewPurchase] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);

  // --- Partial Payment States ---
  const [openAddPayment, setOpenAddPayment] = useState(false);
  const [openPaymentHistory, setOpenPaymentHistory] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [paymentForm, setPaymentForm] = useState({
    amount: '',
    amountFC: '',
    rate: '',
    date: dayjs().format('YYYY-MM-DD'),
    mode: 'Cash',
    reference: '',
    note: ''
  });
  const [expenseNumber, setExpenseNumber] = useState(0);
  const [categories, setCategories] = useState([]);
  const [systemRate, setSystemRate] = useState(0);

  const [page, setPage] = useState(0); 
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filterField, setFilterField] = useState(''); 
  const [filterValue, setFilterValue] = useState(''); 
  const [totalPage, SetTotalPage] = useState(0);

  const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/itemPurchase-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
      const formatDate = res.data.itemI.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.itemPurchaseDate).format('DD/MM/YYYY'),
        Account: item.projectName !== undefined ? item.projectName.name : item.description,
        referenceInfo: item.manufacturer + ' / ' + item.manufacturerNumber,
        itemInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map((row) => row.itemName?.itemName || row.newDescription || ''),
        itemDescriptionInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map((row) => row.itemDescription || '')
      }));
      SetTotalPage(Math.ceil(res.data.totalItem / limit)); 
      setItemPurchase(formatDate);
      setLoadingData(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoadingData(false);
    }
  };

  const handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };

  useEffect(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, [page, searchTerm, filterField, filterValue]);

  // Fetch expense categories and last expense number for integration
  useEffect(() => {
    const fetchExpenseInfo = async () => {
      try {
        const catRes = await axios.get(`${ENDPOINT_URL}/expensesCategory`);
        setCategories(catRes.data.data);
        
        const lastExpRes = await axios.get(`${ENDPOINT_URL}/get-last-saved-expense`);
        setExpenseNumber(parseInt(lastExpRes.data?.expenseNumber || 0) + 1);

        // Fetch current exchange rate
        const rateRes = await axios.get(`${ENDPOINT_URL}/rate`);
        if (Array.isArray(rateRes?.data?.data) && rateRes.data.data.length > 0) {
          setSystemRate(rateRes.data?.data?.[0]?.rate);
        }
      } catch (error) {
        console.error('Error fetching additional info:', error);
      }
    };
    fetchExpenseInfo();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage); 
  };

  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsItemPurchase', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)
    localStorage.setItem('QuickFilterItemPurchaseTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemPurchaseTst'))
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemPurchase'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }
  }, [])

  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
  const [item, SetItems] = useState([])

  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
    setSelectedRows([]);
  };
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${idView}`)
          setItemPurchaseView(res.data.data)
          const resItem = await axios.get(`${ENDPOINT_URL}/item-Information?summary=true&limit=1000`)
          SetItems(resItem.data.itemI)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData2()
  }, [idView])

  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRows([])
  };

  const [projectName, setProjectName] = useState({});
  const [items, setItems] = useState([]);
  const [reason, setReason] = useState('');
  const [reason1, setReason1] = useState("");
  const [relatedNumber, setRelatedNumber] = useState(0);
  const [purChaseOrderId, setPurchaseOrderId] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      if (DeleteId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${DeleteId}`)
          if (res?.data?.data) {
            setProjectName(res.data.data.projectName);
            setItems(res.data.data.items);
            setReason(res.data.data.reason)
            setRelatedNumber(Number(res.data?.data?.itemPurchaseNumber || res.data?.itemPurchaseNumber || 0));
            setPurchaseOrderId(res.data.data.POID)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchId()
  }, [DeleteId])

  const [purchase, setPurchase] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        if (projectName && projectName._id) {
          const res = await axios.get(`${ENDPOINT_URL}/purchase?summary=true`)
          setPurchase(res.data?.data?.filter((row) => row.projectName?._id === projectName._id));
          const resMaintenance = await axios.get(`${ENDPOINT_URL}/maintenance?summary=true`)
          setMaintenance(resMaintenance.data?.data?.filter((row) => row._id === projectName._id));
          const resInvoice = await axios.get(`${ENDPOINT_URL}/invoice?summary=true`)
          setInvoice(resInvoice.data?.data?.filter((row) => row._id === projectName._id));
        }
      } catch (error) {
        console.error('Error fetching related modules');
      }
    }
    fetchData2()
  }, [projectName])

  const handleUpdatePurchase = async () => {
    if (!projectName?._id) return;
    
    try {
      if (reason === 'Project') {
        const resPur = await axios.get(`${ENDPOINT_URL}/purchase?summary=true`);
        const relevantPurchases = resPur.data?.data?.filter((row) => row.projectName?._id === projectName._id);
        
        for (const purchaseRow of relevantPurchases) {
          const currentRes = await axios.get(`${ENDPOINT_URL}/get-purchase/${purchaseRow._id}`);
          const currentData = currentRes.data.data;
          
          const updatedItems = currentData.items.map((Item) => {
            const RelatedItem = items.find((Item2) => (Item.itemName?._id !== undefined && Item.itemName?._id === Item2.itemName?._id) || (Item2.itemDescription === Item.itemDescription));
            if (RelatedItem) {
              const itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
              const totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
              return { ...Item, itemBuy, totalGenerale };
            }
            return Item;
          });
          
          const purchaseAmount2 = updatedItems.reduce((sum, row) => sum + (parseFloat(row.totalGenerale) || 0), 0);
          await axios.put(`${ENDPOINT_URL}/update-purchase/${purchaseRow._id}`, { items: updatedItems, purchaseAmount2 });
        }
      } else if (reason === 'Maintenance') {
        const resM = await axios.get(`${ENDPOINT_URL}/maintenance?summary=true`);
        const relevantMaintenance = resM.data?.data?.filter((row) => row._id === projectName._id);
        
        for (const maintenanceRow of relevantMaintenance) {
          const currentRes = await axios.get(`${ENDPOINT_URL}/get-maintenance/${maintenanceRow._id}`);
          const currentData = currentRes.data.data;
          
          const updatedItems = currentData.items.map((Item) => {
            const RelatedItem = items.find((Item2) => (Item.itemName?._id !== undefined && Item.itemName?._id === Item2.itemName?._id) || (Item2.itemDescription === Item.itemDescription));
            if (RelatedItem) {
              const itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
              const totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
              return { ...Item, itemBuy, totalGenerale };
            }
            return Item;
          });
          
          await axios.put(`${ENDPOINT_URL}/update-maintenance/${maintenanceRow._id}`, { items: updatedItems });
        }
      } else if (reason === 'Invoice') {
        const resI = await axios.get(`${ENDPOINT_URL}/invoice?summary=true`);
        const relevantInvoices = resI.data?.data?.filter((row) => row._id === projectName._id);
        
        for (const invoiceRow of relevantInvoices) {
          const currentRes = await axios.get(`${ENDPOINT_URL}/get-invoice/${invoiceRow._id}`);
          const currentData = currentRes.data.data;
          
          const updatedItems = currentData.items.map((Item) => {
            const RelatedItem = items.find((Item2) => (Item.itemName?._id !== undefined && Item.itemName?._id === Item2.itemName?._id) || (Item2.itemDescription === Item.itemDescription));
            if (RelatedItem) {
              const itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
              const totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
              return { ...Item, itemBuy, totalGenerale };
            }
            return Item;
          });
          
          await axios.put(`${ENDPOINT_URL}/update-invoice/${invoiceRow._id}`, { items: updatedItems });
        }
      }
    } catch (error) { 
      console.error('Error in handleUpdatePurchase (Deletion Safe Merge):', error); 
    }
  }

  const [loading, setLoading] = useState(false);
  const [modalDeleteOpenLoading, setModalDeleteOpenLoading] = useState(false);

  const handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => { setLoading(false); }, 500)
  }
  const handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    handleDeleteOpenLoading(); // Permanently disabled for instant responsiveness
  }

  const handleCreateNotification = async () => {
    const data = { person: user.data.userName + ' Deleted IP-' + relatedNumber, reason: reason1, dateNotification: new Date() }
    try { await axios.post(`${ENDPOINT_URL}/create-notification`, data) } catch (error) { console.log(error) }
  }
  const onStatusUpdate = async () => {
    if (purChaseOrderId && purChaseOrderId !== "undefined") {
      try { await axios.put(`${ENDPOINT_URL}/update-purchaseOrder/${purChaseOrderId}`, { Converted: false, IpRelated: {} }); } catch (error) { }
    }
  }
  const handleQty = async () => { try { await axios.post(`${ENDPOINT_URL}/CalculateTotal`) } catch (error) { } }

  const handleDeleteUpdate = async (e) => {
    e.preventDefault()
    try {
      // Switched to POST and sending ID in body to match new backend pattern
      const res = await axios.post(`${ENDPOINT_URL}/delete-itemPurchase`, { id: DeleteId });
      if (res) {
        // Optimistic UI: Remove the deleted row from state instantly (BEFORE long-running background tasks)
        setItemPurchase(prev => prev.filter(item => item._id !== DeleteId));
        setSelectedRows(prev => prev.filter(id => id !== DeleteId));
        
        handleDeleteOpenLoading();

        // These tasks update secondary state or trigger calculations in background
        await onStatusUpdate();
        await handleQty();
        await handleUpdatePurchase();
        await handleCreateNotification();
      }
    } catch (error) {
      console.error('Error deleting item purchase:', error);
      alert('Failed to delete item purchase. Please check the console for details.');
    } finally {
      handleCloseReasonDelete();
    }
  }

  const [updateS, setUpdateS] = useState(false);

  const handleOpenAddPayment = (purchase) => {
    setSelectedPurchase(purchase);
    const totalWithTax = parseFloat(purchase.totalUSD || purchase.total || 0);
    
    // Calculate current total paid in USD (including converted FC payments)
    const currentPaidUSD = (purchase.payments || []).reduce((sum, p) => {
      const pUSD = parseFloat(p.amount || 0);
      const pFC = parseFloat(p.amountFC || 0);
      const pRate = parseFloat(p.rate || systemRate || 1);
      return sum + pUSD + (pFC / pRate);
    }, 0);

    const remaining = Math.max(0, totalWithTax - currentPaidUSD);
    
    setPaymentForm({
      amount: remaining.toFixed(2),
      amountFC: '0',
      rate: systemRate.toString(),
      date: dayjs().format('YYYY-MM-DD'),
      mode: 'Cash',
      reference: `Payment for IP-${purchase.itemPurchaseNumber}`,
      note: ''
    });
    setOpenAddPayment(true);
  };

  const handleOpenPaymentHistory = async (purchase) => {
    setSelectedPurchase(purchase);
    setOpenPaymentHistory(true);
    // Fetch full record to get payments[] which paginated endpoint may omit
    try {
      const res = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${purchase._id}`);
      const fullData = res.data.data;
      setSelectedPurchase(prev => ({ ...prev, ...fullData, id: prev.id }));
    } catch (e) {
      // keep original data if fetch fails
    }
  };

  const handleSavePayment = async (e) => {
    e.preventDefault();
    if (!selectedPurchase) return;
    setLoading(true);

    const amountUSD = parseFloat(paymentForm.amount || 0);
    const amountFC = parseFloat(paymentForm.amountFC || 0);
    const rate = parseFloat(paymentForm.rate || systemRate || 1);
    
    // Total value of THIS payment in USD
    const thisPaymentTotalUSD = amountUSD + (amountFC / rate);

    const newPayment = {
      ...paymentForm,
      reference: paymentForm.note ? (paymentForm.reference ? `${paymentForm.reference} | Note: ${paymentForm.note}` : `Note: ${paymentForm.note}`) : paymentForm.reference,
      id: v4(),
      amount: amountUSD,
      amountFC: amountFC,
      rate: rate,
      totalUSD: thisPaymentTotalUSD // Store the converted total for easy calculation
    };

    try {
      // Fetch latest Item Purchase to avoid overwriting concurrent payments
      const currentIPRes = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${selectedPurchase._id}`);
      const latestIPData = currentIPRes.data.data;
      
      const updatedPayments = [...(latestIPData.payments || []), newPayment];
      const totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);
      
      // Calculate current total paid BEFORE this new payment
      const currentPaidUSD = (latestIPData.payments || []).reduce((sum, p) => {
        if (p.totalUSD !== undefined) return sum + p.totalUSD;
        return sum + (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)));
      }, 0);

      // VALIDATION: Prevent payment from exceeding total amount (allow $0.05 float tolerance)
      if (currentPaidUSD + thisPaymentTotalUSD > totalWithTax + 0.05) {
        alert("Error: Payment amount cannot exceed the remaining balance of this Item Purchase.");
        setLoading(false);
        return;
      }
      
      // Recalculate total paid across ALL payments using latest data
      const totalPaidUSD = updatedPayments.reduce((sum, p) => {
        if (p.totalUSD !== undefined) return sum + p.totalUSD;
        return sum + (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)));
      }, 0);
      
      let newStatus = 'UnPaid';
      if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';
      else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';

      // 1. Update Item Purchase
      const { _id, ...restData } = latestIPData;
      await axios.put(`${ENDPOINT_URL}/update-itemPurchase/${selectedPurchase._id}`, {
        ...restData,
        payments: updatedPayments,
        status: newStatus
      });

      // Clear cache so Expenses Daily Information will fetch fresh data
      invalidateCache('/itemPurchase');

      // 2. Update Local State
      setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? { ...item, status: newStatus, payments: updatedPayments } : item));
      
      setOpenAddPayment(false);
      setUpdateS(true);
      handleDeleteOpenLoading();
    } catch (error) {
      console.error('Error saving payment:', error);
      alert('Failed to save payment.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    if (!window.confirm('Are you sure you want to delete this payment record?')) return;
    setLoading(true);

    try {
      // Fetch latest Item Purchase
      const currentIPRes = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${selectedPurchase._id}`);
      const latestIPData = currentIPRes.data.data;

      const updatedPayments = (latestIPData.payments || []).filter(p => p.id !== paymentId);
      const totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);
      
      const totalPaidUSD = updatedPayments.reduce((sum, p) => {
        return sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1))));
      }, 0);

      let newStatus = 'UnPaid';
      if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';
      else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';

      const { _id, ...restData } = latestIPData;
      await axios.put(`${ENDPOINT_URL}/update-itemPurchase/${selectedPurchase._id}`, {
        ...restData,
        payments: updatedPayments,
        status: newStatus
      });

      setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? { ...item, status: newStatus, payments: updatedPayments } : item));
      setSelectedPurchase({ ...selectedPurchase, payments: updatedPayments, status: newStatus });
      
      setUpdateS(true);
      handleDeleteOpenLoading();
    } catch (error) {
      console.error('Error deleting payment:', error);
    } finally {
      setLoading(false);
    }
  };

  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => { setOpen1(!open1); };

  const columns = [
    { field: 'itemPurchaseNumber', headerName: '#', minWidth: 90, flex: 0.8, renderCell: (params) => (<div> <span>IP-0</span><span>{params.row.itemPurchaseNumber}</span> </div>) },
    { field: 'itemPurchaseDate', headerName: 'Date', minWidth: 100, flex: 1, type: 'date', valueGetter: (params) => new Date(params.row.itemPurchaseDate), renderCell: (params) => dayjs(params.row.itemPurchaseDate).format('DD/MM/YYYY') },
    { field: 'Account', headerName: 'Description', minWidth: 200, flex: 2 },
    { field: 'referenceInfo', headerName: 'Account', minWidth: 150, flex: 1.5 },
    {
      field: 'status', headerName: 'Action', minWidth: 200, flex: 1.5, renderCell: (params) => {
        const totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
        // Robust calculation of total paid in USD equivalent
        const totalPaid = (params.row.payments || []).reduce((sum, p) => {
          return sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1))));
        }, 0);
        const isFullyPaid = totalPaid >= totalWithTax - 0.01;
        // Also treat status='Paid' as fully paid — covers case where payments[] is stale or missing
        const statusIsPaid = (params.row.status || '').toLowerCase() === 'paid';
        const effectivelyPaid = isFullyPaid || statusIsPaid;
        // hasPayments: true if payments array has items OR status indicates payment was made
        // (paginated endpoint may not return payments[] — use status as reliable fallback)
        const hasPayments = (params.row.payments || []).length > 0 ||
                            params.row.status === 'Paid' ||
                            params.row.status === 'Partially-Paid';

        return (
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {/* Only show "Click To Pay" when NOT fully paid by calculation AND status is not 'Paid' */}
            {!effectivelyPaid && totalWithTax > 0 && (
              <button onClick={() => handleOpenAddPayment(params.row)} className='btnCustomer2'>Click To Pay</button>
            )}
            {/* History button: show when any payments were recorded (based on status or payments array) */}
            {hasPayments && (
              <button onClick={() => handleOpenPaymentHistory(params.row)} className='btnCustomer' style={{ backgroundColor: '#202a5a' }}>History</button>
            )}
            {/* PAID badge: show when effectively paid but no payments in array (status-based payment) */}
            {(totalWithTax === 0 || effectivelyPaid) && !hasPayments && (
              <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '0.85rem' }}>PAID</span>
            )}
            {/* FULLY PAID badge: show when paid and has payment history records */}
            {isFullyPaid && hasPayments && (
              <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '0.85rem' }}>FULL PAID</span>
            )}
          </div>
        );
      }
    },
    {
      field: 'paymentStatusText', headerName: 'Status', minWidth: 120, flex: 1, renderCell: (params) => {
        const totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
        let status = params.row.status || 'UnPaid';
        
        // Auto-detect Paid status for zero-balance items if not explicitly set
        if (totalWithTax === 0 && status === 'UnPaid') {
          status = 'Paid';
        }

        let color = 'red';
        if (status === 'Paid') color = 'blue';
        else if (status === 'Partially-Paid') color = 'orange';

        return (
          <span style={{ color, fontWeight: 'bold' }}>
            {status.toUpperCase()}
          </span>
        );
      }
    },
    { field: 'itemDescriptionInfo', headerName: 'I-Description', minWidth: 120, flex: 1.2 },
    { field: 'totalFC', headerName: 'TotalFC', minWidth: 120, flex: 1, renderCell: (params) => `FC${params.row.totalFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'total', headerName: 'Total', minWidth: 100, flex: 1, renderCell: (params) => {
        const total = parseFloat(params.row.totalUSD || params.row.total || 0);
        const totalPaid = (params.row.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)))), 0);
        const rest = total - totalPaid;
        return `$${rest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
      }
    },
    {
      field: 'view', headerName: 'View', width: 60, minWidth: 60, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton onClick={() => handleOpenView(params.row._id)} disabled={PurchaseInfoV.length === 0 && user.data.role !== 'CEO'}>
              <VisibilityOutlinedIcon style={{ color: '#202a5a' }} />
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 60, minWidth: 60, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton disabled={PurchaseInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemPurchaseUpdateForm/${params.row._id}`} className='LinkName'>
                <EditIcon style={{ color: 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>
      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 60, minWidth: 60, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>
            <IconButton onClick={() => handleOpen(params.row._id)} disabled={PurchaseInfoD.length === 0 && user.data.role !== 'CEO'} >
              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
            </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ]
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open1} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{ marginRight: '36px', ...(open1 && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>Item Purchase</Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}><Logout style={{ color: 'white' }} /></IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open1} onMouseEnter={() => setOpen1(true)} onMouseLeave={() => setOpen1(false)}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}><IconButton onClick={toggleDrawer}><ChevronLeftIcon /></IconButton></Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}><SideMaintenance /></List>
        </Drawer>
        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, width: '100%', height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 1 }} >
            {loadingData ? <div style={{ position: 'relative', top: '120px' }}><Loader /></div> : (
                <div>
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip><span><IconButton disabled={(PurchaseInfoC?.length === 0 || 0) && user?.data?.role !== 'CEO'}><NavLink to={'/ItemPurchaseViewForm'} title="Add Item Purchase"><span className='btnCustomerAdding'><Add /></span></NavLink></IconButton></span></ViewTooltip>
                    <button onClick={handleRefreshSearch} className='btnCustomer2'>Refresh Search</button>
                  </section>
                  <Box sx={{ height: 600, width: '100%' }}>
                    <DataGrid
                          paginationMode="server"
                          rowCount={totalPage * limit}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                      rows={itemPurchase}
                      columns={columns}
                      slots={{ toolbar: GridToolbar }}
                      onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                      slotProps={{ toolbar: { showQuickFilter: true, printOptions: { disableToolbarButton: true } } }}
                      getRowClassName={(params) => newPurchase.includes(params.row._id) ? 'new-Purchase' : ''}
                      checkboxSelection disableDensitySelector filterModel={filterModel} rowSelectionModel={selectedRows}
                      onFilterModelChange={(newModel) => handleFilter(newModel)}
                      columnVisibilityModel={columnVisibilityModel}
                      onColumnVisibilityModelChange={handelHiddenColumn}
                      sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                    />
                    <Pagination count={totalPage} page={page + 1} onChange={handlePageChange} color="primary" sx={{ position: 'relative', top: '-50px' }} />
                  </Box>
                </div>
              )}
          </Container>
        </Box>
      </Box>
      <ConfirmDeleteModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleOpenReasonDelete}
        itemName={
          itemPurchase.find((i) => i._id === DeleteId)?.itemPurchaseNumber
            ? `IP-0${itemPurchase.find((i) => i._id === DeleteId).itemPurchaseNumber}`
            : "this item purchase"
        }
      />
      <Modal open={modalDeleteOpenLoading} onClose={handleDeleteCloseLoading}><Box sx={{ ...style, width: 500 }}>{loading ? <Loader /> : (<div style={{ textAlign:'center' }}><p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p><h2>Data successfully {updateS ? 'Updated' : 'deleted'}</h2><button onClick={handleDeleteCloseLoading} className='btnCustomer'>Close</button></div>)}</Box></Modal>
      <Modal open={openView} onClose={handleCloseView} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{ ...style, width: { xs: '100%', md: 950 }, maxHeight: '90vh', overflowY: 'auto', '@media print': { width: '100%', height: 'auto', maxHeight: 'none', overflow: 'visible', boxShadow: 'none', border: 'none' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mb: 1, position: 'relative', zIndex: 1000, '@media print': { display: 'none' } }}>
            <ViewTooltip title="Print" placement='bottom'>
              <IconButton onClick={handlePrint} style={{ zIndex: 1000 }}>
                <LocalPrintshop style={{ color: '#202a5a' }} />
              </IconButton>
            </ViewTooltip>
            <ViewTooltip title="Close" placement='bottom'>
              <IconButton onClick={handleCloseView} style={{ zIndex: 1000 }}>
                <Close style={{ color: '#202a5a' }} />
              </IconButton>
            </ViewTooltip>
          </Box>
          {
            itemPurchaseView !== null ?
              <div ref={componentRef} style={{ padding: '0px 20px 0px 20px' }}>
                <Box sx={{ display: 'none', '@media print': { display: 'block', marginBottom: '20px' } }}>
                  <PrintHeader branchId={itemPurchaseView.branchId || ""} />
                </Box>
                <Grid container style={{ alignItems: 'center' }}>
                  <Grid item xs={12}>
                    <Grid container >
                      <Grid item xs={12} >
                        <br />
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                          <span style={{ fontSize: '13px' }}>IP-</span><span>{itemPurchaseView.itemPurchaseNumber}</span> </Typography>
                        <br />
                        <hr />
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>Date: </span>  {dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}
                          </p>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                          <p><span style={{ fontWeight: 'bold' }}>Supplier: </span> {itemPurchaseView.manufacturer !== undefined ? itemPurchaseView.manufacturer : null}</p>
                          {
                            itemPurchaseView.manufacturerNumber !== undefined ?
                              <p><span style={{ fontWeight: 'bold' }}>REFERENCE: </span> {itemPurchaseView.manufacturerNumber}</p>
                              :
                              null
                          }
                          <p><span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Description: </span> {itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</p>
                        </Grid>
                        <br />
                      </Grid>
                      <Box sx={{ height: '', width: '100%', }}>
                        <TableContainer component={Paper} sx={{ overflowX: 'visible', '@media print': { overflow: 'visible' } }}>
                          <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Information Description</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Rate(USD)</TableCell>
                                <TableCell>Taux(Exchange Rate)</TableCell>
                                <TableCell>Total(USD)</TableCell>
                                <TableCell>Total(FC)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.items.map((row, i) => {
                                  return (
                                    <TableRow key={i}>
                                      <TableCell>{row.itemDescription !== undefined ? row.itemDescription : null}</TableCell>
                                      <TableCell>{row.itemName !== undefined ? row.itemName.itemName : row.newDescription}</TableCell>
                                      <TableCell>{row.itemQty}</TableCell>
                                      <TableCell>${row.itemRate != null ? parseFloat(row.itemRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}</TableCell>
                                      <TableCell>{row.Taux != null ? parseFloat(row.Taux).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}</TableCell>
                                      <TableCell>${row.totalAmount != null ? parseFloat(row.totalAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : (row.totalAmountUSD != null ? parseFloat(row.totalAmountUSD).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00')}</TableCell>
                                      <TableCell>{itemPurchaseView.currency === 'FC' && row.fcConvertToUsdTotal != null && !isNaN(row.fcConvertToUsdTotal) ? parseFloat(row.fcConvertToUsdTotal).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}</TableCell>
                                    </TableRow>
                                  )
                                })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell colSpan={2}>TVA</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>{hasTvaValue(itemPurchaseView) ? 'Yes' : 'No'}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>Tax Amount</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${getTaxValue(itemPurchaseView).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>FC{itemPurchaseView.totalFC !== undefined && itemPurchaseView.totalFC !== null ? parseFloat(itemPurchaseView.totalFC).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.total !== undefined && itemPurchaseView.total !== null ? itemPurchaseView.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.totalUSD !== undefined && itemPurchaseView.totalUSD !== null ? parseFloat(itemPurchaseView.totalUSD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        
                        {/* --- Payment History in View --- */}
                        <div style={{ marginTop: '30px' }}>
                          <Typography variant="h6" sx={{ fontWeight: 'normal', mb: 1, color: '#30368a' }}>Payment History</Typography>
                          <TableContainer component={Paper} variant="outlined" sx={{ overflowX: 'visible', '@media print': { overflow: 'visible' } }}>
                            <Table size="small">
                              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: 'normal' }}>Date</TableCell>
                                  <TableCell sx={{ fontWeight: 'normal' }}>Amount (USD)</TableCell>
                                  <TableCell sx={{ fontWeight: 'normal' }}>Amount (FC)</TableCell>
                                  <TableCell sx={{ fontWeight: 'normal' }}>Mode</TableCell>
                                  <TableCell sx={{ fontWeight: 'normal' }}>Note / Ref</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {(itemPurchaseView.payments || []).map((p, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell>{dayjs(p.date).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell>${parseFloat(p.amount || 0).toFixed(2)}</TableCell>
                                    <TableCell>FC {parseFloat(p.amountFC || 0).toLocaleString()}</TableCell>
                                    <TableCell>{p.mode}</TableCell>
                                    <TableCell>{p.note || p.reference}</TableCell>
                                  </TableRow>
                                ))}
                                {(!itemPurchaseView.payments || itemPurchaseView.payments.length === 0) && (
                                  <TableRow>
                                    <TableCell colSpan={5} align="center">No payments recorded</TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <Box sx={{ mt: 2, p: 2, backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
                            <Grid container spacing={2}>
                              <Grid item xs={4}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Total Amount</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'normal' }}>${parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0).toFixed(2)}</Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Total Paid</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
                                  ${(itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)))), 0).toFixed(2)}
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Rest Amount</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
                                  ${(parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0) - (itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)))), 0)).toFixed(2)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'none', '@media print': { display: 'block', marginTop: '20px' } }}>
                  <PrintFooter branchId={itemPurchaseView.branchId || ""} />
                </Box>
              </div>
              : null
          }
        </Box>
      </Modal>
      <Modal
        open={openReasonDelete}
        onClose={handleCloseReasonDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement="left">
            <IconButton onClick={handleCloseReasonDelete} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            Why do you want to delete IP-{relatedNumber}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="reason1"
                  name="reason1"
                  multiline
                  rows={2}
                  value={reason1}
                  placeholder="Reason"
                  onChange={(e) => setReason1(e.target.value)}
                  label="Reason"
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ mb: 1, mt: 1 }}>
                  Type <span style={{ color: 'red', fontWeight: 'bold' }}>DELETE</span> to confirm final action:
                </Typography>
                <TextField fullWidth size="small" placeholder="Type DELETE here" id="confirmDeleteIP" autoFocus />
              </Grid>
              <Grid item xs={12}>
                <button
                  type="submit"
                  className="btnCustomer"
                  style={{ width: '100%' }}
                  onClick={(e) => {
                    const input = document.getElementById('confirmDeleteIP');
                    if (input && input.value !== 'DELETE') {
                      e.preventDefault();
                      alert('Please type DELETE to confirm');
                    }
                  }}
                >
                  Confirm Delete Irreversibly
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      {/* --- Add Payment Modal --- */}
      <Modal open={openAddPayment} onClose={() => setOpenAddPayment(false)}>
        <Box sx={{ ...style, width: 500 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Record Payment for IP-{selectedPurchase?.itemPurchaseNumber}</Typography>
          <form onSubmit={handleSavePayment}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField fullWidth label="Amount (USD)" type="number" value={paymentForm.amount} onChange={(e) => setPaymentForm({ ...paymentForm, amount: e.target.value })} />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label="Amount (FC)" type="number" value={paymentForm.amountFC} onChange={(e) => setPaymentForm({ ...paymentForm, amountFC: e.target.value })} />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label="Rate (Taux)" type="number" value={paymentForm.rate} onChange={(e) => setPaymentForm({ ...paymentForm, rate: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ p: 1, backgroundColor: '#f0f4ff', borderRadius: '4px', border: '1px dashed #30368a', textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#30368a' }}>
                    Total This Payment: ${(parseFloat(paymentForm.amount || 0) + (parseFloat(paymentForm.amountFC || 0) / parseFloat(paymentForm.rate || 1))).toFixed(2)} USD
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Date" type="date" required value={paymentForm.date} onChange={(e) => setPaymentForm({ ...paymentForm, date: e.target.value })} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Payment Mode</InputLabel>
                  <Select value={paymentForm.mode} label="Payment Mode" onChange={(e) => setPaymentForm({ ...paymentForm, mode: e.target.value })}>
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                    <MenuItem value="Check">Check</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Reference / Check #" value={paymentForm.reference} onChange={(e) => setPaymentForm({ ...paymentForm, reference: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Note" multiline rows={2} value={paymentForm.note} onChange={(e) => setPaymentForm({ ...paymentForm, note: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <button type="submit" className="btnCustomer2" style={{ width: '100%' }}>Save Payment</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      {/* --- Payment History Modal --- */}
      <Modal open={openPaymentHistory} onClose={() => setOpenPaymentHistory(false)}>
        <Box sx={{ ...style, width: 700, maxHeight: '80vh', overflowY: 'auto' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'normal' }}>Payment History - IP-{selectedPurchase?.itemPurchaseNumber}</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'normal' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'normal' }}>Amount (USD)</TableCell>
                  <TableCell sx={{ fontWeight: 'normal' }}>Amount (FC)</TableCell>
                  <TableCell sx={{ fontWeight: 'normal' }}>Rate</TableCell>
                  <TableCell sx={{ fontWeight: 'normal' }}>Mode</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'normal' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(selectedPurchase?.payments || []).map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{dayjs(p.date).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>${parseFloat(p.amount || 0).toFixed(2)}</TableCell>
                    <TableCell>FC {parseFloat(p.amountFC || 0).toLocaleString()}</TableCell>
                    <TableCell>{p.rate || '-'}</TableCell>
                    <TableCell>{p.mode}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleDeletePayment(p.id)} color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {(!selectedPurchase?.payments || selectedPurchase.payments.length === 0) && (
                  <TableRow><TableCell colSpan={6} align="center">No payments recorded</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', fontWeight: 'normal', backgroundColor: '#f0f4ff', p: 1.5, borderRadius: 1 }}>
            <Typography sx={{ fontWeight: 'normal' }}>Total Paid: ${(selectedPurchase?.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)))), 0).toFixed(2)}</Typography>
            <Typography sx={{ fontWeight: 'normal' }}>Rest: ${(parseFloat(selectedPurchase?.totalUSD || selectedPurchase?.total || 0) - (selectedPurchase?.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)))), 0)).toFixed(2)}</Typography>
          </Box>
          <button onClick={() => setOpenPaymentHistory(false)} className="btnCustomer" style={{ width: '100%', marginTop: '16px' }}>Close</button>
        </Box>
      </Modal>
    </div>
  )
}
export default ItemPurchaseViewAdmin

