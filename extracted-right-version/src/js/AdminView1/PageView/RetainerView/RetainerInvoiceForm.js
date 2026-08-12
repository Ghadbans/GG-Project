import React, { useEffect,useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Tooltip, Table, TableBody,  TableHead, TableRow,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography } from '@mui/material'
import axios from 'axios'
import { Add, ArrowUpwardOutlined } from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function RetainerInvoiceForm() {
  const navigate = useNavigate();
  const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/create-retainerinvoice';
  const [customerID,setCustomerID] = useState("");
  const invoiceDate =dayjs('2023-10-02');
  const [referenceNumber,setReferenceNumber] = useState("");
  const [projectName,setProjectName] = useState("");
  const [invoiceSubject,setInvoiceSubject] = useState("");
  const [invoiceStatus,setInvoiceStatus] = useState("");
  const [invoiceDefect,setInvoiceDefect] = useState("");
  const [status, setStatus] = useState("")
 
  const [invoiceCounterRetainer, setInvoiceCounterRetainer] = useState(() => {
    const storedCounterRetainer = parseInt(localStorage.getItem('invoiceCounterRetainer'), 10) || 1;
    return storedCounterRetainer;
   });
   const invoiceNumber = `RET-${invoiceCounterRetainer.toString().padStart(5, '0')}`;
 const generateInvoiceNumber = () => {
  setInvoiceCounterRetainer(prevCounter => prevCounter + 1);
   return( invoiceNumber);
   };
   const [items, SetItems] = useState([
    {
      idRow: v4(),
      idTable: 1,
      itemName: "",
      itemDescription: "",
      itemDiscount:0,
      itemQty: 0,
      itemRate:0,
      itemAmount:0
  }
  ]);
   const [subTotal, setSubTotal] = useState(0);
   const [total, setTotal] = useState("");
   const [totalW, setTotalW] = useState("");
   const [balanceDue, setBalanceDue] = useState(0);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      customerID,
      invoiceNumber,
      referenceNumber,
      invoiceDate,
      invoiceSubject,
      invoiceStatus,
      invoiceDefect,
      projectName,
      status,
      items,
      subTotal,
      total,
      balanceDue,
      totalW,     
    }; 
    axios.post(apiUrl,data)
    .then((response) => {
      console.log('POST request successful!');
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};
 //addItem
 const addItem = () => {
  SetItems([...items, {
    idRow: v4(),
    idTable: 1,
    itemName: "",
    itemDescription: "",
    itemDiscount:0,
    itemQty: 0,
    itemRate:0,
    itemAmount:0,
    totalAmount:0,
    discount:0,
    percentage:0
   }]);

}
const handleChange = (e,i) => {
  const {name, value} = e.target;
  const list = [...items]
  list[i][name] = value;
  list[i]['totalAmount'] = list[i]['itemQty']*list[i]['itemRate'];
  list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
  list[i]['percentage'] = list[i]['discount']/100;
  list[i]['itemAmount'] = list[i]['totalAmount']-list[i]['percentage'];
  SetItems(list)
}
const deleteItem = idRow =>{
  SetItems (items => items.filter((Item)=> Item.idRow !==idRow));
};
const tableRows = items.map((Item, i)=>
{  return (     <tr key={i} id={Item.id}>
 <td >{Item.id = i + 1}</td>
 <td >
      <TextField 
                  required
                  name='itemName' id='itemName' 
                  label='Item Name'
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  sx={{ m: 1, width: '200px', backgroundColor:'white' }}       
              />
     </td>
     <td >
      <TextField 
      required
                  name='itemDescription' id='itemDescription' 
                  label='Description'
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  sx={{ m: 1, width: '250px', backgroundColor:'white' }}       
              />
      </td>
     <td >
      <TextField 
      required
                  name='itemQty' id='itemQty' 
                  label='Qty'
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
              />
      </td>
     <td >
       <TextField 
       required
                  name='itemRate' id='itemRate'
                  label='Rate'
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
              />
      </td>
      <td >
        <TextField 
              name='itemDiscount' id='itemDiscount'
                  label='Discount'
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
              />
        </td>
 <td id='amountTotalInvoice'>{Item.itemAmount}</td>
<td align="center" >
<Tooltip title="Delete">
        <IconButton onClick={()=> deleteItem(Item.idRow)}>
        <DeleteIcon  style={{cursor:'pointer'}}/> 
        </IconButton>
      </Tooltip>
  </td>
</tr>)});
useEffect (() => {
let row = document.querySelectorAll('#amountTotalInvoice')
let sum = 0
for (let i = 0; i < row.length; i++) {
if (row[i].id === 'amountTotalInvoice') {
  sum += isNaN(row[i].innerHTML) ? 0 : parseInt(row[i].innerHTML);
  setSubTotal(sum);
}
}
const calculateBalance = (balanceDue) => {
  balanceDue = subTotal-total
  setBalanceDue(balanceDue);
}
calculateBalance(balanceDue);
localStorage.setItem('invoiceCounterRetainer', invoiceCounterRetainer.toString());
});
  return (
    <>
       <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
 <div className='headername'>
   <Typography>Create Retainer Invoice</Typography>
 </div>
 <div className='box1'>
     <input type='checkbox' id='checkBox1'></input>
 <div id='centercontent'>
   <input type="text" placeholder="Type here..."/>
   <label htmlFor='checkBox1' className='iconesize'>
   <SearchIcon className='searchIcon1'/>
   </label>
 </div>
 </div>
 <div className='rightcontent'>
   <NotificationsNoneIcon className='iconesize'/>
   <Typography>User Name</Typography>
   <AccountCircleIcon className='iconesize'/>
 </div>
</div>
</div>
        <div className='invoice1'>
          <form onSubmit={handleSubmit}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div>
        <button type='submit' className='btnCustomer' style={{position:'fixed',left:'270px',zIndex:'1'}}>Save</button>
      </div>
      <Tooltip title="Back" placement='left'> 
          <IconButton onClick={() => navigate(-1)}>
          <Close className='btnCustomer' />
          </IconButton>
        </Tooltip>
    </div> 
         <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
         <Grid item xs={4}> 
         <TextField 
                   required
                  id='customerID'
                  name='customerID' 
                  label='Customer Name'
                  value={customerID}
                  onChange={(e)=>setCustomerID(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
              </Grid>
              <Grid item xs={4}> 
               <div style={{display:'flex', gap:'10px'}}>
               <TextField 
                  disabled
                  id='invoiceNumber'
                  name='invoiceNumber' 
                  label='invoiceNumber'
                  value={invoiceNumber}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               <Tooltip title="+1 from Preview Invoice" placement="top">
                <IconButton onClick={ ()=> generateInvoiceNumber()}>
                <ArrowUpwardOutlined className='btn1' style={{cursor:'pointer'}} />
                </IconButton>
              </Tooltip>
               </div>
              </Grid>
               <Grid item xs={4}> 
               <TextField 
                  id='referenceNumber'
                  name='referenceNumber' 
                  label='Reference Number'
                  value={referenceNumber}
                  onChange={(e)=>setReferenceNumber(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
              </Grid>
              <Grid item xs={4}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='invoiceDate' 
                    label='Date'
                    value={invoiceDate}
                    sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={4}> 
              <TextField 
                  id='projectName'
                  name='projectName' 
                  label='Associate Projects'
                  value={projectName}
                  onChange={(e)=>setProjectName(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={4}> 
              <TextField 
                  id='invoiceStatus'
                  name='invoiceStatus' 
                  label='Invoice Status'
                  value={invoiceStatus}
                  onChange={(e)=>setInvoiceStatus(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={4}> 
               <TextField 
                  id='invoiceSubject'
                  name='invoiceSubject' 
                  label='Subject'
                  value={invoiceSubject}
                  onChange={(e)=>setInvoiceSubject(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={4}> 
               <TextField 
                  id='invoiceDefect'
                  name='invoiceDefect' 
                  label='Defect'
                  value={invoiceDefect}
                  onChange={(e)=>setInvoiceDefect(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={4}> 
               <FormControl sx={{ m: 1, minWidth: "97%" }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={status} 
                     onChange={(e)=>setStatus(e.target.value)}
                     name="status"
                     label="status"
                     defaultValue="Paid-Partially"
                  >
                        <MenuItem value="Paid-Partially" sx={{color:'green'}}>Paid-Partially</MenuItem>
                        <MenuItem value="Paid" sx={{color:'lightGreen'}}>Paid</MenuItem>
                  </Select>
                 </FormControl>
               </Grid>
               <Grid item xs={12}>
                <div style={{position:'relative',float:'right'}}>
             <Tooltip title="Add" placement="left">
            <IconButton onClick={addItem}>
            <Add className='btn1'/>  
            </IconButton>
          </Tooltip>
          </div>
          <TableContainer>
       <table>
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Item</th>
                         <th>Description</th>
                         <th>Quantity</th>
                         <th>Rate</th>
                         <th>Discount %</th>
                         <th>Amount</th>
                         <th>Action</th>
                     </tr>
                 </thead>
            
                 <tbody>
                 
                 {tableRows}
                    
                 </tbody>
                 <tbody>
                 <tr>
                     <td  colSpan={6} align="center">SubTotal</td>
                     <td  align="center">
                            <TextField 
                          name="subTotal" id="subTotal"
                          label='SubTotal'
                          size="small"
                          value={subTotal} onChange={(e) => setSubTotal(e.target.value)}
                        sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                        />
                      </td>
                 </tr>
                 </tbody>
                 <tbody>
                 <tr>
                     <td  colSpan={6} align="center">Total</td>
                     <td  align="center">
                     <TextField 
                   name="total" id="total" 
                  label='Total'
                  value={total}
                  size="small"
                  onChange={(e) => setTotal(e.target.value)}
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                 />
                      </td>
                 </tr>
                 </tbody>
                 <tbody>
                 <tr>
                     <td  colSpan={6} align="center">Balance Due</td>
                     <td  align="center">
                      <TextField 
                   name="balanceDue" id="balanceDue" 
                  label='Balance Due'
                  value={balanceDue}
                  size="small"
                  onChange={(e) => setBalanceDue(e.target.value)}
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                 />
                    </td>
                 </tr>
                 </tbody>
                 <tbody>
                 <tr>
                     <td  colSpan={3} align="center">Total In Words</td>
                     <td  colSpan={4}align="center">
                     <TextField
                           required
                          name="totalW" id="totalW"
                          label="Total In Words"
                          value={totalW} onChange={(e) => setTotalW(e.target.value)}
                          multiline
                          sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
                          maxRows={3}
                        />
                       </td>
                 </tr>
                 </tbody>
              </table>
              </TableContainer>
              </Grid>
          
         </Grid>
         </form>
         </div>
      
   
    </>
  )
}

export default RetainerInvoiceForm
