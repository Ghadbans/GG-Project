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
function ItemOutViewUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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


  const [itemOutDate, setItemOutDate] = useState("");
  const [reason, setReason] = useState("");
  const [reason2, setReason2] = useState("");
  const [description, setDescription] = useState("");
  const [itemsQtyArray, SetItemsQtyArray] = useState([]);
  const [projects, setProject] = useState([]);
  const [outNumber, setOutNumber] = useState(0)
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [projectId, setProjectId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [invoiceId, setInvoiceId] = useState('');
  const [ItemInformation, setItemInformation] = useState([]);
  const [reference, setReference] = useState({})
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [rate, setRate] = useState(0);
  const [shopLoading, setShopLoading] = useState(false);
  {/** Get item out start */ }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-itemOut/${id}`)
        setOutNumber(res.data.data.outNumber);
        setItemOutDate(res.data.data.itemOutDate);
        setReason(res.data.data.reason);
        setDescription(res.data.data.description);
        SetItemsQtyArray(res.data.data.itemsQtyArray);
        setDescription(res.data.data.description);
        setReference(res.data.data.reference);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [id])
  const [OldArray, setOldArray] = useState([])
  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-itemOut/${id}`)
        setOldArray(res.data.data.itemsQtyArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDataId()
  }, [id])
  {/** Get item out end */ }
  {/** Information about all reference start */ }

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resItem = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/item')
        setItemInformation(resItem.data.data)
        const resProject = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/purchase')
        setProject(resProject.data.data);
        const resMaintenance = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/maintenance')
        setMaintenance(resMaintenance.data.data);
        const resInvoice = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/invoice')
        const newData = resInvoice.data.data.filter((row) => !row.ReferenceName && !row.ReferenceName2)
        setInvoice(newData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    handleFetch()
  }, [])
  {/** Information about all reference end */ }

  // Fetch Shop Items & Rate
  useEffect(() => {
    if (shopOpen) { // Only fetch if side shop is open
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
          // Fallback if needed, though mostly online
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

  const handleAddToItemOut = (shopItem) => {
    // Check if item already exists
    const existingItemIndex = itemsQtyArray.findIndex(item => item.itemName._id === shopItem._id);

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedItems = [...itemsQtyArray];
      const currentItem = updatedItems[existingItemIndex];
      const newQty = parseInt(currentItem.newItemOut) + 1;

      // Check stock limit if needed, similar to manual change
      if (newQty <= shopItem.itemQuantity) {
        updatedItems[existingItemIndex] = {
          ...currentItem,
          newItemOut: newQty,
        };
        SetItemsQtyArray(updatedItems);
      } else {
        alert('Not enough stock');
      }
    } else {
      // Item does not exist, add new
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName,
        },
        itemDescription: shopItem.itemDescription,
        newItemOut: 1,
        // For update view, we might need these fields to match existing logic if they are used
        itemQty: 0,
        itemOut: 0,
      };
      SetItemsQtyArray([...itemsQtyArray, newItem]);
    }
  }

  {/**  Filter based on reference start */ }
  const [filteredInvoice, setFilteredInvoice] = useState([]);
  const [filteredProject, setFilteredProject] = useState([]);
  const [filteredMaintenance, setFilteredMaintenance] = useState([]);
  useEffect(() => {
    invoice.filter((row) => row._id === reference._id).map((row) => setFilteredInvoice(row.items))
    invoice.filter((row) => row._id === reference._id).map((row) => setInvoiceId(row._id))
    projects.filter((row) => row.projectName._id === reference._id).map((row) => setFilteredProject(row.items))
    projects.filter((row) => row.projectName._id === reference._id).map((row) => setProjectId(row._id))
    maintenance.filter((row) => row._id === reference._id).map((row) => setFilteredMaintenance(row.items))
    maintenance.filter((row) => row._id === reference._id).map((row) => setServiceId(row._id))
  }, [invoice, projects, maintenance, reference])

  {/**  Filter based on reference end */ }
  {/** Item Change Start */ }
  const handleShowAutocomplete = (idRow) => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
    } : row))
  }
  const handleChange = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...itemsQtyArray];
    const i = itemsQtyArray.findIndex(Item => Item.idRow === idRow)
    list[i][name] = value;
    SetItemsQtyArray(list);
  }
  const addItem = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      idRow: v4(),
      itemName: {},
      itemDescription: "",
      itemQty: 0,
      newItemOut: 0,
      itemOut: 0,
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
      itemDescription: selectedOptions?.itemDescription,
    } : row))
  }
  {/** Item Change End */ }
  {/** Update Info start */ }
  const handleUpdateInfo = () => {
    const difference = [];
    const sumToAdd = [];
    OldArray.map((row) => {
      const newItem = itemsQtyArray.find((row1) => row1.itemName._id === row.itemName._id)
      if (newItem && parseFloat(row.newItemOut) > parseFloat(newItem.newItemOut)) {
        const diff = parseFloat(row.newItemOut) - parseFloat(newItem.newItemOut)
        difference.push({
          idRow: row.idRow,
          id: row.itemName._id,
          qty: diff
        })
      } else if (newItem && parseFloat(newItem.newItemOut) > parseFloat(row.newItemOut)) {
        const diff = parseFloat(newItem.newItemOut) - parseFloat(row.newItemOut)
        sumToAdd.push({
          idRow: row.idRow,
          id: row.itemName._id,
          qty: diff
        })
      }
    })
    if (filteredProject.length > 0) {
      //update Purchase
      if (sumToAdd && sumToAdd.length > 0) {
        const result = filteredProject.map((row) => {
          const relatedArray = sumToAdd.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut + relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-purchase/${projectId}`, data)
      } else if (difference && difference.length > 0) {
        const result = filteredProject.map((row) => {
          const relatedArray = difference.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut - relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-purchase/${projectId}`, data)
      }
    } else if (filteredInvoice.length > 0) {
      //Update Invoice
      if (sumToAdd && sumToAdd.length > 0) {
        const result = filteredInvoice.map((row) => {
          const relatedArray = sumToAdd.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut + relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-invoice/${invoiceId}`, data)
      } else if (difference && difference.length > 0) {
        const result = filteredInvoice.map((row) => {
          const relatedArray = difference.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut - relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-invoice/${invoiceId}`, data)
      }
    } else if (filteredMaintenance.length > 0) {
      //Update Maintenance
      if (sumToAdd && sumToAdd.length > 0) {
        const result = filteredMaintenance.map((row) => {
          const relatedArray = sumToAdd.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut + relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-maintenance/${serviceId}`, data)
      } else if (difference && difference.length > 0) {
        const result = filteredMaintenance.map((row) => {
          const relatedArray = difference.find((Item) => Item.idRow === row.idRow)
          if (relatedArray) {
            const itemOut = row.itemOut - relatedArray.qty
            return {
              ...row, itemOut
            }
          }
          return row
        })
        const data = {
          items: result
        }
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-maintenance/${serviceId}`, data)
      }
    }
  }
  {/** Update Info end */ }
  {/** Update Qty of project */ }
  const handleUpdateQty = async () => {
    const difference = [];
    const sumToAdd = [];
    OldArray.map((row) => {
      const newItem = itemsQtyArray.find((row1) => row1.itemName._id === row.itemName._id)
      if (newItem && parseFloat(row.newItemOut) > parseFloat(newItem.newItemOut)) {
        const diff = parseFloat(row.newItemOut) - parseFloat(newItem.newItemOut)
        difference.push({
          idRow: row.idRow,
          id: row.itemName._id,
          qty: diff
        })
      } else if (newItem && parseFloat(newItem.newItemOut) > parseFloat(row.newItemOut)) {
        const diff = parseFloat(newItem.newItemOut) - parseFloat(row.newItemOut)
        sumToAdd.push({
          idRow: row.idRow,
          id: row.itemName._id,
          qty: diff
        })
      }
    })
    if (difference && difference.length > 0) {
      const initialStateId = {}
      const QtyUpdate = {}
      //Get ItemName Id
      difference.filter((Item) => Item.id !== '' && Item.id !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.id, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-item/${ids}`);
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
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-item/${ids}`, data)
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
      sumToAdd.filter((Item) => Item.id !== '' && Item.id !== undefined).forEach((Item, index) => {
        initialStateId[`item${index + 1}`] = { ids: Item.id, itemDbQty: parseFloat(Item.qty) }
      })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ ids }) => {
        return axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-item/${ids}`);
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
        return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-item/${ids}`, data)
      })
      try {
        await Promise.all(updateRequest);
      } catch (error) {
        console.log('An error as occur');
      }
    }
  }
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
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

  const [hideBack, setHideBack] = useState('');
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify ' + ' O-' + outNumber,
      reason: reason2,
      dateNotification: new Date()
    };
    try {
      const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification/', data)
      if (res) {
        handleOpen();
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const handleQty = async () => {
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/CalculateTotal')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      itemOutDate,
      description,
      itemsQtyArray,
    };
    try {
      const res = await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-itemOut/${id}`, data)
      if (res) {
        handleUpdateInfo();
        handleQty()
        handleCreateComment()
        handleOpen();
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

  const newArray2 = search2 !== '' ? itemsQtyArray.filter((Item) =>
    Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
    Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
    Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())
  ) : itemsQtyArray

  const tableRows = newArray2.map((Item, i) => {
    const relatedItemQty = ItemInformation.find((row2) => row2._id === Item.itemName._id)
    return (<tr key={Item.idRow}>
      {
        Item.newDescription !== undefined ?
          <>
            <td ><DragIndicatorRounded /></td>
            <td colSpan={3}><TextField
              name='newDescription' id='newDescription'
              value={Item.newDescription}
              size="small"
              disabled
              sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
            /></td>
          </> : <>
            <td ><DragIndicatorRounded /></td>
            <td>
              <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName : ''}</Typography>
              <TextField
                disabled
                name='itemDescription' id='itemDescription'
                value={Item.itemDescription}
                multiline
                rows={3}
                size="small"
                sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
              />
            </td>
            <td>
              <TextField
                size="small"
                name='newItemOut' id='newItemOut'
                value={Item.newItemOut}
                helperText={relatedItemQty && relatedItemQty.itemQuantity !== undefined ? 'Stock :' + relatedItemQty.itemQuantity : 0}
                max={relatedItemQty && relatedItemQty.itemQuantity}
                onChange={(e) => {
                  handleChange(e, Item.idRow)
                }}
                sx={{ width: '100px', backgroundColor: 'white' }}
              />
            </td>
          </>
      }
    </tr>)
  });
  const tableRows2 = itemsQtyArray.map((Item, i) => {
    const relatedItemQty = ItemInformation.find((row2) => row2._id === Item.itemName._id)
    return (<tr key={Item.idRow}>
      <td ><DragIndicatorRounded /></td>
      <td >
        {
          Item.itemName.itemName ? (
            (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div >
                  <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>{Item.itemName.itemName}</Typography>
                  <TextField
                    name='itemDescription' id='itemDescription'
                    value={Item.itemDescription}
                    multiline
                    rows={3}
                    size="small"
                    disabled={user.data.role === 'User'}
                    sx={{ width: '440px', backgroundColor: 'white', fontSize: 12 }}
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
            <>
              <Autocomplete
                disableClearable
                options={ItemInformation}
                getOptionLabel={(option) => option.itemName}
                renderOption={(props, option) => (<Box {...props}>{option.itemName}</Box>)}
                renderInput={(params) =>
                  <TextField multiline
                    rows={4} {...params} required
                  />}
                onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                size="small"
                sx={{ width: '470px', backgroundColor: 'white' }}
              />
            </>
          )
        }
      </td>
      <td>
        <TextField
          required
          name='newItemOut' id='newItemOut'
          value={Item.newItemOut}
          size="small"
          helperText={relatedItemQty && relatedItemQty.itemQuantity !== undefined ? 'Stock :' + relatedItemQty.itemQuantity : 0}
          max={relatedItemQty && relatedItemQty.itemQuantity}
          onChange={(e) => {
            let value = e.target.value
            if (value <= (relatedItemQty && relatedItemQty.itemQuantity)) {
              handleChange(e, Item.idRow)
            }
          }}
          sx={{ width: '100px', backgroundColor: 'white' }}
        />
      </td>
    </tr>)
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
              update Item Out
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
                        disabled
                        id="reason"
                        value={reason}
                        name="reason"
                        label="Reason"
                      >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Maintenance">Maintenance</MenuItem>
                        <MenuItem value="Dotation">Item Assign</MenuItem>
                        <MenuItem value="Invoice">Direct-Invoice</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {
                    reason !== 'Project' ? '' : (
                      <Grid item xs={12}>
                        <TextField
                          multiline
                          disabled
                          label='Project Name'
                          rows={2}
                          value={reference.referenceName}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      </Grid>
                    )
                  }
                  {
                    reason !== 'Maintenance' ? '' : (
                      <Grid item xs={6}>
                        <TextField
                          multiline
                          disabled
                          label='Maintenance Name'
                          rows={2}
                          value={reference.referenceName}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      </Grid>
                    )
                  }
                  {
                    reason !== 'Dotation' ? '' : (
                      <Grid item xs={6}>
                        <TextField
                          multiline
                          disabled
                          label='Employee Name'
                          rows={2}
                          value={reference.referenceName}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      </Grid>
                    )
                  }
                  {
                    reason !== 'Invoice' ? '' : (
                      <Grid item xs={6}>
                        <TextField
                          multiline
                          disabled
                          label='Invoice'
                          rows={2}
                          value={reference.referenceName}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      </Grid>
                    )
                  }
                  <Grid item xs={12}>
                    {
                      reason === 'Dotation' ? (
                        <TableContainer>
                          <div style={{ position: 'relative', float: 'right', margin: '10px' }}>
                            <BlackTooltip title="Add" placement="left">
                              <IconButton onClick={addItem}>
                                <Add className='btn1' />
                              </IconButton>
                            </BlackTooltip>
                          </div>
                          <table className='tableInfo10' style={{ width: '100%' }}>
                            <thead>
                              <tr>
                                <th align="left">#</th>
                                <th align="left">Item</th>
                                <th align="left">QTY Out</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableRows2}
                            </tbody>
                          </table>
                        </TableContainer>
                      ) : (
                        <TableContainer>
                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                            <TextField
                              label='Search'
                              id='search2'
                              value={search2}
                              variant="standard"
                              onChange={handleSearch2}
                            />
                          </section>
                          <table className='tableInfo10' style={{ width: '100%' }}>
                            <thead>
                              <tr>
                                <th align="left">#</th>
                                <th align="left">Item</th>
                                <th align="left">Out</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableRows}
                            </tbody>
                          </table>
                        </TableContainer>
                      )
                    }

                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='description'
                      name='description'
                      value={description}
                      label='Description'
                      multiline
                      rows={4}
                      onChange={(e) => setDescription(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
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
              <Typography>Do you want to stop making item out ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop making item out without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/ItemOutViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
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
                          onClick={() => handleAddToItemOut(item)}
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

export default ItemOutViewUpdate
