import React , { useEffect,useState } from 'react'
import axios from 'axios';
import { Checkbox, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

function RetainerInformation() {
    const [retainer,SetRetainer] = useState([])
  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/retainerinvoice';
  useEffect(()=> {
  axios.get(apiUrl)
  .then(res => {
    // Handle the response data here
    SetRetainer(res.data.data);
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
      <Typography variant='h5'>All Retainer Invoice</Typography>
    </div>
           <div style={{height:'570px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
           {retainer?.map((row) => (
           <div className='itemInfoContainerContent1' key={row._id}>
             <div style={{display:'flex',lineHeight:'2px',fontSize:'1rem', gap:'5px',width:'100%'}}>
            <Checkbox />
            <NavLink to={`/RetainerViewAdminAll/${row._id}`} className='LinkName' style={{width:'100%'}}>
             <div style={{display:'flex', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
           <div className='itemInfoContainerContent'>
             <Typography>{row.customerID}</Typography>
               <Typography>{row.invoiceNumber}</Typography>
           </div>  
           <div>
           <Typography>{row.balanceDue} <span data-prefix>$</span></Typography>
                 <Typography
        color={
          row.status === "Paid-Partially"
          ? "green":row.status === "Paid"
          ? "lightGreen":"black"
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

export default RetainerInformation
