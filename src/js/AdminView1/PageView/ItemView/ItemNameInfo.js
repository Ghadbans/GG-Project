import React, { useEffect, useState } from 'react'
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import { Add, Close } from '@mui/icons-material';
import { Outlet, NavLink, Link } from 'react-router-dom'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import db from '../../../dexieDb';
const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#30368a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
function ItemNameInfo({ onId }) {

  const [item, SetItems] = useState([])

  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/item';

  useEffect(() => {
    const fetchItem = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get(apiUrl)
          SetItems(res.data.data.reverse())
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.itemSchema.toArray();
        SetItems(offLineCustomer1.reverse())
      }
    }
    fetchItem()
  }, [])
  const [show, setShow] = useState(2);
  const handleShow = (e) => {
    setShow(e);
  }
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = item.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [item, onId])
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue)
  }
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const newArray = debouncedSearch !== '' ? item.filter((row) =>
    row.typeItem.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    (row.itemDescription && row.itemDescription.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    row.itemName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    (row.itemBrand && row.itemBrand.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    (row.itemManufacturer && row.itemManufacturer.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    (row.itemStore && row.itemStore.toLowerCase().includes(debouncedSearch.toLowerCase()))
  ) : item
  return (
    <div>
      {show === 1 ?
        (<div className='itemInfoContainer'>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
              <Checkbox />
              <Typography variant='h5'>All Item</Typography>
            </div>
            <div style={{ padding: '20px' }}>
              <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
            </div>
          </div>
          <div style={{ height: '512px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
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
              {item?.map((row, index) => (
                <Tab
                  key={index}
                  label={row.itemName.toUpperCase()}
                  component={Link}
                  to={`/ItemInformationVIew/${row._id}`}
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
        </div>)
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

          <div style={{ height: '558px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
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
                  label={row.itemName.toUpperCase()}
                  component={Link}
                  to={`/ItemInformationVIew/${row._id}`}
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

export default ItemNameInfo
