import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE2 from '../../../component/SidebarDashE2'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {MenuItem,Grid, IconButton,Paper,Box, TextField, FormControl, InputLabel, InputAdornment, Typography, styled,Select, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, OutlinedInput } from '@mui/material'
import {  useNavigate } from 'react-router-dom';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const BlackTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
function CompanyProfileForm() {
  return (
    <div>     <div className='sidemnuandcontent'>
    <SidebarDashE2/>
    <div className='header'>
     <div className='headername'>
      <Typography variant='h5'>Company Profile</Typography>
     </div>
     <div className='box1'>
         <input type='checkbox' id='checkBox1'></input>
     <div id='centercontent'>
       <input type="text" placeholder="Type here..."/>
       <label htmlFor='checkBox1' className='iconesize'>
       <SearchIcon className='searchIcon1'/>
       </label>
     </div>
     </div>
     <div className='rightcontent'>
       <NotificationsNoneIcon className='iconesize'/>
       <Typography> User Name</Typography>
       <AccountCircleIcon className='iconesize'/>
     </div>
     </div>
     </div>
     <br/>
     <div className='invoice'>
     <form>
     <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div>
        
      </div>
      <BlackTooltip title="Back" placement='left'> 
          <IconButton onClick={() => navigate(-1)}>
          <ArrowBack className='btnCustomer' />
          </IconButton>
        </BlackTooltip>
    </div> 
    <Grid container style={{alignItems:'center',padding:'160px'}} spacing={3} component={Paper}> 
    
    </Grid>
     </form>
     </div>
    </div>
  )
}

export default CompanyProfileForm