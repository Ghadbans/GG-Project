import React, { useState,useEffect } from 'react';
import SideMaintenance from '../../../component/SideMaintenance';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Autocomplete,MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import Logout from '@mui/icons-material/Logout';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import Close from '@mui/icons-material/Close';
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

const ItemFormView2=({onCreateOption, onClose})=> {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  const [typeItem,setTypeItem]= useState("");
  const [itemName,setItemName]= useState("");
  const [itemStore,setItemStore]= useState("");
  const [unit,setUnit]= useState({});
  const [itemUnit,setItemUnit]= useState('');
  const [itemDimension,setItemDimension]= useState("");
  const [itemWeight,setItemWeight]= useState("");
  const [itemCategory,setItemCategory]= useState("");
  const [itemNumber,setItemNumber]= useState(0);
  const [itemBrand,setItemBrand]= useState("");
  const [itemManufacturer,setItemManufacturer]= useState("");
  const [itemCostPrice,setItemCostPrice]= useState(0);
  const [itemSellingPrice,setItemSellingPrice]= useState(0);
  const [itemDescription,setItemDescription]= useState("");
  const [itemQuantity,setItemQuantity]= useState(0);
  const stockOnHand = itemQuantity;
  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);
  const [itemCode,setItemCode] = useState([]);
  useEffect(()=>{
    const handleFetch = async () => {
   if (navigator.onLine) {
       try {
         const resItemUnit = await axios.get('https://gg-project-production.up.railway.app/endpoint/itemUnit')
         setUnitInfo(resItemUnit.data.data);
         await Promise.all(resItemUnit.data.data.map( async (item)=>{
           await db.itemUnitSchema.put({...item, synced: true,updateS:true})
          }))
         const resCode = await axios.get('https://gg-project-production.up.railway.app/endpoint/itemCode')
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
  const [newCode,setNewCode] = useState("");
  useEffect(()=>{
    itemCode.filter((row)=> row.itemCategory === itemCategory)
                            .map((row)=> setNewCode(row.itemCode))
  },[itemCategory])
  const dateComment = dayjs(Date.now()).format('DD/MM/YYYY')

  const Creates = {person: user.data.userName+ ' CREATED ',
                  dateComment
                }
                useEffect(()=>{
                  const fetchNumber = async () => {
                if (newCode) {
                    if (navigator.onLine) {
                        try {
                          const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-last-saved-item/${newCode}`)
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
                  }}
                  fetchNumber()
                },[newCode])
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
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
  
  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when submit is true
  const handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  //open loading modal when error
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
   }, 500)
  }
  //close loading modal
  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseAdd = () => {
    setLoadingOpenModal(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  //Decision When loading finish
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    } 
  }
  const handleSubmitCategory = async(e)=> {
    e.preventDefault();
    const data = {
      itemUnit
    }
    try{
      const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-itemUnit',data); 
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
  const handleCreateNotification = async (ReferenceInfo,ReferenceInfoCode,ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person:user.data.userName + ' Created ',
      reason:  ReferenceInfoCode+'-'+ReferenceInfoNumber + ' / ' + itemName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      _id:v4(),
      typeItem,itemName,itemStore,unit:unit.itemUnit
      ,itemDimension,
      itemWeight,itemCategory,itemUpc:{
        itemNumber,
        newCode
      },itemManufacturer,
      itemBrand,itemCostPrice,
      itemQuantity,itemSellingPrice,itemDescription,
      stockOnHand,synced: false
    }
 if (navigator.onLine) {
     try{
       const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-item',{
        typeItem,itemName,itemStore,unit:unit.itemUnit
        ,itemDimension,
        itemWeight,itemCategory,itemUpc:{
          itemNumber,
          newCode
        },itemManufacturer,
        itemBrand,itemCostPrice,
        itemQuantity,itemSellingPrice,itemDescription,
        stockOnHand,synced: false
      }); 
       if (res) {
         const ReferenceInfo = res.data.data._id
         const ReferenceInfoCode = res.data.data.itemUpc.newCode
         const ReferenceInfoNumber = res.data.data.itemUpc.itemNumber
         handleCreateNotification(ReferenceInfo,ReferenceInfoCode,ReferenceInfoNumber)
         handleOpen();
         await db.itemSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
         onCreateOption(res.data.data)
       }else{
         alert('Failed To Save Form Data')
        }
     }catch(error){
       if (error) {
         handleError();
       }
     }
 }else{
  await db.itemSchema.add(data)
  handleOpen();
}
   
};
  return (
    <div>
         <form onSubmit={handleSubmit}>
         <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2} component={Paper}>
    <Grid item xs={12} style={{display:'flex'}}>
      <FormControl>
           <FormLabel>Type</FormLabel>
           <RadioGroup 
            required
           row 
           name="typeItem"
           value={typeItem}
           onChange={e=>setTypeItem(e.target.value)}>
            <FormControlLabel value='Goods' control={<Radio/>} label="Goods"/>
            <FormControlLabel value='Services' control={<Radio/>} label="Services"/>
           </RadioGroup>
      </FormControl>
      <div>
        <h2>{typeItem}</h2>
      </div>
    </Grid>
    <Grid item xs={4}>
    <TextField 
     required
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
                 <Autocomplete
          id="unit"
          options={unitInfo}
          getOptionLabel={(Option)=> Option.itemUnit.toUpperCase()}
          onChange={(e,newValue)=>setUnit(newValue)}
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
    <Grid item xs={4}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="unit">Category</InputLabel>
                  <Select
                      required
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
     <FormControl sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='itemCostPrice'>Cost Unit Price</InputLabel>
                <OutlinedInput 
                id='itemCostPrice'
                name='itemCostPrice' 
                label='Cost Unit Price'
                onChange={(e)=>setItemCostPrice(e.target.value)}
                startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                />
       </FormControl>
    </Grid>
    <Grid item xs={6}>
                <FormControl sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='itemSellingPrice'>Selling Unit Price</InputLabel>
                <OutlinedInput 
                id='itemSellingPrice'
                name='itemSellingPrice' 
                label='Selling Unit Price'
                onChange={(e)=>setItemSellingPrice(e.target.value)}
                startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                />
       </FormControl>
    </Grid>
    <Grid item xs={12}>
    <TextField 
                  id='itemDescription'
                  name='itemDescription' 
                  multiline
                  rows={4}
                  value={itemDescription}
                  label='Item Description'
                  onChange={(e)=> setItemDescription(e.target.value)}
                  sx={{ width: '50%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
                  type='number'
                  id='itemQuantity'
                  name='itemQuantity' 
                  label='Quantity'
                  disabled
                  onChange={(e)=> setItemQuantity(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={6}>
    <TextField 
                  id='stockOnHand'
                  name='stockOnHand' 
                  value={stockOnHand}
                  label='Stock Hand'
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={12}>
    <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button>
    </Grid>
    </Grid>
        </form>
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
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Expenses Category
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

export default ItemFormView2
