import React from 'react'
import '../css/SidebarNew.scss'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { AccountBox, AllInclusive, Home, InventoryOutlined, SupervisedUserCircle } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material';
function SideMaintenance2() {
  return (
    <>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Item" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <ContentPasteGoIcon />
        </ListItemIcon>
        <ListItemText primary="Item Out" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Item Return" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }} >
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Item Purchase" />
      </ListItemButton>
      <ListItemButton sx={{ color: 'gray' }} >
        <ListItemIcon sx={{ color: 'gray' }}>
          <InventoryOutlined />
        </ListItemIcon>
        <ListItemText primary="Purchase Order" />
      </ListItemButton>
      <Outlet></Outlet>
    </>
  )
}

export default SideMaintenance2
