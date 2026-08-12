import React, { useEffect,useState,useRef } from 'react'
import '../../view.css'
import '../Chartview.css'
import {TableContainer,Checkbox,Menu,MenuItem,Grid,IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography,Collapse, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box, Autocomplete,Table,TableBody,TableCell,TableRow,TableHead,Tabs,Tab,Button, Card, CardContent } from '@mui/material';
import { Add, KeyboardArrowDownOutlined, KeyboardArrowUp, KeyboardArrowUpOutlined } from '@mui/icons-material';
import dayjs from 'dayjs';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import Image from '../../../img/images.png'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function PosReportInvoice({onMonth,onInvoice,onMonthOption,OnAllSelection}) {
    const [month,setMonth] = useState('');
    const [infoOptions,setInfoOptions] = useState('');
    const [selectOptions,setSelectOptions] = useState('');
    const [startDate,setStartDate] =  useState(()=>{
       const date = new Date()
        return date
      });
    const transactionYears = new Date(startDate).getFullYear()
      const [fromDate,setFromDate] =  useState(()=>{
        const date = new Date()
        return date
      });
      const [endDate,setEndDate] =  useState(()=>{
        const date = new Date()
        return date
      });
      const [invoiceRevenue,setInvoiceRevenue] = useState([]);
      
      useEffect(()=>{
       if (onMonth) {
          setMonth(onMonth);
          setInvoiceRevenue(onInvoice);
       }
       if (onMonthOption) {
        setSelectOptions(onMonthOption)
        setInfoOptions(OnAllSelection)
       }
      },[onMonth,onInvoice,onMonthOption]);

      const [filteredData,setFilteredData] = useState([]);

      useEffect(()=>{
        const headers = [];
        const currentDate = new Date(fromDate);
        while (currentDate <= endDate) {
          headers.push(currentDate.toDateString());
          currentDate.setDate(currentDate.getDate() +1);
        }
        setFilteredData(headers)
      },[fromDate,endDate])

      const [FilterInvoiceRevenue,setFilterInvoiceRevenue] = useState([])
      useEffect(()=>{
          if (selectOptions === 'Month') {
              setFilterInvoiceRevenue(invoiceRevenue?.filter((row)=> dayjs(row.invoiceDate).format('MMMM') === month))
          } else if (selectOptions === 'Year') {
              setFilterInvoiceRevenue(invoiceRevenue?.filter((row)=> dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY') ))
          }
           else if (selectOptions === 'Custom') {
              setFilterInvoiceRevenue(invoiceRevenue?.filter((row)=> filteredData.find((Item)=> dayjs(Item).format('DD/MM/YYYY') ===  dayjs(row.invoiceDate).format('DD/MM/YYYY') )))
          }
           else if (selectOptions === 'All') {
              setFilterInvoiceRevenue(invoiceRevenue)
          }
       },[selectOptions,month,startDate,filteredData,invoiceRevenue])


  
      const handleChangeSelected = (e)=>{
          setInfoOptions(e.target.value);
      }
      const [TotalExpenses,setTotalExpenses]= useState(0);
    const [TotalDExpenses,setTotalDExpenses]= useState(0);
    const [TotalPayRoll,setTotalPayRoll]= useState(0);
    const [TotalPayment,setTotalPayment]= useState(0);
    const [TotalRevenue,setTotalRevenue]= useState(0);
      useEffect(()=>{
          const TPayment = FilterInvoiceRevenue?.length>0?FilterInvoiceRevenue.reduce((sum,item)=> sum + parseFloat(item.infoSell),0):0
          const TPaymentTax = FilterInvoiceRevenue?.length>0?FilterInvoiceRevenue.reduce((sum,item)=> sum + parseFloat(item.TaxUSd),0):0
          const TCost = FilterInvoiceRevenue?.length>0?FilterInvoiceRevenue.reduce((sum,item)=> sum + parseFloat(item.infoCost),0):0
          setTotalRevenue(TPayment)
          setTotalDExpenses(TCost)
          setTotalPayRoll(TPayment - TCost)
          setTotalPayment(TPaymentTax)
    },[FilterInvoiceRevenue]);

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
      
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
            {row.factureNumber}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('HH:mm')}
              </TableCell>
              <TableCell align="left">{row.customerName.customerName}</TableCell>
              <TableCell align="right">$ {row.infoSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Item Sell
                    </Typography>
                    <table className="secondTable" style={{fontSize:'80%',marginBottom:'0px',border:'1px solid #DDD'}}>
    <thead>
    <tr>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Item</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Description</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Qty</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Rate</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Total</th>
    </tr>
    </thead>
    <tbody>
    {
                      row.items.map((Item,i)=>
                 {
                  return       (
                        <tr key={Item.idRow}>
                             {
               Item.newDescription !== undefined?
               (
                <>
                <td style={{textAlign:'center',border:'1px solid #DDD'}} colSpan={5}>{Item.newDescription}</td>
                </>
               )
               :
               (
                         <>
             <td style={{border:'1px solid #DDD'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                        <td style={{border:'1px solid #DDD', width:'200px'}}>{Item.itemDescription}</td>
                        <td style={{border:'1px solid #DDD'}}>{Item.itemQty} </td>
                        <td style={{border:'1px solid #DDD'}}> <span data-prefix>FC </span>{Item.itemRate}</td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>FC </span><span id='totalItemService'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        </>
                           )
                          }
                      </tr>
                      )}
                    )
                    }
                        <tr>
                      <td style={{border:'1px solid #DDD'}}colSpan={2}></td>
                      <td style={{border:'1px solid #DDD'}}>Total Sell</td>
                      <td style={{border:'1px solid #DDD'}} colSpan={3}>FC {row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} (${(row?.subTotal/row?.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})</td>
                    </tr>  
                    
    </tbody>
    </table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
      function Row2(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
      
        return (
          <React.Fragment>
             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
            {row.factureNumber}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('HH:mm')}
              </TableCell>
              <TableCell align="left">{row.customerName.customerName}</TableCell>
              <TableCell align="right">$ {row.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Item Cost
                    </Typography>
                    <table className="secondTable" style={{fontSize:'80%',marginBottom:'0px',border:'1px solid #DDD'}}>
    <thead>
    <tr>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Item</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Description</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Qty</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Rate Cost</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Total</th>
    </tr>
    </thead>
    <tbody>
    {
                      row.items.map((Item,i)=>
                 {
                  return       (
                        <tr key={Item.idRow}>
                             {
               Item.newDescription !== undefined?
               (
                <>
                <td style={{textAlign:'center',border:'1px solid #DDD'}} colSpan={5}>{Item.newDescription}</td>
                </>
               )
               :
               (
                         <> 
             <td style={{border:'1px solid #DDD'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                        <td style={{border:'1px solid #DDD', width:'200px'}}>{Item.itemDescription}</td>
                        <td style={{border:'1px solid #DDD'}}>{Item.itemQty} </td>
                        <td style={{border:'1px solid #DDD'}}> <span data-prefix>FC </span>{Item.itemCost}</td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>FC </span><span id='totalItemService'>{(Item.itemQty*Item.itemCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        </>
                           )
                          }
                      </tr>
                      )}
                    )
                    }
          <tr>
                      <td style={{border:'1px solid #DDD'}}colSpan={2}></td>
                      <td style={{border:'1px solid #DDD'}} >Total Cost</td>
                      <td style={{border:'1px solid #DDD'}} colSpan={2}> FC{row.infoCostFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} (<span data-prefix>$</span>{row.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})</td>
                    </tr>  
    </tbody>
    </table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
      function Row3(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
      
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
            {row.factureNumber}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('DD-MMMM-YYYY')}
              </TableCell>
              <TableCell component="th" scope="row">
            {dayjs(row.invoiceDate).format('HH:mm')}
              </TableCell>
              <TableCell align="left">{row.customerName.customerName}</TableCell>
              <TableCell align="right">$ {row.infoSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
              <TableCell align="right">$ {row.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
              <TableCell align="right">$ {row.TaxUSd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
              <TableCell align="right">$ {(row.infoSell-row.infoCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span></span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Item
                    </Typography>
                    <table className="secondTable" style={{fontSize:'80%',marginBottom:'0px',border:'1px solid #DDD'}}>
    <thead>
    <tr>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Item</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Description</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Qty</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Rate</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Total</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Rate Cost</th>
      <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Total</th>
    </tr>
    </thead>
    <tbody>
    {
                      row.items.map((Item,i)=>
                 {
                  return       (
                        <tr key={Item.idRow}>
                             {
               Item.newDescription !== undefined?
               (
                <>
                <td style={{textAlign:'center',border:'1px solid #DDD'}} colSpan={5}>{Item.newDescription}</td>
                </>
               )
               :
               (
                         <>
             <td style={{border:'1px solid #DDD'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                        <td style={{border:'1px solid #DDD', width:'200px'}}>{Item.itemDescription}</td>
                        <td style={{border:'1px solid #DDD'}}>{Item.itemQty} </td>
                        <td style={{border:'1px solid #DDD'}}> <span data-prefix>FC </span>{Item.itemRate}</td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>FC </span><span id='totalItemService'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        <td style={{border:'1px solid #DDD'}}> <span data-prefix>FC </span>{Item.itemCost}</td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>FC </span><span id='totalItemService'>{(Item.itemQty*Item.itemCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        </>
                           )
                          }
                      </tr>
                      )}
                    )
                    }
          <tr>
                      <td style={{border:'1px solid #DDD'}}colSpan={3}></td>
                      <td style={{border:'1px solid #DDD'}}>Total Sell</td>
                      <td style={{border:'1px solid #DDD'}} > FC{row.infoSellFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} (${row.infoSell.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})</td>
                      <td style={{border:'1px solid #DDD'}} >Total Cost</td>
                      <td style={{border:'1px solid #DDD'}} > FC{row.infoCostFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} (<span data-prefix>$</span>{row.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})</td>
                    </tr>  
    </tbody>
    </table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }

  return (
    <div>
    <section>
  <FormControl sx={{width:'200px'}}>
            <InputLabel id="Options">Options</InputLabel>
            <Select
               id="infoOptions"
               value={infoOptions} 
               onChange={(e)=>handleChangeSelected(e)}
               name="infoOptions"
               label="Options"
            >
                  <MenuItem value="Sell">Sell</MenuItem>
                  <MenuItem value="Cost">Cost</MenuItem>
                  <MenuItem value="Revenue">Revenue</MenuItem>
            </Select>
           </FormControl> 
  </section>
  <br/>
  <section style={{display:'flex',alignItems:'center',gap:'200px'}}>
<FormControl sx={{width:'200px'}}>
            <InputLabel id="select">select</InputLabel>
            <Select
               id="selectOptions"
               value={selectOptions} 
               onChange={(e)=>setSelectOptions(e.target.value)}
               name="selectOptions"
               label="select"
            >
                  <MenuItem value="Year">Year</MenuItem>
                  <MenuItem value="Month">Month</MenuItem>
                  <MenuItem value="Custom">Custom</MenuItem>
            </Select>
           </FormControl> 
  {
      selectOptions === "Month" && (
          <FormControl sx={{width:'200px'}}>
          <InputLabel id="month">month</InputLabel>
          <Select
             id="month"
             value={month} 
             onChange={(e)=>setMonth(e.target.value)}
             name="month"
             label="month"
          >
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
          </Select>
         </FormControl>      
      )
  }
         {
            selectOptions === 'Year' && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                           required
                          name='startDate' 
                          value={dayjs(startDate)}
                          onChange={(date)=> setStartDate(date)} 
                          format='YYYY' 
                          label={'"year"'} views={[ 'year']}
                     />
              </DemoContainer>
          </LocalizationProvider>
            )
           }
       {
            selectOptions === 'Custom' && (
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'20px'}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DatePicker', 'DatePicker']}>
<DatePicker
             required
            name='fromDate' 
            label='From Date'
            value={dayjs(fromDate)}
            onChange={(date)=> setFromDate(date)}
            format='DD/MM/YYYY' 
       />
</DemoContainer>
</LocalizationProvider>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DatePicker', 'DatePicker']}>
<DatePicker
             required
            name='endDate' 
            label='To Date'
            value={dayjs(endDate)}
            onChange={(date)=> setEndDate(date)} 
            format='DD/MM/YYYY' 
       />
</DemoContainer>
</LocalizationProvider>
              </div>
            )
           }
</section>
<Box sx={{padding:'20px'}} component={Paper}>
      <div style={{padding:'20px'}}>
      <header className='invoiceTest'>  
<div>
<img src={Image} style={{width:'500px',height:'100px'}}/>       
</div> 
<address style={{textAlign:'right'}}>
<p style={{fontWeight:'bold'}}>GLOBAL GATE SARL </p>
<p>RCM CD/KWZ/RCCM/22-B-00317 </p>
<p> ID NAT 14-H5300N11179P </p>
<p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
<p>  KOLWEZI LUALABA </p>
<p>   DR CONGO </p>
</address>
</header>
<hr/><p className='invoicehr'></p>
<article>
<section style={{display:'flex',justifyContent:'space-between',marginTop:'25px'}}>
<address style={{position:'relative',lineHeight:1.35,width:'60%'}}>

      </address>   
      <table className="firstTable" style={{position:'relative',fontSize:'70%',left:'83px',marginBottom:'10px',pageBreakInside:'auto'}}>
        <thead>
          <tr>
            <th colSpan={2} style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'left'}}>Statement of Accounts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'right'}}>
              {
                 selectOptions === 'Year' && (<span>
              {dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To {dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}
                 </span>)
              }
              {
                   selectOptions === 'Custom' && (<span>
                    {dayjs(fromDate).format('DD/MM/YYYY')} To {dayjs(endDate).format('DD/MM/YYYY')}
                   </span>)
              }
                    {
                   selectOptions === 'All' && (<span>
                  All Transaction
                   </span>)
              }
              {
                   selectOptions === 'Month' && (<span>
                 For {month}
                   </span>)
              }
            </td>
          </tr>
        </tbody>
           <tbody>  
          <tr>
            <td colSpan={2} style={{backgroundColor:'#e8f7fe',border:'none',textAlign:'left'}}>Expenses Summary</td>
            </tr>    
          <tr>
          <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Sell</span></td>
          <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}>
          {
(infoOptions === 'Sell' || infoOptions === 'Revenue' ) && (
   <span >{`$${TotalRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span>
)}</td>
         
        </tr>
          <tr>
          <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Cost</span></td>
    <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}>       {
(infoOptions === 'Cost' || infoOptions === 'Revenue' ) && (
<span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span>
)}</td>
           </tr>
           <tr>
          <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Revenue</span></td>
          <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}>
            {
               (infoOptions === 'Revenue' ) && (
                <span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span>
              )
            }</td>
        
        </tr>
           <tr>
          <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Tax</span></td>
      <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}>
            {
               (infoOptions === 'Revenue' ) && (
                <span >{`$${TotalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span>
              )
            }</td>
        </tr>
        </tbody>
      </table>
</section>
{
infoOptions === 'Sell' && (
  <TableContainer >
<Table aria-label="collapsible table">
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>#</TableCell>
      <TableCell align="left">Date</TableCell>
      <TableCell align="left">Time</TableCell>
      <TableCell align="left">Customer Name</TableCell>
      <TableCell align="right">Total Sell</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {FilterInvoiceRevenue.map((row) => (
      <Row key={row._id} row={row} />
    ))}
    <TableRow>
      <TableCell colSpan={4}></TableCell>
      <TableCell >Total Sell</TableCell>
      <TableCell ><span >{`$${TotalRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></TableCell>
    </TableRow>
  </TableBody>
</Table>
</TableContainer>
)
}
{
infoOptions === 'Cost' && (
  <TableContainer >
<Table aria-label="collapsible table">
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>#</TableCell>
      <TableCell align="left">Date</TableCell>
      <TableCell align="left">Time</TableCell>
      <TableCell align="left">Customer Name</TableCell>
      <TableCell align="right">Total Cost</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {FilterInvoiceRevenue.map((row) => (
      <Row2 key={row._id} row={row} />
    ))}
        <TableRow>
      <TableCell colSpan={4}></TableCell>
      <TableCell >Total Cost</TableCell>
      <TableCell ><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></TableCell>
    </TableRow>
  </TableBody>
</Table>
</TableContainer>
)
}

{
infoOptions === 'Revenue' && (
  <TableContainer >
<Table aria-label="collapsible table">
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>#</TableCell>
      <TableCell align="left">Date</TableCell>
      <TableCell align="left">Time</TableCell>
      <TableCell align="left">Customer Name</TableCell>
      <TableCell align="right">Total Sell</TableCell>
      <TableCell align="right">Total Cost</TableCell>
      <TableCell align="right">Total Tax</TableCell>
      <TableCell align="right">Revenue</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {FilterInvoiceRevenue.map((row) => (
      <Row3 key={row._id} row={row} />
    ))}
        <TableRow>
      <TableCell colSpan={7}></TableCell>
      <TableCell >Total Revenue</TableCell>
      <TableCell align="right"><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></TableCell>
    </TableRow>
  </TableBody>
</Table>
</TableContainer>
)
}
</article>
<div className='footerinvoice'>
  <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
    <span><Email/></span>
    <span>Contact@GlobalGate.Sarl</span>
  </p>
  <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
    <span><Phone/></span>
    <span>+243 827 722 222</span>
  </p>
  <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
    <span><WebIcon/></span>
    <span>www.GlobalGate.sarl</span>
  </p>
</div>
      </div>
     </Box>
</div>
  )
}

export default PosReportInvoice
