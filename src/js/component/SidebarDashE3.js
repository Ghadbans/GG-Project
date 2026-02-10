import React from 'react'
import '../css/SidebarNew.scss'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { AccountBox, AllInclusive, Home, AssignmentInd, SupervisedUserCircle, CurrencyExchange } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import { ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material';
function SidebarDashE3() {
  return (
    <>
      <ListItemButton sx={{ color: 'gray' }}>
        <ListItemIcon sx={{ color: 'gray' }}>
          <CurrencyExchange />
        </ListItemIcon>
        <ListItemText primary="Rate" />
      </ListItemButton>

      <ListItemButton sx={{ color: 'gray' }}>
        <ListItemIcon sx={{ color: 'gray' }} >
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Employee" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="PayRoll" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }}>
        <ListItemIcon sx={{ color: 'gray' }}>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="User Account" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }}>
          <AssignmentInd />
        </ListItemIcon>
        <ListItemText primary="Grant Access" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      {/* <li className='Listrowdash' >
                <NavLink to="/RolePermission"  style={{ textDecoration:'none',
                   display: 'flex', width: '100%'}}>
                    <div style={{height: '45px', flexWrap: 'nowrap', display: 'flex',
                   flex: 'wrap',color: 'white', alignItems:'center', marginLeft:'20px', gap:'20px'}}>
                     <div id='icon1'>
                     <SupervisedUserCircle/>
                        </div> 
                        <div id='titlelist'> RolePermission</div>
                        </div>
                </NavLink>
  </li>*/}
      <Outlet></Outlet>
    </>
  )
}

export default SidebarDashE3
