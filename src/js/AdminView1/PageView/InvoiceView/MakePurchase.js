import React, { useEffect,useState } from 'react'
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import {Backdrop, MenuItem,Grid, IconButton,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography,Autocomplete,Modal, Box,styled, OutlinedInput, InputAdornment,Divider } from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { Add, DragIndicatorRounded, Edit, RemoveCircleOutline} from '@mui/icons-material';
import { useNavigate, useParams,Navigate,NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ProjectFormView2 from '../ProjectView/ProjectFormView2';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

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
const DownTooltip = styled(({ className, ...props }) => (
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
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function MakePurchase() {
    let {id} = useParams();
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);
  
    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      const fetchUser = async () => {
        if (storesUserId) {
        try {
          const res = await  axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({userName: Name, role: Role}));
        } catch (error) {
          console.error('Error fetching data:', error);
          dispatch(logOut())
        }
      }else {
        navigate('/');
      }
      }
      fetchUser()
    },[dispatch]);
  
    const handleLogout = () => {
      localStorage.removeItem('user');
      dispatch(logOut());
      navigate('/')
    }
    const [items, SetItems] = useState([
        {
          idRow:v4(),
          itemName:{},
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
      }
       ]);
       const [inputValue, setInputValue] = React.useState('');
       const [purchaseAmount1, setPurchaseAmount1] = useState(0);
       const [purchaseAmount2, setPurchaseAmount2] = useState(0);
       const [projects,setProject] = useState([]);
       const [description,setDescription] = useState('');
       const status ='Make'
       useEffect(()=> {
        const fetchProject = async () => {
          try {
            const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects') 
            setProject(res.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchProject()
      },[])
    const [customerName,setCustomerName]= useState({});
    const [customerName1,setCustomerName1]= useState('');
    const purchaseDate = dayjs(Date.now());
    const [projectName, setProjectName] = useState({});
    const [purchaseNumber,setPurchaseNumber] = useState(0);
    const dateComment = new Date()
    const [ItemInformation,setItemInformation]= useState([]);

    useEffect(()=>{
      const fetchlastNumber = async () => {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-purchase')
          setPurchaseNumber(parseInt(res.data.purchaseNumber) + 1)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchlastNumber()
                  },[])
                  useEffect(()=>{
                    const fetchItem = async()=> {
                      try {
                        const res = await  axios.get('https://gg-project-productionn.up.railway.app/endpoint/item')
                        setItemInformation(res.data.data.reverse()) 
                      } catch (error) {
                        console.error('Error fetching data:', error);
                      }
                    }
                    fetchItem()
                  },[])
  const [CustomerNameInfo,setCustomerNameInfo]= useState('')
  const [invoiceName,setInvoiceName] = useState('')
  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-invoice/${id}`)
        setCustomerNameInfo(res.data.data.customerName.customerName);
        SetItems(res.data.data.items);
        setInvoiceName(res.data.data.invoiceName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
    },[])
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
      itemCost:0,
      totalAmount:0,
      discount:0,
      percentage:0,
      itemBuy:0,
      itemWeight: "",
      totalGenerale:0,
      totalCost:0,
      stock: 0,
  }])
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
      stock:selectedOptions?.itemQuantity,
     }: row))
  }
  const handleChange = (e,i) => {
    const {name, value} = e.target;
    const list = [...items];
    list[i][name] = value.toUpperCase();
    if ( list[i]['itemDiscount'] > 5) {
      list[i]['itemDiscount'] = 5
    }
    list[i]['totalAmount'] = Math.round((  list[i]['itemQty']*list[i]['itemRate'])*100)/100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty']*list[i]['itemCost'])*100)/100;
    list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount']/100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount']-list[i]['percentage'])*100)/100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost']*list[i]['itemBuy'])*100)/100;
    SetItems(list);
  }
  {/** Item InFO */}

const handleShowAutocomplete = (idRow) => {
  SetItems(items=> items.map((row)=> row.idRow === idRow ?{...row, 
    itemName:{
      _id:null,
      itemName:null
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
   }: row))
}
const handleShowAutocompleteDescription = (idRow) => {
  SetItems(items=> items.map((row)=> row.idRow === idRow ?{...row, 
    itemName:{
      itemName: 'empty'
   }, 
   }: row))
}
  const deleteItem = idRow =>{
    SetItems (items => items.filter((Item)=> Item.idRow !==idRow));
  };
  const filterItemInformation = ItemInformation.filter(option=> !items.find((row)=> option._id === row.itemName._id && option.typeItem === "Goods"))
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
  }
  const newItems = [...items];
  const [removed] = newItems.splice(result.source.index, 1);
  newItems.splice(result.destination.index, 0, removed);
  SetItems(newItems)
  };

  //Calculate the total
  useEffect(() => {
    const result1 = items.reduce((sum, row)=>  sum + row.totalCost,0)
    setPurchaseAmount1(result1.toFixed(2))    
    const result2 = items.reduce((sum, row)=>  sum + row.totalGenerale,0)
    setPurchaseAmount2(result2.toFixed(2))    
   },[items])
       const handleChangeProject = ( newValue) => {
                              const selectedOptions = projects.find((option)=> option === newValue)
                              setProjectName({
                                _id: selectedOptions?._id,
                                projectName: selectedOptions?.projectName
                              });
                              setDescription(selectedOptions?.description)
                              setCustomerName(selectedOptions?.customerName)
                              setCustomerName1(selectedOptions?.customerName.customerName)
                            }
                            const [openAutocomplete1, setOpenAutocomplete1] = useState(false);
                            const handleOpenOpenAutocomplete1 = (e) => {
                                e.stopPropagation()
                               setOpenAutocomplete1(true);
                              };
                              const handleCloseOpenAutocomplete1 = () => {
                                setOpenAutocomplete1(false);
                              };
    {/*** Item Start */}
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
        itemName:{
          _id:res.data.data._id,
          itemName:res.data.data.itemName
        },
         itemDescription:res.data.data.itemDescription,
          itemCost: res.data.data.itemCostPrice,
          itemRate: res.data.data.itemSellingPrice,
          stock: res.data.data.itemQuantity,
        totalAmount: row.itemQty * res.data.data.itemSellingPrice,
        discount: (row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount,
        percentage: ((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount)/100,
        itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount)/100),
        totalCost: row.itemQty*res.data.data.itemCostPrice,
        totalGenerale: res.data.data.itemCostPrice*row.itemBuy
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
  setItemInformation([newItem,...ItemInformation])
}

    {/*** Item End */}
                              const handleCreateProject = (newProject)=> {
                                setProject([ newProject ])
                              }
                              const [open1, setOpen1] = useState(false);

                              const handleOpenBack = (e) => {
                                e.preventDefault()
                                setOpen1(true);
                              };
                              const handleCloseBack = () => {
                                setOpen1(false);
                              };
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
    window.location.reload;
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
  const invoicePurchase = 'Make'
  const handleSubmitStatusUpdate = (ReferenceInfo) => {
      const data = {
        invoicePurchase,
        ReferenceName2:ReferenceInfo
      }; 
      axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-invoice/${id}`,data)
   }
   const handleCreateNotification = async (ReferenceInfo,ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person:user.data.userName + ' Created ',
      reason:  'Pur-'+ReferenceInfoNumber+ ' And '+ projectName.projectName + ' For ' + customerName.customerName,
      dateNotification:dateComment
    }
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }

   const purchaseName = "PUR-00"+purchaseNumber
   const [saving,setSaving] = useState('')
    const handleConvertInvoiceToPurchase = async (e) => {
      e.preventDefault();
      setSaving('true')
      const data = {
        customerName,
        projectName,
        purchaseNumber,
        purchaseDate,
        items,description,
        ReferenceName2:id,
        purchaseName,
        Position:'Last',
        purchaseAmount1,
        purchaseAmount2,
        status,
      }; 
      try{
        const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-purchase',data);
        if (res) {
          const ReferenceInfo = res.data.data._id
           // Open Loading View
           handleSubmitStatusUpdate(ReferenceInfo);
           const ReferenceInfoNumber = res.data.data.purchaseNumber
           handleCreateNotification(ReferenceInfo,ReferenceInfoNumber)
           handleOpen();
           //Reset form
         
    }else{
      alert('An Error as Occur');
    }
      }catch(error){
        if (error) {
          setSaving('')
          handleError();
        }
      }
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
   setSideBar(!sideBar);
  };
  return (
    <div className='Homeemployee'>
<Box sx={{ display: 'flex' }}>
                 <CssBaseline />
         <AppBar position="absolute" open={sideBar} sx={{backgroundColor:'#30368a'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(sideBar && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Convert to Purchase    
                     </Typography>
         <IconButton onClick={handleOpenBack}>
          <ArrowBack style={{color:'white'}} />
          </IconButton>
            <NotificationVIewInfo/>
            <MessageAdminView name={user.data.userName} role={user.data.role}/>
            <Typography sx={{marginLeft:'10px',marginRight:'10px'}}>{user.data.userName}</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
            <Logout style={{color:'white'}} /> 
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{height:'700px'}}>
          <SidebarDash1/>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            width:'100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar/>
   <Container maxWidth="none" sx={{ mt: 4}} >
        <div>
                  <form onSubmit={handleConvertInvoiceToPurchase}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
             <Grid item xs={12} >
        <TextField 
                  disabled
                  id='customerName'
                  name='customerName' 
                  label='Customer Name'
                  value={CustomerNameInfo}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
              </Grid>
             <Grid item xs={12} >
             <Autocomplete
                disableClearable
                options={projects}
                getOptionLabel={(option)=> option.projectName}
                onChange={(e, newValue) => {
                    handleChangeProject(newValue);
              }}
              PaperComponent={({children, ...other})=>(
                          
                <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                    {children}
                    <div>
                                <button onClick={(e)=>handleOpenOpenAutocomplete1(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                              ADD NEW Project
                            </button>
                            </div>
                  </Box>
                 )}
              renderInput={(params) => <TextField {...params} label="Project Name" required/>}
           />
             </Grid>
             <Grid item xs={12}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={['DatePicker']}>
                   <DatePicker
                    required
                   name='purchaseDate' 
                   label='Date'
                   value={purchaseDate}
                   sx={{ width: '100%', backgroundColor:'white' }} 
                   format='DD/MM/YYYY'      
              />
                 </DemoContainer>
                 </LocalizationProvider>
             </Grid>
             <Grid item xs={12}>
          <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
           <InputLabel htmlFor='purchaseNumber'>Purchase Number</InputLabel>
           <OutlinedInput
           type='number'
           name='purchaseNumber'
           value={purchaseNumber}
           label='Purchase Number'
           onChange={(e)=> setPurchaseNumber(e.target.value)}
           startAdornment={<InputAdornment position='start'>PUR-00</InputAdornment>}
           />
          </FormControl>
             </Grid>
             <Grid item xs={12}>
              <TextField 
                 disabled
                 required
                 id='customerName'
                 name='customerName' 
                 label='Customer Name'
                 value={customerName1}
                 sx={{ width: '100%', backgroundColor:'white' }}       
             />
             </Grid>
             <Grid item xs={12}>
               <TextField 
                  disabled
                  id='description'
                  name='description' 
                  label='Description'
                  value={description}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
              </Grid>
             <Grid item xs={12}>
                  <div style={{display:'block',position:'fixed',zIndex:1,float:'right',right:'-5px'}}>
                    <section>
                   <BlackTooltip title="Add" placement="top">
            <IconButton onClick={addItem}>
            <Add className='btn1' style={{fontSize:'40px'}}/>  
            </IconButton>
          </BlackTooltip>    
                    </section>
           <section>
              <BlackTooltip title="Add" placement="bottom">
            <IconButton onClick={addItemWhite}>
            <Add className='btn1' style={{backgroundColor:'gray',fontSize:'40px'}}/>  
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
                  <th align="center">Description</th>
                  <th align="center">Qty</th>
                  <th align="center">Unit Price<span>$</span></th>
                  <th align="center">Total<span>$</span></th>
                  <th align="center">Buy</th>
                  <th align="center">Total<span>$</span></th>
                  <th align="center">Action</th>
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
                         options={filterItemInformation}
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
          <td >
   <TextField 
  required = {Item.itemDescription !== ''}
              name='itemQty' id='itemQty' 
              onChange={(e) => handleChange(e,i)}
              size="small"
              value={Item.itemQty}
              type='number'
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
</td>
   <td >  
   <TextField 
                       name='itemCost' id='itemCost'
                       disabled={user.data.role !== 'CEO'}
                       value={Item.itemCost}
                       type='number'
                       onChange={(e) => handleChange(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
</td>
   <td id='totalPurchase' style={{width:'100px'}}>{Item.totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
   <td id='totalBuy'>
   <TextField 
                       name='itemBuy' id='itemBuy' 
                       onChange={(e) => handleChange(e,i)}
                       value={Item.itemBuy}
                       size="small"
                       type='number'
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
</td>
   <td id='totalGeneralPurchase' style={{width:'100px'}}>{Item.totalGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
                             <td align="center" >  <LightTooltip title="Delete" sx={{}}>
                                        <IconButton onClick={()=> deleteItem(Item.idRow)} >
                                        <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                        </IconButton>
                                      </LightTooltip></td>
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
            <tbody>
            <tr>
                <td colSpan={4} style={{textAlign:'center'}}>Total</td>
                <td>{purchaseAmount1.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
                <td>-</td>
                <td>{purchaseAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
                </tr>
                </tbody> 
            </table>
        </DragDropContext>
             </div>
              </Grid> 
            <Grid item xs={12}>
            {
        saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
   </Grid>
        </Grid>
      
  </form>
     
        </div>
        </Container>
  </Box>
  </Box>
        <Modal  
        open={open1}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseBack} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
           <Typography>Do you want to stop creating Invoice ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>  </Grid>
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/InvoiceViewAdmin')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
          </Grid>
          <Grid item xs={6}>
          <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{width: '100%'}}>No</button>
          </Grid>
        </Grid>
        </Box>
      </Modal>
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
             <button onClick={()=> handleDecision('previous')} className='btnCustomer'>
               Go Back
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
                 <p><span className='txt1' style={{color:'red'}}>Note:</span><span className="txt2">Project name can only be created once for purchase</span></p>
                 <button className='btnCustomer' onClick={handleCloseError}>
                   Try Again
                 </button>
               </div>
               )}
         </Box>
         </Modal>
         <Modal
      open={openAutocomplete1}
      onClose={handleCloseOpenAutocomplete1}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style2, width: 800 }}>
      <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete1} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
        <br/>
        <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
            <ProjectFormView2 onCreateOption={handleCreateProject} onId={id} onClose={handleCloseOpenAutocomplete1}/>  
        </div>
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

export default MakePurchase
