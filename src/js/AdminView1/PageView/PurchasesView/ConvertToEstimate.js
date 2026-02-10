import React, { useEffect,useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {OutlinedInput,InputAdornment,MenuItem,Grid, IconButton, Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Box, Modal, Backdrop, Fade } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, RemoveCircleOutline } from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate,NavLink } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  
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
  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
function ConvertToEstimate() {
    let {id} = useParams();
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);
  
    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      if (storesUserId) {
        axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
      const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/create-estimation';
      const [purchaseName,setPurchaseName] = useState("");
      const estimateDate =dayjs(Date.now());
      const [estimateSubject,setEstimateSubject] = useState("");
      const status="Draft";
      const [customerName1,setCustomerName1] = useState('');
      const [estimateDefect,setEstimateDefect] = useState("");
      const [ItemInformation,setItemInformation]= useState([]);
      const [note, setNote] = useState("Thanks For your Business.");
      const [terms, setTerms] = useState("ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. ");
      const [projectName,setProjectName] = useState('');
      const [items, SetItems] = useState([]);
      const [inputValue, setInputValue] = React.useState('');
      const [subTotal, setSubTotal] = useState(0);
      const [total, setTotal] = useState(0);
      const [shipping, setShipping]= useState(0);
      const [adjustment,setAdjustment]=useState('Adjustment')
      const [adjustmentNumber,setAdjustmentNumber]=useState(0)
      const [totalInvoice, setTotalInvoice]= useState(0);
      const [balanceDue, setBalanceDue] = useState(0);
      const [totalW,setTotalW] =useState("");
       const [estimateNumber,setEstimateNumber]= useState(0);
  
       const dateComment = dayjs(Date.now()).format('DD/MM/YYYY')
       const Create = {person: user.data.userName+ ' CREATED ',
                      dateComment
                    }
       const estimateName = "EST-00"+estimateNumber
    useEffect(()=>{
      let newNumber = 0;
      axios.get('https://gg-project-productionn.up.railway.app/endpoint/estimation')
      .then(res => {
              // Handle the response data here
         res.data.data.map((row)=>{
                                                newNumber = row.estimateNumber
                                              })
              const result = newNumber + 1;
              setEstimateNumber(result);
      })
      .catch(error => {
              // Handle errors
              console.error('Error fetching data:', error);
  });
    },[])
    useEffect(()=>{
      axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
      .then(res => {
              // Handle the response data here
              setItemInformation(res.data.data.reverse())      
      })
      .catch(error => {
              // Handle errors
              console.error('Error fetching data:', error);
    });
    },[])
const handleChange = (e,i) => {
        const {name, value} = e.target;
        const list = [...items];
        list[i][name] = value;
        list[i]['totalAmount'] = Math.round((  list[i]['itemQty']*list[i]['itemRate'])*100)/100;
        list[i]['totalCost'] = Math.round((list[i]['itemQty']*list[i]['itemCost'])*100)/100;
        list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
        list[i]['percentage'] = list[i]['discount']/100;
        list[i]['itemAmount'] = Math.round((list[i]['totalAmount']-list[i]['percentage'])*100)/100;
        list[i]['totalGenerale'] = Math.round((list[i]['itemCost']*list[i]['itemBuy'])*100)/100;
        SetItems(list);
    }
  
    const [customerName,setCustomerName]= useState({});
    
    useEffect(()=>{
        axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-purchase/${id}`)
        .then(res => {
            // Handle the response data here
           setCustomerName1(res.data.data.customerName);
           setProjectName(res.data.data.projectName);
           SetItems(res.data.data.items);
           setPurchaseName(res.data.data.purchaseName);
          })
          .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
          });
    },[])
 useEffect(()=> {
    axios.get('https://gg-project-productionn.up.railway.app/endpoint/customer')
    .then(res => {
            // Handle the response data here
      res.data.data.filter((row)=> row._id === customerName1._id)
                                             .map((row)=>  setCustomerName(
                                                {
                                                    _id: row._id,
                                                    customerName: row.customerFullName || row.companyName,
                                                    billingAddress: row.billingAddress,
                                                    billingCity: row.billingCity
                                                }
                                             ))
    })
    .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
});
 },[customerName1])
      //addItem
      const addItem = () => {
        SetItems([...items, {
            idRow:v4(),
            itemName:{},
            itemDescription: "",
            itemDiscount:0,
            itemQty:0,
            itemRate:0,
            itemAmount:0,
            totalAmount:0,
            discount:0,
            percentage:0,
            itemBuy:0,
            itemWeight: "",
            totalGenerale:0,
            stock: 0,
            itemOut:0,
            newItemOut:0,
          }]);
      }
      const addItemWhite = () => {
        SetItems([...items, {
          newDescription: "",
          idRow:v4(),
          itemName:{
            _id:"",
            itemName:""
          },
          itemDescription: "",
          itemDiscount:0,
          itemQty:0,
          itemRate:0,
          itemAmount:0,
          itemCost:0,
          totalAmount:0,
          discount:0,
          percentage:0,
          itemBuy:0,
          itemWeight: "",
          totalGenerale:0,
          totalCost:0,
          stock: 0,
          itemOut:0,
          newItemOut:0,
          }]);
      }
      const handleDragEnd = (result) => {
        if (!result.destination) {
          return;
      }
      const newItems = [...items];
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);
      SetItems(newItems)
      };
  useEffect (() => {
    const result1 = items.reduce((sum, row)=>  sum + row.itemAmount,0)
    setSubTotal(result1.toFixed(2))
    let newTotal = Number(subTotal) + Number(shipping) + Number(adjustmentNumber)
    setTotalInvoice(newTotal)
    let newBalance = totalInvoice-total
    setBalanceDue(newBalance)
    });
    useEffect(()=> {
      if (totalInvoice) {
        const wholePart = Math.floor(totalInvoice)
        const fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
        const wholeWords = numberToWords.toWords(wholePart)
        const fractionalWords = numberToWords.toWords(fractionalPart)
        console.log(fractionalWords)
        setTotalW(`${wholeWords} and ${fractionalWords} cents`)
      }
    },[totalInvoice])
    const [open1, setOpen1] = useState(false);
  
    const handleOpenUpdate = (e) => {
      e.preventDefault()
      setOpen1(true);
    };
    const handleCloseUpdate = () => {
      setOpen1(false);
    };
      {/** Modal Item Show */}
  const [selectedRowId, setSelectedRowId ] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [targetRowId, setTargetRowId] = useState('');
  const handleDelete = (idRow) => {
    setSelectedRowId(idRow);
    setShowModal(true);
  }
  const handleCloseRowId = ()=> {
    setShowModal(false);
  }
  const deleteItem = () =>{
    const newRowId = targetRowId
    if (newRowId) {
      const selectRow = items.find(item=> item.idRow === selectedRowId);
      const targetRow = items.find(item => item.idRow === newRowId);
      if (selectRow && targetRow) {
       const newTotal = targetRow.totalAmount += selectRow.totalAmount
       const newRate = newTotal / targetRow.itemQty 
       const newTotalAmount = targetRow.itemQty * newRate
       const discountTarget = targetRow.itemDiscount * newTotalAmount
       const newPercentage = discountTarget / 100
       const newTotalG = newTotalAmount - newPercentage 
       //update rate
       const updateRate = items.map(item => {
        if (item.idRow === targetRow.idRow) {
          return {...item, 
            itemRate: newRate,
            totalAmount: newTotalAmount,
            discount:discountTarget,
            percentage: newPercentage,
            itemAmount: newTotalG
            }
        }
        return item
       })
       SetItems(updateRate)
      }
    }
  SetItems (items => items.filter((Item)=> Item.idRow !==selectedRowId));
  setSelectedRowId('');setShowModal(false);setTargetRowId('');
  };
  {/** Modal Item Show End */}
      {/** Item InFO */}
  const handleChangeItem = (idRow, newValue) => {
    const selectedOptions = ItemInformation.find((option)=> option === newValue)
    SetItems(items=> items.map((row)=> row.idRow === idRow ? {...row, 
      itemName:{
        _id:selectedOptions?._id,
        itemName:selectedOptions?.itemName,
      },
      itemCost: selectedOptions?.itemCostPrice,
      itemDescription:selectedOptions?.itemDescription,
      itemRate:selectedOptions?.itemSellingPrice,
      stock:selectedOptions?.stockOnHand,
     }: row))
  }
const handleShowAutocomplete = (idRow) => {
    SetItems(items=> items.map((row)=> row.idRow === idRow ?{...row, 
      itemName:{
        _id:null,
        itemName:null
     }, 
     }: row))
  }
  const [openItemUpdate, setOpenItemUpdate] = useState(false);
  const [idItem,setIdItem] = useState(null)
  
  const handleOpenItemUpdate = async(id) => {
    setOpenItemUpdate(true);
    setIdItem(id);
  };
  const handleCloseItemUpdate = async() => {
    setOpenItemUpdate(false);
    if (idItem) {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-item/${idItem}`)
        SetItems(items=> items.map((row)=> row.itemName._id === res.data.data._id ? {...row, 
          itemDescription:res.data.data.itemDescription,
          costRate: res.data.data.itemCostPrice,
          itemRate: res.data.data.itemSellingPrice,
          stock: res.data.data.stockOnHand
          }: row)) 
      } catch (error) {
        
      }}
  };
  const [openAutocomplete2, setOpenAutocomplete2] = useState(false);

