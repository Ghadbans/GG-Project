import React, { useState, useEffect } from 'react'
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
import db from '../dexieDb';
import SideShop from './SideShop';

function SidebarDash({ onView2, onView3, onView4 }) {

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }
  const [show1, setShow1] = useState(1);
  const [view, setView] = useState(0);
  const handleShow = (e) => {
    setShow1(e);
    setView(e)
  }
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/grantAccess');
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


  const customerInfo = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.readM === true);
  const estimationInfo = grantAccess.filter((row) => row.moduleName === "Estimate" && row.access.readM === true);
  const InvoiceInfo = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.readM === true);
  const PaymentInfo = grantAccess.filter((row) => row.moduleName === "Payment" && row.access.readM === true);
  const DailyEInfo = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.readM === true);
  const ProjectInfo = grantAccess.filter((row) => row.moduleName === "Project" && row.access.readM === true);
  const PurchaseInfo = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.readM === true);
  const MaintenanceInfo = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.readM === true);
  return (
    <>
      {show1 === 1 ?
        <div>
          <ListItemButton sx={{ color: 'gray' }} component={NavLink} to="/AdminHome" style={isActive('/AdminHome') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/AdminHome') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton disabled={customerInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/CustomerViewAdmin" style={isActive('/CustomerViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
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
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(4)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="POS" />
              </ListItemButton>
            )}
          <ListItemButton disabled={estimationInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/EstimateViewAdmin" style={isActive('/EstimateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/EstimateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary="Estimation" />
          </ListItemButton>
          <ListItemButton disabled={InvoiceInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/InvoiceViewAdmin" style={isActive('/InvoiceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/InvoiceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice" />
          </ListItemButton>
          <ListItemButton disabled={PaymentInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/PaymentView" style={isActive('/PaymentView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PaymentView') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItemButton>
          <ListItemButton disabled={DailyEInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/DailyExpenses" style={isActive('/DailyExpenses') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/DailyExpenses') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ShoppingBagOutlined />
            </ListItemIcon>
            <ListItemText primary="Daily Expenses" />
          </ListItemButton>
          <ListItemButton disabled={ProjectInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/ProjectViewAdmin" style={isActive('/ProjectViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/ProjectViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <RoomPreferencesIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
          </ListItemButton>
          <ListItemButton disabled={PurchaseInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/PurchasesViewAdmin" style={isActive('/PurchasesViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PurchasesViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Purchases Request" />
          </ListItemButton>
          <ListItemButton disabled={MaintenanceInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceViewAdmin" style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary="Maintenance" />
          </ListItemButton>

          {/*<ListItemButton sx={{color:'gray'}} component={NavLink} to="/ReportsViewAdmin" style={isActive('/ReportsViewAdmin')?{backgroundColor:'#30368a',color:'white'}:null} >
    <ListItemIcon sx={{color:'gray'}} style={isActive('/ReportsViewAdmin')?{backgroundColor:'#30368a',color:'white'}:null}>
    <MovingIcon/>
    </ListItemIcon>
    <ListItemText primary="Reports"/>
  </ListItemButton>

  <ListItemButton sx={{color:'gray'}} component={NavLink} to="/PointOfSale" style={isActive('/PointOfSale')?{backgroundColor:'#30368a',color:'white'}:null}>
    <ListItemIcon sx={{color:'gray'}} style={isActive('/PointOfSale')?{backgroundColor:'#30368a',color:'white'}:null}>
    <Storefront/>
    </ListItemIcon>
    <ListItemText primary="POS"/>
  </ListItemButton>*/}

          {
            parseInt(onView2) === 2 ? null : (
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(2)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <MoreVertIcon />
                </ListItemIcon>
                <ListItemText primary="More" />
              </ListItemButton>)
          }
          <Outlet></Outlet>
        </div>
        : null
      }
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
            More Menu
          </ListSubheader>
          <SidebarDashE2 onView={view} />
        </div>
        : null}
      {show1 === 3 ?
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
      {show1 === 4 ?
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
    </>
  )
}

export default SidebarDash
