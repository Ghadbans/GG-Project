import React, { useEffect,useState } from 'react';
import '../Chartview.css';
import {Box,IconButton, Modal,Backdrop, Table, TableBody,TableHead,TableRow,styled,Typography, Grid, Paper, Card, CardContent, TableContainer } from '@mui/material'
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
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';

function createData(id,  employeeName, timeIn, status,transport) {
  return { id,employeeName, timeIn, status,transport};
}

const rows = [
  createData( 1, 'Robert', '7h50 Am','Present','2000fc'),
  createData( 2, 'Robert', '7h50 Am','Present','4000fc'),
 
];
function EmployeeTodayAttendance() {
  const [startDate,setStartDate] =  useState(()=>{
    const date = new Date()
    return date
  });
  const [Attendance,setAttendance]= useState([])
  const [planing, setPlaning] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      if (navigator.onLine) {
          try {
            const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/employeeattendance')
            const resPlaning = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/planing')
            setAttendance(res.data.data);
            setPlaning(resPlaning.data.data); 
            await Promise.all(res.data.data.map( async (item,i)=>{
             await db.employeeAttendanceSchema.put({...item, idInfo:i+1,synced: true,updateS:true})
            }))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      } else {
       const offLineCustomer1 = await db.employeeAttendanceSchema.toArray();
       setAttendance(offLineCustomer1);
       const offLineCustomer2 = await db.planingSchema.toArray();
       setPlaning(offLineCustomer2)
      }
       }
       fetchData()
  },[])

  const filterAttendance = Attendance.filter((row)=>
    dayjs(new Date(row.timeIn)).format('DD/MM/YYYY') ===  dayjs(startDate).format('DD/MM/YYYY') && dayjs(row.timeOut).format('DD/MM/YYYY') ===  dayjs(startDate).format('DD/MM/YYYY')
  )
  const filterPlaning = planing.filter((row)=>
    dayjs(row.planingDate).format('DD/MM/YYYY') ===  dayjs(startDate).format('DD/MM/YYYY') 
  )

  const todayP = filterAttendance.filter((row)=> row.observation === 'P' )
  const todayA = filterAttendance.filter((row)=> row.observation === 'A' )
  const todayS = filterAttendance.filter((row)=> row.observation === 'S' )
  const todayH = filterAttendance.filter((row)=> row.observation === 'H' )
  const todayST = filterAttendance.filter((row)=> row.observation === 'Stopped' )

  const data = [
    {  "id":1,label: 'Present', Ob:'P', value: todayP.length },
    {  "id":2,label: 'Absent', Ob:'A', value: todayA.length },
    {  "id":3,label: 'Suspended', Ob:'S', value: todayS.length },
    {  "id":4,label: 'Half Day', Ob:'H', value: todayH.length },
    {  "id":5,label: 'Stopped', Ob:'Stopped', value: todayST.length },
  ];
  const [observation,setObservation] = useState("")
  const onClickAttendance = (e,b) => {
data.filter((row,i)=> i === b.dataIndex).map((row)=> setObservation(row.Ob))
  }

  const newArray = observation !== ""?filterAttendance.filter((row)=>
    row.observation === observation 
     ):filterAttendance
     
  return (
    <div>
      <section style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
      <DatePicker
                   required
                  name='startDate' 
                  label='From Date'
                  value={dayjs(startDate)}
                  onChange={(date)=> setStartDate(date)} 
                  format='DD/MM/YYYY' 
             />
      </DemoContainer>
  </LocalizationProvider>
  <Card>
    <CardContent>
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label}(${item.value})`,
          arcLabelMinAngle: 35,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          data,
        },
      ]}
      width={450}
      height={250}
      onItemClick={(e,b)=> onClickAttendance(e,b)}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
    />
    </CardContent>
  </Card>
      </section>
  <br/>
  <TableContainer component={Paper} sx={{maxHeight:'500px'}}>
    <Table style={{backgroundColor:'white'}} aria-label="collapsible table" stickyHeader>
    <TableHead >
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell align="center">Employee Name</TableCell>
        <TableCell align="center">Time In</TableCell>
        <TableCell align="center">Time Out</TableCell>
        <TableCell align="center">Observation</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Note</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {newArray?.map((row,i) => {
        const related = filterPlaning.length !== 0? filterPlaning.find((row1)=> row1.employeeID === row.id): null
        return (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {i + 1}
          </TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{dayjs(row.timeIn).format('HH:mm')} AM</TableCell>
          <TableCell align="center">{dayjs(row.timeOut).format('HH:mm')} PM</TableCell>
          <TableCell align="center">{row.observation}</TableCell>
          <TableCell align="center">{related?<span style={{color:'green'}}>Assigned</span>:<span style={{color:'red'}}>UnAssigned</span>}</TableCell>
          <TableCell align="center">{row.note}</TableCell>
        </TableRow>
      )})}
    </TableBody>
        
    </Table>
  </TableContainer>
    
    </div>
  )
}

export default EmployeeTodayAttendance
