import React, { useEffect, useState } from 'react'
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import { Backdrop, MenuItem, Grid, IconButton, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, Modal, Box, styled, OutlinedInput, InputAdornment, Divider } from '@mui/material';
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
import { Add, DragIndicatorRounded, Edit, RemoveCircleOutline } from '@mui/icons-material';
import { useNavigate, useParams, Navigate, NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
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
const DownTooltip = styled(({ className, ...props }) => (
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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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
function ConvertToInvoice() {
  const { id } = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
        .then(res => {
          // Handle the response data here
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role }));
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
          dispatch(logOut())
        });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch])

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/create-invoice';
  const invoiceDate = dayjs(Date.now());
  const [invoiceDueDate, setInvoiceDueDate] = useState("");
  const [invoiceSubject, setInvoiceSubject] = useState("");
  const [projectId, setProjectID] = useState('');
  const [invoiceDefect, setInvoiceDefect] = useState("");
  const [inputValue, setInputValue] = React.useState('');
  const [invoiceNumber, setInvoiceNumber] = useState(0);
  const [items, SetItems] = useState([]);
  const [purchaseName, setPurchaseName] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [adjustment, setAdjustment] = useState('Adjustment')
  const [adjustmentNumber, setAdjustmentNumber] = useState(0)
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [balanceDue, setBalanceDue] = useState(0);
  const [totalW, setTotalW] = useState("");
  const [ItemInformation, setItemInformation] = useState([]);
  const [note, setNote] = useState("Thanks For your Business.");
  const [terms, setTerms] = useState("ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. ");
  const dateComment = dayjs(Date.now()).format('DD/MM/YYYY')
  const Create = {
    person: user.data.userName + ' CREATED ',
    dateComment
  }
  const [expensesInfo, setExpensesInfo] = useState([])
  const [categories, setCategories] = useState([]);
  const [noteInfo, setNoteInfo] = useState("");
  const invoiceName = "INV-00" + invoiceNumber
  const [customer, setCustomer] = useState('');
  const [customerName, setCustomerName] = useState({});
  const [expenses, setExpenses] = useState({});
  const [planingInfo, setPlaningInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-purchase/${id}`)
        setCustomer(res.data.data.customerName);
        setProjectID(res.data.data.projectName._id);
        SetItems(res.data.data.items);
        setPurchaseName(res.data.data._id);
        setNoteInfo(res.data.data.noteInfo);
        setInvoiceSubject(res.data.data.projectName.projectName);
        setInvoiceDefect(res.data.data.estimateDefect);
        const resPayment = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/payment');
        const projectPayments = resPayment.data.data.filter(p => p.TotalAmount && p.TotalAmount.some(t => t.id === res.data.data.projectName._id));
        const totalPrePaid = projectPayments.reduce((sum, p) => sum + parseFloat(p.TotalAmount.find(t => t.id === res.data.data.projectName._id)?.total || 0), 0);
        setTotal(totalPrePaid);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchCustomer = async () => {
      if (customer) {
        try {
          const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-customer/${customer._id}`)
          setCustomerName(
            {
              _id: res.data.data._id,
              customerName: res.data.data.Customer,
              billingAddress: res.data.data.billingAddress,
              billingCity: res.data.data.billingCity
            }
          )
          if (res.data.data.paymentTerms === "Net 3") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 3);
            setInvoiceDueDate(currentDate)
          } else if (res.data.data.paymentTerms === "Net 10") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 10);
            setInvoiceDueDate(currentDate)
          } else if (res.data.data.paymentTerms === "Net 15") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 15);
            setInvoiceDueDate(currentDate)
          } else if (res.data.data.paymentTerms === "Net 20") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 20);
            setInvoiceDueDate(currentDate)
          } else if (res.data.data.paymentTerms === "Net 25") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 25);
            setInvoiceDueDate(currentDate)
          } else if (res.data.data.paymentTerms === "Due end of the month") {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getMonth() + 1);
            currentDate.setDate(0);
            setInvoiceDueDate(currentDate);
          } else if (res.data.data.paymentTerms === "Due on Receipt") {
            const currentDate = new Date();
            setInvoiceDueDate(currentDate)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchCustomer()
  }, [customer])

  useEffect(() => {
    const fetchlastNumber = async () => {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/get-last-saved-invoice')
        setInvoiceNumber(parseInt(res.data.invoiceNumber) + 1)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchlastNumber()
  }, [])
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/item')
        setItemInformation(res.data.data.reverse())
        SetItems(items => items.map((row) => {
          const related = res.data.data.find((row2) => row.itemName !== undefined && row2._id === row.itemName._id)
          if (related) {
            return {
              ...row, itemRate: related.itemSellingPrice, totalAmount: row.itemQty * related.itemSellingPrice,
              discount: (row.itemQty * related.itemSellingPrice) * row.itemDiscount,
              percentage: ((row.itemQty * related.itemSellingPrice) * row.itemDiscount) / 100,
              itemAmount: (row.itemQty * related.itemSellingPrice) - (((row.itemQty * related.itemSellingPrice) * row.itemDiscount) / 100),
            }
          }
          return row
        }))
        const resCategory = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/expensesCategory')
        setCategories(resCategory.data.data);
        const resExpenses = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/expense')
        const resPlaning = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/planing')
        if (projectId) {
          const result = resExpenses.data.data.filter((row) => row.accountNameInfo !== undefined && row.accountNameInfo._id === projectId)
          setExpensesInfo(result)
          const resultPlaning = resPlaning.data.data.filter((row) => row.projectName !== undefined && row.projectName._id === projectId)
            .map((row) => ({
              ...row,
              totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
            }))
          setPlaningInfo(resultPlaning)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchItem()
  }, [projectId])
  useEffect(() => {
    const categoryTotal = expensesInfo?.reduce((acc, curr) => {
      if (!acc[curr.expenseCategory.expensesCategory]) {
        acc[curr.expenseCategory.expensesCategory] = 0
      }
      acc[curr.expenseCategory.expensesCategory] += parseFloat(curr.total)
      return acc
    }, {})
    let newRow = []
    let newRow1 = []
    Object.keys(categoryTotal)?.forEach((Item, i) => {
      newRow.push({
        idRow: v4(),
        itemName: {
          itemName: 'empty'
        },
        itemDescription: Item.toUpperCase(),
        itemDiscount: 0,
        discount: (1 * categoryTotal[Item]) * 0,
        percentage: ((1 * categoryTotal[Item]) * 0) / 100,
        itemRate: categoryTotal[Item],
        totalAmount: 1 * categoryTotal[Item],
        itemAmount: (1 * categoryTotal[Item]) - (((1 * categoryTotal[Item]) * 0) / 100),
        itemQty: 1,
        totalCost: 0,
        itemCost: 0,
      })
    })
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
    const totalPayRoll = totalAmount2?.reduce((sum, row) => sum + row.total, 0);

    newRow1.push({
      idRow: v4(),
      itemName: {
        itemName: 'empty'
      },
      itemDescription: "EMPLOYEE",
      itemDiscount: 0,
      discount: (1 * totalPayRoll) * 0,
      percentage: ((1 * totalPayRoll) * 0) / 100,
      itemRate: totalPayRoll,
      totalAmount: 1 * totalPayRoll,
      itemAmount: (1 * totalPayRoll) - (((1 * totalPayRoll) * 0) / 100),
      itemQty: 1,
      totalCost: 0,
      itemCost: 0,
    })
    SetItems([...items, ...newRow, ...newRow1])
  }, [expensesInfo, planingInfo])
  const handleChange = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...items];
    const i = items.findIndex(Item => Item.idRow === idRow)
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round((list[i]['itemQty'] * list[i]['itemRate']) * 100) / 100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty'] * list[i]['itemCost']) * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost'] * list[i]['itemBuy']) * 100) / 100;
    SetItems(list);
  }
  const handleChangeCEO = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...items];
    const i = items.findIndex(Item => Item.idRow === idRow)
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round((list[i]['itemQty'] * list[i]['itemRate']) * 100) / 100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty'] * list[i]['itemCost']) * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost'] * list[i]['itemBuy']) * 100) / 100;
    SetItems(list);
  }
  //addItem
  const addItem = () => {
    SetItems([...items, {
      idRow: v4(),
      itemName: {},
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0,
    }]);
  }
  const addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0,
    }]);
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        itemName: 'empty'
      },
    } : row))
  }
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems)
  };
  const filterItemInformation = ItemInformation.filter(option => !items.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))
  {/** Modal Item Show */ }
  const [selectedRowId, setSelectedRowId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [targetRowId, setTargetRowId] = useState('');
  const handleDelete = (idRow) => {
    setSelectedRowId(idRow);
    setShowModal(true);
  }
  const handleCloseRowId = () => {
    setShowModal(false);
  }
  const deleteItem = () => {
    const newRowId = targetRowId
    if (newRowId) {
      const selectRow = items.find(item => item.idRow === selectedRowId);
      const targetRow = items.find(item => item.idRow === newRowId);
      if (selectRow && targetRow) {
        const newTotal = Math.round((targetRow.totalAmount += selectRow.totalAmount) * 100) / 100
        const newRate = Math.round((newTotal / targetRow.itemQty) * 100) / 100
        const newTotalAmount = Math.round((targetRow.itemQty * newRate) * 100) / 100
        const discountTarget = Math.round((targetRow.itemDiscount * newTotalAmount) * 100) / 100
        const newPercentage = Math.round((discountTarget / 100) * 100) / 100
        const newTotalG = Math.round((newTotalAmount - newPercentage) * 100) / 100
        //update rate
        const updateRate = items.map(item => {
          if (item.idRow === targetRow.idRow) {
            return {
              ...item,
              itemRate: newRate,
              totalAmount: newTotalAmount,
              discount: discountTarget,
              percentage: newPercentage,
              itemAmount: newTotalG
            }
          }
          return item
        })
        SetItems(updateRate)
      }
    }
    SetItems(items => items.filter((Item) => Item.idRow !== selectedRowId));
    setSelectedRowId(''); setShowModal(false); setTargetRowId('');
  };
  {/** Modal Item Show End */ }

  const [open1, setOpen1] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpen1(true);
  };
  const handleCloseBack = () => {
    setOpen1(false);
  };

  {/** Item InFO */ }
  const handleChangeItem = (idRow, newValue) => {
    const selectedOptions = ItemInformation.find((option) => option === newValue)
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: selectedOptions?._id,
        itemName: selectedOptions?.itemName,
      },
      itemCost: selectedOptions?.itemCostPrice,
      itemDescription: selectedOptions?.itemDescription,
      itemRate: selectedOptions?.itemSellingPrice,
      stock: selectedOptions?.itemQuantity,
    } : row))
  }
  const handleShowAutocomplete = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
    } : row))
  }
  const [openItemUpdate, setOpenItemUpdate] = useState(false);
  const [idItem, setIdItem] = useState(null)

  const handleOpenItemUpdate = async (id) => {
    setOpenItemUpdate(true);
    setIdItem(id);
  };
  const handleCloseItemUpdate = async () => {
    setOpenItemUpdate(false);
    if (idItem) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-item/${idItem}`)
        SetItems(items => items.map((row) => row.itemName._id === res.data.data._id ? {
          ...row,
          itemName: {
            _id: res.data.data._id,
            itemName: res.data.data.itemName
          },
          itemDescription: res.data.data.itemDescription,
          itemCost: res.data.data.itemCostPrice,
          itemRate: res.data.data.itemSellingPrice,
          stock: res.data.data.itemQuantity,
          totalAmount: row.itemQty * res.data.data.itemSellingPrice,
          discount: (row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount,
          percentage: ((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100,
          itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100)
        } : row))
      } catch (error) {

      }
    }
  };
  const [openAutocomplete2, setOpenAutocomplete2] = useState(false);

  const handleOpenOpenAutocomplete2 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete2(true);
  };
  const handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  const handleCreateItem = (newItem) => {
    setItemInformation([...ItemInformation, newItem])
  }
  useEffect(() => {
    const result1 = items.reduce((sum, row) => sum + row.itemAmount, 0)
    setSubTotal(result1.toFixed(2))
    let newTotal = Number(subTotal) + Number(shipping) + Number(adjustmentNumber)
    setTotalInvoice(newTotal)
    let newBalance = totalInvoice - total
    setBalanceDue(newBalance)
  })
  useEffect(() => {
    if (totalInvoice) {
      const wholePart = Math.floor(totalInvoice)
      const fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      const wholeWords = numberToWords.toWords(wholePart)
      const fractionalWords = numberToWords.toWords(fractionalPart)
      setTotalW(`${wholeWords} and ${fractionalWords} cents`)
    }
  }, [totalInvoice])
  {/** Item InFO End */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [loadingOpenModalUpdate, setLoadingOpenModalUpdate] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setLoadingOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleError = () => {
    setErrorOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }

  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  }
  const statusPurchase = 'Invoiced'
  const handleSubmitStatusUpdate = async (ReferenceInfo) => {
    const data = {
      status: statusPurchase,
      ReferenceName2: ReferenceInfo,
      statusInfo: 'Completed'
    };
    try {
      await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-purchase/${id}`, data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmitStatusProject = async () => {
    const data = {
      status: 'Completed'
    };
    try {
      await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-projects/${projectId}`, data)
    } catch (error) {
      console.error(error)
    }
  }
  const [idInvoice, setIdInvoice] = useState('');
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'INV-' + ReferenceInfoNumber + ' For ' + customerName.customerName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    let status = ''
    if (total > 0 && total < totalInvoice) {
      status = 'Partially-Paid'
    } else if (parseFloat(total) === parseFloat(totalInvoice) && parseFloat(total) !== 0) {
      status = 'Paid'
    } else {
      status = 'Pending'
    }
    try {
      const res = await axios.post(apiUrl, {
        customerName,
        invoiceNumber,
        invoiceDate,
        invoiceDueDate,
        invoiceSubject,
        invoiceDefect,
        status,
        items,
        subTotal, noteInfo,
        invoiceName,
        invoicePurchase: 'Purchased',
        Position: 'Last',
        ReferenceName2: id,
        total,
        balanceDue,
        totalW,
        note, Create, shipping, adjustment, adjustmentNumber, totalInvoice, terms
      });
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.invoiceNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        handleSubmitStatusUpdate(ReferenceInfo);
        handleSubmitStatusProject();
        setIdInvoice(res.data.data._id)
        //submit Item
        handleOpen();
      }
    } catch (error) {
      if (error) {
        setSaving('')
        handleError();
      }
    }
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  const newArray2 = search2 !== '' ? items.filter((Item) =>
    Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
    Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
    Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())
  ) : items
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
              Convert to Invoice
            </Typography>
            <IconButton onClick={handleOpenBack}>
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
            <SidebarDash1 />
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
          <Container maxWidth="none" sx={{ mt: 4 }} >
            <div >
              <form onSubmit={handleSubmit}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id='customerName'
                      name='customerName'
                      label='Customer Name'
                      value={customer ? customer.customerName : ''}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor="invoiceNumber">Invoice Number</InputLabel>
                      <OutlinedInput
                        type='number'
                        id='invoiceNumber'
                        name='invoiceNumber'
                        label='Invoice Number'
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        startAdornment={<InputAdornment position="start">I-00</InputAdornment>}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='invoiceDate'
                          label='Date'
                          value={dayjs(invoiceDate)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='invoiceDueDate'
                          label='Due Date'
                          value={dayjs(invoiceDueDate)}
                          onChange={(date) => setInvoiceDueDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='invoiceSubject'
                      name='invoiceSubject'
                      label='Subject'
                      value={invoiceSubject !== undefined ? invoiceSubject : ''}
                      onChange={(e) => setInvoiceSubject(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='invoiceDefect'
                      name='invoiceDefect'
                      label='Defect'
                      value={invoiceDefect !== undefined ? invoiceDefect : ''}
                      onChange={(e) => setInvoiceDefect(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='noteInfo'
                      name='noteInfo'
                      multiline
                      rows={3}
                      value={noteInfo !== undefined ? noteInfo : ''}
                      label='Note'
                      onChange={(e) => setNoteInfo(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                      <TextField
                        label='Search'
                        id='search2'
                        value={search2}
                        variant="standard"
                        onChange={handleSearch2}
                      />
                    </section>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: 'block', position: 'fixed', zIndex: 1, float: 'right', right: '-5px' }}>
                      <section>
                        <BlackTooltip title="Add" placement="top">
                          <IconButton onClick={addItem}>
                            <Add className='btn1' style={{ fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>
                      <section>
                        <BlackTooltip title="Add" placement="bottom">
                          <IconButton onClick={addItemWhite}>
                            <Add className='btn1' style={{ backgroundColor: 'gray', fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>

                    </div>
                    {
                      user.data.role === 'CEO' ?
                        <div>
                          <DragDropContext onDragEnd={handleDragEnd}>
                            <table className='tableInfo10' style={{ marginLeft: '-20px' }}>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item</th>
                                  <th>Quantity</th>
                                  <th>Rate</th>
                                  <th>Discount %</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <Droppable droppableId="droppable" >
                                {(provided, snapshot) => (
                                  <tbody
                                    id="droppable"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {newArray2.map((Item, i) => (
                                      <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>
                                        {(provided, snapshot) => (
                                          <tr
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                          >
                                            {
                                              Item.newDescription !== undefined ? (
                                                <>
                                                  <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                                  <td colSpan={6}><TextField
                                                    required
                                                    name='newDescription' id='newDescription'
                                                    value={Item.newDescription}
                                                    onChange={(e) => handleChange(e, Item.idRow)}
                                                    size="small"
                                                    disabled={user.data.role === 'User'}
                                                    sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
                                                  /></td>
                                                  <td >
                                                    <LightTooltip title="Delete" sx={{}}>
                                                      <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                  </td>
                                                </>
                                              ) : (
                                                <>
                                                  <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                                  <td style={{ height: '100px' }}>
                                                    {
                                                      Item.itemName.itemName ? (
                                                        (
                                                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <div >
                                                              <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName.toUpperCase() : ''}</Typography>
                                                              <TextField
                                                                name='itemDescription' id='itemDescription'
                                                                value={Item.itemDescription}
                                                                multiline
                                                                rows={3}
                                                                onChange={(e) => handleChangeCEO(e, Item.idRow)}
                                                                size="small"
                                                                disabled={user.data.role !== 'CEO'}
                                                                sx={{ width: '440px', backgroundColor: 'white', fontSize: 12 }}
                                                              />
                                                            </div>
                                                            <div>
                                                              <BlackTooltip title="Clear" placement='top'>
                                                                <IconButton onClick={() => handleShowAutocomplete(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                                  <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                                </IconButton>
                                                              </BlackTooltip>
                                                              {
                                                                Item.itemName._id && (
                                                                  <BlackTooltip title="Edit" placement='bottom'>
                                                                    <IconButton onClick={() => handleOpenItemUpdate(Item.itemName._id)} style={{ position: 'relative', float: 'right' }}>
                                                                      <Edit style={{ color: '#202a5a' }} />
                                                                    </IconButton>
                                                                  </BlackTooltip>
                                                                )
                                                              }

                                                            </div>
                                                          </div>)
                                                      ) : (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                          <Autocomplete
                                                            disableClearable
                                                            options={filterItemInformation}
                                                            getOptionLabel={(option) => option.itemName + '/' + option.itemBrand}
                                                            renderOption={(props, option) => (<Box {...props}>{option.itemName + '/' + option.itemBrand}</Box>)}
                                                            renderInput={(params) =>
                                                              <TextField multiline
                                                                rows={4} {...params} required
                                                              />}
                                                            inputValue={inputValue}
                                                            onInputChange={(event, newInputValue) => {
                                                              setInputValue(newInputValue);
                                                            }}
                                                            filterOptions={(options, { inputValue }) => {
                                                              return options.filter(
                                                                (option) =>
                                                                  option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                                  option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                                  option.itemDescription.toLowerCase().includes(inputValue.toLowerCase())
                                                              )
                                                            }}
                                                            onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                                                            size="small"
                                                            PaperComponent={({ children, ...other }) => (

                                                              <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                                                                {children}
                                                                <div>
                                                                  <button onClick={(e) => handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                                                                    ADD NEW Item
                                                                  </button>
                                                                </div>
                                                              </Box>
                                                            )}
                                                            sx={{ width: '470px', backgroundColor: 'white' }}
                                                          />
                                                          <BlackTooltip title="Clear" placement='top'>
                                                            <IconButton onClick={() => handleShowAutocompleteDescription(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                            </IconButton>
                                                          </BlackTooltip>
                                                        </div>
                                                      )
                                                    }

                                                  </td>
                                                  <td>
                                                    <TextField
                                                      name='itemQty' id='itemQty'
                                                      onChange={(e) => handleChangeCEO(e, Item.idRow)}
                                                      size="small"

                                                      value={Item.itemQty}
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td >
                                                    <TextField
                                                      name='itemRate' id='itemRate'
                                                      value={Item.itemRate}

                                                      onChange={(e) => handleChangeCEO(e, Item.idRow)}
                                                      size="small"
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td >
                                                    <TextField
                                                      name='itemDiscount' id='itemDiscount'
                                                      value={Item.itemDiscount}
                                                      onChange={(e) => handleChangeCEO(e, Item.idRow)}
                                                      size="small"

                                                      placeholder='1 to 5 %'
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                  <td >
                                                    <LightTooltip title="Delete" sx={{}}>
                                                      <IconButton onClick={() => handleDelete(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                  </td>
                                                </>
                                              )
                                            }
                                          </tr>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}
                                  </tbody>
                                )}
                              </Droppable>
                            </table>
                          </DragDropContext>
                        </div>
                        :
                        <div>
                          <DragDropContext onDragEnd={handleDragEnd}>
                            <table className='tableInfo10' style={{ marginLeft: '-20px' }}>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item</th>
                                  <th>Stock-A</th>
                                  <th>Quantity</th>
                                  <th>Rate</th>
                                  <th>Discount %</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <Droppable droppableId="droppable" >
                                {(provided, snapshot) => (
                                  <tbody
                                    id="droppable"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {newArray2.map((Item, i) => (
                                      <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>
                                        {(provided, snapshot) => (
                                          <tr
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                          >
                                            {
                                              Item.newDescription !== undefined ? (
                                                <>
                                                  <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                                  <td colSpan={6}><TextField
                                                    required
                                                    name='newDescription' id='newDescription'
                                                    value={Item.newDescription}
                                                    onChange={(e) => handleChange(e, Item.idRow)}
                                                    size="small"
                                                    disabled={user.data.role === 'User'}
                                                    sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
                                                  /></td>
                                                  <td >
                                                    <LightTooltip title="Delete" sx={{}}>
                                                      <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                  </td>
                                                </>
                                              ) : (
                                                <>
                                                  <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                                  <td style={{ height: '100px' }}>
                                                    {
                                                      Item.itemName.itemName ? (
                                                        (
                                                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <div >
                                                              <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName.toUpperCase() : ''}</Typography>
                                                              <TextField
                                                                name='itemDescription' id='itemDescription'
                                                                value={Item.itemDescription}
                                                                multiline
                                                                rows={3}
                                                                onChange
                                                                size="small"
                                                                disabled={user.data.role !== 'CEO'}
                                                                sx={{ width: '440px', backgroundColor: 'white', fontSize: 12 }}
                                                              />
                                                            </div>
                                                            <div>
                                                              <BlackTooltip title="Clear" placement='top'>
                                                                <IconButton onClick={() => handleShowAutocomplete(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                                  <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                                </IconButton>
                                                              </BlackTooltip>
                                                              {
                                                                Item.itemName._id && (
                                                                  <BlackTooltip title="Edit" placement='bottom'>
                                                                    <IconButton onClick={() => handleOpenItemUpdate(Item.itemName._id)} style={{ position: 'relative', float: 'right' }}>
                                                                      <Edit style={{ color: '#202a5a' }} />
                                                                    </IconButton>
                                                                  </BlackTooltip>
                                                                )
                                                              }

                                                            </div>
                                                          </div>)
                                                      ) : (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                          <Autocomplete
                                                            disableClearable
                                                            options={filterItemInformation}
                                                            getOptionLabel={(option) => option.itemName + '/' + option.itemBrand}
                                                            renderOption={(props, option) => (<Box {...props}>{option.itemName + '/' + option.itemBrand}</Box>)}
                                                            renderInput={(params) =>
                                                              <TextField multiline
                                                                rows={4} {...params} required
                                                              />}
                                                            inputValue={inputValue}
                                                            onInputChange={(event, newInputValue) => {
                                                              setInputValue(newInputValue);
                                                            }}
                                                            filterOptions={(options, { inputValue }) => {
                                                              return options.filter(
                                                                (option) =>
                                                                  option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                                  option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                                  option.itemDescription.toLowerCase().includes(inputValue.toLowerCase())
                                                              )
                                                            }}
                                                            onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                                                            size="small"
                                                            PaperComponent={({ children, ...other }) => (

                                                              <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                                                                {children}
                                                                <div>
                                                                  <button onClick={(e) => handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                                                                    ADD NEW Item
                                                                  </button>
                                                                </div>
                                                              </Box>
                                                            )}
                                                            sx={{ width: '470px', backgroundColor: 'white' }}
                                                          />
                                                          <BlackTooltip title="Clear" placement='top'>
                                                            <IconButton onClick={() => handleShowAutocompleteDescription(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                            </IconButton>
                                                          </BlackTooltip>
                                                        </div>
                                                      )
                                                    }

                                                  </td>
                                                  <td>
                                                    <TextField
                                                      disabled
                                                      name='stock' id='stock'
                                                      value={Item.stock}

                                                      onChange={(e) => handleChange(e, Item.idRow)}
                                                      size="small"
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td>
                                                    <TextField
                                                      name='itemQty' id='itemQty'
                                                      onChange={(e) => handleChange(e, Item.idRow)}
                                                      size="small"

                                                      value={Item.itemQty}
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td >
                                                    <TextField
                                                      name='itemRate' id='itemRate'
                                                      value={Item.itemRate}

                                                      disabled
                                                      onChange={(e) => handleChange(e, Item.idRow)}
                                                      size="small"
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td >
                                                    <TextField
                                                      name='itemDiscount' id='itemDiscount'
                                                      value={Item.itemDiscount}
                                                      onChange={(e) => handleChange(e, Item.idRow)}
                                                      size="small"

                                                      placeholder='1 to 5 %'
                                                      sx={{ width: '100px', backgroundColor: 'white' }}
                                                    />
                                                  </td>
                                                  <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                  <td >
                                                    <LightTooltip title="Delete">
                                                      <IconButton onClick={() => handleDelete(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                  </td>
                                                </>
                                              )
                                            }
                                          </tr>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}
                                  </tbody>
                                )}
                              </Droppable>
                            </table>
                          </DragDropContext>
                        </div>
                    }

                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                      <TextField
                        id='note'
                        name='note'
                        multiline
                        rows={4}
                        value={note}
                        label='Invoice Note'
                        onChange={(e) => setNote(e.target.value)}
                        sx={{ width: '50%', backgroundColor: 'white' }}
                      />
                      <table className="firstTable">
                        <tbody>
                          <tr style={{ borderBottom: '1px solid black' }}>
                            <th style={{ textAlign: 'left' }}>Sub-Total</th>
                            <td align="center">
                              <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                                <OutlinedInput
                                  disabled
                                  type='number'
                                  id='subTotal'
                                  size="small"
                                  name='subTotal'
                                  value={subTotal}
                                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                              </FormControl>
                            </td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid black' }}>
                            <th style={{ textAlign: 'left' }}>Shipping Fees</th>
                            <td align="center">
                              <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                                <OutlinedInput
                                  id='shipping'
                                  size="small"
                                  name='shipping'
                                  value={shipping}
                                  onChange={(e) => setShipping(e.target.value)}
                                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                              </FormControl>
                            </td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid black' }}>
                            <th>      <TextField
                              name='adjustment' id='adjustment'
                              size="small"
                              value={adjustment}
                              onChange={(e) => setAdjustment(e.target.value)}
                              sx={{ width: '250px', backgroundColor: 'white' }}
                            /></th>
                            <td style={{ borderBottom: '1px solid black' }}>
                              <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                                <OutlinedInput
                                  id='adjustmentNumber'
                                  size="small"
                                  name='adjustmentNumber'
                                  value={adjustmentNumber}
                                  onChange={(e) => setAdjustmentNumber(e.target.value)}
                                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                              </FormControl>
                            </td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid black' }}>
                            <th style={{ textAlign: 'left' }}>Total</th>
                            <td align="center">

                              <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                                <OutlinedInput
                                  disabled
                                  type='number'
                                  id='totalInvoice'
                                  size="small"
                                  name='totalInvoice'
                                  value={totalInvoice}
                                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                              </FormControl>
                            </td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid black' }}>
                            <th style={{ textAlign: 'left' }}>Balance Due</th>
                            <td align="center">
                              <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                                <OutlinedInput
                                  type='number'
                                  id='balanceDue'
                                  size="small"
                                  name='balanceDue'
                                  value={balanceDue}
                                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                              </FormControl>
                            </td>
                          </tr>
                          <tr>
                            <th style={{ textAlign: 'left' }}>Total In Words</th>
                            <td>
                              <TextField
                                required
                                name="totalW" id="totalW"
                                value={totalW}
                                multiline
                                sx={{ width: '100%', backgroundColor: 'white' }}
                                maxRows={3}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='terms'
                      name='terms'
                      multiline
                      rows={4}
                      value={terms}
                      label='Invoice Terms'
                      onChange={(e) => setTerms(e.target.value)}
                      sx={{ width: '60%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                    }
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Box>
      </Box>
      <Modal
        open={open1}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseBack} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Do you want to stop creating Invoice ? </Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate(-1)} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={showModal}
        onClose={handleCloseRowId}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseRowId} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Please select the row to assign the total to: </Typography>
            </Grid>
            <br />
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel>Item Name</InputLabel>
                <Select
                  id="itemNameRow"
                  value={targetRowId}
                  onChange={(e) => setTargetRowId(e.target.value)}
                  name="itemNameRow"
                  label="Item Name<"
                >
                  {
                    items.map(item => (
                      item.idRow !== selectedRowId && (
                        <MenuItem key={item.idRow} value={item.idRow}>{item.itemName.itemName}</MenuItem>)
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <button className='btnCustomer' style={{ width: '100%' }} onClick={deleteItem}> Confirm </button>

            </Grid>
          </Grid>
        </Box>
      </Modal>
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
                <button onClick={() => handleDecision('stay')} className='btnCustomer'>
                  Add New
                </button>
                <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                  Go Back
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
              <h2 style={{ color: 'red' }}>Saving Failed</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={loadingOpenModalUpdate}
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
                <NavLink to={`/InvoiceViewAdminAll/${idInvoice}`} className='LinkName'>
                  <button className='btnCustomer'>Close</button>
                </NavLink>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={openAutocomplete2}
        onClose={handleCloseOpenAutocomplete2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <ItemFormView2 onCreateOption={handleCreateItem} onClose={handleCloseOpenAutocomplete2} />
          </div>
        </Box>
      </Modal>
      <Modal
        open={openItemUpdate}
        onClose={handleCloseItemUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseItemUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <ItemUpdateView2 onClose={handleCloseItemUpdate} id={idItem} />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ConvertToInvoice
