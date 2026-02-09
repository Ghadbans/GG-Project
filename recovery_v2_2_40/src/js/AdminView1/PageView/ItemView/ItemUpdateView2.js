import React, { useEffect,useState } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Autocomplete,MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box } from '@mui/material'
import axios from 'axios';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Logout from '@mui/icons-material/Logout';
import { Close, RemoveCircleOutline } from '@mui/icons-material';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import db from '../../../dexieDb';


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

function ItemUpdateView2({id,onClose}) {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);

    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      const fetchUser = async () => {
        if (storesUserId) {
       if (navigator.onLine) {
         try {
           const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
           const Name = res.data.data.employeeName;
           const Role = res.data.data.role;
           dispatch(setUser({userName: Name, role: Role}));
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       } else {
        const resLocalInfo = await db.employeeUserSchema.get({_id:storesUserId})
        const Name = resLocalInfo.employeeName;
        const Role = resLocalInfo.role;
        dispatch(setUser({userName: Name, role: Role}));
       }
      }else {
        navigate('/');
      }
      }
      fetchUser()
    },[dispatch]);
    const [unitInfo,setUnitInfo]=useState([]);
    const [unit1,setUnit1]= useState({});
    const [itemUnit,setItemUnit]= useState('');
    const [typeItem,setTypeItem]= useState("");
    const [itemName,setItemName]= useState("");
    const [itemStore,setItemStore]= useState("");
    const [unit,setUnit]= useState("");
    const [unit2,setUnit2]= useState("");
    const [itemDimension,setItemDimension]= useState("");
    const [itemWeight,setItemWeight]= useState("");
    const [itemBox,setItemBox]= useState("");
    const [itemCategory,setItemCategory]= useState("");
    const [itemCategory1,setItemCategory1]= useState("");
    const [itemNumber,setItemNumber]= useState(0);
    const [itemNumber1,setItemNumber1]= useState(0);
    const [itemBrand,setItemBrand]= useState("");
    const [itemManufacturer,setItemManufacturer]= useState("");
    const [itemCostPrice,setItemCostPrice]= useState(0);
    const [itemSellingPrice,setItemSellingPrice]= useState(0);
    const [itemDescription,setItemDescription]= useState("");
    const [qtyBuy,setQtyBuy]=useState(0);
    const [itemQuantity,setItemQuantity]= useState(0);
    const [stockOnHand,setStockOnHand]= useState(0);
    const [newCode,setNewCode] = useState("");
    const [newCode1,setNewCode1] = useState("");
    const [reason,setReason]= useState("");
    const [itemCode,setItemCode] = useState([]);
    const [indexId,setIndexID]=useState(0);
    useEffect(()=>{
      const handleFetch = async () => {
        if (navigator.onLine) {
          try {
            const resItemUnit = await axios.get('http://192.168.0.200:8080/endpoint/itemUnit')
            setUnitInfo(resItemUnit.data.data);
            await Promise.all(resItemUnit.data.data.map( async (item)=>{
              await db.itemUnitSchema.put({...item, synced: true,updateS:true})
             }))
            const resCode = await axios.get('http://192.168.0.200:8080/endpoint/itemCode')
            setItemCode(resCode.data.data);
            await Promise.all(resCode.data.data.map( async (item)=>{
              await db.itemCodeSchema.put({...item, synced: true,updateS:true})
             }))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      }else{
       const offLineItemCode1 = await db.itemCodeSchema.toArray();
       setItemCode(offLineItemCode1);
       const offLineItemUnit1 = await db.itemUnitSchema.toArray();
       setUnitInfo(offLineItemUnit1)
      }
      }
      handleFetch()
    },[])
    useEffect (() => {
      const fetchAll = async() => {
       if (navigator.onLine) {
         try {
           const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-item/${id}`)
           setTypeItem(res.data.data.typeItem);
           setItemName(res.data.data.itemName);
           setItemStore(res.data.data.itemStore);
           setUnit(res.data.data.unit);
           setUnit2(res.data.data.unit);
           setItemDimension(res.data.data.itemDimension);
           setItemWeight(res.data.data.itemWeight);
           setItemBox(res.data.data.itemBox);
           setItemCategory(res.data.data.itemCategory);
           setItemCategory1(res.data.data.itemCategory);
           setItemNumber(res.data.data.itemUpc.itemNumber);
           setItemNumber1(res.data.data.itemUpc.itemNumber);
           setNewCode(res.data.data.itemUpc.newCode);
           setNewCode1(res.data.data.itemUpc.newCode);
           setItemBrand(res.data.data.itemBrand);
           setItemManufacturer(res.data.data.itemManufacturer);
           setItemCostPrice(res.data.data.itemCostPrice);
           setItemSellingPrice(res.data.data.itemSellingPrice);
           setItemDescription(res.data.data.itemDescription);
           setItemQuantity(res.data.data.itemQuantity);
           setStockOnHand(res.data.data.stockOnHand);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       }else{
        const resLocal = await db.itemSchema.get({_id:id})
        setIndexID(resLocal.id);
        setTypeItem(resLocal.typeItem);
           setItemName(resLocal.itemName);
           setItemStore(resLocal.itemStore);
           setUnit(resLocal.unit);
           setUnit2(resLocal.unit);
           setItemDimension(resLocal.itemDimension);
           setItemWeight(resLocal.itemWeight);
           setItemBox(resLocal.itemBox);
           setItemCategory(resLocal.itemCategory);
           setItemCategory1(resLocal.itemCategory);
           setItemNumber(resLocal.itemUpc.itemNumber);
           setItemNumber1(resLocal.itemUpc.itemNumber);
           setNewCode(resLocal.itemUpc.newCode);
           setNewCode1(resLocal.itemUpc.newCode);
           setItemBrand(resLocal.itemBrand);
           setItemManufacturer(resLocal.itemManufacturer);
           setItemCostPrice(resLocal.itemCostPrice);
           setItemSellingPrice(resLocal.itemSellingPrice);
           setItemDescription(resLocal.itemDescription);
           setItemQuantity(resLocal.itemQuantity);
           setStockOnHand(resLocal.stockOnHand);
       }
      }
      fetchAll()
        },[id])
    const CommentInfo = 
      {
        idInfo: id,
        person: user.data.userName + ' Modified',
        reason
      }
      const dateComment = dayjs(Date.now());
       
    const total = Number(itemQuantity) + Number(qtyBuy);
    const total1 = Number(stockOnHand) + Number(qtyBuy);

    const [open1, setOpen1] = useState(false);

const handleOpenUpdate = (e) => {
  e.preventDefault()
  setOpen1(true);
};
const handleCloseUpdate = () => {
  setOpen1(false);
};
const [openAutocomplete2, setOpenAutocomplete2] = useState(false);
const [modalOpenLoading,setModalOpenLoading]= useState(false);
const handleOpenOpenAutocomplete2 = (e) => {
  e.stopPropagation()
 setOpenAutocomplete2(true);
};
const handleCloseOpenAutocomplete2 = () => {
  setOpenAutocomplete2(false);
  setModalOpenLoading(false)
};
useEffect(()=>{
  itemCode.filter((row)=> row.itemCategory === itemCategory)
                          .map((row)=> setNewCode(row.itemCode))
},[itemCategory])
useEffect(()=>{
  const fetchNumber = async () => {
if (newCode !== newCode1) {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-last-saved-item/${newCode}`)
        setItemNumber(res.data.itemUpc.itemNumber + 1)
      } catch (error) {
        console.error('Error fetching data:', error);
        setItemNumber(1)
      }
  }else{
  const offLineCustomer1 = await db.itemSchema.toArray();
  const relatedA = offLineCustomer1.filter((row)=> row.itemUpc.newCode === newCode)
  const latest = relatedA.reduce((max, row)=> row.itemUpc.itemNumber > max.itemUpc.itemNumber? row : max,relatedA[0]  )
  setItemNumber(latest.itemUpc.itemNumber + 1)
  }
}
  }
  fetchNumber()
},[newCode])
     {/** Loading Start */}

     const [loading,setLoading]= useState(false);
     const [loadingOpenModal,setLoadingOpenModal] = useState(false);
     const [ErrorOpenModal,setErrorOpenModal] = useState(false);
     const handleOpenModal = () => {
      setModalOpenLoading(true);
      setOpenAutocomplete2(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
     const handleOpen = () => {
 
       setLoadingOpenModal(true);
       setLoading(true);
       setOpen1(false);

       setTimeout(()=> {
         setLoading(false);
       }, 500)
 
     }
     const handleError = () => {
       setErrorOpenModal(true);
       setLoading(true);
       setOpen1(false);
       setTimeout(()=> {
         setLoading(false);
      }, 500)
     }
     const handleClose = () => {
       navigate(-1);
     }
     const handleCloseError = () => {
       setErrorOpenModal(false);
       setOpen1(false);
     }
     {/** Loading End */}

    const handleSubmitCategory = async(e)=> {
      e.preventDefault();
      const data = {
        itemUnit
      }
      try{
        const res = await axios.post('http://192.168.0.200:8080/endpoint/create-itemUnit',data); 
        if (res) {
          handleOpenModal();
          setUnitInfo([...unitInfo, res.data.data ])
        }
      }catch(error){
        if (error) {
          alert('An error as Occur');
        }
      }
    }
    const handleClear = (e) => {
      e.preventDefault()
      setItemNumber(itemNumber1);
      setNewCode(newCode1);
      setItemCategory(itemCategory1);
     } 
    const handleClearUnits = (e) => {
      e.preventDefault()
      setUnit('');
     } 
    const handleGiveUnits = (e) => {
      e.preventDefault()
      setUnit(unit2);
     } 
     const [hideBack,setHideBack] = useState('');
     const [numberInfo,setNumberInfo] = useState({});
  
     const handleCreateComment = async (ReferenceInfoCode,ReferenceInfoNumber) => {
      const data = {
          idInfo:id,
          person:user.data.userName + ' Modify '+ ReferenceInfoCode+'-' + ReferenceInfoNumber,
          reason,
          dateNotification: new Date()
      };
    try {
      const res = await axios.post('http://192.168.0.200:8080/endpoint/create-notification/',data)
      if (res) {
        setReason("");
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
    } 
    const handleSubmitEdit = async (e) => {
      e.preventDefault();
      const data = {
        typeItem,itemName,itemStore,unit:unit1.itemUnit,itemDimension,
        itemWeight,itemBox,itemManufacturer,itemCategory,itemUpc:{
          itemNumber,
          newCode
        }
        ,itemBrand,itemCostPrice,
        itemQuantity:total,itemSellingPrice,itemDescription ,stockOnHand:total1,updateS:false
      };
      if (navigator.onLine) {
        try {
          const res = await axios.put(`http://192.168.0.200:8080/endpoint/update-item/${id}`,data)
          if (res) {
            const ReferenceInfoCode = res.data.data.itemUpc.newCode
            const ReferenceInfoNumber = res.data.data.itemUpc.itemNumber
            handleCreateComment(ReferenceInfoCode,ReferenceInfoNumber)
            handleOpen();
            await db.itemSchema.update(indexId,{...data, updateS: true})
          }
        } catch (error) {
          if (error) {
            handleError();
          }
        }
      } else{
        await db.itemSchema.update(indexId,data)
       handleOpen();
     }
    } 
  return (
    <div>
              <form onSubmit={handleOpenUpdate}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div>
      </div>
    </div> 
    <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2} component={Paper}>
    <Grid item xs={12}>
      <FormControl>
           <FormLabel>Type</FormLabel>
           <RadioGroup 
           row 
           name="typeItem"
           value={typeItem}
           onChange={e=>setTypeItem(e.target.value)}>
            <FormControlLabel value='Goods' control={<Radio/>} label="Goods"/>
            <FormControlLabel value='Services' control={<Radio/>} label="Services"/>
           </RadioGroup>
      </FormControl>
      <Typography>{typeItem}</Typography>
    </Grid>
    
    <Grid item xs={4}>
    <TextField 
                  id='itemName'
                  name='itemName' 
                  value={itemName}
                  label='Item Name'
                  onChange={(e)=>setItemName(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={4}>
    <TextField 
                  id='itemBrand'
                  name='itemBrand' 
                  value={itemBrand}
                  label='Brand'
                  onChange={(e)=> setItemBrand(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
<Grid item xs={4}>
{
  unit !== ''?
  (
    <div style={{display:'flex', gap: '10px'}}>
      <TextField
      label='Unit'
      value={unit}
      sx={{ width: '100%', backgroundColor:'white' }}  
      />
        <ViewTooltip title="Clear" placement='bottom'>
                <IconButton onClick={handleClearUnits}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
            </IconButton>
             </ViewTooltip>
    </div>
  )
  :(
    <div style={{display:'flex', gap:'10px'}}>
         <Autocomplete
    id="unit"
    options={unitInfo}
    getOptionLabel={(Option)=> Option.itemUnit.toUpperCase()}
    onChange={(e,newValue)=>setUnit1(newValue)}
    sx={{ width: '100%', backgroundColor:'white' }}
    PaperComponent={({children, ...other})=>(
                    
      <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
          {children}
          <div>
              <button onClick={(e)=>handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
            ADD NEW Unit
          </button>
          </div>
        </Box>
       )}
    renderInput={(params) => <TextField {...params} label="Unit" required/>}
      />
      
      <ViewTooltip title="Clear" placement='bottom'>
                <IconButton onClick={handleGiveUnits}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
            </IconButton>
             </ViewTooltip>
    </div>
  )
} 
    </Grid>
   <Grid item xs={4}>
   <FormControl     sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='itemDimension'>Dimension</InputLabel>
                <OutlinedInput 
                id='itemDimension'
                name='itemDimension' 
                value={itemDimension}
                type='number'
                label='Dimension'
                onChange={(e)=>setItemDimension(e.target.value)}
                startAdornment={<InputAdornment position='start'>M</InputAdornment>}
                />
              </FormControl>
    </Grid>
     <Grid item xs={4}>
     <FormControl sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='itemWeight'>Weight</InputLabel>
                <OutlinedInput 
                id='itemWeight'
                name='itemWeight' 
                value={itemWeight}
                type='number'
                label='Weight'
                onChange={(e)=>setItemWeight(e.target.value)}
                startAdornment={<InputAdornment position='start'>Kg</InputAdornment>}
                />
              </FormControl>
    </Grid>
   
     <Grid item xs={4} style={{display:'flex'}}>
     <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="unit">Category</InputLabel>
                  <Select
                  disabled ={user.data.role !== 'CEO'}
                     id="itemCategory"
                     value={itemCategory} 
                     onChange={(e)=>setItemCategory(e.target.value)}
                     name="itemCategory"
                     label="Category"
                  >
                        <MenuItem value="HA">HA (HA)</MenuItem>
                        <MenuItem value="ELECTRICITY">ELECTRICITY (EL)</MenuItem>
                        <MenuItem value="SOLAR SYSTEM">SOLAR SYSTEM (SS)</MenuItem>
                        <MenuItem value="IT">IT (IT)</MenuItem>
                        <MenuItem value="PLUMBING">PLUMBING (PL)</MenuItem>
                        <MenuItem value="ELECTRONIC">ELECTRONIC (ELN)</MenuItem>
                        <MenuItem value="FENCE ELECTRIC">FENCE ELECTRIC (FE)</MenuItem>
                        <MenuItem value="ACCESSORY">ACCESSORY (ACC)</MenuItem>
                        <MenuItem value="WELDING">WELDING (WLN)</MenuItem>
                        <MenuItem value="GENERATOR">GENERATOR (GA)</MenuItem>
                        <MenuItem value="TOOLS">TOOLS (TL)</MenuItem>
                        <MenuItem value="CONSTRUCTION">CONSTRUCTION (CTN)</MenuItem>
                        <MenuItem value="OTHERS">OTHERS (OT)</MenuItem>
                  </Select>
                 </FormControl> 
                 <ViewTooltip title="Clear" placement='bottom'>
                <IconButton onClick={handleClear}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
            </IconButton>
             </ViewTooltip>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
          <InputLabel htmlFor='itemNumber'>Item Number</InputLabel>
          <OutlinedInput
          required
          disabled
          type='number'
          id='itemNumber'
          value={'00'+itemNumber}
          startAdornment={<InputAdornment position="start">{newCode}</InputAdornment>}
          label="Item Number"     
          />
        </FormControl>
    </Grid>
    <Grid item xs={4}>
    <TextField 
                  id='itemStore'
                  name='itemStore' 
                  value={itemStore}
                  label='Store Name'
                  onChange={(e)=> setItemStore(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    
    <Grid item xs={4}>
    <TextField 
                  id='itemManufacturer'
                  name='itemManufacturer' 
                  value={itemManufacturer}
                  label='Manufacturer'
                  onChange={(e)=> setItemManufacturer(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
      {
        user.data.role === 'CEO'?
        <FormControl sx={{ width: '100%', backgroundColor:'white' }} >
        <InputLabel htmlFor='itemCostPrice'>Cost Unit Price</InputLabel>
        <OutlinedInput 
        id='itemCostPrice'
        name='itemCostPrice' 
        type='number'
        value={itemCostPrice}
        label='Cost Unit Price'
        onChange={(e)=>setItemCostPrice(e.target.value)}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        />
</FormControl>:null
      }
    
    </Grid>
    <Grid item xs={6}>
      {
         user.data.role === 'CEO'?
         <FormControl sx={{ width: '100%', backgroundColor:'white' }} >
         <InputLabel htmlFor='itemSellingPrice'>Selling Unit Price</InputLabel>
         <OutlinedInput 
         id='itemSellingPrice'
         name='itemSellingPrice' 
         type='number'
          value={itemSellingPrice}
         label='Selling Unit Price'
         onChange={(e)=>setItemSellingPrice(e.target.value)}
         startAdornment={<InputAdornment position='start'>$</InputAdornment>}
         />
</FormControl>:''
      }
   
    </Grid>
    <Grid item xs={12}>
    <TextField 
                  id='itemDescription'
                  name='itemDescription' 
                  multiline
                  value={itemDescription}
                  rows={4}
                  label='Item Description'
                  onChange={(e)=> setItemDescription(e.target.value)}
                  sx={{ width: '50%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={12}>
    <div style={{display:'flex', alignItems:'center'}}>
    <Grid item xs={4}>
    <TextField 
                  id='qtyBuy'
                  name='qtyBuy' 
                  type='number'
                  label='Quantity Buy'
                  onChange={(e)=> setQtyBuy(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
     <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2}>
     <Grid item xs={6}>
    <TextField 
    disabled
                  id='itemQuantity'
                  name='itemQuantity' 
                  value={itemQuantity}
                  label='Quantity'
                  onChange={(e)=> setItemQuantity(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
                  id='total'
                  name='total' 
                  value={total}
                  label='Total Quantity In Store'
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    </Grid>
    </div>
    </Grid>
    <Grid item xs={12}>
    <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button>
    </Grid>
    </Grid>
        </form>
        <Modal  
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdate} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmitEdit}>
<Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='reason'
                  name='reason' 
                  multiline
                  rows={4}
                  value={reason}
                  onChange={(e)=>setReason(e.target.value)}
                  label='Comments'
                  sx={{ width:'100%', backgroundColor:'white' }}       
              />
          </Grid>
          <br/>
          <Grid item xs={12}>
   <button type='submit' className='btnCustomer' style={{width: '100%'}}>Save</button>
          
          </Grid>
        </Grid>
          </form>
        
        </Box>
      </Modal>
        <Modal 
           open={loadingOpenModal}
           onClose={onClose}
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
              <button onClick={onClose} className='btnCustomer'>
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
          <Modal  
       open={openAutocomplete2}
        onClose={handleCloseOpenAutocomplete2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Unit
          </Typography>
          <form onSubmit={handleSubmitCategory}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
                  id='itemUnit'
                  name='itemUnit' 
                  value={itemUnit}
                  label='Unit'
                  onChange={(e)=> setItemUnit(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button  className='btnCustomer6' style={{width: '100%'}}>Save</button>
          </Grid>
        </Grid>
        </form>
        </Box>
      </Modal>
      <Modal
      open={modalOpenLoading}
      onClose={handleCloseOpenAutocomplete2}
      BackdropComponent={Backdrop}
      BackdropProps={{
            timeout: 500,
           }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
      <div>
              {loading?(<Loader/>
                )
         :( 
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data successfully Saved</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseOpenAutocomplete2} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
                </div> 
      </Box>
    </Modal>
    </div>
  )
}

export default ItemUpdateView2
