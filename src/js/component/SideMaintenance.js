import React, { useState, useEffect } from 'react'
import '../css/SidebarNew.scss'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { AccountBox, AllInclusive, ContactEmergencyRounded, Home, InventoryOutlined, Shop2Outlined, SupervisedUserCircle } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SidebarDash from './SidebarDash';
import Close from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import axios from 'axios';
import db from '../dexieDb';

import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@mui/material';
function SideMaintenance({ onView }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  }
  const [view2, setView] = useState(0);
  const [show1, setShow1] = useState(1);
  const handleShow = (e) => {
    setShow1(e);
    setView(e);
  }
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role, id: resLocalInfo._id }));
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules));
      }
    }
    fetchNumber()
  }, [user])


  const ItemInfo = grantAccess.filter((row) => row.moduleName === "Item" && row.access.readM === true);
  const ItemOInfo = grantAccess.filter((row) => row.moduleName === "Item-Out" && row.access.readM === true);
  const ReturnInfo = grantAccess.filter((row) => row.moduleName === "Item-Return" && row.access.readM === true);
  const IPurchaseInfo = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.readM === true);

  return (
    <>
      {show1 === 1 ?
        <div>
          {
            parseInt(onView) === 3 ? null : (
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(2)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <MoreVertIcon />
                </ListItemIcon>
                <ListItemText primary="Main" />
              </ListItemButton>
            )
          }
          <ListItemButton disabled={ItemInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/SupplierAdminView" style={isActive('/SupplierAdminView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/SupplierAdminView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ContactEmergencyRounded />
            </ListItemIcon>
            <ListItemText primary="Supplier" />
          </ListItemButton>
          <ListItemButton disabled={ItemInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/ItemViewAdmin" style={isActive('/ItemViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ItemViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Item" />
          </ListItemButton>
          <ListItemButton disabled={ItemOInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/ItemOutViewAdmin" style={isActive('/ItemOutViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ItemOutViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ContentPasteGoIcon />
            </ListItemIcon>
            <ListItemText primary="Item Out" />
          </ListItemButton>
          <ListItemButton disabled={ReturnInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/ItemReturnAdminView" style={isActive('/ItemReturnAdminView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ItemReturnAdminView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Item Return" />
          </ListItemButton>
          <ListItemButton disabled={IPurchaseInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/ItemPurchaseViewAdmin" style={isActive('/ItemPurchaseViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ItemPurchaseViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Item Purchase" />
          </ListItemButton>
          <ListItemButton sx={{ color: 'gray' }} component={NavLink} to="/PurchaseOrderViewAdmin" style={isActive('/PurchaseOrderViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PurchaseOrderViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <InventoryOutlined />
            </ListItemIcon>
            <ListItemText primary="Purchase Order" />
          </ListItemButton>
          <Outlet></Outlet>
        </div>
        : null}
      {show1 === 2 ?
        <div>
          <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
            <ListItemIcon sx={{ color: 'gray' }} >
              <Close />
            </ListItemIcon>
            <ListItemText primary="Close" />
          </ListItemButton>
          <Divider />
          <ListSubheader component="div" inset>
            Main Menu
          </ListSubheader>
          <SidebarDash onView3={view2} />
        </div>
        : null}
    </>
  )
}

export default SideMaintenance
