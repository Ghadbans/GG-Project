import React, { useEffect, useMemo, useState } from 'react'
import { Close, Height } from '@mui/icons-material'
import { IconButton, Paper,TextField,Typography,styled,Backdrop,Modal, Box, Grid, Card, CardContent, Popper,Fade,Popover, Container, Divider, Tab } from '@mui/material';
import { Badge} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../component/Loader';
import axios from 'axios';
import dayjs from 'dayjs';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { json } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';


function NotificationVIewInfo() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(()=> {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  },[])
  const handleOnline = () => {
    setIsOnline(true)
  }
  const handleOffline = () => {
    setIsOnline(false)
  }
  const date = new Date()
    const [notification,setNotification]= useState([]);
    const [notificationAll,setNotificationAll]= useState([]);
    const [badgeNumber,setBadgeNumber] = useState(0);
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [value3, setValue3] = React.useState('1');
      const handleChange3 = (event, newValue) => {
       const changeValue = newValue
        setValue3(changeValue);
      };
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setNotification([]);
      setBadgeNumber(0);
      localStorage.removeItem('ArrayNotification');
      localStorage.removeItem('badgeNotification');
    };
useEffect(()=>{
      const fetchNotification = async() =>{
        try {
          const notificationResponse = await axios.get('https://gg-project-production.up.railway.app/endpoint/notification');
          setNotificationAll(notificationResponse.data.data.reverse())
        } catch (error) {
          console.log(error)
        }
      }
      fetchNotification()
    },[])

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(()=>{
      if (navigator.onLine) {
        const socket = io('https://gg-project-production.up.railway.app')
        const storedNotification = JSON.parse(localStorage.getItem('ArrayNotification')) || []
        setNotification(storedNotification)
        setBadgeNumber(storedNotification.length)
          socket.on('newNotification', (newNotification) => {
            setNotification( prev => {
              const related = [newNotification, ...prev]
              localStorage.setItem('ArrayNotification',JSON.stringify(related))
              localStorage.setItem('badgeNotification',JSON.stringify(related.length))
              return related
            })
            setNotificationAll( prev => {
              const related = [newNotification, ...prev]
              return related
            })
            setBadgeNumber(prev => prev + 1)
          });
          return () => {
            socket.off('newNotification')
          }
      }
       },[])
      
       const handleClear = () => {
        setNotification([]);
        setBadgeNumber(0);
        localStorage.removeItem('ArrayNotification');
        localStorage.removeItem('badgeNotification');
       }
       const [search2,setSearch2] =useState('');
       const handleSearch2 = (e) => {
         const value = e.target.value
         setSearch2(value)
       }
       const newArray2  = useMemo(()=>search2 !== ''?notificationAll.filter((Item)=>
        Item.person && Item.person.toLowerCase().includes(search2.toLowerCase()) ||
        Item.reason && Item.reason.toLowerCase().includes(search2.toLowerCase()) ||
        dayjs(Item.dateNotification).format('DD/MM/YYYY') && dayjs(Item.dateNotification).format('DD/MM/YYYY').toLowerCase().includes(search2.toLowerCase()) 
            ):notificationAll,[notificationAll,search2])

  return (
    <>
             <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
              <Badge badgeContent={badgeNumber} color="secondary">
                <NotificationsIcon sx={{color:'white'}} />
              </Badge>
            </IconButton>
            <Popover 
id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}>
         <Box sx={{width:430, height:670}}>
          <section style={{padding:'15px', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography>Notification</Typography>
          </section>
          <TabContext  value={value3}>
             <Box>
            <TabList onChange={handleChange3}
          aria-label="lab API tabs example"
          sx={{
            padding:'10px',
            '& .MuiTabs-indicator':{
              backgroundColor:'white',
              height:'0px'
            }
          }}>
              <Tab 
            label={
              <Badge badgeContent={badgeNumber} color="secondary">
                New Notification
              </Badge>
            }
                value="1"
                />
            <Tab
             label="All Notification" 
                value="2"/>
          </TabList>
          </Box>
          <TabPanel value="1">
          <section>
                {
                        notification.length > 0?  notification.map((row)=>(
                        <div key={row._id} >
                            <section className='btnCustomer8' style={{padding:'10px',alignItems:'center', border:'2px solid gray', borderRadius:'20px', margin:'10px',backgroundColor:'#30368a', color:'white',lineHeight:'5px'}}>
                                <p className="txt2" style={{color:'white'}}>{dayjs(row.dateNotification).format('DD/MM/YYYY-HH:mm')}</p>
                                <p className="txt2" style={{color:'white'}}>{row.person}: {row.reason}</p>
                            </section>
                        </div>
                    )):
                    <p style={{position:'absolute', top:'40%', left:'35%'}}>
                      No new notification
                    </p>
                  }
            </section>
          </TabPanel>
          <TabPanel value="2">
          <section style={{position:'relative', float:'right', padding:'10px',marginTop:'-60px'}}>
                <TextField
                label='Search'
                id='search2'
                value={search2}
                variant="standard"
                onChange={handleSearch2}
                />
              </section>
              {
                        newArray2.length > 0?  newArray2.map((row)=>(
                        <div key={row._id} >
                            <section className='btnCustomer8' style={{padding:'10px',alignItems:'center', border:'2px solid gray', borderRadius:'20px', margin:'10px',backgroundColor:'#30368a', color:'white',lineHeight:'5px'}}>
                                <p className="txt2" style={{color:'white'}}>{dayjs(row.dateNotification).format('DD/MM/YYYY-HH:mm')}</p>
                                <p className="txt2" style={{color:'white'}}>{row.person}: {row.reason}</p>
                            </section>
                        </div>
                    )):
                    <p style={{position:'absolute', top:'40%', left:'35%'}}>
                      No new notification
                    </p>
                  }
          </TabPanel>
          </TabContext>
         
            </Box>
        </Popover>
    </>
  )
}

export default NotificationVIewInfo
