import React, { useEffect, useMemo, useState } from 'react'
import { Close, Height } from '@mui/icons-material'
import { IconButton, Paper, TextField, Typography, styled, Backdrop, Modal, Box, Grid, Card, CardContent, Popper, Fade, Popover, Container, Divider, Tab } from '@mui/material';
import { Badge } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../component/Loader';
import axios from 'axios';
import dayjs from 'dayjs';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { API_BASE_URL, ENDPOINT_URL } from '../apiConfig';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import BranchSwitcher from '../component/BranchSwitcher';


function NotificationVIewInfo() {

  const [notification, setNotification] = useState([]);
  const [notificationAll, setNotificationAll] = useState([]);
  const [badgeNumber, setBadgeNumber] = useState(0);
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

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const notificationResponse = await axios.get(`${ENDPOINT_URL}/notification`);
        setNotificationAll(notificationResponse.data.data.reverse())
      } catch (error) {
        console.log(error)
      }
    }
    fetchNotification()
  }, [])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    // Limit reconnection attempts to stop 30-second "Not Found" spam on Railway
    const socket = io(`${API_BASE_URL}`, {
      reconnection: true,
      reconnectionAttempts: 3,
      timeout: 5000,
      transports: ['websocket'] // Skip long-polling fallback that causes Not Found 404s
    })
    const storedNotification = JSON.parse(localStorage.getItem('ArrayNotification')) || []
    setNotification(storedNotification)
    setBadgeNumber(storedNotification.length)
    socket.on('connect_error', () => {
      socket.disconnect(); // Stop retrying on connection failure
    })
    socket.on('newNotification', (newNotification) => {
      setNotification(prev => {
        const related = [newNotification, ...prev]
        localStorage.setItem('ArrayNotification', JSON.stringify(related))
        localStorage.setItem('badgeNotification', JSON.stringify(related.length))
        return related
      })
      setNotificationAll(prev => {
        const related = [newNotification, ...prev]
        return related
      })
      setBadgeNumber(prev => prev + 1)
    });
    return () => {
      socket.off('newNotification')
      socket.off('connect_error')
      socket.disconnect()
    }
  }, [])

  const handleClear = () => {
    setNotification([]);
    setBadgeNumber(0);
    localStorage.removeItem('ArrayNotification');
    localStorage.removeItem('badgeNotification');
  }
  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  const newArray2 = useMemo(() => search2 !== '' ? notificationAll.filter((Item) =>
    Item.person && Item.person.toLowerCase().includes(search2.toLowerCase()) ||
    Item.reason && Item.reason.toLowerCase().includes(search2.toLowerCase()) ||
    dayjs(Item.dateNotification).format('DD/MM/YYYY') && dayjs(Item.dateNotification).format('DD/MM/YYYY').toLowerCase().includes(search2.toLowerCase())
  ) : notificationAll, [notificationAll, search2])

  return (
    <>
      <BranchSwitcher />
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <Badge badgeContent={badgeNumber} color="secondary">
          <NotificationsIcon sx={{ color: 'white' }} />
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
        <Box sx={{ width: 430, height: 670 }}>
          <section style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#30368a' }}>Notifications</Typography>
            {notification.length > 0 && (
              <Typography 
                variant="caption" 
                sx={{ cursor: 'pointer', color: 'gray', '&:hover': { color: 'red' } }}
                onClick={handleClear}
              >
                Clear New
              </Typography>
            )}
          </section>
          <TabContext value={value3}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange3}
                aria-label="notification tabs"
                sx={{
                  padding: '0 10px',
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#30368a',
                  }
                }}>
                <Tab
                  label={
                    <Badge badgeContent={badgeNumber} color="secondary" sx={{ '& .MuiBadge-badge': { right: -10 } }}>
                      New
                    </Badge>
                  }
                  value="1"
                />
                <Tab
                  label="All"
                  value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '0', maxHeight: '550px', overflowY: 'auto' }}>
              <section>
                {
                  notification.length > 0 ? notification.map((row) => (
                    <div key={row._id}>
                      <section className='btnCustomer8' style={{ 
                        padding: '12px', 
                        border: '1px solid #e0e0e0', 
                        borderRadius: '12px', 
                        margin: '10px', 
                        backgroundColor: '#30368a', 
                        color: 'white', 
                        lineHeight: '1.4'
                      }}>
                        <p className="txt2" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginBottom: '4px' }}>
                          {dayjs(row.dateNotification).format('DD/MM/YYYY - HH:mm')}
                        </p>
                        <p className="txt2" style={{ color: 'white', fontWeight: '500' }}>
                          {row.person}
                        </p>
                        <p className="txt2" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', marginTop: '4px' }}>
                          {row.reason}
                        </p>
                      </section>
                    </div>
                  )) :
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10, color: 'gray' }}>
                      <NotificationsIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
                      <Typography>No new notifications</Typography>
                    </Box>
                }
              </section>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: '0', maxHeight: '550px', overflowY: 'auto' }}>
              <section style={{ padding: '10px' }}>
                <TextField
                  fullWidth
                  label='Search Notifications'
                  id='search2'
                  value={search2}
                  variant="outlined"
                  size="small"
                  onChange={handleSearch2}
                  sx={{ mb: 1 }}
                />
              </section>
              {
                newArray2.length > 0 ? newArray2.map((row) => (
                  <div key={row._id}>
                    <section className='btnCustomer8' style={{ 
                      padding: '12px', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '12px', 
                      margin: '10px', 
                      backgroundColor: '#30368a', 
                      color: 'white', 
                      lineHeight: '1.4'
                    }}>
                      <p className="txt2" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginBottom: '4px' }}>
                        {dayjs(row.dateNotification).format('DD/MM/YYYY - HH:mm')}
                      </p>
                      <p className="txt2" style={{ color: 'white', fontWeight: '500' }}>
                        {row.person}
                      </p>
                      <p className="txt2" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', marginTop: '4px' }}>
                        {row.reason}
                      </p>
                    </section>
                  </div>
                )) :
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10, color: 'gray' }}>
                    <Typography>No notifications found</Typography>
                  </Box>
              }
            </TabPanel>
          </TabContext>

        </Box>
      </Popover>
    </>
  )
}

export default NotificationVIewInfo
