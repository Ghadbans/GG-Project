import React, {useEffect,useState } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import RecurringInformation from './RecurringInformation';
import {  NavLink,useParams } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Image from '../../../img/images.png';

function RecuringViewAdminAll() {
  let {id} = useParams()
  const [recurring,setRecurring] = useState([])
//get request
  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/recurringinvoice';
//axios request with useEffect
useEffect(()=>{
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
//view information
  const [show, setShow] = useState(1);
  const handleShow = (e) =>{
      setShow(e);
  }
  //expand information
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
    <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
 <div className='headername'>
   <Typography variant='h5'>Recurring Invoice</Typography>
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
<br/>
<div className='itemview1'>
<Grid container spacing={2}>
    <Grid item xs={3}>
      <RecurringInformation/>
    </Grid>
    <Grid item xs={9}>
    <div className='itemInfoContainer4'>
        <div style={{width:'100%', background:'#f2f2f2'}}>
        <div style={{height:'580px', overflow:'hidden',overflowY:'scroll', width:'100%', background:'#f2f2f2', margin:'10px' }}>
        {recurring?.filter(row=> row._id === id)?.map((row)=>(
          <div key={row._id}>
        <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div >
                    <Typography variant="h5">{row.customerID}</Typography>
                    <Typography>{row.invoiceNumber}</Typography>
                  </div>
      <div style={{display:'flex', alignItems:'center'}}>
      <NavLink to={`/RecurringInvoiceFormUpdate/${row._id}`} className='LinkName'>
      <Tooltip title="Edit">
            <IconButton>
            <EditIcon className='btnCustomer'/>
            </IconButton>
          </Tooltip>
           </NavLink>
        <IosShareIcon className='btnCustomer'/>
        <LocalPrintshopIcon className='btnCustomer'/>
        <SendIcon className='btnCustomer'/>
      </div>
      <div style={{alignItems:'center',display:'flex', gap:'10px'}}>
        < AttachFileIcon className='btnCustomer'/>
        <p className='btnCustomer'>Record Payment</p>
        <p className='btnCustomer'>More</p>
      </div>
     </header>     
                <br/>
                <div className='itemInfoContainer2Content'>
                   <button  onClick={() => handleShow(1)} className='btnCustomer ' >Overview</button>
                   <button  onClick={() => handleShow(2)} className='btnCustomer ' >Next Invoice</button>
                </div>
                <hr/>
                   {show===1 ?
                    <div className='customerDetails'>
                        <div className='customerDetailsContent1'>
                                          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            >
                                            <Typography>Customer Contact</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                            <Typography>
                                            Email<br/> 
                                            <span> Email </span> <br/>
                                            Company Number <br/> <span> +2437896435678</span><br/>
                                           Costumer Phone Number<br/> <span> +2437896435678</span>
                                            </Typography>
                                          </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            >
                                            <Typography>Customer Address</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                            <Typography>
                                             Billing Address<br/> 
                                            <span> Address </span> <br/>
                                            Shipping Address<br/> 
                                            <span> Address </span>
                                            </Typography>
                                          </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            >
                                            <Typography>Currency & Terms</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                            <Typography>
                                            Currency<br/> 
                                            <span> USD </span> <br/>
                                            Terms<br/> 
                                            <span> net 10 </span>
                                            </Typography>
                                          </AccordionDetails>
                                        </Accordion>
                        </div>
                        <div className='customerDetailsContent2'>
                          <div className='customerDetailsContent2center0'>
                          <div className='customerDetailsContent2DataCenter'>
                            <h4>Invoice Amount</h4>
                            <p>{row.subTotal}<span>$</span></p>
                          </div>
                          <hr/>
                          <div className='customerDetailsContent2DataCenter1'>  
                            <h4>Next Invoice Date</h4>
                            <p>{row.invoiceDate}</p>
                          </div>
                          </div>
                          <span></span><br/>
                          <div className='customerDetailsContent2center0'>
                          <div className='customerDetailsContent2DataCenter'>
                          <h4>Recurring Period</h4>
                            <p>{row.repeat}</p>
                          </div>
                          </div>
                          <span></span><br/>
                          <div className='customerDetailsContent2center0'>
                            <p> Description</p>
                          </div>
                        </div>
                    </div>:
                    null}
                    {show===2 ?
                    <div >
                   {/* Recurring Start Invoice */}
                   <div className='invoicedetails'>
    {/* company invoice details */}
    <section className='invoiceinfohead'>
        <div className='logoinvoice'>
            <img src={Image} style={{width:'250px',height:'60px'}}/>
        </div>
        <div style={{textAlign:'right', lineHeight:'2px'}}>
            <h3>GLOBAL GATE SARL</h3>
            <br/>
            <address>
            <p>RCM CD/KWZ/RCCM/22-B-00317 </p>
            <p> ID NAT 14-H5300N11179P </p>
            <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
            <p>  KOLWEZI LUALABA </p>
            <p>   DR CONGO </p>
          </address>
        </div>
    </section>
    <hr/><p className='invoicehr'> <span style={{backgroundColor:'white'}}>INVOICE</span> </p>
    {/*end company invoice details */}
    {/* clients details */}
    <div className='invoivesubhead'>
        <div style={{width:'50%',padding:'20px', lineHeight:'2px',position:'relative',top:'0'}}>
    <section >
        <p>Bill To</p>
        <h3>{row.customerID}</h3> 
    </section>
    </div>
    { /*end of clients details */}
    {/* Dates */}
    <div className='invoivesubhead1'>
      <table className="firstTable">
      <tbody>
              <tr>
                <th><span >Invoice #</span></th>
                <td><span >{row.invoiceNumber}</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Date</span></th>
                <td><span >{row.invoiceDate}</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span > Due Date</span></th>
                <td><span >{row.invoiceDueDate}</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Subject</span></th>
                <td><span>{row.invoiceSubject}</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Status</span></th>
                <td><span>{row.invoiceStatus}</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Defect</span></th>
                <td><span>{row.defect}</span></td>
              </tr>
        </tbody>
            </table> 
         </div>
    </div>
    {/* End Dates */}
    <section style={{position:'relative'}}>
         {/* Table */}
    
         <table className='tableinvoice'>
        <thead>
        <tr>
                    <th style={{width:'50px'}}>#</th>
                    <th style={{textAlign:'left', padding:'10px',width:'20%'}}>Item</th>
                    <th style={{textAlign:'left', padding:'10px',width:'40%'}}>Description</th>
                    <th style={{textAlign:'right', padding:'10px', width:'10%'}}>Qty</th>
                    <th style={{textAlign:'right', padding:'10px',width:'10%'}}>Rate</th>
                    <th style={{textAlign:'right', padding:'10px',width:'13%'}}>Discount</th>
                    <th style={{textAlign:'right', padding:'10px', width:'15%'}}>Amount</th>
                </tr>
        </thead>
        <tbody>
        {row.items?.map((Item)=> (
            <tr key={Item.id}> 
                <td> {Item.id}</td>
                <td style={{textAlign:'left', padding:'10px'}}>{Item.itemName}</td>
                <td style={{textAlign:'left', padding:'10px'}}>{Item.itemDescription}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemQty}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemRate}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemDiscount}<span data-prefix>%</span></td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemAmount}</td>
            </tr>
      ))}
        </tbody>
    </table>
     {/* downTable details */}
     <div className='downTabledetails'>
    <div style={{width:'55%',padding:'5px'}}>
        <ul style={{listStyle:'none'}}>
            <li>Thanks for your business.</li>
        </ul>
    </div>
        <div className='downTabledetailstotal'>
        <table className="firstTable2">
            <tbody>
              <tr>
                <th style={{ borderBottom:'none'}}><span >Sub Total</span></th>
                <td style={{ borderBottom:'none'}}><span data-prefix>$</span><span>{row.subTotal}</span></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th style={{ borderBottom:'1px solid black', fontSize:'13px'}}><span >(Tax inclusive)</span></th>
                <td style={{ borderBottom:'1px solid black'}}><span data-prefix>$</span><span >0.00</span></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th style={{ borderBottom:'1px solid black'}}><span >Total</span></th>
                <td style={{ borderBottom:'1px solid black'}}><span data-prefix>$</span><span >{row.total}</span></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th style={{ borderBottom:'1px solid black', color:'#66a3ca', fontWeight:'bold'}}><span>Balance Due</span></th>
                <td style={{ borderBottom:'1px solid black', color:'#66a3ca'}}><span data-prefix >$</span><span>00.00</span></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th style={{textAlign:'left', borderBottom:'none'}}><span >Total in Words</span></th>
                <td style={{textAlign:'left', borderBottom:'none'}}><span>{row.totalW}</span></td>
              </tr>
              </tbody>
            </table>
        </div>
        </div>
            {/* end downTable details */}
     {/*End Table */}
    </section>
    {/* bank details */}
    <section className='banksec'>
    <table className="firstTable3">
      <tbody>
              <tr>
                <th><span >Bank</span></th>
                <td><span >Bank Name</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Entitled</span></th>
                <td><span >Entitled Name</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span > Bank Account</span></th>
                <td><span >Bank Account Number</span></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                <th><span >Code Swift</span></th>
                <td><span>Code Swift Number</span></td>
              </tr>
        </tbody>
            </table> 
    </section>
     { /*End Bank details*/}
    {/* Notes */}
    <section className='Termandcond'>
        <p>Terms & Conditions</p>
        {/* Textarea */}
        <span> ........</span>
    </section>
     {/*End notes */}
    {/* footer*/}
    <footer >
        <ul className='footerinvoice'>
            <span className='font-bold'><LanguageIcon/></span><li>Global Gate</li>
            <span className='font-bold'><EmailIcon/></span><li>Global@gmail.com</li>
            <span className='font-bold'><PhoneIcon/></span><li>+243985647</li>
            <span className='font-bold'><WebIcon/></span><li>www.GlobalGate.sarl</li>
        </ul>
    </footer>
    {/* end footer */}
    </div>
                   {/* Recurring End Invoice */}
                    </div>:
                    null}
                    
                    </div>
                     ))}
                    </div>
              </div>   
            </div>  
    </Grid>
</Grid>
</div>
</div>
  )
}

export default RecuringViewAdminAll
