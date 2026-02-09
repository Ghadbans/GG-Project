import React, { useEffect, useMemo, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Divider } from '@mui/material'
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
import axios from 'axios'
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, Refresh, RemoveCircleOutline, ShoppingCartOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Drawer as SideDrawer, Card, CardContent, CardMedia, Button, Pagination } from '@mui/material';
import { v4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
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
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
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
})); const ViewTooltip = styled(({ className, ...props }) => (
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
function PurchaseFormUpdate() {
  const { id } = useParams();
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

  const [items, SetItems] = useState([
  ]);
  const [purchaseAmount1, setPurchaseAmount1] = useState(0);
  const [purchaseAmount2, setPurchaseAmount2] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [rate, setRate] = useState(0);
  const [shopLoading, setShopLoading] = useState(false);
  const [customerName, setCustomerName] = useState({});
  const [purchaseDate, setPurchaseDate] = useState('')
  const [projectName, setProjectName] = useState({});
  const [purchaseNumber, setPurchaseNumber] = useState('');
  const [reason, setReason] = useState("");
  const [projects, setProject] = useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const [description, setDescription] = useState('');

  const fetchData = async () => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-purchase/${id}`)
        setCustomerName(res.data.data.customerName);
        setPurchaseDate(res.data.data.purchaseDate);
        setProjectName(res.data.data.projectName);
        setPurchaseNumber(res.data.data.purchaseNumber);
        setPurchaseAmount2(res.data.data.purchaseAmount2);
        setPurchaseAmount1(res.data.data.purchaseAmount1);
        SetItems(res.data.data.items);
        setDescription(res.data.data.description);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      const resLocal = await db.purchaseSchema.get({ _id: id })
      setCustomerName(resLocal.customerName);
      setPurchaseDate(resLocal.purchaseDate);
      setProjectName(resLocal.projectName);
      setPurchaseNumber(resLocal.purchaseNumber);
      setPurchaseAmount2(resLocal.purchaseAmount2);
      setPurchaseAmount1(resLocal.purchaseAmount1);
      SetItems(resLocal.items);
      setDescription(resLocal.description);
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])
  // get itemName 
  const [ItemInformation, setItemInformation] = useState([]);
  const fetchItem = async () => {
    if (navigator.onLine) {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/item')
        setItemInformation(res.data.data.reverse())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      const offLineCustomer1 = await db.itemSchema.toArray();
      setItemInformation(offLineCustomer1.reverse())
    }
  }
  useEffect(() => {
    fetchItem()
  }, [])

  // Fetch Shop Items & Rate
  const fetchShop = async () => {
    setShopLoading(true);
    if (navigator.onLine) {
      try {
        const resRate = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/rate')
        resRate.data.data.forEach((row) => setRate(row.rate))

        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/item-shop?page=${shopPage}&limit=20&search=${encodeURIComponent(shopSearch)}`)
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
      offLineRate.forEach((row) => setRate(row.rate))
    }
  }

  useEffect(() => {
    if (shopOpen) { // Only fetch if side shop is open
      fetchShop()
    }
  }, [shopPage, shopSearch, shopOpen])

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

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  }

  const handleAddToPurchaseUpdate = (shopItem) => {
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
        totalGenerale: Math.round((currentItem.itemCost * currentItem.itemBuy) * 100) / 100,
      };
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName,
        },
        itemDescription: shopItem.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: shopItem.itemSellingPrice,
        itemAmount: shopItem.itemSellingPrice,
        itemCost: shopItem.itemCostPrice,
        totalAmount: shopItem.itemSellingPrice,
        discount: 0,
        percentage: 0,
        itemBuy: 0,
        itemWeight: shopItem.itemWeight || "",
        totalGenerale: 0,
        totalCost: shopItem.itemCostPrice,
        stock: shopItem.itemQuantity,
        itemOut: 0,
        newItemOut: 0,
      };
      SetItems([...items, newItem]);
    }
  }
  //addItem
  const addItem = () => {
    SetItems([...items, {
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
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems)
  };
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
  const handleChange = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...items]
    const i = items.findIndex(Item => Item.idRow === idRow)
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round((list[i]['itemQty'] * list[i]['itemRate']) * 100) / 100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty'] * list[i]['itemCost']) * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost'] * list[i]['itemBuy']) * 100) / 100;
    SetItems(list)
  }
  const deleteItem = idRow => {
    SetItems(items => items.filter((Item) => Item.idRow !== idRow));
  };
  const filterItemInformation = ItemInformation.filter(option => !items.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))
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
  {/** Item Info Start */ }
  const handleShowAutocomplete = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: row.itemName.itemName
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
          itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100),
          totalCost: row.itemQty * res.data.data.itemCostPrice,
          totalGenerale: res.data.data.itemCostPrice * row.itemBuy
        } : row))
      } catch (error) {

      }
    }
  };
  {/** Item Info End */ }
  {/** Project Start */ }
  useEffect(() => {
    const fetchProject = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/projects')
          setProject(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.projectSchema.toArray();
        setProject(offLineCustomer1.reverse());
      }
    }
    fetchProject()
  }, [])
  const handleChangeProject = (newValue) => {
    const selectedOptions = projects.find((option) => option === newValue)
    setProjectName({
      _id: selectedOptions?._id,
      projectName: selectedOptions?.projectName
    });
    setCustomerName(selectedOptions?.customerName)
    setDescription(selectedOptions?.description)
  }
  const handleClearProject = () => {
    setProjectName({
      _id: "",
      projectName: ""
    });
    setCustomerName({})
    setDescription("")
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        itemName: 'empty'
      },
    } : row))
  }
  {/** Project End */ }
  //Calculate the total
  useEffect(() => {
    const result1 = items.reduce((sum, row) => sum + row.totalCost, 0)
    setPurchaseAmount1(result1.toFixed(2))
    const result2 = items.reduce((sum, row) => sum + row.totalGenerale, 0)
    setPurchaseAmount2(result2.toFixed(2))
  }, [items])
  const [open1, setOpen1] = useState(false);

  const handleOpenUpdate = (e) => {
    e.preventDefault()
    setOpen1(true);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
  };
  {/** Loading Start */ }
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
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClose = () => {
    navigate(-1);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const CommentInfo =
  {
    idInfo: id,
    person: user.data.userName + ' Modified',
    reason
  }
  const dateComment = dayjs(Date.now());
  const [hideBack, setHideBack] = useState('');
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify ' + ' PUR-' + purchaseNumber,
      reason,
      dateNotification: new Date()
    };
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification/', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      purchaseDate,
      projectName,
      description,
      items,
      purchaseAmount1,
      purchaseAmount2, updateS: false
    };
    if (navigator.onLine) {
      try {
        const response = await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-purchase/${id}`, data)
        if (response) {
          handleCreateComment()
          const resLocal = await db.purchaseSchema.get({ _id: id })
          await db.purchaseSchema.update(resLocal.purchaseNumber, { ...data, updateS: true })
          handleOpen()
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    } else {
      const resLocal = await db.purchaseSchema.get({ _id: id })
      await db.purchaseSchema.update(resLocal.purchaseNumber, ...data)
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
  const newArray2 = useMemo(() => search2 !== '' ? items.filter((Item) =>
    Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
    Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
    Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())
  ) : items, [items, search2])


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
              update Purchase
            </Typography>
            {
              hideBack === 'true' ?
                <IconButton>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton> :
                <IconButton onClick={handleOpenBack}>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton>}
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
              <form onSubmit={handleOpenUpdate}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={12} >
                    {
                      projectName.projectName !== '' ?
                        (
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <TextField
                              disabled
                              name='projectName'
                              label='Project Name'
                              value={projectName.projectName ? projectName.projectName : ''}
                              sx={{ width: '100%', backgroundColor: 'white' }}
                            />
                            <BlackTooltip title="Clear" placement='right'>
                              <IconButton onClick={handleClearProject} style={{ position: 'relative', float: 'right' }}>
                                <RemoveCircleOutline style={{ color: '#202a5a' }} />
                              </IconButton>
                            </BlackTooltip>
                          </div>
                        )
                        : (
                          <Autocomplete
                            disableClearable
                            options={projects}
                            getOptionLabel={(option) => option.projectName}
                            renderOption={(props, option) => (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
                            onChange={(e, newValue) => { handleChangeProject(newValue) }}
                            inputValue={inputValue2}
                            onInputChange={(event, newInputValue) => {
                              setInputValue2(newInputValue);
                            }}
                            filterOptions={(options, { inputValue }) => {
                              return options.filter(
                                (option) =>
                                  option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                  option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                  option.description.toLowerCase().includes(inputValue.toLowerCase())
                              )
                            }}
                            renderInput={(params) => <TextField {...params} label="Project Name" required />}
                          />
                        )}

                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='purchaseDate'
                          label='Date'
                          value={dayjs(purchaseDate)}
                          onChange={(date) => setPurchaseDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor='purchaseNumber'>Purchase Number</InputLabel>
                      <OutlinedInput
                        disabled
                        type='number'
                        name='purchaseNumber'
                        value={'00' + purchaseNumber}
                        label='Purchase Number'
                        startAdornment={<InputAdornment position='start'>PUR</InputAdornment>}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      name='customerName'
                      id='customerName'
                      label='Customer Name'
                      value={customerName.customerName ? customerName.customerName : ''}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id='description'
                      name='description'
                      label='Description'
                      value={description !== undefined ? description : ''}
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
                          <IconButton onClick={toggleShop}>
                            <SearchIcon className='btn1' style={{ backgroundColor: '#202a5a', fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>
                    </div>
                    <div>
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <table className='tableInfo10' style={{ marginLeft: '-20px' }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th align="center">Description</th>
                              <th align="center">Qty</th>
                              <th align="center">Unit Price<span>$</span></th>
                              <th align="center">Total<span>$</span></th>
                              <th align="center">Buy</th>
                              <th align="center">Total<span>$</span></th>
                              <th align="center">Out</th>
                              <th align="center">Action</th>
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
                                              <td style={{ textAlign: 'center' }} >
                                                <LightTooltip title="Delete" placement='top'>
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
                                          ) : (
                                            <>
                                              <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                              <td style={{ height: '100px' }}>
                                                {
                                                  Item.itemName._id || Item.itemName.itemName === 'empty' ? (
                                                    (
                                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div >
                                                          <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName.toUpperCase() : ''}</Typography>
                                                          <TextField
                                                            name='itemDescription' id='itemDescription'
                                                            value={Item.itemDescription}
                                                            multiline
                                                            rows={3}
                                                            onChange={(e) => handleChange(e, Item.idRow)}
                                                            size="small"
                                                            sx={{ width: '400px', backgroundColor: 'white', fontSize: 12 }}
                                                          />
                                                        </div>
                                                        <div>
                                                          <BlackTooltip title="Clear" placement='top'>
                                                            <span>
                                                              <IconButton onClick={() => handleShowAutocomplete(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                                <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                              </IconButton>
                                                            </span>
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
                                                        renderOption={(props, option) => (<Box sx={{ backgroundColor: "#e6e6e6" }} {...props}>{option.itemName + '/' + option.itemBrand}</Box>)}
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
                                              <td >
                                                <TextField
                                                  required={Item.itemDescription !== ''}
                                                  name='itemQty' id='itemQty'
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  size="small"
                                                  value={Item.itemQty}

                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td>
                                                <TextField
                                                  name='itemCost' id='itemCost'
                                                  disabled={user.data.role !== 'CEO'}
                                                  value={Item.itemCost}
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td id='totalPurchase' style={{ width: '100px' }}>{Item.totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td id='totalBuy'>
                                                <TextField
                                                  name='itemBuy' id='itemBuy'
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  value={Item.itemBuy}
                                                  size="small"

                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td id='totalGeneralPurchase' style={{ width: '100px' }}>{Item.totalGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td id='totalBuy'>
                                                <TextField
                                                  disabled
                                                  name='itemOut' id='itemOut'
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  value={Item.itemOut !== undefined ? Item.itemOut : 0}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td style={{ textAlign: 'center' }} >
                                                <LightTooltip title="Delete" placement='top'>
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
                              <td colSpan={4} style={{ textAlign: 'center' }}>Total</td>
                              <td>{purchaseAmount1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                              <td>-</td>
                              <td>{purchaseAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            </tr>
                          </tbody>
                        </table>
                      </DragDropContext>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
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
              <Typography>Do you want to stop updating purchase ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop updating without saving, all your changes will be lost</span></p>
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
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='reason'
                  name='reason'
                  multiline
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value.toUpperCase())}
                  label='Comments'
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

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
                <button onClick={handleClose} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      {/** Side Shop Drawer */}
      <SideDrawer
        anchor="right"
        open={shopOpen}
        onClose={toggleShop}
        PaperProps={{
          sx: { width: '500px', backgroundColor: '#f5f5f5', padding: '20px' },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div">
            Select Item from Shop
          </Typography>
          <IconButton onClick={toggleShop}>
            <Close />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <TextField
            fullWidth
            label="Search Shop"
            variant="outlined"
            size="small"
            value={shopSearch}
            onChange={handleShopSearchChange}
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
                          onClick={() => handleAddToPurchaseUpdate(item)}
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

export default PurchaseFormUpdate
