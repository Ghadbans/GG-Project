import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider, Card, CardContent, CardMedia, Pagination, Button, SwipeableDrawer, Drawer as SideDrawer } from '@mui/material';
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, Refresh, RemoveCircleOutline } from '@mui/icons-material';
import { v4 } from 'uuid';
import { NavLink, useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import dayjs from 'dayjs';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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
function MaintenanceFormView() {
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/create-maintenance';
  const [serviceDate, setServiceDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [visitDate, setVisitDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [itemDescriptionInfo, setItemDescriptionInfo] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [warranty, setWarranty] = useState("");
  const [action, setAction] = useState("");
  const [adjustment, setAdjustment] = useState('Labor Fees');
  const [adjustmentNumber, setAdjustmentNumber] = useState(0);
  const [laborQty, setLaborQty] = useState(0);
  const [laborDiscount, setLaborDiscount] = useState(0);
  const totalLaborFees = adjustmentNumber * laborQty
  const totalDiscount = isNaN(totalLaborFees * laborDiscount) ? 0 : parseFloat(totalLaborFees * laborDiscount);
  const laborPercentage = totalDiscount / 100;
  const totalLaborFeesGenerale = parseFloat(totalLaborFees) - parseFloat(laborPercentage);
  const [defectDescription, setDefectDescription] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [note, setNote] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [items, SetItems] = useState([
  ]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [serviceNumber, setServiceNumber] = useState(0);
  const [customer, setCustomer] = useState([]);
  const [customerName, setCustomerName] = useState({});
  const [ItemInformation, setItemInformation] = useState([]);
  const [technicianAssign, setTechnicianAssign] = useState('');
  const serviceName = "M-00" + serviceNumber;
  const [inputValue, setInputValue] = React.useState('');

  // Side Shop State
  const [sideShopOpen, setSideShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopPage, setShopPage] = useState(1);
  const [shopSearch, setShopSearch] = useState('');
  const [shopTotalPages, setShopTotalPages] = useState(0);
  const [shopLoading, setShopLoading] = useState(false);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    const fetchlastNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-maintenance')
          setServiceNumber(parseInt(res.data.serviceNumber) + 1)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.maintenanceSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row) => row.serviceNumber > max.serviceNumber ? row : max, offLineCustomer1[0])
        setServiceNumber(parseInt(latest.serviceNumber) + 1)
      }
    }
    fetchlastNumber()
  }, [])

  // Fetch Shop Items & Rate
  const fetchShop = async () => {
    setShopLoading(true);
    if (navigator.onLine) {
      try {
        const resRate = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/rate')
        resRate.data.data.map((row) => setRate(row.rate))

        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/item-shop?page=${shopPage}&limit=20&search=${encodeURIComponent(shopSearch)}`)
        setShopTotalPages(res.data.totalPages)
        setShopItems(res.data.items.filter((row) => row.typeItem === "Goods").reverse())
        setShopLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setShopLoading(false)
      }
    } else {
      const offLineCustomer1 = await db.itemSchema.toArray();
      setShopItems(offLineCustomer1.filter((row) => row.typeItem === "Goods").reverse())
      setShopLoading(false)
      const offLineRate = await db.rateSchema.toArray();
      offLineRate.map((row) => setRate(row.rate))
    }
  }

  useEffect(() => {
    if (sideShopOpen) { // Only fetch if side shop is open
      fetchShop()
    }
  }, [shopPage, shopSearch, sideShopOpen])

  const handleRefreshShop = () => {
    setShopSearch('');
    setShopPage(1);
    fetchShop();
  }

  const handleShopPageChange = (e, newPage) => {
    setShopPage(newPage);
  }
  const handleShopSearchChange = (e) => {
    setShopSearch(e.target.value);
    setShopPage(1)
  }

  const toggleSideShop = () => {
    setSideShopOpen(!sideShopOpen);
  }

  const handleAddToMaintenance = (shopItem) => {
    // Check if item already exists
    const existingItemIndex = items.findIndex(item => item.itemName._id === shopItem._id);

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedItems = [...items];
      const currentItem = updatedItems[existingItemIndex];
      const newQty = parseInt(currentItem.itemQty) + 1;

      updatedItems[existingItemIndex] = {
        ...currentItem,
        itemQty: newQty,
        itemAmount: Math.round((newQty * currentItem.itemRate) * 100) / 100,
        totalAmount: Math.round((newQty * currentItem.itemRate) * 100) / 100,
        discount: Math.round((newQty * currentItem.itemRate * currentItem.itemDiscount) * 100) / 100,
        percentage: (Math.round((newQty * currentItem.itemRate * currentItem.itemDiscount) * 100) / 100) / 100,
        totalCost: Math.round((newQty * currentItem.itemCost) * 100) / 100,
        totalGenerale: Math.round((currentItem.itemCost * currentItem.itemBuy) * 100) / 100, // Assuming itemBuy isn't changing for now
      };
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName
        },
        itemDescription: shopItem.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: shopItem.itemSellingPrice,
        itemCost: shopItem.itemCostPrice,
        itemAmount: Math.round((1 * shopItem.itemSellingPrice) * 100) / 100,
        totalAmount: Math.round((1 * shopItem.itemSellingPrice) * 100) / 100,
        discount: 0,
        percentage: 0,
        itemBuy: 1, // Assuming 1 buy qty default
        itemWeight: shopItem.weight,
        totalGenerale: Math.round((shopItem.itemCostPrice * 1) * 100) / 100,
        totalCost: Math.round((1 * shopItem.itemCostPrice) * 100) / 100,
        stock: shopItem.itemQuantity,
        itemOut: 0,
        newItemOut: 0,
      }
      SetItems([...items, newItem]);
    }
  }

  {/** Customer Info start */ }
  const handleChangeCustomer = (newValue) => {
    const selectedOptions = customer.find((option) => option === newValue)
    setCustomerName({
      _id: selectedOptions?._id,
      customerName: selectedOptions?.Customer,
      address: selectedOptions?.billingAddress + ' ' + selectedOptions?.billingCity,
      phone: selectedOptions?.customerCompanyPhone
    });
  }
  const Create = dayjs(Date.now()).format('DD/MM/YYYY') + " " + user.data.userName + ' Created ' + "M-00"

  useEffect(() => {
    const fetchCustomer = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/customer')
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.customerSchema.toArray();
        setCustomer(offLineCustomer1.reverse());
      }
    }
    fetchCustomer()
  }, [])
  const [openAutocomplete1, setOpenAutocomplete1] = useState(false);

  const handleOpenOpenAutocomplete1 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete1(true);
  };
  const handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  const handleCreateCustomer = (newCustomer) => {
    setCustomer([...customer, newCustomer])
  }
  {/** Customer info end */ }
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    const fetchEmployee = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
          setEmployee(res.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.employeeSchema.toArray();
        setEmployee(offLineCustomer1.reverse());
      }
    }
    fetchEmployee()
  }, [])

  const filterEmployee = employee.filter((row) => row.department === 'TECHNICIAN' && row.status !== 'Fired' || row.status !== 'Resign' || row.status !== 'Suspended')

  const handleChangeEmployee = (newValue) => {
    const selectedOptions = employee.find((option) => option === newValue)
    setTechnicianAssign(selectedOptions?.employeeName)
  }
  {/** Item start */ }
  useEffect(() => {
    const fetchItem = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
          setItemInformation(res.data.data.reverse())
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.itemSchema.toArray();
        setItemInformation(offLineCustomer1.reverse())
      }
    }
    fetchItem()
  }, [])
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
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...items];
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
    const newItem = {
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
    }
    SetItems([...items, newItem]);
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
  const addItemRow = (i) => {
    const newItem = {
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemCost: 0,
      itemAmount: 0,
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
    }
    const update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update)
  }
  const addItemWhiteRow = (i) => {
    const newItem = {
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
    }
    const update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update)
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
  const deleteItem = idRow => {
    SetItems(items => items.filter((Item) => Item.idRow !== idRow));
  };
  const filterItemInformation = ItemInformation.filter(option => !items.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))
  {/** Item InFO */ }
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
  const handleShowAutocomplete = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
    } : row))
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        itemName: 'empty'
      },
    } : row))
  }
  useEffect(() => {
    const result1 = items.reduce((sum, row) => sum + row.itemAmount, 0)
    setSubTotal(result1.toFixed(2))
    let newTotal = Number(subTotal) + Number(totalLaborFeesGenerale)
    setTotalInvoice(newTotal)
  })

  const [openItemUpdate, setOpenItemUpdate] = useState(false);
  const [idItem, setIdItem] = useState(null)

  const handleOpenItemUpdate = async (id) => {
    setOpenItemUpdate(true);
    setIdItem(id);
  };
  const handleCloseUpdateItem1 = () => {
    setOpenItemUpdate(false);
  }
  const handleCloseItemUpdate = async () => {
    setOpenItemUpdate(false);
    if (idItem) {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-item/${idItem}`)
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
          itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100),
          totalCost: row.itemQty * res.data.data.itemCostPrice,
          totalGenerale: res.data.data.itemCostPrice * row.itemBuy
        } : row))
      } catch (error) {

      }
    }
  };
  {/** Item InFO End */ }
  {/** Item end */ }
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [loadingOpenNavigateConvertInvoice, setLoadingOpenNavigateConvertInvoice] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
    if (adjustmentNumber > 0) {
      setLoadingOpenNavigateConvertInvoice(true);
    } else {
      setLoadingOpenModal(true);
    }
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
    window.location.reload();
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
  const [idRes, setIdRes] = useState('')
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'M-' + ReferenceInfoNumber + ' For ' + customerName.customerName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    let status = ''
    if (adjustmentNumber > 0) {
      status = 'Close'
    } else if (adjustmentNumber === 0) {
      status = 'Open'
    }
    const data = {
      _id: v4(),
      customerName, serviceNumber, serviceDate, actionTaken, visitDate, itemDescriptionInfo,
      warranty, defectDescription, technicianAssign, brand, model, serviceName, action,
      serialNo, status, items, adjustmentNumber, adjustment, totalInvoice, subTotal,
      note, totalLaborFees, laborPercentage, totalDiscount, laborDiscount, laborQty, totalLaborFeesGenerale, synced: false
    };
    if (navigator.onLine) {
      try {
        const res = await axios.post(apiUrl, data);
        if (res) {
          // Open Loading View
          const ReferenceInfo = res.data.data._id
          const ReferenceInfoNumber = res.data.data.serviceNumber
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
          //await db.maintenanceSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
          handleOpen();
          setIdRes(res.data.data._id)
        }
      } catch (error) {
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await db.maintenanceSchema.add(data)
      handleOpen();
    }
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
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
              Add new Maintenance
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
            <div>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'block', position: 'fixed', zIndex: 1, float: 'right', right: '-5px', top: '400px' }}>
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
                  <section>
                    <BlackTooltip title="ITEM LIST" placement="left">
                      <IconButton onClick={toggleSideShop}>
                        <SearchIcon className='btn1' style={{ backgroundColor: '#202a5a', fontSize: '40px' }} />
                      </IconButton>
                    </BlackTooltip>
                  </section>
                </div>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={1} component={Paper}>
                  <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>Job Card Info</p>
                  </Grid>
                  <Grid item xs={9}>
                    <Autocomplete
                      disableClearable
                      options={customer}
                      getOptionLabel={(option) => option.Customer}
                      onChange={(e, newValue) => {
                        handleChangeCustomer(newValue);
                      }}
                      PaperComponent={({ children, ...other }) => (

                        <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                          {children}
                          <div>
                            <button onClick={(e) => handleOpenOpenAutocomplete1(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                              ADD NEW CUSTOMER
                            </button>
                          </div>
                        </Box>
                      )}
                      renderInput={(params) => <TextField {...params} label="Customer Name" required />}
                    />
                  </Grid>
                  <Grid item xs={3}>

                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor="serviceNumber">Service Order Number</InputLabel>
                      <OutlinedInput
                        type='number'
                        id='serviceNumber'
                        name='serviceNumber'
                        label='Service Order Number'
                        value={serviceNumber}
                        onChange={(e) => setServiceNumber(e.target.value)}
                        startAdornment={<InputAdornment position="start">M</InputAdornment>}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='serviceDate'
                          label='Service Date'
                          value={dayjs(serviceDate)}
                          onChange={(date) => setServiceDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='visitDate'
                          label='Visit Date'
                          value={dayjs(visitDate)}
                          onChange={(date) => setVisitDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>Appliance Info</p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='itemDescription'
                      name='itemDescription'
                      label='Item Description'
                      value={itemDescriptionInfo}
                      onChange={(e) => setItemDescriptionInfo(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id='brand'
                      name='brand'
                      label='Brand'
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id='model'
                      name='model'
                      label='Model'
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id='serialNo'
                      name='serialNo'
                      label='Serial No'
                      value={serialNo}
                      onChange={(e) => setSerialNo(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      id='defectDescription'
                      name='defectDescription'
                      label='Defect Description'
                      value={defectDescription}
                      onChange={(e) => setDefectDescription(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='warranty'
                      name='warranty'
                      label='Warranty Status'
                      value={warranty}
                      onChange={(e) => setWarranty(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>Technician Assign</p>
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disableClearable
                      options={filterEmployee}
                      getOptionLabel={(option) => option.employeeName}
                      renderOption={(props, option) => (<Box {...props}>{option.employeeName}</Box>)}
                      renderInput={(params) => <TextField {...params} label="Technician" required />}
                      onChange={(e, newValue) => handleChangeEmployee(newValue ? newValue : '')}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>Action Taken</p>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="action">Action</InputLabel>
                      <Select
                        required
                        id="action"
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                        name="action"
                        label="action"
                        defaultValue="Carry-In"
                      >
                        <MenuItem value="Carry-In">Carry-In</MenuItem>
                        <MenuItem value="In-Home">In-Home</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='actionTaken'
                      name='actionTaken'
                      label='Action Taken'
                      multiline
                      rows={5}
                      value={actionTaken}
                      onChange={(e) => setActionTaken(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='note'
                      name='note'
                      label='Note'
                      multiline
                      rows={5}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>Finance</p>
                  </Grid>
                  <Grid item xs={12}>

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
                              <th>Discount</th>
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
                                {items.map((Item, i) => (
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
                                              <td colSpan={5}><TextField
                                                required
                                                name='newDescription' id='newDescription'
                                                value={Item.newDescription}
                                                onChange={(e) => handleChange(e, i)}
                                                size="small"
                                                sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
                                              /></td>
                                              <td >
                                                <LightTooltip title="Delete" sx={{}}>
                                                  <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                  </IconButton>
                                                </LightTooltip>
                                              </td>
                                              <td></td>
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
                                                          <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName : ''}</Typography>
                                                          <TextField
                                                            name='itemDescription' id='itemDescription'
                                                            value={Item.itemDescription}
                                                            multiline
                                                            rows={3}
                                                            onChange={(e) => handleChange(e, i)}
                                                            size="small"
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
                                                        renderOption={(props, option) => (<Box {...props} sx={{ backgroundColor: '#f2f2f2' }}>{option.itemName + '/' + option.itemBrand}</Box>)}
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

                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td>
                                                <TextField
                                                  name='itemQty' id='itemQty'
                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"

                                                  value={Item.itemQty}
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  name='itemRate' id='itemRate'
                                                  value={Item.itemRate}

                                                  disabled={user.data.role !== 'CEO'}
                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  name='itemDiscount' id='itemDiscount'
                                                  value={Item.itemDiscount}
                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  type='number'
                                                  placeholder='1 to 5 %'
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td >
                                                <LightTooltip title="Delete" sx={{}}>
                                                  <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                  </IconButton>
                                                </LightTooltip>
                                                <span style={{ display: 'flex' }}>
                                                  <BlackTooltip title="New-Row" placement="bottom">
                                                    <IconButton onClick={() => addItemRow(i)}>
                                                      <Add style={{ color: '#202a5a' }} />
                                                    </IconButton>
                                                  </BlackTooltip>
                                                  <BlackTooltip title="Blank-Row" placement="bottom">
                                                    <IconButton onClick={() => addItemWhiteRow(i)}>
                                                      <Add style={{ color: 'gray' }} />
                                                    </IconButton>
                                                  </BlackTooltip>
                                                </span>
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
                          <tbody>
                            <tr>
                              <td></td>
                              <td colSpan={2}>
                                <TextField
                                  name='adjustment' id='adjustment'
                                  size="small"
                                  value={adjustment}
                                  onChange={(e) => setAdjustment(e.target.value)}
                                  sx={{ backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  id='laborQty'
                                  type='number'
                                  size="small"
                                  placeholder='labor QTY'
                                  name='laborQty'
                                  value={laborQty !== undefined ? laborQty : 0}
                                  onChange={(e) => setLaborQty(e.target.value)}
                                  sx={{ width: '150px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  id='adjustmentNumber'
                                  size="small"
                                  placeholder='labor fees'
                                  name='adjustmentNumber'
                                  onChange={(e) => setAdjustmentNumber(e.target.value)}
                                  sx={{ width: '150px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  name='laborDiscount' id='laborDiscount'
                                  size="small"
                                  onChange={(e) => setLaborDiscount(e.target.value)}
                                  placeholder='Discount'
                                  sx={{ backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <span>$</span><span>{totalLaborFeesGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td colSpan={3}>Total Generale</td>
                              <td><span>$</span><span>{totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </DragDropContext>
                    </div>
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
        open={openBack}
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
              <Typography>Do you want to stop creating service ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/MaintenanceViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
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
        open={loadingOpenNavigateConvertInvoice}
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
              <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                  <Typography>Data Saved successfully,Do you want to convert to an invoice ? </Typography>
                  <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> You should convert the service order to invoice when it closed</span></p>
                </Grid>
                <br />
                <Grid item xs={6}>
                  <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                    Later
                  </button>
                </Grid>
                <Grid item xs={6}>
                  <NavLink to={`/MaintenanceConvertToInvoice/${idRes}`} className='LinkName'>
                    <button className='btnCustomer'>Convert To Invoice</button>
                  </NavLink>
                </Grid>
              </Grid>
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
        open={openAutocomplete1}
        onClose={handleCloseOpenAutocomplete1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseOpenAutocomplete1} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <CustomerFormView2 onCreateOption={handleCreateCustomer} onClose={handleCloseOpenAutocomplete1} />
          </div>
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
        onClose={handleCloseUpdateItem1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdateItem1} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <ItemUpdateView2 onClose={handleCloseItemUpdate} id={idItem} />
          </div>
        </Box>
      </Modal>
      {/** Side Shop Drawer */}
      <SideDrawer
        anchor="right"
        open={sideShopOpen}
        onClose={toggleSideShop}
        PaperProps={{
          sx: { width: '500px', backgroundColor: '#f5f5f5', padding: '20px' },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div">
            Select Item from Shop
          </Typography>
          <IconButton onClick={toggleSideShop}>
            <Close />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <TextField
            fullWidth
            label="Search Shop"
            variant="outlined"
            value={shopSearch}
            onChange={handleShopSearchChange}
            size="small"
          />
          <IconButton onClick={handleRefreshShop} color="primary" sx={{ ml: 1 }}>
            <Refresh />
          </IconButton>
        </Box>

        {shopLoading ? (
          <Loader />
        ) : (
          <>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 180px)' }}>
              <Grid container spacing={2}>
                {shopItems.map((item) => (
                  <Grid item xs={6} key={item._id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={`data:${item.contentType};base64,${item.data}`}
                        alt={item.itemName}
                        sx={{ objectFit: 'contain', padding: '5px' }}
                      />
                      <CardContent sx={{ flexGrow: 1, padding: '10px' }}>
                        <Typography variant="subtitle2" component="div">
                          {item.itemName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          FC {(item.itemSellingPrice * rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight="bold">
                          $ {item.itemSellingPrice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                          Stock: {item.itemQuantity}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          onClick={() => handleAddToMaintenance(item)}
                          sx={{ marginTop: '5px' }}
                        >
                          Add
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={shopTotalPages}
                page={shopPage}
                onChange={handleShopPageChange}
                size="small"
                color="primary"
              />
            </Box>
          </>
        )}
      </SideDrawer>
    </div>
  )
}

export default MaintenanceFormView
