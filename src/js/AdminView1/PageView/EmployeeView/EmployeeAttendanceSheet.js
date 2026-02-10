import React, { useEffect,useMemo,useState } from 'react';
import {Box,IconButton, Modal,Backdrop, Table, TableBody,TableHead,TableRow,styled,Typography, Grid, Paper, Card, CardContent, TableContainer, TextField } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import dayjs from 'dayjs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Add, Close, MailOutline } from '@mui/icons-material';
import { Height, Padding } from '@mui/icons-material';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import db from '../../../dexieDb';
import Loader from '../../../component/Loader';

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
 const filteredData = (startDate, endDate) => {
  const headers = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    headers.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() +1);
  }
  return headers 
 }
function EmployeeAttendanceSheet() {
  const [startDate,setStartDate] =  useState(()=>{
    const date = new Date()
    return dayjs(date)
  });
  const [endDate,setEndDate] =  useState(()=>{
    const date = new Date()
    return dayjs(date)
  });
  const [Attendance,setAttendance]= useState([])
  const [employee,setEmployee]= useState([])
  useEffect(()=>{
    const storedQuick = JSON.parse(localStorage.getItem('StartDateInfo'))
    const storedQuick2 = JSON.parse(localStorage.getItem('EndDateInfo'))
  if (storedQuick) {
    setStartDate( new Date(storedQuick))
  }
  if (storedQuick2) {
    setEndDate( new Date(storedQuick2))
  }
   },[])
  const handleStart = (date) => {
    setStartDate(date)
    localStorage.setItem('StartDateInfo',JSON.stringify(date))
  }
  const handleEnd = (date) => {
    setEndDate(date)
    localStorage.setItem('EndDateInfo',JSON.stringify(date))
  }

  const [loadingData, setLoadingData] = useState(true);
  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
const handleCloseModal = () => {
    window.location.reload();
};

  const fetchData = async () => {
    if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/employeeattendance')
          setAttendance(res.data.data.filter((row)=> row.observation !== "Stopped"));
          await Promise.all(res.data.data.map( async (item,i)=>{
           await db.employeeAttendanceSchema.put({...item, idInfo:i+1,synced: true,updateS:true})
          }))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    } else {
     const offLineCustomer1 = await db.employeeAttendanceSchema.toArray();
     setAttendance(offLineCustomer1.filter((row)=> row.observation !== "Stopped"));
    }
     }

     const syncOff = async () => {
      if (navigator.onLine) {
        const syncedEmployee = await db.employeeAttendanceSchema.toArray();
        const EmployeeToSynced = syncedEmployee.filter((row)=>row.synced === false)
       for(const EmployeeInfo of EmployeeToSynced){
        try {
           await axios.post('https://gg-project-production.up.railway.app/endpoint/create-employeeattendance',EmployeeInfo)
           await db.employeeAttendanceSchema.delete(EmployeeInfo.employeeId)
           handleOpenOffline();
        } catch (error) {
          console.log(error)
        }
        }
        const EmployeeToSyncedUpdate = syncedEmployee.filter((row)=>row.updateS === false)
        for(const EmployeeInfoUpdate of EmployeeToSyncedUpdate){
          try {
             await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-employeeattendance/${EmployeeInfoUpdate._id}`,EmployeeInfoUpdate)
             await db.employeeAttendanceSchema.update(EmployeeInfoUpdate.idInfo, { synced:true,updateS:true})
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
  useEffect(()=> {
    const fetchEmployeeName = async ()=>{
     if (navigator.onLine) {
       try {
         const resEmployee = await axios.get('https://gg-project-production.up.railway.app/endpoint/employee')
         setEmployee(resEmployee.data.data.filter((row)=> row.status === 'Employed' ));
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const offLineCustomer1 = await db.employeeSchema.toArray();
      setEmployee(offLineCustomer1.filter((row)=> row.status === 'Employed' ));
     }
    }
    fetchEmployeeName()
  },[])

{/*const totalDayWorked = 
  employee.map((row)=>{
 const dateOfTheMonth = filteredData.map(dayM=>{
  const relatedDay = Attendance.find(item => dayjs( new Date(item.timeIn)).format('DD/MM/YYYY') === dayjs(dayM).format('DD/MM/YYYY') && item.id === row._id)
if (relatedDay) {
   return relatedDay
}
 })
 return ( {
  id: row._id,
  dayW: dateOfTheMonth.filter(item=> item !== undefined && (item.observation === 'P' || item.observation === 'H') ).reduce((sum,item)=> item !== undefined?sum + item.daysWN:0,0)
 })
})*/}

const dates = useMemo(()=>{
if (startDate && endDate) {
  return filteredData(startDate,endDate)
}
return []
},[startDate,endDate])


const attendanceStatus = useMemo(()=>{
  const statusMap = {}
  Attendance.forEach(({id,timeIn,observation,daysWN})=>{
   if (!statusMap[id]) statusMap[id] ={}
   statusMap[id][dayjs(timeIn).format('DD/MM/YYYY')]= observation
  })
  return(statusMap)
},[Attendance])



const [openView,setOpenView] = useState(false);
const [idView,setIdView] = useState(null);
const [employeeAttendanceInfo,setEmployeeAttendanceInfo]=useState(null)
const handleShow = (id) => {
  setOpenView(true);
  setIdView(id)
}
const handleCloseView = () => {
  setOpenView(false);
  setIdView(null);
};
useEffect(()=>{
  const fetchData2 = async () => {
    if (idView !== null) {
   if (navigator.onLine) {
     try {
         const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeattendance/${idView}`)
         setEmployeeAttendanceInfo(res.data.data)
     } catch (error) {
       console.log(error)
     }  
   } else {
    const resLocal = await db.employeeAttendanceSchema.get({_id:idView})
    setEmployeeAttendanceInfo(resLocal)
   }
  }
  }
  fetchData2()
 },[idView])

 const [search2,setSearch2] =useState('');
 const handleSearch2 = (e) => {
   const value = e.target.value
   setSearch2(value)
 }
 
 const newArray = useMemo(()=>search2 !== ''?employee.filter((row)=>
  row.employeeName.toLowerCase().includes(search2.toLowerCase())
   ):employee,[employee,search2])

  const totalCounts = useMemo(()=>{
    const counts = {};
    newArray.forEach(name => {
      counts[name._id] = {P:0, A:0, S:0, H:0};
      dates.forEach(date=> {
        const record = attendanceStatus[name._id]?.[dayjs(date).format('DD/MM/YYYY')];
        if (record) {
          counts[[name._id]][record]++
        }
      })
    })
    return counts
  },[newArray,dates,attendanceStatus])


  return (
    <>
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
    <TextField
                label='Search'
                id='search2'
                value={search2}
                onChange={handleSearch2}
                />
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
    <div>
      <TableContainer sx={{maxHeight:'500px'}}>
          <Table  aria-label="collapsible table"  stickyHeader  sx={{backgroundColor:'white',marginBottom:'0px'}}>
       <TableHead >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell sx={{width:'100px'}}>Employee</TableCell>
            {
              dates?.map((row)=>(
                <TableCell key={row}>{dayjs(row).format('DD/MM')}</TableCell>
              ))
            }
             <TableCell sx={{width:'10px'}}>P</TableCell>
             <TableCell sx={{width:'10px'}}>A</TableCell>
             <TableCell sx={{width:'10px'}}>H</TableCell>
             <TableCell sx={{width:'10px'}}>S</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
          newArray.map((row, i)=>{
            return (
            <StyledTableRow key={row._id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{row.employeeName}</TableCell>
              {
                dates.map(dateI=>{
                return( 
               <TableCell key={dateI}>
                {
                  attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')]?   <Typography
                  color={
                    attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')] === "#"
                    ? "gray":attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')] === "P"
                    ? "blue":
                    attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')] === "A"
                    ? "red":
                    attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')] === "H"
                    ? "#339ba5":
                    attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')] === "S"
                    ? "#6a1b9a":"black"
                 }
                  >
          {attendanceStatus[row._id]?.[dayjs(dateI).format('DD/MM/YYYY')]}
                  </Typography>:'N/A'
                }
                  </TableCell>
                  )
                })
              }
              <TableCell>{totalCounts[row._id]?.P || 0}</TableCell>
              <TableCell>{totalCounts[row._id]?.A || 0}</TableCell>
              <TableCell>{totalCounts[row._id]?.H || 0}</TableCell>
              <TableCell>{totalCounts[row._id]?.S || 0}</TableCell>
            </StyledTableRow>
          )})
         }
        </TableBody>
       </Table>
      </TableContainer>
     
    </div>
    <Modal  
       open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box 
  sx={{ ...style, width: 850 }}
  >
  <section style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <Typography>Attendance Information</Typography>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseView} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  

  </section>
  {
    employeeAttendanceInfo !== null?(
           <Grid container sx={{marginBottom:'10px',alignItems:'center',padding:'15px'}} spacing={3}>
        <Grid item xs = {6}>
          <Card sx={{height:'275px'}}>
            <CardContent>
          
            <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
                <Grid item xs={12} sx={{textAlign:'center'}}>
                  <Typography>{employeeAttendanceInfo.name}</Typography>
                </Grid>
                <Grid item xs = {6}>
                <Typography>Time In</Typography>
                </Grid>
                <Grid item xs = {6}>
                  <Typography>{dayjs(employeeAttendanceInfo.timeIn).format('DD/MM/YYYY HH:mm')}</Typography>
                </Grid>
                <Grid item xs = {12} sx={{textAlign:'center'}}>
                <Typography sx={{position:'relative',marginLeft:'16%',padding:'20px',border:'1px solid gray',borderRadius:'20px', textAlign:'center', width:'200px',backgroundColor:'#30368a',color:'white'}}>
                    {Math.floor((new Date(employeeAttendanceInfo.timeOut)-new Date(employeeAttendanceInfo.timeIn))/ (1000 * 60 * 60))} hrs {Math.floor(((new Date(employeeAttendanceInfo.timeOut)-new Date(employeeAttendanceInfo.timeIn)) % (1000 * 60 * 60)) / (1000*60))} min
                  </Typography>
                </Grid>
                <Grid item xs = {6}>
                <Typography>Time Out</Typography>
</Grid>
<Grid item xs = {6}>
<Typography>{dayjs(employeeAttendanceInfo.timeOut).format('DD/MM/YYYY HH:mm')}</Typography>
</Grid>
              </Grid>
            </CardContent>
          </Card>
         
        </Grid>
        <Grid item xs = {6}>
          <Card sx={{height:'275px'}}>
            <CardContent>
            <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
                <Grid item xs = {6}>
                <Typography>Observation</Typography>
                </Grid>
                <Grid item xs = {6}>
                <Typography sx={{cursor:'pointer'}}
    color={
employeeAttendanceInfo.observation === "PH"? "gray":
employeeAttendanceInfo.observation === "H"
      ? "blue":
employeeAttendanceInfo.observation === "A"
      ? "red":
employeeAttendanceInfo.observation === "S"
      ? "#801313":
employeeAttendanceInfo.observation === "P"
      ? "#4caf50":
employeeAttendanceInfo.observation === "#"
      ? "gray":"black"
   }>
    {employeeAttendanceInfo? employeeAttendanceInfo.observation:'NA'}
    </Typography>
                </Grid>
                <Grid item xs = {12}>
                <Typography>Note: {employeeAttendanceInfo.note}</Typography>
</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid> 
    ):''
  }

        </Box>
      </Modal>
      <Modal 
           open={loadingOpenModal}
           onClose={handleCloseModal}
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
                  <button onClick={handleCloseModal} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
    </>
  )
}

export default EmployeeAttendanceSheet
