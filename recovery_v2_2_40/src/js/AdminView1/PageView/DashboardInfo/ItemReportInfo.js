import React, { useEffect,useState,useRef } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {TableContainer,Checkbox,Menu,MenuItem,Grid,IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography,Collapse, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box, Autocomplete,Table,TableBody,TableCell,TableRow,TableHead,Tabs,Tab,Button, Card, CardContent } from '@mui/material';
import { Add, KeyboardArrowDownOutlined, KeyboardArrowUp, KeyboardArrowUpOutlined } from '@mui/icons-material';
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

function ItemReportInfo({onMonth,onItem}) {
    const [infoOptions,setInfoOptions] = useState('');
    const [search2,setSearch2] =useState('');
    const [itemCategory,setItemCategory]= useState("");
       const [fromDate,setFromDate] =  useState(()=>{
            const date = new Date()
            return date
          });
          const [endDate,setEndDate] =  useState(()=>{
            const date = new Date()
            return date
          });
    const handleSearch2 = (e) => {
      const value = e.target.value
      setSearch2(value)
    }
    const [item,setItem]=useState([])
    const [notification,setNotification]= useState([]);
     const [itemReturn, setItemReturn] = useState([]);
      const [itemOut, setItemOut] = useState([]);
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const resNotification = await axios.get('http://192.168.0.200:8080/endpoint/notification');
                const fetchData = resNotification.data.data.filter((item) => item.person.endsWith(' Created'));
                setNotification(fetchData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchComment();
    }, []);

    useEffect(()=>{
        if (onMonth) {
           setInfoOptions(onMonth);
           setItem(onItem.map((row)=>{ 
            const relatedInvoice = notification.find((item)=> item.idInfo === row._id)
            return ({
              ...row,
              CreatedDate: row.Creates !== undefined?row.Creates.dateComment:dayjs(relatedInvoice?.dateNotification).format('DD/MM/YYYY'),
              Person: row.Creates !== undefined?row.Creates.person:relatedInvoice?.person,
            })
          }));
        }
       },[onMonth,onItem,notification]);

    

       const [FilterItem,setFilterItem] = useState([])
    useEffect(() => {
        if (infoOptions === 'Category') {
            setFilterItem(itemCategory !== "" ? item.filter((row) => row.itemCategory.toLowerCase().includes(itemCategory.toLowerCase())) : item);
        } else if (infoOptions === 'Out of Stock') {
            setFilterItem(item?.filter((row) => row.itemQuantity <= 0));
        } else if (infoOptions === 'Added Today') {
          const date = new Date()
            const today = dayjs(date).format('DD/MM/YYYY');
            setFilterItem(item?.filter((row) => row.CreatedDate === today));
        } 
    }, [infoOptions, item, itemCategory]);

     const handleChangeSelected = (e)=> {
        setInfoOptions(e.target.value);
    }
     const newArray = search2 !== '' ? FilterItem.filter((row) =>
        row.itemName.toLowerCase().includes(search2.toLowerCase()) ||
        row.itemStore.toLowerCase().includes(search2.toLowerCase()) ||
        row.itemBrand.toLowerCase().includes(search2.toLowerCase()) ||
        row.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
        row.itemManufacturer.toLowerCase().includes(search2.toLowerCase())
    ) : FilterItem
    
   
  return (
    <div>
        <section style={{display:'flex',alignItems:'center',gap:'200px'}}>
        <FormControl sx={{width:'200px'}}>
                  <InputLabel id="Options">Options</InputLabel>
                  <Select
                     id="infoOptions"
                     value={infoOptions} 
                     onChange={(e)=>handleChangeSelected(e)}
                     name="infoOptions"
                     label="Options"
                  >
                        <MenuItem value="Category">Category</MenuItem>
                        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                        <MenuItem value="Item Value">Item Value</MenuItem>
                        <MenuItem value="Added Today">Added Today</MenuItem>
                  </Select>
                 </FormControl> 
                 {
                  infoOptions === 'Category' && (
                        <FormControl sx={{ width: '250px' }}>
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
                              <MenuItem value="">All</MenuItem>
                        </Select>
                       </FormControl> 
                    )
                 }
        </section>
        <br/>
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
             <tbody>
                <tr>
                    <th></th>
                    <td>
                    <TextField
                        label='Search'
                        id='search2'
                        value={search2}
                        onChange={handleSearch2}
                        />
                    </td>
                </tr>
             </tbody>
               
            </table>
  </section>
        <TableContainer >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">itemName</TableCell>
            <TableCell align="left">itemBrand</TableCell>
            <TableCell align="left">itemDescription</TableCell>
            <TableCell align="right">Stock</TableCell>
          </TableRow>
        </TableHead>
     
        <TableBody>
       {
            newArray.map((row)=>(
                <TableRow key={row._id}>
            <TableCell>{row.ItemNumber}</TableCell>
            <TableCell align="left">{row.itemName}</TableCell>
            <TableCell align="left">{row.itemBrand}</TableCell>
            <TableCell align="left">{row.itemDescription}</TableCell>
            <TableCell align="right">{row.itemQuantity}</TableCell>
                </TableRow>
            ))
        }
        </TableBody>
      </Table>
    </TableContainer>
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

export default ItemReportInfo
