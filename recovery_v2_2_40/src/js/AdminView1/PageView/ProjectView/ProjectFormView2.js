import React, { useEffect,useState } from 'react';
import SideMaintenance from '../../../component/SideMaintenance';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton,Paper,TextField, FormControl, InputLabel, Select, Typography,styled, Box, Autocomplete,Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment  } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios'
import { Add, ArrowUpwardOutlined} from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Delete from '@mui/icons-material/Delete';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import dayjs from 'dayjs';
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


const ProjectFormView2 = ({onCreateOption, onClose,onId,onEstimate}) => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
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
    const [customerName,setCustomerName]= useState({});
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("");
    const [phase,setPhase]=useState([]);
    const [description,setDescription]=useState("");
    const [startDate,setStartDate] = useState(()=>{
      const date = new Date()
      return date
    });
    const [projectNumber,setProjectNumber] = useState(0);
    useEffect(()=>{
      const fetchlastNumber = async () => {
       if (navigator.onLine) {
         try {
           const res = await axios.get('http://192.168.0.200:8080/endpoint/get-last-saved-project')
           setProjectNumber(parseInt(res.data.projectNumber) + 1)
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       } else {
        const offLineCustomer1 = await db.projectSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row)=> row.projectNumber > max.projectNumber? row : max,offLineCustomer1[0] )
        setProjectNumber(parseInt(latest.projectNumber) + 1)
       }
      }
      fetchlastNumber()
                  },[])
    const [CustomerNameInfo,setCustomerNameInfo]= useState('')
    const [invoiceDate,setInvoiceDate] =useState(()=>{
      const date = new Date()
      return date
    });
    useEffect (() => {
      const fetchRelated = async () => {
       if (onId) {
      if (navigator.onLine) {
           try {
             const resInvoice = await axios.get(`http://192.168.0.200:8080/endpoint/get-invoice/${onId}`)
             setCustomerNameInfo(resInvoice.data.data.customerName.customerName);
             setCustomerName(resInvoice.data.data.customerName);
             setInvoiceDate(dayjs(resInvoice.data.data.invoiceDate));
           } catch (error) {
             console.log('no related')
           }
      } else {
        const resLocal = await db.invoiceSchema.get({_id:onId})
        setCustomerNameInfo(resLocal.customerName.customerName);
        setCustomerName(resLocal.customerName);
        setInvoiceDate(dayjs(resLocal.invoiceDate));
      }
       } else if (onEstimate) {
       if (navigator.onLine) {
         try {
           const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-estimation/${onEstimate}`)
           setCustomerNameInfo(res.data.data.customerName.customerName);
           setCustomerName(res.data.data.customerName);
           setInvoiceDate(dayjs(res.data.data.estimateDate));
         } catch (error) {
           console.log('no related')
         }
       } else {
        const resLocal = await db.estimateSchema.get({_id:onEstimate})
        setCustomerNameInfo(resLocal.customerName.customerName);
           setCustomerName(resLocal.customerName);
           setInvoiceDate(dayjs(resLocal.estimateDate));
       }
       }
      }
      fetchRelated()
      },[])
   
      const handleAdd=()=>{
          const abc=[...phase,[]]
          setPhase(abc)
      };
      const handleChange=(onChangeValue,i)=>{
       const inputData=[...phase]
       inputData[i]=onChangeValue.target.value.toUpperCase();
       setPhase(inputData)
      };
      const handleDelete=(i)=>{
          const deletePhase=[...phase]
          deletePhase.splice(i,1)
          setPhase(deletePhase)  
      };
      
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
  const dateComment = dayjs(Date.now()).format('DD/MM/YYYY')
  const Create = {person: user.data.userName+ ' CREATED ',
                 projectName,
                 dateComment
               } 
               const [saving,setSaving] = useState('')
const handleSubmit =async (e)=>{
    e.preventDefault();
    setSaving('true')
    const data = {
      _id:v4(),
      customerName,
      projectName,
      status,
      phase,
      description,
      startDate,
      visitDate:invoiceDate,
      projectNumber,synced: false
    }; 
    if (navigator.onLine) {
      try{
        const res = await axios.post('http://192.168.0.200:8080/endpoint/create-projects',data);
        if (res) {
          // Open Loading View
          handleOpen();
          await db.projectSchema.add({...res.data.data, synced: true })
          onCreateOption(res.data.data)
        }
      }catch(error){
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await db.projectSchema.add(data)
      handleOpen();
    }
  }

  return (
 <div >
    <form onSubmit={handleSubmit} >
    <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
        <Grid item xs={12}>
        <TextField 
                  disabled
                  id='customerName'
                  name='customerName' 
                  label='Customer Name'
                  value={CustomerNameInfo}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
        </Grid>
        <Grid item xs={6}> 
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='visitDate' 
                    label='Visit Date'
                    value={dayjs(invoiceDate)}
                    sx={{ width: '100%', backgroundColor:'white' }}       
                    format='DD/MM/YYYY'
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
        <Grid item xs={6}> 
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='startDate' 
                    label='Start Date'
                    onChange={(date)=>setStartDate(date)}
                    sx={{ width: '100%', backgroundColor:'white' }}
                    format='DD/MM/YYYY'       
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={6}>
                <TextField       
                required
                  id='ProjectName'
                  name='ProjectName' 
                  value={projectName}
                  label='Project Name'
                  onChange={(e)=>setProjectName(e.target.value.toUpperCase())}
                  sx={{ width: '100%', backgroundColor:'white' }}      
                />
               </Grid>
               <Grid item xs={6}> 
               <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <InputLabel htmlFor="projectNumber">Project Number</InputLabel>
                <OutlinedInput
                 type='number'
                 id='projectNumber'
                 name='projectNumber' 
                 label='Project Number'
                 value={projectNumber}
                 onChange={(e)=>setProjectNumber(e.target.value)}
                startAdornment={<InputAdornment position="start">P-00</InputAdornment>}
                />
               </FormControl>
               </Grid>
               <Grid item xs={12}>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <h3>Phase</h3>
    <Add className='btnCustomer' onClick={handleAdd}/>
    </div>
    </Grid>
    <Grid item xs={12}>
    {
        phase.map((data,i)=>
            <div key={i} style={{display:'flex', alignItems:'center', padding:'10px'}}> 
             <Grid container style={{alignItems:'center'}} spacing={2}>
       <Grid item xs={4}> 
       <TextField 
       name="phase" id="phase"
       label='Phase'
       value={data} onChange={(e)=>handleChange(e,i)}
       sx={{ width: '100%', backgroundColor:'white' }} 
       />
       </Grid>
       <Grid item xs={2}> 
       <Delete className='btnCustomer' onClick={()=>handleDelete(i)}/>
       </Grid>
       </Grid>
         </div>
        )
    }
    </Grid>
    <Grid item xs={12}> 
               <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={status} 
                     onChange={(e)=>setStatus(e.target.value)}
                     name="status"
                     label="status"
                     defaultValue="Pending"
                  >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="On-Going">On-Going</MenuItem>
                        <MenuItem value="Stopped">Stopped</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                 </FormControl>
               </Grid>
               <Grid item xs={12}>
    <TextField 
                  id='description'
                  name='description' 
                  value={description}
                  label='Description'
                  multiline
                  rows={4}
                  onChange={(e)=>setDescription(e.target.value.toUpperCase())}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={12}>
    {
        saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
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

export default ProjectFormView2
