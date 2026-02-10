import React, { useEffect, useState, useMemo } from 'react'
import SidebarDashE2 from '../../../component/SidebarDashE2';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Collapse, MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Accordion, AccordionSummary, AccordionDetails, Divider, Tabs, Tab, Menu, Card, CardContent } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Add, KeyboardArrowDownOutlined, KeyboardArrowUp, KeyboardArrowUpOutlined } from '@mui/icons-material';
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
import CloseIcon from '@mui/icons-material/Close';
import EmployeeFormView from './EmployeeFormView';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Loader from '../../../component/Loader';
import Close from '@mui/icons-material/Close';
import { RemoveCircleOutline } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Image from '../../../img/images.png';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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
function EmployeeViewAdminAll() {
  let { id } = useParams()
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

  const [employee, setEmployee] = useState([]);
  const [payRoll, setPayRoll] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [planing, setPlaning] = useState([])
  const [rate, setRate] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/employee';

  useEffect(() => {
    const fetchE = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get(apiUrl)
          const resPRate = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/paymentRate')
          resPRate.data.data.map((row) => setRate(row.paymentRate));
          if (res) {
            setEmployee(res.data.data.reverse());
            setLoadingData(false)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        const offLinePayRate = await db.paymentRateSchema.toArray();
        offLinePayRate.map((row) => setRate(row.paymentRate));
        const offLineCustomer1 = await db.employeeSchema.toArray();
        setEmployee(offLineCustomer1.reverse());
        setLoadingData(false)
      }
    }
    fetchE()
  }, [])

  const [employeeName, setEmployeeName] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemOut, setItemOut] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchEId = async () => {
      if (navigator.onLine) {
        try {
          const [res, resPayRoll, resPlaning, resDE, resItemOut] = await Promise.all([
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employee/${id}`),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/payRoll'),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/planing'),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/expense'),
            axios.get('https://gg-project-productionn.up.railway.app/endpoint/itemOut')
          ]);

          setEmployeeName(res.data.data.employeeName)

          setPayRoll(resPayRoll.data.data.filter((row) => row.employeeName.id === id))

          setPlaning(resPlaning.data.data.filter((row) => row.employeeID === id).map((row) => ({
            ...row,
            totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
          })));

          setExpenses(resDE.data.data.filter((row) => row.accountName === 'Employee' && row.employeeName.find((Item) => Item.idRow === id))
            .map((row) => ({
              ...row,
              amountFC: row.employeeName.filter((Item) => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.amount), 0),
              amountUSD: row.employeeName.filter((Item) => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.total), 0),
            })))

          const formatDate1 = resItemOut.data.data.filter((row) => row.reference._id === id)
          setItemOut(formatDate1.reverse());

        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        // Parallelize offline fetching as well
        const [resLocal, offLinePlaning, offLinePayRoll, offLineExpense] = await Promise.all([
          db.employeeSchema.get({ _id: id }),
          db.planingSchema.toArray(),
          db.payRollSchema.toArray(),
          db.dailyExpenseSchema.toArray()
        ]);

        setEmployeeName(resLocal.employeeName)

        setPlaning(offLinePlaning.filter((row) => row.employeeId === id).map((row) => ({
          ...row,
          totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
        })))

        setPayRoll(offLinePayRoll.filter((row) => row.employeeName.id === id))

        setExpenses(offLineExpense.filter((row) => row.accountName === 'Employee' && row.employeeName.find((Item) => Item.idRow === id))
          .map((row) => ({
            ...row,
            amountFC: row.employeeName.filter((Item) => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.amount), 0),
            amountUSD: row.employeeName.filter((Item) => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.total), 0),
          })))
      }
    }
    fetchEId()
  }, [id])


  const planingObject = useMemo(() => planing?.reduce((acc, item) => {
    const id = item.projectName?._id;
    const name = item.projectName?.name;
    const dayPay = item.dayPayUSd;
    if (!acc[id]) {
      acc[id] = { id, name, dayPay, workD: 0, total: 0 }
    }
    acc[id].total += parseFloat(item.totalWorkDay)
    acc[id].workD += parseFloat(item.workNumber)
    return acc
  }, {}), [planing]);

  const planingArray = useMemo(() => Object.keys(planingObject).map((row) => planingObject[row]), [planingObject]);


  const [images, setImages] = useState(null);
  const [imagesURL, setImagesURL] = useState('');
  useEffect(() => {
    const fetchImages = async () => {
      if (employeeName !== null) {
        try {
          const resp = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-image/${employeeName}`);
          setImages(resp.data.data)
          if (resp && resp.data.data.data) {
            const buffer = new Uint8Array(resp.data.data.data.data)
            const bold = new Blob([buffer], { type: `${resp.data.data.contentType}` })
            const reader = new FileReader();
            reader.readAsDataURL(bold)
            reader.onloadend = () => {
              setImagesURL(reader.result)
            };

          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchImages()
  }, [employeeName])

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  {/** Filter VIew Start */ }
  const [show2, setShow2] = useState(1);
  const handleShow2 = (e) => {
    setShow2(e);
  }

  {/** search && Tab */ }
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = employee.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [employee, id])
  const handleChange3 = (e, newValue) => {
    setValue(newValue)
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue)
  }
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('TabEmployee')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange4 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabEmployee', changeValue)
  };
  const newArray = search !== '' ? employee.filter((row) =>
    row.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    row.department && row.department.toLowerCase().includes(search.toLowerCase()) ||
    row.employeeRole && row.employeeRole.toLowerCase().includes(search.toLowerCase()) ||
    row.employeeAddress && row.employeeAddress.toLowerCase().includes(search.toLowerCase())
  ) : employee
  {/** search && Tab End */ }
  {/** Filter VIew End */ }
  {/** Comments starts */ }
  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) => {
    setShow1(e);
    setAnchorEl(null);
  }
  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/notification')
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
  const [loadingOpenModalPicture, setLoadingOpenModalPicture] = useState(false);
  const [loadingOpenModalDelete, setLoadingOpenModalDelete] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

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
  const handleClosePicture = () => {
    window.location.reload();
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
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
    formData.append('employeeName', employeeName);
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      handleOpenPicture();
    } catch (error) {
      handleError();
    }
  }
  const handleDeleteImage = async (e) => {
    e.preventDefault()
    if (images !== null) {
      try {
        const res = await axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-image/${images._id}`)
        if (res) {
          handleOpenDelete()
        }
      } catch (error) {
        console.log(error)
      }
    }

  }
  const dateComment = dayjs(Date.now());
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-comment/', data)
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
  const allTransaction = useMemo(() => {
    const arr = [];
    payRoll.forEach(row => {
      arr.push({
        type: 'PaySlip',
        month: row.month,
        date: row.payDate,
        number: row.payNumber,
        description: 'Net Payable',
        amountFC: row.totalNet,
        amountUSD: row.totalPaidDollars,
      })
    })
    expenses.forEach(row => {
      arr.push({
        type: 'Expenses',
        month: row.expenseDate,
        date: row.expenseDate,
        number: row.expenseNumber,
        description: row.expenseCategory.expensesCategory + ' / ' + row.description,
        amountFC: row.amountFC,
        amountUSD: row.amountUSD,
      })
    })
    return arr;
  }, [payRoll, expenses]);

  const [selectOptions, setSelectOptions] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    return date
  });

  let totalFC = 0
  let totalUSD = 0
  const filterTransanction = useMemo(() => allTransaction?.filter((row) => dayjs(row.month).format('MMMM/YYYY') === dayjs(startDate).format('MMMM/YYYY')), [allTransaction, startDate]);

  const totalGFC = useMemo(() => filterTransanction.length > 0 ? filterTransanction.reduce((sum, row) => sum + parseFloat(row.amountFC), 0) : 0, [filterTransanction]);
  const totalGUSD = useMemo(() => filterTransanction.length > 0 ? filterTransanction.reduce((sum, row) => sum + parseFloat(row.amountUSD), 0) : 0, [filterTransanction]);

  const monthRow = useMemo(() => allTransaction.filter((row) => dayjs(row.month).format('MMMM/YYYY') === dayjs(startDate).format('MMMM/YYYY')).sort((a, b) => new Date(a.date) - new Date(b.date)).map((row, i) => {
    if (row.type === 'PaySlip') {
      totalFC += parseFloat(row.amountFC)
      totalUSD += parseFloat(row.amountUSD)
    } else if (row.type === 'Expenses') {
      totalFC += parseFloat(row.amountFC)
      totalUSD += parseFloat(row.amountUSD)
    }
    return (
      <tr key={i}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          <span>{row.type === 'PaySlip' && (row.description + ' REf PAY-0' + row.number)}</span>
          <span>{row.type === 'Expenses' && ('Ref D-0' + row.number + ' / ' + row.description)}</span>
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'PaySlip' ? `FC ${row.amountFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` + ` ($${row.amountUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Expenses' ? `FC ${row.amountFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` + ` ($${row.amountUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`FC ${totalFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` + ` ($${totalUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`}</td>
      </tr>
    )
  }), [allTransaction, startDate]);

  const [search3, setSearch3] = useState('');

  const handleSearch3 = (e) => {
    const value = e.target.value
    setSearch3(value)
  }
  const newArray3 = useMemo(() => search3 !== '' ? itemOut.filter((row) =>
    row.reason.toLowerCase().includes(search3.toLowerCase()) ||
    row.reference.referenceName.toLowerCase().includes(search3.toLowerCase()) ||
    row.itemsQtyArray.some((Item) => Item.itemName.itemName.toLowerCase().includes(search3.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemDescription.toLowerCase().includes(search3.toLowerCase())) ||
    dayjs(row.itemOutDate).format('DD/MM/YYYY').includes(search3)
  ) : itemOut, [itemOut, search3]);

  const totalReturnTotal = useMemo(() => newArray3.length > 0 ? newArray3.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut), 0) }, 0) : 0, [newArray3]);

  {/** Comments end */ }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            Salary Slip for the month Of: {dayjs(row.month).format('MMMM-YYYY')}
          </TableCell>
          <TableCell align="right">{row.daysW} Days</TableCell>
          <TableCell align="right">FC {row.totalPaid?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span>($<span>{(row.totalPaid / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '0px', border: '1px solid #DDD' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Earning (FC)</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Actual Salary (FC)</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }}>Earnings (FC)</th>
                      <th style={{ padding: '5px', border: '1px solid #DDD', color: 'black', backgroundColor: '#e8f7fe' }} colSpan={2}>Deductions (FC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Basic wage</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.basicSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.basicSalary / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.earningSalary !== undefined ? row.earningSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span> <span>($<span>{(row.earningSalary !== undefined ? row.earningSalary / row.rate : 0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>In advanced allowances </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.advancedSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.advancedSalary / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Transport allowances</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.basicTransport?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.basicTransport / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.transportEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.transportEarning / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Transport</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.transportDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.transportDeduction / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Food allowances</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.foodBasic !== undefined ? row.foodBasic?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span> <span>($<span>{(row.foodBasic !== undefined ? row.foodBasic / row.rate : 0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.foodEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.foodEarning / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Food</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.foodDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.foodDeduction / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Bounce allowances 3%</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.bounceAllowances?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.bounceAllowances / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.bounceAllowancesEarning !== undefined ? row.bounceAllowancesEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span> <span>($<span>{(row.bounceAllowancesEarning !== undefined ? row.bounceAllowancesEarning / row.rate : 0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Loan recovery</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>

                        <span>{row.loan?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.loan / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Other</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.other !== undefined ? row.other?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span> <span>($<span>{(row.other !== undefined ? row.other / row.rate : 0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.otherEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.otherEarning / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>Item lost recovery</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }}>
                        <span>{row.itemLost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span> <span>($<span>{(row.itemLost / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', color: 'black' }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '5px', border: '1px solid #DDD', color: 'black', textAlign: 'center' }} colSpan={6}>Total (Basic, Earning & Deduction)</td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={2}><span>Total Basic:</span> <span> FC {row.totalActualSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> <span>($<span>{(row.totalActualSalary / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={2}><span>Total Earning:</span> <span> FC {row.totalActualEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> <span>($<span>{(row.totalActualEarning / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={2}><span>Total Deduction:</span> <span> FC {row.totalActualDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> <span>($<span>{(row.totalActualDeduction / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                    </tr>
                    <tr>
                      <td style={{ padding: '5px', border: '1px solid #DDD', color: 'black', textAlign: 'center' }} colSpan={6}>Total (Paid)</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Net payable</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={4}>FC {row.totalNet?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span>($<span>{row.totalPaidDollars?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Deduction</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={4}>FC {row.totalActualDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span>($<span>{(row.totalActualDeduction / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Overtime & Bonus</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={4}>FC {row.bonus?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span>($<span>{(row.bonus / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Generale</td>
                      <td style={{ width: '200px', border: '1px solid #DDD', color: 'black' }} colSpan={4}>FC {row.totalPaid?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span>($<span>{(row.totalPaid / row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>)</span></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  function Row2(props) {
    const { row } = props;
    const { index } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{index + 1}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.workD}</TableCell>
          <TableCell align="center">${row.dayPay}</TableCell>
          <TableCell align="right">${row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <table>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid gray' }}>Date</th>
                      <th style={{ border: '1px solid gray' }}>Status</th>
                      <th style={{ border: '1px solid gray' }}>Task</th>
                      <th style={{ border: '1px solid gray' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      planing?.filter((row1) => row1.projectName?._id === row.id)?.map((row1) => (
                        <tr key={row1._id}>
                          <td style={{ border: '1px solid gray' }}> {dayjs(row1.planingDate).format('DD/MM/YYYY')}</td>
                          <td style={{ border: '1px solid gray' }}> {row1.status}</td>
                          <td style={{ border: '1px solid gray' }}> {row1.planingTask}</td>
                          <td style={{ border: '1px solid gray' }}> {row1.planingDescription}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

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
              Employee Information
            </Typography>
            <IconButton onClick={() => navigate('/TewmViewAdmin')}>
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
            <SidebarDashE2 />
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
                <div >
                  <Grid container spacing={2}>

                    {show1 === 1 ?
                      <Grid item xs={3}>
                        {
                          show2 === 1 ? (
                            <div className='itemInfoContainer'>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                                  <Checkbox />
                                  <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '20px' }}>All Employee</Typography>
                                </div>
                                <div style={{ padding: '20px' }}>
                                  <p className='btnCustomer1' onClick={() => handleShow2(2)}>Filter</p>
                                </div>
                              </div>
                              <div style={{ height: '555px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value}
                                  onChange={handleChange3}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: 'white',
                                      height: '0px'
                                    }
                                  }}
                                >
                                  {employee?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.employeeName ? row.employeeName : ''}
                                      component={Link}
                                      to={`/EmployeeViewAdminAll/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: 'white',
                                          backgroundColor: '#30368a',
                                          borderRadius: '10px'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }
                        {
                          show2 === 2 ? (
                            <div className='itemInfoContainer'>
                              <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                                <Grid item xs={10}>
                                  <TextField
                                    label='search'
                                    id='search'
                                    value={search}
                                    variant="standard"
                                    onChange={handleSearch}
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <ViewTooltip title="Close" placement='bottom'>
                                    <IconButton onClick={() => handleShow2(1)} style={{ position: 'relative', float: 'right' }}>
                                      <Close style={{ color: '#30368a' }} />
                                    </IconButton>
                                  </ViewTooltip>
                                </Grid>
                              </Grid>

                              <div style={{ height: '580px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value2}
                                  onChange={handleChange2}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: '#30368a'
                                    }
                                  }}
                                >
                                  {newArray?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.employeeName ? row.employeeName : ''}
                                      component={Link}
                                      to={`/EmployeeViewAdminAll/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: '#30368a'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }

                      </Grid> :
                      ""}
                    <Grid item xs={9}>
                      <div className='itemInfoContainer2'>
                        {employee?.filter(row => row._id === id)?.map((row) => (
                          <div key={row._id}>
                            <div className='itemInfoContainer2Head'>
                              <div>
                                <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{row.employeeName.toUpperCase()} {row.employeeId !== undefined ? "/" + row.employeeId : ''}</Typography>
                              </div>
                              <Typography
                                color={
                                  row.status === "Resign"
                                    ? "#801313" :
                                    row.status === "Suspended"
                                      ? "#fb8c00" :
                                      row.status === "Fired"
                                        ? "red" :
                                        row.status === "Employed"
                                          ? "blue" : "black"
                                }
                              >
                                {row.status !== undefined ? row.status : 'Undefined'}
                              </Typography>
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                                  <MenuItem sx={{ width: '100%' }}>
                                    <NavLink to={`/EmployeeUpdateView/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                      <EditIcon />
                                      <Typography>Edit</Typography>
                                    </NavLink>
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem onClick={() => handleShow1(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                  <MenuItem onClick={() => handleShow1(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                </Menu>
                              </div>
                            </div>
                            <Box>
                              <TabContext
                                value={value3}
                              >
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                  <TabList
                                    onChange={handleChange4}
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
                                      label="Personal"
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
                                      label="Planing"
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
                                    <Tab
                                      label="PayRoll"
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
                                      label="Report"
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
                                      label="Tools"
                                      value="6"
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
                                <TabPanel value="1" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>

                                  <Card sx={{ width: '100%', fontSize: '20px' }}>
                                    <CardContent>
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>Name</td>
                                            <td>{row.employeeName.toUpperCase()}</td>
                                          </tr>
                                          <tr>
                                            <td>Join Date</td>
                                            <td>{dayjs(row.joinDate).format('DD/MMMM/YYYY')}</td>
                                          </tr>
                                          <tr>
                                            <td>Status</td>
                                            <td><Typography
                                              color={
                                                row.status === "Resign"
                                                  ? "#801313" :
                                                  row.status === "Suspended"
                                                    ? "#fb8c00" :
                                                    row.status === "Fired"
                                                      ? "red" :
                                                      row.status === "Employed"
                                                        ? "blue" : "black"
                                              }
                                            >
                                              {row.status !== undefined ? row.status : 'Undefined'}{row.reason1 !== undefined ? ': ' + row.reason1 : ''}
                                            </Typography>
                                            </td>
                                          </tr>
                                        </tbody>
                                        <tbody>
                                          <tr>
                                            <td colSpan={2} style={{ textAlign: 'center' }}>Department & Grade</td>
                                          </tr>
                                          <tr>
                                            <td>Department</td>
                                            <td>{row.department}</td>
                                          </tr>
                                          <tr>
                                            <td>Grade</td>
                                            <td>{row.employeeRole}</td>
                                          </tr>
                                        </tbody>
                                        <tbody>
                                          <tr>
                                            <td colSpan={2} style={{ textAlign: 'center' }}>Employee Contact</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>{row.employeeEmail}</td>
                                          </tr>
                                          <tr>
                                            <td>Phone</td>
                                            <td>{row.employeePhone}</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>{row.employeeAddress}</td>
                                          </tr>
                                        </tbody>
                                        {
                                          user.data.role === 'CEO' ?
                                            <tbody>
                                              <tr>
                                                <td colSpan={2} style={{ textAlign: 'center' }}>Salary Information</td>
                                              </tr>
                                              <tr>
                                                <td>Basic wage</td>
                                                <td>FC {row.salary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              </tr>
                                              <tr>
                                                <td>Transport allowances</td>
                                                <td>FC {row.basicTransport !== undefined ? row.basicTransport?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</td>
                                              </tr>
                                              <tr>
                                                <td>Food allowances</td>
                                                <td>FC {row.foodBasic !== undefined ? row.foodBasic?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</td>
                                              </tr>
                                              <tr>
                                                <td>Bounce allowances 3%</td>
                                                <td>FC {row.bounceAllowances !== undefined ? row.bounceAllowances?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</td>
                                              </tr>
                                              <tr>
                                                <td>other</td>
                                                <td>FC {row.other !== undefined ? row.other?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</td>
                                              </tr>
                                              <tr>
                                                <td>Total Salary</td>
                                                <td>FC {parseFloat(Number(row.salary) + Number(row.basicTransport) + Number(row.foodBasic) + Number(row.bounceAllowances) + Number(row.other))?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {parseFloat((Number(row.salary) + Number(row.basicTransport) + Number(row.foodBasic) + Number(row.bounceAllowances) + Number(row.other)) / rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                                              </tr>
                                            </tbody> : <tbody></tbody>
                                        }
                                      </table>
                                      <table style={{ marginBottom: '5px' }}>
                                        {
                                          user.data.role === 'CEO' ?
                                            <tbody>
                                              <tr>
                                                <td style={{ textAlign: 'center' }}>Description</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <span>
                                                    <pre style={{ fontFamily: 'system-ui', color: 'black', fontSize: '15px' }}>{row.description}</pre>
                                                  </span>
                                                </td>
                                              </tr>
                                            </tbody> : <tbody></tbody>
                                        }
                                      </table>

                                    </CardContent>
                                  </Card>
                                </TabPanel>
                                <TabPanel value="2" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                                  <Card sx={{ width: '100%', fontSize: '20px' }}>
                                    <CardContent>
                                      <table >
                                        <tbody>
                                          <tr>
                                            <td colSpan={2} style={{ textAlign: 'center' }}>Personal Information</td>
                                          </tr>
                                        </tbody>
                                        <tbody>
                                          <tr>
                                            <td>Date of Birth</td>
                                            <td>{dayjs(row.dateOfBirth).format('DD/MM/YYYY')}</td>
                                          </tr>
                                          <tr>
                                            <td>Gender</td>
                                            <td>{row.Gender}</td>
                                          </tr>
                                          <tr>
                                            <td>Status</td>
                                            <td>{row.statusMarital}</td>
                                          </tr>
                                        </tbody>
                                        <tbody>
                                          <tr>
                                            <td>Id</td>
                                            <td>{row.identifier}</td>
                                          </tr>
                                          <tr>
                                            <td>Id N</td>
                                            <td>{row.identifierNumber}</td>
                                          </tr>
                                          <tr>
                                            <td>EXP Id Date</td>
                                            <td>{dayjs(row.expireDate).format('DD/MM/YYYY')}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <div className='customerDetails1'>
                                        <div style={{ width: '100%', position: 'relative', padding: '20px' }}>
                                          {
                                            images !== null ?
                                              (
                                                <div>
                                                  <section>
                                                    <DeleteTooltip title="Delete-Image">
                                                      <span>                  <IconButton onClick={handleDeleteImage}>
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                      </span>
                                                    </DeleteTooltip>
                                                  </section>
                                                  <section>
                                                    <img style={{ marginLeft: '11%', width: '600px', height: '300px' }} src={imagesURL} alt={images.fileName} />
                                                  </section>
                                                </div>
                                              ) : (
                                                <div>
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
                                                      <button type='submit' className='btnCustomer6' style={{ marginLeft: '14%', width: '60%' }} onClick={handleImageSubmit}>Upload</button>
                                                    </>

                                                    : <input onChange={handleBase64} type='file' style={{ marginLeft: '14%', width: '60%' }} />
                                                  }
                                                </div>
                                              )
                                          }
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </TabPanel>
                                <TabPanel value="5" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                                  <TableContainer>
                                    <TableContainer component={Paper}>
                                      <Table aria-label="collapsible table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell />
                                            <TableCell>#</TableCell>
                                            <TableCell align="center">Project Name</TableCell>
                                            <TableCell align="center">Day Work</TableCell>
                                            <TableCell align="center">Pay Day</TableCell>
                                            <TableCell align="right">Total Pay</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {
                                            planingArray?.map((row, i) => (
                                              <Row2 key={row.id} row={row} index={i} />
                                            ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </TableContainer>
                                </TabPanel>
                                <TabPanel value="3" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                                  <TableContainer>
                                    <TableContainer component={Paper}>
                                      <Table aria-label="collapsible table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell />
                                            <TableCell>Month</TableCell>
                                            <TableCell align="right">Day Work</TableCell>
                                            <TableCell align="right">Total Paid</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {payRoll?.map((row) => (
                                            <Row key={row._id} row={row} />
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </TableContainer>
                                </TabPanel>
                                <TabPanel value="4" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                                  <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                          required
                                          name='startDate'
                                          value={dayjs(startDate)}
                                          onChange={(date) => setStartDate(date)}
                                          format='MMMM/YYYY'
                                          label={'"month" "&" "year"'} views={['month', 'year']}
                                        />
                                      </DemoContainer>
                                    </LocalizationProvider>
                                  </div>
                                  <Box sx={{ padding: '20px' }}>
                                    <div style={{ padding: '20px' }}>
                                      <header className='invoiceTest'>
                                        <div>
                                          <img src={Image} style={{ width: '500px', height: '100px' }} />
                                        </div>
                                        <address style={{ textAlign: 'right' }}>
                                          <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                          <p>RCM CD/KWZ/RCCM/22-B-00317 </p>
                                          <p> ID NAT 14-H5300N11179P </p>
                                          <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
                                          <p>  KOLWEZI LUALABA </p>
                                          <p>   DR CONGO </p>
                                        </address>
                                      </header>
                                      <hr /><p className='invoicehr'></p>
                                      <article>
                                        <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                          <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                                            <p style={{}}>
                                              <br />
                                              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                {row.employeeName.toUpperCase()}
                                              </span>
                                              <br />
                                            </p>
                                          </address>
                                          <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                                            <thead>
                                              <tr>
                                                <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}>
                                                  <span>
                                                    For {dayjs(startDate).format('MMMM/YYYY')}
                                                  </span>
                                                </td>
                                              </tr>
                                            </tbody>
                                            <tbody>
                                              <tr>
                                                <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Account Summary</td>
                                              </tr>
                                              <tr>
                                                <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Cost</span></td>
                                                <td style={{ textAlign: 'left', width: '200px' }}>{`FC ${totalGFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` + ` ($${totalGUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </section>
                                        <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                                          <thead>
                                            <tr>
                                              <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Transaction</th>
                                              <th style={{ width: '300px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Details</th>
                                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Payments</th>
                                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Amount</th>
                                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Total</th>
                                            </tr>
                                          </thead>

                                          <tbody>
                                            {monthRow}
                                            <tr>
                                              <td colSpan={3}></td>
                                              <td >Total Cost</td>
                                              <td colSpan={2}>{`FC ${totalFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` + ` ($${totalUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </article>
                                      <div className='footerinvoice'>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><Email /></span>
                                          <span>Contact@GlobalGate.Sarl</span>
                                        </p>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><Phone /></span>
                                          <span>+243 827 722 222</span>
                                        </p>
                                        <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                          <span><WebIcon /></span>
                                          <span>www.GlobalGate.sarl</span>
                                        </p>
                                      </div>
                                    </div>
                                  </Box>
                                </TabPanel>
                                <TabPanel value="6" sx={{ height: '520px', overflow: 'hidden', overflowY: 'scroll' }}>
                                  <Card>
                                    <CardContent>
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
                                            <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Item Description</th>
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
                                                <td style={{ textAlign: 'left', width: '200px', borderLeft: '1px solid #DDD' }}> {row.itemsQtyArray.map((Item, i) => (
                                                  <p key={i}>
                                                    <span>{Item.itemName.itemName}</span>
                                                  </p>
                                                ))} </td>
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
                              </TabContext>
                            </Box>
                          </div>
                        ))}

                      </div>
                    </Grid>
                    {show1 === 2 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>COMMENTS</p>
                              <ViewTooltip title="Close" placement='left'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
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
                    {show1 === 3 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>HISTORY</p>
                              <ViewTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </div>
                            <br />

                          </div>
                          <div style={{ height: '518px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
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
                  </Grid>
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
    </div>
  )
}

export default EmployeeViewAdminAll
