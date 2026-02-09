import React, { useEffect,useState }  from 'react'
import '../Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, Outlet } from 'react-router-dom';
import {Table,IconButton, styled,TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
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
function InvoiceAllViewTable() {
  {/** Get Invoice */}
  const [invoice,setInvoice] = useState([]);
  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/invoice';
  useEffect(()=> {
  axios.get(apiUrl)
  .then(res => {
    // Handle the response data here
    setInvoice(res.data.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
},[])
{/** End Get Invoice */}
{/** Get Expenses */}
const [expenses,setExpenses] = useState([])
useEffect(()=> {
axios.get('https://globalgate-backend-production.up.railway.app/endpoint/dailyexpense')
.then(res => {
  // Handle the response data here
  setExpenses(res.data.data);
})
.catch(error => {
  // Handle errors
  console.error('Error fetching data:', error);
});
},[])
{/** End Get Expenses */}
{/** Convert Date */}
{/** Convert Date */}
{/** Delete Function */}
  const handleDelete = async (id) => {
    const InvDelete = invoice.filter((row)=> row._id === id)
    const idRef = expenses?.filter((row)=>
      InvDelete?.find((name)=>
    { return name.invoiceNumber === row.referenceNumber}
    ))          .map((row)=>row._id)
    const RefId =idRef.toString()
    try {
      const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-dailyexpense/${RefId}`);
      alert(res.data.msg); // This will be the deleted document
    } catch (error) {
      console.error(error);
    }
  try {
    const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-invoice/${id}`);
    alert(res.data.msg); // This will be the deleted document
  } catch (error) {
    console.error(error);
  }
  };
{/** End Delete Function */}
  return (
    <div>
<div className='allTableContainer'>
      <TableContainer component={Paper}>
      <NavLink to="/InvoiceForm" className='ItemsName' style={{position:'relative',float:'right',margin:'10px'}}></NavLink>
      <div style={{position:'relative',float:'right',margin:'10px'}}>
      <ViewTooltip title="Add">
            <IconButton>
            <Add className='btnCustomer'/> 
            </IconButton>
          </ViewTooltip>
      </div>
      <Table style={{backgroundColor:'white'}}>
  <TableHead>
    <TableRow>
     <TableCell><Checkbox /></TableCell>
      <TableCell align="center">Date</TableCell>
      <TableCell align="center">Invoice #</TableCell>
      <TableCell align="center">Customer</TableCell>
      <TableCell align="center">Status</TableCell>
      <TableCell align="center">Due Date</TableCell>
      <TableCell align="center">Invoice Amount</TableCell>
      <TableCell align="left">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {invoice?.map((row) => (
      <TableRow key={row._id}>
        <TableCell><Checkbox /></TableCell>
        <TableCell align="center">{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</TableCell>
        <TableCell align="center">{row.invoiceNumber}</TableCell>
        <TableCell >{row.customerName.customerFullName?row.customerName.customerFullName: row.customerName.companyName}</TableCell>
        <TableCell align="center"> <Typography
        color={
          row.status === "Draft"
          ? "gray":row.status === "Sent"
          ? "blue":
          row.status === "Decline"
          ? "red":
          row.status === "Pending"
          ? "green":"black"
       }
        >
{row.status}
        </Typography>
          </TableCell>
        <TableCell align="center">{dayjs(row.invoiceDueDate).format('DD/MM/YYYY')}</TableCell>
        <TableCell align="center"><span data-prefix>$</span> {row.subTotal}</TableCell>
        <TableCell align="center" style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <NavLink to={`/InvoiceViewAdminAll/${row._id}`} className='LinkName'>
          <ViewTooltip title="View">
                                      <IconButton>
                                      <VisibilityIcon style={{color:'#202a5a'}}/> 
                                      </IconButton>
                               </ViewTooltip>
         </NavLink>
           <span style={{display:'flex',gap:'10px',position:'relative'}}>
           <NavLink className='LinkName'>
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
  </div>
  )
}

export default InvoiceAllViewTable
