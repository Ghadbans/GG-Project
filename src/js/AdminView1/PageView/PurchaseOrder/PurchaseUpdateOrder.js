import React, { useEffect, useMemo, useState } from 'react';
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, RemoveCircleOutline } from '@mui/icons-material';
import { Drawer as SideDrawer, Button } from '@mui/material';
import { v4 } from 'uuid';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
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
function PurchaseUpdateOrder() {
  const { id } = useParams();
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


  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [items, SetItems] = useState([]);
  const [itemsQtyArray, SetItemsQtyArray] = useState([]);
  const [projects, setProject] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [serviceNumber, setServiceNumber] = useState({});
  const [projectName, setProjectName] = useState({});
  const [invoiceName, setInvoiceName] = useState({});
  const [inputValue2, setInputValue2] = React.useState('');
  const [inputValueProject, setInputValueProject] = React.useState('');
  const [outNumber, setOutNumber] = useState(0);
  const [reason2, setReason2] = useState("");
  const [ItemInformation, setItemInformation] = useState([]);
  const [reference, setReference] = useState(null);
  const [rate, setRate] = useState(0);
  const [inputValue, setInputValue] = React.useState('');
  const [itemOutDate, setItemOutDate] = useState(() => {
    const date = new Date()
    return dayjs(date)
  });
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturerNumber, setManufacturerNumber] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-purchaseOrder/${id}`)
        setOutNumber(res.data.data.outNumber);
        setItemOutDate(res.data.data.itemOutDate);
        setReason(res.data.data.reason);
        setDescription(res.data.data.description);
        SetItemsQtyArray(res.data.data.itemsQtyArray);
        setDescription(res.data.data.description);
        setReference(res.data.data.reference);
        setManufacturer(res.data.data.manufacturer);
        setManufacturerNumber(res.data.data.manufacturerNumber);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resItem = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
        setItemInformation(resItem.data.data.reverse())
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/rate')
        res.data.data.map((row) => setRate(row.rate))
        const resPurchase = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
        const resProject = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
        setProject(resProject.data.data.filter((row) => resPurchase.data.data.find((Item) => Item.projectName._id === row._id && Item.items.some((Item1) => Item1.itemQty > Item1.itemOut))).reverse());
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

  const handleClear = () => {
    setReference(null);
    SetItemsQtyArray([])
  }
  {/** Item Change Start */ }
  const handleChange = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...itemsQtyArray]
    const i = itemsQtyArray.findIndex(Item => Item.idRow === idRow)
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
  const deleteItem = idRow => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.filter((Item) => Item.idRow !== idRow));
  };
  const filteredArray = itemsQtyArray.filter((row) => row.qtyBuy === 0)

  const filterItemInformation = ItemInformation.filter(option => !itemsQtyArray.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))

  const amount = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + row.total, 0) : 0

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

  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify ' + ' PO-' + outNumber,
      reason: reason2,
      dateNotification: new Date()
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification/', data)
      if (res) {
        handleOpen();
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      itemOutDate,
      reason,
      manufacturer,
      manufacturerNumber,
      description,
      itemsQtyArray,
      reference, totalUSD, total, totalFC
    };
    try {
      const res = await axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchaseOrder/${id}`, data);
      if (res) {
        // Open Loading View
        handleCreateComment()
        handleOpen();
      } else {
        alert('An Error as Occur');
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const [outNumber1, setOutNumber1] = useState(0);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const resItemOut = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-purchaseOrder')
          setOutNumber1(parseInt(resItemOut.data.outNumber) + 1)
        } catch (error) {
          setOutNumber(1)
        }
      } else {
      }
    }
    fetchNumber()
  }, [])
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'PO-' + ReferenceInfoNumber + ' For ' + reference.referenceName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitClone = async (e) => {
    e.preventDefault();
    const data = {
      outNumber: outNumber1,
      status: 'Open',
      itemOutDate: new Date(),
      manufacturer,
      manufacturerNumber,
      Converted: false,
      reason,
      description,
      itemsQtyArray: filteredArray,
      reference, Create: {
        person: user.data.userName,
        dateComment: dayjs(itemOutDate).format('DD/MM/YYYY')
      }, totalUSD, total, totalFC
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-purchaseOrder', data);
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.outNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        navigate(`/ConvertPoToIP/${id}`)
      } else {
        alert('An Error as Occur');
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
              Make Update Purchase Order
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
                  <Grid item xs={6}>
                    <TextField
                      id='manufacturer'
                      name='manufacturer'
                      label='Manufacturer'
                      value={manufacturer !== undefined ? manufacturer : ''}
                      onChange={(e) => setManufacturer(e.target.value.toUpperCase())}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='manufacturerNumber'
                      name='manufacturerNumber'
                      label='Reference '
                      value={manufacturerNumber !== undefined ? manufacturerNumber : ''}
                      onChange={(e) => setManufacturerNumber(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="reason">Reason</InputLabel>
                      <Select
                        required
                        id="reason"
                        value={reason}
                        name="reason"
                        disabled
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
                    </div>
                    <div>
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <table className='tableInfo10' style={{ marginLeft: '-20px' }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th align="center">itemName</th>
                              <th align="center">Qty</th>
                              <th align="center">Buy</th>
                              <th>Rate$</th>
                              <th>Amount Paid</th>
                              <th>Total Paid</th>
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
                                                            onChange={(e) => handleChange(e, Item.idRow)}
                                                            size="small"
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
                                                        sx={{ width: '300px', backgroundColor: 'white' }}
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
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  helperText={'Stock: ' + Item.stock}
                                                  size="small"
                                                  value={Item.itemQty}
                                                  sx={{ width: '100px', backgroundColor: 'white', marginTop: '22px' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  name='qtyBuy' id='qtyBuy'
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  value={Item.qtyBuy}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  required
                                                  name='itemRate' id='itemRate'
                                                  value={Item.itemRate !== undefined ? Item.itemRate : 0}
                                                  onChange={(e) => handleChange(e, Item.idRow)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
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
                                                <span>Total Cost USD: {Item.totalAmountUSD !== undefined ? Item.totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span>
                                              </td>
                                              <td id='amountTotalInvoice'>{Item.fcConvertToUsdTotal !== undefined ? Item.fcConvertToUsdTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                              <td align="center" >  <LightTooltip title="Delete" >
                                                <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                  <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                </IconButton>
                                              </LightTooltip></td>
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
                                    value={totalFC !== undefined ? totalFC : 0}
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
                                    value={total !== undefined ? total : 0}
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
                                    value={totalUSD !== undefined ? totalUSD : 0}
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
        <Box sx={{ ...style, width: 600 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              {
                filteredArray.length > 0 ?
                  <div item xs={12} sx={{ textAlign: 'center' }}>
                    <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                    <Typography>Data Saved successfully,Do you want to convert to an Item Purchase ? </Typography>
                    <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> You should convert the PO order to an IP when it is Purchase</span></p>
                    <Grid container>
                      <Grid item xs={4}>
                        <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                          Later
                        </button>
                      </Grid>
                      <Grid item xs={4}>

                        <NavLink to={`/ConvertPoToIP/${id}`} className='LinkName'>
                          <button className='btnCustomer'>Convert</button>
                        </NavLink>
                      </Grid>
                      <Grid item xs={4}>
                        <button onClick={handleSubmitClone} className='btnCustomer'>Convert & Clone </button>
                      </Grid>
                    </Grid>
                  </div>
                  : <div>
                    <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                    <h2> Data Saved successfully</h2>
                    <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                      <button onClick={() => navigate(-1)} className='btnCustomer'>
                        Close
                      </button>
                    </div>
                  </div>
              }

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
    </div>
  )
}

export default PurchaseUpdateOrder
