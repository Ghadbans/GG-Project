import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logOut } from '../features/auth/authSlice';
import { handleUserLogout } from '../utils/authUtils';
import { canAccessModule } from '../utils/permissionUtils';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
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
import ArrowBack from '@mui/icons-material/ArrowBack';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '../component/NetworkLogoutIcon';
import BranchSwitcher from './BranchSwitcher';
import NotificationVIewInfo from '../AdminView1/NotificationVIewInfo';
import MessageAdminView from '../AdminView1/MessageAdminView';
import SidebarDash from './SidebarDash';
import MobileDrawer from './MobileDrawer';

function getTitleFromPath(pathname) {
  if (pathname.includes('Customer')) return 'Customers';
  if (pathname.includes('Invoice')) return 'Invoices';
  if (pathname.includes('Maintenance')) return 'Maintenance';
  if (pathname.includes('Item')) return 'Items';
  if (pathname.includes('Estimate')) return 'Quotations';
  if (pathname.includes('Payment')) return 'Payments';
  if (pathname.includes('DailyExpense')) return 'Expenses';
  if (pathname.includes('Project')) return 'Projects';
  if (pathname.includes('Purchase')) return 'Purchases';
  if (pathname.includes('ShopPos') || pathname.includes('Pos')) return 'POS';
  if (pathname.includes('Block')) return 'Blocks';
  if (pathname.includes('Report')) return 'Reports';
  if (pathname.includes('Employee')) return 'Employees';
  if (pathname.includes('Fleet')) return 'Fleet';
  if (pathname.includes('Setting') || pathname.includes('Access')) return 'Settings';
  return 'Dashboard';
}

const mainListRoutes = [
  '/adminhome',
  '/customerviewadmin',
  '/itemviewadmin',
  '/invoiceviewadmin',
  '/dailyexpenses',
  '/estimateviewadmin',
  '/paymentview',
  '/projectviewadmin',
  '/maintenanceviewadmin',
  '/maintenanceorderadmin',
  '/technicianstoredisplay',
  '/employeeviewadminall',
  '/tewmviewadmin',
  '/supplieradminview'
];

function isMainListRoute(pathname) {
  const p = (pathname || '').toLowerCase().replace(/\/$/, '');
  return mainListRoutes.includes(p);
}

function MobileLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [grantAccess, setGrantAccess] = useState([]);

  useEffect(() => {
    const fetchAccess = async () => {
      if (!user?.data?.id) return;
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const userAccess = res?.data?.data?.find(row => row.userID === user?.data?.id);
        if (userAccess && Array.isArray(userAccess.modules)) {
          setGrantAccess(userAccess.modules);
        }
      } catch (err) {
        console.error('Error loading grantAccess in MobileLayout:', err);
      }
    };
    fetchAccess();
  }, [user]);

  const userName = user?.data?.userName || '';
  const userRole = user?.data?.role || '';

  const canAccess = (moduleName) => {
    return canAccessModule(user?.data, grantAccess, moduleName, 'read');
  };

  const touchStartXRef = React.useRef(null);
  const touchStartYRef = React.useRef(null);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      // If swipe started within 50px of the left screen edge
      if (clientX <= 50) {
        touchStartXRef.current = clientX;
        touchStartYRef.current = clientY;
      } else {
        touchStartXRef.current = null;
        touchStartYRef.current = null;
      }
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartXRef.current !== null && e.touches && e.touches.length === 1) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchStartXRef.current;
      const deltaY = currentY - touchStartYRef.current;

      // Swiped right by at least 45px with mostly horizontal gesture
      if (deltaX > 45 && Math.abs(deltaY) < 40) {
        setDrawerOpen(true);
        touchStartXRef.current = null;
        touchStartYRef.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const pathname = location.pathname;
  const isAuthPage = pathname === '/' || pathname === '/Loginadmin' || pathname === '/Loginemployee' || pathname === '';

  const handleLogout = () => {
    handleUserLogout(dispatch, navigate, user);
  };

  if (isAuthPage) {
    return <>{children}</>;
  }

  // Full-screen form / edit / create / detail sub-pages manage their own header & layout
  if (!isMainListRoute(pathname)) {
    return (
      <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#F8FAFC', overflowX: 'hidden', boxSizing: 'border-box' }}
      >
        {children}
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </Box>
    );
  }

  const pageTitle = getTitleFromPath(pathname);

  const candidateTabs = [
    { label: 'Dashboard', path: '/AdminHome', icon: <DashboardIcon fontSize="small" />, module: 'Dashboard', always: true },
    { label: 'Invoices', path: '/InvoiceViewAdmin', icon: <ReceiptIcon fontSize="small" />, module: 'Invoice' },
    { label: 'Customers', path: '/CustomerViewAdmin', icon: <PeopleIcon fontSize="small" />, module: 'Customer' },
    { label: 'Maintenance', path: '/MaintenanceViewAdmin', icon: <BuildIcon fontSize="small" />, module: 'Maintenance' },
    { label: 'Store', path: '/ItemViewAdmin', icon: <InventoryIcon fontSize="small" />, module: 'Item' },
    { label: 'Expenses', path: '/DailyExpenses', icon: <MonetizationOnIcon fontSize="small" />, module: 'Expenses' },
  ];

  const isSuperOrCEO = userRole === 'CEO' || userName === 'GG';
  const bottomTabs = candidateTabs
    .filter(t => t.always || isSuperOrCEO || canAccess(t.module))
    .slice(0, 4);

  return (
    <Box
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8FAFC',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* ── 1. NATIVE TOP BAR ── */}
      <AppBar
        className="MobileLayout-appBar"
        position="relative"
        elevation={0}
        sx={{
          flexShrink: 0,
          backgroundColor: '#30368a',
          zIndex: 1200,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          minHeight: '52px !important',
          height: 52
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, minHeight: '52px !important', height: 52 }}>
          {/* Left: Back (if not home) + Hamburger + Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, flex: 1, gap: 0.5 }}>
            {pathname.toLowerCase() !== '/adminhome' && (
              <IconButton color="inherit" size="small" onClick={() => navigate(-1)} sx={{ p: 0.5 }} title="Go Back">
                <ArrowBack sx={{ fontSize: 20 }} />
              </IconButton>
            )}
            <IconButton color="inherit" size="small" onClick={() => setDrawerOpen(true)} sx={{ p: 0.5 }} title="Menu">
              <MenuIcon sx={{ fontSize: 22 }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              noWrap
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                fontSize: '0.95rem',
                ml: 0.5,
                lineHeight: 1.2
              }}
            >
              {pageTitle}
            </Typography>
          </Box>

          {/* Right: Notifications, Mail, Logout */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, flexShrink: 0 }}>
            <NotificationVIewInfo />
            <MessageAdminView name={user?.data?.userName || ''} role={user?.data?.role || ''} />
            <IconButton color="inherit" size="small" onClick={handleLogout} title="Logout" sx={{ p: 0.5 }}>
              <LogoutIcon sx={{ color: 'white', fontSize: 19 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── 2. MAIN SCROLLABLE CONTENT ── */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          p: 1.5,
          pb: 2
        }}
      >
        {children}
      </Box>

      {/* ── 3. NATIVE BOTTOM NAVIGATION BAR ── */}
      <Box
        className="MobileLayout-bottomNav"
        sx={{
          flexShrink: 0,
          height: 56,
          minHeight: 56,
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
                minWidth: 0,
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
                noWrap
                sx={{
                  fontSize: '10px',
                  fontWeight: isActive ? 700 : 500,
                  mt: '2px',
                  color: isActive ? '#30368a' : '#64748B',
                  textAlign: 'center',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
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
            minWidth: 0,
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
            noWrap
            sx={{
              fontSize: '10px',
              fontWeight: drawerOpen ? 700 : 500,
              mt: '2px',
              color: drawerOpen ? '#30368a' : '#64748B',
              textAlign: 'center',
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Modules
          </Typography>
        </Box>
      </Box>

      {/* ── 4. ZOHO EXPANDABLE MODULE TREE DRAWER ── */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}

export default MobileLayout;
