import React , { useEffect,useState } from 'react'
import axios from 'axios';
import { Checkbox , Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
function RecurringInformation() {
    const [recurring,setRecurring] = useState([])
    const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/recurringinvoice';
    useEffect(()=> {
    axios.get(apiUrl)
    .then(res => {
      // Handle the response data here
      setRecurring(res.data.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  },[])
  return (
    <>
        <div className='itemInfoContainer'>
        <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
        <Checkbox/>
      <Typography variant='h5'>All Recurring Invoice</Typography>
    </div>
               <div style={{height:'570px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
               {recurring?.map((row) => (
               <div className='itemInfoContainerContent1' key={row._id}>        
                 <div style={{display:'flex',lineHeight:'2px',fontSize:'1rem', gap:'5px',width:'100%'}}>
                 <Checkbox/>
                 <NavLink to={`/RecuringViewAdminAll/${row._id}`} className='LinkName' style={{width:'75%'}}>
                 <div style={{display:'flex', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
               <div className='itemInfoContainerContent'>
               <Typography>{row.customerID}</Typography>
               <Typography>{row.invoiceNumber}</Typography>
               </div>  
               <div>
               <Typography>{row.subTotal} <span data-prefix>$</span></Typography>
                 <Typography
        color={
          row.status === "Active"
          ? "green":
          row.status === "Close"
          ? "red":"black"
       }
        >
{row.status}
        </Typography>
               </div>
               </div>
               </NavLink>
               </div>                 
               </div>   
                        ))}
               </div>         
           </div>
    </>
  )
}

export default RecurringInformation
