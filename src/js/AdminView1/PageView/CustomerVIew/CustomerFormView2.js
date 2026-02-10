import React, { useEffect, useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Checkbox, MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Modal, Backdrop, Fade, Box } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
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
const CustomerFormView2 =({onCreateOption, onClose})=> {
  
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
    const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/create-customer';
    const [customerType,setCustomerType]= useState(true);
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
    const [shippingAddress,setShippingAddress]=useState("");
    const [shippingCity,setShippingCity]=useState("");
    const [Customer,setCustomer]=useState("");
    const [customerDescription,setCustomerDescription]=useState("");
    const dateComment = new Date()
    const handleRadioChange = (e)=> {
        setCustomerType(e.target.value );
      }
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
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleCreateNotification = async (ReferenceInfo) => {
    const data = {
      idInfo: ReferenceInfo,
      person:user.data.userName + ' Created ',
      reason:Customer,
      dateNotification:dateComment
    }
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
          customerType,designation,customerFirstName, customerLastName,
          customerFullName,companyName,customerEmail,customerCompanyPhone,customerPhone,
          currency,paymentTerms, billingAddress,billingCity,
          shippingAddress,shippingCity,customerDescription,Customer   
        }; 
        if (navigator.onLine) {
        try{
         const res = await axios.post(apiUrl,data);
         if (res) {
         handleOpen();
         onCreateOption(res.data.data)
         const ReferenceInfo = res.data.data._id
         handleCreateNotification(ReferenceInfo)
         }
        }catch(error){
          if (error) {
            handleError();
          }
        }  }else{
          await db.customerSchema.add(data)
          handleOpen();
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
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
        <Modal 
           open={loadingOpenModal}
           onClose={onClose}
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
              <button onClick={onClose} className='btnCustomer'>
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
                  <h2 style={{color:'red'}}>Saving Failed</h2>
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

export default CustomerFormView2
