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
import { v4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINT_URL } from '../../../apiConfig';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
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
function PayRollUpdateFormView() {
  const { id } = useParams()
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
          toast.error('Error fetching user data.');
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
  const [payDate, setPayDate] = useState('');
  const [month, setMonth] = useState('');
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
  const [reason, setReason] = useState("");

  const [factoryEarned, setFactoryEarned] = useState(0);
  const [factoryDamage, setFactoryDamage] = useState(0);
  const [weekFrom, setWeekFrom] = useState(null);
  const [weekTo, setWeekTo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-payRoll/${id}`)
        setPayNumber(Number(res.data?.data?.payNumber || res.data?.payNumber || 0));
        setPayDate(res.data.data.payDate);
        setMonth(res.data.data.month);
        setDaysW(res.data.data.daysW);
        setDaysOpen(res.data.data.daysOpen);
        setLops(res.data.data.Lops);
        setEmployeeName(res.data.data.employeeName);
        setBasicSalary(res.data.data.basicSalary !== undefined ? res.data.data.basicSalary : 0);
        setEarningSalary(res.data.data.earningSalary);
        setAdvancedSalary(res.data.data.advancedSalary);
        setBasicTransport(res.data.data.basicTransport !== undefined ? res.data.data.basicTransport : 0);
        setTransportEarning(res.data.data.transportEarning);
        setTransportDeduction(res.data.data.transportDeduction);
        setFoodBasic(res.data.data.foodBasic !== undefined ? res.data.data.foodBasic : 0);
        setFoodEarning(res.data.data.foodEarning);
        setItemLost(res.data.data.itemLost);
        setFoodDeduction(res.data.data.foodDeduction);
        setBounceAllowances(res.data.data.bounceAllowances !== undefined ? res.data.data.bounceAllowances : 0);
        setBounceAllowancesEarning(res.data.data.bounceAllowancesEarning);
        setOther(res.data.data.other);
        setOtherEarning(res.data.data.otherEarning);
        setLoan(res.data.data.loan);
        setBonus(res.data.data.bonus);
        setRate(res.data.data.rate);
        setAmountPayFC(res.data.data.amountPayFC);
        setAmountPayUSD(res.data.data.amountPayUSD);
        // Load Factory Data
        if (res.data.data.factoryEarned !== undefined) setFactoryEarned(res.data.data.factoryEarned);
        if (res.data.data.factoryDamage !== undefined) setFactoryDamage(res.data.data.factoryDamage);
        if (res.data.data.weekFrom) setWeekFrom(dayjs(res.data.data.weekFrom).format('YYYY-MM-DD'));
        if (res.data.data.weekTo) setWeekTo(dayjs(res.data.data.weekTo).format('YYYY-MM-DD'));
      } catch (error) {
        toast.error('Error fetching payroll data.');
      }
    }
    fetchData()
  }, [])
  // Add Other And Bonus.
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/employee`)
        setEmployee(res.data?.data?.filter((row) => row.status === 'Employed' || row.status === 'Resign'));
        const resPRate = await axios.get(`${ENDPOINT_URL}/paymentRate`);
        (resPRate.data?.data || []).map((row) => setRate(row.paymentRate));
        res.data?.data?.filter((row) => row._id === employeeName.id).map((row) => setEmployeeId(row.employeeId))
        res.data?.data?.filter((row) => row._id === employeeName.id).map((row) => setEmployeeRole(row.employeeRole))
        res.data?.data?.filter((row) => row._id === employeeName.id).map((row) => setEmployeeDepartment(row.department))
        res.data?.data?.filter((row) => row._id === employeeName.id).map((row) => setEmployeePhone(row.employeePhone))
      } catch (error) {
        toast.error('Error fetching employee or rate data.');
      }
    }
    handleFetch()
  }, [employeeName])
  useEffect(() => {
    const fetchExpense = async () => {
      setLoading(true);
      try {
        const inRange = (dStr) => {
          if (!dStr) return false;
          const d = dayjs(dStr);
          if (weekFrom && weekTo) {
            return (d.isSame(weekFrom, 'day') || d.isAfter(weekFrom)) && (d.isSame(weekTo, 'day') || d.isBefore(weekTo));
          }
          return d.format('MM/YYYY') === dayjs(month).format('MM/YYYY');
        };

        const res = await axios.get(`${ENDPOINT_URL}/expense?summary=true`);
        const allExpenses = res.data.data || [];

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

        setTransportDeduction(getSum(['TRANSPORT']));
        setFoodDeduction(getSum(['FOOD']));
        setAdvancedSalary(getSum(['ADVANCED', 'ACCOMPTE', 'AVANCE']));
        setLoan(getSum(['LOAN', 'PRET']));
        setItemLost(getSum(['ITEM LOST', 'PERDU', 'DEDUCTION']));
        setBonus(getSum(['BONUS']));

        // FACTORY CALCULATIONS
        const isRangeMode = weekFrom && weekTo && weekFrom.isBefore(weekTo.add(1, 'day'));
        if (isRangeMode && employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
          // Only recalculate if explicitly asked or if data is missing, 
          // but for consistency with FormView, we recalculate here.
          const configRes = await axios.get(`${ENDPOINT_URL}/block-config`);
          const config = configRes.data?.data?.[0];
          const rates = config?.laborRates || {
            rate50_33: { perSack: 10000 },
            rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_rate: 19000 },
            rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_rate: 19000 },
            rate10_14_12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_rate: 19500 }
          };

          const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
          const damRes = await axios.get(`${ENDPOINT_URL}/block-damage`);
          const allRuns = prodRes.data?.data || [];
          const runs = uniqueById(allRuns).filter(r => inRange(r.date));
          const damages = damRes.data?.data?.filter(d => inRange(d.productionDate || d.date)) || [];

          const normalize = (n) => n?.toString().trim().toUpperCase().replace(/\s+/g, ' ') || '';
          const targetName = normalize(employeeName.name);

          const calculateWorkerShare = (typeStr, s, e, half) => {
            if (typeStr.includes("50") || typeStr.includes("33")) return half ? (s * 10000) / 2 : (s * 10000) / e;
            let r = typeStr.includes("20") ? rates.rate20 : (typeStr.includes("15") ? rates.rate15 : rates.rate10_14_12);
            if (!r) return 0;
            const sacks = parseInt(s) || 0;
            let rate = 0;
            if (half) rate = sacks <= r.t1_sacks ? (r.t1_rate * sacks) / 2 : r.t2_rate / 2;
            else {
              if (sacks <= r.t1_sacks) rate = r.t1_rate * sacks;
              else if (sacks <= r.t2_sacks) rate = r.t2_rate;
              else rate = r.t3_rate || r.t5_rate || 24500;
            }
            return rate;
          };

          const resMixer = await axios.get(`${ENDPOINT_URL}/block-mixer`);
          const mixerRecords = resMixer.data?.data || [];
          const standardSpots = 3;
          let earned = 0;

          // Calculate direct machine earnings and populate mixer pool
          runs.forEach(run => {
            const workers = [
              { n: run.operatorName, h: run.halfDayOperator },
              { n: run.helper1, h: run.halfDayHelper1 },
              { n: run.helper2, h: run.halfDayHelper2 },
              { n: run.helper3, h: run.halfDayHelper3 }
            ].filter(w => w.n);

            const calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, standardSpots, false);
            let unitShare = calculatedUnit;

            if (run.laborPot) {
              const weightedCrewCount = workers.reduce((sum, w) => sum + (w.h ? 0.5 : 1), 0);
              const oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
              const newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
              if (newSchemaDiff < oldSchemaDiff) {
                  unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
              } else {
                  unitShare = run.laborPot / (weightedCrewCount + 1);
              }
            }

            const me = workers.find(w => normalize(w.n) === targetName);
            if (me) {
              earned += me.h ? unitShare / 2 : unitShare;
            }
          });

            // Calculate and Distribute Mixer Shares
            const mixerDays = [...new Set(mixerRecords.filter(m => inRange(m.date)).map(m => m.date))];
            const mixerRate = config?.mixerRatePerSack !== undefined ? config.mixerRatePerSack : 300;
            
            mixerDays.forEach(dateStr => {
                const dateFormatted = dayjs(dateStr).format('YYYY-MM-DD');
                const runsOnDate = allRuns.filter(r => dayjs(r.date).format('YYYY-MM-DD') === dateFormatted);
                const totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);
    
                const mixersOnDate = mixerRecords.filter(m => m.date === dateStr);
                if (mixersOnDate.length === 0) return;
    
                mixersOnDate.forEach(w => {
                    if (w.workerName && normalize(w.workerName) === targetName) {
                        const basePayout = totalSacksOnDate * mixerRate;
                        const share = w.halfDay ? basePayout * 0.5 : basePayout;
                        earned += share;
                    }
                });
            });

          let damage = 0;
          damages.forEach(d => {
            const match = allRuns.find(r => r.machineNo === d.machineNo && r.blockType === d.blockType && dayjs(r.date).isSame(dayjs(d.productionDate || d.date), 'day'));
            if (match) {
              const workers = [match.operatorName, match.helper1, match.helper2, match.helper3].filter(n => n);
              if (workers.map(n => normalize(n)).includes(targetName)) {
                damage += ((d.damagedBlocks * (d.damageRate || 3000)) / workers.length);
              }
            }
          });

          setFactoryEarned(earned);
          setFactoryDamage(damage);
        }
      } catch (error) {
        toast.error('Error fetching expense or factory data.');
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
  const handleClearEmployee = () => {
    setEmployeeName({
      id: "",
      name: ""
    });
  }
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
    const dividedSalary = basicSalary / daysOpen
    const totalEarningSalary = isNaN(daysW * dividedSalary) ? 0 : parseFloat(daysW * dividedSalary)
    setEarningSalary(totalEarningSalary)
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
  }, [basicSalary, daysW, basicTransport, foodBasic, bounceAllowances, other, daysOpen])

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
  const [open2, setOpen2] = useState(false);

  const handleOpenUpdateReason = (e) => {
    e.preventDefault()
    setOpen2(true);
  };
  const handleCloseUpdateReason = () => {
    setOpen2(false);
  };

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
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }

  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    navigate(-1);
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
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify PAYROLL ' + ' PR-' + String(payNumber).padStart(6, '0'),
      reason,
      dateNotification: new Date()
    };
    try {
      const res = await axios.post(`${ENDPOINT_URL}/create-notification/`, data)
      if (res) {
        setReason("");
      }
    } catch (error) {
      if (error) {
        handleError();
      }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
      if (!weekFrom || !weekTo) {
        alert("Please select the Work Period (From/To) for this Factory employee.");
        return;
      }
    }
    const data = {
      payDate,
      month,
      daysW, status,
      daysOpen, Lops, basicSalary, earningSalary, advancedSalary, basicTransport, transportEarning, transportDeduction, foodBasic,
      foodEarning, itemLost, foodDeduction, bounceAllowances, bounceAllowancesEarning, other, otherEarning, loan,
      bonus, totalActualSalary, totalActualEarning, totalActualDeduction, totalNet, totalPaid, rate, totalPaidDollars, words,
      employeeName, amountPayUSD, amountPayFC, CreditFC, CreditUSD, updateS: false,
      employeeDepartment, // Explicitly send department
      // Metadata
      factoryEarned, factoryDamage,
      weekFrom: weekFrom && dayjs(weekFrom).isValid() ? dayjs(weekFrom).format('YYYY-MM-DD') : null,
      weekTo: weekTo && dayjs(weekTo).isValid() ? dayjs(weekTo).format('YYYY-MM-DD') : null
    }
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-payRoll/${id}`, data);
      if (res) {
        // Open Loading View
        handleCreateComment()
        handleOpen();
      }
    } catch (error) {
      if (error) {
        handleError();
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
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
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
              <form onSubmit={handleOpenUpdateReason}>
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

                  {employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && (
                    <>
                      <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker']}>
                            <DatePicker
                              label="Pay Period - FROM"
                              value={weekFrom ? dayjs(weekFrom) : null}
                              onChange={(val) => setWeekFrom(val && val.isValid() ? val.format('YYYY-MM-DD') : null)}
                              sx={{ width: '100%', backgroundColor: 'white' }}
                              format="DD/MM/YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker']}>
                            <DatePicker
                              label="Pay Period - TO"
                              value={weekTo ? dayjs(weekTo) : null}
                              onChange={(val) => setWeekTo(val && val.isValid() ? val.format('YYYY-MM-DD') : null)}
                              sx={{ width: '100%', backgroundColor: 'white' }}
                              format="DD/MM/YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={10}>
                    {
                      employeeName.name !== '' ? (
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <TextField
                            disabled
                            id='employeeName'
                            name='employeeName'
                            label='Employee Name'
                            value={employeeName.name ? employeeName.name : ''}
                            sx={{ width: '100%', backgroundColor: 'white' }}
                          />
                          <BlackTooltip title="Clear" placement='right'>
                            <IconButton onClick={handleClearEmployee} style={{ position: 'relative', float: 'right' }}>
                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                            </IconButton>
                          </BlackTooltip>
                        </div>
                      ) : (
                        <Autocomplete
                          disableClearable
                          options={employee}
                          getOptionLabel={(option) => option.employeeName}
                          renderOption={(props, option) => (<Box {...props}>{option.employeeName}</Box>)}
                          renderInput={(params) => <TextField {...params} label="Employee Name" required />}
                          onChange={(e, newValue) => handleChange(newValue ? newValue : '')}
                          size='small'
                          sx={{ width: '100%', backgroundColor: 'white' }}
                        />
                      )
                    }

                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id='employeeId'
                      name='employeeId'
                      label='Id'
                      value={employeeId !== undefined ? employeeId : ''}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      size='small'
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <table className="secondTable" style={{ fontSize: '20px', marginBottom: '0px', border: '1px solid #DDD' }}>
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
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Basic wage</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {basicSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicSalaryDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {earningSalary ? earningSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>In advanced allowances </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {advancedSalary !== undefined ? advancedSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicAdvancedDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Transport allowances</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {basicTransport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicTransportDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {transportEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicTransportEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Transport</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {transportDeduction !== undefined ? transportDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicTransportDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Food allowances</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {foodBasic.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicFoodDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {foodEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicFoodEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Food</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {foodDeduction !== undefined ? foodDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicFoodDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Bounce allowances 3%</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {bounceAllowances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicBounceDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {bounceAllowancesEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicBounceEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Loan recovery</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {loan !== undefined ? loan.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicLoanDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Other</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {other.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicOtherDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {otherEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {basicOtherEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '1.2' }}>Item lost recovery / Deduction</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {itemLost !== undefined ? itemLost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {basicItemDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Factory Pot</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {(isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            <p>$ {(isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>Damage Penalty</td>
                          <td style={{ width: '200px', border: '1px solid #DDD', lineHeight: '5px' }}>
                            <p>FC {factoryDamage !== undefined ? factoryDamage.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</p>
                            <p>$ {(isNaN(factoryDamage / rate) ? 0 : parseFloat(factoryDamage / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="secondTable" style={{ fontSize: '20px', marginBottom: '5px', border: '1px solid #DDD' }}>
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
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={4}>FC {totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
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
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={0}>FC {totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={0}>
                            <TextField
                              size='small'
                              placeholder='Paying Amount FC'
                              name='amountPayFC'
                              value={amountPayFC !== undefined ? amountPayFC : 0}
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
                              value={amountPayUSD !== undefined ? amountPayUSD : 0}
                              placeholder='Paying Amount USD'
                              onChange={(e) => setAmountPayUSD(e.target.value)}
                              style={{ width: '200px', backgroundColor: 'white' }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '5px', border: '1px solid #DDD', textAlign: 'center' }}>Credit(FC)</td>
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={0}>FC {CreditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
                          <td style={{ width: '200px', border: '1px solid #DDD' }} colSpan={4}>{words} Franc Congolais.</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
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
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleCloseUpdateReason}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdateReason} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='comments'
                  name='comments'
                  multiline
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  label='Comments'
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

        </Box>
      </Modal>
    </div >
  )
}

export default PayRollUpdateFormView
