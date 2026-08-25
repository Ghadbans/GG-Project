import React, { useState, useEffect } from 'react'
import {  toast } from 'react-toastify';
import '../css/SidebarNew.scss'
import { Outlet, NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
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
import { BackHandOutlined, Explicit, ShoppingBagOutlined, Storefront } from '@mui/icons-material';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@mui/material';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import StoreIcon from '@mui/icons-material/Store';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarDashE2 from './SidebarDashE2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Close from '@mui/icons-material/Close';
import SideMaintenance from './SideMaintenance';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
import pkg from '../../../package.json';

import SideShop from './SideShop';
import SideBlockFactory from './SideBlockFactory';
import CategoryIcon from '@mui/icons-material/Category';

function SidebarDash({ onView2, onView3, onView4 }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }

  const handleNavClick = () => {
    localStorage.setItem('activeSidebarMenu', 1);
    localStorage.setItem('activeSidebarMenuE2', 1);
  };

  const [show1, setShow1] = useState(() => {
    // If this primary sidebar is rendered inside a submenu (e.g. onView2 === 2 from More Menu)
    // we force it to explicitly display the main menu (state 1) so it doesn't read the
    // the saved submenu state (2,3,4) from localStorage and create an infinite loop.
    if (onView2 === 2 || onView3 === 2 || onView4 === 2) return 1;

    const saved = localStorage.getItem('activeSidebarMenu');
    return saved ? parseInt(saved) : 1;
  });
  const [view, setView] = useState(0);
  const handleShow = (e) => {
    setShow1(e);
    setView(e);
    localStorage.setItem('activeSidebarMenu', e);
  }
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    // Optimization: If we already have the user in Redux, don't re-fetch
    if (user.data && user.data.id) {
      return;
    }

    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
            setLoadingAccess(false);
          toast.error('Connection error. Please check your network.');
        }
      } else if (!user.data || !user.data.id) {
        // Only navigate home if we don't have user data at all
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch, user.data, navigate]);

  const [grantAccess, setGrantAccess] = useState([]);
  const [loadingAccess, setLoadingAccess] = useState(true);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Connection error. Please check your network.');
      } finally {
        setLoadingAccess(false);
      }
    }
    fetchNumber()
  }, [user])


  const customerInfo = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.readM === true);
  const estimationInfo = grantAccess.filter((row) => row.moduleName === "Estimate" && row.access.readM === true);
  const InvoiceInfo = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.readM === true);
  const PaymentInfo = grantAccess.filter((row) => row.moduleName === "Payment" && row.access.readM === true);
  const DailyEInfo = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.readM === true);
  const ProjectInfo = grantAccess.filter((row) => row.moduleName === "Project" && row.access.readM === true);
  const PurchaseInfo = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.readM === true);
  const MaintenanceInfo = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.readM === true);
  const ReportsInfo = grantAccess.filter((row) => row.moduleName === "Reports" && row.access.readM === true);
  const PRollInfo = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.readM === true);
  const BlockFactoryInfo = grantAccess.filter((row) => row.moduleName === "Block-Factory" && row.access.readM === true);
  const POSInfo = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.readM === true);
  return (
    <>
      {show1 === 1 ?
        <div>
          <ListItemButton sx={{ color: 'gray' }} component={NavLink} to="/AdminHome" onClick={handleNavClick} style={isActive('/AdminHome') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/AdminHome') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && customerInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/CustomerViewAdmin" onClick={handleNavClick} style={isActive('/CustomerViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/CustomerViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItemButton>
          {
            parseInt(onView3) === 2 ? null : (
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(3)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Store" />
              </ListItemButton>
            )}
          {
            parseInt(onView4) === 2 ? null : (
              <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && POSInfo.length === 0)} sx={{ color: 'gray' }} onClick={() => handleShow(4)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="POS" />
              </ListItemButton>
            )}
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && BlockFactoryInfo.length === 0)} sx={{ color: 'gray' }} onClick={() => handleShow(5)}>
            <ListItemIcon sx={{ color: 'gray' }}>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Block Factory" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && estimationInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/EstimateViewAdmin" onClick={handleNavClick} style={isActive('/EstimateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/EstimateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary="Quotation" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && InvoiceInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/InvoiceViewAdmin" onClick={handleNavClick} style={isActive('/InvoiceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/InvoiceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && PaymentInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/PaymentView" onClick={handleNavClick} style={isActive('/PaymentView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PaymentView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && DailyEInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/DailyExpenses" onClick={handleNavClick} style={isActive('/DailyExpenses') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/DailyExpenses') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ShoppingBagOutlined />
            </ListItemIcon>
            <ListItemText primary="Daily Expenses" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && ProjectInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/ProjectViewAdmin" onClick={handleNavClick} style={isActive('/ProjectViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ProjectViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <RoomPreferencesIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && PurchaseInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/PurchasesViewAdmin" onClick={handleNavClick} style={isActive('/PurchasesViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PurchasesViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Purchases Request" />
          </ListItemButton>
          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && MaintenanceInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceViewAdmin" onClick={handleNavClick} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary="Maintenance" />
          </ListItemButton>



          <ListItemButton disabled={loadingAccess || (user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && ReportsInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/ReportsViewAdmin" onClick={handleNavClick} style={isActive('/ReportsViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null} >
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ReportsViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <MovingIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>



          {
            parseInt(onView2) === 2 ? null : (
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(2)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <MoreVertIcon />
                </ListItemIcon>
                <ListItemText primary="More" />
              </ListItemButton>)
          }
          <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: '0.7rem', color: 'lightgray' }}>
            Version: {pkg.version}
          </div>
        </div >
        : null
      }
      {
        show1 === 2 ?
          <div>
            <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <Close />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
            <Divider />
            <ListSubheader component="div" inset>
              More Menu
            </ListSubheader>
            <SidebarDashE2 onView={view} />
          </div>
          : null
      }
      {
        show1 === 3 ?
          <div>
            <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <Close />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
            <Divider />
            <ListSubheader component="div" inset>
              Item Menu
            </ListSubheader>
            <SideMaintenance onView={view} />
          </div>
          : null
      }
      {
        show1 === 4 ?
          <div>
            <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <Close />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
            <Divider />
            <ListSubheader component="div" inset>
              POS Menu
            </ListSubheader>
            <SideShop onView={view} />
          </div>
          : null
      }
      {
        show1 === 5 ?
          <div>
            <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <Close />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
            <Divider />
            <ListSubheader component="div" inset>
              Block Factory Menu
            </ListSubheader>
            <SideBlockFactory grantAccess={grantAccess} user={user} />
          </div>
          : null
      }

    </>
  )
}

export default SidebarDash
