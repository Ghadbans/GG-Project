import React, { useEffect,useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Tooltip, Table, TableBody, TableCell, TableHead, TableRow,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography } from '@mui/material'
import axios from 'axios';
import { Add, ArrowUpwardOutlined } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function RecuringInvoiceForm() {
  const navigate = useNavigate();
  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/create-recurringinvoice';
  const [customerID,setCustomerID] = useState("");
  const [customerProfile,setCustomerProfile] = useState("");
  const [repeat,setRepeat] = useState("");
  const invoiceDate =dayjs(Date());
  const invoiceDueDate =dayjs(Date());
  const [payTerms,setPayTerms] = useState("");
  const [projectName,setProjectName] = useState("");
  const [invoiceSubject,setInvoiceSubject] = useState("");
  const [invoiceStatus,setInvoiceStatus] = useState("");
  const [invoiceDefect,setInvoiceDefect] = useState("");
  const [status, setStatus] = useState("");
  //Recurring Invoice Number 
  const [invoiceCounterRecurringInvoice, setInvoiceCounterRecurringInvoice] = useState(() => {
    const storedCounterRecurringInvoice = parseInt(localStorage.getItem('invoiceCounterRecurringInvoice'), 10) || 1;
    return storedCounterRecurringInvoice;
   });
   const invoiceNumber = `REC-${invoiceCounterRecurringInvoice.toString().padStart(5, '0')}`;
   const generateInvoiceNumber = () => {
    setInvoiceCounterRecurringInvoice(prevCounter => prevCounter + 1);
     return(invoiceNumber);
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
    const [total, setTotal] = useState(0);
    const [balanceDue, setBalanceDue] = useState(0);
    const [totalW, setTotalW] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        customerID,
        customerProfile,
        invoiceNumber,
        repeat,
        invoiceDate,
        invoiceDueDate,
        payTerms,
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
    percentage:0 }]);
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
  {  return (     <TableRow key={i} id={Item.id}>
   <TableCell >{Item.id = i + 1}</TableCell>
   <TableCell >
        <TextField 
                    required
                    name='itemName' id='itemName' 
                    label='Item Name'
                    onChange={(e) => handleChange(e,i)}
                    size="small"
                    sx={{ m: 1, width: '200px', backgroundColor:'white' }}       
                />
       </TableCell>
       <TableCell >
        <TextField 
        required
                    name='itemDescription' id='itemDescription' 
                    label='Description'
                    onChange={(e) => handleChange(e,i)}
                    size="small"
                    sx={{ m: 1, width: '250px', backgroundColor:'white' }}       
                />
        </TableCell>
       <TableCell >
        <TextField 
        required
                    name='itemQty' id='itemQty' 
                    label='Qty'
                    onChange={(e) => handleChange(e,i)}
                    size="small"
                    sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                />
        </TableCell>
       <TableCell >
         <TextField 
         required
                    name='itemRate' id='itemRate'
                    label='Rate'
                    onChange={(e) => handleChange(e,i)}
                    size="small"
                    sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                />
        </TableCell>
        <TableCell >
          <TextField 
                name='itemDiscount' id='itemDiscount'
                    label='Discount'
                    onChange={(e) => handleChange(e,i)}
                    size="small"
                    sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                />
          </TableCell>
   <TableCell id='amountTotalInvoice'>{Item.itemAmount}</TableCell>
  <TableCell align="center" >
  <Tooltip title="Delete">
          <IconButton onClick={()=> deleteItem(Item.idRow)}>
          <DeleteIcon  style={{cursor:'pointer'}}/> 
          </IconButton>
        </Tooltip>
    </TableCell>
  </TableRow>)});
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
localStorage.setItem('invoiceCounterRecurringInvoice', invoiceCounterRecurringInvoice.toString());
}) 
  return (
    <>
       <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
 <div className='headername'>
   <Typography>Create Recurring Invoice</Typography>
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
         <Grid item xs={3}> 
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
              <Grid item xs={3}> 
               <TextField      
                  id='customerProfile'
                  name='customerProfile' 
                  label='Invoice Profile'
                  value={customerProfile}
                  onChange={(e)=>setCustomerProfile(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={3}> 
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
              <Grid item xs={3}> 
               <FormControl sx={{ m: 1, minWidth: "97%" }}>
                  <InputLabel id="repeat">Repeat Every*</InputLabel>
                  <Select
                      required
                     id="repeat"
                     value={repeat} 
                     onChange={(e)=>setRepeat(e.target.value)}
                     name="repeat"
                     label="Repeat Every">
                        <MenuItem value="Week">Week</MenuItem>
                        <MenuItem value="Month">Month</MenuItem>
                        <MenuItem value="Year">Year</MenuItem>
                  </Select>
                 </FormControl>
               </Grid>
               <Grid item xs={3}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='invoiceDate' 
                    label='Starts On'
                    value={invoiceDate}
                    sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={3}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='invoiceDueDate' 
                    label='End On'
                    value={invoiceDueDate}
                    sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={3}> 
               <FormControl sx={{ m: 1, minWidth: "97%" }}>
                  <InputLabel id="payTerms">Payment Terms</InputLabel>
                  <Select
                      required
                     id="payTerms"
                     value={payTerms} 
                     onChange={(e)=>setPayTerms(e.target.value)}
                     name="payTerms"
                     label="payTerms"
                  >
                        <MenuItem value="Due end of the month">Due end of the month</MenuItem>
                        <MenuItem value="Net 10">Net 10</MenuItem>
                        <MenuItem value="Net 15">Net 15</MenuItem>
                        <MenuItem value="Net 20">Net 20</MenuItem>
                        <MenuItem value="Net 25">Net 25</MenuItem>
                        <MenuItem value="Due on Receipt">Due on Receipt</MenuItem>
                  </Select>
                 </FormControl>
               </Grid>
               <Grid item xs={3}> 
              <TextField 
                  id='projectName'
                  name='projectName' 
                  label='Associate Projects'
                  value={projectName}
                  onChange={(e)=>setProjectName(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={3}> 
              <TextField 
                  id='invoiceStatus'
                  name='invoiceStatus' 
                  label='Invoice Status'
                  value={invoiceStatus}
                  onChange={(e)=>setInvoiceStatus(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={3}> 
               <TextField 
                  id='invoiceSubject'
                  name='invoiceSubject' 
                  label='Subject'
                  value={invoiceSubject}
                  onChange={(e)=>setInvoiceSubject(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={3}> 
               <TextField 
                  id='invoiceDefect'
                  name='invoiceDefect' 
                  label='Defect'
                  value={invoiceDefect}
                  onChange={(e)=>setInvoiceDefect(e.target.value)}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={3}> 
               <FormControl sx={{ m: 1, minWidth: "97%" }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={status} 
                     onChange={(e)=>setStatus(e.target.value)}
                     name="status"
                     label="status"
                     defaultValue="Active"
                  >
                        <MenuItem value="Active" sx={{color:'green'}}>Active</MenuItem>
                        <MenuItem value="Close" sx={{color:'red'}}>Close</MenuItem>
                  </Select>
                 </FormControl>
               </Grid>
               <Grid item xs={12}>
                <div style={{margin:'15px'}}>
                <TableContainer>
                <div style={{position:'relative',float:'right'}}>
             <Tooltip title="Add" placement="left">
            <IconButton onClick={addItem}>
            <Add className='btn1'/>  
            </IconButton>
          </Tooltip>
          </div>
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell sx={{ width:'8%', padding:'5px'}}>#</TableCell>
                         <TableCell sx={{ width:'30%'}} align="center">Item</TableCell>
                         <TableCell sx={{ width:'45%'}} align="center">Description</TableCell>
                         <TableCell sx={{ width:'10%'}} align="center">Quantity</TableCell>
                         <TableCell sx={{ width:'14%'}} align="center">Rate</TableCell>
                         <TableCell sx={{ width:'10%'}} align="center">Discount</TableCell>
                         <TableCell sx={{ width:'15%'}} align="center">Amount</TableCell>
                         <TableCell sx={{ width:'10%'}} align="center">Action</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                 {tableRows}
                 </TableBody>
                 <TableBody>
                 <TableRow>
                     <TableCell  colSpan={6} align="center">SubTotal</TableCell>
                     <TableCell  align="center">
                            <TextField 
                          name="subTotal" id="subTotal"
                          label='SubTotal'
                          size="small"
                          value={subTotal} onChange={(e) => setSubTotal(e.target.value)}
                        sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                        />
                      </TableCell>
                 </TableRow>
                 </TableBody>
                 <TableBody>
                 <TableRow>
                     <TableCell  colSpan={6} align="center">Total</TableCell>
                     <TableCell  align="center">
                     <TextField 
                   name="total" id="total" 
                  label='Total'
                  value={total}
                  size="small"
                  onChange={(e) => setTotal(e.target.value)}
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                 />
                      </TableCell>
                 </TableRow>
                 </TableBody>
                 <TableBody>
                 <TableRow>
                     <TableCell  colSpan={6} align="center">Balance Due</TableCell>
                     <TableCell  align="center">
                      <TextField 
                   name="balanceDue" id="balanceDue" 
                  label='Balance Due'
                  value={balanceDue}
                  size="small"
                  onChange={(e) => setBalanceDue(e.target.value)}
                  sx={{ m: 1, width: '100px', backgroundColor:'white' }}       
                 />
                    </TableCell>
                 </TableRow>
                 </TableBody>
                 <TableBody>
                 <TableRow>
                     <TableCell  colSpan={3} align="center">Total In Words</TableCell>
                     <TableCell  colSpan={4}align="center">
                     <TextField
                           required
                          name="totalW" id="totalW"
                          label="Total In Words"
                          value={totalW} onChange={(e) => setTotalW(e.target.value)}
                          multiline
                          sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
                          maxRows={3}
                        />
                       </TableCell>
                 </TableRow>
                 </TableBody>
              </Table>
              </TableContainer>
              </div>
              </Grid>
         </Grid>
         </form>
           </div>
    </>
  )
}
export default RecuringInvoiceForm;
