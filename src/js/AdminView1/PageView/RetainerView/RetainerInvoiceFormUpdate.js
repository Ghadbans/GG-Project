import React, { useEffect,useState } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, styled,Table, TableBody, TableCell, TableHead, TableRow,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import { Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import { v4 } from 'uuid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

function RetainerInvoiceFormUpdate() {
     const {id} = useParams();
  const navigate = useNavigate();
  useEffect (() => {
    axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-retainerinvoice/${id}`)
    .then(res => {
      // get the response data here
       setCustomerID(res.data.data.customerID);
        setInvoiceDate(res.data.data.invoiceDate);
        setReferenceNumber(res.data.data.referenceNumber);
        setInvoiceNumber(res.data.data.invoiceNumber);
        setProjectName(res.data.data.projectName);
        setInvoiceSubject(res.data.data.invoiceSubject);
        setInvoiceStatus(res.data.data.invoiceStatus);
        setInvoiceDefect(res.data.data.invoiceDefect);
        setStatus(res.data.data.status);
        SetItems(res.data.data.items);
        setSubTotal(res.data.data.subTotal);
        setTotal(res.data.data.total);
    setTotalW(res.data.data.totalW);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
    },[])
    const handleSubmitEdit = (e) => {
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
     axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-retainerinvoice/${id}`,data)
      .then((res) => {
        console.log('POST request successful!');
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error making POST request:', error);
      });}
 const [customerID,setCustomerID] = useState("");
 const [invoiceDate,setInvoiceDate] =useState("");
 const [referenceNumber,setReferenceNumber] =useState("");
 const [invoiceNumber,setInvoiceNumber] =useState("");
 const [projectName,setProjectName] = useState("");
 const [invoiceSubject,setInvoiceSubject] = useState("");
 const [invoiceStatus,setInvoiceStatus] = useState("");
 const [invoiceDefect,setInvoiceDefect] = useState("");
 const [status, setStatus] = useState("");
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
const list = [...items];
list[i][name] = value;
list[i]['totalAmount'] = list[i]['itemQty']*list[i]['itemRate'];
list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
list[i]['percentage'] = list[i]['discount']/100;
list[i]['itemAmount'] = list[i]['totalAmount']-list[i]['percentage'];
SetItems(list);
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
                 value={Item.itemName}
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
                 value={Item.itemDescription}
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
                 value={Item.itemQty}
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
                 value={Item.itemRate}
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
                 value={Item.itemDiscount}
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
   sum += isNaN(row[i].innerHTML) ? 0 : parseFloat(row[i].innerHTML);
   setSubTotal(sum);
 }
}
const calculateBalance = (balanceDue) => {
 balanceDue = subTotal-total
 setBalanceDue(balanceDue);
}
calculateBalance(balanceDue);
})
  return (
    <>
    <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
<div className='headername'>
<Typography>Update Retainer Invoice</Typography>
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
       <form onSubmit={handleSubmitEdit}>
       <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
     <div>
     <button type='submit' className='btnCustomer' style={{position:'fixed',left:'270px',zIndex:'1'}}>Save</button>
   </div>
   <BlackTooltip title="Close" placement='left'> 
          <IconButton onClick={() => navigate(-1)}>
          <Close className='btnCustomer' />
          </IconButton>
        </BlackTooltip>
 </div> 
      <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
      <Grid item xs={4}> 
      <TextField 
                disabled
               id='customerID'
               name='customerID' 
               label='Customer Name'
               value={customerID}
               onChange={(e)=>setCustomerID(e.target.value)}
               sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
           />
           </Grid>
           <Grid item xs={4}> 
               <TextField 
                  disabled
                  id='invoiceNumber'
                  name='invoiceNumber' 
                  label='invoiceNumber'
                  value={invoiceNumber}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
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
                  <TextField 
                  disabled
                  id='invoiceDate'
                  name='invoiceDate' 
                  label='Date'
                  value={invoiceDate}
                  sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
              />
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
                  <td  colSpan={6} >SubTotal</td>
                  <td  >
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
                  <td  colSpan={6} >Total</td>
                  <td  >
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
                  <td  colSpan={6} >Balance Due</td>
                  <td  >
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
                  <td  colSpan={3} >Total In Words</td>
                  <td  colSpan={4}>
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

export default RetainerInvoiceFormUpdate
