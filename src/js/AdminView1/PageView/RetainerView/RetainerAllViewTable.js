import React, { useEffect,useState } from 'react'
import '../Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import {Table,IconButton, styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import { Add } from '@mui/icons-material';

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

function RetainerAllViewTable() {
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
const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-retainerinvoice/${id}`);
    alert(res.data.msg); // This will be the deleted document
  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
<div className='allTableContainer'>
      <TableContainer component={Paper}>
      <NavLink to="/RetainerInvoiceForm" className='ItemsName' ></NavLink> 
      <div style={{position:'relative',float:'right',margin:'10px'}}>
      <Tooltip title="Add">
            <IconButton>
            <Add className='btnCustomer'/> 
            </IconButton>
          </Tooltip>
          </div>
 <Table style={{backgroundColor:'white'}}>
  <TableHead >
    <TableRow>
    <TableCell><Checkbox /></TableCell>
      <TableCell align="center">Retainer #</TableCell>
      <TableCell align="center">Customer</TableCell>
      <TableCell align="center">Reference #</TableCell>
      <TableCell align="center">Status</TableCell>
      <TableCell align="center">Retainer Amount</TableCell>
      <TableCell align="center">balance</TableCell>
      <TableCell align="left">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {retainer?.map((row) => (
      <TableRow key={row._id}>
         <TableCell><Checkbox /></TableCell>
        <TableCell align="center">{row.invoiceNumber}</TableCell>
        <TableCell align="center">{row.customerID}</TableCell>
        <TableCell align="center">{row.referenceNumber}</TableCell>
        <TableCell align="center"><Typography
        color={
          row.status === "Paid-Partially"
          ? "green":row.status === "Paid"
          ? "lightGreen":"black"
       }>
{row.status}
        </Typography></TableCell>
        <TableCell align="center">{row.subTotal} <span data-prefix>$</span></TableCell>
        <TableCell align="center">{row.balanceDue} <span data-prefix>$</span></TableCell>
        <TableCell align="center" style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <NavLink to={`/RetainerViewAdminAll/${row._id}`} className='LinkName'>
          <ViewTooltip title="View">
                                      <IconButton>
                                      <VisibilityIcon style={{color:'#202a5a'}}/> 
                                      </IconButton>
                               </ViewTooltip>
          </NavLink>
          <span style={{display:'flex',gap:'10px',position:'relative'}}>
          <NavLink to={`/RetainerInvoiceFormUpdate/${row._id}`} className='LinkName'>
          <EditTooltip title="Edit"> 
                                  <IconButton>
                                  <EditIcon/>
                                  </IconButton>
         </EditTooltip>
           </NavLink>
           <DeleteTooltip title="Delete">
                                <IconButton onClick={() => handleDelete(row._id,row.invoiceNumber)} >
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
                              </DeleteTooltip> 
            </span>
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

export default RetainerAllViewTable
