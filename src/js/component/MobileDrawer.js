import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logOut } from '../features/auth/authSlice';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BadgeIcon from '@mui/icons-material/Badge';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from './NetworkLogoutIcon';
import pkg from '../../../package.json';

function MobileDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [salesOpen, setSalesOpen] = useState(true);
  const [maintenanceOpen, setMaintenanceOpen] = useState(true);

  const handleNav = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
    onClose();
  };

  const userName = user?.data?.userName || 'Global Gate User';
  const userRole = user?.data?.role || 'Staff';

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 290,
          maxWidth: '85vw',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 0 24px rgba(0,0,0,0.15)'
        }
      }}
    >
      {/* ── PROFILE HEADER ── */}
      <Box
        sx={{
          backgroundColor: '#30368a',
          color: '#ffffff',
          p: 2.5,
          pt: 3,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ position: 'absolute', top: 12, right: 12, color: 'rgba(255,255,255,0.8)' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <Avatar
            sx={{
              bgcolor: '#ffffff',
              color: '#30368a',
              fontWeight: 800,
              width: 46,
              height: 46,
              fontSize: '1.2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2, color: '#ffffff' }} noWrap>
              {userName}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }} noWrap>
              Global Gate SARL • {userRole}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── STRICT 12-MODULE NAVIGATION TREE ── */}
      <Box sx={{ flex: 1, overflowY: 'auto', py: 1 }}>
        <List component="nav" dense disablePadding>
          {/* 1. Dashboard */}
          <ListItemButton onClick={() => handleNav('/AdminHome')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#30368a' }}>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
          </ListItemButton>

          {/* 2. Customers */}
          <ListItemButton onClick={() => handleNav('/CustomerViewAdmin')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <PeopleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Customers" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          {/* 3. Items / Store */}
          <ListItemButton onClick={() => handleNav('/ItemViewAdmin')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <InventoryIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Items / Store" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          {/* 4. Sales (Group: Quotations & Invoices) */}
          <ListItemButton onClick={() => setSalesOpen(!salesOpen)} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <ShoppingCartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sales" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
            {salesOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
          </ListItemButton>
          <Collapse in={salesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense>
              <ListItemButton sx={{ pl: 6, py: 0.7 }} onClick={() => handleNav('/EstimateViewAdmin')}>
                <ListItemIcon sx={{ minWidth: 30, color: '#94a3b8' }}>
                  <RequestQuoteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Quotations" primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6, py: 0.7 }} onClick={() => handleNav('/InvoiceViewAdmin')}>
                <ListItemIcon sx={{ minWidth: 30, color: '#94a3b8' }}>
                  <ReceiptIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Invoices" primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
            </List>
          </Collapse>

          {/* 5. Payments */}
          <ListItemButton onClick={() => handleNav('/PaymentView')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <MonetizationOnIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Payments" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          {/* 6. Daily Expenses */}
          <ListItemButton onClick={() => handleNav('/DailyExpenses')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <MonetizationOnIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Daily Expenses" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          {/* 7. Projects */}
          <ListItemButton onClick={() => handleNav('/ProjectViewAdmin')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <AccountTreeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Projects" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          <Divider sx={{ my: 0.5 }} />

          {/* 8. Maintenance (Group: Job Cards, Maintenance Orders, Technician Store) */}
          <ListItemButton onClick={() => setMaintenanceOpen(!maintenanceOpen)} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <EngineeringIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Maintenance" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
            {maintenanceOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
          </ListItemButton>
          <Collapse in={maintenanceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense>
              <ListItemButton sx={{ pl: 6, py: 0.7 }} onClick={() => handleNav('/MaintenanceViewAdmin')}>
                <ListItemText primary="Job Cards & Maintenance" primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6, py: 0.7 }} onClick={() => handleNav('/MaintenanceOrderAdmin')}>
                <ListItemText primary="Maintenance Orders" primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6, py: 0.7 }} onClick={() => handleNav('/TechnicianStoreDisplay')}>
                <ListItemIcon sx={{ minWidth: 30, color: '#94a3b8' }}>
                  <StorefrontIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Technician Store" primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
            </List>
          </Collapse>

          {/* 9. Employees */}
          <ListItemButton onClick={() => handleNav('/EmployeeViewAdminAll')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <BadgeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Employees" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>

          {/* 10. Suppliers */}
          <ListItemButton onClick={() => handleNav('/SupplierAdminView')} sx={{ py: 1, px: 2 }}>
            <ListItemIcon sx={{ minWidth: 38, color: '#64748b' }}>
              <BusinessIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Suppliers" primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItemButton>
        </List>
      </Box>

      {/* ── BOTTOM LOGOUT & VERSION ── */}
      <Box sx={{ p: 1.5, borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ListItemButton onClick={handleLogout} sx={{ borderRadius: 2, py: 0.5, px: 1 }}>
          <ListItemIcon sx={{ minWidth: 32, color: '#ef4444' }}>
            <LogoutIcon sx={{ fontSize: 18 }} />
          </ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{ color: '#ef4444', fontWeight: 600, fontSize: '0.85rem' }} />
        </ListItemButton>
        <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.7rem', pr: 1 }}>
          v{pkg.version}
        </Typography>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer;
