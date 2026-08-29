import React, { useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logOut } from '../features/auth/authSlice';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Badge,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import AppsIcon from '@mui/icons-material/Apps';
import LogoutIcon from '../component/NetworkLogoutIcon';
import BranchSwitcher from './BranchSwitcher';
import NotificationVIewInfo from '../AdminView1/NotificationVIewInfo';
import MessageAdminView from '../AdminView1/MessageAdminView';
import SidebarDash from './SidebarDash';

function getTitleFromPath(pathname) {
  if (pathname.includes('Customer')) return 'Customers';
  if (pathname.includes('Invoice')) return 'Invoices';
  if (pathname.includes('Maintenance')) return 'Maintenance';
  if (pathname.includes('Item')) return 'Items & Store';
  if (pathname.includes('Estimate')) return 'Quotations';
  if (pathname.includes('Payment')) return 'Payments';
  if (pathname.includes('DailyExpense')) return 'Daily Expenses';
  if (pathname.includes('Project')) return 'Projects';
  if (pathname.includes('Purchase')) return 'Purchases';
  if (pathname.includes('ShopPos') || pathname.includes('Pos')) return 'POS';
  if (pathname.includes('Block')) return 'Block Factory';
  if (pathname.includes('Report')) return 'Reports';
  if (pathname.includes('Employee')) return 'Employees';
  if (pathname.includes('Fleet')) return 'Fleet';
  if (pathname.includes('Setting') || pathname.includes('Access')) return 'Settings';
  return 'Dashboard';
}

function MobileLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pathname = location.pathname;
  const isAuthPage = pathname === '/' || pathname === '/Loginadmin' || pathname === '/Loginemployee' || pathname === '';

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  if (isAuthPage) {
    return <>{children}</>;
  }

  const pageTitle = getTitleFromPath(pathname);

  const bottomTabs = [
    { label: 'Dashboard', path: '/AdminHome', icon: <DashboardIcon fontSize="small" /> },
    { label: 'Invoices', path: '/InvoiceViewAdmin', icon: <ReceiptIcon fontSize="small" /> },
    { label: 'Customers', path: '/CustomerViewAdmin', icon: <PeopleIcon fontSize="small" /> },
    { label: 'Maintenance', path: '/MaintenanceViewAdmin', icon: <BuildIcon fontSize="small" /> },
  ];

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#F8FAFC', position: 'relative', overflowX: 'hidden' }}>
      {/* ── 1. NATIVE TOP BAR (Fixed 52px) ── */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          height: 52,
          backgroundColor: '#30368a',
          zIndex: 1200,
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, minHeight: '52px !important', height: 52 }}>
          {/* Left: Hamburger + Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, flex: 1, gap: 0.5 }}>
            <IconButton color="inherit" size="small" onClick={() => setDrawerOpen(true)} sx={{ p: 0.5 }}>
              <MenuIcon sx={{ fontSize: 24 }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxWidth: 140,
                fontSize: '1rem',
                ml: 0.5
              }}
            >
              {pageTitle}
            </Typography>
          </Box>

          {/* Right: Branch Switcher, Notifications, Mail, Logout */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
            <NotificationVIewInfo />
            <MessageAdminView name={user?.data?.userName || ''} role={user?.data?.role || ''} />
            <IconButton color="inherit" size="small" onClick={handleLogout} title="Logout" sx={{ p: 0.5 }}>
              <LogoutIcon sx={{ color: 'white', fontSize: 20 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── 2. MAIN SCROLLABLE CONTENT ── */}
      <Box
        component="main"
        sx={{
          width: '100vw',
          minHeight: '100vh',
          boxSizing: 'border-box',
          pt: '60px',
          pb: '80px',
          px: 1.5,
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        {children}
      </Box>

      {/* ── 3. NATIVE BOTTOM NAVIGATION BAR (Fixed 60px) ── */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          zIndex: 1100,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.06)',
          px: 0.5,
          boxSizing: 'border-box'
        }}
      >
        {bottomTabs.map((tab) => {
          const isActive = pathname.startsWith(tab.path);
          return (
            <Box
              key={tab.path}
              onClick={() => navigate(tab.path)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                cursor: 'pointer',
                color: isActive ? '#30368a' : '#64748B',
                py: 0.5,
                transition: 'color 0.15s',
                '&:active': { transform: 'scale(0.95)' }
              }}
            >
              {tab.icon}
              <Typography
                variant="caption"
                sx={{
                  fontSize: '11px',
                  fontWeight: isActive ? 700 : 500,
                  mt: '2px',
                  color: isActive ? '#30368a' : '#64748B'
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          );
        })}

        {/* All Modules Tab */}
        <Box
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            cursor: 'pointer',
            color: drawerOpen ? '#30368a' : '#64748B',
            py: 0.5,
            transition: 'color 0.15s',
            '&:active': { transform: 'scale(0.95)' }
          }}
        >
          <AppsIcon fontSize="small" />
          <Typography
            variant="caption"
            sx={{
              fontSize: '11px',
              fontWeight: drawerOpen ? 700 : 500,
              mt: '2px',
              color: drawerOpen ? '#30368a' : '#64748B'
            }}
          >
            Modules
          </Typography>
        </Box>
      </Box>

      {/* ── 4. ALL MODULES BOTTOM SHEET DRAWER ── */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            maxHeight: '85vh',
            height: '85vh',
            backgroundColor: '#ffffff',
            pb: 4,
            boxShadow: '0 -4px 24px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#30368a', fontSize: '1.1rem' }}>
            All System Modules
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ overflowY: 'auto', p: 1 }} onClick={() => setDrawerOpen(false)}>
          <SidebarDash />
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobileLayout;
