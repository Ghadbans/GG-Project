import React, { useEffect, useState } from 'react';
import SideMaintenance2 from '../../../component/SideMaintenance2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, RemoveCircleOutline, ShoppingCartOutlined } from '@mui/icons-material';
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
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import SupplierForm2 from '../Supplier/SupplierForm2';


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
function ItemPurchaseUpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
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
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
  const [itemPurchaseDate, setItemPurchaseDate] = useState("");
  const [itemPurchaseNumber, setItemPurchaseNumber] = useState(0);
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturerNumber, setManufacturerNumber] = useState(0);
  const [manufacturerID, setManufacturerID] = useState("");
  const [description, setDescription] = useState("");
  const [totalUSD, setTotalUSD] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalFC, setTotalFC] = useState(0);
  const [items, setItems] = useState([]);
  const [oldItems, setOldItems] = useState([]);
  const [reason2, setReason2] = useState("");
  const [reason, setReason] = useState("");
  const [rate, setRate] = useState(0);
  const [note, setNote] = useState("");
  const [purchase, setPurchase] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [projectName, setProjectName] = useState({});
  const [supplier, setSupplier] = useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue3, setInputValue3] = React.useState('');
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [shopLoading, setShopLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSupplier = await axios.get('http://192.168.0.200:8080/endpoint/Supplier')
        setSupplier(resSupplier.data.data.reverse())
        const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-itemPurchase/${id}`)
        // get the response data here
        setItemPurchaseDate(res.data.data.itemPurchaseDate);
        setItemPurchaseNumber(res.data.data.itemPurchaseNumber);
        setManufacturer(res.data.data.manufacturer);
        setManufacturerNumber(res.data.data.manufacturerNumber);
        setDescription(res.data.data.description);
        setItems(res.data.data.items);
        setManufacturerID(res.data.data.manufacturerID)
        setReason(res.data.data.reason);
        setProjectName(res.data.data.projectName);
        setNote(res.data.data.note);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-itemPurchase/${id}`)
        setOldItems(res.data.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDataId()
  }, [id])
  {/** Item Info Start */ }
  const [ItemInformation, setItemInformation] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resItem = await axios.get('http://192.168.0.200:8080/endpoint/item')
        setItemInformation(resItem.data.data.reverse())
        if (projectName) {
          const resPurchase = await axios.get('http://192.168.0.200:8080/endpoint/purchase')
          setPurchase(resPurchase.data.data.filter((row) => row.projectName._id === projectName._id));
          const resMaintenance = await axios.get('http://192.168.0.200:8080/endpoint/maintenance')
          setMaintenance(resMaintenance.data.data.filter((row) => row._id === projectName._id));
          const resInvoice = await axios.get('http://192.168.0.200:8080/endpoint/invoice')
          setInvoice(resInvoice.data.data.filter((row) => row._id === projectName._id));
          const res = await axios.get('http://192.168.0.200:8080/endpoint/rate')
          res.data.data.map((row) => setRate(row.rate))
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    handleFetch()
  }, [projectName])

  // Shop fetching logic
  useEffect(() => {
    if (shopOpen) {
      const fetchShop = async () => {
        setShopLoading(true);
        try {
          const res = await axios.get(`http://192.168.0.200:8080/endpoint/item-shop?page=${shopPage}&limit=20&search=${encodeURIComponent(shopSearch)}`)
          setShopTotalPages(res.data.totalPages)
          setShopItems(res.data.items.filter((row) => row.typeItem === "Goods").reverse())
          setShopLoading(false)
        } catch (error) {
          console.error('Error fetching shop data:', error);
          setShopLoading(false)
        }
      }
      fetchShop()
    }
  }, [shopPage, shopSearch, shopOpen])

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

  const handleAddToItemPurchaseUpdate = (shopItem) => {
    const existingItemIndex = items.findIndex(item => item.itemName._id === shopItem._id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      const currentItem = updatedItems[existingItemIndex];
      const newQty = parseInt(currentItem.itemQty) + 1;

      updatedItems[existingItemIndex] = {
        ...currentItem,
        itemQty: newQty,
        totalAmountUSD: Math.round((newQty * currentItem.itemRate) * 100) / 100,
        fcConvertToUsdTotal: Math.round((parseFloat(currentItem.fcConvertToUsd) + (newQty * currentItem.itemRate)) * 100) / 100,
      };
      setItems(updatedItems);
    } else {
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName,
        },
        itemDescription: shopItem.itemDescription,
        itemQty: 1,
        itemRate: shopItem.itemCostPrice || 0,
        Taux: rate,
        cost: 0,
        amountFc: 0,
        totalAmountUSD: shopItem.itemCostPrice || 0,
        fcConvertToUsd: 0,
        fcConvertToUsdTotal: shopItem.itemCostPrice || 0,
        totalAmount: shopItem.itemCostPrice || 0,
        totalAmountFC: 0
      };
      setItems([...items, newItem]);
    }
  }

  const handleReason = (e) => {
    setReason(e.target.value)
    setProjectName({})
    setDescription("")
  }
  const handleChangeItem = (idRow, newValue) => {
    const selectedOptions = ItemInformation.find((option) => option === newValue)
    setItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: selectedOptions?._id,
        itemName: selectedOptions?.itemName,
      },
      itemDescription: selectedOptions?.itemDescription
    } : row))
  }
  const handleChangeSupplier = (newValue) => {
    const selectedOptions = supplier.find((option) => option === newValue)
    setManufacturer(selectedOptions?.storeName);
    setManufacturerID(selectedOptions?._id)
  }
  const handleClearCustomer = () => {
    setManufacturer(null)
  }
  const handleClearProject = () => {
    setProject({
      _id: '',
      name: ''
    })
  }
  const handleChange = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...items];
    const i = items.findIndex(Item => Item.idRow === idRow)
    list[i][name] = value
    list[i]['totalAmountUSD'] = Math.round((list[i]['itemQty'] * list[i]['itemRate']) * 100) / 100;
    list[i]['fcConvertToUsd'] = Math.round((list[i]['totalAmountFC'] / list[i]['Taux']) * 100) / 100;
    list[i]['fcConvertToUsdTotal'] = Math.round((parseFloat(list[i]['fcConvertToUsd']) + parseFloat(list[i]['totalAmount'])) * 100) / 100;
    setItems(list);
  }
  const addItem = () => {
    setItems([...items, {
      idRow: v4(),
      itemName: {},
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    }]);
  }
  const addItemRow = (i) => {
    const newItem = {
      idRow: v4(),
      itemName: {},
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    }
    const update = [...items];
    update.splice(i + 1, 0, newItem);
    setItems(update)
  }
  const handleShowAutocomplete = (idRow) => {
    setItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    } : row))
  }
  const deleteItem = idRow => {
    setItems(items => items.filter((Item) => Item.idRow !== idRow));
  };
  const filterItemInformation = ItemInformation.filter(option => !items.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))
  const [openAutocomplete1, setOpenAutocomplete1] = useState(false);

  const handleOpenOpenAutocomplete1 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete1(true);
  };
  const handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  const handleCreateCustomer = (newCustomer) => {
    setSupplier([newCustomer, ...supplier])
  }
  const [openAutocomplete2, setOpenAutocomplete2] = useState(false);
  const handleOpenOpenAutocomplete2 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete2(true);
  };
  const handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  const handleCreateItem = (newItem) => {
    setItemInformation([newItem, ...ItemInformation])
  }
  useEffect(() => {
    const result0 = items.reduce((sum, row) => sum + parseFloat(row.fcConvertToUsdTotal), 0)
    setTotalUSD(result0.toFixed(2))
    const result1 = items.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0)
    setTotal(result1.toFixed(2))
    const result2 = items.reduce((sum, row) => sum + parseFloat(row.totalAmountFC), 0)
    setTotalFC(result2.toFixed(2))
  })
  {/** Item Info End */ }
  {/** Update purchase start */ }
  const difference = [];
  const sumToAdd = [];
  const newArrayAdd = [];
  const deletedArray = [];
  oldItems.map((row) => {
    const newItem = items.find((row1) => row1.idRow === row.idRow)

    if (newItem && parseFloat(row.itemQty) > parseFloat(newItem.itemQty)) {
      const diff = parseFloat(row.itemQty) - parseFloat(newItem.itemQty)
      difference.push({
        id: row.idRow,
        idItems: row.itemName._id,
        qty: diff
      })
    } else if (newItem && parseFloat(newItem.itemQty) > parseFloat(row.itemQty)) {
      const diff = parseFloat(newItem.itemQty) - parseFloat(row.itemQty)
      sumToAdd.push({
        id: row.idRow,
        idItems: row.itemName._id,
        qty: diff
      })
    }
  })
  items.forEach(row => {
    if (!oldItems.find(row1 => row1.idRow === row.idRow)) {
      newArrayAdd.push({
        id: row.idRow,
        idItems: row.itemName._id,
        qty: row.itemQty
      })
    }
  })
  oldItems.forEach(row => {
    if (!items.find(row1 => row1.idRow === row.idRow)) {
      deletedArray.push({
        id: row.idRow,
        idItems: row.itemName._id,
        qty: row.itemQty
      })
    }
  })
  const updatePurchaseArray = purchase.map((row) => {
    const updateItem = row.items.map((Item) => {
      const additionItem = sumToAdd.find((add) => Item.idRow === add.id)
      const differenceItem = difference.find((diff) => Item.idRow === diff.id)
      const addNewItem = newArrayAdd.find((Item2) => Item.idRow === Item2.id)
      const diffDeleteItem = deletedArray.find((diff) => Item.idRow === diff.id)
      const RelatedItem = items.find((Item2) => Item2.idRow === Item.idRow)
      const itemCost = RelatedItem && RelatedItem.itemRate !== 0 ? RelatedItem.itemRate : Item.itemCost
      let itemToUpdate = { ...Item, itemCost }
      if (additionItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty))
        }
      }
      if (differenceItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty))
        }
      }
      if (addNewItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty))
        }
      }
      if (diffDeleteItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty))
        }
      }
      return itemToUpdate
    })
    const purchaseAmount2 = updateItem.reduce((sum, row) => sum + row.totalGenerale, 0)
    return {
      id: row._id,
      items: updateItem,
      purchaseAmount2: purchaseAmount2
    }
  })
  const updateMaintenanceArray = maintenance.map((row) => {
    const updateItem = row.items.map((Item) => {
      const additionItem = sumToAdd.find((add) => Item.idRow === add.id)
      const differenceItem = difference.find((diff) => Item.idRow === diff.id)
      const addNewItem = newArrayAdd.find((Item2) => Item.idRow === Item2.id)
      const diffDeleteItem = deletedArray.find((diff) => Item.idRow === diff.id)
      let itemToUpdate = { ...Item }
      if (additionItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty))
        }
      }
      if (differenceItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty))
        }
      }
      if (addNewItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty))
        }
      }
      if (diffDeleteItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty))
        }
      }
      return itemToUpdate
    })
    return {
      id: row._id,
      items: updateItem
    }
  })
  const updateInvoiceArray = invoice.map((row) => {
    const updateItem = row.items.map((Item) => {
      const additionItem = sumToAdd.find((add) => Item.idRow === add.id)
      const differenceItem = difference.find((diff) => Item.idRow === diff.id)
      const addNewItem = newArrayAdd.find((Item2) => Item.idRow === Item2.id)
      const diffDeleteItem = deletedArray.find((diff) => Item.idRow === diff.id)
      let itemToUpdate = { ...Item }
      if (additionItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(additionItem.qty))
        }
      }
      if (differenceItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(differenceItem.qty))
        }
      }
      if (addNewItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) + parseFloat(addNewItem.qty))
        }
      }
      if (diffDeleteItem) {
        itemToUpdate = {
          ...itemToUpdate,
          itemBuy: parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty),
          totalGenerale: itemToUpdate.itemCost * (parseFloat(itemToUpdate.itemBuy) - parseFloat(diffDeleteItem.qty))
        }
      }
      return itemToUpdate
    })
    return {
      id: row._id,
      items: updateItem
    }
  })
  const handleUpdatePurchase = async () => {
    if (purchase.length > 0 && maintenance.length === 0 && invoice.length === 0) {
      const updateRequestInvoice = updatePurchaseArray.map((row) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-purchase/${row.id}`, {
          items: row.items,
          purchaseAmount2: row.purchaseAmount2
        })
      })
      try {
        await Promise.all(updateRequestInvoice);
      } catch (error) {
        console.log('An error as occur');
      }
    } else if (purchase.length === 0 && maintenance.length > 0 && invoice.length === 0) {
      const updateRequestMaintenance = updateMaintenanceArray.map((row) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-maintenance/${row.id}`, {
          items: row.items,
        })
      })
      try {
        await Promise.all(updateRequestMaintenance);
      } catch (error) {
        console.log('An error as occur');
      }
    } else if (purchase.length === 0 && maintenance.length === 0 && invoice.length > 0) {
      const updateRequestInvoice = updateInvoiceArray.map((row) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-invoice/${row.id}`, {
          items: row.items,
        })
      })
      try {
        await Promise.all(updateRequestInvoice);
      } catch (error) {
        console.log('An error as occur');
      }
    }
  }
  {/** Update purchase end */ }
  {/** update Item Qty Start */ }
  const handleUpdateQty = async () => {
    if (difference && difference.length > 0) {
      const initialStateId = {}
      const QtyUpdate = {}
      //Get ItemName Id
      difference.filter((Item) => Item.idItems !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.idItems, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`http://192.168.0.200:8080/endpoint/get-item/${ids}`);
      })
      try {
        const res = await Promise.all(getRequestId);
        res.forEach((resp, index) => {
          QtyUpdate[`itemDb${index + 1}`] =
          {
            ids: resp.data.data._id,
            data: {
              itemQuantity: resp.data.data.itemQuantity - initialStateId[`item${index + 1}`].itemDbQty
            }
          }
        })
      } catch (error) {
        console.log('An error as occur');
      };
      // Update Value 
      const updateRequest = Object.values(QtyUpdate).map(({ ids, data }) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-item/${ids}`, data)
      })
      try {
        await Promise.all(updateRequest);
      } catch (error) {
        console.log('An error as occur');
      }
    }
    if (sumToAdd && sumToAdd.length > 0) {
      const initialStateId = {}
      const QtyUpdate = {}
      //Get ItemName Id
      sumToAdd.filter((Item) => Item.idItems !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.idItems, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`http://192.168.0.200:8080/endpoint/get-item/${ids}`);
      })
      try {
        const res = await Promise.all(getRequestId);
        res.forEach((resp, index) => {
          QtyUpdate[`itemDb${index + 1}`] =
          {
            ids: resp.data.data._id,
            data: {
              itemQuantity: resp.data.data.itemQuantity + initialStateId[`item${index + 1}`].itemDbQty
            }
          }
        })
      } catch (error) {
        console.log('An error as occur');
      };
      // Update Value 
      const updateRequest = Object.values(QtyUpdate).map(({ ids, data }) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-item/${ids}`, data)
      })
      try {
        await Promise.all(updateRequest);
      } catch (error) {
        console.log('An error as occur');
      }
    }
    if (newArrayAdd && newArrayAdd.length > 0) {
      const initialStateId = {}
      const QtyUpdate = {}
      //Get ItemName Id
      newArrayAdd.filter((Item) => Item.idItems !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.idItems, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`http://192.168.0.200:8080/endpoint/get-item/${ids}`);
      })
      try {
        const res = await Promise.all(getRequestId);
        res.forEach((resp, index) => {
          QtyUpdate[`itemDb${index + 1}`] =
          {
            ids: resp.data.data._id,
            data: {
              itemQuantity: resp.data.data.itemQuantity + initialStateId[`item${index + 1}`].itemDbQty
            }
          }
        })
      } catch (error) {
        console.log('An error as occur');
      };
      // Update Value 
      const updateRequest = Object.values(QtyUpdate).map(({ ids, data }) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-item/${ids}`, data)
      })
      try {
        await Promise.all(updateRequest);
      } catch (error) {
        console.log('An error as occur');
      }
    }
    if (deletedArray && deletedArray.length > 0) {
      const initialStateId = {}
      const QtyUpdate = {}
      //Get ItemName Id
      deletedArray.filter((Item) => Item.idItems !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.idItems, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`http://192.168.0.200:8080/endpoint/get-item/${ids}`);
      })
      try {
        const res = await Promise.all(getRequestId);
        res.forEach((resp, index) => {
          QtyUpdate[`itemDb${index + 1}`] =
          {
            ids: resp.data.data._id,
            data: {
              itemQuantity: resp.data.data.itemQuantity - initialStateId[`item${index + 1}`].itemDbQty
            }
          }
        })
      } catch (error) {
        console.log('An error as occur');
      };
      // Update Value 
      const updateRequest = Object.values(QtyUpdate).map(({ ids, data }) => {
        return axios.put(`http://192.168.0.200:8080/endpoint/update-item/${ids}`, data)
      })
      try {
        await Promise.all(updateRequest);
      } catch (error) {
        console.log('An error as occur');
      }
    }
  }
  {/** update Item Qty End */ }
  {/** loading Start */ }
  const [open2, setOpen2] = useState(false);

  const handleOpenUpdateReason = (e) => {
    e.preventDefault()
    setOpen2(true);
  };
  const handleCloseUpdateReason = () => {
    setOpen2(false);
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
  {/** loading End */ }
  const [hideBack, setHideBack] = useState('');
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify ' + ' IP-' + itemPurchaseNumber,
      reason: reason2,
      dateNotification: new Date()
    };
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/create-notification/', data)

    } catch (error) {
      console.log(error)
    }
  }
  const handleQty = async () => {
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/CalculateTotal')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      itemPurchaseDate,
      itemPurchaseNumber,
      manufacturer, note,
      manufacturerNumber, manufacturerID,
      description, total, totalUSD, totalFC, items, reason, projectName
    };
    try {
      const res = await axios.put(`http://192.168.0.200:8080/endpoint/update-itemPurchase/${id}`, data)
      if (res) {
        // Open Loading View
        //Update Item Qty
        //handleUpdateQty();
        handleQty()
        handleUpdatePurchase()
        handleCreateComment();
        handleOpen();
      } else {
        console.log('An Error as Occur');
      }
    } catch (error) {
      if (error) {
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

  const tableRows = reason === 'Project' || reason === 'Maintenance' || reason === 'Invoice' ? newArray2.map((Item, i) => {
    return (
      <tr key={Item.idRow}>
        <td ><DragIndicatorRounded /></td>
        <td  >
          {
            Item.itemName.itemName ? (
              (
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                  <div >
                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{Item.itemName ? Item.itemName.itemName : ''}</Typography>
                    <TextField
                      name='itemDescription' id='itemDescription'
                      value={Item.itemDescription}
                      multiline
                      placeholder='Description'
                      rows={3}
                      onChange={(e) => handleChange(e, Item.idRow)}
                      size="small"
                      disabled={user.data.role === 'User'}
                      sx={{ width: '300px', backgroundColor: 'white', fontSize: 12 }}
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
                  onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                  size="small"
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
                  sx={{ width: '300px', backgroundColor: 'white' }}
                />
              </div>
            )
          }
        </td>
        <td>
          <TextField
            required
            name='itemQty' id='itemQty'
            label='Qty'
            value={Item.itemQty}
            onChange={(e) => handleChange(e, Item.idRow)}
            size="small"
            sx={{ width: '100px', backgroundColor: 'white' }}
          />

        </td>
        <td >
          <TextField
            required
            name='itemRate' id='itemRate'
            label='Price$'
            value={Item.itemRate}
            helperText={'Purchase Cost: $' + Item.cost}
            onChange={(e) => handleChange(e, Item.idRow)}
            size="small"
            sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <TextField
              required
              name='totalAmountFC' id='totalAmountFC'
              value={Item.totalAmountFC !== undefined ? Item.totalAmountFC : 0}
              label='FC'
              onChange={(e) => handleChange(e, Item.idRow)}
              size="small"
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
            <TextField
              required
              name='Taux' id='Taux'
              value={Item.Taux !== undefined ? Item.Taux : 0}
              onChange={(e) => handleChange(e, Item.idRow)}
              size="small"
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
            <TextField
              required
              name='totalAmount' id='totalAmount'
              value={Item.totalAmount !== undefined ? Item.totalAmount : 0}
              label='$'
              size="small"
              onChange={(e) => handleChange(e, Item.idRow)}
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
          </span>
          <span>Total Cost USD: {Item.totalAmountUSD !== undefined ? Item.totalAmountUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span>
        </td>
        <td id='amountTotalInvoice'>{Item.fcConvertToUsdTotal !== undefined ? Item.fcConvertToUsdTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
      </tr>
    )
  }) : null

  const tableRows2 = newArray2.map((Item, i) => {
    return (
      <tr key={Item.idRow}>
        <td ><DragIndicatorRounded /></td>
        <td  >
          {
            Item.itemName.itemName ? (
              (
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                  <div >
                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{Item.itemName ? Item.itemName.itemName : ''}</Typography>
                    <TextField
                      name='itemDescription' id='itemDescription'
                      value={Item.itemDescription}
                      multiline
                      placeholder='Description'
                      rows={3}
                      onChange={(e) => handleChange(e, Item.idRow)}
                      size="small"
                      disabled={user.data.role === 'User'}
                      sx={{ width: '300px', backgroundColor: 'white', fontSize: 12 }}
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
                  onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                  size="small"
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
                  sx={{ width: '300px', backgroundColor: 'white' }}
                />
              </div>
            )
          }
        </td>
        <td>
          <TextField
            name='itemQty' id='itemQty'
            label='Qty'
            value={Item.itemQty}
            onChange={(e) => handleChange(e, Item.idRow)}
            size="small"
            sx={{ width: '100px', backgroundColor: 'white' }}
          />

        </td>
        <td >
          <TextField
            required
            name='itemRate' id='itemRate'
            label='Price$'
            value={Item.itemRate}
            helperText={'Purchase Cost: $' + Item.cost}
            onChange={(e) => handleChange(e, Item.idRow)}
            size="small"
            sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <TextField
              required
              name='totalAmountFC' id='totalAmountFC'
              value={Item.totalAmountFC !== undefined ? Item.totalAmountFC : 0}
              label='FC'
              onChange={(e) => handleChange(e, Item.idRow)}
              size="small"
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
            <TextField
              required
              name='Taux' id='Taux'
              value={Item.Taux !== undefined ? Item.Taux : 0}
              onChange={(e) => handleChange(e, Item.idRow)}
              size="small"
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
            <TextField
              required
              name='totalAmount' id='totalAmount'
              value={Item.totalAmount !== undefined ? Item.totalAmount : 0}
              label='$'
              size="small"
              onChange={(e) => handleChange(e, Item.idRow)}
              sx={{ width: '100px', backgroundColor: 'white' }}
            />
          </span>
          <span>Total Cost USD: {Item.totalAmountUSD !== undefined ? Item.totalAmountUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span>
        </td>
        <td id='amountTotalInvoice'>{Item.fcConvertToUsdTotal !== undefined ? Item.fcConvertToUsdTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
        <td align="center" >
          <LightTooltip title="Delete" sx={{}}>
            <IconButton onClick={() => deleteItem(Item.idRow)} >
              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
            </IconButton>
          </LightTooltip>
          <BlackTooltip title="New-Row" placement="bottom">
            <span>
              <IconButton onClick={() => addItemRow(i)} disabled={reason !== 'Other'}>
                <Add style={{ color: '#202a5a' }} />
              </IconButton>
            </span>
          </BlackTooltip>
        </td>
      </tr>
    )
  });
  return (
    <div>
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
              update Item Purchase
            </Typography>
            {
              hideBack === 'true' ?
                <IconButton>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton> :
                <>
                  <IconButton onClick={handleOpenBack}>
                    <ArrowBack style={{ color: 'white' }} />
                  </IconButton>
                  <IconButton onClick={toggleShop}>
                    <ShoppingCartOutlinedIcon style={{ color: 'white' }} />
                  </IconButton>
                  <NotificationVIewInfo />
                </>
            }
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
            <div>
              <form onSubmit={handleOpenUpdateReason}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='itemPurchaseDate'
                          label='Date'
                          value={dayjs(itemPurchaseDate)}
                          onChange={(date) => setItemPurchaseDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor="itemPurchaseNumber">Item Purchase Number</InputLabel>
                      <OutlinedInput
                        disabled
                        type='number'
                        id='itemPurchaseNumber'
                        name='itemPurchaseNumber'
                        label='Item Purchase Number'
                        value={'00' + itemPurchaseNumber}
                        startAdornment={<InputAdornment position="start">IP</InputAdornment>}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    {
                      manufacturer !== null ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <p >{manufacturer}</p>
                          <BlackTooltip title="Clear" placement='top'>
                            <IconButton onClick={handleClearCustomer} style={{ position: 'relative', float: 'right' }}>
                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                            </IconButton>
                          </BlackTooltip>
                        </div>

                      ) : (
                        <Autocomplete
                          disableClearable
                          options={supplier}
                          getOptionLabel={(option) => option.supplierName + ' | ' + option.storeName}
                          renderOption={(props, option) => (<Box {...props}> {option.supplierName} | {option.storeName} </Box>)}
                          onChange={(e, newValue) => { handleChangeSupplier(newValue) }}
                          inputValue={inputValue3}
                          onInputChange={(event, newInputValue) => {
                            setInputValue3(newInputValue);
                          }}
                          filterOptions={(options, { inputValue }) => {
                            return options.filter(
                              (option) =>
                                option.supplierName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                option.storeName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                option.description.toLowerCase().includes(inputValue.toLowerCase())
                            )
                          }}
                          PaperComponent={({ children, ...other }) => (
                            <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                              {children}
                              <div>
                                <button onClick={(e) => handleOpenOpenAutocomplete1(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                                  ADD NEW SUPPLIER
                                </button>
                              </div>
                            </Box>
                          )}
                          renderInput={(params) => <TextField {...params} label="Manufacturer" required />}
                        />
                      )
                    }
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id='manufacturerNumber'
                      name='manufacturerNumber'
                      label='Reference '
                      value={manufacturerNumber ? manufacturerNumber : 0}
                      onChange={(e) => setManufacturerNumber(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="reason">Reason</InputLabel>
                      <Select
                        required
                        id="reason"
                        value={reason !== undefined ? reason : ''}
                        onChange={(e) => handleReason(e)}
                        name="reason"
                        label="Reason"
                      >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Maintenance">Maintenance</MenuItem>
                        <MenuItem value="Invoice">Invoice</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    {
                      reason === 'Other' ? (
                        <TextField
                          id='description'
                          name='description'
                          label='Description'
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      ) : (
                        <div>
                          <div style={{ display: 'flex', gap: '80px' }}>
                            <Typography>{projectName !== undefined ? projectName.name : ''}</Typography>
                          </div>
                        </div>
                      )
                    }
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <div style={{ position: 'fixed', zIndex: 1, float: 'right', right: '-6px' }}>
                        <BlackTooltip title="Add" placement="left">
                          <span>
                            <IconButton onClick={addItem} disabled={reason === 'Project' || reason === 'Maintenance'}>
                              <Add className='btn1' style={{ fontSize: '40px' }} />
                            </IconButton>
                          </span>
                        </BlackTooltip>
                      </div>
                      <TableContainer sx={{ marginLeft: '-15px' }}>
                        {
                          reason !== 'Other' ? (
                            <>
                              <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                <TextField
                                  label='Search'
                                  id='search2'
                                  value={search2}
                                  variant="standard"
                                  onChange={handleSearch2}
                                />
                              </section>
                              <table className='tableInfo10'>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price$</th>
                                    <th>Amount Paid</th>
                                    <th>Total Paid</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tableRows}
                                  <tr>
                                    <td colSpan={2}>Total</td>
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
                                          value={isNaN(totalUSD) ? 0 : parseFloat(totalUSD)}
                                          sx={{ width: '120px', backgroundColor: 'white' }}
                                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                      </FormControl>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </>
                          ) : (<>
                            <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                              <TextField
                                label='Search'
                                id='search2'
                                value={search2}
                                variant="standard"
                                onChange={handleSearch2}
                              />
                            </section>
                            <table className='tableInfo10'>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item</th>
                                  <th>Quantity</th>
                                  <th>Price$</th>
                                  <th>Amount Paid</th>
                                  <th>Total Paid</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tableRows2}
                                <tr>
                                  <td colSpan={2}>Total</td>
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
                                        value={isNaN(totalUSD) ? 0 : parseFloat(totalUSD)}
                                        sx={{ width: '120px', backgroundColor: 'white' }}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                      />
                                    </FormControl>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>

                          )}

                      </TableContainer>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='note'
                      name='note'
                      multiline
                      rows={4}
                      value={note !== undefined ? note : ''}
                      label='Note'
                      onChange={(e) => setNote(e.target.value)}
                      sx={{ width: '60%', backgroundColor: 'white' }}
                    />
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
              <Typography>Do you want to stop creating customer ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/ItemPurchaseViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
            </Grid>
          </Grid>
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
            <SupplierForm2 onCreateOption={handleCreateCustomer} onClose={handleCloseOpenAutocomplete1} />
          </div>
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
      <Modal
        open={open2}
        onClose={handleCloseUpdateReason}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdateReason} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
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
                  value={reason2}
                  onChange={(e) => setReason2(e.target.value)}
                  label='Comments'
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

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

        <Box display="flex" mb={2}>
          <TextField
            fullWidth
            label="Search Shop"
            variant="outlined"
            value={shopSearch}
            onChange={handleShopSearchChange}
            size="small"
          />
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
                        <Typography variant="subtitle2" component="div" noWrap>
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
                          onClick={() => handleAddToItemPurchaseUpdate(item)}
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
    </div >
  )
}

export default ItemPurchaseUpdateForm
