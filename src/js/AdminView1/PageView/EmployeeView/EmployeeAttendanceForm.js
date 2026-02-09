import React, { useEffect, useState } from 'react';
import SidebarDashE3 from '../../../component/SidebarDashE3';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Box, FormLabel, RadioGroup, FormControlLabel, Radio, OutlinedInput, InputAdornment, Modal, Backdrop, Divider, TableRow } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, RemoveCircleOutline } from '@mui/icons-material';
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
import Close from '@mui/icons-material/Close';
import { error } from 'style';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { DateTimeField, TimeField, TimePicker } from '@mui/x-date-pickers';
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

function EmployeeAttendanceForm() {
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
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [openBack, setOpenBack] = useState(false);
  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
  const dateAttendance = new Date()
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    const fetchEmployee = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/employee')
          setEmployee(res.data.data.filter((row) => row.status !== 'Fired' && row.status !== 'Resign').map((row2) => ({
            id: row2._id,
            name: row2.employeeName,
            timeIn: new Date(),
            timeOut: new Date(),
            observation: '',
            note: '',
            daysWN: 0
          })))
        } catch (error) {
          console.log(error)
        }
      } else {
        const syncedEmployee = await db.employeeSchema.toArray();
        setEmployee(syncedEmployee.filter((row) => row.status !== 'Fired' && row.status !== 'Resign').map((row2) => ({
          id: row2._id,
          name: row2.employeeName,
          timeIn: new Date(),
          timeOut: new Date(),
          observation: '',
          note: '',
          daysWN: 0
        })))
      }
    }
    fetchEmployee()
  }, [])
  const handleChange = (idRow, key, value) => {
    const list = [...employee]
    const i = employee.findIndex(Item => Item.id === idRow)
    list[i][key] = value;
    if (list[i]['observation'] === 'P') {
      list[i]['daysWN'] = 1
    } else if (list[i]['observation'] === 'H') {
      list[i]['daysWN'] = 0.5
    }
    setEmployee(list)
  }
  const deleteItem = idRow => {
    setEmployee(employee => employee.filter((Item) => Item.id !== idRow));
  };
  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  const newArray2 = search2 !== '' ? employee.filter((Item) =>
    Item.name && Item.name.toLowerCase().includes(search2.toLowerCase())
  ) : employee
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setLoadingOpenModal(true);
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
  const handleCreateNotification = async (ReferenceInfo) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created Attendance',
      reason: 'For ' + dayjs(dateAttendance).format('DD/MM/YYYY'),
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true');
    const chunkSize = 5; // Process 5 requests at a time
    let savedCount = 0;

    if (navigator.onLine) {
      try {
        // Create an array of functions that return promises, so we don't start them all at once
        const attendancePromises = employee.map((row) => () => axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-employeeattendance', row));

        // Process in chunks
        for (let i = 0; i < attendancePromises.length; i += chunkSize) {
          const chunk = attendancePromises.slice(i, i + chunkSize);
          // Execute the current chunk of promises
          await Promise.all(chunk.map(p => p()));
          savedCount += chunk.length;
          // Optional: Update UI with progress if you want to add a more detailed state
          // setSaving(`Saving ${Math.min(savedCount, attendancePromises.length)}/${attendancePromises.length}...`); 
        }

        // After all chunks are processed
        await Promise.all(employee.map(async (item) => {
          await db.employeeAttendanceSchema.add({ ...item, synced: true })
        }))
        handleOpen();
        handleCreateNotification();

      } catch (error) {
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await Promise.all(employee.map(async (item) => {
        await db.employeeAttendanceSchema.add({ ...item, synced: false })
      }))
      handleOpen();
    }
  };
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
              Employee Attendance
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
            <SidebarDashE3 />
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
            <form onSubmit={handleSubmit}>
              <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
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
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Employee Name</TableCell>
                          <TableCell>Time IN</TableCell>
                          <TableCell>Time Out</TableCell>
                          <TableCell>Observation</TableCell>
                          <TableCell>Note</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          newArray2?.map((row, i) => (
                            <TableRow key={row.id}>
                              <TableCell>{row.name}</TableCell>
                              <TableCell>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                  <DemoContainer components={['DateTimeField']}>
                                    <DateTimeField
                                      name='timeIn'
                                      id='timeIn'
                                      format="DD/MM/YYYY-HH:mm"
                                      value={dayjs(row.timeIn)}
                                      onChange={(time) => handleChange(row.id, 'timeIn', time)}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider>
                              </TableCell>
                              <TableCell>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                  <DemoContainer components={['DateTimeField']}>
                                    <DateTimeField
                                      name='timeOut'
                                      id='timeOut'
                                      value={dayjs(row.timeOut)}
                                      format="DD/MM/YYYY-HH:mm"
                                      onChange={(time) => handleChange(row.id, 'timeOut', time)}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider>
                              </TableCell>
                              <TableCell>
                                <FormControl sx={{ width: '180px', backgroundColor: 'white' }} >
                                  <InputLabel htmlFor='observation'></InputLabel>
                                  <Select
                                    required
                                    name='observation'
                                    id='observation'
                                    value={row.observation}
                                    onChange={(e) => handleChange(row.id, 'observation', e.target.value)}
                                  >
                                    <MenuItem value="P">Present(P)</MenuItem>
                                    <MenuItem value="A">Absent(A)</MenuItem>
                                    <MenuItem value="S">Suspended(S)</MenuItem>
                                    <MenuItem value="H">Half Day(H)</MenuItem>
                                    <MenuItem value="PH">Public-Holiday(PH)</MenuItem>
                                    <MenuItem value="Stopped">Stopped</MenuItem>
                                    <MenuItem value="#">#</MenuItem>
                                  </Select>
                                </FormControl>
                              </TableCell>
                              <TableCell>
                                <TextField
                                  name='note'
                                  id='note'
                                  value={row.note}
                                  onChange={(e) => handleChange(row.id, 'note', e.target.value)}
                                  sx={{ width: '280px', backgroundColor: 'white' }}
                                />
                              </TableCell>
                              <TableCell>
                                <LightTooltip title="Delete" sx={{}}>
                                  <IconButton onClick={() => deleteItem(row.id)} >
                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                  </IconButton>
                                </LightTooltip>
                              </TableCell>
                            </TableRow>
                          ))
                        }

                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={12}>
                  {
                    saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                  }

                </Grid>
              </Grid>
            </form>
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
              <Typography>Do you want to stop creating Attendance ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/TewmViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
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

export default EmployeeAttendanceForm
