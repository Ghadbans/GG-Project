import React, { useState, useEffect } from 'react'
import '../css/SidebarNew.scss'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { AccountBox, AllInclusive, AssignmentInd, CurrencyExchange, Home, SupervisedUserCircle } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@mui/material';
import SidebarDash from './SidebarDash';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Close from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import SideBlockFactory from './SideBlockFactory';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';


function SidebarDashE2({ onView }) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }

  const [view2, setView] = useState(0);
  const [show1, setShow1] = useState(() => {
    // If this sidebar is being rendered explicitly as a submenu (onView === 2), force it to state 1
    // to prevent an infinite rendering loop with the parent SidebarDash.
    if (onView === 2) return 1;
    const saved = localStorage.getItem('activeSidebarMenuE2');
    return saved ? parseInt(saved) : 1;
  });
  const handleShow = (e) => {
    setShow1(e);
    setView(e);
    localStorage.setItem('activeSidebarMenuE2', e);
  }
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    if (user?.data?.id) {
      const fetchNumber = async () => {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
          const userAccess = res.data?.data?.filter((row) => row.userID === user.data.id);
          if (userAccess.length > 0) {
            userAccess.map((row) => setGrantAccess(row.modules));
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchNumber()
    }
  }, [user])

  if (!user || !user.data) {
    return null;
  }


  const RateInfo = grantAccess.filter((row) => row.moduleName === "Rate" && row.access.readM === true);
  const EmployeeInfo = grantAccess.filter((row) => row.moduleName === "Employee" && row.access.readM === true);
  const PRollInfo = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.readM === true);
  // Factory uses same permission level as Payroll/Employee for now
  const FactoryInfo = PRollInfo;

  return (
    <>
      {show1 === 1 ?
        <div>
          {
            parseInt(onView) === 2 ? null : (
              <>
                <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(2)}>
                  <ListItemIcon sx={{ color: 'gray' }} >
                    <MoreVertIcon />
                  </ListItemIcon>
                  <ListItemText primary="Main" />
                </ListItemButton>
              </>

            )
          }
          <ListItemButton disabled={RateInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/RateViewAdmin" style={isActive('/RateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/RateViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <CurrencyExchange />
            </ListItemIcon>
            <ListItemText primary="Rate" />
          </ListItemButton>
          <ListItemButton disabled={EmployeeInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/TewmViewAdmin" style={isActive('/TewmViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/TewmViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Employee" />
          </ListItemButton>
          <ListItemButton disabled={PRollInfo.length === 0 && user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/PayRollViewAdmin" style={isActive('/PayRollViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PayRollViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="PayRoll" />
          </ListItemButton>
          <ListItemButton disabled={user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/UserAccount" style={isActive('/UserAccount') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/UserAccount') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="User Account" />
          </ListItemButton>
          <ListItemButton disabled={user.data.userName !== 'GG'} sx={{ color: 'gray' }} component={NavLink} to="/RolePermission" style={isActive('/RolePermission') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/RolePermission') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Grant Access" />
          </ListItemButton>
          <ListItemButton sx={{ color: 'gray' }} component={NavLink} to="/SettingsViewAdmin" style={isActive('/SettingsViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/SettingsViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItemButton>
          <ListItemButton disabled={user.data.role !== 'CEO'} sx={{ color: 'gray' }} component={NavLink} to="/CompanyProfile" style={isActive('/CompanyProfile') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/CompanyProfile') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Company Profile" />
          </ListItemButton>
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
          <SidebarDash onView2={view2} />
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
            Block Factory Menu
          </ListSubheader>
          <SideBlockFactory />
        </div>
        : null}
    </>

  )
}

export default SidebarDashE2
