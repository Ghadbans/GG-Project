import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SidebarDash from './SidebarDash';
import Close from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

function SideMaintenanceMenu({ onView }) {
  const location = useLocation();
  const navigate = useNavigate();

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
    if (!user?.data?.id) fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if(user?.data?.id) {
        try {
          const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
          res.data?.data?.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchNumber()
  }, [user])

  const MaintenanceInfo = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.readM === true);
  const MaintenanceOrderInfo = grantAccess.filter((row) => row.moduleName === "Maintenance-Order" && row.access.readM === true);

  return (
    <>
      {show1 === 1 ?
        <div>
          {
            parseInt(onView) === 6 ? null : (
              <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(2)}>
                <ListItemIcon sx={{ color: 'gray' }} >
                  <MoreVertIcon />
                </ListItemIcon>
                <ListItemText primary="Main" />
              </ListItemButton>
            )
          }
          <ListItemButton disabled={user?.data?.userName !== 'GG' && MaintenanceInfo.length === 0} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceViewAdmin" style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary="Maintenance" />
          </ListItemButton>
          
          <ListItemButton disabled={user?.data?.userName !== 'GG' && MaintenanceOrderInfo.length === 0} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceOrderAdmin" style={isActive('/MaintenanceOrderAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceOrderAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary="Maintenance Order" />
          </ListItemButton>
          
          <ListItemButton disabled={user?.data?.userName !== 'GG' && MaintenanceOrderInfo.length === 0} sx={{ color: 'gray' }} component={NavLink} to="/TechnicianStoreCatalog" style={isActive('/TechnicianStoreCatalog') ? { backgroundColor: '#30368a', color: 'white' } : null}>
            <ListItemIcon sx={{ color: 'gray' }} style={isActive('/TechnicianStoreCatalog') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary="Technician Store" />
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
          <SidebarDash onView6={view2} />
        </div>
        : null}
    </>
  )
}

export default SideMaintenanceMenu;
