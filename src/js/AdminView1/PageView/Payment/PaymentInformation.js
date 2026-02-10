import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell,TableRow, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Modal, Backdrop, Fade, Box,OutlinedInput,InputAdornment,Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Tabs, Tab  } from '@mui/material';
import { NavLink,useNavigate,Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import db from '../../../dexieDb';

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

function PaymentInformation({onId}) {
    const [payment, setPayment] = useState([])
    const [payment2, SetPayment2] = useState({})
    const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/payment';
    useEffect(()=> {
      const fetchPayment = async () => {
      if (navigator.onLine) {
          try {
            const res = await axios.get(apiUrl)
            setPayment(res.data.data.reverse())
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      } else {
        const offLineCustomer1 = await db.paymentSchema.toArray();
      setPayment(offLineCustomer1.reverse())
      }
      }
      fetchPayment()
    },[])
  const [show, setShow] = useState(1);
const handleShow = (e) =>{
    setShow(e);
}
const [value,setValue] = useState(0);
const [value2,setValue2] = useState(0);
useEffect(()=>{
  const selectedIndex = payment.findIndex(row=> row._id === onId);
  if (selectedIndex !== -1) {
    setValue(selectedIndex)
  }
},[payment,onId])
const handleChange = (e, newValue) => {
  setValue(newValue)
}
const handleChange2 = (e, newValue) => {
  setValue2(newValue)
}

const [search,setSearch] =useState('');
const handleSearch = (e) => {
  const value = e.target.value
  setSearch(value)
}

const newArray = search !== ''?payment.filter((row)=>
row.paymentNumber.toString().includes(search)||
row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) 
 ):payment
  return (
    <div> 
    { show ===1  ?   (
        <div className='itemInfoContainer'>   
       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All Payment</Typography>
            </div>
       <div style={{padding:'20px'}}>
        <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
       </div>
           </div>
               <div style={{height:'513px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
                <Tabs 
                value={value}
                onChange={handleChange} 
                orientation="vertical"
                sx={{
                  '& .MuiTabs-indicator':{
                    backgroundColor:'white',
                    height:'0px'
                  }
                }}
                >    
                {payment?.map((row,index) => (
                  <Tab
                  key={index}
                  label={row.customerName.customerName + ' | ' + row.paymentNumber}
                  component={Link}
                  to={`/PaymentInformationView/${row._id}`}
                  sx={{
                    '&.Mui-selected':{
                      color:'white',
                      backgroundColor:'#30368a',
                      borderRadius:'10px'
                    }
                  }}
                  />
                 ))}
                   </Tabs>               
               </div>         
           </div>
           )
           :''
         }
{ show === 2  ?     
( <div className='itemInfoContainer'>
<Grid container style={{alignItems:'center',padding:'10px'}} spacing={3}>
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
   <IconButton onClick={() => handleShow(1)} style={{ position:'relative', float:'right'}}> 
                 <Close style={{color:'#30368a'}}/>
   </IconButton>
   </ViewTooltip> 
 </Grid>
</Grid>
   
       <div style={{height:'558px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
       <Tabs 
                value={value2}
                onChange={handleChange2} 
                orientation="vertical"
                sx={{
                  '& .MuiTabs-indicator':{
                    backgroundColor:'#30368a'
                  }
                }}
                >    
                {newArray?.map((row,index) => (
               <Tab
               key={index}
               label={row.customerName.customerName + ' | ' + row.paymentNumber}
               component={Link}
               to={`/PaymentInformationView/${row._id}`}
               sx={{
                 '&.Mui-selected':{
                   color:'#30368a'
                 }
               }}
               />
                 ))}
                   </Tabs>
               </div>           
           </div>)
           :''
         }
        </div>
  )
}

export default PaymentInformation
