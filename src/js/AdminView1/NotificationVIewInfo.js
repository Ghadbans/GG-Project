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
import { json, useNavigate } from 'react-router-dom';
import { API_BASE_URL, ENDPOINT_URL } from '../apiConfig';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import BranchSelector from '../component/BranchSelector';


function NotificationVIewInfo() {

  const [notification, setNotification] = useState([]);
  const [notificationAll, setNotificationAll] = useState([]);
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value3, setValue3] = React.useState('1');
  const navigate = useNavigate();

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

  const handleNavigate = (row) => {
    if (!row.idInfo) {
      toast.info("No direct link available for this notification.");
      return;
    }

    const person = row.person || "";
    const reason = row.reason || "";
    const fullText = (person + " " + reason).toUpperCase();

    // Mapping based on prefixes and keywords
    if (fullText.includes("M-")) {
      navigate(`/MaintenanceUpdateView/${row.idInfo}`);
    } else if (fullText.includes("P-")) {
      navigate(`/ProjectUpdateView/${row.idInfo}`);
    } else if (fullText.includes("INV-") || fullText.includes("INVOICE")) {
      navigate(`/InvoiceFormUpdate/${row.idInfo}`);
    } else if (fullText.includes("D-") || fullText.includes("EXPENSE")) {
      navigate(`/DailyExpenseUpdate/${row.idInfo}`);
    } else if (fullText.includes("IP-") || fullText.includes("ITEM PURCHASE")) {
      navigate(`/ItemPurchaseUpdateForm/${row.idInfo}`);
    } else if (fullText.includes("EST-") || fullText.includes("Q-") || fullText.includes("QUO-") || fullText.includes("QUOTATION")) {
      navigate(`/EstimateInvoiceFormUpdate/${row.idInfo}`);
    } else if (fullText.includes("PO-") || fullText.includes("PURCHASE")) {
      navigate(`/PurchaseUpdateOrder/${row.idInfo}`);
    } else if (fullText.includes("PAY-") || fullText.includes("PAYMENT")) {
      navigate(`/PaymentInformationUpdate/${row.idInfo}`);
    } else if (fullText.includes("IO-") || fullText.includes("O-") || fullText.includes("ITEM OUT")) {
      navigate(`/ItemOutViewUpdate/${row.idInfo}`);
    } else if (fullText.includes("IR-") || fullText.includes("R-") || fullText.includes("ITEM RETURN")) {
      navigate(`/ItemReturnUpdateForm/${row.idInfo}`);
    } else if (fullText.includes("S-00") || fullText.includes("F-") || fullText.includes("POS") || fullText.includes("SELL")) {
      navigate(`/ShopPosUpdateForm/${row.idInfo}`);
    } else if (fullText.includes("S-") || fullText.includes("SUPPLIER")) {
      navigate(`/SupplierFormUpdate/${row.idInfo}`);
    } else if (fullText.includes("C-") || fullText.includes("CUSTOMER")) {
      navigate(`/CustomerFormUpdate/${row.idInfo}`);
    } else if (fullText.includes("EMP-") || fullText.includes("EMPLOYEE")) {
      navigate(`/EmployeeUpdateView/${row.idInfo}`);
    } else if (fullText.includes("PR-") || fullText.includes("PAYROLL")) {
      navigate(`/PayRollUpdateFormView/${row.idInfo}`);
    } else if (fullText.includes("ITEM")) {
      navigate(`/ItemUpdateView2/${row.idInfo}`);
    } else {
      toast.info("Could not determine the exact page for this record.");
    }
    
    handleClose(); // Close popover after navigation
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
      <BranchSelector />
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
                    <div key={row._id} onClick={() => handleNavigate(row)} style={{ cursor: 'pointer' }}>
                      <section className='btnCustomer8' style={{ 
                        padding: '12px', 
                        border: '1px solid #e0e0e0', 
                        borderRadius: '12px', 
                        margin: '10px', 
                        backgroundColor: '#30368a', 
                        color: 'white', 
                        lineHeight: '1.4',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }
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
                  <div key={row._id} onClick={() => handleNavigate(row)} style={{ cursor: 'pointer' }}>
                    <section className='btnCustomer8' style={{ 
                      padding: '12px', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '12px', 
                      margin: '10px', 
                      backgroundColor: '#30368a', 
                      color: 'white', 
                      lineHeight: '1.4',
                      '&:hover': {
                        backgroundColor: '#3f46a3'
                      }
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
