import React, { useEffect, useState, useRef } from 'react'
import '../Chartview.css'
import SideMaintenance from '../../../component/SideMaintenance';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {   MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Button, Menu, Divider, Tab, Card, CardContent, Table, TableBody, TableHead, TableCell, TableRow, TableContainer, Collapse, Avatar  } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import { ENDPOINT_URL } from '../../../apiConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import { v4 } from 'uuid';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { KeyboardArrowUp, RemoveCircleOutline, Sync } from '@mui/icons-material';
import dayjs from 'dayjs';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import MessageAdminView from '../../MessageAdminView';
import { FileCopy } from '@mui/icons-material';
import NotificationVIewInfo from '../../NotificationVIewInfo';

import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SupplierName from './SupplierName';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ItemThumbnail from '../../../component/ItemThumbnail';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';

const palette = ['blue', 'red', 'orange'];
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
const DeleteTooltip = styled(({ className, ...props }) => (
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
const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function SupplierViewInformation() {
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

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])

  const [loadingData, setLoadingData] = useState(true);
  const [item, SetItems] = useState([]);
  const [StoreName, SetStore] = useState("");
  const apiUrl = `${ENDPOINT_URL}/Supplier`;
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(apiUrl)
        SetItems(res.data?.data?.filter(row => row._id === id))
        res.data?.data?.filter(row => row._id === id).map((row) => SetStore(row.storeName))
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    }
    fetchItem()
  }, [id])

  const isMatchingSupplier = (ip) => {
    if (!ip) return false;
    const currentSupplier = item && item.length > 0 ? item[0] : null;
    if (!currentSupplier) {
      if (ip.manufacturerID && String(ip.manufacturerID) === String(id)) return true;
      return false;
    }
    // 1. Direct ID match
    if (ip.manufacturerID && (String(ip.manufacturerID) === String(id) || String(ip.manufacturerID) === String(currentSupplier._id))) {
      return true;
    }

    const mName = (ip.manufacturer || '').trim().toLowerCase();
    if (!mName) return false;

    const sStore = (currentSupplier.storeName || '').trim().toLowerCase();
    const sName = (currentSupplier.supplierName || '').trim().toLowerCase();

    // 2. Direct string equality or inclusions
    if (sStore && (mName === sStore || mName.includes(sStore) || sStore.includes(mName))) return true;
    if (sName && (mName === sName || mName.startsWith(sName) || mName.includes(sName))) return true;

    // 3. Cleaned alphanumeric match (removes punctuation, dots, dashes, spaces)
    const cleanM = mName.replace(/[^a-z0-9]/g, '');
    const cleanStore = sStore.replace(/[^a-z0-9]/g, '');
    const cleanName = sName.replace(/[^a-z0-9]/g, '');

    if (cleanStore && (cleanM === cleanStore || cleanM.includes(cleanStore) || cleanStore.includes(cleanM))) return true;
    if (cleanName && (cleanM === cleanName || cleanM.startsWith(cleanName) || cleanM.includes(cleanName))) return true;

    return false;
  };

  const [itemPurchase, setItemPurchase] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/projects?summary=true`);
        if (res.data && Array.isArray(res.data.data)) {
          setProjectsList(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };
    fetchProjects();
  }, []);

  const formatPurchaseReason = (p) => {
    if (!p) return 'Item Purchase';
    const rawReason = p.reason || '';
    let nameStr = p.projectName?.name || p.description || rawReason || 'Item Purchase';

    // If reason is Project, ensure Project Number (P-000xxx) is included
    if (rawReason === 'Project' || (!nameStr.startsWith('P-') && !nameStr.startsWith('INV-') && !nameStr.startsWith('M-') && !nameStr.startsWith('PUR-') && p.projectName?._id)) {
      const foundProject = projectsList.find(proj => 
        proj._id === p.projectName?._id || 
        (proj.projectName && nameStr.toLowerCase().includes(proj.projectName.toLowerCase())) ||
        (proj.customerName?.customerName && nameStr.toLowerCase().includes(proj.customerName.customerName.toLowerCase()))
      );
      if (foundProject && foundProject.projectNumber !== undefined) {
        const pNum = `P-${String(foundProject.projectNumber).padStart(6, '0')}`;
        if (!nameStr.includes(pNum)) {
          const client = foundProject.customerName?.customerName;
          const pTitle = foundProject.projectName;
          nameStr = client && pTitle ? `${pNum} / ${client} - ${pTitle}` : `${pNum} / ${pTitle || client || nameStr}`;
        }
      }
    }
    return nameStr;
  };

  const formatStatementDetails = (p) => {
    if (!p) return '';
    const reasonStr = formatPurchaseReason(p);
    const ref = (p.manufacturerNumber || '').trim();
    if (ref) {
      return `${reasonStr} (Ref: ${ref})`;
    }
    return reasonStr;
  };

  useEffect(() => {
    const handleFetch = async () => {
      if (!item || item.length === 0) return;
      const currentSupplier = item[0];
      const supplierStore = currentSupplier?.storeName || StoreName || '';
      const supplierShort = currentSupplier?.supplierName || '';
      try {
        const resItemPurchase = await axios.get(
          `${ENDPOINT_URL}/itemPurchase?summary=true&supplierId=${id}&supplierName=${encodeURIComponent(supplierStore)}&shortName=${encodeURIComponent(supplierShort)}`
        );
        const formatDate = Array.isArray(resItemPurchase.data?.data) ? resItemPurchase.data.data : [];
        const filteredData = formatDate.filter(data => isMatchingSupplier(data));
        setItemPurchase(filteredData.reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    handleFetch();
  }, [item, id]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      setAnchorEl(null);
    }
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
    setAnchorEl(null);
  }

  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/comment`)
        const resp = res.data?.data?.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get(`${ENDPOINT_URL}/notification`)
        setNotification(resNotification.data?.data?.filter((row) => row.idInfo === id))
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
  const [loadingOpenModalPicture, setLoadingOpenModalPicture] = useState(false);
  const [loadingOpenModalDelete, setLoadingOpenModalDelete] = useState(false);
  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleOpenPicture = () => {
    setLoadingOpenModalPicture(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleOpenDelete = () => {
    setLoadingOpenModalDelete(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClosePicture = () => {
    window.location.reload();
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
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const dateComment = dayjs(Date.now());
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
  const [value3, setValue3] = React.useState('1');
  useEffect(() => {
    const result = localStorage.getItem('TabSupplierView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabSupplierView', changeValue)
  };


  const [search, setSearch] = useState('');
  const [search4, setSearch4] = useState('');

  useEffect(() => {
    const result = null; // localStorage.getItem('QuickFilterItemPurchaseItemSupplier-Summary')
    if (result) {
      setSearch(result)
    }
  })

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
//     localStorage.setItem('QuickFilterItemPurchaseItemSupplier-Summary', value)
  }
  const newArray = search !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(search) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    (row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase())) ||
    row.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) ||
    row.items.some((Item) => Item.itemName !== undefined && (typeof Item.itemName === 'string' ? Item.itemName : Item.itemName.itemName)?.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription !== undefined && Item.itemDescription.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.newDescription !== undefined && Item.newDescription.toLowerCase().includes(search.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)
  ) : itemPurchase


  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${idView}`)
          setItemPurchaseView(res.data.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData2()
  }, [idView])

  const newArray1 = search !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(search) ||
    (row.status && row.status.toLowerCase().includes(search.toLowerCase())) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    (row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase())) ||
    row.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) ||
    row.items.some((Item) => Item.itemName !== undefined && (typeof Item.itemName === 'string' ? Item.itemName : Item.itemName.itemName)?.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription !== undefined && Item.itemDescription.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.newDescription !== undefined && Item.newDescription.toLowerCase().includes(search.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)
  ) : itemPurchase

  //const payFc = newArray1.filter((row1)=>  row1.manufacturerID === id || row1.manufacturer === StoreName).reduce((acc, row) => acc + (row.total || 0), 0)

  const relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter((item) => parseFloat(item.itemQty) >= 0).forEach((item) => {
      const ItemName = typeof item.itemName === 'string' ? item.itemName : item.itemName?.itemName;
      const Id = item.itemName._id;
      const description = item.itemDescription;
      if (!acc[ItemName]) {
        acc[ItemName] = { ItemName, Id, description, total: 0 }
      }
    });
    return acc
  }, {}) : null
  const relatedItemPurchases2 = []
  itemPurchase.filter((Item) => isMatchingSupplier(Item)).map((Item) => Item.items.filter((item) => parseFloat(item.itemQty) >= 0 || item.newDescription !== undefined).map((row) => { relatedItemPurchases2.push({ ...row, date: Item.itemPurchaseDate }) }))

  const newArray2 = search4 !== '' ? relatedItemPurchases2.filter((row) =>
    (row.itemName?.itemName && row.itemName.itemName.toString().includes(search4)) ||
    (row.itemDescription?.toLowerCase().includes(search4.toLowerCase())) ||
    (row.newDescription?.toLowerCase().includes(search4.toLowerCase())) ||
    dayjs(row.date).format('DD/MM/YYYY').includes(search4)
  ) : relatedItemPurchases2

  function Row(props) {
    const { row, index, filterPaid } = props;
    const [open, setOpen] = React.useState(false);

    const totalVal = row.totalUSD !== undefined ? row.totalUSD : row.total || 0;
    const paidVal = (row.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)))), 0);
    const unpaidVal = Math.max(0, totalVal - paidVal);

    let displayTotal = totalVal;
    if (row.status?.toLowerCase() === 'partially-paid') {
      if (filterPaid === 'paid') {
        displayTotal = paidVal;
      } else if (filterPaid === 'unpaid') {
        displayTotal = unpaidVal;
      }
    }

    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <span>{index + 1}</span>}
          </td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{dayjs(row.itemPurchaseDate).format('DD/MM/YYYY')}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD', fontWeight: 'bold', color: '#30368a' }}>
            IP-{String(row.itemPurchaseNumber).padStart(6, '0')}
          </td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>
            {row.manufacturerNumber || '-'}
          </td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.status}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{formatPurchaseReason(row)}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>${displayTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>            <ViewTooltip title="View">
            <span>
              <IconButton onClick={() => handleOpenView(row._id)}>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </IconButton>
            </span>
          </ViewTooltip></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div">
                  ---
                </Typography>
                <table aria-label="collapsible table" >
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #DDD' }}>#</th>
                      <th style={{ border: '1px solid #DDD' }}>Item</th>
                      <th style={{ border: '1px solid #DDD' }}>Description</th>
                      <th style={{ border: '1px solid #DDD' }}>Qty</th>
                      <th style={{ border: '1px solid #DDD' }}>Price($)</th>
                      <th style={{ border: '1px solid #DDD' }}>Amount Paid(FC)</th>
                      <th style={{ border: '1px solid #DDD' }}>Rate </th>
                      <th style={{ border: '1px solid #DDD' }}>Amount Paid($)</th>
                      <th style={{ border: '1px solid #DDD' }}>Total($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.items.filter(row3 => parseFloat(row3.itemQty) > 0 || row3.newDescription !== undefined).map((row3, i) => {
                        const relatedUnit = item.find((Item1) => Item1._id === row3.itemName?._id)
                        return (
                          <tr key={row3.idRow}>
                            <td style={{ border: '1px solid #DDD' }}>{i + 1}</td>
                            {
                              row3.newDescription !== undefined ?
                                <td colSpan={8} align="center" style={{ border: '1px solid #DDD', fontWeight: 'bold' }}>{row3.newDescription}</td>
                                :
                                <>
                                  <td style={{ border: '1px solid #DDD' }}>{row3.itemName?.itemName}</td>
                                  <td style={{ border: '1px solid #DDD' }}>{row3.itemDescription}</td>
                                  <td style={{ border: '1px solid #DDD' }}>{row3.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                  <td style={{ border: '1px solid #DDD' }}>{parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ border: '1px solid #DDD' }}>FC{row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                  <td style={{ border: '1px solid #DDD' }}>{row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                  <td style={{ border: '1px solid #DDD' }}>${parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ border: '1px solid #DDD' }}>{row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                </>
                            }
                          </tr>
                        )
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

  const [filterPaid, setFilterPaid] = useState('all');

  const handleFilterChange = (status) => {
    setFilterPaid(status);
  };

  const filteredArray1 = newArray1.filter((row) => {
    if (filterPaid === 'all') return true;
    if (filterPaid === 'paid') return row.status === undefined || row.status?.toLowerCase() === 'paid' || row.status?.toLowerCase() === 'partially-paid';
    if (filterPaid === 'unpaid') return row.status?.toLowerCase() === 'unpaid' || row.status?.toLowerCase() === 'partially-paid';
    return true;
  });

  const payFc = filteredArray1.filter((row1) => isMatchingSupplier(row1)).reduce((acc, row) => {
    const totalVal = row.totalUSD !== undefined ? row.totalUSD : row.total || 0;
    if (row.status?.toLowerCase() === 'partially-paid') {
      const paidVal = (row.payments || []).reduce((sum, p) => sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)))), 0);
      if (filterPaid === 'paid') {
        return acc + paidVal;
      } else if (filterPaid === 'unpaid') {
        return acc + Math.max(0, totalVal - paidVal);
      }
    }
    return acc + totalVal;
  }, 0)

  // --- Supplier Statement States & Calculations ---
  const [selectOptions, setSelectOptions] = useState('Year');
  const [startDate, setStartDate] = useState(() => {
    const stored = localStorage.getItem('StartDateSupplierStatement');
    return stored ? new Date(JSON.parse(stored)) : new Date();
  });
  const [fromDate, setFromDate] = useState(() => {
    const stored = localStorage.getItem('FromDateSupplierStatement');
    return stored ? new Date(JSON.parse(stored)) : new Date(new Date().getFullYear(), 0, 1);
  });
  const [endDate, setEndDate] = useState(() => {
    const stored = localStorage.getItem('EndDateSupplierStatement');
    return stored ? new Date(JSON.parse(stored)) : new Date();
  });

  const handleChangeDate = (date) => {
    setStartDate(date);
    localStorage.setItem('StartDateSupplierStatement', JSON.stringify(date));
  };
  const handleChangeDateFrom = (date) => {
    setFromDate(date);
    localStorage.setItem('FromDateSupplierStatement', JSON.stringify(date));
  };
  const handleChangeDateEnd = (date) => {
    setEndDate(date);
    localStorage.setItem('EndDateSupplierStatement', JSON.stringify(date));
  };

  const statementPrintRef = useRef(null);
  const handlePrintStatement = useReactToPrint({
    content: () => statementPrintRef.current,
    documentTitle: `Statement - ${StoreName || 'Supplier'}`,
  });

  const transactionYears = new Date(startDate).getFullYear();
  const sortedPurchases = [...itemPurchase]
    .filter((p) => isMatchingSupplier(p))
    .sort((a, b) => new Date(a.itemPurchaseDate) - new Date(b.itemPurchaseDate));

  let openingBalanceTotal = 0;
  let periodPurchases = [];

  if (selectOptions === 'Year') {
    openingBalanceTotal = sortedPurchases
      .filter((p) => new Date(p.itemPurchaseDate).getFullYear() < transactionYears)
      .reduce((acc, p) => {
        const pTotal = parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0);
        const pPaid = (p.payments || []).reduce((sum, pay) => sum + (pay.totalUSD || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || 0) / parseFloat(pay.rate || 1)))), 0) || ((p.status || '').toLowerCase() === 'paid' ? pTotal : 0);
        return acc + Math.max(0, pTotal - pPaid);
      }, 0);

    periodPurchases = sortedPurchases.filter((p) => new Date(p.itemPurchaseDate).getFullYear() === transactionYears);
  } else if (selectOptions === 'Custom') {
    const startCustom = dayjs(fromDate).startOf('day');
    const endCustom = dayjs(endDate).endOf('day');

    openingBalanceTotal = sortedPurchases
      .filter((p) => dayjs(p.itemPurchaseDate).isBefore(startCustom))
      .reduce((acc, p) => {
        const pTotal = parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0);
        const pPaid = (p.payments || []).reduce((sum, pay) => sum + (pay.totalUSD || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || 0) / parseFloat(pay.rate || 1)))), 0) || ((p.status || '').toLowerCase() === 'paid' ? pTotal : 0);
        return acc + Math.max(0, pTotal - pPaid);
      }, 0);

    periodPurchases = sortedPurchases.filter((p) => {
      const d = dayjs(p.itemPurchaseDate);
      return (d.isAfter(startCustom) || d.isSame(startCustom, 'day')) && (d.isBefore(endCustom) || d.isSame(endCustom, 'day'));
    });
  } else if (selectOptions === 'All Outstanding') {
    openingBalanceTotal = 0;
    periodPurchases = sortedPurchases.filter((p) => {
      const pTotal = parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0);
      const pPaid = (p.payments || []).reduce((sum, pay) => sum + (pay.totalUSD || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || 0) / parseFloat(pay.rate || 1)))), 0) || ((p.status || '').toLowerCase() === 'paid' ? pTotal : 0);
      return (pTotal - pPaid) > 0.01;
    });
  } else {
    // All
    openingBalanceTotal = 0;
    periodPurchases = sortedPurchases;
  }

  const invoicePurchasedTotal = periodPurchases.reduce((sum, p) => sum + parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0), 0);
  const paymentPaidTotal = periodPurchases.reduce((sum, p) => {
    const pTotal = parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0);
    const pPaid = (p.payments || []).reduce((s, pay) => s + (pay.totalUSD || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || 0) / parseFloat(pay.rate || 1)))), 0) || ((p.status || '').toLowerCase() === 'paid' ? pTotal : 0);
    return sum + pPaid;
  }, 0);
  const totalBalanceDue = (openingBalanceTotal + invoicePurchasedTotal) - paymentPaidTotal;

  let currentRunningBalance = openingBalanceTotal;
  const statementRows = [];

  if (openingBalanceTotal > 0 && (selectOptions === 'Year' || selectOptions === 'Custom')) {
    statementRows.push({
      isOpening: true,
      date: selectOptions === 'Year' ? new Date(transactionYears, 0, 1) : fromDate,
      transaction: '*** Opening Balance ***',
      details: 'Balance brought forward',
      purchaseAmount: openingBalanceTotal,
      paidAmount: 0,
      balance: openingBalanceTotal,
    });
  }

  periodPurchases.forEach((p) => {
    const pTotal = parseFloat(p.totalUSD !== undefined ? p.totalUSD : p.total || 0);
    const pPaid = (p.payments || []).reduce((s, pay) => s + (pay.totalUSD || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || 0) / parseFloat(pay.rate || 1)))), 0) || ((p.status || '').toLowerCase() === 'paid' ? pTotal : 0);
    currentRunningBalance = currentRunningBalance + pTotal - pPaid;

    statementRows.push({
      _id: p._id,
      isOpening: false,
      date: p.itemPurchaseDate,
      itemPurchaseNumber: p.itemPurchaseNumber,
      transaction: `IP-${String(p.itemPurchaseNumber).padStart(6, '0')}`,
      details: formatStatementDetails(p),
      purchaseAmount: pTotal,
      paidAmount: pPaid,
      balance: currentRunningBalance,
      status: p.status,
      payments: p.payments,
    });
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
              Supplier Information
            </Typography>
            <IconButton onClick={() => navigate('/SupplierAdminView')}>
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
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
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
            <SideMaintenance />
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
                <div>
                  <div>
                    <Grid container spacing={2}>
                      {show === 1 ?
                        <Grid item xs={3}>
                          <SupplierName onId={id} />
                        </Grid> :
                        ""}
                      <Grid item xs={9}>
                        <div className='itemInfoContainer2'>
                          <div style={{ width: '100%', background: 'white' }}>

                            {item?.filter(row => row._id === id)?.map((row) => (
                              <div key={row._id}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <div style={{ width: '100%', padding: '10px' }}>
                                    <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{row.storeName.toUpperCase()}</Typography>
                                  </div>
                                  <div style={{ position: 'relative', float: 'right' }}>
                                  <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDown />}
                                    sx={{
                                      bgcolor: 'gray',
                                      color: 'white',
                                      '&:hover': {
                                        bgcolor: 'white',
                                        color: 'gray',
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
                                    <MenuItem >
                                      <NavLink to={`/SupplierFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <EditIcon />
                                        <Typography>Edit</Typography>
                                      </NavLink>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={() => { handlePrint(); handleCloseMenu(); }}>
                                      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <LocalPrintshop />
                                        <Typography>Print</Typography>
                                      </div>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={() => handleShow(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                    <MenuItem onClick={() => handleShow(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                  </Menu>
                                  </div>
                                </div>
                                <Box sx={{ width: '100%' }} ref={componentRef}>
                                  <TabContext
                                    value={value3}
                                  >
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                      <TabList
                                        onChange={handleChange3}
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
                                          label="In-Summary"
                                          value="2"
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
                                          label="Item-Summary"
                                          value="3"
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
                                          label="Statement"
                                          value="4"
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
                                      </TabList>
                                    </Box>
                                    <TabPanel value="1" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'auto' }}>
                                      <div>

                                        <Card sx={{ marginBottom: '20px' }}>
                                          <CardContent sx={{ width: "100%" }}>
                                            <div style={{ display: 'flex', gap: '15px', padding: '20px', fontSize: '20px', marginBottom: '5px' }}>
                                              <table style={{ marginBottom: '5px' }}>
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Name</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.supplierName.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Store</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.storeName.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Phone 1</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.customerPhone1.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Phone 2</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.customerPhone2.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Address</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.address.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Description</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.description.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>

                                                  </tr>

                                                </tbody>
                                              </table>
                                            </div>
                                          </CardContent>
                                        </Card>

                                      </div>
                                    </TabPanel>
                                    <TabPanel value="2" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'auto' }}>
                                      <Card>
                                        <CardContent>
                                          <section style={{ position: 'relative', float: 'left', padding: '10px', display: 'flex', gap: '10px' }}>
                                            <span colSpan={2}>Total</span>
                                            <span colSpan={2} sx={{ textAlign: 'right' }}>
                                              ${payFc?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            </span>
                                          </section>
                                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                            <TextField
                                              label='search'
                                              id='search'
                                              value={search}
                                              variant="standard"
                                              onChange={handleSearch}
                                            />
                                            <Button onClick={() => handleFilterChange('all')}>All</Button>
                                            <Button onClick={() => handleFilterChange('paid')}>Paid</Button>
                                            <Button onClick={() => handleFilterChange('unpaid')}>Unpaid</Button>
                                            <Button
                                              onClick={() => { setValue3('4'); localStorage.setItem('TabSupplierView', '4'); }}
                                              sx={{ ml: 1, backgroundColor: '#30368a', color: 'white', '&:hover': { backgroundColor: '#202a5a' } }}
                                            >
                                              Supplier Statement
                                            </Button>
                                          </section>
                                          <table className="secondTable" style={{ width: '100%', fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>IP #</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reference</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Status</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reason / Project</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Total</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                filteredArray1.filter((row1) => isMatchingSupplier(row1)).map((row1, i) => (

                                                  <Row key={row1._id} row={row1} index={i} filterPaid={filterPaid} />
                                                ))
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                    <TabPanel value='3' sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'auto' }}>
                                      <Card>
                                        <CardContent>
                                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                            <TextField
                                              label='search'
                                              id='search4'
                                              value={search4}
                                              variant="standard"
                                              onChange={(e) => setSearch4(e.target.value)}
                                            />
                                          </section>
                                          <table className="secondTable" style={{ width: '100%', fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ border: '1px solid #DDD' }}>#</th>
                                                <th style={{ border: '1px solid #DDD' }}>Item</th>
                                                <th style={{ border: '1px solid #DDD' }}>Date</th>
                                                <th style={{ border: '1px solid #DDD' }}>Qty</th>
                                                <th style={{ border: '1px solid #DDD' }}>Price($)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Amount Paid(FC)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Rate </th>
                                                <th style={{ border: '1px solid #DDD' }}>Amount Paid($)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Total($)</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                newArray2?.map((row3, i) => {
                                                  const relatedUnit = item.find((Item1) => Item1._id === row3.itemName._id)
                                                  return (
                                                    <tr key={i}>
                                                      <td style={{ border: '1px solid #DDD' }}>{i + 1}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                          <ItemThumbnail
                                                            itemId={row3.itemName?._id}
                                                            initialData={row3.data}
                                                            initialType={row3.contentType}
                                                          />
                                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
                                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                                              {row3.itemName.itemName}
                                                            </Typography>
                                                            <Typography sx={{ fontSize: '11px', color: 'gray' }}>
                                                              {row3.itemDescription}
                                                            </Typography>
                                                          </Box>
                                                        </Box>
                                                      </td>
                                                      <td style={{ border: '1px solid #DDD' }}>{dayjs(row3.date).format('DD/MM/YYYY')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>FC{row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>${parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                    </tr>
                                                  )
                                                })
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                    <TabPanel value="4" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'auto' }}>
                                      <Card sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                            <FormControl size="small" sx={{ minWidth: 160 }}>
                                              <InputLabel id="selectOptions-label">Filter</InputLabel>
                                              <Select
                                                labelId="selectOptions-label"
                                                id="selectOptions"
                                                value={selectOptions}
                                                label="Filter"
                                                onChange={(e) => setSelectOptions(e.target.value)}
                                              >
                                                <MenuItem value="Year">Year</MenuItem>
                                                <MenuItem value="Custom">Custom</MenuItem>
                                                <MenuItem value="All Outstanding">All Outstanding</MenuItem>
                                                <MenuItem value="All">All</MenuItem>
                                              </Select>
                                            </FormControl>

                                            {selectOptions === 'Year' && (
                                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                  views={['year']}
                                                  label="Year"
                                                  value={dayjs(startDate)}
                                                  onChange={(date) => handleChangeDate(date)}
                                                  slotProps={{ textField: { size: 'small' } }}
                                                />
                                              </LocalizationProvider>
                                            )}

                                            {selectOptions === 'Custom' && (
                                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                  <DatePicker
                                                    label="From Date"
                                                    value={dayjs(fromDate)}
                                                    onChange={(date) => handleChangeDateFrom(date)}
                                                    format="DD/MM/YYYY"
                                                    slotProps={{ textField: { size: 'small' } }}
                                                  />
                                                  <DatePicker
                                                    label="To Date"
                                                    value={dayjs(endDate)}
                                                    onChange={(date) => handleChangeDateEnd(date)}
                                                    format="DD/MM/YYYY"
                                                    slotProps={{ textField: { size: 'small' } }}
                                                  />
                                                </Box>
                                              </LocalizationProvider>
                                            )}
                                          </Box>

                                          <Button
                                            variant="contained"
                                            startIcon={<LocalPrintshop />}
                                            onClick={handlePrintStatement}
                                            sx={{ bgcolor: '#30368a', '&:hover': { bgcolor: '#202a5a' } }}
                                          >
                                            Print Statement
                                          </Button>
                                        </Box>

                                        {/* Statement Screen View */}
                                        <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1 }}>
                                          <table className="secondTable" style={{ width: '100%', fontSize: '80%', marginBottom: '15px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                                            <thead>
                                              <tr>
                                                <th colSpan={3} style={{ border: 'none', backgroundColor: 'white', verticalAlign: 'top', textAlign: 'left', padding: '10px' }}>
                                                  <address style={{ fontStyle: 'normal', lineHeight: 1.4 }}>
                                                    <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#666' }}>TO SUPPLIER:</span><br />
                                                    <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#202a5a' }}>{row.storeName.toUpperCase()}</span><br />
                                                    <span style={{ fontSize: '13px', color: '#444' }}>{row.supplierName.toUpperCase()}</span><br />
                                                    <span style={{ fontSize: '12px', color: 'gray' }}>{row.address ? row.address.toUpperCase() : ''}</span><br />
                                                    <span style={{ fontSize: '12px', color: 'gray' }}>{row.customerPhone1 || ''}</span>
                                                  </address>
                                                </th>
                                                <th colSpan={3} style={{ border: 'none', backgroundColor: 'white', verticalAlign: 'top', padding: '10px' }}>
                                                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', border: '1px solid #ddd' }}>
                                                    <thead>
                                                      <tr>
                                                        <th colSpan={2} style={{ backgroundColor: '#202a5a', color: 'white', padding: '6px 10px', textAlign: 'left' }}>Supplier Statement of Accounts</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td colSpan={2} style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', textAlign: 'right', fontWeight: 'bold', color: '#555' }}>
                                                          {selectOptions === 'Year' && `${dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To ${dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}`}
                                                          {selectOptions === 'Custom' && `${dayjs(fromDate).format('DD/MM/YYYY')} To ${dayjs(endDate).format('DD/MM/YYYY')}`}
                                                          {selectOptions === 'All' && 'All Transactions'}
                                                          {selectOptions === 'All Outstanding' && 'All Outstanding Purchases'}
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>Opening Balance</td>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>Purchased Amount</td>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${invoicePurchasedTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>Amount Paid</td>
                                                        <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${paymentPaidTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      </tr>
                                                      <tr style={{ fontWeight: 'bold' }}>
                                                        <td style={{ padding: '6px 10px', backgroundColor: '#e8f7fe' }}>Balance Due</td>
                                                        <td style={{ padding: '6px 10px', textAlign: 'right', backgroundColor: '#e8f7fe', color: totalBalanceDue > 0 ? '#c62828' : '#2e7d32' }}>${totalBalanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </th>
                                              </tr>
                                              <tr>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe', width: '110px' }}>Date</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe', width: '130px' }} align="left">Transaction</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Details</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe', width: '120px' }} align="right">Amount ($)</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe', width: '120px' }} align="right">Payments ($)</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe', width: '130px' }} align="right">Balance ($)</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {statementRows.map((sRow, idx) => (
                                                <tr key={idx} style={sRow.isOpening ? { backgroundColor: '#fffde7', fontStyle: 'italic', fontWeight: 'bold' } : {}}>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD', textAlign: 'center' }}>
                                                    {dayjs(sRow.date).format('DD/MM/YYYY')}
                                                  </td>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD' }}>
                                                    {!sRow.isOpening ? (
                                                      <span
                                                        onClick={() => handleOpenView(sRow._id)}
                                                        style={{ color: '#30368a', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
                                                      >
                                                        {sRow.transaction}
                                                      </span>
                                                    ) : (
                                                      <span>{sRow.transaction}</span>
                                                    )}
                                                  </td>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD' }}>
                                                    {sRow.details}
                                                  </td>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD', textAlign: 'right' }}>
                                                    {sRow.purchaseAmount > 0 ? `$${sRow.purchaseAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'}
                                                  </td>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD', textAlign: 'right' }}>
                                                    {sRow.paidAmount > 0 ? `$${sRow.paidAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'}
                                                  </td>
                                                  <td style={{ padding: '8px 10px', border: '1px solid #DDD', textAlign: 'right', fontWeight: 'bold' }}>
                                                    ${sRow.balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                  </td>
                                                </tr>
                                              ))}
                                              {statementRows.length === 0 && (
                                                <tr>
                                                  <td colSpan={6} style={{ textAlign: 'center', padding: '20px', color: 'gray' }}>
                                                    No statement transactions found for this period.
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                            <tfoot>
                                              <tr style={{ fontWeight: 'bold', backgroundColor: '#f0f4f8' }}>
                                                <td colSpan={3} style={{ padding: '10px', border: '1px solid #DDD', textAlign: 'right' }}>Totals:</td>
                                                <td style={{ padding: '10px', border: '1px solid #DDD', textAlign: 'right' }}>${invoicePurchasedTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                <td style={{ padding: '10px', border: '1px solid #DDD', textAlign: 'right' }}>${paymentPaidTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                <td style={{ padding: '10px', border: '1px solid #DDD', textAlign: 'right', color: totalBalanceDue > 0 ? '#c62828' : '#2e7d32' }}>${totalBalanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              </tr>
                                            </tfoot>
                                          </table>
                                        </Box>

                                        {/* Printable Hidden Section */}
                                        <Box hidden>
                                          <table ref={statementPrintRef} className="invoicedetails" style={{ width: '100%', padding: '20px' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ borderBottom: '1px solid black' }}>
                                                  <div className="invoiceTest">
                                                    <PrintHeader branchId={row?.branchId || ""} />
                                                  </div>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div className="content" style={{ marginTop: '15px', marginBottom: '20px' }}>
                                                    <table className="secondTable" style={{ width: '100%', fontSize: '11px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                                                      <thead>
                                                        <tr>
                                                          <th colSpan={3} style={{ border: 'none', backgroundColor: 'white', verticalAlign: 'top', textAlign: 'left', padding: '10px' }}>
                                                            <address style={{ fontStyle: 'normal', lineHeight: 1.4 }}>
                                                              <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#666' }}>TO SUPPLIER:</span><br />
                                                              <span style={{ fontWeight: 'bold', fontSize: '15px', color: '#000' }}>{row.storeName.toUpperCase()}</span><br />
                                                              <span style={{ fontSize: '12px', color: '#333' }}>{row.supplierName.toUpperCase()}</span><br />
                                                              <span style={{ fontSize: '11px', color: 'gray' }}>{row.address ? row.address.toUpperCase() : ''}</span><br />
                                                              <span style={{ fontSize: '11px', color: 'gray' }}>{row.customerPhone1 || ''}</span>
                                                            </address>
                                                          </th>
                                                          <th colSpan={3} style={{ border: 'none', backgroundColor: 'white', verticalAlign: 'top', padding: '10px' }}>
                                                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', border: '1px solid #000' }}>
                                                              <thead>
                                                                <tr>
                                                                  <th colSpan={2} style={{ backgroundColor: '#202a5a', color: 'white', padding: '5px 8px', textAlign: 'left' }}>Supplier Statement of Accounts</th>
                                                                </tr>
                                                              </thead>
                                                              <tbody>
                                                                <tr>
                                                                  <td colSpan={2} style={{ padding: '5px 8px', borderBottom: '1px solid #000', textAlign: 'right', fontWeight: 'bold' }}>
                                                                    {selectOptions === 'Year' && `${dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To ${dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}`}
                                                                    {selectOptions === 'Custom' && `${dayjs(fromDate).format('DD/MM/YYYY')} To ${dayjs(endDate).format('DD/MM/YYYY')}`}
                                                                    {selectOptions === 'All' && 'All Transactions'}
                                                                    {selectOptions === 'All Outstanding' && 'All Outstanding Purchases'}
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd' }}>Opening Balance</td>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                                </tr>
                                                                <tr>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd' }}>Purchased Amount</td>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${invoicePurchasedTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                                </tr>
                                                                <tr>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd' }}>Amount Paid</td>
                                                                  <td style={{ padding: '4px 8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${paymentPaidTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                                </tr>
                                                                <tr style={{ fontWeight: 'bold' }}>
                                                                  <td style={{ padding: '5px 8px', backgroundColor: '#e8f7fe' }}>Balance Due</td>
                                                                  <td style={{ padding: '5px 8px', textAlign: 'right', backgroundColor: '#e8f7fe' }}>${totalBalanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe', width: '90px' }}>Date</th>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe', width: '120px' }} align="left">Transaction</th>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe' }} align="left">Details</th>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe', width: '100px' }} align="right">Amount ($)</th>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe', width: '100px' }} align="right">Payments ($)</th>
                                                          <th style={{ padding: '8px', border: '1px solid #000', backgroundColor: '#e8f7fe', width: '110px' }} align="right">Balance ($)</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        {statementRows.map((sRow, idx) => (
                                                          <tr key={idx} style={sRow.isOpening ? { backgroundColor: '#fffde7', fontStyle: 'italic', fontWeight: 'bold' } : {}}>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'center' }}>
                                                              {dayjs(sRow.date).format('DD/MM/YYYY')}
                                                            </td>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000' }}>
                                                              {sRow.transaction}
                                                            </td>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000' }}>
                                                              {sRow.details}
                                                            </td>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'right' }}>
                                                              {sRow.purchaseAmount > 0 ? `$${sRow.purchaseAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'}
                                                            </td>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'right' }}>
                                                              {sRow.paidAmount > 0 ? `$${sRow.paidAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'}
                                                            </td>
                                                            <td style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'right', fontWeight: 'bold' }}>
                                                              ${sRow.balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                            </td>
                                                          </tr>
                                                        ))}
                                                      </tbody>
                                                      <tfoot>
                                                        <tr style={{ fontWeight: 'bold', backgroundColor: '#f0f4f8' }}>
                                                          <td colSpan={3} style={{ padding: '8px', border: '1px solid #000', textAlign: 'right' }}>Balance Due:</td>
                                                          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'right' }}>${invoicePurchasedTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'right' }}>${paymentPaidTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'right' }}>${totalBalanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                        </tr>
                                                      </tfoot>
                                                    </table>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                            <tfoot>
                                              <tr>
                                                <td>
                                                  <div style={{ marginTop: '20px' }}>
                                                    <PrintFooter branchId={row?.branchId || ""} />
                                                  </div>
                                                </td>
                                              </tr>
                                            </tfoot>
                                          </table>
                                        </Box>
                                      </Card>
                                    </TabPanel>
                                  </TabContext>
                                </Box>


                              </div>
                            ))
                            }
                            <div />
                          </div>
                        </div>

                      </Grid>
                      {show === 2 ?
                        <Grid item xs={3}>
                          <div className='itemInfoContainer'>
                            <div style={{ padding: '10px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <p>COMMENTS</p>
                                <ViewTooltip title="Close" placement='left'>
                                  <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
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
                      {show === 3 ?
                        <Grid item xs={3}>
                          <div className='itemInfoContainer'>
                            <div style={{ padding: '20px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <p>HISTORY</p>
                                <ViewTooltip title="Close" placement='bottom'>
                                  <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                                    <Close style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </ViewTooltip>
                              </div>
                              <br />

                            </div>
                            <div style={{ height: '518px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                              <div style={{ padding: '10px' }}>
                                {
                                  item.filter((row) => row._id === id).map((row) => (
                                    <p key={row._id}>
                                      {
                                        row.Creates !== undefined ? <span>{row.Creates.person + ' on ' + row.Creates.dateComment}: {row.Creates.item}</span> : ''
                                      }
                                    </p>
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
                    </Grid> </div>
                </div>)}
          </Container>
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
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button type='button' onClick={handleClose} className='btnCustomer'>
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

      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 900 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView.Create.person} </span><span>IP-{itemPurchaseView.itemPurchaseNumber}</span> on <span>{itemPurchaseView.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Expense Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Note</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.note}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 400, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Amount Paid(FC)</TableCell>
                                <TableCell>Rate </TableCell>
                                <TableCell>Amount Paid($)</TableCell>
                                <TableCell>Total($)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.items.filter(row => parseFloat(row.itemQty) > 0).map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName.itemName}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemQty}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>FC{itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              : null
          }

        </Box>
      </Modal>
    </div>
  )
}

export default SupplierViewInformation
