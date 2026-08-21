import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import { ENDPOINT_URL } from '../../../apiConfig';
import { MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Tabs, Tab } from '@mui/material';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';

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
function InvoiceInformation({ onId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);
  const [invoice, setInvoice] = useState([]);
  const [invoice2, SetInvoice2] = useState({})
  const [hidden, setHidden] = useState([]);
  const apiUrl = `${ENDPOINT_URL}/invoice`;
  useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const res = await cachedGet(apiUrl)
        setInvoice(res.data.data); // Backend already sorts newest first (_id: -1)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchEstimate()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/hidden`)
        setHidden(res.data.data)
        localStorage.removeItem('Hidden')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [])
  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
  }
  const filteredRows = invoice.filter(row => !hidden.some((row2) => row2.idRow === row._id))

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = invoice.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [invoice, onId])
  useEffect(() => {
    const selectedIndex = filteredRows.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [filteredRows, onId])

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue)
  }
  const [search, setSearch] = useState(() => localStorage.getItem('search') || '');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    localStorage.setItem('search', value);
  };

  useEffect(() => {
    const storedSearch = localStorage.getItem('search');
    if (storedSearch) {
      setSearch(storedSearch);
    }
  }, []);

  const newArray = search !== '' ? invoice.filter((row) =>
    row.invoiceName.toLowerCase().includes(search.toLowerCase()) ||
    row.invoiceSubject.toLowerCase().includes(search.toLowerCase()) ||
    row.invoiceDefect && row.invoiceDefect.toLowerCase().includes(search.toLowerCase()) ||
    row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) ||
    row.items && row.items.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
    row.items && row.items.some((Item) => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()))
  ) : invoice

  const newArray2 = search !== '' ? filteredRows.filter((row) =>
    row.invoiceName.toLowerCase().includes(search.toLowerCase()) ||
    row.invoiceSubject && row.invoiceSubject.toLowerCase().includes(search.toLowerCase()) ||
    row.invoiceDefect && row.invoiceDefect.toLowerCase().includes(search.toLowerCase()) ||
    row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) ||
    row.items && row.items.some((Item) => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
    row.items && row.items.some((Item) => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()))
  ) : filteredRows



  return (
    <div>
      {
        user.data.role === 'CEO' ?
          (
            <div>
              {show === 1 ? (
                <div className='itemInfoContainer'>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                      <Checkbox />
                      <Typography variant='h6'>All Invoice</Typography>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
                    </div>
                  </div>
                  <div style={{ height: 'calc(100vh - 170px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      orientation="vertical"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: 'white',
                          height: '0px'
                        }
                      }}
                    >
                      {invoice?.map((row, index) => (
                        <Tab
                          key={index}
                          label={row.customerName.customerName + ' | ' + row.invoiceName + ' | ' + row.invoiceSubject}
                          component={Link}
                          to={`/InvoiceViewAdminAll/${row._id}`}
                          sx={{
                            '&.Mui-selected': {
                              color: 'white',
                              backgroundColor: '#30368a',
                              borderRadius: '10px'
                            }
                          }}
                        />
                      ))}
                    </Tabs>
                  </div>
                </div>
              )
                : ''
              }
              {show === 2 ?
                (<div className='itemInfoContainer'>
                  <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                    <Grid item xs={10}>
                      <TextField
                        label='search'
                        id='search'
                        value={search}
                        variant="standard"
                        onChange={handleSearch}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <ViewTooltip title="Close" placement='bottom'>
                        <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                          <Close style={{ color: '#30368a' }} />
                        </IconButton>
                      </ViewTooltip>
                    </Grid>
                  </Grid>

                  <div style={{ height: 'calc(100vh - 125px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                    <Tabs
                      value={value2}
                      onChange={handleChange2}
                      orientation="vertical"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: '#30368a'
                        }
                      }}
                    >
                      {newArray?.map((row, index) => (
                        <Tab
                          key={index}
                          label={row.customerName.customerName + ' | ' + row.invoiceName + ' | ' + row.invoiceSubject}
                          component={Link}
                          to={`/InvoiceViewAdminAll/${row._id}`}
                          sx={{
                            '&.Mui-selected': {
                              color: '#30368a'
                            }
                          }}
                        />
                      ))}
                    </Tabs>
                  </div>
                </div>)
                : ''
              }
            </div>
          )
          : (
            <div>
              {show === 1 ? (
                <div className='itemInfoContainer'>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                      <Checkbox />
                      <Typography variant='h6'>All Invoice</Typography>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
                    </div>
                  </div>
                  <div style={{ height: 'calc(100vh - 170px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      orientation="vertical"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: 'white',
                          height: '0px'
                        }
                      }}
                    >
                      {filteredRows?.map((row, index) => (
                        <Tab
                          key={index}
                          label={row.customerName.customerName + ' | ' + row.invoiceName + ' | ' + row.invoiceSubject}
                          component={Link}
                          to={`/InvoiceViewAdminAll/${row._id}`}
                          sx={{
                            '&.Mui-selected': {
                              color: 'white',
                              backgroundColor: '#30368a',
                              borderRadius: '10px'
                            }
                          }}
                        />
                      ))}
                    </Tabs>
                  </div>
                </div>
              )
                : ''
              }
              {show === 2 ?
                (<div className='itemInfoContainer'>
                  <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                    <Grid item xs={10}>
                      <TextField
                        label='search'
                        id='search'
                        value={search}
                        variant="standard"
                        onChange={handleSearch}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <ViewTooltip title="Close" placement='bottom'>
                        <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                          <Close style={{ color: '#30368a' }} />
                        </IconButton>
                      </ViewTooltip>
                    </Grid>
                  </Grid>

                  <div style={{ height: 'calc(100vh - 125px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                    <Tabs
                      value={value2}
                      onChange={handleChange2}
                      orientation="vertical"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: '#30368a'
                        }
                      }}
                    >
                      {newArray2?.map((row, index) => (
                        <Tab
                          key={index}
                          label={row.customerName.customerName + ' | ' + row.invoiceName + ' | ' + row.invoiceSubject}
                          component={Link}
                          to={`/InvoiceViewAdminAll/${row._id}`}
                          sx={{
                            '&.Mui-selected': {
                              color: '#30368a'
                            }
                          }}
                        />
                      ))}
                    </Tabs>
                  </div>
                </div>)
                : ''
              }
            </div>
          )
      }


    </div>
  )
}

export default InvoiceInformation
