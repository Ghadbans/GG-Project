import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
  TextField,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import dayjs from 'dayjs';
import { ENDPOINT_URL } from '../../../apiConfig';

function InspectionReportView() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteId, setDeleteId] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (statusFilter !== 'All') params.status = statusFilter;
      const res = await axios.get(`${ENDPOINT_URL}/inspection-reports`, { params });
      if (res.data && res.data.success) {
        setReports(res.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching inspection reports:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchReports();
  };

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axios.delete(`${ENDPOINT_URL}/inspection-reports/${deleteId}`);
      setReports((prev) => prev.filter((r) => r._id !== deleteId));
      setDeleteOpen(false);
      setDeleteId(null);
    } catch (err) {
      console.error('Error deleting report:', err);
    } finally {
      setDeleting(false);
    }
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'COMPLETED':
        return <Chip label="COMPLETED" size="small" sx={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontWeight: 'bold' }} />;
      case 'SENT':
        return <Chip label="SENT" size="small" sx={{ backgroundColor: '#dcfce7', color: '#15803d', fontWeight: 'bold' }} />;
      case 'CONVERTED TO QUOTE':
        return <Chip label="CONVERTED" size="small" sx={{ backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 'bold' }} />;
      default:
        return <Chip label="DRAFT" size="small" sx={{ backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: 'bold' }} />;
    }
  };

  return (
    <Box sx={{ p: { xs: 1.5, md: 3 }, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container maxWidth="xl" disableGutters>
        {/* Header Banner */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <AssignmentIcon sx={{ fontSize: 32, color: '#30368a' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                Technical Inspection Reports
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                Diagnostic reports, site surveys, and engineering recommendations
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            component={NavLink}
            to="/InspectionReportForm"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: '#30368a',
              '&:hover': { backgroundColor: '#1e2468' },
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 1
            }}
          >
            New Inspection Report
          </Button>
        </Box>

        {/* Search and Filters Bar */}
        <Paper elevation={0} sx={{ p: 2, mb: 3, borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <form onSubmit={handleSearchSubmit}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField
                size="small"
                placeholder="Search by subject, customer, report #, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ flex: 1, minWidth: '260px' }}
                InputProps={{
                  endAdornment: (
                    <IconButton size="small" type="submit">
                      <SearchIcon fontSize="small" />
                    </IconButton>
                  )
                }}
              />
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <MenuItem value="All">All Statuses</MenuItem>
                  <MenuItem value="DRAFT">Draft</MenuItem>
                  <MenuItem value="COMPLETED">Completed</MenuItem>
                  <MenuItem value="SENT">Sent to Client</MenuItem>
                  <MenuItem value="CONVERTED TO QUOTE">Converted to Quote</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="outlined" sx={{ textTransform: 'none' }}>
                Apply
              </Button>
            </Box>
          </form>
        </Paper>

        {/* Data Table */}
        <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f1f5f9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: '#334155', width: 50 }}>#</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155', width: 110 }}>REPORT #</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155', width: 120 }}>DATE</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155' }}>CLIENT</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155' }}>SUBJECT</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155' }}>LOCATION</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155', width: 130 }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#334155', width: 150, textAlign: 'center' }}>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} sx={{ textAlign: 'center', py: 6 }}>
                    <CircularProgress size={32} sx={{ color: '#30368a' }} />
                    <Typography variant="body2" sx={{ mt: 1, color: '#64748b' }}>
                      Loading inspection reports...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : reports.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} sx={{ textAlign: 'center', py: 6 }}>
                    <AssignmentIcon sx={{ fontSize: 48, color: '#cbd5e1', mb: 1 }} />
                    <Typography variant="h6" sx={{ color: '#64748b', fontSize: 16 }}>
                      No Inspection Reports Found
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
                      Create your first inspection and corrective action report.
                    </Typography>
                    <Button
                      variant="contained"
                      component={NavLink}
                      to="/InspectionReportForm"
                      startIcon={<AddIcon />}
                      sx={{ backgroundColor: '#30368a', textTransform: 'none' }}
                    >
                      New Report
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                reports.map((row, idx) => (
                  <TableRow key={row._id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ color: '#64748b' }}>{idx + 1}</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#30368a' }}>{row.reportCode}</TableCell>
                    <TableCell>{dayjs(row.date).format('DD/MM/YYYY')}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{row.customerName || 'N/A'}</TableCell>
                    <TableCell sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {row.subject}
                    </TableCell>
                    <TableCell sx={{ maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {row.location}
                    </TableCell>
                    <TableCell>{getStatusChip(row.status)}</TableCell>
                    <TableCell sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                      <Tooltip title="View & Print Official PDF">
                        <IconButton
                          size="small"
                          sx={{ color: '#0284c7' }}
                          onClick={() => navigate(`/InspectionReportPrintView/${row._id}`)}
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Report">
                        <IconButton
                          size="small"
                          sx={{ color: '#d97706' }}
                          onClick={() => navigate(`/InspectionReportForm/${row._id}`)}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Convert to Quotation">
                        <IconButton
                          size="small"
                          sx={{ color: '#16a34a' }}
                          onClick={() =>
                            navigate('/EstimateForm', {
                              state: {
                                customerName: row.customerName,
                                customerId: row.customerId,
                                estimateSubject: row.subject
                              }
                            })
                          }
                        >
                          <RequestQuoteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Report">
                        <IconButton
                          size="small"
                          sx={{ color: '#dc2626' }}
                          onClick={() => handleOpenDelete(row._id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
          <DialogTitle sx={{ fontWeight: 700 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2" sx={{ color: '#475569' }}>
              Are you sure you want to permanently delete this inspection report? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setDeleteOpen(false)} sx={{ textTransform: 'none', color: '#64748b' }}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDelete}
              variant="contained"
              disabled={deleting}
              sx={{ backgroundColor: '#dc2626', '&:hover': { backgroundColor: '#b91c1c' }, textTransform: 'none' }}
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default InspectionReportView;
