import React, { useEffect,useState } from 'react'
import '../Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Table, IconButton, styled,TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Add } from '@mui/icons-material';
import dayjs from 'dayjs';


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

function RecurringAllViewTable() {
  const [recurring,setRecurring] = useState([])
  
  const apiUrl = 'http://192.168.0.200:8080/endpoint/recurringinvoice';
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
const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`http://192.168.0.101:8080/endpoint/delete-recurringinvoice/${id}`);
    console.log(res.data.msg); // This will be the deleted document
    alert(res.data.msg); // This will be the deleted document
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
<div className='allTableContainer'>
      <TableContainer component={Paper}>
      <NavLink  className='ItemsName' style={{position:'relative',float:'right',margin:'10px'}}>
      <Tooltip title="Add">
            <IconButton>
            <Add className='btnCustomer'/> 
            </IconButton>
          </Tooltip>
      </NavLink>
<Table style={{backgroundColor:'white'}}>
  <TableHead >
    <TableRow>
    <TableCell><Checkbox /></TableCell>
      <TableCell align="center">Recurring #</TableCell>
      <TableCell align="center">Customer</TableCell>
      <TableCell align="center">Profile</TableCell>
      <TableCell align="center">Frequency</TableCell>
      <TableCell align="center">Next Invoice</TableCell>
      <TableCell align="center">Status</TableCell>
      <TableCell align="center">Amount</TableCell>
      <TableCell align="left">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {recurring?.map((row) => (
      <TableRow
        key={row._id} >
          <TableCell><Checkbox /></TableCell>
        <TableCell align="center">{row.invoiceNumber}</TableCell>
        <TableCell align="center">{row.customerID}</TableCell>
        <TableCell align="center">{row.customerProfile}</TableCell>
        <TableCell align="center">{row.repeat}</TableCell>
        <TableCell align="center">{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</TableCell>
        <TableCell align="center"> <Typography
        color={
          row.status === "Active"
          ? "green":
          row.status === "Close"
          ? "red":"black"
       }
        >
{row.status}
        </Typography></TableCell>
        <TableCell align="center">{row.subTotal} <span data-prefix>$</span></TableCell>
        <TableCell align="center" style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <NavLink to={`/RecuringViewAdminAll/${row._id}`} className='LinkName'>
          <ViewTooltip title="View">
                                      <IconButton>
                                      <VisibilityIcon style={{color:'#202a5a'}}/> 
                                      </IconButton>
                               </ViewTooltip>
          </NavLink>
            <span style={{display:'flex',gap:'10px',position:'relative'}}>
            <NavLink to={`/RecurringInvoiceFormUpdate/${row._id}`} className='LinkName'>
            <EditTooltip title="Edit"> 
                                  <IconButton>
                                  <EditIcon/>
                                  </IconButton>
         </EditTooltip>
           </NavLink>
           <DeleteTooltip title="Delete">
                                <IconButton onClick={() => handleDelete(row._id)} >
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
                              </DeleteTooltip>  </span>
        </TableCell>
       </TableRow>
    ))}
  </TableBody>
      
  </Table>
  </TableContainer>
        </div>
    </>
  )
}

export default RecurringAllViewTable
