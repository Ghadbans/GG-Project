import React, { useEffect, useState, useMemo, useRef } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {
    Typography, Paper, Grid, Box,
    CssBaseline, AppBar, Toolbar, Drawer, List,
    Table, TableBody, TableCell, TableHead, TableRow, TableContainer,
    IconButton, Chip, Alert, Tooltip, Collapse, TextField, Button
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Ensure French locale is available for robust parsing
import MenuIcon from '@mui/icons-material/Menu';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';
import { logOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { ENDPOINT_URL } from '../../../apiConfig';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { Refresh } from '@mui/icons-material';

import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';

import PaymentsIcon from '@mui/icons-material/Payments';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import { useReactToPrint } from 'react-to-print';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

// Global helper to parse dates robustly across formats
const parseDate = (d) => {
    if (!d) return dayjs(null);
    if (typeof d === 'string') {
        const formats = [
            'YYYY-MM-DD',
            'DD/MM/YYYY',
            'D/M/YYYY',
            'DD-MM-YYYY',
            'DD/MM/YY',
            'D/M/YY',
            'YYYY-MM-DDTHH:mm:ss.SSSZ'
        ];
        let parsed = dayjs(d, formats, true);
        if (!parsed.isValid()) parsed = dayjs(d); // Fallback to native
        return parsed;
    }
    return dayjs(d);
};

const normalizeStr = (n) => {
    if (!n) return "";
    let s = n.toString().trim().toUpperCase();
    if (s.endsWith(" FC")) s = s.substring(0, s.length - 3).trim();
    return s.replace(/\s+/g, " ");
};

const uniqueById = (arr) => {
    const seen = new Set();
    return arr.filter(it => {
        if (!it) return false;
        // Prioritize specific record IDs to prevent collisions (e.g. between multiple payrolls for one employee)
        const id = it._id || it.id || 
                  (it.payNumber ? `PAY_${it.payNumber}` : null) || 
                  (it.expenseNumber ? `EXP_${it.expenseNumber}` : null) || 
                  (it.idInfo ? `INF_${it.idInfo}` : null) || 
                  (it.projectNumber ? `PRJ_${it.projectNumber}` : null) ||
                  (it.invoiceNumber ? `INV_${it.invoiceNumber}` : null) ||
                  (it.factureNumber ? `FAC_${it.factureNumber}` : null) ||
                  (it.paymentNumber ? `PMT_${it.paymentNumber}` : null) ||
                  (it.employeeId ? `EMP_${it.employeeId}` : null) ||
                  (`${it.date}_${it.machineNo}_${it.blockType}_${it.workerName || it.operatorName || ''}`);
        
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
    });
};

const drawerWidth = 240;

const MainContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DetailContent = React.memo(({ p }) => {
    return (
        <React.Fragment>
            <Typography variant="subtitle2" gutterBottom component="div" sx={{ color: '#33691e', fontWeight: 'bold' }}>
                Details for {p.workerName}
            </Typography>
            <Grid container spacing={2}>
                {/* Production Runs */}
                <Grid item xs={12} md={4}>
                    <Typography variant="caption" fontWeight="bold" color="primary" sx={{ display: 'block', mb: 1 }}>
                        Production Earned: {Math.round(p.earned || 0).toLocaleString()} FC
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {p.runs.map((r, i) => (
                            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.2 }}>
                                <Typography variant="caption" sx={{ fontSize: '11px' }}>
                                    • {parseDate(r.date).format('DD/MM/YY')} | {r.isMixer ? `MIXER SH. (${r.machineNo})` : `M${r.machineNo} | ${r.blockType} (${r.sacksUsed} sks)`}{r.isHalfDay ? " (½)" : ""}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 'bold', ml: 1, whiteSpace: 'nowrap', fontSize: '11px' }}>
                                    +{Math.round(r.share || 0).toLocaleString()} FC
                                </Typography>
                            </Box>
                        ))}
                        {p.runs.length === 0 && <Typography variant="caption" color="textSecondary">No runs found.</Typography>}
                    </Box>
                </Grid>
                {/* Damages */}
                <Grid item xs={12} md={2.5}>
                    <Typography variant="caption" fontWeight="bold" color="error" sx={{ display: 'block', mb: 1 }}>
                        Damage: {Math.round(p.damageDeduction || 0).toLocaleString()} FC
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {p.damages.map((d, i) => (
                            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.2 }}>
                                <Typography variant="caption" sx={{ fontSize: '11px' }}>
                                    • {parseDate(d.date).format('DD/MM/YY')} | M{d.machineNo} | {d.blockType}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 'bold', ml: 1, whiteSpace: 'nowrap', fontSize: '11px' }}>
                                    −{Math.round(d.share || 0).toLocaleString()} FC
                                </Typography>
                            </Box>
                        ))}
                        {p.damages.length === 0 && <Typography variant="caption" color="textSecondary">No damages.</Typography>}
                    </Box>
                </Grid>
                {/* Other Expenses */}
                <Grid item xs={12} md={3}>
                    <Typography variant="caption" fontWeight="bold" color="warning.main" sx={{ display: 'block', mb: 1 }}>
                        Other Exp: {Math.round(p.totalExpenses || 0).toLocaleString()} FC
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {p.expenses.food > 0 && (
                            <Typography variant="caption" display="block">
                                • Food: <span style={{ color: 'red' }}>−{Math.round(p.expenses.food).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('FOOD') || ed.cat.includes('NOURRITURE')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.expenses.advances > 0 && (
                            <Typography variant="caption" display="block">
                                • Advances: <span style={{ color: 'red' }}>−{Math.round(p.expenses.advances).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('ADVANCED') || ed.cat.includes('ACCOMPTE') || ed.cat.includes('AVANCE')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.expenses.transport > 0 && (
                            <Typography variant="caption" display="block">
                                • Transport: <span style={{ color: 'red' }}>−{Math.round(p.expenses.transport).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('TRANSPORT')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.expenses.loan > 0 && (
                            <Typography variant="caption" display="block">
                                • Loan: <span style={{ color: 'red' }}>−{Math.round(p.expenses.loan).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('LOAN') || ed.cat.includes('PRET')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.expenses.lost > 0 && (
                            <Typography variant="caption" display="block">
                                • Item Lost: <span style={{ color: 'red' }}>−{Math.round(p.expenses.lost).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('LOST') || ed.cat.includes('PERDU')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.expenses.bonus > 0 && (
                            <Typography variant="caption" display="block">
                                • Bonus: <span style={{ color: 'green' }}>+{Math.round(p.expenses.bonus).toLocaleString()} FC</span>
                                {p.expenseDetails.filter(ed => ed.cat.includes('PRIME') || ed.cat.includes('BONUS') || ed.cat.includes('RECOMPENSE')).map((item, idx) => (
                                    <span key={idx} style={{ color: '#666', fontSize: '10px' }}> [{parseDate(item.date).format('DD/MM')}]</span>
                                ))}
                            </Typography>
                        )}
                        {p.totalExpenses === 0 && p.expenses.bonus === 0 && <Typography variant="caption" color="textSecondary">No recorded expenses/bonus.</Typography>}
                    </Box>
                </Grid>
                {/* Payroll Paid */}
                <Grid item xs={12} md={2.5}>
                    <Typography variant="caption" fontWeight="bold" color="success.main" sx={{ display: 'block', mb: 1 }}>
                        Paid: {Math.round(p.payrollPaid || 0).toLocaleString()} FC
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {p.payrollDetails && p.payrollDetails.length > 0 ? (
                            p.payrollDetails.map((pay, pidx) => (
                                <Box key={pidx} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.2 }}>
                                    <Typography variant="caption" color="textSecondary" sx={{ fontSize: '11px' }}>
                                        • {pay.weekFrom && pay.weekTo
                                            ? `Per: ${parseDate(pay.weekFrom).format('DD/MM')} - ${parseDate(pay.weekTo).format('DD/MM')}`
                                            : (
                                                <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>
                                                    Missing Period ({parseDate(pay.date).format('DD/MM')})
                                                </span>
                                            )
                                        }
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 'bold', ml: 1, whiteSpace: 'nowrap', fontSize: '11px' }}>
                                        {pay.amount.toLocaleString()} FC
                                    </Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="caption" color="textSecondary">No payments.</Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

const WorkerRow = React.memo(({ p, forceOpen }) => {
    const [open, setOpen] = useState(false);

    const netDue = (p.earned + p.expenses.bonus) - (p.damageDeduction + p.expenses.food + p.expenses.advances + p.expenses.transport + p.expenses.loan + p.expenses.lost);
    const balance = netDue - p.payrollPaid;

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer', '&:hover': { bgcolor: '#f9f9f9' } }} onClick={() => setOpen(!open)}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small">
                        {open || forceOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell><Typography variant="body2" fontWeight="bold">{p.workerName}</Typography></TableCell>
                <TableCell align="right" sx={{ color: 'success.main', fontWeight: 'bold' }}>+{Math.round(p.earned || 0).toLocaleString()} FC</TableCell>
                <TableCell align="right" sx={{ color: 'error.main', fontWeight: 'bold' }}>−{Math.round(p.damageDeduction || 0).toLocaleString()} FC</TableCell>
                <TableCell align="right" sx={{ color: 'error.main', fontWeight: 'bold' }}>−{Math.round(p.totalExpenses || 0).toLocaleString()} FC</TableCell>
                <TableCell align="right" sx={{ color: 'success.main', fontWeight: 'bold' }}>{Math.round(netDue || 0).toLocaleString()} FC</TableCell>
                <TableCell align="right" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{Math.round(p.payrollPaid || 0).toLocaleString()} FC</TableCell>
                <TableCell align="right">
                    <Typography variant="body2" fontWeight="bold" color={balance > 0 ? 'error.main' : 'success.main'}>
                        {Math.round(balance || 0).toLocaleString()} FC
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    {forceOpen ? (
                        <Box sx={{ margin: 1, p: 2, bgcolor: '#f1f8e9', borderRadius: 1, border: '1px solid #c5e1a5' }}>
                            <DetailContent p={p} />
                        </Box>
                    ) : (
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1, p: 2, bgcolor: '#f1f8e9', borderRadius: 1, border: '1px solid #c5e1a5' }}>
                                <DetailContent p={p} />
                            </Box>
                        </Collapse>
                    )}
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
});

function WorkerPaymentView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [syncing, setSyncing] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);
    const componentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `Worker_Payroll_${payFrom || ''}_to_${payTo || ''}`,
        onBeforeGetContent: () => {
            setIsPrinting(true);
            return new Promise((resolve) => {
                setTimeout(resolve, 1000); // Give plenty of time for rendering
            });
        },
        onAfterPrint: () => setIsPrinting(false),
    });

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Worker Payroll');

        // Styles
        const headerStyle = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF30368A' } }, alignment: { horizontal: 'center' } };
        const subHeaderStyle = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8EAF6' } } };

        // Add Main Title
        sheet.mergeCells('A1:G1');
        sheet.getCell('A1').value = `Worker Payment Breakdown (${dayjs(payFrom).format('DD/MM/YYYY')} - ${dayjs(payTo).format('DD/MM/YYYY')})`;
        sheet.getCell('A1').font = { size: 14, bold: true };
        sheet.getCell('A1').alignment = { horizontal: 'center' };
        sheet.addRow([]);

        // Add summary columns
        sheet.addRow(['Worker Name', 'Earned (FC)', 'Damage (FC)', 'Other Exp (FC)', 'Net Due (FC)', 'Paid (FC)', 'Balance (FC)']);
        sheet.getRow(3).eachCell((cell) => { cell.style = headerStyle; });

        workerPayments.forEach(p => {
            const netDue = (p.earned + p.expenses.bonus) - (p.damageDeduction + p.totalExpenses);
            const balance = netDue - p.payrollPaid;

            // Worker Summary Row
            const workerRow = sheet.addRow([
                p.workerName.toUpperCase(),
                Math.round(p.earned || 0),
                Math.round(p.damageDeduction || 0),
                Math.round(p.totalExpenses || 0),
                Math.round(netDue || 0),
                Math.round(p.payrollPaid || 0),
                Math.round(balance || 0)
            ]);
            workerRow.font = { bold: true };

            // Details section for this worker
            if (p.runs.length > 0) {
                sheet.addRow(['  → PRODUCTION EARNINGS:']).font = { italic: true, bold: true, color: { argb: 'FF2E7D32' } };
                p.runs.forEach(r => {
                    const label = r.isMixer ? `    • ${parseDate(r.date).format('DD/MM/YY')} | MIXER SHARE (${r.machineNo})` : `    • ${parseDate(r.date).format('DD/MM/YY')} | M${r.machineNo} | ${r.blockType} (${r.sacksUsed} sks)${r.isHalfDay ? " (½)" : ""}`;
                    sheet.addRow([label, Math.round(r.share || 0)]);
                });
            }

            if (p.damages.length > 0) {
                sheet.addRow(['  → DAMAGE DEDUCTIONS:']).font = { italic: true, bold: true, color: { argb: 'FFD32F2F' } };
                p.damages.forEach(d => {
                    sheet.addRow([`    • ${parseDate(d.date).format('DD/MM/YY')} | M${d.machineNo} | ${d.blockType}`, -Math.round(d.share || 0)]);
                });
            }

            if (p.expenseDetails.length > 0 || p.expenses.bonus > 0) {
                sheet.addRow(['  → EXPENSES & BONUSES:']).font = { italic: true, bold: true, color: { argb: 'FFF57F17' } };
                p.expenseDetails.forEach(ed => {
                    sheet.addRow([`    • ${parseDate(ed.date).format('DD/MM/YY')} | ${ed.cat}`, -Math.round(ed.amt || 0)]);
                });
                if (p.expenses.bonus > 0) {
                    sheet.addRow(['    • TOTAL BONUSES', Math.round(p.expenses.bonus)]);
                }
            }

            if (p.payrollDetails.length > 0) {
                sheet.addRow(['  → PAYMENTS RECEIVED:']).font = { italic: true, bold: true, color: { argb: 'FF1976D2' } };
                p.payrollDetails.forEach(pay => {
                    const period = pay.weekFrom ? ` (${parseDate(pay.weekFrom).format('DD/MM')} - ${parseDate(pay.weekTo).format('DD/MM')})` : '';
                    sheet.addRow([`    • Payment on ${parseDate(pay.date).format('DD/MM/YY')}${period}`, -Math.round(pay.amount || 0)]);
                });
            }

            sheet.addRow([]); // Gap between workers
        });

        // Add Global Summary
        sheet.addRow(['GLOBAL TOTALS']).font = { bold: true, size: 12 };
        sheet.addRow(['Total Earned', totals.earned]);
        sheet.addRow(['Total Damage', totals.deductions]);
        sheet.addRow(['Total Paid', totals.paid]);
        sheet.addRow(['Balance Due', totals.balance]);

        // Auto-fit columns
        sheet.columns.forEach(col => { col.width = 30; });

        const fileContent = await workbook.xlsx.writeBuffer();
        const blob = new Blob([fileContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
saveAs(blob, `Detailed_Payroll_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    const handleManualSync = async () => {
        setSyncing(true);
        try {
            // Fetch Productions
            const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
            if (prodRes.data.data) setAllRuns(prodRes.data.data);

            // Fetch Damages
            const dmgRes = await axios.get(`${ENDPOINT_URL}/block-damage`);
            if (dmgRes.data.data) setAllDamages(dmgRes.data.data);

            // Fetch Employees
            const empRes = await axios.get(`${ENDPOINT_URL}/employee`);
            if (empRes.data.data) setAllEmployees(empRes.data.data);

            // Fetch Expenses
            const expRes = await axios.get(`${ENDPOINT_URL}/expense-Information?limit=1000`);
            if (expRes.data.itemI) setAllExpenses(expRes.data.itemI);
            else if (expRes.data.data) setAllExpenses(expRes.data.data);

            // Fetch Payroll
            const payRes = await axios.get(`${ENDPOINT_URL}/payRoll`);
            if (payRes.data.data) setAllPayroll(payRes.data.data);

            // Fetch Mixer
            const mixRes = await axios.get(`${ENDPOINT_URL}/block-mixer`);
            if (mixRes.data.data) setMixerRecords(mixRes.data.data);

            toast.success("Data synchronized successfully.");
        } catch (error) {
            console.error('Error syncing data:', error);
            toast.error("Failed to sync data.");
        } finally {
            setSyncing(false);
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                // Fetch Access
                const accRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = accRes.data?.data?.find(row => row.userID === user.data.id);
                const isGG = user.data.userName === 'GG';
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (!isGG && !blockAccess?.readM) {
                        toast.error("You don't have permission to access Payments Dashboard.");
                        navigate('/AdminHome');
                    }
                } else if (!isGG) {
                    navigate('/AdminHome');
                }

                // Fetch Productions
                const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
                if (prodRes.data.data) setAllRuns(prodRes.data.data);

                // Fetch Damages
                const dmgRes = await axios.get(`${ENDPOINT_URL}/block-damage`);
                if (dmgRes.data.data) setAllDamages(dmgRes.data.data);

                // Fetch Employees
                const empRes = await axios.get(`${ENDPOINT_URL}/employee`);
                if (empRes.data.data) setAllEmployees(empRes.data.data);

                // Fetch Expenses - Corrected endpoint to match DailyExpenses.js (v2.7.5-STABLE)
                const expRes = await axios.get(`${ENDPOINT_URL}/expense-Information?limit=1000`);
                if (expRes.data.itemI) setAllExpenses(expRes.data.itemI);
                else if (expRes.data.data) setAllExpenses(expRes.data.data);

                // Fetch Payroll
                const payRes = await axios.get(`${ENDPOINT_URL}/payRoll`);
                if (payRes.data.data) setAllPayroll(payRes.data.data);

                // Fetch Config
                const confRes = await axios.get(`${ENDPOINT_URL}/block-config`);
                if (confRes.data && confRes.data.data && confRes.data.data.length > 0) setConfig(confRes.data?.data?.[0]);
                else if (confRes.data && Array.isArray(confRes.data)) setConfig(confRes.data[0]);

                // Fetch Mixer
                const mixRes = await axios.get(`${ENDPOINT_URL}/block-mixer`);
                if (mixRes.data.data) setMixerRecords(mixRes.data.data);

            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };
        if (user.data.id) fetchInitialData();
    }, [user, navigate]);

    // Date range for payroll period - Start empty as requested
    const [payFrom, setPayFrom] = useState(null);
    const [payTo, setPayTo] = useState(null);

    const [allRuns, setAllRuns] = useState([]);
    const [allDamages, setAllDamages] = useState([]);
    const [allEmployees, setAllEmployees] = useState([]);
    const [allExpenses, setAllExpenses] = useState([]);
    const [allPayroll, setAllPayroll] = useState([]);
    const [config, setConfig] = useState(null);
    const [mixerRecords, setMixerRecords] = useState([]);

    const toggleDrawer = () => setSideBar(!sideBar);

    const inRange = (dateStr) => {
        if (!payFrom || !payTo) return false; // Don't show data if filter is incomplete

        const d = parseDate(dateStr);
        if (!d.isValid()) return false;

        const fromD = dayjs(payFrom).startOf('day');
        const toD = dayjs(payTo).endOf('day');

        if (!fromD.isValid() || !toD.isValid()) return false;
        if (fromD.isAfter(toD)) return false; // Inverted range

        return (d.isSame(fromD, 'day') || d.isAfter(fromD)) &&
            (d.isSame(toD, 'day') || d.isBefore(toD));
    };

    const memoizedData = useMemo(() => {
        if (!payFrom || !payTo) return { list: [], summary: { earned: 0, deductions: 0, expenses: 0, paid: 0, balance: 0 }, dmgSummary: [] };

        const fromD = dayjs(payFrom).startOf('day');
        const toD = dayjs(payTo).endOf('day');

        const inRangeFast = (dateStr) => {
            const d = parseDate(dateStr);
            return d.isValid() && (d.isSame(fromD, 'day') || d.isAfter(fromD)) && (d.isSame(toD, 'day') || d.isBefore(toD));
        };

        const paymentsMap = {};

        // 1. Filter and Unique data once
        const uniqRuns = uniqueById(allRuns).filter(r => inRangeFast(r.date));
        const uniqDamages = uniqueById(allDamages).filter(d => inRangeFast(d.productionDate || d.date));
        const uniqPayroll = uniqueById(allPayroll);
        const uniqExpenses = uniqueById(allExpenses).filter(e => inRangeFast(e.expenseDate));
        const uniqMixer = mixerRecords.filter(m => inRangeFast(m.date));

        // Create a Production Run Map for fast damage matching: machine# -> date -> runs[]
        const runsMap = {};
        uniqueById(allRuns).forEach(r => {
            const rDate = parseDate(r.date).format('YYYY-MM-DD');
            const machine = r.machineNo.toString().trim();
            if (!runsMap[machine]) runsMap[machine] = {};
            if (!runsMap[machine][rDate]) runsMap[machine][rDate] = [];
            runsMap[machine][rDate].push(r);
        });

        const factoryEmployees = new Set(
            uniqueById(allEmployees)
                .filter(e => e.department && e.department.toUpperCase().includes('FACTORY'))
                .map(e => normalizeStr(e.employeeName))
        );

        const periodPayroll = uniqPayroll.filter(p => {
            const prRawName = p.employeeName?.name || p.employeeName?.employeeName || p.employeeName || "";
            if (!prRawName) return false;
            
            const normName = normalizeStr(prRawName);
            // STRICT: Only include if explicitly a Factory worker
            if (!factoryEmployees.has(normName)) return false;

            // 1. Check working period (Week From / Week To) - highest priority
            if (p.weekFrom && p.weekTo) {
                const pStart = parseDate(p.weekFrom).startOf('day');
                if (pStart.isValid()) {
                    // Strictly belongs to the week it starts in
                    return (pStart.isSame(fromD, 'day') || pStart.isAfter(fromD)) && (pStart.isSame(toD, 'day') || pStart.isBefore(toD));
                }
            }

            // 2. Fallbacks (Only if NO working period is defined)
            if (!p.weekFrom) {
                // 2a. Monthly (strictly match the month of the dashboard range)
                if (p.month) {
                    const pMonthDate = parseDate(p.month);
                    if (pMonthDate.isValid()) {
                        return pMonthDate.year() === fromD.year() && pMonthDate.month() === fromD.month();
                    }
                }
                // 2b. Specific pay date in range
                return inRangeFast(p.payDate);
            }

            return false;
        });

        // Identify Active Workers
        const activeWorkersInPeriod = new Set();
        uniqRuns.forEach(r => {
            if (r.operatorName) activeWorkersInPeriod.add(normalizeStr(r.operatorName));
            if (r.helper1) activeWorkersInPeriod.add(normalizeStr(r.helper1));
            if (r.helper2) activeWorkersInPeriod.add(normalizeStr(r.helper2));
            if (r.helper3) activeWorkersInPeriod.add(normalizeStr(r.helper3));
        });

        const getWorkerObj = (w) => {
            const norm = normalizeStr(w);
            if (!norm || (!factoryEmployees.has(norm) && !activeWorkersInPeriod.has(norm))) return null;
            if (!paymentsMap[norm]) {
                paymentsMap[norm] = {
                    workerName: w.toString().trim(),
                    earned: 0,
                    damageDeduction: 0,
                    runs: [],
                    damages: [],
                    expenses: { food: 0, advances: 0, transport: 0, loan: 0, lost: 0, bonus: 0 },
                    expenseDetails: [],
                    totalExpenses: 0,
                    payrollPaid: 0,
                    payrollDetails: []
                };
            }
            return paymentsMap[norm];
        };

        const rates = config?.laborRates || {
            rate50_33: { perSack: 10000 },
            rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_sacks: 8, t3_rate: 19000, t4_sacks: 12, t4_rate: 21500, t5_rate: 24500 },
            rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_sacks: 7, t3_rate: 19000, t4_sacks: 10, t4_rate: 21500, t5_rate: 24500 },
            rate10_14_12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
        };

        const calculateWorkerShare = (typeStr, s, e, half) => {
            if (typeStr.includes("50") || typeStr.includes("33")) {
                const r50 = rates.rate50_33 || { perSack: 10000 };
                return half ? (s * r50.perSack) / 2 : (s * r50.perSack) / e;
            }
            let r = null;
            if (typeStr.includes("20")) r = rates.rate20;
            else if (typeStr.includes("15")) r = rates.rate15;
            else if (typeStr.includes("14")) r = rates.rate14 || rates.rate10_14_12; // Block 14
            else if (typeStr.includes("12")) r = rates.rate12 || rates.rate10_14_12; // Block 12
            else if (typeStr.includes("10")) r = rates.rate10 || rates.rate10_14_12; // Block 10 — must use rate10!
            else r = rates.rate10_14_12 || rates.rate10;                              // generic fallback

            if (!r) return 0;
            const sacks = parseInt(s) || 0;
            let rate = 0;
            if (half) {
                const effectiveSacks = Math.min(sacks, r.t2_sacks || 0);
                if (effectiveSacks <= (r.t1_sacks || 0)) rate = ((r.t1_rate || 0) * sacks) / 2;
                else rate = (r.t2_rate || 0) / 2;
            } else {
                if (sacks <= (r.t1_sacks || 0)) rate = (r.t1_rate || 0) * sacks;
                else if (sacks <= (r.t2_sacks || 0)) rate = r.t2_rate || 0;
                else if (sacks === (r.t3_sacks || 0)) rate = r.t3_rate || 0;
                else if (sacks <= (r.t4_sacks || 0)) rate = r.t4_rate || 0;
                else rate = r.t5_rate || 0;
            }
            return rate;
        };

        uniqRuns.forEach(run => {
            const workersList = [
                { name: run.operatorName, half: run.halfDayOperator || false },
                { name: run.helper1, half: run.halfDayHelper1 || false },
                { name: run.helper2, half: run.halfDayHelper2 || false },
                { name: run.helper3, half: run.halfDayHelper3 || false },
            ].filter(w => w.name);

            // Calculate the rate based on this run's sacks/type
            // Priority: Use saved laborPot to derive unitShare (for historical accuracy)
            const weightedCrewCount = workersList.reduce((sum, w) => sum + (w.half ? 0.5 : 1), 0);
            const calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, 3, false);
            let unitShare = calculatedUnit;
            if (run.laborPot) {
                // Determine if run.laborPot is under the old schema (includes mixer) or new schema (excludes mixer)
                const oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
                const newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
                if (newSchemaDiff < oldSchemaDiff) {
                    // New schema: laborPot is crew-only.
                    unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
                } else {
                    // Old schema: laborPot includes mixer.
                    unitShare = run.laborPot / (weightedCrewCount + 1);
                }
            }
            
            // 1. Pay Machine Crew
            workersList.forEach(({ name, half }) => {
                const obj = getWorkerObj(name);
                if (obj) {
                    const share = half ? unitShare / 2 : unitShare;
                    obj.earned += share;
                    obj.runs.push({ ...run, share, isHalfDay: half });
                }
            });

        }); // end uniqRuns.forEach

        // Calculate and Distribute Mixer Shares
        const mixerDays = [...new Set(uniqMixer.map(m => m.date))];
        mixerDays.forEach(dateStr => {
            const dateFormatted = parseDate(dateStr).format('YYYY-MM-DD');
            const runsOnDate = uniqRuns.filter(r => parseDate(r.date).format('YYYY-MM-DD') === dateFormatted);
            const totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);

            const mixersOnDate = uniqMixer.filter(m => m.date === dateStr);
            if (mixersOnDate.length === 0) return;

            const mixerRate = config?.mixerRatePerSack !== undefined ? config.mixerRatePerSack : 300;

            // Distribute to individual mixer workers
            mixersOnDate.forEach(w => {
                const obj = getWorkerObj(w.workerName);
                if (obj) {
                    const basePayout = totalSacksOnDate * mixerRate;
                    const share = w.halfDay ? basePayout * 0.5 : basePayout;
                    obj.earned += share;
                    obj.runs.push({ 
                        date: dateStr, 
                        blockType: "MIXER SHARE", 
                        machineNo: `Mixer Team (${totalSacksOnDate} sks)`, 
                        share, 
                        isMixer: true, 
                        isHalfDay: w.halfDay 
                    });
                }
            });
        });

        uniqDamages.forEach(d => {
            const dDate = parseDate(d.productionDate || d.date).format('YYYY-MM-DD');
            const machine = d.machineNo.toString().trim();
            const bType = d.blockType.toString().trim().toUpperCase();
            
            const matchRun = (runsMap[machine]?.[dDate] || []).find(r => r.blockType.toString().trim().toUpperCase() === bType);
            if (!matchRun) return;

            const workersList = [matchRun.operatorName, matchRun.helper1, matchRun.helper2, matchRun.helper3].filter(n => n);
            if (workersList.length === 0) return;
            const share = ((d.damagedBlocks || 0) * (d.damageRate || 3000)) / workersList.length;
            workersList.forEach(w => {
                const obj = getWorkerObj(w);
                if (obj) {
                    obj.damageDeduction += share;
                    obj.damages.push({ ...d, share });
                }
            });
        });

        periodPayroll.forEach(pr => {
            const wName = pr.employeeName?.name || pr.employeeName?.employeeName || pr.employeeName || "";
            if (!wName) return;
            
            // Re-use strict worker object getter (ensures factory check)
            const obj = getWorkerObj(wName);
            if (obj) {
                const amount = parseFloat(pr.totalNet || pr.totalPaid || pr.amountPayFC || 0);
                obj.payrollPaid += amount;
                obj.payrollDetails.push({ date: pr.payDate, amount, weekFrom: pr.weekFrom, weekTo: pr.weekTo });
            }
        });

        uniqExpenses.forEach(ex => {
            if (ex.accountName === 'Employee') {
                const employeesArr = Array.isArray(ex.employeeName) ? ex.employeeName : (ex.employeeName ? [{ employee: ex.employeeName, amount: ex.amount }] : []);
                employeesArr.forEach(item => {
                    let wName = item.employee;
                    if (!wName && item.idRow) {
                        const emp = allEmployees.find(e => (e._id === item.idRow || e.employeeId === item.idRow));
                        if (emp) wName = emp.employeeName;
                    }
                    const obj = getWorkerObj(wName);
                    if (obj) {
                        const cat = (ex.expenseCategory?.expensesCategory || ex.expenseCategory || "").toString().toUpperCase();
                        const amt = parseFloat(item.amount) || 0;
                        if (cat.includes('FOOD') || cat.includes('NOURRITURE')) obj.expenses.food += amt;
                        else if (cat.includes('ADVANCED') || cat.includes('ACCOMPTE') || cat.includes('AVANCE')) obj.expenses.advances += amt;
                        else if (cat.includes('TRANSPORT')) obj.expenses.transport += amt;
                        else if (cat.includes('LOAN') || cat.includes('PRET')) obj.expenses.loan += amt;
                        else if (cat.includes('LOST') || cat.includes('PERDU')) obj.expenses.lost += amt;
                        else if (cat.includes('PRIME') || cat.includes('BONUS') || cat.includes('RECOMPENSE')) obj.expenses.bonus += amt;
                        obj.expenseDetails.push({ date: ex.expenseDate, amt, cat });
                    }
                });
            }
        });

        const list = Object.values(paymentsMap).map(p => ({
            ...p,
            totalExpenses: p.expenses.food + p.expenses.advances + p.expenses.transport + p.expenses.loan + p.expenses.lost
        })).sort((a, b) => b.earned - a.earned);

        const summary = list.reduce((acc, p) => {
            const net = (p.earned + p.expenses.bonus) - (p.damageDeduction + p.totalExpenses);
            acc.earned += p.earned;
            acc.deductions += p.damageDeduction;
            acc.expenses += p.totalExpenses;
            acc.paid += p.payrollPaid;
            acc.balance += (net - p.payrollPaid);
            return acc;
        }, { earned: 0, deductions: 0, expenses: 0, paid: 0, balance: 0 });

        const dmgSummary = [];
        uniqDamages.forEach(d => {
            const dDate = parseDate(d.productionDate || d.date).format('YYYY-MM-DD');
            const machine = d.machineNo.toString().trim();
            const bType = d.blockType.toString().trim().toUpperCase();
            
            const matchRun = (runsMap[machine]?.[dDate] || []).find(r => r.blockType.toString().trim().toUpperCase() === bType);
            if (matchRun) {
                const workersList = [matchRun.operatorName, matchRun.helper1, matchRun.helper2, matchRun.helper3].filter(n => n);
                if (workersList.length > 0) {
                    dmgSummary.push({
                        ...d,
                        workers: workersList,
                        perPerson: ((d.damagedBlocks || 0) * (d.damageRate || 3000)) / workersList.length,
                        totalCost: (d.damagedBlocks || 0) * (d.damageRate || 3000)
                    });
                }
            }
        });

        const filteredList = searchTerm ? list.filter(p => (p.workerName || "").toLowerCase().includes(searchTerm.toLowerCase())) : list;
        return { list: filteredList, summary, dmgSummary };
    }, [allRuns, allDamages, allEmployees, allExpenses, allPayroll, config, mixerRecords, payFrom, payTo, searchTerm]);

    const { list: workerPayments, summary: totals } = memoizedData;
    const damagesSummary = memoizedData.dmgSummary || [];

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Worker Payment Dashboard</Typography>
                    <NotificationVIewInfo />
                    <MessageAdminView name={user.data.userName} role={user.data.role} />
                    <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <Logout style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={sideBar}
                sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}>
                <Toolbar /><Box sx={{ overflow: 'auto' }}><List><SidebarDash /></List></Box>
            </Drawer>

            <MainContent open={sideBar}>
                <Toolbar />
                <Box sx={{ mt: 2, width: '100%', px: 0, m: 0 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 2, bgcolor: '#e8eaf6', border: '1px solid #9fa8da' }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={2}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <CalendarTodayIcon color="primary" />
                                            <Typography variant="subtitle2" fontWeight="bold">Period Filter</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="From"
                                                value={payFrom ? dayjs(payFrom) : null}
                                                onChange={(newValue) => setPayFrom(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                                                format="DD/MM/YYYY"
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="To"
                                                value={payTo ? dayjs(payTo) : null}
                                                onChange={(newValue) => setPayTo(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                                                format="DD/MM/YYYY"
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
                                        {payFrom && payTo ? (
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                                                <Typography variant="caption" color="textSecondary">
                                                    Showing data for {dayjs(payFrom).format('DD/MM/YYYY')} → {dayjs(payTo).format('DD/MM/YYYY')}
                                                </Typography>
                                                <Tooltip title="Refresh Data From Server">
                                                    <IconButton onClick={handleManualSync} disabled={syncing} size="small" color="primary">
                                                        <Refresh className={syncing ? 'rotate-animation' : ''} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        ) : (
                                            <Typography variant="caption" color="error" display="block" fontWeight="bold">
                                                Please select a valid Period Filter to load data
                                            </Typography>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                        <Button
                                            variant="outlined"
                                            startIcon={<PrintIcon />}
                                            onClick={handlePrint}
                                            disabled={!payFrom || !payTo}
                                            size="small"
                                            sx={{ bgcolor: '#fff' }}
                                        >
                                            Print PDF
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<DownloadIcon />}
                                            onClick={exportToExcel}
                                            disabled={!payFrom || !payTo}
                                            size="small"
                                        >
                                            Excel
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Box ref={componentRef} sx={{ p: '20px', bgcolor: '#fff', borderRadius: 2 }}>
                                <Typography variant="h5" align="center" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                                    Worker Payment Statement
                                </Typography>
                                {payFrom && payTo && (
                                    <Typography variant="subtitle2" align="center" sx={{ mb: 4, color: 'textSecondary' }}>
                                        Period: {dayjs(payFrom).format('DD/MM/YYYY')} - {dayjs(payTo).format('DD/MM/YYYY')}
                                    </Typography>
                                )}
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={3}>
                                        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e9', borderLeft: '5px solid #4caf50' }}>
                                            <EmojiEventsIcon sx={{ color: '#2e7d32', mb: 0.5 }} />
                                            <Typography variant="caption" display="block" color="textSecondary">Total Earned</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                                                {payFrom && payTo ? totals.earned.toLocaleString() : "—"} FC
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0', borderLeft: '5px solid #ff9800' }}>
                                            <MoneyOffIcon sx={{ color: '#e65100', mb: 0.5 }} />
                                            <Typography variant="caption" display="block" color="textSecondary">Total Damage</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e65100' }}>
                                                {payFrom && payTo ? (totals.deductions || 0).toLocaleString() : "—"} FC
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd', borderLeft: '5px solid #2196f3' }}>
                                            <PaymentsIcon sx={{ color: '#1565c0', mb: 0.5 }} />
                                            <Typography variant="caption" display="block" color="textSecondary">Total Paid</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
                                                {payFrom && payTo ? (totals.paid || 0).toLocaleString() : "—"} FC
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#ffebee', borderLeft: '5px solid #f44336' }}>
                                            <AccountBalanceWalletIcon sx={{ color: '#c62828', mb: 0.5 }} />
                                            <Typography variant="caption" display="block" color="textSecondary">Balance Due</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#c62828' }}>
                                                {payFrom && payTo ? (totals.balance || 0).toLocaleString() : "—"} FC
                                            </Typography>
                                        </Paper>
                                    </Grid>

                                    {damagesSummary.length > 0 && (
                                        <Grid item xs={12}>
                                            <Paper sx={{ p: 2.5, borderRadius: 2, boxShadow: 2, bgcolor: '#fff8e1', border: '1px solid #ffe082' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                                                    <InfoOutlinedIcon sx={{ color: '#f57f17' }} />
                                                    <Typography variant="subtitle1" fontWeight="bold">Damage Calculations</Typography>
                                                </Box>
                                                {damagesSummary.map((d, i) => (
                                                    <Box key={i} sx={{ mb: 1.5, p: 1.5, bgcolor: 'white', borderRadius: 1, border: '1px solid #ffe082' }}>
                                                        <Grid container spacing={1} alignItems="center">
                                                            <Grid item xs={12} sm={1}>
                                                                <Chip label={`M${d.machineNo}`} color="primary" size="small" />
                                                                <Typography variant="caption" display="block">{d.blockType}</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={3}>
                                                                <Typography variant="body2"><b>{d.damagedBlocks}</b> blocks @ <b>{(d.damageRate || 3000).toLocaleString()}</b></Typography>
                                                                <Typography variant="body2" color="error" fontWeight="bold">= {d.totalCost.toLocaleString()} FC</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={2}>
                                                                <Typography variant="body2">÷ <b>{d.workers.length}</b> workers</Typography>
                                                                <Typography variant="body2" color="error">= <b>{d.perPerson.toLocaleString()}</b> each</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                                    {d.workers.map((w, wi) => (
                                                                        <Chip key={wi} label={`${w}: −${d.perPerson.toLocaleString()} FC`} size="small" sx={{ bgcolor: '#ffecb3' }} />
                                                                    ))}
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                ))}
                                            </Paper>
                                        </Grid>
                                    )}

                                    <Grid item xs={12}>
                                        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                                <Typography variant="h6">Comprehensive Dashboard</Typography>
                                                {!isPrinting && (
                                                    <TextField
                                                        size="small"
                                                        label="Search Workers"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        sx={{ minWidth: 280 }}
                                                        InputProps={{ startAdornment: (<SearchIcon sx={{ color: 'action.active', mr: 1, fontSize: 20 }} />) }}
                                                    />
                                                )}
                                            </Box>
                                            {(!payFrom || !payTo) ? (
                                                <Alert severity="warning">Please select a Date Period Filter to see payments.</Alert>
                                            ) : workerPayments.length === 0 ? (
                                                <Alert severity="info">No matching production data for this period.</Alert>
                                            ) : (
                                                <TableContainer>
                                                    <Table size="small">
                                                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                                            <TableRow>
                                                                <TableCell width={40}></TableCell>
                                                                <TableCell sx={{ fontWeight: 'bold' }}>Worker</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Earned</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'error.main' }}>Damage</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'warning.main' }}>Other Exp</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'success.main' }}>Net Due</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Paid</TableCell>
                                                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Balance</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {workerPayments.map((p, idx) => (
                                                                <WorkerRow key={idx} p={p} forceOpen={isPrinting} />
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            )}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </MainContent>
        </Box>
    );
}

export default WorkerPaymentView;
