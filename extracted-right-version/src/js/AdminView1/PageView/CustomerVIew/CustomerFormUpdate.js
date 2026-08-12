import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {MenuItem,Grid, IconButton,Paper,Backdrop, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Modal, Box,Divider } from '@mui/material'
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
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Logout from '@mui/icons-material/Logout';
import { Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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
function CustomerFormUpdate() {
    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);

    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      const fetchUser = async () => {
        if (storesUserId) {
       if (navigator.onLine) {
         try {
           const res = await  axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
    const [customerType,setCustomerType]= useState("");
    const [designation,setDesignation]= useState("");
    const [customerFirstName,setCustomerFirstName]= useState("");
    const [customerLastName,setCustomerLastName]= useState("");
    const customerFullName = customerFirstName !== '' ? designation+ '. '+ customerFirstName + (" " ) + customerLastName:'';
    const [companyName,setCompanyName]=useState("");
    const [customerEmail,setCustomerEmail]=useState("");
    const [customerCompanyPhone,setCustomerCompanyPhone]=useState("");
    const [customerPhone,setCustomerPhone]=useState("");
    const [currency,setCurrency]=useState("");
    const [paymentTerms,setPaymentTerms]=useState("");
    const [billingAddress,setBillingAddress]=useState("");
    const [billingCity,setBillingCity]=useState("");
    const [indexId,setIndexID]=useState("");
    const [Customer,setCustomer]=useState("");
    const [shippingAddress,setShippingAddress]=useState("");
    const [shippingCity,setShippingCity]=useState("");
    const [credit,setCredit]=useState("");
    const [customerDescription,setCustomerDescription]=useState("");
    const [reason,setReason]= useState("");

    useEffect(()=>{
      const fetchData = async () => {
       if (navigator.onLine) {
         try {
           const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-customer/${id}`)
           setCustomerType(res.data.data.customerType);
           setDesignation(res.data.data.designation);
           setDesignation(res.data.data.designation);
           setCustomerFirstName(res.data.data.customerFirstName);
           setCustomerLastName(res.data.data.customerLastName);
           setCompanyName(res.data.data.companyName);
           setCustomer(res.data.data.Customer);
           setCustomerEmail(res.data.data.customerEmail);
           setCustomerCompanyPhone(res.data.data.customerCompanyPhone);
           setCurrency(res.data.data.currency);
           setCredit(res.data.data.credit);
           setPaymentTerms(res.data.data.paymentTerms);
           setBillingAddress(res.data.data.billingAddress);
           setBillingCity(res.data.data.billingCity);
           setShippingAddress(res.data.data.shippingAddress);
           setShippingCity(res.data.data.shippingCity);
           setCustomerDescription(res.data.data.customerDescription);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       }else{
          const resLocal = await db.customerSchema.get({_id:id})
          setIndexID(resLocal.id);
          setCustomerType(resLocal.customerType);
          setDesignation(resLocal.designation);
          setCustomerFirstName(resLocal.customerFirstName);
          setCustomerLastName(resLocal.customerLastName);
          setCompanyName(resLocal.companyName);
          setCustomer(resLocal.Customer);
          setCustomerEmail(resLocal.customerEmail);
          setCustomerCompanyPhone(resLocal.customerCompanyPhone);
          setCurrency(resLocal.currency);
          setPaymentTerms(resLocal.paymentTerms);
          setBillingAddress(resLocal.billingAddress);
          setBillingCity(resLocal.billingCity);
          setShippingAddress(resLocal.shippingAddress);
          setShippingCity(resLocal.shippingCity);
          setCustomerDescription(resLocal.customerDescription);
       }
      }
      fetchData()
    },[id])

    const dateComment = new Date()
    const handleRadioChange = (e)=> {
      setCustomerType(e.target.value );
      setDesignation('');
      setCustomerFirstName('');
      setCustomerLastName('');
      setCompanyName('');
      setCustomerCompanyPhone('');
      setCustomerPhone('');
    }
    const [open1, setOpen1] = useState(false);

    const handleOpenUpdate = (e) => {
      e.preventDefault()
      setOpen1(true);
    };
    const handleCloseUpdate = () => {
      setOpen1(false);
    };
    
    const [openBack, setOpenBack] = useState(false);

    const handleOpenBack = (e) => {
      e.preventDefault()
      setOpenBack(true);
    };
    const handleCloseBack = () => {
      setOpenBack(false);
    };
    {/** Loading Start */}

    const [loading,setLoading]= useState(false);
    const [loadingOpenModal,setLoadingOpenModal] = useState(false);
    const [ErrorOpenModal,setErrorOpenModal] = useState(false);

    const handleOpen = () => {
      setOpen1(false);
      setLoadingOpenModal(true);
      setLoading(true);

      setTimeout(()=> {
        setLoading(false);
      }, 500)

    }
    const handleError = () => {
      setOpen1(false);
      setErrorOpenModal(true);
      setLoading(true);
      setTimeout(()=> {
        setLoading(false);
     }, 500)
    }
    const handleClose = () => {
      navigate(-1);
    }
    const handleCloseError = () => {
      setErrorOpenModal(false);
    }
    {/** Loading End */}

    const [hideBack,setHideBack] = useState('');
    const handleCreateComment = async () => {
      const data = {
        idInfo:id,
        person:user.data.userName + ' Modify ' + Customer,
        reason,
        dateNotification:dateComment
      };
      try {
         await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification/',data)
      
      } catch (error) {
        console.log(error)
      }
    } 
    const handleSubmitEdit = async(e) => {
        e.preventDefault();
        const data = {
          _id:id,
          customerType,designation,customerFirstName,
          customerLastName,customerFullName, companyName,
          customerEmail, customerCompanyPhone,customerPhone,
          currency, paymentTerms,billingAddress,
          billingCity,shippingAddress,shippingCity,Customer,customerDescription,updateS:false
        }; 
       if (navigator.onLine) {
         try {
           const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-customer/${id}`,data)
           if (res) {
             handleCreateComment();
             handleOpen();
             await db.customerSchema.update(indexId,{...data, updateS: true})
           }
         } catch (error) {
           if (error) {
             handleError();
            }
         }
       }
       else{
        await db.customerSchema.update(indexId,data)
        handleOpen();
      }
    };
    const handleLogout = () => {
      localStorage.removeItem('user');
      dispatch(logOut());
      navigate('/')
    }
    const [sideBar, setSideBar] = React.useState(true);
    const toggleDrawer = () => {
     setSideBar(!sideBar);
    };
  return (
    <div className='Homeemployee'>
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
              update customer     
                     </Typography>
                     {
        hideBack === 'true'? 
        <IconButton>
        <ArrowBack style={{color:'white'}} />
        </IconButton>
      :
        <IconButton onClick={handleOpenBack}>
        <ArrowBack style={{color:'white'}} />
        </IconButton>
      }
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
          <SidebarDash1/>
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
    
    <div >
       <form onSubmit={handleOpenUpdate}>
 <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2} component={Paper}> 
 <Grid item xs={12} style={{display:'flex'}}>
      <FormControl>
           <FormLabel>Type</FormLabel>
           <RadioGroup 
           row 
           required
           name="customerType"
           value={customerType}
           onChange={handleRadioChange}>
            <FormControlLabel value='Individual' control={<Radio/>} label="Individual"/>
            <FormControlLabel value='Business' control={<Radio/>} label="Business"/>
           </RadioGroup>
      </FormControl>
      <div>
      <h2> {customerType} </h2>
      </div>
    </Grid>
    <Grid item xs={2}>
    <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="designation">Designation</InputLabel>
                  <Select
     required={customerType === 'Individual'}
                     id="designation"
                     value={designation} 
                     onChange={(e)=>setDesignation(e.target.value)}
                     name="designation"
                     label="Designation"
                  >
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Ms">Ms</MenuItem>
                   </Select>
                 </FormControl>  
    </Grid>
    <Grid item xs={3}>
    <TextField 
     required={customerType === 'Individual'}
                  id='customerFirstName'
                  name='customerFirstName' 
                  value={customerFirstName}
                  label='First Name'
                  onChange={(e)=>setCustomerFirstName(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={3}>
    <TextField 
     required={customerType === 'Individual'}
                  id='customerLastName'
                  name='customerLastName' 
                  value={customerLastName}
                  label='Last Name'
                  onChange={(e)=>setCustomerLastName(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={4}>
    <TextField 
     required={customerType === 'Individual'}
                  id='customerFullName'
                  name='customerFullName' 
                  value={customerFullName}
                  label='Full Name'
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={4}>
    <TextField 
     required={customerType === 'Business'}
                  id='companyName'
                  name='companyName' 
                  value={companyName}
                  label='Company Name'
                  onChange={(e)=>setCompanyName(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ minWidth: "97%" }}>
                  <InputLabel id="Customer">Select Name for Billing</InputLabel>
                  <Select
                  required
                     id="Customer"
                     value={Customer} 
                     onChange={(e)=>setCustomer(e.target.value)}
                     name="Customer"
                     label="Select Name for Billing"
                  >
                         <MenuItem value={companyName}>{companyName}</MenuItem>
                        <MenuItem value={designation + '. ' + customerFirstName + ' ' + customerLastName}>{designation + '. ' + customerFirstName + ' ' + customerLastName}</MenuItem>
                 </Select>
                 </FormControl> 
    </Grid>
    
    <Grid item xs={4}>
    <TextField 
     required
                  id='customerEmail'
                  name='customerEmail' 
                  value={customerEmail}
                  placeholder='Example: example@gmail.com'
                  label='Email'
                  onChange={(e)=>setCustomerEmail(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={3}>
    <TextField 
                  id='customerCompanyPhone'
                  name='customerCompanyPhone' 
                  label='Phone Number 1'
                  type='number'
                  value={customerCompanyPhone}
                  onChange={(e)=>setCustomerCompanyPhone(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={3}>
    <TextField 
                  id='customerPhone'
                  name='customerPhone' 
                  label='Phone Number 2'
                  value={customerPhone}
                  type='number'
                  onChange={(e)=>setCustomerPhone(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={3}>
    <FormControl sx={{ minWidth: "97%" }}>
                  <InputLabel id="currency">Currency</InputLabel>
                  <Select
                      required
                     id="currency"
                     value={currency} 
                     onChange={(e)=>setCurrency(e.target.value)}
                     name="currency"
                     label="currency"
                  >
                        <MenuItem value="USD Dollar">USD Dollar</MenuItem>
                        <MenuItem value="FC Congolais">FC Congolais</MenuItem>
                  </Select>
                 </FormControl> 
    </Grid>
    <Grid item xs={3}>
    <FormControl sx={{ minWidth: "97%" }}>
                  <InputLabel id="paymentTerms">Payment Terms</InputLabel>
                  <Select
                      required
                     id="paymentTerms"
                     value={paymentTerms} 
                     onChange={(e)=>setPaymentTerms(e.target.value)}
                     name="paymentTerms"
                     label="Payment Terms"
                  >
                        <MenuItem value="Net 3">Net 3</MenuItem>
                        <MenuItem value="Net 10">Net 10</MenuItem>
                        <MenuItem value="Net 15">Net 15</MenuItem>
                        <MenuItem value="Net 20">Net 20</MenuItem>
                        <MenuItem value="Net 25">Net 25</MenuItem>
                        <MenuItem value="Due end of the month">Due end of the month</MenuItem>
                        <MenuItem value="Due on Receipt">Due on Receipt</MenuItem>
                  </Select>
                 </FormControl> 
    </Grid>
    <Grid item xs={6}>
    <TextField 
     required
                  id='billingAddress'
                  name='billingAddress' 
                  value={billingAddress}
                  label='Billing Address'
                  onChange={(e)=>setBillingAddress(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
     required
                  id='billingCity'
                  name='billingCity' 
                  value={billingCity}
                  label='Billing City'
                  onChange={(e)=>setBillingCity(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
     required
                  id='shippingAddress'
                  name='shippingAddress' 
                  value={shippingAddress}
                  label='Shipping Address'
                  onChange={(e)=>setShippingAddress(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
     required
                  id='shippingCity'
                  name='shippingCity' 
                  value={shippingCity}
                  label='Shipping City'
                  onChange={(e)=>setShippingCity(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    {/**
     * <Grid item xs={6}>
    <TextField 
     required
                  id='credit'
                  name='credit' 
                  value={credit}
                  label='Credit'
                  onChange={(e)=>setCredit(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
     */}
    
    <Grid item xs={12}>
    <TextField 
                  id='customerDescription'
                  name='customerDescription' 
                  value={customerDescription}
                  label='Description'
                  multiline
                  rows={4}
                  onChange={(e)=>setCustomerDescription(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={12}>
    <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button>
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
        <IconButton onClick={handleCloseBack} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
           <Typography>Do you want to stop updating customer ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop updating without saving, all your changes will be lost</span></p>
          </Grid> 
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/CustomerViewAdmin')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
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
          <Modal  
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdate} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmitEdit}>
             <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='comments'
                  name='comments' 
                  multiline
                  rows={4}
                  value={reason}
                  onChange={(e)=>setReason(e.target.value)}
                  label='Comments'
                  sx={{ width:'100%', backgroundColor:'white' }}       
              />
          </Grid>
          <br/>
          <Grid item xs={12}>
   <button type='submit' className='btnCustomer' style={{width: '100%'}}>Save</button>
              </Grid>
        </Grid>
          </form>
       
        </Box>
      </Modal>
 </div>
  )
}

export default CustomerFormUpdate
