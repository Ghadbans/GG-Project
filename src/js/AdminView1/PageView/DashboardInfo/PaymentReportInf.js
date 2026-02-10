import React, { useEffect,useState,useRef } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {TableContainer,Checkbox,Menu,MenuItem,Grid,IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box, Autocomplete,Table,TableBody,TableCell,TableRow,TableHead,Tabs,Tab,Button, Card, CardContent } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate, NavLink,Link } from 'react-router-dom'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from '../../../img/images.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import db from '../../../dexieDb';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import { PieChart } from '@mui/x-charts';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit } from '@mui/icons-material';

const PrintTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

function PaymentReportInf({onMonth,onPayment}) {

    const [month,setMonth] = useState('');
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
      useEffect(()=>{
     if (onMonth) {
           setMonth(onMonth);
           setSelectOptions('Month');
     } else {
        setMonth('');
        setSelectOptions('All');
     }
    },[onMonth]);

    {/** All Start */}
    const payment = onPayment;
    const payRoll = [];
    const itemPurchase = [];
    const expenses = [];
    {/** All End */}
    {/** Month Filter Start */}
    const [filterMonthPayment,setFilterMonthPayment] =useState([]);
    const [filterMonthPayRoll,setFilterMonthPayRoll] =useState([]);
    const [filterMonthItemPurchase,setFilterMonthItemPurchase] =useState([]);
    const [filterMonthExpenses,setFilterMonthExpenses] =useState([]);
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


     useEffect(()=>{
        if (selectOptions === 'Month') {
            setFilterMonthPayment(payment?.filter((row)=> dayjs(row.paymentDate).format('MMMM') === month))
            setFilterMonthPayRoll(payRoll?.filter((row)=> dayjs(row.month).format('MMMM') === month))
            setFilterMonthItemPurchase(itemPurchase?.filter((row)=> dayjs(row.itemPurchaseDate).format('MMMM') === month))
            setFilterMonthExpenses(expenses?.filter((row)=> dayjs(row.expenseDate).format('MMMM') === month))
        } else if (selectOptions === 'Year') {
            setFilterMonthPayment(payment?.filter((row)=> dayjs(row.paymentDate).format('YYYY') === dayjs(startDate).format('YYYY') ))
            setFilterMonthPayRoll(payRoll?.filter((row)=> dayjs(row.month).format('YYYY') === dayjs(startDate).format('YYYY')))
            setFilterMonthItemPurchase(itemPurchase?.filter((row)=> dayjs(row.itemPurchaseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
            setFilterMonthExpenses(expenses?.filter((row)=> dayjs(row.expenseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
        }
         else if (selectOptions === 'Custom') {
            setFilterMonthPayment(payment?.filter((row)=> filteredData.find((Item)=> dayjs(Item).format('DD/MM/YYYY') ===  dayjs(row.paymentDate).format('DD/MM/YYYY') )))
            setFilterMonthPayRoll(payRoll?.filter((row)=> filteredData.find((Item)=> dayjs(Item).format('DD/MM/YYYY') ===  dayjs(row.month).format('DD/MM/YYYY') )))
            setFilterMonthItemPurchase(itemPurchase?.filter((row)=> filteredData.find((Item)=> dayjs(Item).format('DD/MM/YYYY') ===  dayjs(row.itemPurchaseDate).format('DD/MM/YYYY') )))
            setFilterMonthExpenses(expenses?.filter((row)=> filteredData.find((Item)=> dayjs(Item).format('DD/MM/YYYY') ===  dayjs(row.expenseDate).format('DD/MM/YYYY') )))
        }
         else if (selectOptions === 'All') {
            setFilterMonthPayment(payment)
            setFilterMonthPayRoll(payRoll)
            setFilterMonthItemPurchase(itemPurchase)
            setFilterMonthExpenses(expenses)
        }
     },[selectOptions,month,startDate,filteredData])
    {/** Month Filter End */}


    const monthArray = []

    filterMonthPayment.forEach(row=>{
        monthArray.push({
          type:'Payment',
          date: row.paymentDate,
          number:row.paymentNumber,
          numberArray: row.TotalAmount!==null?row.TotalAmount:[],
          defect: row.modes,
          payment: row.amount,
          status:'',
          credit: row.remaining
        })
      })
    filterMonthPayRoll.forEach(row=>{
        monthArray.push({
          type:'Pay Slip',
          month: row.month,
          date: row.payDate,
          number: row.payNumber,
          description: 'Net Payable' ,
          amount: row.totalPaidDollars,
        })
      })
    filterMonthItemPurchase.forEach(row=>{
        monthArray.push({
          type:'Item Purchase',
          date: row.itemPurchaseDate,
          number: row.itemPurchaseNumber,
          reason: row.reason ,
          description: row.projectName !== undefined?row.projectName:row.description ,
          amount: row.amount,
        })
      })
      filterMonthExpenses.forEach(row=>{
        monthArray.push({
          type:'Expenses',
          date: row.expenseDate,
          number: row.expenseNumber,
          reason: row.expenseCategory.expensesCategory + ' For '+ row.accountName ,
          description: row.accountNameInfo.name !== ''?row.accountNameInfo.name:row.description ,
          amount: row.total,
        })
      })
      const [TotalExpenses,setTotalExpenses]= useState(0);
      const [TotalDExpenses,setTotalDExpenses]= useState(0);
      const [TotalItemPurchase,setTotalItemPurchase]= useState(0);
      const [TotalPayRoll,setTotalPayRoll]= useState(0);
      const [TotalPayment,setTotalPayment]= useState(0);
      const [TotalRevenue,setTotalRevenue]= useState(0);

      const handleChangeSelected = (e)=>{
        setSelectOptions(e.target.value)
        setMonth('');
    }

      useEffect(()=>{
            const TPayment = filterMonthPayment.length>0?filterMonthPayment.reduce((sum,row)=> sum + row.amount,0):0
            const TPayRoll = filterMonthPayRoll.length>0?filterMonthPayRoll.reduce((sum,row)=> sum + row.totalPaidDollars,0):0
            const TPayExpenses = filterMonthExpenses.length>0?filterMonthExpenses.reduce((sum,row)=> sum + row.total,0):0
            const TPayItemPurchase = filterMonthItemPurchase.length>0?filterMonthItemPurchase.reduce((sum,row)=> sum + row.amount,0):0
            const Gain= TPayment - (Number(TPayRoll) +Number(TPayExpenses) + Number(TPayItemPurchase) )
            setTotalPayment(TPayment);
            setTotalDExpenses(TPayExpenses);
            setTotalPayRoll(TPayRoll);
            setTotalItemPurchase(TPayItemPurchase);
            setTotalExpenses(Number(TPayRoll) +Number(TPayExpenses) + Number(TPayItemPurchase) )
            setTotalRevenue(Gain)
      },[filterMonthPayment,filterMonthPayRoll,filterMonthExpenses,filterMonthItemPurchase]);

      const componentRef = useRef();
      const handlePrint = useReactToPrint({
        content:()=> componentRef.current
      })

      const data = [
        { label: 'Total DailyExpenses', value: TotalDExpenses },
        { label: 'Total ItemPurchase', value: TotalItemPurchase },
        { label: 'Total PayRol', value: TotalPayRoll },
        { label: 'Total Payment', value: TotalPayment },
        { label: 'Total Expenses', value: TotalExpenses },
        { label: 'Revenue', value: TotalRevenue },
      ];
      let amount3 = 0;
      const Payment = monthArray?.sort((a,b)=> new Date(a.date) - new Date(b.date)).map((row)=>{
        if (row.type === 'Payment') {
          amount3 += parseFloat(row.payment)
      } else if(row.type !== 'Payment') {
          amount3 -= parseFloat(row.amount)
      }
        return({
        ...row,
        date:dayjs(row.date).format('DD/MM/YYYY'),
        Details: row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0? ('PAY-0'+ row.number+ ' $' + row.credit + ' In Advanced Payment (Credit) '):('PAY-0'+ row.number+ ' $' + row.payment + ' for payment of ' + row.numberArray?.map((row2)=> 'INV-0'+row2.Ref)+ ' / Mode: ' + row.defect),
        balance:`$${amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`,
        payment:row.type ==='Payment'? `$${row.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`:'',
       })}
    )

      const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const workSheet = workbook.addWorksheet('Sheet1');
        workSheet.columns = [
          {
            header:"Date", key:'date',width: 20
          },
          {
            header:"Type", key:'type',width: 20
          },
          {
            header:"Detail", key:'Details',width: 20
          },
          {
            header:"Payments", key:'payment',width: 20
          },
          {
            header:"Revenue", key:'balance',width: 20
          },
        ];

        Payment.forEach(item=>{
          workSheet.addRow(item)
        });
        const buffer = await workbook.xlsx.writeBuffer();
        const bold = new Blob([buffer], {type:'application/octet-stream'});
        saveAs(bold, 'Payment.xlsx')
      }
      const palette = ['yellow','#643047','orange','blue','red', 'green'];

      let amount2 = 0;

      const allStandingRow = monthArray?.sort((a,b)=> new Date(a.date) - new Date(b.date)).map((row,i)=>{
        if (row.type === 'Payment') {
            amount2 += parseFloat(row.payment)
        } else if(row.type !== 'Payment') {
            amount2 -= parseFloat(row.amount)
        }
        return(
        <tr key={i}>
          <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
          <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>{row.type}</td>
          <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>
          <span>{row.type === 'Pay Slip' && ( row.description + ' REf ' + row.number)}</span>
          <span>{row.type === 'Expenses' && ('Ref D-0'+ row.number + ' / '+ row.reason + ' / ' + row.description )}</span>
          <span>{row.type === 'Item Purchase' && ('Ref IP-0'+ row.number + ' / '+ row.reason + ' / ' + row.description )}</span>
            <span>{row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && ( row.number+ ' $' + row.credit + ' In Advanced Payment (Credit) ')}</span>
            <span>{row.type === 'Payment' && row.numberArray.length > 0 && ( row.number+ ' $' + row.payment + ' for payment of ' + row.numberArray?.map((row2)=> 'INV-0'+row2.Ref)+ ' / Mode: ' + row.defect)}</span>
            <span>{row.type==='Payment' && row.numberArray.length === 0 && row.credit === 0 && ('Shop Payment Number '+row.number)}</span>
            </td>
            <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>{row.type !=='Payment'? `$${row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`:''}</td>
            <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>{row.type ==='Payment'? `$${row.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`:''}</td>
            <td style={{textAlign:'left',borderBottom:'1px solid #DDD'}}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` }</td>
        </tr>
      )})
      
  return (
    <div>
    <section style={{display:'flex',alignItems:'center',gap:'200px'}}>
    <FormControl sx={{width:'200px'}}>
                <InputLabel id="select">select</InputLabel>
                <Select
                   id="selectOptions"
                   value={selectOptions} 
                   onChange={(e)=>handleChangeSelected(e)}
                   name="selectOptions"
                   label="select"
                >
                      <MenuItem value="Year">Year</MenuItem>
                      <MenuItem value="Month">Month</MenuItem>
                      <MenuItem value="Custom">Custom</MenuItem>
                      <MenuItem value="All">All</MenuItem>
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
          <section style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <PrintTooltip title="Export to Excel"> 
                                <IconButton onClick={exportToExcel}>
                                <Explicit  />
                                </IconButton>
           </PrintTooltip>
        <PrintTooltip title="Print"> 
                                <IconButton onClick={handlePrint}>
                                <LocalPrintshop  />
                                </IconButton>
           </PrintTooltip>
          </section>
    </section>
    <br/>
    <Box hidden>
   <table ref={componentRef} className='invoicedetails'>
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
          <tbody>
              <tr>
              <th style={{borderBottom:'1px solid black'}}>
              <div className='invoiceTest'>  
  <span>
<img src={Image} />       
</span> 
<address style={{textAlign:'right', fontSize:'70%',marginTop:'10px'}}>
<p style={{fontWeight:'bold'}}>GLOBAL GATE SARL </p>
<p style={{fontWeight:'normal'}}>RCM CD/KWZ/RCCM/22-B-00317 <br/>
 ID NAT 14-H5300N11179P <br/>
 AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br/>
 KOLWEZI LUALABA <br/>
 DR CONGO </p>
</address>
              </div>
              </th>
              </tr>
          </tbody>
          <tbody>
              <tr>
              <td>
                <div>
                <p className='invoicehr'></p>
<div className='content' style={{marginBottom:'20px',position:'relative'}}>
<section style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
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
                <td colSpan={2} style={{backgroundColor:'#e8f7fe',border:'none',textAlign:'left'}}>Transaction Summary</td>
                </tr>    
              <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total PayRoll</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
              <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Item Purchase</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
              <tr>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'left'}}><span >Total Daily Expenses</span></td>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'right'}}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Payment</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'left'}}><span >Total Expenses</span></td>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'right'}}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Revenue</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            </tbody>
          </table>
    </section>
  <section style={{}}>
  <table className="secondTable" style={{fontSize:'70%',marginBottom:'5px',border:'1px solid #DDD', maxHeight:'400px', overflow:'auto', pageBreakInside:'auto'}}>
<thead>
                  <tr>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Date</th>
                      <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Transaction</th>
                      <th style={{width:'400px',borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Details</th>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Amount</th>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Payments</th>
                      <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Balance</th>
                  </tr>
              </thead>
                   <tbody>
 {allStandingRow}
  <tr>
    <td colSpan={3}></td>
    <td colSpan={2}>Revenue</td>
    <td>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</td>
  </tr>
</tbody>
          </table>
  </section>             
        </div>
                </div>
              </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
              <td>
              <div  style={{position:'relative',marginTop:'20px'}}>
                <p hidden>...</p>
                <p hidden>...</p>
                <br/>
                <section style={{position:'fixed',bottom:0,left:0,right:0,justifyContent:'center', display:'flex', alignItems:'center', gap:'10px'}}>
<p style={{display:'flex',gap:'8px',alignItems:'center'}}>
        <span><EmailIcon/></span>
        <span>contact@globalgate.sarl</span>
      </p>
      <p style={{display:'flex',gap:'8px',alignItems:'center'}}>
        <span><PhoneIcon/></span>
        <span>+243 827 722 222</span>
      </p>
      <p style={{display:'flex',gap:'8px',alignItems:'center'}}>
        <span><WebIcon/></span>
        <span>www.GlobalGate.sarl</span>
      </p>
                </section>
      
            </div>
              </td>
              </tr>
          </tfoot>
      </table>
    </Box>
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
<PieChart
      series={[
        {
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          data,
        },
      ]}
      colors={palette}
      margin={{ right: 5 }}
      width={200}
      height={200}
      legend={{ hidden: true }}
    />
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
                <td colSpan={2} style={{backgroundColor:'#e8f7fe',border:'none',textAlign:'left'}}>Transaction Summary</td>
                </tr>    
              <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total PayRoll</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
              <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Item Purchase</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
              <tr>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'left'}}><span >Total Daily Expenses</span></td>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'right'}}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Total Payment</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'left'}}><span >Total Expenses</span></td>
              <td style={{backgroundColor:'white',borderBottom:'1px solid black',textAlign:'right'}}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            <tr>
              <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Revenue</span></td>
              <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{`$${TotalRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</span></td>
            </tr>
            </tbody>
          </table>
</section>
<table className="secondTable" style={{fontSize:'70%',marginBottom:'5px',border:'1px solid #DDD', maxHeight:'400px', overflow:'auto', pageBreakInside:'auto'}}>
<thead>
                  <tr>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Date</th>
                      <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Transaction</th>
                      <th style={{width:'400px',borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Details</th>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Amount</th>
                      <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Payments</th>
                      <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Balance</th>
                  </tr>
              </thead>
                   <tbody>
 {allStandingRow}
  <tr>
    <td colSpan={3}></td>
    <td colSpan={2}>Revenue</td>
    <td>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}`}</td>
  </tr>
</tbody>
          </table>
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

export default PaymentReportInf
