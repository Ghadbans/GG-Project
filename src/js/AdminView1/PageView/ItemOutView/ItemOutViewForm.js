import React, { useEffect, useState } from 'react';
import SideMaintenance2 from '../../../component/SideMaintenance2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider, Drawer as SideDrawer, Card, CardContent, CardMedia, Button, Pagination, Avatar } from '@mui/material'
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

const ItemThumbnail = ({ itemId, initialData, initialType }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      // 1. Check for initialData (passed from search/shop)
      if (initialData) {
        setSrc(`data:${initialType};base64,${initialData}`);
        return;
      }

      if (!itemId) return;

      // 2. Try Online if navigator is online
      if (navigator.onLine) {
        try {
          const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-item/${itemId}`);
          if (res.data.data && res.data.data.data) {
            const buffer = new Uint8Array(res.data.data.data.data);
            const blob = new Blob([buffer], { type: res.data.data.contentType });
            const reader = new FileReader();
            reader.onloadend = () => setSrc(reader.result);
            reader.readAsDataURL(blob);
            return;
          }
        } catch (err) {
          console.error("Error fetching online image:", err);
        }
      }

      // 3. Try Dexie fallback
      try {
        const resLocal = await db.itemSchema.get({ _id: itemId });
        if (resLocal && resLocal.data) {
          const buffer = new Uint8Array(resLocal.data.data);
          const blob = new Blob([buffer], { type: resLocal.contentType });
          const reader = new FileReader();
          reader.onloadend = () => setSrc(reader.result);
          reader.readAsDataURL(blob);
        }
      } catch (err) {
        console.error("Error fetching local image:", err);
      }
    };
    fetchImage();
  }, [itemId, initialData, initialType]);

  return (
    <Avatar
      variant="rounded"
      src={src}
      sx={{ width: 80, height: 80, backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
    >
      {!src && <ShoppingCartOutlinedIcon sx={{ fontSize: '40px', color: '#ccc' }} />}
    </Avatar>
  );
};
function ItemOutViewForm() {
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
    return date
  });
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [items, SetItems] = useState([]);
  const [items1, SetItems1] = useState([]);
  const [itemsQtyArray, SetItemsQtyArray] = useState([]);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [rate, setRate] = useState(0);
  const [shopLoading, setShopLoading] = useState(false);
  const [projects, setProject] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [serviceNumber, setServiceNumber] = useState({});
  const [projectName, setProjectName] = useState({});
  const [employeeName, setEmployeeName] = useState({});
  const [invoiceName, setInvoiceName] = useState({});
  const [projectId, setProjectId] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const [invoiceId, setInvoiceId] = useState(null);
  const [inputValue2, setInputValue2] = React.useState('');
  const [inputValueProject, setInputValueProject] = React.useState('');
  const [outNumber, setOutNumber] = useState(0);
  const [ItemInformation, setItemInformation] = useState([]);
  const [reference, setReference] = useState(null);
  const Create = {
    person: user.data.userName,
    dateComment: dayjs(new Date()).format('DD/MM/YYYY-HH:mm')
  }
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resItemOut = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-itemOut')
        setOutNumber(parseInt(resItemOut.data.outNumber) + 1)
        const resItem = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
        setItemInformation(resItem.data.data.reverse())
        const resPurchase = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
        const resProject = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
        setProject(resProject.data.data.filter((row) => row.status === 'On-Going' && resPurchase.data.data.find((Item) => Item.projectName._id === row._id && Item.items.some((Item1) => Item1.itemQty > Item1.itemOut))).reverse());
        const resEmployee = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
        setEmployee(resEmployee.data.data);
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

  // Fetch Shop Items & Rate
  useEffect(() => {
    if (shopOpen) { // Only fetch if side shop is open
      const fetchShop = async () => {
        setShopLoading(true);
        if (navigator.onLine) {
          try {
            const resRate = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/rate')
            resRate.data.data.forEach((row) => setRate(row.rate))

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
          offLineRate.forEach((row) => setRate(row.rate))
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

      updatedItems[existingItemIndex] = {
        ...currentItem,
        newItemOut: newQty,
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
        newItemOut: 1,
        data: shopItem.data,
        contentType: shopItem.contentType
      };
      SetItemsQtyArray([...itemsQtyArray, newItem]);
    }
  }
  const handleChangeReason = (e) => {
    setReason(e.target.value);
    setEmployeeName(null);
    setInvoiceName(null);
    setProjectName(null);
    setServiceNumber(null);
    setReference(null);
    SetItemsQtyArray([])
  }

  const handleChangeEmployee = (newValue) => {
    const selectedOptions = employee.find((option) => option === newValue)
    setEmployeeName
      ({
        _id: selectedOptions?._id,
        name: selectedOptions?.employeeName
      });
    setReference
      ({
        _id: selectedOptions?._id,
        referenceName: selectedOptions?.employeeName
      });
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
              SetItems(row.items)
            )
          res.data.data.filter((row) => projectName ? row.projectName._id === projectName._id : '')
            .map((row) =>
              SetItems1(row.items)
            )
          res.data.data.filter((row) => projectName ? row.projectName._id === projectName._id : '')
            .map((row) =>
              setProjectId(row._id)
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
              SetItems(row.items)
            )
          res.data.data.filter((row) => serviceNumber ? row._id === serviceNumber._id : '')
            .map((row) =>
              SetItems1(row.items)
            )
          res.data.data.filter((row) => serviceNumber ? row._id === serviceNumber._id : '')
            .map((row) =>
              setServiceId(row._id)
            )
        } catch (error) {

        }
      }
      else if (invoiceName !== null) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/invoice')
          res.data.data.filter((row) => invoiceName ? row._id === invoiceName._id : '')
            .map((row) =>
              SetItems(row.items)
            )
          res.data.data.filter((row) => invoiceName ? row._id === invoiceName._id : '')
            .map((row) =>
              SetItems1(row.items)
            )
          res.data.data.filter((row) => invoiceName ? row._id === invoiceName._id : '')
            .map((row) =>
              setInvoiceId(row._id)
            )
        } catch (error) {

        }
      }
    }
    fetchId()
  }, [projectName, serviceNumber, invoiceName]);
  {/**Maintenance Filter end */ }
  useEffect(() => {
    const result = items.map((row) => {
      return {
        idRow: row.idRow,
        itemName: row.itemName,
        itemDescription: row.itemDescription,
        newItemOut: row.newItemOut,
        newDescription: row.newDescription
      }
    })
    SetItemsQtyArray(result)
  }, [items])
  const handleClear = () => {
    setReference(null);
    SetItemsQtyArray([])
  }
  {/** Item Change Start */ }
  const handleChange = (idRow, key, value) => {
    const list = [...itemsQtyArray];
    const i = itemsQtyArray.findIndex(Item => Item.idRow === idRow)
    list[i][key] = value;
    SetItemsQtyArray(list);
  }


  {/** Item Change End */ }
  {/** Update Qty of project */ }
  const handleUpdatePurchase = () => {
    if (projectId !== null && serviceId === null && invoiceId === null) {
      const result = items1.map((row) => {
        const newItem = itemsQtyArray.find((Item) => Item.itemName._id === row.itemName._id && Item.itemName.itemName !== '')
        if (newItem) {
          const itemOut = parseFloat(row.itemOut) + parseFloat(newItem.newItemOut)
          return {
            ...row, itemOut
          }
        }
        return row
      })
      const data = {
        items: result
      };
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchase/${projectId}`, data)
    } else if (projectId === null && serviceId !== null && invoiceId === null) {
      const result = items.map((row) => {
        const newItem = itemsQtyArray.find((Item) => Item.idRow === row.idRow)
        if (newItem) {
          const itemOut = parseFloat(row.itemOut) + parseFloat(newItem.newItemOut)
          return {
            ...row, itemOut
          }
        }
        return row
      })
      const data = {
        items: result
      };
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-maintenance/${serviceId}`, data)
    } else if (projectId === null && serviceId === null && invoiceId !== null) {
      const result = items.map((row) => {
        const newItem = itemsQtyArray.find((Item) => Item.idRow === row.idRow)
        if (newItem) {
          const itemOut = parseFloat(row.itemOut) + parseFloat(newItem.newItemOut)
          return {
            ...row, itemOut
          }
        }
        return row
      })
      const data = {
        items: result
      };
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-invoice/${invoiceId}`, data)
    } else {

    }
  }
  {/** Update Qty of project */ }
  const handleUpdateQty = async () => {
    const initialState = {}
    const QtyUpdate = {}
    //Get Qty Arrays
    const QtyNew = itemsQtyArray.filter((row) => row.itemName._id !== '' && row.itemName._id !== undefined).map((Item) => Item.newItemOut !== 0 ? Item.newItemOut : 0)
    //Get ItemName Id
    itemsQtyArray.filter((row) => row.itemName._id !== '' && row.itemName._id !== undefined).forEach((Item, index) => {
      initialState[`id${index + 1}`] = { ids: Item.itemName._id }
    })
    // Get Value
    const getRequestId = Object.values(initialState).map(({ ids }) => {
      return axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-item/${ids}`)
    })
    try {
      const res = await Promise.all(getRequestId);
      res.forEach((resp, index) => { QtyUpdate[`id${index + 1}`] = { ids: resp.data.data._id, data: { itemQuantity: resp.data.data.itemQuantity - QtyNew[index] } } })
    } catch (error) {
      console.log('No related id');
    }
    // Update Value 
    const updateRequest = Object.values(QtyUpdate).map(({ ids, data }) => {
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-item/${ids}`, data)
    })
    try {
      await Promise.all(updateRequest);
    } catch (error) {
      console.log('No related id');
    }
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
  const addItem = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      idRow: v4(),
      itemName: {},
      itemDescription: "",
      newItemOut: 0,
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
      reason: 'O-' + ReferenceInfoNumber + ' For ' + reasonInfo,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')

  const handleQty = async () => {
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/CalculateTotal')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      outNumber,
      itemOutDate,
      reason,
      description,
      itemsQtyArray,
      reference, Create
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-itemOut', data);
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.outNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        handleQty()
        handleUpdatePurchase();
        handleUpdateQty();
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
  const newArray2 = search2 !== '' ? itemsQtyArray.filter((Item) =>
    Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
    Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
    Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())
  ) : itemsQtyArray



  const tableRows = reason !== 'Dotation' ? newArray2.map((Item, i) => {
    const related = items.find((row) => row.idRow === Item.idRow)
    const relatedItemQty = ItemInformation.find((row2) => row2._id === Item.itemName?._id)
    return (
      <tr key={Item.idRow}>
        {
          Item.newDescription !== undefined ?
            (
              <>
                <td ><DragIndicatorRounded /></td>
                <td colSpan={4}><TextField
                  name='newDescription' id='newDescription'
                  value={Item.newDescription !== undefined ? Item.newDescription : null}
                  size="small"
                  disabled
                  sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
                /></td>
              </>)
            : (
              <>
                <td ><DragIndicatorRounded /></td>
                <td>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <ItemThumbnail
                      itemId={Item.itemName?._id}
                      initialData={Item.data}
                      initialType={Item.contentType}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
                      <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {Item.itemName ? Item.itemName.itemName : ''}
                      </Typography>
                      <TextField
                        disabled
                        name='itemDescription' id='itemDescription'
                        value={Item.itemDescription ? Item.itemDescription : ''}
                        multiline
                        rows={2}
                        size="small"
                        sx={{ width: '100%', backgroundColor: 'white', fontSize: 11 }}
                      />
                    </Box>
                  </Box>
                </td>
                <td>
                  <TextField
                    disabled
                    name='itemQty' id='itemQty'
                    value={related?.itemQty !== undefined ? related.itemQty : 0}
                    size="small"
                    sx={{ width: '100px', backgroundColor: 'white' }}
                  />
                </td>
                <td>

                  <TextField
                    disabled
                    size="small"
                    name='itemOut' id='itemOut'
                    value={related?.itemOut !== undefined ? related.itemOut : 0}
                    sx={{ width: '100px', backgroundColor: 'white' }}
                  />
                </td>
                <td>

                  {
                    related?.itemQty !== undefined && related.itemQty > related.itemOut ? (
                      <TextField
                        disabled={relatedItemQty && parseFloat(relatedItemQty.itemQuantity) <= 0}
                        required
                        size="small"
                        name='newItemOut' id='newItemOut'
                        helperText={relatedItemQty && relatedItemQty.itemQuantity !== undefined ? 'Stock :' + relatedItemQty.itemQuantity : 0}
                        value={Item.newItemOut}
                        onChange={(e) => {
                          const value = e.target.value
                          if (!isNaN(value) && value !== '') {
                            const numericValue = parseInt(value, 10);
                            if (numericValue <= (relatedItemQty?.itemQuantity || 0)) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', 0)
                            }
                          } else {
                            handleChange(Item.idRow, 'newItemOut', '')
                          }
                        }}
                        sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
                      />) : 'Completed'
                  }
                </td>
              </>
            )
        }
      </tr>)
  }) : null
  const tableRows2 = itemsQtyArray.map((Item, i) => {
    const relatedItemQty = ItemInformation.find((row2) => row2._id === Item.itemName._id)
    return (
      <tr key={Item.idRow}>
        <td ><DragIndicatorRounded /></td>
        <td >
          {
            Item.itemName?.itemName ? (
              (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <ItemThumbnail
                        itemId={Item.itemName?._id}
                        initialData={Item.data}
                        initialType={Item.contentType}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{Item.itemName.itemName}</Typography>
                        <TextField
                          name='itemDescription' id='itemDescription'
                          value={Item.itemDescription}
                          multiline
                          rows={2}
                          size="small"
                          disabled={user.data.role === 'User'}
                          sx={{ width: '100%', maxWidth: '440px', backgroundColor: 'white', fontSize: 11 }}
                        />
                      </Box>
                    </Box>
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
                  renderOption={(props, option) => (<Box {...props} sx={{ backgroundColor: '#f2f2f2' }}>{option.itemName}</Box>)}
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
            disabled={relatedItemQty && parseFloat(relatedItemQty.itemQuantity) <= 0}
            required
            size="small"
            name='newItemOut' id='newItemOut'
            helperText={relatedItemQty && relatedItemQty.itemQuantity !== undefined ? 'Stock :' + relatedItemQty.itemQuantity : 0}
            value={Item.newItemOut}
            onChange={(e) => {
              const value = e.target.value
              if (!isNaN(value) && value !== '') {
                const numericValue = parseInt(value, 10);
                if (numericValue <= (relatedItemQty?.itemQuantity || 0)) {
                  handleChange(Item.idRow, 'newItemOut', value)
                } else {
                  handleChange(Item.idRow, 'newItemOut', 0)
                }
              } else {
                handleChange(Item.idRow, 'newItemOut', '')
              }
            }}
            sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
          />
        </td>
      </tr>)
  });
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
              Make new Item Out
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
                        <MenuItem value="Dotation">Item Assign</MenuItem>
                        <MenuItem value="Invoice">Direct-Invoice</MenuItem>
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
                    reason !== 'Dotation' ? '' : (
                      <Grid item xs={6}>
                        {
                          reference !== null ?
                            (
                              <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
                                <TextField
                                  multiline
                                  label='Employee Name'
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
                                options={employee}
                                getOptionLabel={(option) => option.employeeName}
                                renderOption={(props, option) => (<Box {...props}>{option.employeeName}</Box>)}
                                renderInput={(params) => <TextField {...params} label="Employee Name" />}
                                onChange={(e, newValue) => handleChangeEmployee(newValue ? newValue : '')}
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
                    {
                      reason === 'Dotation' ? (
                        <TableContainer>
                          <div style={{ position: 'relative', float: 'right', margin: '10px' }}>
                            <BlackTooltip title="Add" placement="left">
                              <IconButton onClick={addItem}>
                                <Add className='btn1' style={{ fontSize: '40px' }} />
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
                                <th align="left">Quantity</th>
                                <th align="left">QTY Out</th>
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

export default ItemOutViewForm
