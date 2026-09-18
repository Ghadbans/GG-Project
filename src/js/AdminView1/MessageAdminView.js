import React, { useEffect, useState, useRef } from 'react'
import { Close, Height, MailOutline, Reply } from '@mui/icons-material'
import { IconButton, Paper, TextField, Typography, styled, Backdrop, Modal, Box, Grid, Card, CardContent, Popper, Fade, Popover, Container, Divider, Menu, MenuItem, ListItemText, List } from '@mui/material';
import { Badge } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../component/Loader';
import axios from 'axios';
import dayjs from 'dayjs';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import { API_BASE_URL, ENDPOINT_URL } from '../apiConfig';
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
  const [messageInfo, setMessageInfo] = useState([])
  const userName = name
  const date = new Date();
  const nowDate = date.toLocaleDateString();
  const nowTime = date.toLocaleTimeString();
  const [message, setMessage] = useState('');
  const [editView, setEditView] = useState('false');
  const [idEdit, setIdEdit] = useState(null);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const inputRef = useRef(null);
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
    setLoadingOpenModal(false);
    setAnchorEl(null);
    setReplyingTo(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/message`)
        setMessageInfo(res.data.data.reverse())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [])
  useEffect(() => {
    const socket = io(`${API_BASE_URL}`)
    socket.on('newMessage', (newMessage) => {
      setMessageInfo((prev) => [newMessage, ...prev])
      setBadgeNumber((prev) => prev + 1)
      toast.success(`new message from ${newMessage.userName + ' On ' + dayjs(newMessage.nowDate).format('DD/MMMM') + ' At ' + newMessage.nowTime}`)
      const message = `new message from ${newMessage.userName + ' On ' + dayjs(newMessage.nowDate).format('DD/MMMM') + ' At ' + newMessage.nowTime}`
      if (window.electron && window.electron.sendNotification) {
        window.electron.sendNotification(message)
      } else if (window.Notification && window.Notification.permission === "granted") {
        new window.Notification("Global Gate", { body: message });
      }
      localStorage.setItem('badgeMessage', badgeNumber + 1)
    });
    return () => {
      socket.off('newMessage')
    }
  }, [badgeNumber])


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
    if (status === 'true') {
      setReplyingTo(null);
    }
  }

  const handleReply = (row) => {
    setReplyingTo(row);
    setEditView('false');
    setIdEdit(null);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (idEdit !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-message/${idEdit}`);
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
      const res = await axios.delete(`${ENDPOINT_URL}/delete-message/${DeleteId}`);
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
      const res = await axios.put(`${ENDPOINT_URL}/update-message/${idEdit}`, data);
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
    if (!message.trim()) return;

    const data = {
      userName,
      nowDate,
      nowTime,
      message,
      ...(replyingTo && {
        replyTo: {
          id: replyingTo._id,
          userName: replyingTo.userName,
          message: replyingTo.message
        }
      })
    };
    try {
      const res = await axios.post(`${ENDPOINT_URL}/create-message/`, data)
      if (res) {
        setUpdateD('saved')
        setMessage("");
        setReplyingTo(null);
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
        <Box sx={{ width: 440, maxHeight: 680, display: 'flex', flexDirection: 'column', padding: '12px' }} component={Paper}>
          <Box sx={{ flex: 1, maxHeight: 460, marginBottom: '12px', overflow: 'hidden', overflowY: 'auto' }}>
            {
              messageInfo.map((row) => (
                <div key={row._id} >
                  {
                    editView === "true" && idEdit === row._id ?
                      <div style={{ padding: '10px', lineHeight: 'normal', border: '2px solid gray', borderRadius: '16px', margin: '10px 0', backgroundColor: '#30368a', color: 'white' }}>
                        <IconButton onClick={() => setEditView("false")} sx={{ float: 'right', color: 'white' }} size="small">
                          <Close fontSize="small" />
                        </IconButton>
                        <form onSubmit={handleSubmit}>
                          <TextField
                            multiline
                            rows={3}
                            label='Message'
                            value={updatedMessage}
                            onChange={(e) => setUpdatedMessage(e.target.value)}
                            sx={{ width: '100%', backgroundColor: 'white', marginBottom: '10px', borderRadius: '4px' }}
                          />
                          <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>update</button>
                        </form>
                      </div> :
                      <ListItemText sx={row.userName === name ? { padding: '12px', lineHeight: 'normal', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', margin: '10px 0', backgroundColor: '#30368a', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } : { padding: '12px', lineHeight: 'normal', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', margin: '10px 0', backgroundColor: '#2e7d32', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <List style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', padding: 0 }}>
                          <span className="txt2" style={{ color: 'white', fontWeight: 'bold' }}>{row.userName}</span>
                          <span className="txt2" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px' }}>{' On ' + dayjs(row.nowDate).format('DD/MMMM') + ' At ' + row.nowTime}</span>
                        </List>

                        {/* Quoted Reply Block */}
                        {row.replyTo && (
                          <Box
                            sx={{
                              p: '6px 10px',
                              mb: 1,
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0, 0, 0, 0.25)',
                              borderLeft: '4px solid #ffb74d',
                              color: '#fff',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 'bold',
                                color: '#ffb74d',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '11px'
                              }}
                            >
                              <Reply sx={{ fontSize: '13px' }} /> Replying to {row.replyTo.userName}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: '12px',
                                opacity: 0.9,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontStyle: 'italic',
                                mt: '2px',
                                lineHeight: 1.3
                              }}
                            >
                              {row.replyTo.message}
                            </Typography>
                          </Box>
                        )}

                        <List className="txt2" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
                          <span style={{ wordBreak: 'break-word', flex: 1, mr: 1 }}>{row.message}</span>
                          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                            <IconButton
                              title={`Reply to ${row.userName}`}
                              onClick={() => handleReply(row)}
                              size="small"
                              sx={{ color: 'white', ml: 0.5, '&:hover': { color: '#ffb74d', backgroundColor: 'rgba(255,255,255,0.1)' } }}
                            >
                              <Reply fontSize="small" />
                            </IconButton>
                            <IconButton
                              disabled={row.userName !== name}
                              onClick={() => handleEditView('true', row._id)}
                              size="small"
                              sx={{ color: 'white', ml: 0.5, opacity: row.userName !== name ? 0.3 : 1 }}
                            >
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton
                              disabled={role !== 'CEO'}
                              onClick={() => handleOpenDelete(row._id)}
                              size="small"
                              sx={{ color: '#ff5252', ml: 0.5, opacity: role !== 'CEO' ? 0.3 : 1 }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </span>
                        </List>
                      </ListItemText>
                  }
                </div>
              ))
            }
          </Box>
          <section>
            {/* Active Replying-to Banner */}
            {replyingTo && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#e8eaf6',
                  borderLeft: '4px solid #30368a',
                  borderRadius: '6px',
                  p: '6px 10px',
                  mb: 1,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mr: 1, flex: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#30368a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Reply sx={{ fontSize: '14px' }} /> Replying to {replyingTo.userName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#555', fontStyle: 'italic', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {replyingTo.message}
                  </Typography>
                </Box>
                <IconButton size="small" onClick={() => setReplyingTo(null)} sx={{ color: '#666', p: '2px' }} title="Cancel reply">
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            )}

            <form onSubmit={handleSubmitEdit}>
              <TextField
                required
                id='message'
                name='message'
                inputRef={inputRef}
                value={message}
                multiline
                rows={2}
                onChange={(e) => setMessage(e.target.value)}
                label={replyingTo ? `Reply to ${replyingTo.userName}...` : 'Type a message...'}
                sx={{ width: '100%', backgroundColor: 'white', marginBottom: '10px' }}
              />
              <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>
                {replyingTo ? 'Send Reply' : 'Save'}
              </button>
            </form>
          </section>
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
