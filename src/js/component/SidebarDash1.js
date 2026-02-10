import React from 'react'
import '../css/SidebarNew.scss'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MovingIcon from '@mui/icons-material/Moving';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Explicit, ShoppingBagOutlined } from '@mui/icons-material';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function SidebarDash1() {
  return (
    <>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }}>
        <ListItemIcon sx={{ color: 'gray' }} >
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Customer" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }}  >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Store" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }}>
        <ListItemIcon sx={{ color: 'gray' }} >
          <RequestQuoteIcon />
        </ListItemIcon>
        <ListItemText primary="Estimation" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Invoice" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ShoppingBagOutlined />
        </ListItemIcon>
        <ListItemText primary="Daily Expenses" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }}  >
        <ListItemIcon sx={{ color: 'gray' }} >
          <RoomPreferencesIcon />
        </ListItemIcon>
        <ListItemText primary="Project" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Purchases Request" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }}>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="Maintenance" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <MoreVertIcon />
        </ListItemIcon>
        <ListItemText primary="More" />
      </ListItemButton>
      <Outlet></Outlet>
    </>
  )
}

export default SidebarDash1
