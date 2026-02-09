import React, { useEffect,useState }  from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink, useNavigate } from 'react-router-dom';
import {Table,Modal, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Box, Autocomplete,TextField,Backdrop }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Loader from '../component/Loader';

const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
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


function ExpensesViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
         const Name = res.data.data.employeeName;
         const Role = res.data.data.role;
         dispatch(setUser({userName: Name, role: Role, id:res.data.data._id}));
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const resLocalInfo = await db.employeeUserSchema.get({_id:storesUserId})
      const Name = resLocalInfo.employeeName;
      const Role = resLocalInfo.role;
      dispatch(setUser({userName: Name, role: Role, id:resLocalInfo._id}));
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
  const [expenses,setExpenses] = useState([]);
  const [invoice,setInvoice] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/dailyexpense';
  
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
  axios.get('https://globalgate-backend-production.up.railway.app/endpoint/invoice')
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
  useEffect(()=> {
    axios.get('https://globalgate-backend-production.up.railway.app/endpoint/hidden')
    .then(res => {
      // Handle the response data here
      setHidden(res.data.data)
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
                               .map((row)=>({
                                ...row,
                                id: row._id,
                                dateField: dayjs(row.expenseDate).format('DD/MM/YYYY')
                              })) 
  const filteredRows = newExpense.filter(row=> !hidden.some((row2)=> row2.idRow === row._id))

  {/** search start */}
const [searchInvExpenses, setSearchInvExpenses] = useState("");
useState(()=>{
  const storedValue = localStorage.getItem('QuickFilterInvExpenses')
  if (storedValue) {
    setSearchInvExpenses(storedValue)
  }
  
})
const [filterModel, setFilterModel] = React.useState({
  items: [],
  quickFilterExcludeHiddenColumns: true,
  quickFilterValues: [],
});
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsInvExpenses',JSON.stringify(newHidden))
  }
   localStorage.setItem('QuickFilterInvExpenses',filterModel.quickFilterValues[0] || '')
   useEffect(()=>{
    if (searchInvExpenses !== undefined) {
      setFilterModel((prevState)=> ({
        ...prevState,
        quickFilterValues:  [ searchInvExpenses]
      }))
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvExpenses'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

   },[searchInvExpenses])
{/** search end */}

const columns = [
  {field: 'dateField', headerName: 'Date', width:200},
  {field: 'referenceNumber', headerName: 'Reference#', width:150, renderCell: (params)=>( <div> <span>INV-00</span><span>{params.row.referenceNumber}</span> </div> )},
  {field: 'customer', headerName: 'Customer Name', width:250, valueGetter:(params)=> params.row.customerName!== undefined?params.row.customerName.customerName.toUpperCase():''},
  {field: 'expenseType', headerName: 'Category', width:250},
  {field: 'view', headerName: 'View', width:80, renderCell:(params)=> (
    <ViewTooltip title="View">
    <span>
       <IconButton disabled={user.data.role === 'User'}>
       <NavLink to={`/ExpensesViewAdminAll/${params.row._id}`} className='LinkName'>
       <VisibilityIcon style={{color:'#202a5a'}}/> 
       </NavLink>
       </IconButton>
     </span>
</ViewTooltip>
     
  ) }
]
  return (
    <div className='Homeemployee'>
      
    <div className='sidemnuandcontent'>
       <SidebarDash/>
       <div className='header'>
        <div className='headername'>
          <Typography variant='h5'>Expenses</Typography>
        </div>
        <div className='rightcontent'>
          <NotificationsNoneIcon className='iconesize'/>
          <Typography>{user.data.userName}</Typography>
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
<div className='invoice'>
      {newExpense.length > 0 ? (   
      <Box sx={{ height:600, width: '100%' }}>
         {
                      user.data.role === 'CEO'?(
                           <DataGrid
                           rows={newExpense}
                           columns={columns}
                           slots={{toolbar: GridToolbar}}
                           slotProps={{
                            toolbar: {
                              showQuickFilter: true,
                              printOptions:{
                               disableToolbarButton: true
                             },
                            },
                          }}
                          checkboxSelection
                          disableDensitySelector
                          filterModel={filterModel}
                          onFilterModelChange={(newModel) => handleFilter(newModel)}
                          columnVisibilityModel = {columnVisibilityModel}
                          onColumnVisibilityModelChange={handelHiddenColumn}
                           sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                   />
                      ):(
                        <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        slots={{toolbar: GridToolbar}}
                        slotProps={{
                         toolbar: {
                           showQuickFilter: true,
                           printOptions:{
                            disableToolbarButton: true
                          },
                         },
                       }}
                       checkboxSelection
                       disableColumnFilter
                       disableDensitySelector
                       filterModel={filterModel}
                       onFilterModelChange={(newModel) => setFilterModel(newModel)}
                       columnVisibilityModel = {columnVisibilityModel}
                       onColumnVisibilityModelChange={handelHiddenColumn}
                        sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                   )
                    }
                    </Box>
         ) : <div>
         <img src={Image} style={{position:'relative',marginLeft:'19%',padding:'25px', height:'40%',top:'40px', width:'55%', boxShadow:'0 5px 10px rgba(0, 0, 0, 0.3)'}}/>
         </div>}
       </div>)
     }
</div>
  )
}

export default ExpensesViewAdmin