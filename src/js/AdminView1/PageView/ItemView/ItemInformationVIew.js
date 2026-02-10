import React, { useEffect, useState, useMemo, useCallback } from 'react'
import '../Chartview.css'
import SideMaintenance from '../../../component/SideMaintenance';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Button, Menu, Divider, Tab, Card, CardContent, Table, TableBody, TableHead, TableCell, TableRow, TableContainer, CircularProgress } from '@mui/material'
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
import ItemNameInfo from './ItemNameInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import { v4 } from 'uuid';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { RemoveCircleOutline, Sync } from '@mui/icons-material';
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
import db from '../../../dexieDb';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

function ItemInformationVIew() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const { isHibernating } = useSelector(state => state.user);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      }
    }
    fetchNumber()
  }, [user])
  const ItemInfoU = grantAccess.filter((row) => row.moduleName === "Item" && row.access.editM === true);


  const [itemPurchase, setItemPurchase] = useState([]);
  const [itemOut, setItemOut] = useState([]);
  const [posOut, setPosOut] = useState([]);
  const [itemReturn, setItemReturn] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  // Lazy loading - caching flags to prevent re-fetching
  const [dataFetched, setDataFetched] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [month, setMonth] = useState('');
  const [selectOptions, setSelectOptions] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [fromDate, setFromDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [endDate, setEndDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const headers = [];
    const currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [fromDate, endDate])
  const handleChangeSelected = (e) => {
    setSelectOptions(e.target.value)
  }
  const [loadingData2, setLoadingData2] = useState(false);

  // Lazy loading - fetch summary data using FILTERED endpoints (professional CRM approach!)
  const handleFetchSummaryData = async () => {
    // Check cache first - don't re-fetch if already loaded
    if (dataFetched) {
      console.log('⚡ [CACHE] Using cached summary data');
      return;
    }

    setLoadingSummary(true);
    try {
      console.log('🔍 [FILTERED API] Fetching summary data for item ID:', id);
      const startTime = Date.now();

      // Use individual try-catches to handle cases where some endpoints might not be deployed yet (404s)
      const fetchFiltered = async (url, setter, filterFn) => {
        try {
          const res = await axios.get(url);
          const data = res.data.data.map(filterFn).filter(row => {
            if (row.itemsQtyArray) return row.itemsQtyArray.length > 0;
            if (row.items) return row.items.length > 0;
            return true;
          });
          setter(data.reverse());
        } catch (err) {
          if (err.response && err.response.status === 404) {
            console.warn(`⚠️ [BACKEND MISSING] Endpoint ${url} not found. Please deploy latest Routes.js to Railway.`);
          } else {
            console.error(`❌ [API ERROR] Failed to fetch from ${url}:`, err);
          }
        }
      };

      await Promise.all([
        fetchFiltered(
          `https://gg-project-production.up.railway.app/endpoint/itemOut/item/${id}`,
          setItemOut,
          (row) => ({ ...row, itemsQtyArray: row.itemsQtyArray.filter((Item) => Item.itemName && Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) })
        ),
        fetchFiltered(
          `https://gg-project-production.up.railway.app/endpoint/itemPurchase/item/${id}`,
          setItemPurchase,
          (row) => ({ ...row, items: row.items.filter((Item) => Item.itemName && Item.itemName._id === id) })
        ),
        fetchFiltered(
          `https://gg-project-production.up.railway.app/endpoint/pos/item/${id}`,
          setPosOut,
          (row) => ({ ...row, items: row.items.filter((Item) => Item.itemName && Item.itemName._id === id && parseFloat(Item.itemQty) > 0) })
        ),
        fetchFiltered(
          `https://gg-project-production.up.railway.app/endpoint/itemReturn/item/${id}`,
          setItemReturn,
          (row) => ({ ...row, itemsQtyArray: row.itemsQtyArray.filter((Item) => Item.itemName && Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) })
        )
      ]);

      const duration = ((Date.now() - startTime)).toFixed(0);
      console.log(`✅ [FILTERED API] Process completed in ${duration}ms`);

      // Mark data as fetched even if some partial failures occurred to avoid infinite retry loops
      setDataFetched(true);
      setLoadingData2(true);
    } catch (error) {
      console.error('❌ [CRITICAL ERROR] Failed to fetch summary data:', error);
      setLoadingData2(true);
    } finally {
      setLoadingSummary(false);
    }
  }
  const [stock, setStock] = useState(0)
  const [totalPurchase, setTotalPurchaseState] = useState(0)
  const [totalGeneralOut, setTotalGeneralOutState] = useState(0)
  const [completed, setCompleted] = useState(false)

  // Optimization: useMemo for calculations
  const totalPosOut = useMemo(() => posOut?.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty || 0), 0) }, 0) || 0, [posOut]);
  const totalOut = useMemo(() => itemOut?.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut || 0), 0) }, 0) || 0, [itemOut]);
  const totalReturn = useMemo(() => itemReturn?.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut || 0), 0) }, 0) || 0, [itemReturn]);

  const totalGeneralOutMemo = useMemo(() => (Number(totalPosOut) + Number(totalOut)) - totalReturn, [totalPosOut, totalOut, totalReturn]);
  const totalPurchaseMemo = useMemo(() => itemPurchase?.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty || 0), 0) }, 0) || 0, [itemPurchase]);

  useEffect(() => {
    if (loadingData2) {
      setTotalPurchaseState(totalPurchaseMemo)
      setTotalGeneralOutState(totalGeneralOutMemo)
      const stock1 = parseFloat(totalPurchaseMemo - totalGeneralOutMemo).toFixed(2);
      setStock(Math.round((stock1) * 100) / 100)
      setCompleted(true)
    }
  }, [totalPurchaseMemo, totalGeneralOutMemo, loadingData2])




  const fetchStock = async () => {
    try {
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-item/${id}`, {
        itemQuantity: stock
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [itemData, setItemData] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

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
        const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://gg-project-production.up.railway.app/endpoint/notification')
        setNotification(resNotification.data.data.filter((row) => row.idInfo === id))
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
  const [ItemName, setItemName] = useState(null);
  const [imagesURL, setImagesURL] = useState(null);
  const [loadingData1, setLoadingData1] = useState(true);
  useEffect(() => {
    const fetchEId = async () => {
      if (navigator.onLine && !isHibernating) {
        try {
          if (id) {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-item/${id}`)
            setItemData(res.data.data)
            setLoadingData(false)
            setItemName(res.data.data.itemName)
            if (res.data.data.data !== undefined) {
              const buffer = new Uint8Array(res.data.data.data.data)
              const bold = new Blob([buffer], { type: `${res.data.data.contentType}` })
              const reader = new FileReader();
              reader.readAsDataURL(bold)
              reader.onloadend = () => {
                setImagesURL(reader.result)
              };
            } else {
              setImagesURL(null)
            }
          }
          setLoadingData1(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData1(false)
        }
      } else {
        const resLocal = await db.itemSchema.get({ _id: id })
        setItemData(resLocal)
        setLoadingData(false)
        setItemName(resLocal.itemName)
        if (resLocal.data !== undefined) {
          const buffer = new Uint8Array(resLocal.data.data)
          const bold = new Blob([buffer], { type: `${resLocal.contentType}` })
          const reader = new FileReader();
          reader.readAsDataURL(bold)
          reader.onloadend = () => {
            setImagesURL(reader.result)
          };
        }
      }
    }
    fetchEId()
  }, [id, isHibernating])
  const [images, setImages] = useState(null);
  const [images1, setImages1] = useState(null);
  const [imagesURL1, setImagesURL1] = useState('');

  const [uploadedImage, setUploadedImage] = useState('')
  const [uploadedImageURL, setUploadedImageURL] = useState('')
  function handleBase64(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadedImage(reader.result)
    }
    reader.onerror = error => {
      console.log("error", error)
    }
    setUploadedImageURL(e.target.files[0]);
  }
  const handleShowInput = () => {
    setUploadedImage('')
  }
  const handleImageSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', uploadedImageURL);
    formData.append('employeeName', id);
    try {
      await axios.put(`https://gg-project-production.up.railway.app/endpoint/upload-image-item/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      handleOpenPicture();
    } catch (error) {
      handleError();
    }
  }
  const handleDeleteImage = () => {
    setImagesURL(null)
  }
  const dateComment = dayjs(Date.now());
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-comment/', data)
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
    const result = localStorage.getItem('TabItemView')
    if (result) {
      setValue3(result)
    }
  }, [])
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabItemView', changeValue);

    // Lazy load summary data when user clicks on summary tabs (2,3,4,5)
    if (changeValue !== '1') {
      handleFetchSummaryData();
    }
  };


  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [search2, setSearch2] = useState('');
  const [debouncedSearch2, setDebouncedSearch2] = useState('');
  const [search3, setSearch3] = useState('');
  const [debouncedSearch3, setDebouncedSearch3] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch2(search2), 300);
    return () => clearTimeout(handler);
  }, [search2]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch3(search3), 300);
    return () => clearTimeout(handler);
  }, [search3]);

  useEffect(() => {
    const result = localStorage.getItem('QuickFilterItemPurchaseItem-Summary')
    if (result) {
      setSearch(result)
    }
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    localStorage.setItem('QuickFilterItemPurchaseItem-Summary', value)
  }

  const newArray = useMemo(() => debouncedSearch !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(debouncedSearch) ||
    row.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    (row.projectName && row.projectName.name.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    (row.manufacturer && row.manufacturer.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    (row.manufacturerNumber && row.manufacturerNumber.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    row.items.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(debouncedSearch)
  ) : itemPurchase, [debouncedSearch, itemPurchase]);

  const totalPurChaseTotal = useMemo(() => newArray.length > 0 ? newArray.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty || 0), 0) }, 0) : 0, [newArray]);

  const totalBuyPurChaseTotal = useMemo(() => newArray.length > 0 ? newArray.filter((row) => row.items.find((item) => parseFloat(item.itemRate) !== 0)).reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty || 0), 0) }, 0) : 0, [newArray]);

  const totalAmountPurchase = useMemo(() => newArray.map((row) => ({ ...row, items: row.items.map((item) => ({ ...item, totalCostInfo: (item.itemRate || 0) * (item.itemQty || 0) })) })), [newArray]);

  const totalPurChaseTotalAmount = useMemo(() => totalAmountPurchase.length > 0 ? totalAmountPurchase.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.totalCostInfo || 0), 0) }, 0) : 0, [totalAmountPurchase]);

  const averageCost = useMemo(() => Math.round((totalPurChaseTotalAmount / (totalBuyPurChaseTotal || 1)) * 100) / 100, [totalPurChaseTotalAmount, totalBuyPurChaseTotal]);

  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }

  const newItemOut = useMemo(() => {
    const arr = [];
    posOut.forEach(row => {
      arr.push({
        _id: row._id,
        outNumber: 'S-' + row.factureNumber,
        itemOutDate: row.invoiceDate,
        reason: "Shop",
        reference: {
          _id: '',
          referenceName: row.customerName.customerName
        },
        itemsQtyArray: row.items.map((row1) => ({ ...row1, newItemOut: row1.itemQty }))
      })
    })

    itemOut.forEach(row => {
      arr.push({
        _id: row._id,
        outNumber: 'O-' + row.outNumber,
        itemOutDate: row.itemOutDate,
        reason: row.reason,
        reference: row.reference,
        itemsQtyArray: row.itemsQtyArray
      })
    })
    return arr;
  }, [posOut, itemOut]);

  const [filterItemOut, setFilterItemOut] = useState([]);

  // Debounce the filter update to avoid locking UI
  useEffect(() => {
    const applyFilter = () => {
      if (selectOptions === 'Month') {
        setFilterItemOut(newItemOut?.filter((row) => dayjs(row.itemOutDate).format('MMMM') === month))
      } else if (selectOptions === 'Year') {
        setFilterItemOut(newItemOut?.filter((row) => dayjs(row.itemOutDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      }
      else if (selectOptions === 'Custom') {
        setFilterItemOut(newItemOut?.filter((row) => filteredData.find((Item) => dayjs(Item).format('DD/MM/YYYY') === dayjs(row.itemOutDate).format('DD/MM/YYYY'))))
      }
      else if (selectOptions === 'All') {
        setFilterItemOut(newItemOut)
      }
    }
    // Small timeout to let UI breathe
    const t = setTimeout(applyFilter, 10);
    return () => clearTimeout(t);
  }, [selectOptions, month, startDate, filteredData, newItemOut])

  const newArray2 = useMemo(() => debouncedSearch2 !== '' ? newItemOut.filter((row) =>
    row.reason.toLowerCase().includes(debouncedSearch2.toLowerCase()) ||
    row.outNumber.toLowerCase().includes(debouncedSearch2.toLowerCase()) ||
    (row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemDescription.toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    dayjs(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch2)
  ) : newItemOut, [debouncedSearch2, newItemOut]);

  const totalOutTotal = useMemo(() => newArray2.length > 0 ? newArray2.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + (item.newItemOut !== undefined ? parseFloat(item.newItemOut) : 0), 0) }, 0) : 0, [newArray2]);

  const handleSearch3 = (e) => {
    const value = e.target.value
    setSearch3(value)
  }
  const newArray3 = useMemo(() => debouncedSearch3 !== '' ? itemReturn.filter((row) =>
    row.reason.toLowerCase().includes(debouncedSearch3.toLowerCase()) ||
    row.outNumber.toLowerCase().includes(debouncedSearch3.toLowerCase()) ||
    (row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemDescription.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    dayjs(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch3)
  ) : itemReturn, [debouncedSearch3, itemReturn]);

  const totalReturnTotal = useMemo(() => newArray3.length > 0 ? newArray3.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut || 0), 0) }, 0) : 0, [newArray3]);
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
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-itemPurchase/${idView}`)
            setItemPurchaseView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.itemPurchaseSchema.get({ _id: idView })
          setItemPurchaseView(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])
  const [openView2, setOpenView2] = useState(false);
  const [idView2, setIdView2] = useState(null);
  const [itemPurchaseView2, setItemPurchaseView2] = useState(null)
  const handleOpenView2 = (id) => {
    setOpenView2(true);
    setIdView2(id)
  }
  const handleCloseView2 = () => {
    setOpenView2(false);
    setIdView2(null);
    setItemPurchaseView2(null);
  };
  useEffect(() => {
    const fetchData2 = async () => {

      if (idView2 !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-itemOut/${idView2}`)
            setItemPurchaseView2(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.itemOutSchema.get({ _id: idView })
          setItemPurchaseView2(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView2])
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
              Item Information
            </Typography>
            <IconButton onClick={() => navigate('/ItemViewAdmin')}>
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
              loadingData ? <div>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <div>
                    <Grid container spacing={2}>
                      {show === 1 ?
                        <Grid item xs={3}>
                          <ItemNameInfo onId={id} />
                        </Grid> :
                        ""}
                      <Grid item xs={9}>
                        <div className='itemInfoContainer2'>
                          <div style={{ width: '100%', background: 'white' }}>

                            {itemData && [itemData].map((row) => (
                              <div key={row._id}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <div style={{ width: '100%', padding: '10px' }}>
                                    <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{row.itemName.toUpperCase()}</Typography>
                                    <Typography>{row.typeItem}</Typography>
                                  </div>
                                  <Button
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDown />}
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
                                    <MenuItem disabled={ItemInfoU.length === 0 && user.data.role !== 'CEO'}>
                                      <NavLink to={`/ItemFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <EditIcon />
                                        <Typography>Edit</Typography>
                                      </NavLink>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                      <NavLink to={`/ItemFormClone/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <FileCopy />
                                        <Typography>Clone</Typography>
                                      </NavLink>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={() => handleShow(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                    <MenuItem onClick={() => handleShow(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                  </Menu>
                                </div>
                                <Box sx={{ width: '100%' }}>
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
                                          label="Out-Summary"
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
                                          label="Return-Summary"
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
                                        <Tab
                                          label="Total-Summary"
                                          value="5"
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
                                    <TabPanel value="1" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <div>

                                        <Card sx={{ marginBottom: '20px' }}>
                                          <CardContent sx={{ width: "100%" }}>
                                            <div style={{ display: 'flex', gap: '15px', padding: '20px', fontSize: '20px', marginBottom: '5px' }}>
                                              <table style={{ marginBottom: '5px' }}>
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Name</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.itemName.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Store</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.itemStore.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Category</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.itemCategory.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Brand</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.itemBrand.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Item #</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.itemUpc.newCode}</span><span>-00</span><span>{row.itemUpc.itemNumber}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Action</span></th>
                                                    <td style={{ color: 'gray' }}>   <DeleteTooltip title="Delete-Image">
                                                      <span>                  <IconButton disabled={user.data.role !== 'CEO'} onClick={handleDeleteImage}>
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                      </span>
                                                    </DeleteTooltip></td>
                                                  </tr>

                                                </tbody>
                                              </table>
                                              <div style={{ height: '250px', width: '500px' }}>
                                                <div style={{ width: '100%' }}>
                                                  {
                                                    loadingData1 ? <div>
                                                      <Loader />
                                                    </div> :
                                                      <div>
                                                        {
                                                          imagesURL !== null ?
                                                            (
                                                              <div>
                                                                <img style={{ height: '250px', width: '300px' }} src={imagesURL} alt={row.itemName} />
                                                              </div>
                                                            )
                                                            : (
                                                              <>
                                                                {uploadedImage ?
                                                                  <>
                                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                                                      <img width={400} height={200} src={uploadedImage} />
                                                                      <BlackTooltip title="Clear" placement='left' style={{ position: 'absolute' }}>
                                                                        <IconButton onClick={handleShowInput} style={{ position: 'relative', float: 'right' }}>
                                                                          <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                                        </IconButton>
                                                                      </BlackTooltip>
                                                                    </div>
                                                                    <br />
                                                                    <button type='submit' className='btnCustomer6' onClick={handleImageSubmit}>Upload</button>
                                                                  </>

                                                                  : <input onChange={handleBase64} type='file' />
                                                                }
                                                              </>
                                                            )
                                                        }
                                                      </div>
                                                  }
                                                </div>
                                              </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '15px', padding: '20px', justifyContent: 'space-between', fontSize: '20px', marginTop: '5px' }}>
                                              <table>
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Manufacturer</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.itemManufacturer.toUpperCase()}</span></td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  {
                                                    row.itemDimension ? (
                                                      <tr>
                                                        <th align='left' style={{ height: '30px' }}><span >Dimension</span></th>
                                                        <td style={{ color: 'gray' }}><span>{row.itemDimension}</span><span> MTR</span></td>
                                                      </tr>
                                                    ) : <tr>
                                                      <th align='left' style={{ height: '30px' }}><span >Dimension</span></th>
                                                      <td style={{ color: 'gray' }}><span>0</span><span>MTR</span></td>
                                                    </tr>
                                                  }
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                    <th align='left' ><span >Cost Unit Price</span></th>
                                                    <td hidden={user.data.role !== 'CEO'} style={{ color: 'gray' }}><span data-prefix >$</span>{row.itemCostPrice}</td>
                                                  </tr>
                                                </tbody>
                                              </table>

                                              <table >
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Unit</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.unit.toUpperCase()}</span></td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  {
                                                    row.itemWeight ? (
                                                      <tr>
                                                        <th align='left' style={{ height: '30px' }}><span >Weight</span></th>
                                                        <td style={{ color: 'gray' }}><span>{row.itemWeight}</span><span> Kg</span></td>
                                                      </tr>
                                                    ) : <tr>
                                                      <th align='left' style={{ height: '30px' }}><span >Weight</span></th>
                                                      <td style={{ color: 'gray' }}><span>{0}</span><span> Kg</span></td>
                                                    </tr>
                                                  }
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                    <th align='left'><span >Sale Unit Price</span></th>
                                                    <td style={{ color: 'gray' }}><span data-prefix >$</span>{row.itemSellingPrice}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            <div style={{ padding: '20px', fontSize: '20px' }}>
                                              <table >
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Stock</span></th>
                                                    <td align='left' style={{ color: 'gray', textAlign: 'left' }}> {row.itemQuantity} {completed === true ? <> {row.itemQuantity !== stock ? <button onClick={fetchStock} className='btnCustomer'>  sync</button> : ''}</> : ""} </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table >
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Description</span></th>
                                                    <td>
                                                      <pre style={{ display: 'inline-block', fontFamily: 'system-ui', width: '100%', lineHeight: '20px', color: 'gray' }}>{row.itemDescription.toUpperCase()}</pre>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </CardContent>
                                        </Card>

                                      </div>
                                    </TabPanel>
                                    <TabPanel value="2" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      {loadingSummary ? (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                                          <CircularProgress />
                                          <Typography sx={{ ml: 2 }}>Loading purchase data...</Typography>
                                        </Box>
                                      ) : (
                                        <Card>
                                          <CardContent>
                                            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                              <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                                <CardContent>
                                                  <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Purchase: {totalPurChaseTotal !== undefined ? totalPurChaseTotal : 0}</Typography>
                                                </CardContent>
                                              </Card>
                                              <Card hidden={user.data.role !== 'CEO'}>
                                                <CardContent>
                                                  <PieChart series={[{
                                                    data: [
                                                      {
                                                        "id": 1,
                                                        "label": "Quantity Buy",
                                                        "value": totalBuyPurChaseTotal,
                                                      },
                                                      {
                                                        "id": 2,
                                                        "label": "Total Cost",
                                                        "value": totalPurChaseTotalAmount,
                                                      },
                                                      {
                                                        "id": 3,
                                                        "label": "Average Cost",
                                                        "value": averageCost,
                                                      }
                                                    ], innerRadius: 80
                                                  }]} {...size}>
                                                    <PieCenterLabel >Average Cost ${averageCost}</PieCenterLabel>
                                                  </PieChart>
                                                </CardContent>
                                              </Card>
                                            </section>

                                            <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                              <TextField
                                                label='search'
                                                id='search'
                                                value={search}
                                                variant="standard"
                                                onChange={handleSearch}
                                              />
                                            </section>
                                            <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                              <thead>
                                                <tr>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Manufacturer</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reference</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Rate</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                                  <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {
                                                  newArray.map((row) => (
                                                    <tr key={row._id}>
                                                      <td style={{ textAlign: 'left', width: '30px' }}>{row.itemPurchaseNumber}</td>
                                                      <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemPurchaseDate).format('DD/MM/YYYY')}</td>
                                                      <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.manufacturer}</td>
                                                      <td style={{ textAlign: 'left', width: '50px', borderLeft: '1px solid #DDD' }}>{row.manufacturerNumber}</td>
                                                      <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}>{row.projectName !== undefined ? row.projectName.name : row.description}</td>
                                                      <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                        {row.items.map((Item, i) => (
                                                          <p key={i}>
                                                            <span>${Item.itemRate}</span>
                                                          </p>
                                                        ))}
                                                      </td>
                                                      <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                        {row.items.map((Item, i) => (
                                                          <p key={i}>
                                                            <span>{Item.itemQty}</span>
                                                          </p>
                                                        ))}
                                                      </td>
                                                      <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                        <ViewTooltip title="View">
                                                          <span>
                                                            <IconButton onClick={() => handleOpenView(row._id)}>
                                                              <VisibilityIcon style={{ color: '#202a5a' }} />
                                                            </IconButton>
                                                          </span>
                                                        </ViewTooltip>
                                                      </td>
                                                    </tr>
                                                  ))
                                                }
                                              </tbody>
                                            </table>
                                          </CardContent>
                                        </Card>
                                      )}
                                    </TabPanel>
                                    <TabPanel value="3" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <Card>
                                        <CardContent>
                                          <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                            <CardContent>
                                              <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Out: {totalOutTotal !== undefined ? totalOutTotal : 0}</Typography>
                                            </CardContent>
                                          </Card>
                                          <section style={{ position: 'relative', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <TextField
                                              label='search'
                                              id='search2'
                                              value={search2}
                                              variant="standard"
                                              onChange={handleSearch2}
                                            />
                                          </section>
                                          <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                newArray2.map((row) => (
                                                  <tr key={row._id}>
                                                    <td style={{ textAlign: 'left', width: '30px' }}>{row.outNumber}</td>
                                                    <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemOutDate).format('DD/MM/YYYY')}</td>
                                                    <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.reason}</td>
                                                    <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}>{row.reference !== undefined ? row.reference.referenceName : ''}</td>
                                                    <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                      {row.itemsQtyArray.map((Item, i) => (
                                                        <p key={i}>
                                                          <span>{Item.newItemOut}</span>
                                                        </p>
                                                      ))}
                                                    </td>
                                                    <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                      <ViewTooltip title="View">
                                                        <span>
                                                          <IconButton onClick={() => handleOpenView2(row._id)}>
                                                            <VisibilityIcon style={{ color: '#202a5a' }} />
                                                          </IconButton>
                                                        </span>
                                                      </ViewTooltip>
                                                    </td>
                                                  </tr>
                                                ))
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                    <TabPanel value="4" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <Card>
                                        <CardContent>
                                          <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                            <CardContent>
                                              <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Return: {totalReturnTotal !== undefined ? totalReturnTotal : 0}</Typography>
                                            </CardContent>
                                          </Card>
                                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                            <TextField
                                              label='search'
                                              id='search2'
                                              value={search3}
                                              variant="standard"
                                              onChange={handleSearch3}
                                            />
                                          </section>
                                          <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                newArray3.map((row) => (
                                                  <tr key={row._id}>
                                                    <td style={{ textAlign: 'left', width: '60px' }}>{row.outNumber}</td>
                                                    <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemOutDate).format('DD/MM/YYYY')}</td>
                                                    <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.reason}</td>
                                                    <td style={{ textAlign: 'left', width: '200px', borderLeft: '1px solid #DDD' }}>{row.reference !== undefined ? row.reference.referenceName : ''}</td>
                                                    <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                      {row.itemsQtyArray.map((Item, i) => (
                                                        <p key={i}>
                                                          <span>{Item.newItemOut}</span>
                                                        </p>
                                                      ))}
                                                    </td>
                                                  </tr>
                                                ))
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                    <TabPanel value="5" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <Card sx={{ position: 'relative', top: '90px' }}>
                                        <CardContent>
                                          <Typography sx={{ textAlign: 'center', color: 'gray' }}>Summary</Typography>
                                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <PieChart
                                              colors={palette}
                                              series={[
                                                {
                                                  arcLabel: (item) => `${item.label}(${item.value})`,
                                                  arcLabelMinAngle: 35,
                                                  highlightScope: { faded: 'global', highlighted: 'item' },
                                                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                                  data: [
                                                    {
                                                      "id": 1,
                                                      "label": "I-Purchase",
                                                      "value": totalPurchase,
                                                    },
                                                    {
                                                      "id": 2,
                                                      "label": "I-Out",
                                                      "value": totalGeneralOut,
                                                    },
                                                    {
                                                      "id": 3,
                                                      "label": "Stock",
                                                      "value": stock,
                                                    }
                                                  ],
                                                },
                                              ]}
                                              width={450}
                                              height={250}
                                              sx={{
                                                [`& .${pieArcLabelClasses.root}`]: {
                                                  fill: 'white',
                                                  fontWeight: 'bold',
                                                },
                                              }}
                                            />
                                          </div>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                  </TabContext>
                                </Box>


                              </div>
                            ))}
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
                                  itemData && [itemData].map((row) => (
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
      <Modal
        open={loadingOpenModalPicture}
        onClose={handleClosePicture}
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
              <h2> Image Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClosePicture} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={loadingOpenModalDelete}
        onClose={handleClosePicture}
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
              <h2> Image Deleted successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClosePicture} className='btnCustomer'>
                  Close
                </button>
              </div>
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
                                itemPurchaseView.items.map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName.itemName} </TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemQty}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
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
      <Modal
        open={openView2}
        onClose={handleCloseView2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 850 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView2} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView2 !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView2.Create.person} </span><span> Create O-0{itemPurchaseView2.outNumber}</span> on <span>{itemPurchaseView2.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Return Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView2.itemOutDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reason</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.reason !== undefined ? itemPurchaseView2.reason : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.reference !== undefined ? itemPurchaseView2.reference.referenceName : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.description !== undefined ? itemPurchaseView2.description : ''}</TableCell>
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
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView2.itemsQtyArray.filter((row) => parseFloat(row.newItemOut) > 0).map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    {
                                      row.newDescription !== undefined ?
                                        <TableCell colSpan={4}>{row.itemName.itemName}</TableCell>
                                        :
                                        <>
                                          <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                          <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName.itemName}</TableCell>
                                          <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                          <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.newItemOut}</TableCell>
                                        </>
                                    }

                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
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

export default ItemInformationVIew
