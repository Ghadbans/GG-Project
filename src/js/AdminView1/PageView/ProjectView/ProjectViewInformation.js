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
import { useNavigate, NavLink, useParams, Link } from 'react-router-dom';
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
import Logout from '@mui/icons-material/Logout';
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
import db from '../../../dexieDb';
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
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  const [item, SetItems] = useState([])
  useEffect(() => {
    const fetchProject = async () => {
      if (navigator.onLine) {
        try {
          console.log('🔍 [FILTERED API] Fetching project details for:', id);
          const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-projects/${id}`)
          const item = res.data.data;
          const projectData = {
            ...item,
            id: item._id,
            visitField: dayjs(item.visitDate).format('DD/MM/YYYY'),
            startField: dayjs(item.startDate).format('DD/MM/YYYY'),
          };

          setProject([projectData]);

          // Fetch items separately
          const resItem = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
          SetItems(resItem.data.data)
          setLoadingData(false)
        } catch (error) {
          console.error('❌ [FILTERED API] Error fetching project details:', error);
          setLoadingData(false)
        }
      } else {
        const itemLocal = await db.projectSchema.get({ _id: id });
        if (itemLocal) {
          const projectData = {
            ...itemLocal,
            id: itemLocal._id,
            visitField: dayjs(new Date(itemLocal.visitDate)).format('DD/MM/YYYY'),
            startField: dayjs(new Date(itemLocal.startDate)).format('DD/MM/YYYY'),
          };
          setProject([projectData]);
        }
        const offLineItem = await db.itemSchema.toArray();
        SetItems(offLineItem)
        setLoadingData(false)
      }
    }
    fetchProject()
  }, [id])
  const [projectNumber, setProjectNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [customerName1, setCustomerName1] = useState("");
  useEffect(() => {
    const fetchDataHidden = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/hidden')
          const resP = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-projects/${id}`)
          setProjectName(resP.data.data.projectName);
          setCustomerName1(resP.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
          setProjectNumber(resP.data.data.projectNumber);
          setHidden(res.data.data)
          await Promise.all(res.data.data.map(async (item) => {
            await db.hiddenSchema.put({ ...item, synced: true, updateS: true })
          }))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.hiddenSchema.toArray();
        setHidden(offLineCustomer1)
      }
    }
    fetchDataHidden()
  }, [])

  const [purchase, setPurchase] = useState([])
  const [items, setItem] = useState([])
  useEffect(() => {
    const fetchPurchase = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
          const NewData = res.data.data.filter((row) => row.projectName._id === id)
          const newItem = NewData.map((row) => row.items.map((Item) => {
            const totalCostOut = Item.itemOut * Item.itemCost;
            return {
              ...Item, totalCostOut
            }
          }))
          newItem.map((row) => setItem(row))
          // Handle the response data here
          setPurchase(NewData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.purchaseSchema.toArray();
        const NewData = offLineCustomer1.filter((row) => row.projectName._id === id)
        const newItem = NewData.map((row) => row.items.map((Item) => {
          const totalCostOut = Item.itemOut * Item.itemCost;
          return {
            ...Item, totalCostOut
          }
        }))
        newItem.map((row) => setItem(row))
        // Handle the response data here
        setPurchase(NewData);
      }
    }
    fetchPurchase()
  }, [id]);
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
  useEffect(() => {
    const fetchProjectRelatedData = async () => {
      if (navigator.onLine) {
        try {
          console.log('🔍 [FILTERED API] Fetching professional project summary for:', id);

          // Use professional filtered endpoints (Zoho CRM approach)
          const [resInvoice, resItemOut, resIReturn, resIPurchase, resCategory, resExpenses, resNotification, resPlaning] = await Promise.all([
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/invoice/project/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/itemOut/project/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/itemReturn/project/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/itemPurchase/project/${id}`),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/expensesCategory'),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/expense/project/${id}`),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/notification'),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/planing/project/${id}`)
          ]);

          setInvoice(resInvoice.data.data);
          setItemOut(resItemOut.data.data.map((row) => ({ ...row, outNumber: "O-0" + row.outNumber, type: 'Item Out' })));
          setItemReturn(resIReturn.data.data.map((row) => ({ ...row, outNumber: "R-0" + row.outNumber, type: 'Item return' })));
          setItemPurchase(resIPurchase.data.data);
          setCategories(resCategory.data.data);

          const resultExpenses = resExpenses.data.data.map((row) => ({
            _id: row._id,
            category: row.expenseCategory.expensesCategory,
            total: row.total,
            date: row.expenseDate,
            expenseNumber: row.expenseNumber,
            description: row.description
          }));
          setExpensesInfo(resultExpenses);

          setNotification(resNotification.data.data.filter((row) => row.idInfo === id));

          const resultPlaning = resPlaning.data.data.map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
          }));
          setPlaningInfo(resultPlaning);

          console.log('✅ [FILTERED API] Successfully loaded professional project summary');
        } catch (error) {
          console.error('❌ [FILTERED API] Error fetching project data:', error);
        }
      } else {
        const invoiceSchemaInfo = await db.invoiceSchema.toArray();
        const NewData = invoiceSchemaInfo.filter((row) =>
          purchase.find((Item) => row.ReferenceName2 !== undefined ? row.ReferenceName2 === Item._id : null)
        )
        setInvoice(NewData);
        const outItemInfo = await db.itemOutSchema.toArray();
        setItemOut(outItemInfo.filter((row) => row.reference._id === id).map((row) => ({ ...row, outNumber: "O-0" + row.outNumber, type: 'Item Out' })))
        const returnInfo = await db.itemReturn.toArray();
        setItemReturn(returnInfo.filter((row) => row.reference._id === id).map((row) => ({ ...row, outNumber: "R-0" + row.outNumber, type: 'Item return' })))
        const categoryInfo = await db.dailyExpensesCategorySchema.toArray();
        setCategories(categoryInfo);
        const expensesInfo = await db.dailyExpenseSchema.toArray();
        const result = expensesInfo.filter((row) => row.accountNameInfo !== undefined && row.accountNameInfo._id === id)
          .map((row, i) => ({
            _id: row._id,
            category: row.expenseCategory.expensesCategory,
            total: row.total,
            date: row.expenseDate,
            expenseNumber: row.expenseNumber,
            description: row.description
          }))
        setExpensesInfo(result)
        const offLineCustomer1 = await db.planingSchema.toArray();
        const resultPlaning = offLineCustomer1.filter((row) => row.projectName !== undefined && row.projectName._id === id)
          .map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
          }))
        setPlaningInfo(resultPlaning)
      }
    }
    fetchProjectRelatedData()
  }, [id])
  {/** const resItemOut = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/itemOut')
         const OutFilter = resItemOut.data.data.map((row)=>({...row, outNumber: "O-0" + row.outNumber,type:'Out', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemOut(OutFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 ))
         const resIReturn = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/itemReturn')
         const returnFilter = resIReturn.data.data.map((row)=>({...row, outNumber: "R-0" + row.outNumber, type:'return', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemReturn(returnFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 )) */}

  const newOutR = [...itemOut, ...itemReturn]

  const formatDate2 = newOutR.map((row) => ({
    ...row,
    itemsQtyArray: row.itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) > 0)
  })).filter(row => row.itemsQtyArray.length > 0)

  const relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter((item) => parseFloat(item.itemQty) > 0 && item.itemName._id !== undefined).forEach((item) => {
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
    row.items.filter((item) => parseFloat(item.itemQty) > 0 && item.itemName._id === undefined).forEach((item) => {
      const ItemName = item.itemName.itemName;
      const Id = item.itemName._id;
      const description = item.itemDescription;
      if (!acc[description]) {
        acc[description] = { ItemName, Id, description, total: 0 }
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
    allItemPurchase?.forEach((row2) => {
      const existingItem = updatedPurchase.items?.findIndex(
        (itemI) => row2.Id ? itemI.itemName._id === row2.Id : itemI.itemDescription === row2.description
      )
      if (existingItem > -1) {
        updatedPurchase.items[existingItem].itemBuy = row2.total
      } else {
        const itemDetails = item.find((detail) => detail._id === row2.Id)
        updatedPurchase.items.push({
          idRow: v4(),
          itemName: {
            _id: row2.Id || "",
            itemName: row2.ItemName
          },
          itemDescription: row2.description,
          itemDiscount: 0,
          itemQty: row2.total,
          itemRate: itemDetails?.itemSellingPrice || 0,
          itemCost: itemDetails?.itemCostPrice || 0,
          totalAmount: row2.total * itemDetails?.itemSellingPrice || 0,
          discount: (row2.total * (itemDetails?.itemSellingPrice || 0)) * 0,
          percentage: ((row2.total * (itemDetails?.itemSellingPrice || 0)) * 0) / 100,
          itemAmount: (row2.total * (itemDetails?.itemSellingPrice || 0)) - (((row2.total * (itemDetails?.itemSellingPrice || 0)) * 0) / 100),
          totalCost: row2.total * itemDetails?.itemCostPrice || 0,
          totalGenerale: itemDetails?.itemCostPrice || 0 * row2.total,
          itemBuy: row2.total,
          itemWeight: "",
          stock: itemDetails?.itemQuantity || 0,
          itemOut: 0,
          newItemOut: 0,
        })
      }
    })
    return updatedPurchase
  })


  const related = itemOut.length > 0 ? itemOut.reduce((acc, row) => {
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

  const relatedReturn = itemReturn.length > 0 ? itemReturn.reduce((acc, row) => {
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

  const newAllOutReturn = related !== null ? Object.values(related).map(({ ItemName, Id, total }) => {
    const related1 = relatedReturn !== null ? Object.values(relatedReturn).find(({ ItemName1, Id1, total1 }) => Id1 === Id) : null
    return ({
      ItemName,
      Id,
      total: related1 ? total - related1.total1 : total
    })
  }) : null

  const relatedPurchase = purchase.map((row) => ({
    ...row,
    items: row.items.map((Item) => {
      const newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find((Item1) => Item1.Id === Item.itemName._id) : null
      return ({
        ...Item,
        itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : 0
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
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
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
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchase/${row._id}`, {
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
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchase/${row._id}`, row)
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
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-comment/', data)
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
    documentTitle: 'P-00' + projectNumber + ' For ' + customerName1 + ' (' + projectName + ')',
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
    number: 'PUR-00' + row.purchaseNumber,
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
      no: 'D-0' + Item.expenseNumber,
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
      workSheet.addRow([item.no, item.date, item.category, item.description, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost])
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
    saveAs(bold, `${'P-00' + projectNumber + ' For ' + customerName1 + ' (' + projectName + ')'}.xlsx`)
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
                  <td style={{ textAlign: 'center', border: '1px solid #DDD' }}><span> {open ? <KeyboardArrowUpIcon /> : <span>{index + 1}</span>}
                  </span></td>
                  <td style={{ textAlign: 'center', border: '1px solid #DDD' }} colSpan={6}>{row.newDescription}</td>
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
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left">{row.itemBuy}</td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>$</span><span>{row.totalGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>{row.itemOut} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span></td>
                  <td style={{ border: '1px solid #DDD' }} align="left"><span>{(row.itemOut * row.itemCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                </>
              )
          }
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div">
                  Item Out Info
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
                      formatDate2?.filter((row1) => row1.itemsQtyArray.some((Item) => Item.itemName._id === row.itemName._id)).map((row1, index1) => (
                        <tr key={index1}>
                          <td style={{ border: '1px solid #DDD' }}>{row1.outNumber}</td>
                          <td style={{ border: '1px solid #DDD' }}>{dayjs(row1.itemOutDate).format('DD/MM/YYYY-HH:mm')}</td>
                          <td style={{ border: '1px solid #DDD' }}>{row1.type}</td>
                          <td style={{ border: '1px solid #DDD' }}>
                            {row1.itemsQtyArray.filter((Item1) => Item1.itemName._id === row.itemName._id).map((Item1, i) => (
                              <p key={i}>
                                <span>{Item1.newItemOut}</span>
                              </p>
                            ))}
                          </td>
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
  function Row(props) {
    const { row } = props;
    const { index } = props;
    const [open, setOpen] = React.useState(false);
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
                <Typography gutterBottom component="div">
                  Expenses Info
                </Typography>
                <table style={{ marginBottom: '5px' }}>
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
                          <td style={{ textAlign: 'center', border: '1px solid #DDD' }}>D-0{row1.expenseNumber}</td>
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
                <Typography gutterBottom component="div">
                  Expenses Info
                </Typography>
                <table style={{ marginBottom: '5px' }}>
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
              Project Information
            </Typography>
            <IconButton onClick={() => navigate('/ProjectViewAdmin')}>
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
                <div >
                  <Grid container spacing={2}>
                    {show1 === 1 ?
                      <Grid item xs={3}>
                        {
                          user.data.role === 'CEO' ?
                            (
                              <div>
                                {show2 === 1 ? (
                                  <div className='itemInfoContainer'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                      <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                                        <Checkbox />
                                        <Typography variant='h6'>All Project</Typography>
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
                                        {project?.map((row, index) => (
                                          <Tab
                                            key={index}
                                            label={row.customerName.customerName + ' | ' + 'P-00' + row.projectNumber}
                                            component={Link}
                                            to={`/ProjectViewInformation/${row._id}`}
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
                                {show2 === 2 ? (
                                  <div className='itemInfoContainer'>
                                    <Grid container spacing={3}>
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
                                            label={row.customerName.customerName + ' | ' + 'P-00' + row.projectNumber}
                                            component={Link}
                                            to={`/ProjectViewInformation/${row._id}`}
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
                              </div>
                            ) :
                            (
                              <div>
                                {show2 === 1 ? (
                                  <div className='itemInfoContainer'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                      <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                                        <Checkbox />
                                        <Typography variant='h6'>All Project</Typography>
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
                                        {filteredRows?.map((row, index) => (
                                          <Tab
                                            key={index}
                                            label={row.customerName.customerName + ' | ' + 'P-00' + row.projectNumber}
                                            component={Link}
                                            to={`/ProjectViewInformation/${row._id}`}
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
                                {show2 === 2 ? (
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
                                        {newArray2?.map((row, index) => (
                                          <Tab
                                            key={index}
                                            label={row.customerName.customerName + ' | ' + 'P-00' + row.projectNumber}
                                            component={Link}
                                            to={`/ProjectViewInformation/${row._id}`}
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
                              </div>
                            )
                        }

                      </Grid> :
                      ""}
                    <Grid item xs={9} >
                      <div className='itemInfoContainer2'>
                        <div style={{ width: '100%', background: 'white' }}>

                          {project.filter(i => i._id === id)
                            .map((row) => (
                              <div key={row._id}>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}> {'P-00' + row.projectNumber} | {row.projectName}</Typography>
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
                                        <Tab label="Invoice" value="2"
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
                                        <Tab label="P-Request" value="3"
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
                                                      <td>P-00{row.projectNumber}</td>
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
                                                <Card sx={{ width: '450px', height: '190px' }}>

                                                  <CardContent style={{ position: 'relative', justifyContent: 'center', top: '20px' }}>
                                                    <table style={{ width: '100%', color: 'gray', fontSize: '20px' }}>
                                                      <tbody>
                                                        {invoice ?
                                                          invoice.map((row1) => (
                                                            <tr key={row1._id}>
                                                              <th style={{ textAlign: 'left' }}>Budget</th>
                                                              <td ><span data-prefix>$</span><span className='InvoiceTotal '>{row1.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )) : ''}
                                                        {
                                                          invoice.length === 0 && (
                                                            <tr>
                                                              <th style={{ textAlign: 'left' }}>Budget</th>
                                                              <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(row.budget !== undefined ? row.budget : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )
                                                        }

                                                        <tr>
                                                          <th style={{ textAlign: 'left' }}>Amount Use </th>
                                                          <td>
                                                            <span>$</span><span className='PurchaseTotal'>{parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                                          </td>
                                                        </tr>
                                                        {invoice ?
                                                          invoice.map((row1) => (
                                                            <tr key={row1._id}>
                                                              <th style={{ textAlign: 'left' }}></th>
                                                              <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(row1.totalInvoice - (totalAmount + totalGeneralOutCost + totalAmountPlaning)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )) :
                                                          ''
                                                        }
                                                        {
                                                          invoice.length === 0 && (
                                                            <tr>
                                                              <th style={{ textAlign: 'left' }}></th>
                                                              <td ><span data-prefix>$</span><span className='InvoiceTotal '>{parseFloat(row.budget !== undefined ? row.budget - (totalAmount + totalGeneralOutCost + totalAmountPlaning) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )
                                                        }
                                                      </tbody>
                                                      <tbody>
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
                                      <div>
                                        {invoice ?
                                          invoice.map((row) => (
                                            <div key={row._id} className='invoicedetails'>

                                              <header className='invoiceTest'>
                                                <span>
                                                  <img src={Image} style={{ width: '650px', height: '80px' }} />
                                                </span>
                                                <address style={{ textAlign: 'right' }}>
                                                  <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                                  <p>RCM CD/KWZ/RCCM/22-B-00317 </p>
                                                  <p> ID NAT 14-H5300N11179P </p>
                                                  <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
                                                  <p>  KOLWEZI LUALABA </p>
                                                  <p>   DR CONGO </p>
                                                </address>
                                              </header>
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
                                                        <td style={{ backgroundColor: 'white', border: 'none' }}><span >INV-00{row.invoiceNumber}</span></td>
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
                                                        <span> Sub Total</span><br />
                                                        <span className='txt1'>(Tax Inclusive)</span>
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
                                      <div >
                                        {purchase?.map((row) => (
                                          <div key={row._id}>

                                            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                              <div>
                                                <Typography><span style={{ fontWeight: 'bold' }}>REFERENCE: </span>PUR-00{row.purchaseNumber}</Typography>
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
                                                  <MenuItem onClick={handleOpenPrint} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
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
                                                      row.status === 'Draft' && (
                                                        <NavLink to={`/ConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                          <span>Convert To Invoice</span>
                                                        </NavLink>
                                                      ) || row.status === 'Estimated' && (
                                                        <NavLink to={`/ConvertToInvoice/${row._id}`} className='LinkName' style={{ color: 'gray' }}>
                                                          <span>Convert To Invoice</span>
                                                        </NavLink>
                                                      )
                                                    }
                                                    {
                                                      row.status === 'Invoiced' && (
                                                        <span style={{ color: 'gray' }} onClick={handleCloseMenu}> Already Converted</span>
                                                      ) || row.status === 'Make' && (
                                                        <span style={{ color: 'gray' }} onClick={handleCloseMenu}> Already Converted</span>
                                                      )
                                                    }
                                                  </MenuItem>
                                                </Menu>
                                              </div>
                                            </header>
                                            <hr />
                                            {/**  */}
                                            <Box hidden >
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
                                                        <p className='invoicehr'>Purchase</p>
                                                        <div className='content' style={{ marginBottom: '20px', position: 'relative' }}>
                                                          <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                            <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                                                              <span style={{ fontWeight: 'bold' }}>{row.projectName.projectName.toUpperCase()}</span>
                                                            </address>
                                                            <table className="firstTable" style={{ position: 'relative', fontSize: '80%', left: '83px' }}>
                                                              <tbody>
                                                                <tr>
                                                                  <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Pur #</span></th>
                                                                  <td style={{ backgroundColor: 'white', border: 'none' }}><span >PUR-00{row.purchaseNumber}</span></td>
                                                                </tr>
                                                                <tr>
                                                                  <th style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Date</span></th>
                                                                  <td style={{ backgroundColor: 'white', border: 'none' }}><span >{dayjs(row.purchaseDate).format('DD/MM/YYYY')}</span></td>
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
                                                                {row.items?.map((Item, i) => {
                                                                  const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
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
                                            <Box sx={{ padding: '20px' }}>
                                              <div>
                                                <header className='invoiceTest'>
                                                  <div>
                                                    <img src={Image} style={{ width: '500px', height: '100px' }} />
                                                  </div>
                                                  <address style={{ textAlign: 'right' }}>
                                                    <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                                    <p>RCM CD/KWZ/RCCM/22-B-00317 </p>
                                                    <p> ID NAT 14-H5300N11179P </p>
                                                    <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
                                                    <p>  KOLWEZI LUALABA </p>
                                                    <p>   DR CONGO </p>
                                                  </address>
                                                </header>
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
                                                          <td style={{ backgroundColor: 'white', border: 'none' }}><span >PUR-00{row.purchaseNumber}</span></td>
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
                                                      {row.items?.map((Item, i) => {
                                                        const relatedUnit = item.find((Item1) => Item1._id === Item.itemName._id)
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
                                  </TabContext>
                                </Box>
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
                      </Grid> : ""}
                  </Grid>
                </div>)}</Container>
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

export default ProjectViewInformation