const handleOpenOpenAutocomplete2 = (e) => {
  e.stopPropagation()
 setOpenAutocomplete2(true);
};
const handleCloseOpenAutocomplete2 = () => {
  setOpenAutocomplete2(false);
};
const handleCreateItem = (newItem)=> {
  setItemInformation([...ItemInformation, newItem])
}
  {/** Item InFO End */}
  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);
  
  const handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);
  
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handleError = () => {
    setOpen1(false);
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
   }, 500)
  }
  
  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    } 
  }
  const handleUpdateQty = async () => {
    const initialStateId = {}
    const QtyUpdate = {}
    //Get Qty Arrays
    const QtyNew = items.map((Item)=> Item.itemQty)
    //Get ItemName Id
     items.forEach((Item,index)=> {
      initialStateId[`id${index+1}`] = {ids : Item.itemName._id}
    })
      // Get Value
      const getRequestId = Object.values(initialStateId).map(({ids})=>{
        return axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-item/${ids}`)
      })
    try {
      const res = await Promise.all(getRequestId);
      res.forEach((resp, index)=> { QtyUpdate[`id${index+1}`] = {ids: resp.data.data._id ,data : { stockOnHand: resp.data.data.stockOnHand - QtyNew[index]}}})
     }catch (error) {
    }
      // Update Value 
      const updateRequest = Object.values(QtyUpdate).map(({ids, data})=>{
      return axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-item/${ids}`,data)
     }) 
     try {
       await Promise.all(updateRequest);
     }catch (error) {
    }
  } 
  const [idInvoice,setIdInvoice] = useState('');
  const statusPurchase = 'Estimated'
  const handleSubmitStatusUpdate = (ReferenceInfo) => {
      const data = {
       status: statusPurchase,
       ReferenceName:ReferenceInfo
      }; 
      axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchase/${id}`,data)
   }
       const handleSubmit = async (e) => {
        e.preventDefault();

        try{
          const res = await axios.post(apiUrl,{
            customerName,
            estimateNumber,
            estimateDate,
            estimateDefect,
            estimateSubject,
            estimateName,
            status,
            items,
            subTotal,
            total,
            totalW,
            note,
            Create,
            Ref:projectName,shipping,adjustment,adjustmentNumber,totalInvoice,terms
          });
          if (res) {
            // Open Loading View
            const ReferenceInfo = res.data.data.estimateName
            handleSubmitStatusUpdate(ReferenceInfo);
            handleOpen();
            setIdInvoice(res.data.data._id);
            //Reset form
  
          }else{
            alert('An Error as Occur');
          }
        }catch(error){
          if (error) {
            handleError();
          }
        }
    };
   
  return (
    <div className='Homeemployee'>
         <div className='sidemnuandcontent'>
<SidebarDash/>
<div className='header'>
 <div className='headername'>
  <Typography variant='h5'>Convert Purchase to Estimate</Typography>
 </div>
 <div className='rightcontent'>
   <NotificationsNoneIcon className='iconesize'/>
   <Typography>{user.data.userName}</Typography>
   <BlackTooltip title="Logout">
            <IconButton onClick={handleLogout}>
            <Logout style={{color:'white'}} /> 
            </IconButton>
          </BlackTooltip>
 </div>
</div>
</div>
<div className='invoice2'>
          <form onSubmit={handleSubmit}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div>

      </div>
        <BlackTooltip title="Back" placement='left'> 
          <IconButton onClick={handleOpenUpdate}>
          <ArrowBack className='btnCustomer6' />
          </IconButton>
        </BlackTooltip>
    </div> 
         <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>    
              <Grid item xs={4}>   
              <TextField 
                  disabled
                  id='customerName'
                  name='customerName' 
                  label='Customer Name'
                  value={customerName1?customerName1.customerName:''}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
              </Grid>
              <Grid item xs={4}> 
               <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <InputLabel htmlFor="estimateNumber">Estimate Number</InputLabel>
                <OutlinedInput
                 required
                 disabled
                 type='number'
                 id='estimateNumber'
                 label='Estimate Number'
                 value={'00'+estimateNumber}
                startAdornment={<InputAdornment position="start">EST</InputAdornment>}
                />
               </FormControl>
               </Grid>
               <Grid item xs={4}> 
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='estimateDate' 
                    label='Date'
                    value={estimateDate}
                    sx={{ width: '100%', backgroundColor:'white' }}       
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={6}> 
          <TextField 
                  id='estimateSubject'
                  name='estimateSubject' 
                  label='Subject'
                  value={estimateSubject}
                  onChange={(e)=>setEstimateSubject(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={6}> 
          <TextField 
                  id='estimateDefect'
                  name='estimateDefect' 
                  label='Defect'
                  value={estimateDefect}
                  onChange={(e)=>setEstimateDefect(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
               </Grid>
               <Grid item xs={12}>
                  <div style={{display:'block',position:'fixed',zIndex:1,float:'right',right:'-5px'}}>
                    <section>
                   <BlackTooltip title="Add" placement="top">
            <IconButton onClick={addItem}>
            <Add className='btn1'/>  
            </IconButton>
          </BlackTooltip>    
                    </section>
           <section>
              <BlackTooltip title="Add" placement="bottom">
            <IconButton onClick={addItemWhite}>
            <Add className='btn1' style={{backgroundColor:'gray'}}/>  
            </IconButton>
          </BlackTooltip>
           </section>
           
          </div>
          <div>
                      <DragDropContext onDragEnd={handleDragEnd}>  
                        <table className='tableInfo10' style={{marginLeft:'-20px'}}>
                        <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Stock-A</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Discount %</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
            <Droppable droppableId="droppable" >  
                {(provided, snapshot) => (  
                    <tbody  
                    id="droppable"
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {items.map((Item, i) => (  
                            <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>  
                                {(provided, snapshot) => (  
                                   <tr  
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                   >
                                    {
                                      Item.newDescription !== undefined ?(
                                        <>
                                         <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                        <td colSpan={6}><TextField 
              required
                name='newDescription' id='newDescription' 
                value={Item.newDescription}
                onChange={(e) => handleChange(e,i)}
                size="small"
                disabled={user.data.role === 'User'}
                sx={{ width: '100%', backgroundColor:'white', fontSize:12}}       
      /></td>
         <td >
     <LightTooltip title="Delete" sx={{}}>
             <IconButton onClick={()=> deleteItem(Item.idRow)} >
             <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
             </IconButton>
           </LightTooltip>
       </td>
                                        </>
                                      ):(
                                       <>
                                           <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                 <td style={{height:'100px'}}>
        {
          Item.itemName.itemName? (
            (  
              <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
              <div >
              <Typography hidden = { Item.itemName?Item.itemName.itemName === 'empty':''} sx={{fontSize:'23px'}}>{Item.itemName?Item.itemName.itemName.toUpperCase():''}</Typography>
              <TextField 
              required
                name='itemDescription' id='itemDescription' 
                value={Item.itemDescription}
                multiline
                rows={3}
                onChange={(e) => handleChange(e,i)}
                size="small"
                disabled={user.data.role !== 'CEO'}
                sx={{ width: '440px', backgroundColor:'white', fontSize:12}}       
      />
              </div>
              <div>
              <BlackTooltip title="Clear" placement='top'>
        <IconButton onClick={()=>handleShowAutocomplete(Item.idRow)} style={{ position:'relative', float:'right'}}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
        {
          Item.itemName._id && (
            <BlackTooltip title="Edit" placement='bottom'>
        <IconButton onClick={()=>handleOpenItemUpdate(Item.itemName._id)} style={{ position:'relative', float:'right'}}> 
                      <Edit style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
          )
        }
          
              </div>
      </div>)
          ):(
            <div style={{display:'flex', alignItems:'center'}}>
   <Autocomplete
      disableClearable
                         options={ItemInformation}
                         getOptionLabel={(option) => option.itemName+'/'+option.itemBrand}
                         renderOption={(props,option)=> (<Box {...props}>{option.itemName+'/'+option.itemBrand}</Box>)}
                         renderInput={(params) =>
                         <TextField      multiline
                         rows={4} {...params} required 
                         />}
                         inputValue={inputValue}
                         onInputChange={(event, newInputValue) => {
                           setInputValue(newInputValue);
                         }}
                         filterOptions={(options,{inputValue})=>{
                          return options.filter(
                            (option)=>
                            option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                            option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                            option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()) 
                          )
                         }}
                         onChange={(e,newValue)=>handleChangeItem(Item.idRow, newValue)}
                         size="small"
                         PaperComponent={({children, ...other})=>(
                          
                          <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                              {children}
                              <div>
                              <button onClick={(e)=>handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                                ADD NEW Item
                              </button>
                              </div>
                            </Box>
                           )}
                         sx={{ width: '470px', backgroundColor:'white' }} 
                       />
                          <BlackTooltip title="Clear" placement='top'>
        <IconButton onClick={()=>handleShowAutocompleteDescription(Item.idRow)} style={{ position:'relative', float:'right'}}> 
          <RemoveCircleOutline style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
            </div>
          )
        }
    
          </td>
          <td>
           <TextField 
           disabled
                       name='stock' id='stock' 
                       value={Item.stock}
                       type='number'
                       onChange={(e) => handleChange(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
           </td>
          <td>
           <TextField 
                       name='itemQty' id='itemQty' 
                       onChange={(e) => handleChange(e,i)}
                       size="small"
                       type='number'
                       value={Item.itemQty}
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
           </td>
          <td >
           <TextField 
                       name='itemRate' id='itemRate'
                       value={Item.itemRate}
                       type='number'
                       disabled={user.data.role !== 'CEO'}
                       onChange={(e) => handleChange(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                      /> 
           </td>
           <td >
             <TextField 
                   name='itemDiscount' id='itemDiscount'
                       value={Item.itemDiscount}
                       onChange={(e) => handleChange(e,i)}
                       size="small"
                       type='number'
                       placeholder='1 to 5 %'
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
             </td>
      <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
     <td >
     <LightTooltip title="Delete" sx={{}}>
             <IconButton onClick={()=> handleDelete(Item.idRow)} >
             <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
             </IconButton>
           </LightTooltip>
       </td>
                                       </> 
                                      )
                                    }
                                   </tr>  
                                )}  
                            </Draggable>  
                        ))}  
                        {provided.placeholder}
                    </tbody>  
                )}  
            </Droppable>  
            </table>
        </DragDropContext>
             </div>
              </Grid> 
              <Grid item xs={12}>
                <div style={{display:'flex',gap:'20px',justifyContent:'space-between'}}>
                <TextField 
                  id='note'
                  name='note' 
                  multiline
                  rows={4}
                  value={note}
                  label='Invoice Note'
                  onChange={(e)=>setNote(e.target.value)}
                  sx={{ width: '50%', backgroundColor:'white' }}       
              />
<table className="firstTable">
                <tbody>
                  <tr style={{borderBottom:'1px solid black'}}>
                    <th style={{textAlign:'left'}}>Sub-Total</th>
                    <td  align="center">
                    <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                disabled
                type='number'
                id='subTotal'
                size="small"
                name='subTotal' 
                value={subTotal}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                      </td>
                  </tr>
                  <tr style={{borderBottom:'1px solid black'}}>
                    <th style={{textAlign:'left'}}>Shipping Fees</th>
                    <td  align="center">
                    <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                type='number'
                id='shipping'
                size="small"
                name='shipping' 
                value={shipping}
                onChange={(e)=>setShipping(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                      </td>
                  </tr>
                  <tr style={{borderBottom:'1px solid black'}}>
                    <th>      <TextField 
                    name='adjustment' id='adjustment'
                    size="small"
                    value={adjustment}
                         onChange={(e)=>setAdjustment(e.target.value)}
                        sx={{ width: '250px', backgroundColor:'white' }}       
                        /></th>
                    <td style={{borderBottom:'1px solid black'}}>
                    <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                type='number'
                id='adjustmentNumber'
                size="small"
                name='adjustmentNumber'
                value={adjustmentNumber}
                onChange={(e)=>setAdjustmentNumber(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                      </td>
                  </tr>
                  <tr style={{borderBottom:'1px solid black'}}>
                    <th style={{textAlign:'left'}}>Total</th>
                    <td  align="center">
                      
                     <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                disabled
                type='number'
                id='totalInvoice'
                size="small"
                name='totalInvoice' 
                value={totalInvoice}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                      </td>
                  </tr>
                 <tr style={{borderBottom:'1px solid black'}}>
                     <th style={{textAlign:'left'}}>Amount Paid</th>
                     <td  align="center">
                     <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                type='number'
                id='total'
                size="small"
                name='total' 
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                      </td>
                 </tr>
                 <tr style={{borderBottom:'1px solid black'}}>
                     <th style={{textAlign:'left'}}>Balance Due</th>
                     <td  align="center">
                     <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <OutlinedInput
                type='number'
                id='balanceDue'
                size="small"
                name='balanceDue' 
                value={balanceDue}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
               </FormControl>
                    </td>
                 </tr>
                 <tr>
                     <th style={{textAlign:'left'}}>Total In Words</th>
                     <td>
                     <TextField
                           required
                          name="totalW" id="totalW"
                          value={totalW} 
                          multiline
                          sx={{ width: '100%', backgroundColor:'white' }}       
                          maxRows={3}
                        />
                       </td>
                 </tr>
                </tbody>
              </table>
                </div>
    </Grid>
    <Grid item xs={12}>
    <TextField 
                  id='terms'
                  name='terms' 
                  multiline
                  rows={4}
                  value={terms}
                  label='Invoice Terms'
                  onChange={(e)=>setTerms(e.target.value)}
                  sx={{ width: '60%', backgroundColor:'white' }}       
              />
    </Grid>
              <Grid item xs={12}>
    <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button>
    </Grid>       
             </Grid>
         </form>
         </div>
         <Modal  
        open={showModal}
        onClose={handleCloseRowId}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseRowId} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
           <Typography>Please select the row to assign the total to: </Typography>
          </Grid>
          <br/>
          <Grid item xs={12}>
          <FormControl sx={{ width: '100%' }}>
                  <InputLabel>Item Name</InputLabel>
                  <Select
                     id="itemNameRow"
                     value={targetRowId}
                     onChange={(e)=>setTargetRowId(e.target.value)}
                     name="itemNameRow"
                     label="Item Name"
                  >
                     {
              items.map(item=> (
                item.idRow !== selectedRowId &&(
                         <MenuItem key={item.idRow} value={item.idRow}>{item.itemName.itemName}</MenuItem>)
                         ))
                        }
                  </Select>
                 </FormControl> 
          </Grid>
          <Grid item xs = {12}>
            <button className='btnCustomer' style={{width: '100%'}} onClick={deleteItem}> Confirm </button>

          </Grid>
        </Grid>
        </Box>
      </Modal>
         <Modal  
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdate} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
           <Typography>Do you want to stop creating Estimation ? </Typography>
          </Grid>
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate(-1)} className='btnCustomer' style={{width: '100%'}}>Yes</button>
          </Grid>
          <Grid item xs={6}>
          <button type='submit' onClick={handleCloseUpdate} className='btnCustomer' style={{width: '100%'}}>No</button>
          </Grid>
        </Grid>
        </Box>
      </Modal>
         <Modal 
           open={loadingOpenModal}
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
                  <NavLink to={`/EstimateViewAdminAll/${idInvoice}`} className='LinkName'>
            <button className='btnCustomer'>Close</button>
          </NavLink>
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
                  <h2 style={{color:'red'}}>Saving Failed</h2>
                  <button className='btnCustomer' onClick={handleCloseError}>
                    Try Again
                  </button>
                </div>
                )}
          </Box>
          </Modal>
          <Modal
      open={openAutocomplete2}
      onClose={handleCloseOpenAutocomplete2}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style2, width: 800 }}>
      <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
        <br/>
        <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
            <ItemFormView2 onCreateOption={handleCreateItem} onClose={handleCloseOpenAutocomplete2}/>  
        </div>
      </Box>
    </Modal>
    <Modal
      open={openItemUpdate}
      onClose={handleCloseItemUpdate}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style2, width: 800 }}>
      <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseItemUpdate} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
        <br/>
        <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
          <ItemUpdateView2 onClose={handleCloseItemUpdate} id={idItem}/>
        </div>
      </Box>
    </Modal>
    </div>
  )
}

export default ConvertToEstimate
