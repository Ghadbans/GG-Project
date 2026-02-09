import React, { useEffect,useMemo,useState } from 'react';
import {Box,IconButton, Modal,Backdrop, Table, TableBody,TableHead,TableRow,styled,Typography, Grid, Paper, Card, CardContent, TableContainer, TextField,Collapse } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Add, Close, MailOutline } from '@mui/icons-material';
import { Height, Padding } from '@mui/icons-material';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import db from '../../../dexieDb';
import Loader from '../../../component/Loader';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    width:5
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

function EmployeePlaningView({user}) {
  const [grantAccess,setGrantAccess] = useState([]);
  useEffect(()=>{
   const fetchNumber = async () => {
     if (navigator.onLine) {
         try {
           const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/grantAccess');
           res.data.data.filter((row)=> row.userID === user.data.id )
                        .map((row)=>setGrantAccess(row.modules))
         } catch (error) {
           console.error('Error fetching data:', error);
         }
     }else{
   const offLineCustomer1 = await db.grantAccessSchema.toArray(); 
   setGrantAccess(offLineCustomer1);
 }
   }
   fetchNumber()
 },[user])

 const EmployeeInfoD = grantAccess.filter((row)=> row.moduleName === "Employee" && row.access.deleteM === true);

    const [startDate,setStartDate] =  useState(()=>{
        const date = new Date()
        return dayjs(date)
      });
      const [endDate,setEndDate] =  useState(()=>{
        const date = new Date()
        return dayjs(date)
      });

    const [filteredData,setFilteredData] = useState([]);
    useEffect(()=>{
      const storedQuick = JSON.parse(localStorage.getItem('StartDateInfo1'))
      const storedQuick2 = JSON.parse(localStorage.getItem('EndDateInfo1'))
    if (storedQuick) {
      setStartDate( new Date(storedQuick))
    }
    if (storedQuick2) {
      setEndDate( new Date(storedQuick2))
    }
     },[])
    const handleStart = (date) => {
      setStartDate(date)
      localStorage.setItem('StartDateInfo1',JSON.stringify(date))
    }
    const handleEnd = (date) => {
      setEndDate(date)
      localStorage.setItem('EndDateInfo1',JSON.stringify(date))
    }    
    useEffect(()=>{
        const headers = [];
        const currentDate= new Date(startDate)
        while (currentDate <= endDate) {
          headers.push(currentDate.toDateString());
          currentDate.setDate(currentDate.getDate() +1);
        }
        setFilteredData(headers)
      },[startDate,endDate])
  const [planing, setPlaning] = useState([])
  const [loadingData, setLoadingData] = useState(true);
  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);

  const handleOpenOffline = () => {
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
  const [reason,setReason]= useState("");


  const fetchData = async () => {
if (navigator.onLine) {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/planing')
        setPlaning(res.data.data.reverse()); 
        await db.planingSchema.clear();
        await Promise.all(res.data.data.map( async (item,i)=>{
          await db.planingSchema.put({...item, id:i+1,synced: true,updateS:true})
         }))
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
      }else{
        const offLineCustomer1 = await db.planingSchema.toArray();
        setPlaning(offLineCustomer1.reverse())
        setLoadingData(false)
 }}
 
 const handleCreateNotificationOffline = async (ReferenceInfo,ReferenceInfoName,ReferenceInfoDate) => {
  const data = {
    idInfo: ReferenceInfo,
    person:user.data.userName + ' Created ',
    reason: 'For '+ ReferenceInfoName + ' on ' + dayjs(ReferenceInfoDate).format('DD/MM/YYYY'),
    dateNotification: new Date()
  }
  try {
    await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification',data)
  } catch (error) {
    console.log(error)
  }
 }
  const syncOff = async () => {
    if (navigator.onLine) {
      const unsyncedItem = await db.planingSchema.toArray();
      const ItemToSynChro = unsyncedItem.filter((row)=>row.synced === false)
     for(const Items of ItemToSynChro){
      try {
         const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-planing',Items)
        if (res) {
          const ReferenceInfo = res.data.data._id
          const ReferenceInfoName = res.data.data.setPlaning
          const ReferenceInfoDate = res.data.data.planingDate
          handleCreateNotificationOffline(ReferenceInfo,ReferenceInfoName,ReferenceInfoDate)
           handleOpenOffline();
        }
      } catch (error) {
        console.log(error)
      }
      }
      const ItemToSynChroUpdate = unsyncedItem.filter((row)=>row.updateS === false)
      for(const ItemsUpdate of ItemToSynChroUpdate){
        try {
           await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-planing/${ItemsUpdate._id}`,ItemsUpdate)
           handleOpenOffline();
        } catch (error) {
          console.log(error)
        }
        }
    }
    fetchData()
  }

  useEffect(()=> {
    fetchData()
    window.addEventListener('online', syncOff)
    if (navigator.onLine) {
      syncOff()
    }
    return () => {
      window.removeEventListener('online', syncOff)
    }
  },[])
  const [open, setOpen] = useState(false);
const [DeleteId, setDeleteId]= useState(null)
const handleOpen = (id) => {
  setOpen(true);
  setDeleteId(id)
};
const handleClose = () => {
  setOpen(false);
};
const [openReasonDelete, setOpenReasonDelete] = useState(false);

const handleOpenReasonDelete = (e) => {
  e.preventDefault()
  setOpenReasonDelete(true);
};
const handleCloseReasonDelete = () => {
  setOpenReasonDelete(false);
};
const [modalDeleteOpenLoading,setModalDeleteOpenLoading]= useState(false);

{/** Loading Delete View Start */}
const handleDeleteOpenLoading = () => {
  setModalDeleteOpenLoading(true);
  setLoading(true);
  handleClose();

  setTimeout(()=> {
    setLoading(false);
  }, 500)
}
const handleDeleteCloseLoading = () => {
    window.location.reload();
}

const [reference,setReference] = useState("")
const [relatedNumber, setRelatedNumber] = useState("")
useEffect(()=>{
  const fetchId = async () => {
    if (DeleteId !== null) {
      try {
        const res = await  axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-planing/${DeleteId}`)
        setReference(res.data.data.employeeName);
        setRelatedNumber(dayjs(res.data.data.planingDate).format('DD/MM/YYYY'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  fetchId()
},[DeleteId])
const handleCreateNotification = async () => {
  const data = {
    idInfo: '',
    person:user.data.userName + ' Deleted ' +' Planing For '+ reference + ' Created on ' + relatedNumber,
    reason,
    dateNotification:new Date()
  }
  try {
    await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification',data)
  } catch (error) {
    console.log(error)
  }
}
const handleDeleteUpdate = async (e) => {
  e.preventDefault()
  try {
    const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-planing/${DeleteId}`);
    if (res) {
           handleDeleteOpenLoading();
           handleCreateNotification();
           }} 
          catch (error) {
            console.log('An error as occur in delete');
          }
}

{/** getting all info start */}


      const Row = (props) => {
        const { row } = props;
        const [open, setOpen] = useState(false);
        const [search2,setSearch2] =useState('');
const handleSearch2 = (e) => {
  const value = e.target.value
  setSearch2(value)
}
const newArray = useMemo(()=>search2 !== ''?planing.filter((row)=>
  row.employeeName.toLowerCase().includes(search2.toLowerCase())||
row.projectName&&row.projectName.name.toLowerCase().includes(search2.toLowerCase())
   ):planing,[planing,search2])

        return (
          <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell sx={{padding:'1px'}}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
              <TableCell sx={{padding:'1px'}} component="th" scope="row">
              {dayjs(row).format('DD-MMMM-YYYY')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto">
                  <Box sx={{ margin: 1 }}>
                  <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
    <TextField
                label='Search'
                id='search2'
                value={search2}
                onChange={handleSearch2}
                />
    </div>
    <br/>
                    <table style={{width:'100%', borderCollapse:'collapse', color:'gray'}} size="small" aria-label="purchases">
                        <thead>
                            <tr>
                                <th style={{border:'1px solid gray'}}>#</th>
                                <th style={{border:'1px solid gray'}}>Employee</th>
                                <th style={{border:'1px solid gray'}}>ProjectName</th>
                                <th style={{border:'1px solid gray'}}>Status</th>
                                <th style={{border:'1px solid gray'}}>Task</th>
                                <th style={{border:'1px solid gray'}}>Description</th>
                                <th style={{border:'1px solid gray'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newArray.filter((row1)=>dayjs(row1.planingDate).format('DD/MM/YYYY') === dayjs(row).format('DD/MM/YYYY')).map((row1,i)=>(
                                   <tr key={row1._id}>  
                                    <td style={{border:'1px solid gray'}}> {i+1}</td>
                                    <td style={{border:'1px solid gray'}}> {row1.employeeName}</td>
                                    <td style={{border:'1px solid gray'}}> {row1.projectName?.name}</td>
                                    <td style={{border:'1px solid gray'}}> {row1.status}</td>
                                    <td style={{border:'1px solid gray'}}> {row1.planingTask}</td>
                                    <td style={{border:'1px solid gray'}}> {row1.planingDescription}</td>
                                    <td style={{display:'flex',alignItems:'center', gap:'10px',border:'1px solid gray'}}>
                                    <EditTooltip title="Edit">
                                          <span> 
                                      <IconButton >
                                      <NavLink to={`/EmployeePlaningFormUpdate/${row1._id}`} className='LinkName'>
                                      <EditIcon style={{color:'gray'}}/>
                                      </NavLink>
                                      </IconButton>
                                      </span>
                                    </EditTooltip>
                                    <DeleteTooltip title="Delete">
        <span>                                <IconButton onClick={() => handleOpen(row1._id)} >
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
                                </span>
      </DeleteTooltip>
                                    </td>
                                    
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        );
      }
  return (
    <div>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
                     required
                    name='startDate' 
                    label='From Date'
                    value={dayjs(startDate)}
                    onChange={(date)=> handleStart(date)} 
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
                    onChange={(date)=> handleEnd(date)} 
                    format='DD/MM/YYYY' 
               />
        </DemoContainer>
    </LocalizationProvider>
      </div>
      <br/>
      <TableContainer sx={{maxHeight:'500px'}} component={Paper}>
   <Table>
    <TableHead>
        <TableRow>
            <TableCell/>
            <TableCell>Date</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {filteredData.map((row) => (
            <Row key={row} row={row} />
          ))}
        </TableBody>
    </Table>     
      </TableContainer>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        <div style={{justifyContent:'center',textAlign:'center'}}>
          <h2>Do you want to Delete ?</h2>
          <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
                Delete
              </button>
              <button className='btnCustomer' onClick={handleClose}>
                Cancel
              </button>
            </div>
        </div>
      </Box>
    </Modal>
    <Modal  
        open={openReasonDelete}
        onClose={handleCloseReasonDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseReasonDelete} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Why do you want to delete the planing of: {reference}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
             <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='reason1'
                  name='reason1' 
                  multiline
                  rows={4}
                  value={reason}
                  placeholder='Reason'
                  onChange={(e)=>setReason(e.target.value)}
                  label='Reason'
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
      open={modalDeleteOpenLoading}
      onClose={handleDeleteCloseLoading}
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
                  <h2> Data successfully deleted</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleDeleteCloseLoading} className='btnCustomer'>
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

export default EmployeePlaningView
