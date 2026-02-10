import React, { useEffect,useState } from 'react';
import SidebarDashE3 from '../../../component/SidebarDashE3';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Box, FormLabel, RadioGroup, FormControlLabel, Radio, OutlinedInput, InputAdornment,Modal,Backdrop,Divider, TableRow } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
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
function EmployeePlaningForm() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
      const user = useSelector(selectCurrentUser);
  
      useEffect(()=> {
        const storesUserId = localStorage.getItem('user');
        const fetchUser = async () => {
          if (storesUserId) {
         if (navigator.onLine) {
           try {
             const res = await  axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
             const Name = res.data.data.employeeName;
             const Role = res.data.data.role;
             dispatch(setUser({userName: Name, role: Role}));
           } catch (error) {
             console.error('Error fetching data:', error);
           }
         } else {
          const resLocalInfo = await db.employeeUserSchema.get({_id:storesUserId})
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({userName: Name, role: Role}));
         }
        }else {
          navigate('/');
        }
        }
        fetchUser()
      },[dispatch]);
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

        const [planingDate,setPlaningDate]= useState(()=>{
            const date = new Date()
            return date
          });
        const [inputValueProject, setInputValueProject] = React.useState('');
        const [reason,setReason] = useState("");
        const [employeeAttendance, setEmployeeAttendance]= useState([]);
        const [employee,setEmployee]= useState([]);
        const [projects,setProject] = useState([]);
        const [projectName,setProjectName] = useState({});
        const [rate,setRate]= useState(0);
        const [employeeArray,setEmployeeArray] = useState([])
        const [planing,setPlaning] = useState([]);
        const [maintenance,setMaintenance] = useState([]);
        const [inputValue2, setInputValue2] = React.useState('');
      useEffect(()=>{
        const fetchEmployee = async ()=> {
            if (navigator.onLine) {
              try {
                const resProject = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
                const resPlaning = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/planing')
                setProject(resProject.data.data.filter((row)=> row.status === 'On-Going').reverse());
                const resMaintenance = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/maintenance')
                setMaintenance(resMaintenance.data.data.filter((row)=>row.status === "Open" ));
                setPlaning(resPlaning.data.data.filter((row)=>dayjs(row.planingDate).format('DD/MM/YYYY') === dayjs(planingDate).format('DD/MM/YYYY')))
                const resPRate = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/paymentRate')
                resPRate.data.data.map((row)=> setRate(row.paymentRate));
                  const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employeeattendance')  
                  setEmployeeAttendance(res.data.data.filter((row)=> (row.observation === 'P' || row.observation === 'H') && dayjs(row.timeIn).format('DD/MM/YYYY') === dayjs(planingDate).format('DD/MM/YYYY') ).map((row2)=>({
                   ID: row2.id,
                   Name:row2.name,
                  })))
              } catch (error) {
                  console.log(error)
              }
            } else {
            }
        }
        fetchEmployee()
      },[planingDate])
      const handleChange = (idRow, key, value) => {
        const list = [...employeeArray]
        const i = employeeArray.findIndex(Item=> Item.idRow === idRow)
        list[i][key] = value;
        if (list[i]['status'] === 'Full-Day') {
          list[i]['workNumber'] = 1
      } else if (list[i]['status'] === 'Half-Day'){
          list[i]['workNumber'] = 0.5
      }else{
        list[i]['workNumber'] =list[i]['status']/10
      }
        setEmployeeArray(list)
      }

      const addItem = () => {
        setEmployeeArray([...employeeArray, {
              idRow:v4(),
              projectName:{
                _id:"",
                name:""
              },
              employeeName: "",
              planingDate: "",
              employeeID: "",
              planingDescription: "",
              planingTask: "",
              status: "",
              dayPayUSd: 0,
              workNumber: 0,
            }]);
      }
      const deleteItem = (idRow) =>{
        setEmployeeArray (employeeArray => employeeArray.filter((Item)=> Item.idRow !==idRow));
      };
      useEffect(()=> {
        const fetchData = async () => {
          if (navigator.onLine) {
            try {
              const employeeResponse = await  axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
              setEmployee(employeeResponse.data.data.filter((row)=> employeeAttendance?.find((row2)=> row2.ID === row._id)));
            } catch (error) {
              console.log(error)
            }
          } else {
            const offLineEmployee = await db.employeeSchema.toArray();
            setEmployee(offLineEmployee.filter((row)=> employeeAttendance?.find((row2)=> row2.employeeID === row._id)));
          }
        }
        fetchData()
      },[employeeAttendance])

      const handleChangeEmployee = (idInfo,newValue) => {
        addItem()
        const selectedOptions = employee.find((option)=> option === newValue)
        setEmployeeArray( employeeArray => employeeArray.map((row)=>  row.idRow === idInfo ?{
          ...row,
          employeeID: selectedOptions?._id,
          employeeName: selectedOptions?.employeeName,
          dayPayUSd:parseFloat(((selectedOptions?.salary + selectedOptions?.basicTransport + selectedOptions?.foodBasic + selectedOptions?.bounceAllowances + selectedOptions?.other) / 26)/rate).toFixed(2)
        }:row));
      }
      const planingFilterInfo = planing.filter((row)=> row.employeeID !== "66c0a932e3b788527f2e8a68" && row.employeeID !== "66c0a828e3b788527f2e89df" )

 
      const filterP = employee.filter((option) => !planingFilterInfo.find((row)=> row.employeeID === option._id && row.status === "Full-Day" )) 
     
      const filterItemInformation = filterP.filter(option=> !employeeArray.filter((row)=>row.employeeID !== "66c0a932e3b788527f2e8a68" && row.employeeID !== "66c0a828e3b788527f2e89df").find((row)=> option._id === row.employeeID ))

      const handlePlanningDateChange = (date) => {
        setPlaningDate(date);
      }

      const handleChangeProject = (newValue) => {
        const selectedOptions = projects.find((option)=> option === newValue)
        setProjectName({
          _id: selectedOptions?._id,
          name: selectedOptions?.projectName
        });
      }
      const handleChangeService = (newValue) => {
        const selectedOptions = maintenance.find((option)=> option === newValue)
        setProjectName({
          _id: selectedOptions?._id,
          name: selectedOptions?.serviceName + ' / ' + selectedOptions?.customerName.customerName
        });
      }

        const arrayNew = employeeArray.map((row)=>({
          ...row,
          planingDate:planingDate,
          projectName:projectName,
          reason:reason
        }))

      
            const [loading,setLoading]= useState(false);
            const [loadingOpenModal,setLoadingOpenModal] = useState(false);
            const [ErrorOpenModal,setErrorOpenModal] = useState(false);
        
            const handleOpen = () => {
              setLoadingOpenModal(true);
              setLoading(true);
              setTimeout(()=> {
                setLoading(false);
              }, 500)
            }
            const handleError = () => {
              setErrorOpenModal(true);
              setLoading(true);
              setTimeout(()=> {
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
                  person:user.data.userName + ' Created Assignment',
                  reason: 'For '+ projectName?.name + ' on ' + dayjs(planingDate).format('DD/MM/YYYY'),
                  dateNotification: new Date()
                }
                try {
                  await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification',data)
                } catch (error) {
                  console.log(error)
                }
              }
              const [saving,setSaving] = useState('')
            const handleSubmit = async (e) => {
                e.preventDefault();
                setSaving('true')
               if (navigator.onLine) {
                 const saveAttendance = arrayNew.map((row)=>{
                   return axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-planing',row)
                 })
                 try {
                   const res = await Promise.all(saveAttendance);
                   if (res) {
                     handleOpen();
                     handleCreateNotification();
                    }
                 } catch (error) {
                   if (error) {
                    setSaving('')
                     handleError();
                   }
                 }
               } else {
                await Promise.all(arrayNew.map( async (item)=>{
                  await db.planingSchema.add({...item, synced:false})
                 }))
                 handleOpen();
               }
            };
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
             <CssBaseline />
     <AppBar position="absolute" open={sideBar} sx={{backgroundColor:'#30368a'}}>
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
         Today's Planing   
                 </Typography>
      <IconButton onClick={handleOpenBack}>
      <ArrowBack style={{color:'white'}} />
      </IconButton>
        <NotificationVIewInfo/>
        <MessageAdminView name={user.data.userName} role={user.data.role}/>
        <Typography sx={{marginLeft:'10px',marginRight:'10px'}}>{user.data.userName}</Typography>
        <IconButton color="inherit" onClick={handleLogout}>
        <Logout style={{color:'white'}} /> 
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
      <List sx={{height:'700px'}}>
      <SidebarDashE3/>
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
        width:'100%',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar/>
<Container maxWidth="none" sx={{ mt: 4}} >
<form onSubmit={handleSubmit}>
    <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
    <Grid item xs={12}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                     name='expireDate' 
                     label='Date'
                     value={dayjs(planingDate)}
                     onChange={(date)=>handlePlanningDateChange(date)}
                     sx={{ width: '100%', backgroundColor:'white' }}  
                     format='DD/MM/YYYY'     
               />
                  </DemoContainer>
                  </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
      <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="reason">Reason</InputLabel>
                  <Select
                      required
                     id="reason"
                     value={reason} 
                     onChange={(e)=>setReason(e.target.value)}
                     name="reason"
                     label="Reason"
                  >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Maintenance">Maintenance</MenuItem>
                  </Select>
                 </FormControl> 
      </Grid>
      <Grid item xs={6}>
        {
          reason === "Project"  && (
            <Autocomplete   
                                   options={projects}
                                   getOptionLabel={(option) => option.projectName}
                                   renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
                                   renderInput={(params) => <TextField {...params} label="Project Name"/>}
                                   onChange={(e,newValue)=> handleChangeProject(newValue? newValue :0)}
                                   inputValue={inputValueProject}
                               onInputChange={(event, newInputValue) => {
                                setInputValueProject(newInputValue);
                               }}
                               filterOptions={(options,{inputValue})=>{
                                 return options.filter(
                                   (option)=>
                                   option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                   option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                   option.description.toLowerCase().includes(inputValue.toLowerCase()) 
                                 )
                                }}
                                   sx={{  width: '100%', backgroundColor:'white' }} 
                                 />
          )
        }
        {
          reason === "Maintenance"  && (
            <Autocomplete       
            options={maintenance}
            getOptionLabel={(option) => option.serviceName}
            renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.serviceName}</Box>)}
            renderInput={(params) => <TextField {...params} label="Maintenance Number"/>}
            onChange={(e,newValue)=> handleChangeService(newValue? newValue :'')}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            filterOptions={(options,{inputValue})=>{
              return options.filter(
                (option)=>
                option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.serviceName.toLowerCase().includes(inputValue.toLowerCase()) 
              )
             }}
            sx={{  width: '100%', backgroundColor:'white' }} 
          />
          )
        }
      </Grid>
      <Grid item xs={12}>
      <div style={{display:'block',position:'fixed',zIndex:1,float:'right',right:'-5px'}}>
                    <section>
                   <BlackTooltip title="Add" placement="top">
            <IconButton onClick={addItem}>
            <Add className='btn1' style={{fontSize:'40px'}}/>  
            </IconButton>
          </BlackTooltip>    
                    </section>
          </div>
        <table className='tableInfo10'>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Status</th>
              <th>Task</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeArray?.map((row)=>(
                <tr key={row.idRow}>
              <td>    {
              row.employeeName !== "" ?
              (
                <div style={{display:'flex', gap:'80px', alignItems:'center'}}>
                 <TextField
                multiline 
                label='Employee Name'
                value={row.employeeName}
                sx={{  width: '100%', backgroundColor:'white' }} 
                />
                </div>
              )
               : 
              (
                <Autocomplete
                  disableClearable
                                     options={filterItemInformation}
                                     getOptionLabel={(option) => option.employeeName}
                                     renderOption={(props,option)=> (<Box {...props} sx={{backgroundColor:'#f2f2f2'}}>{option.employeeName}</Box>)}
                                     renderInput={(params) =>
                                     <TextField {...params} required 
                                     />}
                                     onChange={(e,newValue)=>handleChangeEmployee(row.idRow,newValue)}
                                     sx={{ width: '100%', backgroundColor:'white' }} 
                                   />
              )
            }</td>
            <td>
            <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="unit">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={row.status} 
                     onChange={(e)=>handleChange(row.idRow,'status',e.target.value)}
                     name="status"
                     label="Status"
                  >
                   <MenuItem value="1">1H</MenuItem>
                        <MenuItem value="2">2H</MenuItem>
                        <MenuItem value="3">3H</MenuItem>
                        <MenuItem value="4">4H</MenuItem>
                        <MenuItem value="Half-Day">Half-Day</MenuItem>
                        <MenuItem value="6">6H</MenuItem>
                        <MenuItem value="7">7H</MenuItem>
                        <MenuItem value="8">8H</MenuItem>
                        <MenuItem value="9">9H</MenuItem>
                        <MenuItem value="Full-Day">Full-Day</MenuItem>
                  </Select>
                 </FormControl> 
            </td>
            <td>
            <TextField 
                  id='planingTask'
                  name='planingTask' 
                  multiline
                  rows={2}
                  value={row.planingTask}
                  label='Task'
                  onChange={(e)=> handleChange(row.idRow,'planingTask',e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
            </td>
            <td>
            <TextField 
                  id='planingDescription'
                  name='planingDescription' 
                  multiline
                  rows={2}
                  value={row.planingDescription}
                  label='Description'
                  onChange={(e)=> handleChange(row.idRow,'planingDescription',e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
            </td>
            <td >
     <LightTooltip title="Delete" sx={{}}>
             <IconButton onClick={()=> deleteItem(row.idRow)} >
             <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
             </IconButton>
           </LightTooltip>
       </td>
            </tr>
              ))
            }
            
          </tbody>
        </table>
      </Grid>
      <Grid item xs={12}>
        {
    saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
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
    <IconButton onClick={handleCloseBack} style={{ position:'relative', float:'right'}}> 
                  <Close style={{color:'#202a5a'}}/>
    </IconButton>
    </BlackTooltip>  
    <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
      <Grid item xs={12} sx={{textAlign:'center'}}>
       <Typography>Do you want to stop creating Attendance ? </Typography>
       <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
      </Grid> 
      <br/>
      <Grid item xs={6}>
      <button type='submit' onClick={() => navigate('/TewmViewAdmin')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
      </Grid>
      <Grid item xs={6}>
      <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{width: '100%'}}>No</button>
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
          {loading?(<Loader/>
            ):(
          <div style={{justifyContent:'center',textAlign:'center'}}>
              <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
              <h2> Data Saved successfully</h2>
              <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
          <button onClick={()=> handleDecision('stay')} className='btnCustomer'>
            Add New
          </button>
          <button onClick={()=> handleDecision('previous')} className='btnCustomer'>
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
          {loading?(<Loader/>
            ):(
              <div style={{justifyContent:'center',textAlign:'center'}}>
              <p><CancelIcon style={{color:'red',height:'40px', width:'40px'}}/></p>
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

export default EmployeePlaningForm
