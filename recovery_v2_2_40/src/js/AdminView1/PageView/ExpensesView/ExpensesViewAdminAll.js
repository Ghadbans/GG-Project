import React, { useEffect,useState } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {TableContainer,Checkbox,MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box, Autocomplete,Table,TableBody,TableCell,TableRow,TableHead } from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { ArrowBack, Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function ExpensesViewAdminAll() {
  let {id} = useParams()
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
      .then(res => {
        // Handle the response data here
        const Name = res.data.data.employeeName;
        const Role = res.data.data.role;
        dispatch(setUser({userName: Name, role: Role}));
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch(logOut())
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  },[dispatch])

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [expenses,setExpenses] = useState([])
  const [invoice,setInvoice] = useState([]);
  const [expenses2, SetExpenses2] = useState({})
  const [loadingData, setLoadingData] = useState(true);
  const apiUrl = 'http://192.168.0.200:8080/endpoint/dailyexpense';
  useEffect(()=> {
  axios.get(apiUrl)
  .then(res => {
    // Handle the response data here
    setExpenses(res.data.data.reverse());
    setLoadingData(false)
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
    setLoadingData(false)
  });
},[])
useEffect(()=> {
axios.get('http://192.168.0.200:8080/endpoint/invoice')
.then(res => {
  // Handle the response data here
  const result = res.data.data.filter((row)=> row.Ref && (
    row
  ))
  setInvoice(result)
})
.catch(error => {
  // Handle errors
  console.error('Error fetching data:', error);
  setLoadingData(false)
});
},[])
const newExpense = expenses.filter((row)=> !invoice.some((item)=>
                                   row.referenceNumber === item.invoiceNumber
                               ))

  const [amount,setAmount] =useState(0);
  const [amount2,setAmount2] =useState(0);
  useEffect(()=>{
    let row = document.querySelectorAll('#totalCostInfo');
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
      sum += parseFloat(row[i].innerHTML);
      setAmount(sum)
    }
    let invTotal= document.querySelectorAll('#totalInvoice')
    let prod = 0
    for (let i = 0; i < invTotal.length; i++) {
      prod = parseFloat(invTotal[i].innerHTML);
      setAmount2(prod)
    }
  })
  const Gain = amount2-amount
  const data = [
    {
      "id":1,
      "label":"Cost",
      "value":amount,
    },
    {
      "id":2,
      "label":"Sell",
      "value":amount2,
    },
    {
      "id":3,
      "label":"Sell",
      "value":Gain,
    }
  ];
  
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const [show, setShow] = useState(1);
const handleShow = (e) =>{
    setShow(e);
}
const expensesFiltered = newExpense?.filter((row)=> row._id === expenses2._id)

const [show1, setShow1] = useState(1);
  const handleShow1 = (e) =>{
      setShow1(e);
  }
const [reason,setReason]= useState("");
const [Comments1,setComments]= useState([]);

useEffect(()=> {
  axios.get('http://192.168.0.200:8080/endpoint/comment')
           .then(res => {
                   // Handle the response data here
                   const resp = res.data.data.filter((row)=> row.CommentInfo.idInfo === id)
                   setComments(resp.reverse())
           })
           .catch(error => {
                   // Handle errors
                   console.error('Error fetching data:', error);
   });
   },[id])

const CommentInfo = 
  {
    idInfo: id,
    person: user.data.userName ,
    reason
  }

  {/** Loading Start */}

  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);

  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(()=> {
      setLoading(false);
    }, 500)

  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
   }, 500)
  }
  const handleClose = () => {
    setLoadingOpenModal(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */}
  const dateComment = dayjs(Date.now());
 
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
   axios.post('http://192.168.0.200:8080/endpoint/create-comment/',data)
    .then((res) => {
      if (res) {
        setReason("");
        handleOpen();
        const newData = res.data.data
        setComments([newData,...Comments1])
      }
    })
    .catch((error) => {
      if (error) {
        handleError();
      }
    });
  } 
  return (
    <div className='Homeemployee'>
    <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
 <div className='headername'>
   <Typography variant='h5'>Expenses</Typography>
 </div>
 <div className='rightcontent'>
 <ViewTooltip title="Back" placement='bottom'> 
          <IconButton onClick={() => navigate(-1)}>
          <ArrowBack className='btnCustomer6' />
          </IconButton>
          
        </ViewTooltip>
   <NotificationsNoneIcon className='iconesize'/>
   <Typography>User Name</Typography>
   <ViewTooltip title="Logout">
            <IconButton onClick={handleLogout}>
            <Logout style={{color:'white'}} /> 
            </IconButton>
          </ViewTooltip>
 </div>
</div>
</div>
<br/>
{
      loadingData?<div className='invoice'>
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
<div className='itemview1'>
<Grid container spacing={2}>
{show1===1 ?
    (
    <Grid item xs={3}>
    { show ===1  ?   (
    <div className='itemInfoContainer'>
       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All Expense</Typography>
            </div>
       <div style={{padding:'20px'}}>
        <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
       </div>
           </div>
                <div style={{height:'513px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>     
                {newExpense?.map((row) => (
    <div className='itemInfoContainerContent1' key={row._id}>
      <div style={{display:'flex',lineHeight:'2px',fontSize:'1rem',width:'100%'}} >
      <Checkbox/>
      <NavLink to={`/ExpensesViewAdminAll/${row._id}`} className='LinkName'  style={{width:'75%'}}>
      <div style={{display:'flex', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
    <div className='itemInfoContainerContent'>
    <Typography>{row.customerName!== undefined?row.customerName.customerName.toUpperCase():''}</Typography>
    </div>  
    <div>
    <Typography>INV-00{row.referenceNumber}</Typography>
         
    </div>
    </div>
    </NavLink>
    </div>   
    </div>  
     ))}    
                </div>         
            </div>   )
           :''
         }
{ show === 2  ?     
( <div className='itemInfoContainer'>
<Grid container style={{alignItems:'center',padding:'10px'}} spacing={3}>
 <Grid item xs={10}>
<Autocomplete
 disableClearable
     options={newExpense}
     getOptionLabel={(option) => 'INV'+String(option.referenceNumber)}
     renderOption={(props,option)=> (<Box {...props}>{option.customerName.customerName.toUpperCase()}/INV-00{String(option.referenceNumber)}
       </Box>)}
     onChange={(e,newValue)=>SetExpenses2(newValue)}
     renderInput={(params) => <TextField {...params} label="Expenses"/>}
     size="small"
     sx={{ width: '100%', backgroundColor:'white' }} 
     />
 </Grid>
 <Grid item xs={2}>
 <ViewTooltip title="Close" placement='bottom'>
   <IconButton onClick={() => handleShow(1)} style={{ position:'relative', float:'right'}}> 
                 <Close style={{color:'#202a5a'}}/>
   </IconButton>
   </ViewTooltip> 
 </Grid>
</Grid>
   
       <div style={{height:'565px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
       {expensesFiltered?.map((row) => (
    <div className='itemInfoContainerContent1' key={row._id}>
      <div style={{display:'flex',lineHeight:'2px',fontSize:'1rem',width:'100%'}} >
      <Checkbox/>
      <NavLink to={`/ExpensesViewAdminAll/${row._id}`} className='LinkName'  style={{width:'75%'}}>
      <div style={{display:'flex', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
    <div className='itemInfoContainerContent'>
    <Typography>{row.customerName!== undefined?row.customerName.customerName.toUpperCase():''}</Typography>
    </div>  
    <div>
    <Typography>INV-00{row.referenceNumber}</Typography>
         
    </div>
    </div>
    </NavLink>
    </div>   
    </div>  
     ))}   
               </div>           
           </div>)
           :''
         }
    </Grid>):''}
    <Grid item xs={9}>
    <div className='itemInfoContainer2'>
        <div style={{width:'100%', background:'white'}}>


        {expenses?.filter(row=> row._id === id)?.map((row)=>(
       <div key={row._id}>

        <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div>
              <Typography variant='h5'>{row.customerName!== undefined?row.customerName.customerName.toUpperCase():''}</Typography>
              <Typography>INV-00{row.referenceNumber}</Typography>
      </div>
      <div>
      <p className='btnCustomer1' onClick={() => handleShow1(2)}>Comments</p>
      </div>
     </header>
     <hr/>
     <div style={{height:'450px', overflow:'hidden',overflowY:'scroll', width:'100%', background:'white', margin:'10px' }}>
           <div className='itemInfoContainer2Content'>
           <Grid container>
            <Grid item xs={12}>
                <div style={{padding:'5px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'15px', justifyContent:'space-between'}}>
                  <table className='tableItemInfo'>
        <tbody>
              <tr>
                <th align='left'><Typography variant='h6'>Reference</Typography></th>
                <td><Typography >INV-00{row.referenceNumber}</Typography></td>
              </tr>
        </tbody>
            </table>
            <table className='tableItemInfo'>
        <tbody>
              <tr>
                <th align='left'><Typography variant='h6' >Date</Typography></th>
                <td><Typography>{dayjs(row.expenseDate).format('DD/MM/YYYY')}</Typography></td>
              </tr>
        </tbody>
            </table>
                  </div>
            <br/>
            <Typography >Item Expenses Cost</Typography>
            <div style={{width:'100%'}}>
              <table className='tableinvoice'>
        <thead>
        <tr><th align='center' style={{width:'50px'}}>#</th>
                    <th style={{textAlign:'left', padding:'10px',width:'100px'}}>Item</th>
                    <th style={{textAlign:'left', padding:'10px',width:'120px'}}>Cost Unit price</th>
                    <th style={{textAlign:'left', padding:'10px', width:'80px'}}>Qty</th>
                    <th style={{textAlign:'left', padding:'10px', width:'80px'}}>Amount</th>
                </tr>
        </thead>
        <tbody>
          {row.items?.map((Item,i)=> (
            <tr key={Item.idRow}> 
             <td style={{textAlign:'center'}}> {i+1}</td>
           <td >{Item.itemName.itemName}</td>
          <td >{Item.itemCost}</td>
              <td>{Item.itemQty}</td>
              <td id='totalCostInfo'>{Item.itemCost*Item.itemQty}</td>
            </tr>
          ))}
        </tbody>
              </table>
              <div className='downTabledetails' style={{alignItems:'center'}}>
    <div style={{width:'55%',padding:'5px'}}>
        <ul style={{listStyle:'none'}}>
            <li>Total Cost Item</li>
        </ul>
    </div>
        <div className='downTabledetailstotal'>
        <table className="firstTable2">
            <tbody>
              <tr>
                <th style={{ borderBottom:'none'}}><span >Total</span></th>
                <td style={{ borderBottom:'none'}}><span data-prefix>$</span><span id='sumTotalCost'>{amount}</span></td>
              </tr>
              </tbody>
              </table>
              </div>
              </div>
            </div>
                </div>
            </Grid>
            <Typography>Item Invoice Sell</Typography>
            <Grid item xs={12}>
              {/* Table */}

         <table className='tableinvoice'>
        <thead>
        <tr>
                    <th align='center' style={{width:'50px'}}>#</th>
                    <th style={{textAlign:'left', padding:'10px',width:'20%'}}>Item</th>
                    <th style={{textAlign:'left', padding:'10px',width:'40%'}}>Description</th>
                    <th style={{textAlign:'right', padding:'10px', width:'10%'}}>Qty</th>
                    <th style={{textAlign:'right', padding:'10px',width:'15%'}}>Unit Price</th>
                    <th style={{textAlign:'right', padding:'10px',width:'13%'}}>Discount</th>
                    <th style={{textAlign:'right', padding:'10px', width:'15%'}}>Amount</th>
                </tr>
        </thead>
        <tbody>
        {row.items?.map((Item,i)=> (
               <tr key={Item.idRow}> 
               <td style={{textAlign:'center'}}> {i+1}</td>
               <td >{Item.itemName.itemName}</td>
                <td style={{textAlign:'left', padding:'10px'}}>{Item.itemDescription}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemQty}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemRate}</td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemDiscount}<span data-prefix>%</span></td>
                <td style={{textAlign:'right', padding:'10px'}}>{Item.itemAmount}</td>
            </tr>
      ))}
        </tbody>
    </table>
    <div className='downTabledetails'>
    <div style={{width:'55%',padding:'5px'}}>
        <ul style={{listStyle:'none'}}>
            <li>Total Invoice Item</li>
        </ul>
    </div>
        <div className='downTabledetailstotal'>
        <table className="firstTable2">
            <tbody>
              <tr>
                <th style={{ borderBottom:'none'}} ><span >Total</span></th>
                <td style={{ borderBottom:'none'}}><span data-prefix>$</span><span id='totalInvoice'> {row.subTotal}</span></td>
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
     {/* End details */}
            </Grid>
            <Grid item xs={12} style={{display:'flex',margin:'10px',alignItems:'center'}}>
            <ResponsiveContainer width="100%" height="100%" margin="30%">
        <PieChart  width={50} height={50}>
        <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry) =>
        {
          if (entry.id === 1) {
            return <Cell key={`cell-${entry.id}`} fill="#FFBB28"/>
          }
          else if (entry.id === 2) {
            return <Cell key={`cell-${entry.id}`} fill="#0088FE"/>
          } else if (entry.id === 3){
            return <Cell key={`cell-${entry.id}`} fill="#00C49F"/>
          }
        }
        )}

      </Pie>
        </PieChart>
      </ResponsiveContainer>
              <Table >
                <TableBody>
                  <TableRow>
                  <TableCell align='center' sx={{backgroundColor:'#FFBB28',color:'white'}}><Typography>Cost</Typography></TableCell>
                  <TableCell align='right' sx={{color:'#FFBB28', width:'30%'}} id='amountT'><Typography> <span data-prefix>$</span> {amount}</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align='center' sx={{backgroundColor:'#0088FE',color:'white'}}><Typography>Sell</Typography></TableCell>
                  <TableCell align='right' sx={{color:'#0088FE', width:'30%'}}><Typography> <span data-prefix>$</span> {row.subTotal}</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align='center' sx={{backgroundColor:'#00C49F',color:'white'}}><Typography>Gain</Typography></TableCell>
                  <TableCell align='right' sx={{color:'#00C49F', width:'30%'}}><Typography> <span data-prefix>$</span> {row.subTotal-amount}</Typography></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
        </Grid>
           </div>
           </div>
           </div>
           ))}

        </div>
    </div>
    </Grid>
    {show1===2 ?
     <Grid item xs={3}>
      <div className='itemInfoContainer'>
        <div style={{padding:'10px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>COMMENTS</p>
         <p className='btnCustomer1' onClick={() => handleShow1(1)}>Close</p>
      </div>
           <form onSubmit={handleSubmitEdit}>
            <Grid container style={{alignItems:'center'}} spacing={1}>
              <Grid item xs={12}>
              <TextField 
          required
          id='comments'
          name='comments' 
          multiline
          rows={4}
          value={reason}
          onChange={(e)=>setReason(e.target.value)}
          label='Comments'
          sx={{ width:'100%', backgroundColor:'white' }}      
              />
              </Grid>
              <Grid item xs={12}>
              <button type='submit' style={{width:'100%'}} className='btnCustomer6'>Save</button>
              </Grid>
            </Grid>

        </form> 
        <hr/>
        </div>
        <div style={{height:'333px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
            <table style={{width:'100%'}}>
              <tbody>
                 {Comments1.map((Item)=>(
                    <tr key={Item._id}>
                      <td style={{width:'100%',borderBottom:'1px solid black'}}>
                       {Item.dateComment?dayjs(Item.dateComment).format('DD/MM'):''} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                      </td>
                    </tr>
                 ))}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
           </Grid>:""}
</Grid>
</div>
      )}
      <Modal 
           open={loadingOpenModal}
           onClose={handleClose}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data Saved successfully</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleClose} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
        <Modal 
           open={ErrorOpenModal}
           onClose={handleCloseError}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
                  <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CancelIcon style={{color:'red',height:'40px', width:'40px'}}/></p>
                  <h2> Data Failed to Saved</h2>
                  <button className='btnCustomer' onClick={handleCloseError}>
                    Try Again
                  </button>
                </div>
                )}
          </Box>
          </Modal>
</div>
  )
}

export default ExpensesViewAdminAll
