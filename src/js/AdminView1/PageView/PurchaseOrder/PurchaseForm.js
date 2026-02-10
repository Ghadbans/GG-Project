import React, { useEffect, useMemo, useState } from 'react';
import SideMaintenance2 from '../../../component/SideMaintenance2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider, Checkbox, FormControlLabel, Card, CardMedia, CardContent, Pagination } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Refresh, RemoveCircleOutline } from '@mui/icons-material';
import { Drawer as SideDrawer, Button } from '@mui/material';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
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
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
function PurchaseForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
          dispatch(logOut())
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch])

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [itemOutDate, setItemOutDate] = useState(() => {
    const date = new Date()
    return dayjs(date)
  });
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [items, SetItems] = useState([]);
  const [itemsQtyArray, SetItemsQtyArray] = useState([]);
  const [selectedItem, SetSelectedItem] = useState([]);
  const [projects, setProject] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [serviceNumber, setServiceNumber] = useState({});
  const [projectName, setProjectName] = useState({});
  const [invoiceName, setInvoiceName] = useState({});
  const [inputValue2, setInputValue2] = React.useState('');
  const [inputValueProject, setInputValueProject] = React.useState('');
  const [outNumber, setOutNumber] = useState(0);
  const [ItemInformation, setItemInformation] = useState([]);
  const [reference, setReference] = useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [manufacturer, setManufacturer] = useState("");
  const [rate, setRate] = useState(0);
  const [manufacturerNumber, setManufacturerNumber] = useState(0);
  const Create = {
    person: user.data.userName,
    dateComment: dayjs(itemOutDate).format('DD/MM/YYYY')
  }
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const resItemOut = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-purchaseOrder')
          setOutNumber(parseInt(resItemOut.data.outNumber) + 1)
        } catch (error) {
          setOutNumber(1)
        }
      } else {
      }
    }
    fetchNumber()
  }, [])

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resItem = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
        setItemInformation(resItem.data.data.reverse())
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/rate')
        res.data.data.map((row) => setRate(row.rate))
        const resPurchase = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
        const resProject = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
        setProject(resProject.data.data.filter((row) => resPurchase.data.data.find((Item) => Item.projectName._id === row._id)).reverse());
        const resMaintenance = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/maintenance')
        setMaintenance(resMaintenance.data.data.filter((row) => row.items.some((Item) => Item.itemQty > Item.itemOut)));
        const resInvoice = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/invoice')
        const newData = resInvoice.data.data.filter((row) => row.items.some((Item) => Item.itemQty > Item.itemOut) && !resPurchase.data.data.some((Item) => Item._id === row.ReferenceName2) && !resMaintenance.data.data.some((Item2) => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName))
        setInvoice(newData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    handleFetch()
  }, [])

  // Shop States
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [shopLoading, setShopLoading] = useState(false);

  // Fetch Shop Items
  const fetchShop = async () => {
    setShopLoading(true);
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/item-shop?page=${shopPage}&limit=20&search=${encodeURIComponent(shopSearch)}`)
        setShopTotalPages(res.data.totalPages)
        setShopItems(res.data.items.filter((row) => row.typeItem === "Goods").reverse())
        setShopLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setShopLoading(false)
      }
    } else {
      // For offline support if needed, but the primary target is the online shop
      setShopLoading(false)
    }
  }

  useEffect(() => {
    if (shopOpen) {
      fetchShop()
    }
  }, [shopPage, shopSearch, shopOpen])

  const handleRefreshShop = () => {
    setShopSearch('');
    setShopPage(1);
    fetchShop();
  }

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  }

  const handleAddToPurchase = (shopItem) => {
    // Check if item already exists in itemsQtyArray
    const existingItemIndex = itemsQtyArray.findIndex(item => item.itemName._id === shopItem._id);

    if (existingItemIndex !== -1) {
      // Item exists, update quantity or just notify? In PO usually we add a new row or update. 
      // Replicating Estimate logic: update quantity.
      const updatedItems = [...itemsQtyArray];
      const currentItem = updatedItems[existingItemIndex];
      const newQtyBuy = parseInt(currentItem.qtyBuy) + 1;

      updatedItems[existingItemIndex] = {
        ...currentItem,
        qtyBuy: newQtyBuy,
        totalAmountUSD: Math.round((newQtyBuy * currentItem.itemRate) * 100) / 100,
        fcConvertToUsdTotal: Math.round(((parseFloat(currentItem.totalAmountFC) / currentItem.Taux) + (newQtyBuy * currentItem.itemRate)) * 100) / 100,
      };
      SetItemsQtyArray(updatedItems);
    } else {
      // Item does not exist, add new
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName,
        },
        itemDescription: shopItem.itemDescription,
        itemQty: 0,
        itemRate: shopItem.itemCostPrice,
        Taux: rate,
        qtyBuy: 1,
        totalAmountUSD: shopItem.itemCostPrice,
        fcConvertToUsd: 0,
        fcConvertToUsdTotal: shopItem.itemCostPrice,
        totalAmount: 0,
        totalAmountFC: 0,
        stock: shopItem.itemQuantity
      };
      SetItemsQtyArray([...itemsQtyArray, newItem]);
    }
  }


  const handleShopPageChange = (e, newPage) => {
    setShopPage(newPage);
  }
  const handleShopSearchChange = (e) => {
    setShopSearch(e.target.value);
    setShopPage(1)
  }

  const handleChangeReason = (e) => {
    setReason(e.target.value);
    setInvoiceName(null);
    setProjectName(null);
    setServiceNumber(null);
    setReference(null);
    SetItemsQtyArray([])
  }

  const handleChangeService = (newValue) => {
    const selectedOptions = maintenance.find((option) => option === newValue)
    setServiceNumber({
      _id: selectedOptions?._id,
      serviceNumber: selectedOptions?.serviceNumber
    });
    setReference({
      _id: selectedOptions?._id,
      referenceName: selectedOptions?.serviceName + ' / ' + selectedOptions?.customerName.customerName
    });
  }
  const handleChangeProject = (newValue) => {
    const selectedOptions = projects.find((option) => option === newValue)
    setProjectName({
      _id: selectedOptions?._id,
      projectName: selectedOptions?.projectName
    });
    setReference({
      _id: selectedOptions?._id,
      referenceName: selectedOptions?.projectName
    });
  }
  const handleChangeInvoice = (newValue) => {
    const selectedOptions = invoice.find((option) => option === newValue)
    setInvoiceName({
      _id: selectedOptions?._id,
      invoiceNumber: selectedOptions?.invoiceNumber
    });
    setReference({
      _id: selectedOptions?._id,
      referenceName: selectedOptions?.invoiceName + ' / ' + selectedOptions?.customerName.customerName
    });
  }

  {/**Purchase Filter start */ }
  useEffect(() => {
    const fetchId = async () => {
      if (projectName !== null) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
          res.data.data.filter((row) => projectName ? row.projectName._id === projectName._id : '')
            .map((row) =>
              SetItems(
                row.items
                  .map((row1) => ({
                    ...row1,
                    qtyNeed: row1.itemQty - row1.itemOut
                  }))
              )
            )
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      else if (serviceNumber !== null) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/maintenance')
          res.data.data.filter((row) => serviceNumber ? row._id === serviceNumber._id : '')
            .map((row) =>
              SetItems(row.items
                .map((row1) => ({
                  ...row1,
                  qtyNeed: row1.itemQty - row1.itemOut
                })))
            )
        } catch (error) {

        }
      }
      else if (invoiceName !== null) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/invoice')
          res.data.data.filter((row) => invoiceName ? row._id === invoiceName._id : '')
            .map((row) =>
              SetItems(row.items
                .map((row1) => ({
                  ...row1,
                  qtyNeed: row1.itemQty - row1.itemOut
                })))
            )
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchId()
  }, [projectName, serviceNumber, invoiceName]);
  {/**Maintenance Filter end */ }

  useEffect(() => {
    const result = items.map((row) => {
      const relatedItem = ItemInformation.find((Item) => Item._id === row.itemName._id)
      if (relatedItem) {
        return {
          idRow: row.idRow,
          itemName: row.itemName,
          itemDescription: row.itemDescription,
          itemQty: row.qtyNeed,
          newDescription: row.newDescription,
          itemRate: relatedItem.itemCostPrice,
          Taux: rate,
          qtyBuy: 0,
          totalAmountUSD: 0,
          fcConvertToUsd: 0,
          fcConvertToUsdTotal: 0,
          totalAmount: 0,
          totalAmountFC: 0,
          stock: relatedItem.itemQuantity
        }
      }
    })
    SetItemsQtyArray(result.filter((row) => row !== undefined))
  }, [items, ItemInformation])

  const handleClear = () => {
    setReference(null);
    SetItemsQtyArray([])
  }
  {/** Item Change Start */ }
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...itemsQtyArray]
    list[i][name] = value;
    list[i]['totalAmountUSD'] = Math.round((list[i]['qtyBuy'] * list[i]['itemRate']) * 100) / 100;
    list[i]['fcConvertToUsd'] = Math.round((list[i]['totalAmountFC'] / list[i]['Taux']) * 100) / 100;
    list[i]['fcConvertToUsdTotal'] = Math.round((parseFloat(list[i]['fcConvertToUsd']) + parseFloat(list[i]['totalAmount'])) * 100) / 100;
    SetItemsQtyArray(list);
  }

  const handleShowAutocomplete = (idRow) => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
    } : row))
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        itemName: 'empty'
      },
    } : row))
  }
  const addItem = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
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
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    }
    const update = [...itemsQtyArray];
    update.splice(i + 1, 0, newItem);
    SetItemsQtyArray(update)
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
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    }
    const update = [...itemsQtyArray];
    update.splice(i + 1, 0, newItem);
    SetItemsQtyArray(update)
  }
  const addItemWhite = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      newDescription: "",
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    }]);
  }
  const handleChangeItem = (idRow, newValue) => {
    const selectedOptions = ItemInformation.find((option) => option === newValue)
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: selectedOptions?._id,
        itemName: selectedOptions?.itemName,
      },
      rate: selectedOptions?.itemCostPrice,
      itemDescription: selectedOptions?.itemDescription,
      stock: selectedOptions?.itemQuantity,
    } : row))
  }
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...itemsQtyArray];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    SetItemsQtyArray(newItems)
  };
  const handleCheckBox = (ids) => {
    SetSelectedItem((prev) =>
      prev.includes(ids) ? prev.filter((idI) => idI !== ids) : [...prev, ids]
    )
  }
  const handleCheckBoxAll = () => {
    if (selectedItem.length === itemsQtyArray.length) {
      SetSelectedItem([])
    } else {
      SetSelectedItem(itemsQtyArray.map((ite) => ite.idRow))
    }
  }
  const deleteItem = idRow => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.filter((Item) => Item.idRow !== idRow));
  };
  const deleteMany = () => {
    const updatedItem = itemsQtyArray.filter((ite) => !selectedItem.includes(ite.idRow))
    SetItemsQtyArray(updatedItem)
    SetSelectedItem([])
  }
  const filterItemInformation = ItemInformation.filter(option => !itemsQtyArray.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))

  const totalUSD = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.fcConvertToUsdTotal), 0) : 0
  const total = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0) : 0
  const totalFC = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.totalAmountFC), 0) : 0

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
  const [loadingOpenModalUpdate, setLoadingOpenModalUpdate] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setLoadingOpenModal(true);
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
  const reasonInfo = reference !== null ? reference.referenceName : description
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'PO-' + ReferenceInfoNumber + ' For ' + reasonInfo,
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
    const data = {
      outNumber,
      status: 'Open',
      itemOutDate,
      manufacturer,
      manufacturerNumber,
      Converted: false,
      reason,
      description,
      itemsQtyArray,
      reference, Create, totalUSD, total, totalFC
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-purchaseOrder', data);
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.outNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        handleOpen();
      } else {
        alert('An Error as Occur');
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
  const newArray2 = useMemo(() => search2 !== '' ? itemsQtyArray.filter((Item) =>
    Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
    Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
    Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())
  ) : itemsQtyArray, [itemsQtyArray, search2])
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
              Make new Purchase Order
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
            <SideMaintenance2 />
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='itemOutDate'
                          label='Date'
                          value={dayjs(itemOutDate)}
                          onChange={(date) => setItemOutDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="reason">Reason</InputLabel>
                      <Select
                        required
                        id="reason"
                        value={reason}
                        onChange={(e) => handleChangeReason(e)}
                        name="reason"
                        label="Reason"
                      >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Maintenance">Maintenance</MenuItem>
                        <MenuItem value="Invoice">Direct-Invoice</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {
                    reason !== 'Project' ? '' : (
                      <Grid item xs={12}>
                        {
                          reference !== null ?
                            (
                              <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
                                <TextField
                                  multiline
                                  label='Project Name'
                                  rows={2}
                                  value={reference.referenceName}
                                  sx={{ width: '100%', backgroundColor: 'white' }}
                                />
                                <BlackTooltip title="Clear" placement='left'>
                                  <IconButton onClick={handleClear} >
                                    <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </BlackTooltip>
                              </div>
                            )
                            :
                            (
                              <Autocomplete
                                options={projects}
                                getOptionLabel={(option) => option.projectName}
                                renderOption={(props, option) => (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
                                renderInput={(params) => <TextField {...params} label="Project Name" />}
                                onChange={(e, newValue) => handleChangeProject(newValue ? newValue : 0)}
                                inputValue={inputValueProject}
                                onInputChange={(event, newInputValue) => {
                                  setInputValueProject(newInputValue);
                                }}
                                filterOptions={(options, { inputValue }) => {
                                  return options.filter(
                                    (option) =>
                                      option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                      option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                      option.description.toLowerCase().includes(inputValue.toLowerCase())
                                  )
                                }}
                                sx={{ width: '100%', backgroundColor: 'white' }}
                              />
                            )
                        }
                      </Grid>
                    )
                  }
                  {
                    reason !== 'Maintenance' ? '' : (
                      <Grid item xs={6}>
                        {
                          reference !== null ?
                            (
                              <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
                                <TextField
                                  multiline
                                  label='Project Name'
                                  rows={2}
                                  value={reference.referenceName}
                                  sx={{ width: '100%', backgroundColor: 'white' }}
                                />
                                <BlackTooltip title="Clear" placement='left'>
                                  <IconButton onClick={handleClear} >
                                    <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </BlackTooltip>
                              </div>
                            )
                            :
                            (
                              <Autocomplete
                                options={maintenance}
                                getOptionLabel={(option) => option.serviceName}
                                renderOption={(props, option) => (<Box {...props}> {option.customerName.customerName} | {option.serviceName}</Box>)}
                                renderInput={(params) => <TextField {...params} label="Maintenance Number" />}
                                onChange={(e, newValue) => handleChangeService(newValue ? newValue : '')}
                                inputValue={inputValue2}
                                onInputChange={(event, newInputValue) => {
                                  setInputValue2(newInputValue);
                                }}
                                filterOptions={(options, { inputValue }) => {
                                  return options.filter(
                                    (option) =>
                                      option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                      option.serviceName.toLowerCase().includes(inputValue.toLowerCase())
                                  )
                                }}
                                sx={{ width: '100%', backgroundColor: 'white' }}
                              />
                            )
                        }
                      </Grid>
                    )
                  }
                  {
                    reason !== 'Invoice' ? '' : (
                      <Grid item xs={6}>
                        {
                          reference !== null ?
                            (
                              <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
                                <TextField
                                  multiline
                                  label='Invoice'
                                  rows={2}
                                  value={reference.referenceName}
                                  sx={{ width: '100%', backgroundColor: 'white' }}
                                />
                                <BlackTooltip title="Clear" placement='left'>
                                  <IconButton onClick={handleClear} >
                                    <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </BlackTooltip>
                              </div>
                            )
                            :
                            (
                              <Autocomplete
                                options={invoice}
                                getOptionLabel={(option) => 'INV' + String(option.invoiceNumber)}
                                renderOption={(props, option) => (<Box {...props}>{option.customerName.customerName}/INV-00{String(option.invoiceNumber)}
                                </Box>)}
                                renderInput={(params) => <TextField {...params} label="Invoice" />}
                                onChange={(e, newValue) => handleChangeInvoice(newValue ? newValue : '')}
                                sx={{ width: '100%', backgroundColor: 'white' }}
                              />
                            )
                        }
                      </Grid>
                    )
                  }
                  <Grid item xs={12}>
                    <TextField
                      id='description'
                      name='description'
                      value={description}
                      label='Description'
                      multiline
                      rows={2}
                      onChange={(e) => setDescription(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      selectedItem.length > 0 && (
                        <button onClick={deleteMany} className='btnCustomer2'>Delete multiple</button>
                      )
                    }
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
                          <IconButton onClick={addItem} >
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
                      {
                        reason === 'Other' && (
                          <section>
                            <BlackTooltip title="ITEM LIST" placement="left">
                              <IconButton onClick={toggleShop}>
                                <SearchIcon className='btn1' style={{ backgroundColor: '#202a5a', fontSize: '40px' }} />
                              </IconButton>
                            </BlackTooltip>
                          </section>
                        )
                      }
                    </div>
                    <div>
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <table className='tableInfo10' style={{ marginLeft: '-30px' }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th align="center">itemName</th>
                              <th align="center">Qty</th>
                              <th align="center">Buy</th>
                              <th>Rate$</th>
                              <th>Amount Paid</th>
                              <th>Total Paid</th>
                              <th style={{ display: 'flex', gap: '3px' }}><span>Action</span>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={selectedItem.length === itemsQtyArray.length && itemsQtyArray.length !== 0}
                                      onChange={handleCheckBoxAll}
                                    />
                                  }
                                /></th>
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
                                                            onChange={(e) => handleChange(e, i)}
                                                            size="small"
                                                            sx={{ width: '250px', backgroundColor: 'white', fontSize: 12 }}
                                                          />
                                                        </div>
                                                        <div>
                                                          <BlackTooltip title="Clear" placement='top'>
                                                            <IconButton onClick={() => handleShowAutocomplete(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                            </IconButton>
                                                          </BlackTooltip>

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
                                                        sx={{ width: '250px', backgroundColor: 'white' }}
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
                                                  name='itemQty' id='itemQty'
                                                  onChange={(e) => handleChange(e, i)}
                                                  helperText={'Stock: ' + Item.stock}
                                                  size="small"
                                                  value={Item.itemQty}
                                                  sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  name='qtyBuy' id='qtyBuy'
                                                  onChange={(e) => handleChange(e, i)}
                                                  value={Item.qtyBuy}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  required
                                                  name='itemRate' id='itemRate'
                                                  value={Item.itemRate}
                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td style={{ textAlign: 'center' }}>
                                                <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

                                                  <TextField
                                                    required
                                                    name='totalAmountFC' id='totalAmountFC'
                                                    value={Item.totalAmountFC}
                                                    label='FC'
                                                    onChange={(e) => handleChange(e, i)}
                                                    size="small"
                                                    sx={{ width: '100px', backgroundColor: 'white' }}
                                                  />
                                                  <TextField
                                                    required
                                                    name='Taux' id='Taux'
                                                    value={Item.Taux}
                                                    onChange={(e) => handleChange(e, i)}
                                                    size="small"
                                                    sx={{ width: '100px', backgroundColor: 'white' }}
                                                  />
                                                  <TextField
                                                    required
                                                    name='totalAmount' id='totalAmount'
                                                    value={Item.totalAmount}
                                                    label='$'
                                                    size="small"
                                                    onChange={(e) => handleChange(e, i)}
                                                    sx={{ width: '100px', backgroundColor: 'white' }}
                                                  />
                                                </span>
                                                <span>Total Cost USD: {Item.totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                              </td>
                                              <td id='amountTotalInvoice'>{Item.fcConvertToUsdTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <LightTooltip title="Delete" >
                                                  <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                  </IconButton>
                                                </LightTooltip>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox
                                                      checked={selectedItem.includes(Item.idRow)}
                                                      onChange={() => handleCheckBox(Item.idRow)}
                                                    />
                                                  }
                                                />
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
                              <td colSpan={3}>Total</td>
                              <td colSpan={2}>
                                <FormControl >
                                  <OutlinedInput
                                    id='totalFC'
                                    size="small"
                                    label='Amount Fc'
                                    value={totalFC}
                                    sx={{ width: '150px', backgroundColor: 'white' }}
                                    startAdornment={<InputAdornment position="start">FC</InputAdornment>}
                                  />
                                </FormControl>
                              </td>
                              <td colSpan={1}>
                                <FormControl >
                                  <OutlinedInput
                                    id='total'
                                    size="small"
                                    label='Amount $'
                                    value={total}
                                    sx={{ width: '120px', backgroundColor: 'white' }}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                  />
                                </FormControl>
                              </td>
                              <td >
                                <FormControl >
                                  <OutlinedInput
                                    id='totalUSD'
                                    size="small"
                                    label='Total USD'
                                    value={totalUSD}
                                    sx={{ width: '120px', backgroundColor: 'white' }}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                  />
                                </FormControl>
                              </td>
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
              <Typography>Do you want to stop making item out ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop making item out without saving, all your changes will be lost</span></p>
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
        onClose={handleCloseUpdate}
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
                <button onClick={handleCloseUpdate} className='btnCustomer'>
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
                          onClick={() => handleAddToPurchase(item)}
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

export default PurchaseForm
