import React, { useEffect, useState } from 'react'
import { Close, Height, MailOutline } from '@mui/icons-material'
import { IconButton, Paper, TextField, Typography, styled, Backdrop, Modal, Box, Grid, Card, CardContent, Popper, Fade, Popover, Container, Divider, Menu, MenuItem, ListItemText, List } from '@mui/material';
import { Badge } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../component/Loader';
import axios from 'axios';
import dayjs from 'dayjs';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import 'react-toastify/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  Height: 600,
  bgcolor: 'background.paper',
  pt: 2,
  px: 4,
  pb: 3,
};

function MessageAdminView({ name, role }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  const handleOnline = () => {
    setIsOnline(true)
  }
  const handleOffline = () => {
    setIsOnline(false)
  }
  const [messageInfo, setMessageInfo] = useState([])
  const userName = name
  const date = new Date();
  const nowDate = date.toLocaleDateString();
  const nowTime = date.toLocaleTimeString();
  const [message, setMessage] = useState('');
  const [editView, setEditView] = useState('false');
  const [idEdit, setIdEdit] = useState(null);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [badgeNumber, setBadgeNumber] = useState(
    parseInt(localStorage.getItem('badgeMessage')) || 0
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBadgeNumber(0);
    localStorage.removeItem('badgeMessage');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/message')
        setMessageInfo(res.data.data.reverse())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [])
  useEffect(() => {
    if (navigator.onLine) {
      const socket = io('https://gg-project-production.up.railway.app')
      socket.on('newMessage', (newMessage) => {
        setMessageInfo([newMessage, ...messageInfo])
        setBadgeNumber(badgeNumber + 1)
        toast.success(`new message from ${newMessage.userName + ' On ' + dayjs(newMessage.nowDate).format('DD/MMMM') + ' At ' + newMessage.nowTime}`)
        const message = `new message from ${newMessage.userName + ' On ' + dayjs(newMessage.nowDate).format('DD/MMMM') + ' At ' + newMessage.nowTime}`
        if (window.electron && window.electron.sendNotification) {
          window.electron.sendNotification(message)
        }
        localStorage.setItem('badgeMessage', badgeNumber + 1)
      });
      return () => {
        socket.off('newMessage')
      }
    }
  }, [badgeNumber, messageInfo])


  const [openDelete, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)
  const handleOpenDelete = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleCloseDElete = () => {
    setOpen(false);
    setDeleteId(null)
  };
  const handleEditView = (status, id) => {
    setEditView(status);
    setIdEdit(id);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (idEdit !== null) {
        try {
          const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-message/${idEdit}`);
          setUpdatedMessage(res.data.data.message)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchData()
  }, [idEdit])

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const [updateD, setUpdateD] = useState('')
  const handleCloseModale = () => {
    setLoadingOpenModal(false);
    setBadgeNumber(0);
    if (updateD === 'true' || updateD === 'Delete') {
      window.location.reload();
    }
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDeleteUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-message/${DeleteId}`);
      if (res) {
        setUpdateD('Delete')
        handleOpen();
      }
    }
    catch (error) {
      console.log('An error as occur in delete');
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      message: updatedMessage
    };
    try {
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-message/${idEdit}`, data);
      if (res) {
        setUpdateD('true')
        handleOpen();
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      userName,
      nowDate,
      nowTime,
      message
    };
    try {
      const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-message/', data)
      if (res) {
        setUpdateD('saved')
        setMessage("");
        handleOpen();
        setBadgeNumber(0);
        localStorage.removeItem('badgeMessage');
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }

  return (
    <>
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <Badge badgeContent={badgeNumber} color="secondary">
          <MailOutline sx={{ color: 'white' }} />
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
        }}
      >
        <Box sx={{ width: 430, height: 670, padding: '10px' }} component={Paper}>
          <Box sx={{ height: 480, marginBottom: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            {
              messageInfo.map((row) => (
                <div key={row._id} >
                  {
                    editView === "true" && idEdit === row._id ?
                      <div sx={{ padding: '10px', lineHeight: '5px', border: '2px solid gray', borderRadius: '20px', margin: '10px', backgroundColor: '#30368a', color: 'white' }}>
                        <IconButton onClick={() => setEditView("false")} sx={{ float: 'right' }}>
                          <Close />
                        </IconButton>
                        <form onSubmit={handleSubmit}>
                          <TextField
                            multiline
                            rows={3}
                            label='Message'
                            value={updatedMessage}
                            onChange={(e) => setUpdatedMessage(e.target.value)}
                            sx={{ width: '100%', backgroundColor: 'white', marginBottom: '10px' }}
                          />
                          <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>update</button>
                        </form>
                      </div> :
                      <ListItemText sx={row.userName === name ? { padding: '10px', lineHeight: '5px', border: '2px solid gray', borderRadius: '20px', margin: '10px', backgroundColor: '#30368a', color: 'white' } : { padding: '10px', lineHeight: '5px', border: '2px solid gray', borderRadius: '20px', margin: '10px', backgroundColor: 'green', color: 'white' }}>
                        <List style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <span className="txt2" style={{ color: 'white' }}>{row.userName}</span>
                          <span className="txt2" style={{ color: 'white' }}>{' On ' + dayjs(row.nowDate).format('DD/MMMM') + ' At ' + row.nowTime}</span>
                        </List>
                        <List className="txt2" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>{row.message}</span>
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton disabled={row.userName !== name} onClick={() => handleEditView('true', row._id)}>
                              <Edit style={{ color: 'white' }} />
                            </IconButton>
                            <IconButton disabled={role !== 'CEO'} onClick={() => handleOpenDelete(row._id)}>
                              <Delete style={{ color: 'red' }} />
                            </IconButton>
                          </span>
                        </List>
                        <Divider />
                      </ListItemText>
                  }
                </div>
              ))
            }
          </Box>
          <section>
            <form onSubmit={handleSubmitEdit}>
              <TextField
                required
                id='message'
                name='message'
                value={message}
                multiline
                rows={2}
                onChange={(e) => setMessage(e.target.value)}
                label='Message'
                sx={{ width: '100%', backgroundColor: 'white', marginBottom: '10px' }}
              />
              <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>Save</button>
            </form>
          </section>
          <ToastContainer />
        </Box>
      </Popover>
      <Modal
        open={loadingOpenModal}
        onClose={handleCloseModale}
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
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              {updateD === 'Delete' && (
                <h2> Data Deleted successfully</h2>
              )}
              {updateD === 'true' && (
                <h2> Data Updated successfully</h2>
              )}
              {updateD === 'saved' && (
                <h2> Data Saved successfully</h2>
              )}
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleCloseModale} className='btnCustomer'>
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
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2> Data Failed to Saved</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={openDelete}
        onClose={handleCloseDElete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} style={{ width: '100%', textAlign: 'center' }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Do you Want to delete?
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <button onClick={handleCloseDElete} className='btnCustomer' style={{ width: '100%' }}>Cancel</button>
            </Grid>
            <Grid item xs={6}>
              <button onClick={handleDeleteUpdate} className='btnCustomer2' style={{ width: '100%' }}>Delete</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default MessageAdminView
