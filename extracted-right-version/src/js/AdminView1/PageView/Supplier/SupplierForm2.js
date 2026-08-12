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

function SupplierForm2({onCreateOption, onClose}) {
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
      const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/create-Supplier';
      const [supplierName,setSupplierName]=useState("");
      const [storeName,setStoreName]=useState("");
      const [customerPhone1,setCustomerPhone1]=useState("");
      const [customerPhone2,setCustomerPhone2]=useState("");
      const [address,setAddress]=useState("");
      const [description,setDescription]=useState("");
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
        reason:storeName,
        dateNotification: new Date()
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
            supplierName,storeName,customerPhone1,customerPhone2,address,description,synced: false    
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
            await db.supplierSchema.add(data)
            handleOpen();
          }
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2} component={Paper}>
            <Grid item xs={6}>
                <TextField
                 name='supplierName' 
                 value={supplierName}
                 label='Supplier Name'
                 onChange={(e)=>setSupplierName(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
            required
                 name='storeName' 
                 value={storeName}
                 label='Store Name'
                 onChange={(e)=>setStoreName(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                 name='address' 
                 value={address}
                 label='Address'
                 onChange={(e)=>setAddress(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                 name='customerPhone1' 
                 value={customerPhone1}
                 label='Phone 1'
                 onChange={(e)=>setCustomerPhone1(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
            <TextField
                 name='customerPhone2' 
                 value={customerPhone2}
                 label='Phone 2'
                 onChange={(e)=>setCustomerPhone2(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={12}>
    <TextField 
                  id='description'
                  name='description' 
                  value={description}
                  label='Description'
                  multiline
                  rows={4}
                  onChange={(e)=>setDescription(e.target.value)}
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

export default SupplierForm2
