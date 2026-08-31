import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import React, { useEffect, useState, useRef } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import '../InvoiceView/AdminView.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Collapse, MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Tabs, Tab, Menu, Divider } from '@mui/material'
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { useNavigate, NavLink, useParams, Link, useOutletContext } from 'react-router-dom';
import dayjs from 'dayjs';
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
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import ProjectPhase from './ProjectPhase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Loader from '../../../component/Loader';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Image from '../../../img/images.png'
import Close from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit, Preview } from '@mui/icons-material';
import { v4 } from 'uuid';

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
function ProjectViewInformation() {
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

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
  }
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [project, setProject] = useState([]);
  const [project2, setProject2] = useState({})
  const [hidden, setHidden] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingTab, setLoadingTab] = useState(false);
  const [item, SetItems] = useState([])


  // Priority Data (Initial Load)
  const [loadingBase, setLoadingBase] = useState(true);

  // Priority Data (Initial Load)
  const fetchPriorityData = async () => {
    try {
      setLoadingBase(true);
      const [resProjects, resProjectSpec, resHidden] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/projects`),
        axios.get(`${ENDPOINT_URL}/get-projects/${id}`),
        axios.get(`${ENDPOINT_URL}/hidden`)
      ]);

      const formatDate = resProjects.data.data.map((p) => ({
        ...p,
        id: p._id,
        visitField: dayjs(p.visitDate).format('DD/MM/YYYY'),
        startField: dayjs(p.startDate).format('DD/MM/YYYY'),
      }));
      setProject(formatDate.reverse());
      setProjectName(resProjectSpec.data.data.projectName);
      setCustomerName1(resProjectSpec.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
      setHidden(resHidden.data.data);

      setLoadingBase(false);
      setLoadingData(true); // Still true until details are loaded if we want to wait, or false to show UI.
      // Let's set it to false so header shows up.
      setLoadingData(false);

      // Load all other data in background
      fetchDetailedData();
    } catch (error) {
      console.error('Error fetching priority data:', error);
      setLoadingBase(false);
      setLoadingData(false);
    }
  };

  const fetchDetailedData = async () => {
    try {
      const [resAllItems] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/item`)
      ]);
      SetItems(resAllItems.data.data);

      await Promise.all([
        fetchInvoicesAndPurchases(),
        fetchExpenses(),
        fetchPayments(),
        fetchTimelineAndStaff(),
        fetchItemsMovement()
      ]);
    } catch (error) {
      console.error('Error fetching detailed data:', error);
    }
  };

  // Tab-Specific Loaders
  const fetchInvoicesAndPurchases = async () => {
    try {
      const [resPurchases, resInvoices] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/purchase?summary=true`),
        axios.get(`${ENDPOINT_URL}/invoice?summary=true`)
      ]);

      const relatedPurchases = resPurchases.data?.data?.filter((row) => row.projectName?._id === id);
      const projectPurchaseIds = relatedPurchases.map(p => p._id);

      // Filter Invoices: linked either via Purchase ID or directly via Project ID
      const relatedInvoices = resInvoices.data?.data?.filter((inv) =>
        projectPurchaseIds.includes(inv.ReferenceName2) || inv.ReferenceName2 === id
      );

      const allProjectItems = relatedPurchases.flatMap((row) => (row.items || []).map((Item) => ({
        ...Item,
        totalCostOut: (Item.itemName?._id === undefined || Item.itemName?._id === "") && (Number(Item.itemOut) || 0) === 0
          ? (Number(Item.totalGenerale) || 0)
          : (Number(Item.itemOut) || 0) * (Number(Item.itemCost) || 0)
      })));

      setItem(allProjectItems);
      setPurchase(relatedPurchases);
      setInvoice(relatedInvoices.map(row => ({ ...row, id: row._id })));
    } catch (error) {
      console.error('Error fetching Invoices/Purchases:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const [resExpCat, resExpenses] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/expensesCategory`),
        axios.get(`${ENDPOINT_URL}/expense?summary=true`)
      ]);
      setCategories(resExpCat.data.data);
      setExpensesInfo(resExpenses.data?.data?.filter((row) => row.accountNameInfo?._id === id).map((row) => ({
        _id: row._id,
        category: row.expenseCategory?.expensesCategory,
        total: row.total,
        date: row.expenseDate,
        expenseNumber: row.expenseNumber,
        description: row.description
      })));
    } catch (error) { console.error('Error fetching Expenses:', error); }
  };

  const fetchPayments = async () => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/payment`);
      setAdvances(res.data?.data?.filter((pay) => pay.TotalAmount?.some((item) => item.id === id)));
    } catch (error) { console.error('Error fetching Payments:', error); }
  };

  const fetchItemsMovement = async () => {
    try {
      const [resOut, resReturn, resPrec] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/itemOut`),
        axios.get(`${ENDPOINT_URL}/itemReturn`),
        axios.get(`${ENDPOINT_URL}/itemPurchase?summary=true`)
      ]);
      setItemOut((resOut.data?.data || []).filter((row) => String(row.reference?._id || row.reference) === String(id)).map((row) => ({ ...row, outNumber: "O-" + String(row.outNumber).padStart(6, '0'), type: 'Item Out' })));
      setItemReturn((resReturn.data?.data || []).filter((row) => String(row.reference?._id || row.reference) === String(id)).map((row) => ({ ...row, outNumber: "R-" + String(row.outNumber).padStart(6, '0'), type: 'Item return' })));
      setItemPurchase((resPrec.data?.data || []).filter((row) => row.projectName && String(row.projectName._id || row.projectName) === String(id)));
    } catch (error) { console.error('Error fetching Item Movement:', error); }
  };

  const fetchTimelineAndStaff = async () => {
    try {
      const [resNotif, resPlaning] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/notification`),
        axios.get(`${ENDPOINT_URL}/planing`)
      ]);
      setNotification(resNotif.data?.data?.filter((row) => row.idInfo === id));
      setPlaningInfo(resPlaning.data?.data?.filter((row) => row.projectName?._id === id).map((row) => ({
        ...row,
        totalWorkDay: parseFloat(Number(row.dayPayUSd || 0) * Number(row.workNumber || 0)).toFixed(2)
      })));
    } catch (error) { console.error('Error fetching Timeline/Staff:', error); }
  };

  // Maps for optimized lookups
  const itemMap = React.useMemo(() => {
    const map = {};
    item.forEach(i => { map[i._id] = i; });
    return map;
  }, [item]);

  useEffect(() => {
    fetchPriorityData();
  }, [id]);

  const [projectNumber, setProjectNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [customerName1, setCustomerName1] = useState("");

  const [purchase, setPurchase] = useState([])
  const [items, setItem] = useState([])

  const totalGeneralOutCost = items.length > 0 ? items.reduce((sum, row) => sum + row.totalCostOut, 0) : 0
  const [itemOut, setItemOut] = useState([]);
  const [itemReturn, setItemReturn] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [expensesInfo, setExpensesInfo] = useState([]);
  const [itemPurchase, setItemPurchase] = useState([]);
  const [planingInfo, setPlaningInfo] = useState([]);
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState([]);
  const [advances, setAdvances] = useState([]);

  {/** const resItemOut = await axios.get(`${ENDPOINT_URL}/itemOut`)
         const OutFilter = resItemOut.data.data.map((row)=>({...row, outNumber: "O-0" + row.outNumber,type:'Out', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemOut(OutFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 ))
         const resIReturn = await axios.get(`${ENDPOINT_URL}/itemReturn`)
         const returnFilter = resIReturn.data.data.map((row)=>({...row, outNumber: "R-0" + row.outNumber, type:'return', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemReturn(returnFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 )) */}

  const newOutR = [...itemOut, ...itemReturn]

  const formatDate2 = newOutR.map((row) => ({
    ...row,
    itemsQtyArray: row.itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) > 0)
  })).filter(row => row.itemsQtyArray.length > 0)

  const relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter((item) => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach((item) => {
      const ItemName = item.itemName.itemName;
      const Id = item.itemName._id;
      const description = item.itemDescription;
      if (!acc[Id]) {
        acc[Id] = { ItemName, Id, description, total: 0 }
      }
      acc[Id].total += parseFloat(item.itemQty)
    });
    return acc
  }, {}) : null
  const relatedItemPurchases2 = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter((item) => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach((item) => {
      const ItemName = item.itemName.itemName;
      const Id = item.itemName._id;
      const description = item.itemDescription;
      // Capture price from the item purchase - fix property names and fallback
      const rate = parseFloat(item.itemRate) || 0;
      const cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;

      if (!acc[description]) {
        acc[description] = { ItemName, Id, description, total: 0, rate: rate, cost: cost }
      } else {
        // Simple update to latest price
        acc[description].rate = rate;
        acc[description].cost = cost;
      }
      acc[description].total += parseFloat(item.itemQty)
    });
    return acc
  }, {}) : null

  const relatedItemPurchasesArray = relatedItemPurchases !== null ? Object.keys(relatedItemPurchases).map((row) => relatedItemPurchases[row]) : []
  const relatedItemPurchasesArray2 = relatedItemPurchases2 !== null ? Object.keys(relatedItemPurchases2).map((row) => relatedItemPurchases2[row]) : []

  const allItemPurchase = [...relatedItemPurchasesArray, ...relatedItemPurchasesArray2]
  //console.log(allItemPurchase)

  const purchaseInfo = purchase.map((PreviewPurchase) => {
    const updatedPurchase = { ...PreviewPurchase }
    // Fix: Filter itemPurchase to only include records that match the current purchase number
    const currentItemPurchases = itemPurchase.filter(ip => ip.itemPurchaseNumber === PreviewPurchase.purchaseNumber);
    const localRelated = currentItemPurchases.reduce((acc, row) => {
      row.items.filter((item) => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach((item) => {
        const ItemName = item.itemName.itemName;
        const Id = item.itemName._id;
        const description = item.itemDescription;
        if (!acc[Id]) {
          acc[Id] = { ItemName, Id, description, total: 0 }
        }
        acc[Id].total += parseFloat(item.itemQty)
      });
      return acc
    }, {});
    const localRelated2 = currentItemPurchases.reduce((acc, row) => {
      row.items.filter((item) => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach((item) => {
        const ItemName = item.itemName.itemName;
        const Id = item.itemName._id;
        const description = item.itemDescription;
        const rate = parseFloat(item.itemRate) || 0;
        const cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;
        if (!acc[description]) {
          acc[description] = { ItemName, Id, description, total: 0, rate: rate, cost: cost }
        } else {
          acc[description].rate = rate;
          acc[description].cost = cost;
        }
        acc[description].total += parseFloat(item.itemQty)
      });
      return acc
    }, {});
    const localAll = [...Object.values(localRelated), ...Object.values(localRelated2)];
    localAll?.forEach((row2) => {
      const existingItem = updatedPurchase.items?.findIndex(
        (itemI) => row2.Id ? itemI.itemName._id === row2.Id : itemI.itemDescription === row2.description
      )
      if (existingItem > -1) {
        updatedPurchase.items[existingItem].itemBuy = row2.total
        // Update costs and rates for manual items if available from actual purchases
        if (!row2.Id) {
          updatedPurchase.items[existingItem].itemCost = row2.cost;
          updatedPurchase.items[existingItem].itemRate = row2.rate;
          updatedPurchase.items[existingItem].totalAmount = Math.round((row2.rate * updatedPurchase.items[existingItem].itemQty) * 100) / 100;
          updatedPurchase.items[existingItem].itemAmount = updatedPurchase.items[existingItem].totalAmount; // Simplified, assuming no discount change
          updatedPurchase.items[existingItem].totalGenerale = Math.round((row2.cost * row2.total) * 100) / 100;
        }
      } else {
        const itemDetails = itemMap[row2.Id]
        const rate = row2.Id ? (itemDetails?.itemSellingPrice || 0) : row2.rate;
        const cost = row2.Id ? (itemDetails?.itemCostPrice || 0) : row2.cost;
        updatedPurchase.items.push({
          idRow: v4(),
          itemName: {
            _id: row2.Id || "",
            itemName: row2.ItemName
          },
          itemDescription: row2.description,
          itemDiscount: 0,
          itemQty: row2.total,
          itemRate: rate,
          itemCost: cost,
          totalAmount: Math.round((row2.total * rate) * 100) / 100,
          discount: 0,
          percentage: 0,
          itemAmount: Math.round((row2.total * rate) * 100) / 100,
          totalCost: Math.round((row2.total * cost) * 100) / 100,
          totalGenerale: Math.round((cost * row2.total) * 100) / 100,
          itemBuy: row2.total,
          itemWeight: "",
          stock: itemDetails?.itemQuantity || 0,
          itemOut: 0,
          newItemOut: 0,
        })
      }
    })
    // Recalculate purchase amounts after all items are updated
    updatedPurchase.purchaseAmount1 = updatedPurchase.items?.reduce((sum, item) => sum + (parseFloat(item.totalCost) || 0), 0) || 0;
    updatedPurchase.purchaseAmount2 = updatedPurchase.items?.reduce((sum, item) => sum + (parseFloat(item.totalGenerale) || 0), 0) || 0;

    return updatedPurchase
  })


  const related = itemOut.length > 0 ? itemOut.reduce((acc, row) => {
    (row.itemsQtyArray || []).filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
      const ItemName = item.itemName?.itemName || item.itemName;
      const Id = String(item.itemName?._id || item.itemName || '');
      if (!acc[Id]) {
        acc[Id] = { ItemName, Id, total: 0 }
      }
      acc[Id].total += parseFloat(item.newItemOut)
    });
    return acc
  }, {}) : null

  const relatedReturn = itemReturn.length > 0 ? itemReturn.reduce((acc, row) => {
    (row.itemsQtyArray || []).filter((item) => parseFloat(item.newItemOut) > 0).forEach((item) => {
      const ItemName1 = item.itemName?.itemName || item.itemName;
      const Id1 = String(item.itemName?._id || item.itemName || '');
      if (!acc[Id1]) {
        acc[Id1] = { ItemName1, Id1, total1: 0 }
      }
      acc[Id1].total1 += parseFloat(item.newItemOut)
    });
    return acc
  }, {}) : null

  const newAllOutReturn = related !== null ? Object.values(related).map(({ ItemName, Id, total }) => {
    const related1 = relatedReturn !== null ? Object.values(relatedReturn).find(({ Id1 }) => String(Id1) === String(Id)) : null
    return ({
      ItemName,
      Id,
      total: related1 ? total - related1.total1 : total
    })
  }) : null

  const relatedPurchase = purchase.map((row) => ({
    ...row,
    items: (row.items || []).map((Item) => {
      const itemIdStr = String(Item.itemName?._id || Item.itemName || '');
      const newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find((Item1) => String(Item1.Id) === itemIdStr) : null
      return ({
        ...Item,
        itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : (Item.itemOut || 0)
      })
    })
  }))
  useEffect(() => {
    const totalPerDay = {};
    expensesInfo.forEach((item) => {
      const { category, total } = item;
      if (totalPerDay[category]) {
        totalPerDay[category] += parseFloat(total)
      } else {
        totalPerDay[category] = parseFloat(total);
      }
    });
    setExpenses(totalPerDay)
  }, [categories, expensesInfo])

  const planingObject = planingInfo?.reduce((acc, item) => {
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
  const totalAmount2 = Object.keys(planingObject).map((row) => planingObject[row])

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountPlaning, setTotalAmountPlaning] = useState(0);
  useEffect(() => {
    const totalAmount1 = Object.keys(expenses).reduce((sum, row) => sum + parseFloat(expenses[row]), 0)
    setTotalAmount(totalAmount1)
    const totalPayRoll = totalAmount2?.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll)
  }, [expenses, totalAmount2])

  const totalAdvances = advances.reduce((sum, pay) => {
    const projectAmt = pay.TotalAmount?.filter(item => item.id === id).reduce((s, i) => s + parseFloat(i.total), 0) || 0
    return sum + projectAmt
  }, 0)
  const [show2, setShow2] = useState(1);
  const handleShow2 = (e) => {
    setShow2(e);
  }
  const filteredRows = project.filter(row => !hidden.some((row2) => row2.idRow === row._id))

  {/** Search start */ }
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = project.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [project, id])
  useEffect(() => {
    const selectedIndex = filteredRows.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [filteredRows, id])

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
  const newArray = search !== '' ? project.filter((row) =>
    row.projectName.toLowerCase().includes(search.toLowerCase()) ||
    row.projectNumber.toString().includes(search) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())
  ) : project
  const newArray2 = search !== '' ? filteredRows.filter((row) =>
    row.projectName.toLowerCase().includes(search.toLowerCase()) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    row.projectNumber.toString().includes(search) ||
    row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())
  ) : filteredRows

  {/** Search end */ }
  {/** Comments starts */ }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick2 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseMenu2 = () => {
    setAnchorEl1(null);
  };

  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) => {
    setShow1(e);
    setAnchorEl(null);
  }


  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/comment`)
        const resp = res.data?.data?.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
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
    window.location.reload();
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const dateComment = dayjs(Date.now());
  const [synchro, setSynchro] = useState('false')
  const handleSynced = async (e) => {
    e.preventDefault()
    const updatePurchase = relatedPurchase.map((row) => {
      return axios.put(`${ENDPOINT_URL}/update-purchase/${row._id}`, {
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
  const updateForItemBuy = async (e) => {
    e.preventDefault()
    const saveAttendance = purchaseInfo.map((row) => {
      return axios.put(`${ENDPOINT_URL}/update-purchase/${row._id}`, row)
    })
    try {
      await Promise.all(saveAttendance);
      setSynchro('true')
      handleOpen();
    } catch (error) {
      console.log('An error as occur');
    }
  }


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
  {/** Comments end */ }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')',
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
  const [printData, setPrintData] = useState(null);

  useEffect(() => {
    if (printData) {
      handlePrint();
    }
  }, [printData]);

  const handleOpenPrint = (data) => {
    setPrintData(data);
    setAnchorEl1(null);
  };
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('TabProjectView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabProjectView', changeValue)
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  const data1 = purchase.map((row) => ({
    number: 'PUR-' + String(row.purchaseNumber).padStart(6, '0'),
    customer: row.customerName.customerName,
    projectName: row.projectName.projectName,
    purchaseDate: dayjs(row.purchaseDate).format('DD/MM/YYYY'),
  }))
  const data5 = items.map((Item, i) => {
    return ({
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemCost: '$' + Item.itemCost,
      totalCost: '$' + Item.totalCost,
      itemBuy: Item.itemBuy,
      totalGenerale: '$' + Item.totalGenerale,
      itemOut: Item.itemOut,
      totalCost1: '$' + parseFloat(Item.itemOut * Item.itemCost).toFixed(2),
    })
  })
  const data7 = purchase.map((row) => ({
    no: '',
    no1: 'SubTotal',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '$' + row.purchaseAmount1,
    purchaseAmount2: '$' + row.purchaseAmount2,
    purchaseAmount3: '$' + totalGeneralOutCost,
  }))

  const data8 = expensesInfo.map((Item, i) => {
    return ({
      no: 'D-' + String(Item.expenseNumber).padStart(6, '0'),
      date: dayjs(Item.date).format('DD-MMMM-YYYY'),
      category: Item.category,
      description: Item.description,
      itemCost: "",
      totalCost: "",
      itemBuy: "",
      totalGenerale: "",
      itemOut: "",
      totalCost1: '$' + Item.total,
    })
  })

  const data9 = Object.keys(expenses)?.map((row) => ({
    no: '',
    no1: `${row} Total`,
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + expenses[row].toFixed(2),
  }))
  const data10 = [
    {
      no: '',
      no1: 'sub Total',
      description: '',
      laborQty: '',
      adjustmentNumber: '',
      purchaseAmount1: '',
      purchaseAmount2: '',
      purchaseAmount3: '$' + totalAmount.toFixed(2),
    }
  ]
  const data11 = [
    {
      no: '',
      no1: 'Total General',
      description: '',
      laborQty: '',
      adjustmentNumber: '',
      purchaseAmount1: '',
      purchaseAmount2: '',
      purchaseAmount3: '$' + parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2),
    }]

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    const columns1 = [
      { header: "#", key: 'number', width: 20 },
      { header: "Customer Name", key: 'customer', width: 20 },
      { header: "Project Name", key: 'projectName', width: 20 },
      { header: "Date", key: 'purchaseDate', width: 20 },
    ];
    const columns5 = [
      { header: "#", key: 'no', width: 20 },
      { header: "Item", key: 'item', width: 20 },
      { header: "Item Description", key: 'itemDescription', width: 20 },
      { header: "Qty", key: 'itemQty', width: 20 },
      { header: "Rate", key: 'itemCost', width: 20 },
      { header: "Total Cost", key: 'totalCost', width: 20 },
      { header: "Buy", key: 'itemBuy', width: 20 },
      { header: "Total Buy", key: 'totalGenerale', width: 20 },
      { header: "Qty Out", key: 'itemOut', width: 20 },
      { header: "Total Cost", key: 'totalCost1', width: 20 },
    ];
    const columns6 = [
      { header: "#", key: 'no', width: 20 },
      { header: "Date", key: 'date', width: 20 },
      { header: "Category", key: 'category', width: 20 },
      { header: "Description", key: 'description', width: 20 },
      { header: "", key: 'itemCost', width: 20 },
      { header: "", key: 'totalCost', width: 20 },
      { header: "", key: 'itemBuy', width: 20 },
      { header: "", key: 'totalGenerale', width: 20 },
      { header: "", key: 'itemOut', width: 20 },
      { header: "Total Cost", key: 'totalCost1', width: 20 },
    ];

    workSheet.addRow([]);
    workSheet.addRow(columns1.map(col => col.header));
    data1.forEach(item => {
      workSheet.addRow([item.number, item.customer, item.projectName, item.purchaseDate])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Item']);
    workSheet.addRow(columns5.map(col => col.header))
    data5.forEach(item => {
      workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost])
    });
    workSheet.addRow([]);
    data7.forEach(item => {
      workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3])
    });
    workSheet.addRow([]);
    workSheet.addRow(['Expenses']);
    workSheet.addRow(columns6.map(col => col.header))
    data8.forEach(item => {
      workSheet.addRow([item.no, item.date, item.category, item.description, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost1])
    });
    workSheet.addRow([]);
    data9.forEach(item => {
      workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3])
    });
    data10.forEach(item => {
      workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3])
    });
    workSheet.addRow([]);
    data11.forEach(item => {
      workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3])
    });
    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, `${'P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')'}.xlsx`)
  }

  const handleExportCategoryExcel = async (category, list, projectName) => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    const columns = [
      { header: "#", key: 'no', width: 20 },
      { header: "Date", key: 'date', width: 20 },
      { header: "Category", key: 'category', width: 20 },
      { header: "Description", key: 'description', width: 60 },
      { header: "Total", key: 'total', width: 20 },
    ];

    workSheet.addRow([]);
    workSheet.addRow([`Category: ${category}`]);
    workSheet.addRow([`Project: ${projectName}`]);
    workSheet.addRow([]);
    workSheet.addRow(columns.map(col => col.header));

    list.forEach((item, i) => {
      workSheet.addRow([
        item.expenseNumber ? `D-${String(item.expenseNumber).padStart(6, '0')}` : i + 1,
        dayjs(item.date).format('DD-MMMM-YYYY'),
        item.category,
        item.description,
        item.total.toFixed(2)
      ]);
    });

    workSheet.addRow([]);
    const total = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
    workSheet.addRow(['', '', '', 'Total', total.toFixed(2)]);

    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, `${category}_Expenses_${projectName.replace(/\s+/g, '_')}.xlsx`);
  }

  const handleExportEmployeeExcel = async (list, projectName) => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    const columns = [
      { header: "Name", key: 'name', width: 30 },
      { header: "Days Works", key: 'workD', width: 20 },
      { header: "Total Pay Day", key: 'dayPay', width: 20 },
      { header: "Total Pay", key: 'total', width: 20 },
    ];

    workSheet.addRow([]);
    workSheet.addRow([`Category: Employee Expenses`]);
    workSheet.addRow([`Project: ${projectName}`]);
    workSheet.addRow([]);
    workSheet.addRow(columns.map(col => col.header));

    list.forEach((item) => {
      workSheet.addRow([
        item.name,
        `${item.workD} days`,
        item.dayPay.toFixed(2),
        item.total.toFixed(2)
      ]);
    });

    workSheet.addRow([]);
    const grandTotal = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
    workSheet.addRow(['', '', 'Total', grandTotal.toFixed(2)]);

    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, `Employee_Expenses_${projectName.replace(/\s+/g, '_')}.xlsx`);
  }

  function Row3(props) {
    const { row } = props;
    const { index } = props;
    const { relatedUnit } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          {
            row.newDescription !== undefined ?
              (
                <>
                  <td style={{ textAlign: 'center', border: '1px solid #DDD' }}><span>{index + 1}</span></td>
                  <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={8}>{row.newDescription}</td>
                </>
              )
              :
              (
                <>
                  <td style={{ width: '10px', border: '1px solid #DDD', cursor: 'pointer' }} onClick={() => setOpen(!open)}>{open ? <KeyboardArrowUpIcon /> : <span>{index + 1}</span>}</td>
                  <td style={{ width: '300px', textAlign: 'left', border: '1px solid #DDD' }} align="left">
                    <span hidden={row.itemName ? row.itemName.itemName === 'empty' : ''}>{row.itemName.itemName ? row.itemName.itemName : ''}</span>
                    <br />
                    <span>{row.itemDescription} ( {relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''} ) </span>
                  </td>
                  <td style={{ border: '1px solid #DDD' }} align="left">{row.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                  <td style={{ border: '1px solid #DDD' }} align="left">{row.itemCost}</td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{ (row.totalCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left">{row.itemBuy}</td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{ (row.totalGenerale || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>{row.itemOut} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>{ ((row.itemName?._id === undefined || row.itemName?._id === "") && (Number(row.itemOut) || 0) === 0 ? (row.totalGenerale || 0) : (row.itemOut * row.itemCost || 0)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</span></td>
                </>
              )
          }
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div" sx={{ fontWeight: 'bold', fontSize: '13px', color: '#202a5a' }}>
                  Item Movement Info (Out & Return)
                </Typography>
                <table className="secondTable">
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Type</th>
                      <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      formatDate2?.filter((row1) => row1.itemsQtyArray.some((Item) => String(Item.itemName?._id || Item.itemName) === String(row.itemName?._id || row.itemName))).map((row1, index1) => {
                        const matchingItem = row1.itemsQtyArray.find((Item1) => String(Item1.itemName?._id || Item1.itemName) === String(row.itemName?._id || row.itemName));
                        const isReturn = (row1.type || '').toLowerCase().includes('return');
                        return (
                          <tr key={index1}>
                            <td style={{ border: '1px solid #DDD' }}>{row1.outNumber}</td>
                            <td style={{ border: '1px solid #DDD' }}>{dayjs(row1.itemOutDate || row1.date).format('DD/MM/YYYY-HH:mm')}</td>
                            <td style={{ border: '1px solid #DDD' }}>
                              <span style={{ 
                                padding: '2px 8px', 
                                borderRadius: '4px', 
                                fontSize: '11px', 
                                fontWeight: 'bold', 
                                backgroundColor: isReturn ? '#ffebee' : '#e3f2fd', 
                                color: isReturn ? '#c62828' : '#1565c0' 
                              }}>
                                {isReturn ? 'Item Return' : 'Item Out'}
                              </span>
                            </td>
                            <td style={{ border: '1px solid #DDD', fontWeight: 'bold', color: isReturn ? '#c62828' : '#1565c0' }}>
                              <span>{isReturn ? `-${matchingItem?.newItemOut || 0}` : `+${matchingItem?.newItemOut || 0}`}</span>
                            </td>
                          </tr>
                        );
                      })
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
  function Row(props) {
    const { row } = props;
    const { index } = props;
    const [open, setOpen] = React.useState(false);

    const componentRef = useRef();
    const handlePrintLocal = useReactToPrint({
      content: () => componentRef.current,
    });

    const categoryList = expensesInfo.filter((row1) => row1.category === row);

    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <span>{index + 1}</span>}

          </td>
          <td colSpan={4} align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row}</td>
          <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography gutterBottom component="div">
                    Expenses Info
                  </Typography>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <IconButton size="small" onClick={() => handleExportCategoryExcel(row, categoryList, projectName)} title="Export to Excel">
                      <Explicit sx={{ color: 'green' }} />
                    </IconButton>
                    <IconButton size="small" onClick={handlePrintLocal} title="Print PDF">
                      <LocalPrintshopIcon sx={{ color: 'gray' }} />
                    </IconButton>
                  </div>
                </div>
                <table style={{ marginBottom: '5px' }} ref={componentRef}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'center', border: '1px solid #DDD' }}>#</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Date</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Category</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Description</th>
                      <th style={{ textAlign: 'right', border: '1px solid #DDD' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      expensesInfo.filter((row1) => row1.category === row).map((row1) => (
                        <tr key={row1._id}>
                          <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>D-{String(row1.expenseNumber).padStart(6, '0')}</td>
                          <td style={{ textAlign: 'left', border: '1px solid #DDD' }}>{dayjs(row1.date).format('DD-MMMM-YYYY')}</td>
                          <td style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row1.category}</td>
                          <td style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row1.description}</td>
                          <td style={{ textAlign: 'right', border: '1px solid #DDD' }}>{row1.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td style={{ textAlign: 'right', border: '1px solid #DDD' }} colSpan={4}>Total</td>
                      <td colSpan={2} style={{ textAlign: 'right', border: '1px solid #DDD' }}><span>$</span><span>{expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  function Row2(props) {
    const [open, setOpen] = React.useState(false);

    const componentRef = useRef();
    const handlePrintLocal = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <span>1</span>}
          </td>
          <td colSpan={4} align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>Employee</td>
          <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{totalAmountPlaning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography gutterBottom component="div">
                    Expenses Info
                  </Typography>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <IconButton size="small" onClick={() => handleExportEmployeeExcel(totalAmount2, projectName)} title="Export to Excel">
                      <Explicit sx={{ color: 'green' }} />
                    </IconButton>
                    <IconButton size="small" onClick={handlePrintLocal} title="Print PDF">
                      <LocalPrintshopIcon sx={{ color: 'gray' }} />
                    </IconButton>
                  </div>
                </div>
                <table style={{ marginBottom: '5px' }} ref={componentRef}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Name</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Days Works</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Total Pay Day</th>
                      <th style={{ textAlign: 'left', border: '1px solid #DDD' }}>Total Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      totalAmount2?.map((row, i) => (
                        <tr key={i}>
                          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.name}</td>
                          <td style={{ border: '1px solid #DDD' }} align="left"><span></span><span>{row.workD} days</span></td>
                          <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.dayPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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

  const { handleShow1: layoutHandleShow1 } = useOutletContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={show1 === 1 ? 12 : 9}>
        <div className='itemInfoContainer2'>
          <div style={{ width: '100%', background: 'white' }}>
            {loadingBase ? (
              <div style={{ position: 'relative', top: '120px' }}>
                <Loader />
              </div>
            ) : (
              <div>
                {project.filter(i => i._id === id)
                  .map((row) => (
                    <div key={row._id}>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}> {'P-' + String(row.projectNumber).padStart(6, '0')} | {row.projectName}</Typography>
                        </div>
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
                            <MenuItem>
                              <NavLink to={`/ProjectUpdateView/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                <EditIcon />
                                <Typography>Edit</Typography>
                              </NavLink>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => handleShow1(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                            <MenuItem onClick={() => handleShow1(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                          </Menu>
                        </div>
                      </div>
                      <Box sx={{ width: '100%' }}>
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
                              <Tab
                                label="Invoice"
                                value="2"
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
                              <Tab
                                label="Purchase"
                                value="3"
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
                              <Tab
                                label="Advances"
                                value="4"
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
                            </TabList>
                          </Box>
                          <TabPanel value="1" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                            {loadingTab && <LinearProgress sx={{ position: 'sticky', top: 0, zIndex: 1 }} />}
                            <div>
                              <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                                <Grid item xs={12}>
                                  <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                      <Typography sx={{ fontSize: '20px' }}>{row.projectName}</Typography>
                                    </CardContent>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <table style={{ fontSize: '20px' }}>
                                        <tbody>
                                          <tr>
                                            <th align='left'>Visit Date</th>
                                            <td>{dayjs(row.visitDate).format('DD/MM/YYYY')}</td>
                                          </tr>
                                          <tr>
                                            <th align='left'>Start Date</th>
                                            <td>{dayjs(row.startDate).format('DD/MM/YYYY')}</td>
                                          </tr>
                                        </tbody>
                                        <tbody>
                                          <tr>
                                            <th align='left'>Project Number</th>
                                            <td>P-{String(row.projectNumber).padStart(6, '0')}</td>
                                          </tr>
                                          <tr>
                                            <th align='left'>Status</th>
                                            <td><Typography
                                              color={
                                                row.status === "Pending"
                                                  ? "gray" : row.status === "On-Going"
                                                    ? "blue" :
                                                    row.status === "Stopped"
                                                      ? "red" :
                                                      row.status === "Pending"
                                                        ? "Orange" :
                                                        row.status === "Completed"
                                                          ? "green" : "black"
                                              }
                                            >
                                              {row.status}
                                            </Typography></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <Card sx={{ width: '450px', minHeight: '190px' }}>

                                        <CardContent style={{ position: 'relative', justifyContent: 'center', top: '20px' }}>
                                          <table style={{ width: '100%', color: 'gray', fontSize: '20px' }}>
                                            <tbody>
                                              <tr>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Budget</th>
                                                <td ><span data-prefix>$</span><span >{parseFloat(row.budget || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              <tr>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Material Expense</th>
                                                <td ><span data-prefix>$</span><span >{parseFloat(totalGeneralOutCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              <tr>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Labour Expense</th>
                                                <td ><span data-prefix>$</span><span >{parseFloat(totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              <tr>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Overhead Expense</th>
                                                <td ><span data-prefix>$</span><span >{parseFloat(totalAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              <tr style={{ borderBottom: '1px solid black' }}>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Total Expense</th>
                                                <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              {
                                                invoice && invoice.length > 0 ?
                                                  invoice.map((row1) => (
                                                    <tr key={row1._id}>
                                                      <th style={{ textAlign: 'left', width: '200px' }}>Invoiced Profit ({row1.invoiceNumber})</th>
                                                      <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(row1.totalInvoice - (totalAmount + totalGeneralOutCost + totalAmountPlaning)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                    </tr>
                                                  )) : ''
                                              }
                                              <tr style={{ borderBottom: '1px solid black' }}>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Advances Received</th>
                                                <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(totalAdvances).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                              <tr style={{ borderBottom: '1px solid black' }}>
                                                <th style={{ textAlign: 'left', width: '200px' }}>Balance Remaining</th>
                                                <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(row.budget !== undefined ? row.budget - (totalAmount + totalGeneralOutCost + totalAmountPlaning) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </CardContent>
                                    <CardContent>
                                      <table style={{ fontSize: '20px' }}>
                                        <tbody>
                                          <tr>
                                            <th style={{ textAlign: 'left', width: '200px' }}>Customer Name</th>
                                            <td style={{ textAlign: 'left' }}>{row.customerName.customerName}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </CardContent>
                                    <CardContent>
                                      <table style={{ fontSize: '20px' }}>
                                        <tbody>
                                          <tr>
                                            <th style={{ textAlign: 'left', width: '200px' }}>Description</th>
                                            <td style={{ textAlign: 'left' }}>{row.description}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </CardContent>
                                  </Card>
                                </Grid>

                              </Grid>
                            </div>
                          </TabPanel>
                          <TabPanel value="2" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                            {loadingTab && <LinearProgress sx={{ position: 'sticky', top: 0, zIndex: 1 }} />}
                            <div>
                              {invoice ?
                                invoice.map((row) => (
                                  <div key={row._id} className='invoicedetails'>

                                    <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
                                    <hr /><p className='invoicehr'>Invoice</p>
                                    <article>
                                      <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                        <address style={{ lineHeight: 1.35, width: '60%' }}>
                                          <p >Bill To<br />
                                            <span style={{ fontWeight: 'bold' }}>{row.customerName.customerName}</span>
                                            <br />
                                            {row.customerName.billingAddress},{row.customerName.billingCity}
                                          </p>
                                        </address>

                                        <table className="firstTable" style={{ position: 'relative', fontSize: '80%', left: '83px' }}>
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Invoice #</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none' }}><span >INV-{String(row.invoiceNumber).padStart(6, '0')}</span></td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</span></td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Subject</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.invoiceSubject}</span></td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Defect</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none' }}><span>{row.invoiceDefect}</span></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </section>

                                      <table className="secondTable" style={{ fontSize: '80%' }}>
                                        <thead>
                                          <tr>
                                            <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Item</th>
                                            <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                            <th style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Quantity</th>
                                            <th style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Rate</th>
                                            <th style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Discount</th>
                                            <th style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Total</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {row.items?.map((Item, i) => {
                                            if (Item.newDescription !== undefined) {
                                              return (
                                                <tr key={Item.idRow}>
                                                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD' }}><span>{i + 1}</span></td>
                                                  <td colSpan={6} style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD' }}><span>{Item.newDescription}</span></td>
                                                </tr>
                                              )
                                            }
                                            const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
                                            return (
                                              <tr key={Item.idRow}>
                                                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD' }}><span>{i + 1}</span></td>
                                                <td style={{ padding: '10px', border: '1px solid #DDD' }}><span>{Item.itemName.itemName}</span></td>
                                                <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #DDD' }}><span>{Item.itemDescription}</span></td>
                                                <td style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD' }}><span>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                                                <td style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                                                <td style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD' }}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>
                                                <td style={{ padding: '10px', textAlign: 'right', border: '1px solid #DDD' }}><span data-prefix>$</span><span>{Item.itemAmount}</span></td>
                                              </tr>
                                            )
                                          })}
                                        </tbody>
                                      </table>
                                      <span style={{ float: 'left' }}>
                                        <p>{row.note}</p>
                                      </span>
                                      <table className="firstTable" style={{ fontSize: '80%' }}>
                                        <tbody>
                                          <tr style={{ borderBottom: '1px solid black' }}>
                                            <th style={{ textAlign: 'center' }}>
                                              <span> Sub Total</span>
                                              {row.CheckTvA ? '' : <><br /><span className='txt1'>(Tax Inclusive)</span></>}
                                            </th>
                                            <td style={{ textAlign: 'right' }}><span data-prefix>$</span><span>{row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                          </tr>
                                          {
                                            row.shipping ?
                                              (
                                                <tr style={{ borderBottom: '1px solid black' }}>
                                                  <th style={{ textAlign: 'center' }}><span>Shipping</span></th>
                                                  <td style={{ textAlign: 'right' }}><span data-prefix>$</span><span>{row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                </tr>
                                              )
                                              : ''
                                          }
                                          {
                                            row.adjustmentNumber ?
                                              (
                                                <tr style={{ borderBottom: '1px solid black' }}>
                                                  <th style={{ textAlign: 'center' }}>{row.adjustment}</th>
                                                  <td style={{ textAlign: 'right' }}><span data-prefix>$</span><span>{row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                </tr>
                                              )
                                              : ''
                                          }
                                          <tr style={{ borderBottom: '1px solid black' }}>
                                            <th style={{ textAlign: 'center' }}><span >Total</span></th>
                                            <td style={{ textAlign: 'right' }}><span data-prefix>$</span><span >{row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                          </tr>
                                          {
                                            row.total ? (
                                              <tr style={{ borderBottom: '1px solid black' }}>
                                                <th style={{ textAlign: 'center' }}><span >Amount Paid</span></th>
                                                <td style={{ textAlign: 'right' }}><span data-prefix>$</span><span >{row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              </tr>
                                            ) : ''
                                          }
                                          <tr style={{ borderBottom: '1px solid black' }}>
                                            <th style={{ textAlign: 'center', color: '#2f81b7' }}><span >Balance Due</span></th>
                                            <td style={{ textAlign: 'right', color: '#2f81b7' }}><span data-prefix>$</span><span>{row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                          </tr>
                                          <tr>
                                            <th style={{ textAlign: 'center' }}><span >Total In Words</span></th>
                                            <td style={{ textAlign: 'left' }}><span>{row.totalW}</span></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <section style={{ float: 'left', marginTop: '50px' }}>
                                        <table style={{ fontSize: '80%' }}>
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span >Bank</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold' }}><span >SOFIBANQUE SA</span></td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span >Entitled</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold' }}><span >GLOBAL GATE SARL</span></td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span > Bank Account</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold' }}><span >00023233330214247020073</span></td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span >Code Swift</span></th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold' }}><span>SFBXCDKIXXX</span></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </section>
                                      <span style={{ textAlign: 'left' }}>
                                        <address style={{ lineHeight: 1.30 }}>
                                          <p style={{ fontWeight: 'bold' }}>Terms & Conditions</p>
                                          <p style={{ fontSize: '12px' }}>
                                            {
                                              row.terms
                                            }
                                          </p>
                                        </address>
                                      </span>
                                    </article>
                                    <span className='footerinvoice'>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><EmailIcon /></span>
                                        <span>Global@gmail.com</span>
                                      </p>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><PhoneIcon /></span>
                                        <span>+243 827 722 222</span>
                                      </p>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><WebIcon /></span>
                                        <span>www.GlobalGate.sarl</span>
                                      </p>
                                    </span>
                                  </div>
                                )) : ''
                              }
                            </div>
                          </TabPanel>
                          <TabPanel value="3" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                            {loadingTab && <LinearProgress sx={{ position: 'sticky', top: 0, zIndex: 1 }} />}
                            <div >
                              {purchaseInfo?.map((row) => (
                                <div key={row._id}>

                                  <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                      <Typography><span style={{ fontWeight: 'bold' }}>REFERENCE: </span>PUR-{String(row.purchaseNumber).padStart(6, '0')}</Typography>
                                    </div>
                                    <div>
                                      <Button
                                        aria-controls={open1 ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open1 ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick2}
                                        endIcon={<KeyboardArrowDownIcon />}
                                        sx={{
                                          bgcolor: 'gray', '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                          }
                                        }}
                                      >
                                        More...
                                      </Button>
                                      <Menu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                          'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl1}
                                        open={open1}
                                        onClose={handleCloseMenu2}
                                        TransitionComponent={Fade}
                                      >
                                        <MenuItem onClick={handleCloseMenu2}>
                                          <span style={{ color: 'gray' }}>Purchase Reference</span>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem>
                                          <NavLink to={`/PurchaseFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                            <EditIcon />
                                            <Typography>Edit</Typography>
                                          </NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                          <NavLink to={`/PurchasesViewAdminAll/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                            <Visibility />
                                            <Typography>View</Typography>
                                          </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleOpenPrint(row)} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                          <LocalPrintshopIcon />
                                          <span>Print</span>
                                        </MenuItem>
                                        <MenuItem onClick={exportToExcel} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                          <Explicit />
                                          <span>Export to Excel</span>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem>
                                          {
                                            (row.status === 'Draft' || row.status === 'Estimated') && (
                                              <NavLink to={`/ConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                <span>Convert To Invoice</span>
                                              </NavLink>
                                            )
                                          }
                                          {
                                            (row.status === 'Invoiced' || row.status === 'Make') && (
                                              <NavLink to={`/ConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                <span>Convert To Invoice (Again)</span>
                                              </NavLink>
                                            )
                                          }
                                        </MenuItem>
                                      </Menu>
                                    </div>
                                  </header>
                                  <hr />
                                  {/**  */}

                                  <Box sx={{ padding: '20px' }}>
                                    <div>
                                      <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
                                      <hr /><p className='invoicehr'>Purchase</p>
                                      <article>
                                        <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                          <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                                            <span style={{ fontWeight: 'bold' }}>{row.projectName.projectName.toUpperCase()}</span>
                                          </address>
                                          <table className="firstTable" style={{ position: 'relative', fontSize: '80%', left: '83px' }}>
                                            <tbody>
                                              <tr>
                                                <th colSpan={2} style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}>
                                                  {
                                                    newAllOutReturn && newAllOutReturn.length > 0 && (
                                                      <button onClick={handleSynced} className='btnCustomer'>sync</button>
                                                    )
                                                  }
                                                </th>
                                                <th colSpan={2} style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}>
                                                  {allItemPurchase && allItemPurchase.length > 0 && (
                                                    <button onClick={updateForItemBuy} className='btnCustomer'>IPU</button>
                                                  )}
                                                </th>
                                              </tr>
                                              <tr>
                                                <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Pur #</span></th>
                                                <td style={{ backgroundColor: 'white', border: 'none' }}><span >PUR-{String(row.purchaseNumber).padStart(6, '0')}</span></td>
                                              </tr>
                                              <tr>
                                                <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                                                <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(row.purchaseDate).format('DD/MM/YYYY')}</span></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </section>
                                        <table className="secondTable" style={{ fontSize: '100%' }}>
                                          <thead>
                                            <tr>
                                              <td colSpan={9} style={{ border: '1px solid #DDD', textAlign: 'center' }} >Items</td>
                                            </tr>
                                            <tr>
                                              <th style={{ width: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>N</th>
                                              <th style={{ width: '300px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Item</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Qty</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Unit Price</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Need</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Buy</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Buy</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">I-Out</th>
                                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Cost</th>
                                            </tr>
                                          </thead>

                                          <tbody>
                                            {row.items?.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0 || Item.newDescription !== undefined).map((Item, i) => {
                                              const relatedUnit = itemMap[Item.itemName?._id]
                                              return (
                                                <Row3 key={i} row={Item} index={i} relatedUnit={relatedUnit} />
                                              )
                                            })}
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <td colSpan={3} style={{ border: '1px solid #DDD' }} align="left">SubTotal </td>
                                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.purchaseAmount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                            </tr>
                                            {Object.keys(expenses)?.map((Item, i) => (
                                              <Row key={Item} row={Item} index={i} />
                                            ))}
                                            <tr>
                                              <td colSpan={5} style={{ border: '1px solid #DDD' }} align="left">SubTotal 2</td>
                                              <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                            </tr>
                                            {
                                              user.data.role === 'CEO' ?
                                                <Row2 /> : <tr></tr>
                                            }
                                            <tr>
                                              <td colSpan={5} style={{ border: '1px solid #DDD' }} align="left">Total Generale</td>
                                              <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </article>
                                      <div className='footerinvoice'>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><EmailIcon /></span>
                                          <span>Global@gmail.com</span>
                                        </p>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><PhoneIcon /></span>
                                          <span>+243 827 722 222</span>
                                        </p>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><WebIcon /></span>
                                          <span>www.GlobalGate.sarl</span>
                                        </p>
                                      </div>
                                    </div>
                                  </Box>
                                  {/** */}
                                  {/* Purchase View Create End */}
                                </div>
                              ))}
                            </div>
                          </TabPanel>
                          <TabPanel value="4" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                            {loadingTab && <LinearProgress sx={{ position: 'sticky', top: 0, zIndex: 1 }} />}
                            <div style={{ padding: '20px', backgroundColor: 'white' }}>
                              <Typography variant="h6" gutterBottom>Project Advances / Payments</Typography>
                              <TableContainer component={Paper}>
                                <Table>
                                  <TableHead>
                                    <TableRow sx={{ backgroundColor: '#e8f7fe' }}>
                                      <TableCell>Date</TableCell>
                                      <TableCell>PAY #</TableCell>
                                      <TableCell>Mode</TableCell>
                                      <TableCell align="right">Amount</TableCell>
                                      <TableCell>Status</TableCell>
                                      <TableCell>Description</TableCell>
                                      <TableCell>Action</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {advances.map((pay) => (
                                      <TableRow key={pay._id}>
                                        <TableCell>{dayjs(pay.paymentDate).format('DD/MM/YYYY')}</TableCell>
                                        <TableCell>PAY-{String(pay.paymentNumber).padStart(6, '0')}</TableCell>
                                        <TableCell>{pay.modes}</TableCell>
                                        <TableCell align="right">${pay.TotalAmount?.find(i => i.id === id)?.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                        <TableCell>{pay.status || 'Cleared'}</TableCell>
                                        <TableCell>{pay.description}</TableCell>
                                        <TableCell>
                                          <NavLink to={`/PaymentInformationView/${pay._id}`} className='LinkName'>
                                            View
                                          </NavLink>
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                    {advances.length === 0 && (
                                      <TableRow>
                                        <TableCell colSpan={7} align="center">No advances found for this project.</TableCell>
                                      </TableRow>
                                    )}
                                    <TableRow sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                      <TableCell colSpan={3} align="right">Total Advances:</TableCell>
                                      <TableCell align="right">${totalAdvances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                      <TableCell colSpan={3}></TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </div>
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </div>
                  ))}

              </div>
            )}
          </div>
        </div>
      </Grid>
      {
        show1 === 2 ?
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
          </Grid> : ""
      }
      {
        show1 === 3 ?
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
              <div style={{ height: '510px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                <div style={{ padding: '10px' }}>
                  {
                    project.filter((row) => row._id === id)
                      .map((row) => (
                        <p key={row._id}>{row.Create ? (
                          <span>{row.Create.dateComment} {row.Create.person} {row.Create.projectName}</span>
                        ) : ''}</p>
                      ))
                  }
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
          </Grid> : ""
      }
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

      <div style={{ display: 'none' }}>
        {printData && (
          <table ref={componentRef} className='invoicedetails' style={{ width: '100%' }}>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ borderBottom: '1px solid black' }}>
                  <div className='invoiceTest'>
                    <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : ""} />
                  </div>
                </th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div>
                    <p className='invoicehr'>Purchase</p>
                    <div className='content' style={{ marginBottom: '20px', position: 'relative' }}>
                      <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                          <span style={{ fontWeight: 'bold' }}>{printData.projectName?.projectName?.toUpperCase()}</span>
                        </address>
                        <table className="firstTable" style={{ position: 'relative', fontSize: '80%', left: '83px' }}>
                          <tbody>
                            <tr>
                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Pur #</span></th>
                              <td style={{ backgroundColor: 'white', border: 'none' }}><span >PUR-{String(printData.purchaseNumber).padStart(6, '0')}</span></td>
                            </tr>
                            <tr>
                              <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                              <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(printData.purchaseDate).format('DD/MM/YYYY')}</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </section>
                      <section style={{}}>
                        <table className="secondTable" style={{ fontSize: '70%' }}>
                          <thead>
                            <tr>
                              <th style={{ width: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>N</th>
                              <th style={{ width: '250px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Item</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Qty</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Unit Price</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Need</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Buy</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Buy</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">I-Out</th>
                              <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total-Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            {printData.items?.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0).map((Item, i) => {
                              const relatedUnit = itemMap[Item.itemName?._id]
                              return (
                                <Row3 key={i} row={Item} index={i} relatedUnit={relatedUnit} />
                              )
                            })}
                          </tbody>
                          <tbody>
                            <tr>
                              <td colSpan={3} style={{ border: '1px solid #DDD' }} align="left">SubTotal </td>
                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{(printData.purchaseAmount1 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{(printData.purchaseAmount2 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                              <td colSpan={2} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            </tr>
                            {Object.keys(expenses)?.map((Item, i) => (
                              <Row key={Item} row={Item} index={i} />
                            ))}
                            <tr>
                              <td colSpan={5} style={{ border: '1px solid #DDD' }} align="left">SubTotal 2</td>
                              <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            </tr>

                            <Row2 />

                            <tr>
                              <td colSpan={5} style={{ border: '1px solid #DDD' }} align="left">Total Generale</td>
                              <td colSpan={4} style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
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
                          <p>     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.</p>
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
                    <PrintFooter branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />

                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>

    </Grid >
  )
}

export default ProjectViewInformation
