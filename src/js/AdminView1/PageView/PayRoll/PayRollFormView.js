import React, { useEffect, useState } from 'react';
import SidebarDashE3 from '../../../component/SidebarDashE3';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios'
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, RemoveCircleOutline } from '@mui/icons-material';
import { ENDPOINT_URL } from '../../../apiConfig';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ArrowBack from '@mui/icons-material/ArrowBack';

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

const uniqueById = (arr) => {
    const seen = new Set();
    return arr.filter(it => {
        if (!it) return false;
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


import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
function PayRollFormView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [open1, setOpen1] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpen1(true);
  };
  const handleCloseBack = () => {
    setOpen1(false);
  };
  const [payNumber, setPayNumber] = useState(0);
  const [payDate, setPayDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [month, setMonth] = useState(() => {
    const date = new Date()
    return date
  });
  const [employeeId, setEmployeeId] = useState('');
  const [daysW, setDaysW] = useState(0);
  const [daysOpen, setDaysOpen] = useState(0);
  const [Lops, setLops] = useState(0);
  const [employee, setEmployee] = useState([])
  const [employeeName, setEmployeeName] = useState({});
  const [employeeRole, setEmployeeRole] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankNo, setBankNo] = useState("");
  const [basicSalary, setBasicSalary] = useState(0);
  const [earningSalary, setEarningSalary] = useState(0);
  const [advancedSalary, setAdvancedSalary] = useState(0);
  const [basicTransport, setBasicTransport] = useState(0);
  const [transportEarning, setTransportEarning] = useState(0);
  const [transportDeduction, setTransportDeduction] = useState(0);
  const [foodBasic, setFoodBasic] = useState(0);
  const [foodEarning, setFoodEarning] = useState(0);
  const [itemLost, setItemLost] = useState(0);
  const [foodDeduction, setFoodDeduction] = useState(0);
  const [bounceAllowances, setBounceAllowances] = useState(0);
  const [bounceAllowancesEarning, setBounceAllowancesEarning] = useState(0);
  const [other, setOther] = useState(0);
  const [otherEarning, setOtherEarning] = useState(0);
  const [loan, setLoan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [rate, setRate] = useState(0);
  const [amountPayUSD, setAmountPayUSD] = useState(0);
  const [amountPayFC, setAmountPayFC] = useState(0);
  const [employeeDepartment, setEmployeeDepartment] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [words, setTotalW] = useState("");
  const [factoryEarned, setFactoryEarned] = useState(0);
  const [factoryDamage, setFactoryDamage] = useState(0);
  const [weekFrom, setWeekFrom] = useState(null);
  const [weekTo, setWeekTo] = useState(null);
  const [serverErrorMsg, setServerErrorMsg] = useState("");
  useEffect(() => {
    const fetchlastNumber = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-last-saved-payRoll`);
        const num = res.data && res.data.payNumber ? (parseInt(res.data?.data?.payNumber || res.data?.payNumber || 0)) : 0;
        setPayNumber(num + 1);
        setPayDate(res.data.payDate);
        setMonth(res.data.month);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchlastNumber()
  }, [])
  // Add Other And Bonus.
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resEmployee = await axios.get(`${ENDPOINT_URL}/employee`)
        setEmployee(resEmployee.data?.data?.filter((row) => row.status === 'Employed' || row.status === 'Resign'));
        const resPRate = await axios.get(`${ENDPOINT_URL}/paymentRate`);
        (resPRate.data?.data || []).map((row) => setRate(row.paymentRate));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    handleFetch()
  }, [])
  useEffect(() => {
    const fetchExpense = async () => {
      if (!employeeName.id) return;
      try {
        setLoading(true);
        // Step 1: Fetch Shared Data (Expenses and Attendance) once per change
        const [resExpense, resAttendance] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/expense?summary=true`),
          axios.get(`${ENDPOINT_URL}/employeeattendance`)
        ]);

        const allExpenses = resExpense.data?.data || [];
        const allAttendance = resAttendance.data?.data || [];

        const isFactory = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY');
        const fromD = weekFrom ? dayjs(weekFrom).startOf('day') : null;
        const toD = weekTo ? dayjs(weekTo).endOf('day') : null;

        const inRange = (dateStr) => {
          const d = parseDate(dateStr);
          if (!d.isValid()) return false;

          // Prioritize range if both dates are selected
          if (fromD && toD) {
            return (d.isSame(fromD, 'day') || d.isAfter(fromD)) && (d.isSame(toD, 'day') || d.isBefore(toD));
          }

          // Fallback to monthly filter
          return d.format('MM/YYYY') === dayjs(month).format('MM/YYYY');
        };

        // Standard Filter Helper - Robust Matching for Deductions
        const getSum = (categories) => {
          const searchTerms = Array.isArray(categories) ? categories.map(c => c.toUpperCase()) : [categories.toUpperCase()];
          return allExpenses
            .filter(row => {
              const cat = row.expenseCategory?.expensesCategory?.toUpperCase() || "";
              const matchCat = searchTerms.some(term => cat.includes(term));
              return row.accountName === 'Employee' && matchCat && inRange(row.expenseDate);
            })
            .map(row => ({ emp: row.employeeName.filter(item => item.idRow === employeeName.id) }))
            .filter(item => item.emp.length > 0)
            .reduce((acc, row) => acc + row.emp.reduce((s, it) => s + parseFloat(it.amount || 0), 0), 0);
        };

        // Apply Deductions (Respects Range & Variations)
        setTransportDeduction(getSum(['TRANSPORT']));
        setFoodDeduction(getSum(['FOOD']));
        setAdvancedSalary(getSum(['ADVANCED', 'ACCOMPTE', 'AVANCE']));
        setLoan(getSum(['LOAN', 'PRET']));
        setItemLost(getSum(['ITEM LOST', 'PERDU', 'DEDUCTION']));
        setBonus(getSum(['BONUS']));

        // Attendance Filtering
        const attArray = allAttendance.filter(row => row.id === employeeName.id && inRange(row.timeIn));
        const nbreOfDay = attArray.filter(item => item.observation === 'P' || item.observation === 'H').reduce((sum, item) => sum + (item.daysWN || 0), 0);
        setDaysW(nbreOfDay);

        // Determine calculation mode: Prioritize range if both dates are chosen
        const isRangeMode = fromD && toD && fromD.isBefore(toD.add(1, 'day'));

        // FACTORY/RANGE SPECIFIC COMPUTATIONS (Earnings & Damages)
        if (isRangeMode) {
          const [resRuns, resDamages, resConfig] = await Promise.all([
            axios.get(`${ENDPOINT_URL}/block-production`),
            axios.get(`${ENDPOINT_URL}/block-damage`),
            axios.get(`${ENDPOINT_URL}/block-config`)
          ]);
          const allRuns = resRuns.data?.data || [];
          const allDamages = resDamages.data?.data || [];
          const config = resConfig.data?.data?.[0];
          const rates = config?.laborRates || {
            rate50_33: { perSack: 10000 },
            rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_sacks: 8, t3_rate: 19000, t4_sacks: 12, t4_rate: 21500, t5_rate: 24500 },
            rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_sacks: 7, t3_rate: 19000, t4_sacks: 10, t4_rate: 21500, t5_rate: 24500 },
            rate10_14_12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
          };

          const runs = uniqueById(allRuns).filter(r => inRange(r.date));
          const damages = uniqueById(allDamages).filter(d => inRange(d.productionDate || d.date));

          const normalize = (n) => {
            if (!n) return "";
            let s = n.toString().trim().toUpperCase();
            if (s.endsWith(" FC")) s = s.substring(0, s.length - 3).trim();
            return s.replace(/\s+/g, " ");
          };
          const targetName = normalize(employeeName.name);

          const calculateWorkerShare = (typeStr, s, e, half) => {
            if (typeStr.includes("50") || typeStr.includes("33")) {
              const r50 = rates.rate50_33 || { perSack: 10000 };
              return half ? (s * r50.perSack) / 2 : (s * r50.perSack) / e;
            }
            let r = null;
            if (typeStr.includes("20")) r = rates.rate20;
            else if (typeStr.includes("15")) r = rates.rate15;
            else r = rates.rate10_14_12 || rates.rate14 || rates.rate12 || rates.rate10;

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

          const resMixer = await axios.get(`${ENDPOINT_URL}/block-mixer`);

          const mixerRecords = resMixer.data?.data || [];

          const standardSpots = 3;
          let myEarned = 0;

          // Calculate direct machine earnings and populate mixer pool
          runs.forEach(run => {
            const workersList = [
              { name: run.operatorName, half: run.halfDayOperator || false },
              { name: run.helper1, half: run.halfDayHelper1 || false },
              { name: run.helper2, half: run.halfDayHelper2 || false },
              { name: run.helper3, half: run.halfDayHelper3 || false },
            ].filter(w => w.name);

            const calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, standardSpots, false);
            let unitShare = calculatedUnit;
            
            if (run.laborPot) {
              const weightedCrewCount = workersList.reduce((sum, w) => sum + (w.half ? 0.5 : 1), 0);
              const oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
              const newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
              if (newSchemaDiff < oldSchemaDiff) {
                  unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
              } else {
                  unitShare = run.laborPot / (weightedCrewCount + 1);
              }
            }

            // Direct machine work
            const myMatch = workersList.find(w => normalize(w.name) === targetName);
            if (myMatch) {
              myEarned += myMatch.half ? unitShare / 2 : unitShare;
            }
          });

            // Calculate and Distribute Mixer Shares
            const mixerDays = [...new Set(mixerRecords.filter(m => inRange(m.date)).map(m => m.date))];
            const mixerRate = config?.mixerRatePerSack !== undefined ? config.mixerRatePerSack : 300;
            
            mixerDays.forEach(dateStr => {
                const dateFormatted = parseDate(dateStr).format('YYYY-MM-DD');
                const runsOnDate = allRuns.filter(r => parseDate(r.date).format('YYYY-MM-DD') === dateFormatted);
                const totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);
    
                const mixersOnDate = mixerRecords.filter(m => m.date === dateStr);
                if (mixersOnDate.length === 0) return;
    
                mixersOnDate.forEach(w => {
                    if (w.workerName && normalize(w.workerName) === targetName) {
                        const basePayout = totalSacksOnDate * mixerRate;
                        const share = w.halfDay ? basePayout * 0.5 : basePayout;
                        myEarned += share;
                    }
                });
            });

          let myDamageDeduction = 0;
          damages.forEach(d => {
            const matchRun = allRuns.find(r =>
              r.machineNo.toString().trim() === d.machineNo.toString().trim() &&
              r.blockType.toString().trim().toUpperCase() === d.blockType.toString().trim().toUpperCase() &&
              parseDate(r.date).isSame(parseDate(d.productionDate || d.date), 'day')
            );
            if (matchRun) {
              const workers = [matchRun.operatorName, matchRun.helper1, matchRun.helper2, matchRun.helper3].filter(n => n);
              if (workers.map(n => normalize(n)).includes(targetName)) {
                myDamageDeduction += ((d.damagedBlocks * (d.damageRate || 3000)) / workers.length);
              }
            }
          });

          setFactoryEarned(myEarned);
          setFactoryDamage(myDamageDeduction);
        } else {
          setFactoryEarned(0);
          setFactoryDamage(0);
        }
      } catch (error) {
        toast.error('Error fetching expenses or factory data.');
      } finally {
        setLoading(false);
      }
    };
    fetchExpense();
  }, [month, employeeName, weekFrom, weekTo, employeeDepartment]);
  useEffect(() => {
    if (totalNet) {
      const wholePart = Math.floor(totalNet)
      const fractionalPart = (totalNet % 1).toFixed(2).split('.')[1];
      const wholeWords = numberToWords.toWords(wholePart)
      const fractionalWords = numberToWords.toWords(fractionalPart)
      setTotalW(`${wholeWords} and ${fractionalWords} cents`)
    }
  }, [totalNet])
  const handleChange = (newValue) => {
    const selectedOptions = employee.find((option) => option === newValue)
    setEmployeeName({
      id: selectedOptions?._id,
      name: selectedOptions?.employeeName
    });
    setEmployeeId(selectedOptions?.employeeId)
    setEmployeeRole(selectedOptions?.employeeRole)
    setEmployeeDepartment(selectedOptions?.department)
    setEmployeePhone(selectedOptions?.employeePhone)
    setBasicSalary(selectedOptions?.salary)
    setBasicTransport(selectedOptions.basicTransport !== undefined ? selectedOptions.basicTransport : 0)
    setFoodBasic(selectedOptions.foodBasic !== undefined ? selectedOptions.foodBasic : 0)
    setBounceAllowances(selectedOptions.bounceAllowances !== undefined ? selectedOptions.bounceAllowances : 0)
    setOther(selectedOptions.other !== undefined ? selectedOptions?.other : 0)
    setBankName(selectedOptions?.bankName)
    setBankNo(selectedOptions?.bankAccountNumber)
  }
  useEffect(() => {
    const DayO = 26;
    const LO = 4;
    setDaysOpen(DayO);
    setLops(LO);
  }, [])
  useEffect(() => {
    const hasRange = weekFrom && weekTo;
    if (hasRange || (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY'))) {
      setEarningSalary(0); // Ignore basic wage for anyone with a period range or factory dept
    } else {
      const dividedSalary = basicSalary / daysOpen;
      const totalEarningSalary = isNaN(daysW * dividedSalary) ? 0 : parseFloat(daysW * dividedSalary);
      setEarningSalary(totalEarningSalary);
    }
    const dividedTransport = basicTransport / daysOpen
    const totalEarningTransport = isNaN(daysW * dividedTransport) ? 0 : parseFloat(daysW * dividedTransport)
    setTransportEarning(totalEarningTransport)
    const dividedFood = foodBasic / daysOpen
    const totalEarningFood = isNaN(daysW * dividedFood) ? 0 : parseFloat(daysW * dividedFood)
    setFoodEarning(totalEarningFood)
    const dividedBounce = bounceAllowances / daysOpen
    const totalEarningBOunce = isNaN(daysW * dividedBounce) ? 0 : parseFloat(daysW * dividedBounce)
    setBounceAllowancesEarning(totalEarningBOunce)
    const dividedOther = other / daysOpen
    const totalEarningOther = isNaN(daysW * dividedOther) ? 0 : parseFloat(daysW * dividedOther)
    setOtherEarning(totalEarningOther)
  }, [basicSalary, daysW, basicTransport, foodBasic, bounceAllowances, other, daysOpen, employeeDepartment])

  const totalActualSalary = parseFloat(basicSalary) + parseFloat(basicTransport) + parseFloat(foodBasic) + parseFloat(bounceAllowances) + parseFloat(other) + parseFloat(factoryEarned);
  const totalActualEarning = parseFloat(earningSalary) + parseFloat(transportEarning) + parseFloat(foodEarning) + parseFloat(bounceAllowancesEarning) + parseFloat(otherEarning) + parseFloat(factoryEarned);
  const totalActualDeduction = parseFloat(advancedSalary) + parseFloat(transportDeduction) + parseFloat(foodDeduction) + parseFloat(loan) + parseFloat(itemLost) + parseFloat(factoryDamage);
  const totalNet = totalActualEarning !== 0 ? totalActualEarning - totalActualDeduction : 0
  const totalPaid = totalNet + bonus + totalActualDeduction
  const totalPaidDollars = rate !== 0 ? Math.min((totalNet / rate) * 100) / 100 : 0
  let dividedAmountPaidFc = parseFloat(amountPayFC / rate).toFixed(2)
  let totalPaidUsd = parseFloat(Number(amountPayUSD) + Number(dividedAmountPaidFc)).toFixed(2)
  const CreditUSD = Math.round((totalPaidDollars - totalPaidUsd) * 100) / 100
  const CreditFC = rate !== 0 ? Math.round((CreditUSD * rate) * 100) / 100 : 0

  const basicSalaryDollar = isNaN(basicSalary / rate) ? 0 : parseFloat(basicSalary / rate);
  const basicEarningDollar = isNaN(earningSalary / rate) ? 0 : parseFloat(earningSalary / rate);
  const basicAdvancedDollar = isNaN(advancedSalary / rate) ? 0 : parseFloat(advancedSalary / rate);
  const basicTransportDollar = isNaN(basicTransport / rate) ? 0 : parseFloat(basicTransport / rate);
  const basicTransportEarningDollar = isNaN(transportEarning / rate) ? 0 : parseFloat(transportEarning / rate);
  const basicTransportDeductionDollar = isNaN(transportDeduction / rate) ? 0 : parseFloat(transportDeduction / rate);
  const basicFoodDollar = isNaN(foodBasic / rate) ? 0 : parseFloat(foodBasic / rate);
  const basicFoodEarningDollar = isNaN(foodEarning / rate) ? 0 : parseFloat(foodEarning / rate);
  const basicFoodDeductionDollar = isNaN(foodDeduction / rate) ? 0 : parseFloat(foodDeduction / rate);
  const basicBounceDollar = isNaN(bounceAllowances / rate) ? 0 : parseFloat(bounceAllowances / rate);
  const basicBounceEarningDollar = isNaN(bounceAllowancesEarning / rate) ? 0 : parseFloat(bounceAllowancesEarning / rate);
  const basicLoanDeductionDollar = isNaN(loan / rate) ? 0 : parseFloat(loan / rate);
  const basicOtherDollar = isNaN(other / rate) ? 0 : parseFloat(other / rate);
  const basicOtherEarningDollar = isNaN(otherEarning / rate) ? 0 : parseFloat(otherEarning / rate);
  const basicItemDeductionDollar = isNaN(itemLost / rate) ? 0 : parseFloat(itemLost / rate);
  const TotalBasicDollar = isNaN(totalActualSalary / rate) ? 0 : parseFloat(totalActualSalary / rate);
  const TotalEarningDollar = isNaN(totalActualEarning / rate) ? 0 : parseFloat(totalActualEarning / rate);
  const TotalDEductionDollar = isNaN(totalActualDeduction / rate) ? 0 : parseFloat(totalActualDeduction / rate);
  const TotalBonusDollar = isNaN(bonus / rate) ? 0 : parseFloat(bonus / rate);
  const TotalPAidDollar = isNaN(totalPaid / rate) ? 0 : parseFloat(totalPaid / rate);

  {/** loading Start */ }
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [loadingOpenModalUpdate, setLoadingOpenModalUpdate] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleError = (msg) => {
    setServerErrorMsg(msg || "");
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }

  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    setPayNumber(prev => (prev || 0) + 1); // Increment pay number for next
    setPayDate(new Date());
    setEmployeeId('');
    setDaysW(0);
    // setDaysOpen(0); // Keep daysOpen as it usually stays the same for the month
    // setLops(0); // Keep Lops as it usually stays the same for the month
    setEmployeeName({ id: '', name: '' });
    setEmployeeRole('');
    setEmployeeDepartment('');
    setEmployeePhone('');
    setBankName('');
    setBankNo('');
    setBasicSalary(0);
    setEarningSalary(0);
    setAdvancedSalary(0);
    setBasicTransport(0);
    setTransportEarning(0);
    setTransportDeduction(0);
    setFoodBasic(0);
    setFoodEarning(0);
    setItemLost(0);
    setFoodDeduction(0);
    setBounceAllowances(0);
    setBounceAllowancesEarning(0);
    setOther(0);
    setOtherEarning(0);
    setLoan(0);
    setBonus(0);
    setFactoryEarned(0);
    setFactoryDamage(0);
    setSaving('');
    // fetchData(); // fetchData doesn't seem to exist in this scope, removed
  }
  const handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  }
  {/** loading End */ }
  const relatedMonth = (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom && weekTo)
    ? `${dayjs(weekFrom).format('DD/MM/YY')} to ${dayjs(weekTo).format('DD/MM/YY')}`
    : dayjs(month).format('MMMM/YYYY');
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created PAYROLL ',
      reason: relatedMonth + ' PaySlip For ' + employeeName.name + ' / PR-' + String(ReferenceInfoNumber).padStart(6, '0'),
      dateNotification: new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data)
    } catch (error) {
      toast.error('Error creating notification.');
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    if (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
      if (!weekFrom || !weekTo) {
        alert("Please select the Work Period (From/To) for this Factory employee.");
        setSaving('');
        return;
      }

      // Check for overlapping periods
      try {
        const resPayrolls = await axios.get(`${ENDPOINT_URL}/payRoll`);
        const existingPayrolls = resPayrolls.data?.data?.filter(p => p.employeeName.id === employeeName.id);

        const newFrom = dayjs(weekFrom);
        const newTo = dayjs(weekTo);

        const overlap = existingPayrolls.find(p => {
          if (!p.weekFrom || !p.weekTo) return false;
          const exFrom = dayjs(p.weekFrom);
          const exTo = dayjs(p.weekTo);

          // Overlap logic: (StartA <= EndB) and (EndA >= StartB)
          return (newFrom.isSame(exTo) || newFrom.isBefore(exTo)) && 
                 (newTo.isSame(exFrom) || newTo.isAfter(exFrom));
        });

        if (overlap) {
          alert(`This employee has already been paid for the period: ${dayjs(overlap.weekFrom).format('DD/MM/YYYY')} to ${dayjs(overlap.weekTo).format('DD/MM/YYYY')}. Please choose a different range.`);
          setSaving('');
          return;
        }
      } catch (err) {
        toast.error('Error checking for overlapping payroll periods.');
      }
    }
    let status = ''
    if (parseInt(amountPayUSD) === 0 && parseInt(amountPayFC) === 0) {
      status = 'UnPaid'
    } else if (parseInt(CreditFC) === 0 && parseInt(CreditUSD) === 0) {
      status = 'Paid'
    } else {
      status = 'Partially-Paid'
    }
    const data = {
      _id: v4(),
      payNumber, payDate, month, daysW, status, daysOpen, Lops, basicSalary, earningSalary, advancedSalary, basicTransport, transportEarning, transportDeduction, foodBasic,
      foodEarning, itemLost, foodDeduction, bounceAllowances, bounceAllowancesEarning, other, otherEarning, loan,
      bonus, totalActualSalary, totalActualEarning, totalActualDeduction, totalNet, totalPaid, rate, totalPaidDollars, words,
      employeeName, amountPayUSD, amountPayFC, CreditFC, CreditUSD, synced: false,
      // Metadata
      factoryEarned, factoryDamage,
      weekFrom: weekFrom && dayjs(weekFrom).isValid() ? dayjs(weekFrom).format('YYYY-MM-DD') : null,
      weekTo: weekTo && dayjs(weekTo).isValid() ? dayjs(weekTo).format('YYYY-MM-DD') : null
    }
    try {
      const finalMonth = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom 
        ? dayjs(weekFrom).toISOString() 
        : month;
        
      const res = await axios.post(`${ENDPOINT_URL}/create-payRoll`, {
        payNumber, payDate, month: finalMonth, daysW, status, daysOpen, Lops, basicSalary, earningSalary, advancedSalary, basicTransport, transportEarning, transportDeduction, foodBasic,
        foodEarning, itemLost, foodDeduction, bounceAllowances, bounceAllowancesEarning, other, otherEarning, loan,
        bonus, totalActualSalary, totalActualEarning, totalActualDeduction, totalNet, totalPaid, rate, totalPaidDollars, words,
        employeeName, amountPayUSD, amountPayFC, CreditFC, CreditUSD,
        employeeDepartment, // Explicitly send department for server logic
        // FACTORY METADATA
        factoryEarned, factoryDamage,
        weekFrom: weekFrom && dayjs(weekFrom).isValid() ? dayjs(weekFrom).format('YYYY-MM-DD') : null,
        weekTo: weekTo && dayjs(weekTo).isValid() ? dayjs(weekTo).format('YYYY-MM-DD') : null
      });
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.payNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        handleOpen();
      }
    } catch (error) {
      if (error) {
        setSaving('');
        const msg = error.response && error.response.data && error.response.data.message 
          ? error.response.data.message 
          : error.message;
        handleError(msg);
      }
    }
  }
  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(sideBar && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Make new Payment
            </Typography>
            <IconButton onClick={handleOpenBack}>
              <ArrowBack style={{ color: 'white' }} />
            </IconButton>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant={window.innerWidth < 768 ? 'temporary' : 'permanent'} open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}>
            <SidebarDashE3 />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            width: '100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 4 }} >
            <div>
              <form onSubmit={handleSubmit}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='payDate'
                          label='Date'
                          value={dayjs(payDate)}
                          onChange={(date) => setPayDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='month'
                          label='Month of Payment'
                          value={dayjs(month)}
                          views={['month', 'year']}
                          onChange={(date) => setMonth(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disableClearable
                      options={employee}
                      getOptionLabel={(option) => option.employeeName || ""}
                      value={employee.find(e => e._id === employeeName.id) || null}
                      renderOption={(props, option) => (<Box {...props}>{option.employeeName}</Box>)}
                      renderInput={(params) => <TextField {...params} label="Employee Name" required />}
                      onChange={(e, newValue) => handleChange(newValue ? newValue : '')}
                      size='small'
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  {/* --- FACTORY WEEKLY DATE RANGE --- */}
                  {employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && (
                    <>
                      <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Pay Period — From"
                            value={weekFrom ? dayjs(weekFrom) : null}
                            onChange={(newValue) => setWeekFrom(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                            format="DD/MM/YYYY"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                helperText: "Start date of this factory pay week"
                              }
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Pay Period — To"
                            value={weekTo ? dayjs(weekTo) : null}
                            onChange={(newValue) => setWeekTo(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                            format="DD/MM/YYYY"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                helperText: "End date of this factory pay week"
                              }
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <table className="secondTable" style={{ width: '100%', maxWidth: '950px', margin: '0 auto', fontSize: '14px', marginBottom: '0px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          <th colSpan={5} style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#316FF6', color: 'white' }}>Global Gate</th>
                        </tr>
                        <tr>
                          <th style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} colSpan={5}>
                            {weekFrom && weekTo
                              ? `Salary Slip for Period: ${dayjs(weekFrom).format('DD/MM/YYYY')} to ${dayjs(weekTo).format('DD/MM/YYYY')}`
                              : `Salary Slip for the month Of: ${dayjs(month).format('MMMM-YYYY')}`
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Employee Name</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>{employeeName.name ? employeeName.name : ''}</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Total Days</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>
                            <TextField
                              size='small'
                              id='daysOpen'
                              name='daysOpen'
                              value={daysOpen}
                              onChange={(e) => setDaysOpen(e.target.value)}
                              style={{ width: '100px', backgroundColor: 'white' }}
                            /></td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Employee Details</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>{employeePhone ? employeePhone : ''}</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>LOPs</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>
                            <TextField
                              size='small'
                              id='Lops'
                              name='Lops'
                              value={Lops}
                              onChange={(e) => setLops(e.target.value)}
                              style={{ width: '100px', backgroundColor: 'white' }}
                            /></td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Employee Id</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>{employeeId ? employeeId : ''}</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Paid Days</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>
                            <TextField
                              size='small'
                              required
                              id='daysW'
                              name='daysW'
                              value={daysW !== 0 ? daysW : ''}
                              onChange={(e) => setDaysW(e.target.value)}
                              style={{ width: '100px', backgroundColor: 'white' }}
                            /></td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Grade</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>{employeeRole ? employeeRole : ''}</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Bank Name</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>{bankName !== undefined ? bankName : ''}</td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>Date</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>{dayjs(payDate).format('DD-MMMM-YYYY')}</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>A/C No.</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }}>{bankNo !== undefined ? bankNo : ''}</td>
                        </tr>
                        <tr>
                          <td style={{ width: '400px', border: '1px solid #DDD' }} colSpan={2}>Department</td>
                          <td style={{ width: '400px', border: '1px solid #DDD' }} colSpan={3}>{employeeDepartment ? employeeDepartment : ''}</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Earning (FC)</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Actual Salary (FC)</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Earnings (FC)</th>
                          <th style={{ padding: '5px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }} colSpan={2}>Deductions (FC)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Basic wage</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {basicSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicSalaryDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {earningSalary ? earningSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>In advanced allowances </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {advancedSalary !== undefined ? advancedSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicAdvancedDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Transport allowances</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {basicTransport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicTransportDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {transportEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicTransportEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Transport</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {transportDeduction !== undefined ? transportDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicTransportDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Food allowances</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {foodBasic.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicFoodDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {foodEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicFoodEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Food</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {foodDeduction !== undefined ? foodDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicFoodDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Bounce allowances 3%</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {bounceAllowances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicBounceDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {bounceAllowancesEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicBounceEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Loan recovery</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {loan !== undefined ? loan.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicLoanDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Other</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {other.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicOtherDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {otherEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicOtherEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Item lost recovery / Deduction</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {itemLost !== undefined ? itemLost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicItemDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Factory Pot</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {(isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {(isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Damage Penalty</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>
                            <p>FC {factoryDamage !== undefined ? factoryDamage.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {(isNaN(factoryDamage / rate) ? 0 : parseFloat(factoryDamage / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="secondTable" style={{ width: '100%', maxWidth: '950px', margin: '0 auto', fontSize: '14px', marginBottom: '5px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }} colSpan={6}>Total(FC)</td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderBottom: 'none' }} colSpan={2}><span>Total Basic:</span> <span> Fc {totalActualSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderBottom: 'none' }} colSpan={2}><span>Total Earning:</span> <span> Fc {totalActualEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderBottom: 'none' }} colSpan={2}><span>Total Deduction:</span> <span> Fc {totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderTop: 'none' }} colSpan={2}><span>Total Basic:</span> <span> $ {TotalBasicDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderTop: 'none' }} colSpan={2}><span>Total Earning:</span> <span> $ {TotalEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', borderTop: 'none' }} colSpan={2}><span>Total Deduction:</span> <span> $ {TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={2}>Net payable</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }} colSpan={4}>FC {totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Deduction</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={4}>FC {totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={2}>Overtime & Bonus</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={4}>FC {bonus.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {TotalBonusDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={2}>Total Paid</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={4}>FC {totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {TotalPAidDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }} colSpan={6}>Total net</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Net payable(FC)</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>FC {totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}><TextField
                            required
                            size='small'
                            id='rate'
                            value={rate !== 0 ? rate : ''}
                            placeholder='Rate'
                            onChange={(e) => setRate(e.target.value)}
                            style={{ width: '200px', backgroundColor: 'white' }}
                          /></td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Net payable($)</td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>$ {totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Amount Paid(FC)</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>
                            <TextField
                              size='small'
                              placeholder='Paying Amount FC'
                              name='amountPayFC'
                              onChange={(e) => setAmountPayFC(e.target.value)}
                              style={{ width: '200px', backgroundColor: 'white' }}
                            />
                          </td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}><TextField
                            required
                            size='small'
                            id='rate'
                            value={rate !== 0 ? rate : ''}
                            placeholder='Rate'
                            onChange={(e) => setRate(e.target.value)}
                            style={{ width: '200px', backgroundColor: 'white' }}
                          /></td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Amount Paid($)</td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>
                            <TextField
                              size='small'
                              name='amountPayUSD'
                              placeholder='Paying Amount USD'
                              onChange={(e) => setAmountPayUSD(e.target.value)}
                              style={{ width: '200px', backgroundColor: 'white' }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Credit(FC)</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={2}>FC {CreditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}><TextField
                            required
                            size='small'
                            id='rate'
                            value={rate !== 0 ? rate : ''}
                            placeholder='Rate'
                            onChange={(e) => setRate(e.target.value)}
                            style={{ width: '200px', backgroundColor: 'white' }}
                          /></td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Credit($)</td>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>$ {CreditUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #DDD' }} colSpan={1}>Net Words</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={5}>{words} Franc Congolais.</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                    }
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Box>
      </Box>
      <Modal
        open={open1}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseBack} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Do you want to stop creating Invoice ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>  </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/PayRollViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Modal
        open={loadingOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={() => handleDecision('stay')} className='btnCustomer'>
                  Add New
                </button>
                <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                  Go Back
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={ErrorOpenModal}
        onClose={handleCloseError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2 style={{ color: 'red' }}>Saving Failed</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                {serverErrorMsg || "Something went wrong. Please check your connection and try again."}
              </p>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  )
}
export default PayRollFormView
