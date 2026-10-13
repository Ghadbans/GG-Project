import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Box, IconButton, Modal, Backdrop, Table, TableBody, TableHead, TableRow, styled, Typography, Grid, Paper, Card, CardContent, TableContainer, TextField, Collapse } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import { ENDPOINT_URL } from '../../../apiConfig';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Add, Close, MailOutline } from '@mui/icons-material';
import { Height, Padding } from '@mui/icons-material';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';

import Loader from '../../../component/Loader';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    width: 5
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

// Memoized Row component extracted to module scope to prevent remounting thrash
const PlanningRow = React.memo(function PlanningRow({
  dateStr,
  itemsForDate,
  onOpenDelete,
}) {
  const [open, setOpen] = useState(false);
  const [search2, setSearch2] = useState('');

  const handleSearch2 = (e) => {
    setSearch2(e.target.value);
  };

  const filteredItems = useMemo(() => {
    const q = (search2 || '').trim().toLowerCase();
    if (!q) return itemsForDate || [];
    return (itemsForDate || []).filter((r) => {
      const empName = (r.employeeName || '').toLowerCase();
      const projName = (typeof r.projectName === 'object' ? (r.projectName?.name || r.projectName?.projectName || '') : (r.projectName || '')).toLowerCase();
      const status = (r.status || '').toLowerCase();
      const task = (r.planingTask || '').toLowerCase();
      const desc = (r.planingDescription || '').toLowerCase();
      return empName.includes(q) || projName.includes(q) || status.includes(q) || task.includes(q) || desc.includes(q);
    });
  }, [itemsForDate, search2]);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ padding: '1px', width: 50 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ padding: '1px' }} component="th" scope="row">
          {dayjs(dateStr).format('DD-MMMM-YYYY')}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TextField
                  label='Search'
                  id={`search2-${dateStr}`}
                  size="small"
                  value={search2}
                  onChange={handleSearch2}
                />
              </div>
              <br />
              <table style={{ width: '100%', borderCollapse: 'collapse', color: 'gray' }} size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th style={{ border: '1px solid gray' }}>#</th>
                    <th style={{ border: '1px solid gray' }}>Employee</th>
                    <th style={{ border: '1px solid gray' }}>ProjectName</th>
                    <th style={{ border: '1px solid gray' }}>Status</th>
                    <th style={{ border: '1px solid gray' }}>Task</th>
                    <th style={{ border: '1px solid gray' }}>Description</th>
                    <th style={{ border: '1px solid gray' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((row1, i) => {
                    const projectNameDisplay = typeof row1.projectName === 'object'
                      ? (row1.projectName?.name || row1.projectName?.projectName || '')
                      : (row1.projectName || '');
                    return (
                      <tr key={row1._id || i}>
                        <td style={{ border: '1px solid gray' }}> {i + 1}</td>
                        <td style={{ border: '1px solid gray' }}> {row1.employeeName || ''}</td>
                        <td style={{ border: '1px solid gray' }}> {projectNameDisplay}</td>
                        <td style={{ border: '1px solid gray' }}> {row1.status || ''}</td>
                        <td style={{ border: '1px solid gray' }}> {row1.planingTask || ''}</td>
                        <td style={{ border: '1px solid gray' }}> {row1.planingDescription || ''}</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid gray' }}>
                          <EditTooltip title="Edit">
                            <span>
                              <IconButton>
                                <NavLink to={`/EmployeePlaningFormUpdate/${row1._id}`} className='LinkName'>
                                  <EditIcon style={{ color: 'gray' }} />
                                </NavLink>
                              </IconButton>
                            </span>
                          </EditTooltip>
                          <DeleteTooltip title="Delete">
                            <span>
                              <IconButton onClick={() => onOpenDelete(row1._id)}>
                                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                              </IconButton>
                            </span>
                          </DeleteTooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
});

function EmployeePlaningView({ user }) {
  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      const curUserId = user?.data?.id || user?.id;
      if (!curUserId) return;
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === curUserId)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])

  const EmployeeInfoD = (grantAccess || []).filter((row) => row.moduleName === "Employee" && row.access?.deleteM === true);

  const [startDate, setStartDate] = useState(() => {
    const stored = localStorage.getItem('StartDateInfo1');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && dayjs(parsed).isValid()) return dayjs(parsed);
      } catch (e) {}
    }
    return dayjs();
  });

  const [endDate, setEndDate] = useState(() => {
    const stored = localStorage.getItem('EndDateInfo1');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && dayjs(parsed).isValid()) return dayjs(parsed);
      } catch (e) {}
    }
    return dayjs();
  });

  const handleStart = (date) => {
    if (!date) return;
    const d = dayjs(date);
    if (!d.isValid()) return;
    setStartDate(d);
    localStorage.setItem('StartDateInfo1', JSON.stringify(d.toISOString()));
  };

  const handleEnd = (date) => {
    if (!date) return;
    const d = dayjs(date);
    if (!d.isValid()) return;
    setEndDate(d);
    localStorage.setItem('EndDateInfo1', JSON.stringify(d.toISOString()));
  };

  const filteredData = useMemo(() => {
    const s = dayjs(startDate);
    const e = dayjs(endDate);
    if (!s.isValid() || !e.isValid()) {
      return [dayjs().format('YYYY-MM-DD')];
    }
    const start = s.isBefore(e) ? s.startOf('day') : e.startOf('day');
    const end = s.isBefore(e) ? e.startOf('day') : s.startOf('day');

    const headers = [];
    let current = start;
    let count = 0;
    const maxDays = 90; // strict guard to prevent infinite loops

    while ((current.isBefore(end) || current.isSame(end, 'day')) && count < maxDays) {
      headers.push(current.format('YYYY-MM-DD'));
      current = current.add(1, 'day');
      count++;
    }
    return headers;
  }, [startDate, endDate]);

  const [planing, setPlaning] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const [reason, setReason] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setLoadingData(true);
      const resEmp = await axios.get(`${ENDPOINT_URL}/employee`);
      const factoryIds = resEmp.data?.data?.filter(emp => emp.department?.toUpperCase() === 'FACTORY').map(emp => emp._id) || [];

      const s = dayjs(startDate);
      const e = dayjs(endDate);
      let query = '';
      if (s.isValid() && e.isValid()) {
        const startIso = (s.isBefore(e) ? s : e).startOf('day').toISOString();
        const endIso = (s.isBefore(e) ? e : s).endOf('day').toISOString();
        query = `?startDate=${encodeURIComponent(startIso)}&endDate=${encodeURIComponent(endIso)}`;
      }

      const res = await axios.get(`${ENDPOINT_URL}/planing${query}`);
      const nonFactoryPlaning = (res.data?.data || []).filter(plan => !factoryIds.includes(plan.employeeID)).reverse();

      setPlaning(nonFactoryPlaning);
      setLoadingData(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoadingData(false);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Pre-group records by date string in O(N) to make row lookups O(1)
  const planingByDate = useMemo(() => {
    const map = {};
    if (!Array.isArray(planing)) return map;
    for (let i = 0; i < planing.length; i++) {
      const plan = planing[i];
      if (!plan || !plan.planingDate) continue;
      const dKey = dayjs(plan.planingDate).format('YYYY-MM-DD');
      if (!map[dKey]) {
        map[dKey] = [];
      }
      map[dKey].push(plan);
    }
    return map;
  }, [planing]);

  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const handleOpen = useCallback((id) => {
    setOpen(true);
    setDeleteId(id);
  }, []);
  const handleClose = () => {
    setLoadingOpenModal(false);
    setOpen(false);
  };
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  const [modalDeleteOpenLoading, setModalDeleteOpenLoading] = useState(false);

  const handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    handleCloseReasonDelete();

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    fetchData();
  };

  const [reference, setReference] = useState("");
  const [relatedNumber, setRelatedNumber] = useState("");
  useEffect(() => {
    const fetchId = async () => {
      if (DeleteId !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-planing/${DeleteId}`);
          setReference(res.data?.data?.employeeName || '');
          setRelatedNumber(res.data?.data?.planingDate ? dayjs(res.data.data.planingDate).format('DD/MM/YYYY') : '');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchId();
  }, [DeleteId]);

  const handleCreateNotification = async () => {
    const userName = user?.data?.userName || user?.userName || 'User';
    const data = {
      idInfo: '',
      person: userName + ' Deleted Planing For ' + (reference || '') + ' Created on ' + (relatedNumber || ''),
      reason,
      dateNotification: new Date()
    };
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${ENDPOINT_URL}/delete-planing/${DeleteId}`);
      if (res) {
        handleDeleteOpenLoading();
        handleCreateNotification();
      }
    } catch (error) {
      console.log('An error as occur in delete');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
              required
              name='startDate'
              label='From Date'
              value={dayjs(startDate)}
              onChange={(date) => handleStart(date)}
              format='DD/MM/YYYY'
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
              required
              name='endDate'
              label='To Date'
              value={dayjs(endDate)}
              onChange={(date) => handleEnd(date)}
              format='DD/MM/YYYY'
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <br />
      <TableContainer sx={{ maxHeight: '500px' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((dateStr) => (
              <PlanningRow
                key={dateStr}
                dateStr={dateStr}
                itemsForDate={planingByDate[dateStr] || []}
                onOpenDelete={handleOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h2>Do you want to Delete ?</h2>
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
              <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
                Delete
              </button>
              <button className='btnCustomer' onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openReasonDelete}
        onClose={handleCloseReasonDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseReasonDelete} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Why do you want to delete the planing of: {reference}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='reason1'
                  name='reason1'
                  multiline
                  rows={4}
                  value={reason}
                  placeholder='Reason'
                  onChange={(e) => setReason(e.target.value)}
                  label='Reason'
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

        </Box>
      </Modal>
      <Modal
        open={modalDeleteOpenLoading}
        onClose={handleDeleteCloseLoading}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div>
            {loading ? (<Loader />
            )
              : (
                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                  <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                  <h2> Data successfully deleted</h2>
                  <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                    <button onClick={handleDeleteCloseLoading} className='btnCustomer'>
                      Close
                    </button>
                  </div>
                </div>
              )}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EmployeePlaningView;
