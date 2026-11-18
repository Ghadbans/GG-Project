import React, { useEffect, useRef, useState } from 'react';
import '../../view.css';
import '../Chartview.css';
import SideMaintenance from '../../../component/SideMaintenance';
import {
  IconButton,
  Paper,
  Typography,
  styled,
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Badge
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowBack from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ENDPOINT_URL } from '../../../apiConfig';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Loader from '../../../component/Loader';
import { renderStatusBadge } from '../../../utils/formatUtils';
import DocumentAttachmentsModal from '../../../component/DocumentAttachmentsModal';
import DeliveryNotePrintTemplate from './DeliveryNotePrintTemplate';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

function DeliveryNoteViewInformation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [sideBar, setSideBar] = useState(true);
  const toggleDrawer = () => setSideBar(!sideBar);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`);
          dispatch(
            setUser({
              userName: res.data.data.employeeName,
              role: res.data.data.role,
              id: res.data.data._id
            })
          );
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  };

  const [allNotes, setAllNotes] = useState([]);
  const [deliveryNote, setDeliveryNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAttachments, setOpenAttachments] = useState(false);
  const [attachmentCount, setAttachmentCount] = useState(0);

  const fetchData = async () => {
    try {
      const [resAll, resOne, resAtt] = await Promise.all([
        axios.get(`${ENDPOINT_URL}/deliveryNote`),
        axios.get(`${ENDPOINT_URL}/get-deliveryNote/${id}`),
        axios.get(`${ENDPOINT_URL}/attachments/${id}`).catch(() => ({ data: { count: 0 } }))
      ]);
      setAllNotes(resAll.data?.data || []);
      setDeliveryNote(resOne.data?.data || null);
      setAttachmentCount(
        resAtt.data?.count || (resAtt.data?.data || []).length || 0
      );
      setLoading(false);
    } catch (error) {
      console.error('Error loading delivery note:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: deliveryNote
      ? `${deliveryNote.deliveryName || 'DN'} - ${deliveryNote.customerName?.customerName || ''}`
      : 'DeliveryNote',
    pageStyle: `@page { size: A4 portrait; margin: 10mm; } @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`
  });

  const handleMarkDelivered = async () => {
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-deliveryNote/${id}`, {
        status: 'Delivered'
      });
      if (res.data?.data) {
        setDeliveryNote(res.data.data);
        setAllNotes((prev) => prev.map((n) => (n._id === id ? res.data.data : n)));
        toast.success('Delivery Note marked as Delivered.');
      }
    } catch (err) {
      toast.error('Failed to update status.');
    }
  };

  return (
    <div className="Homeemployee">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate('/DeliveryNoteViewAdmin')} sx={{ mr: 1 }}>
              <ArrowBack />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Delivery Note Information
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <SideMaintenance />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#f5f5f5',
            flexGrow: 1,
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Toolbar />
          {loading ? (
            <Box sx={{ mt: 12, textAlign: 'center' }}>
              <Loader />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, p: 2, flex: 1, overflow: 'hidden' }}>
              {/* Left Master List */}
              <Paper
                sx={{
                  width: 270,
                  minWidth: 240,
                  height: 'calc(100vh - 100px)',
                  overflowY: 'auto',
                  display: { xs: 'none', md: 'block' }
                }}
              >
                <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#202a5a' }}>
                  All Delivery Notes ({allNotes.length})
                </Box>
                <List dense>
                  {allNotes.map((row) => (
                    <ListItemButton
                      key={row._id}
                      component={NavLink}
                      to={`/DeliveryNoteViewInformation/${row._id}`}
                      selected={row._id === id}
                      sx={{
                        borderBottom: '1px solid #f1f5f9',
                        '&.Mui-selected': { backgroundColor: '#e0e7ff' }
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography sx={{ fontWeight: 700, fontSize: '13px', color: '#202a5a' }}>
                            {row.deliveryName ||
                              `DN-${String(row.deliveryNumber || 0).padStart(6, '0')}`}
                          </Typography>
                        }
                        secondary={
                          <Typography sx={{ fontSize: '11px', color: '#475569' }} noWrap>
                            {row.customerName?.customerName || row.reference?.referenceNumber || ''}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>

              {/* Right Printable Detail Panel */}
              <Paper
                sx={{
                  flex: 1,
                  height: 'calc(100vh - 100px)',
                  overflowY: 'auto',
                  p: 2
                }}
              >
                {deliveryNote ? (
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        pb: 1.5,
                        mb: 2,
                        borderBottom: '1px solid #e2e8f0'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#202a5a' }}>
                          {deliveryNote.deliveryName ||
                            `DN-${String(deliveryNote.deliveryNumber || 0).padStart(6, '0')}`}
                        </Typography>
                        {renderStatusBadge(deliveryNote.status || 'Dispatched')}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {deliveryNote.status !== 'Delivered' && (
                          <Button
                            variant="contained"
                            size="small"
                            color="success"
                            startIcon={<CheckCircleIcon />}
                            onClick={handleMarkDelivered}
                          >
                            Mark Delivered
                          </Button>
                        )}
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <Badge badgeContent={attachmentCount} color="primary">
                              <AttachFileIcon />
                            </Badge>
                          }
                          onClick={() => setOpenAttachments(true)}
                        >
                          Signed POD / Files
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => navigate(`/DeliveryNoteUpdate/${id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<PrintIcon />}
                          onClick={handlePrint}
                          sx={{ backgroundColor: '#202a5a' }}
                        >
                          Print Delivery Note
                        </Button>
                      </Box>
                    </Box>

                    {/* Printable A4 Preview */}
                    <Box sx={{ border: '1px solid #cbd5e1', borderRadius: 1, overflow: 'hidden' }}>
                      <DeliveryNotePrintTemplate ref={printRef} deliveryNote={deliveryNote} />
                    </Box>
                  </>
                ) : (
                  <Typography sx={{ p: 4, textAlign: 'center', color: '#64748b' }}>
                    Delivery Note not found.
                  </Typography>
                )}
              </Paper>
            </Box>
          )}
        </Box>
      </Box>

      <DocumentAttachmentsModal
        open={openAttachments}
        onClose={() => {
          setOpenAttachments(false);
          fetchData();
        }}
        documentId={id}
        documentType="DeliveryNote"
        documentNumber={deliveryNote?.deliveryName || `DN-${id}`}
        userName={user?.data?.userName || 'System'}
      />
    </div>
  );
}

export default DeliveryNoteViewInformation;
