import React, { useEffect, useState } from 'react'
import './view.css'
import SidebarDash from '../component/SidebarDash'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import { IconButton, Paper, TextField, Typography, styled, Backdrop, Modal, Box, Grid, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from 'axios';
import Loader from '../component/Loader';
import { useNavigate, NavLink } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { AddCard, BackHandOutlined, Close, GroupAdd, GroupOutlined, GroupRemove, MailOutline, NotificationAdd, Person2Sharp, PersonAddDisabled, PriceChange, Sell, ShoppingBagOutlined, ShoppingCart, Square } from '@mui/icons-material';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
  LineChart, LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Store from '@mui/icons-material/Store';
import Payment from '@mui/icons-material/Payment';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import { axisClasses } from '@mui/x-charts';
import Visibility from '@mui/icons-material/Visibility';
import RevenueExpensesAll from './PageView/DashboardInfo/RevenueExpensesAll';
import PaymentReportInf from './PageView/DashboardInfo/PaymentReportInf';
import DailyExpensesReportInfo from './PageView/DashboardInfo/DailyExpensesReportInfo';
import ItemPurchaseReportInfo from './PageView/DashboardInfo/ItemPurchaseReportInfo';
import PayRollReportInfo from './PageView/DashboardInfo/PayRollReportInfo';
import MaintenanceReportInfo from './PageView/DashboardInfo/MaintenanceReportInfo';
import ProjectReportInfo from './PageView/DashboardInfo/ProjectReportInfo';
import InvoiceReportInfo from './PageView/DashboardInfo/InvoiceReportInfo';
import ItemReportInfo from './PageView/DashboardInfo/ItemReportInfo';
import PosReportInvoice from './PageView/DashboardInfo/PosReportInvoice';

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
const pData1 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels1 = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
function AdminHome() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role }));
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
  const [payment1, setPayment] = useState([]);
  const [payRoll, setPayRoll] = useState([]);
  const [itemPurchaseInfo, setItemPurchase] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [posInvoice, setPosInvoice] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [relatedMaintenance, setRelatedMaintenance] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [employeeAttendance, setAttendance] = useState([]);
  const [notification, setNotification] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [project, setProject] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customer1, setCustomer1] = useState([]);
  const [itemsValue, setItemValue] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [date, setDate] = useState(() => {
    const date1 = new Date()
    return date1
  });
  // const targetTime = dayjs().hour(7).minute(30)
  useEffect(() => {
    const fetchAll = async () => {
      if (navigator.onLine && !user.isHibernating) {
        try {
          const currentYear = dayjs(date).format('YYYY');
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/customer')
          const CustomerInfo = res.data.data.map((item) => ({
            ...item,
            id: item._id,
          }))
          setCustomer(CustomerInfo.filter((row) => row.credit !== undefined && row.credit > 0))
          setCustomer1(res.data.data);
          const resExpenses = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/dailyExpense-Information?page=1&limit=1000&filterField=expenseDate&filterValue=${currentYear}`);
          setExpenses(resExpenses.data.itemI);
          const resItemPurchase = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/itemPurchase')
          setItemPurchase(resItemPurchase.data.data.filter(row => dayjs(row.itemPurchaseDate).format('YYYY') === currentYear && (row.status === undefined || row.status === "Paid")))
          const resPayRoll = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/payRoll')
          setPayRoll(resPayRoll.data.data.filter(row => dayjs(row.month).format('YYYY') === currentYear))
          const resPayment = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/payment')
          setPayment(resPayment.data.data.filter(row => dayjs(row.paymentDate).format('YYYY') === currentYear).map((row) => ({
            ...row,
            amount: row.amount - row.remaining
          })))
          const resPosInvoice = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/pos-Information?page=1&limit=500&filterField=invoiceDate&filterValue=${currentYear}`)
          setPosInvoice(resPosInvoice.data.itemI.filter((row) => row.status === 'Paid').map((row) => ({
            ...row,
            id: row._id,
            factureNumber: 'S-00' + row.factureNumber,
            dateField: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
            time: dayjs(row.time).format('HH:mm'),
            items: row.items.map((Item) => ({
              ...Item,
              totalRevenueInfo: Item.itemQty * Item.itemRate,
              totalCostInfo: Item.itemQty * Item.itemCost,
            })),
            infoSell: Math.round(((row.TotalAmountPaid - row.tax) / row.rate) * 100) / 100,
            infoSellFC: row.TotalAmountPaid,
            TaxUSd: Math.round((row.tax / row.rate) * 100) / 100,
            infoCost: (row.items.reduce((sum, ITem) => sum + (ITem.itemQty * ITem.itemCost), 0)) / row.rate,
            infoCostFC: (row.items.reduce((sum, ITem) => sum + (ITem.itemQty * ITem.itemCost), 0))
          })).reverse())
          const resItem = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item-shop?page=1&limit=500')
          const ItemInfo = resItem.data.items.map((item) => ({
            ...item,
            id: item._id,
            ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
          }))
          setItem(ItemInfo.reverse())
          const resCode = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/itemCode')
          setCategory(resCode.data.data)
          const resInvoice = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/invoice')
          setInvoice(resInvoice.data.data.filter((row) => row.status === 'Paid' && dayjs(row.invoiceDate).format('YYYY') === currentYear).map((row) => ({
            ...row,
            id: row._id,
            invoiceNumber: 'INV-' + row.invoiceNumber,
            dateField: row.invoiceDate !== null ? dayjs(row.invoiceDate).format('DD/MM/YYYY') : '',
            items: row.items.map((Item) => ({
              ...Item,
              totalRevenueInfo: Item.itemOut * Item.itemRate,
              totalCostInfo: Item.itemOut * Item.itemCost,
            })),
            infoSell: row.totalInvoice,
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
          })).reverse())

          const resMaintenance = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/maintenance')
          setRelatedMaintenance(resMaintenance.data.data)
          setMaintenance(resMaintenance.data.data.filter((row) => row.status === 'Close' && dayjs(row.serviceDate).format('YYYY') === currentYear).map((row) =>
          ({
            ...row,
            id: row._id,
            serviceNumber: "M-00" + row.serviceNumber,
            dateField: dayjs(row.serviceDate).format('DD/MM/YYYY'),
            items: row.items.map((Item) => ({
              ...Item,
              totalRevenueInfo: Item.itemQty * Item.itemRate,
              totalCostInfo: Item.itemOut * Item.itemCost,
            })),
            infoSell: row.subTotal,
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
          })).reverse())
          const resPurchase = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/purchase')
          setPurchase(resPurchase.data.data.map((row) => {
            const relatedInvoice = resInvoice.data.data.find((Item) => Item.ReferenceName2 === row._id)
            return ({
              ...row,
              RelatedInvoice: relatedInvoice,
              items: row.items.map((Item1) => ({
                ...Item1,
                totalCostInfo: Item1.itemOut * Item1.itemCost
              })),
              infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
            })
          }))
          const resProject = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
          setProject(resProject.data.data.filter((row) => row.status === 'Completed').map((row) => ({
            ...row,
            id: row._id,
            projectNumber: "P-00" + row.projectNumber,
            visitField: dayjs(row.visitDate).format('DD/MM/YYYY'),
            startField: dayjs(row.startDate).format('DD/MM/YYYY'),
          })))
          const resEmployee = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
          setEmployee(resEmployee.data.data.reverse())
          const resAttendance = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employeeattendance')
          setAttendance(resAttendance.data.data.filter((row) => dayjs(row.timeIn).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY') && (row.observation === 'P' || row.observation === 'S' || row.observation === 'A' || row.observation === 'H')))
          const resNotification = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/notification')
          setNotification(resNotification.data.data.filter((row) => dayjs(row.dateNotification).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY')).reverse())
        } catch (error) {
          console.error("Error in fetchAll:", error);
        }
      } else {
        const offLineExpenses = await db.dailyExpenseSchema.toArray();
        setExpenses(offLineExpenses.filter(row => dayjs(row.expenseDate).format('YYYY') === dayjs(date).format('YYYY')));
        const offLineItemPurchase = await db.itemPurchaseSchema.toArray();
        setItemPurchase(offLineItemPurchase.filter(row => dayjs(row.itemPurchaseDate).format('YYYY') === dayjs(date).format('YYYY') && (row.status === undefined || row.status === "Paid")));
        const offLinePayRoll = await db.payRollSchema.toArray();
        setPayRoll(offLinePayRoll.filter(row => dayjs(row.month).format('YYYY') === dayjs(date).format('YYYY')));
        const offLinePayment = await db.paymentSchema.toArray();
        setPayment(offLinePayment.filter(row => dayjs(row.paymentDate).format('YYYY') === dayjs(date).format('YYYY')).map((row) => ({
          ...row,
          amount: row.amount - row.remaining
        })));
        const offLineItem = await db.itemSchema.toArray();
        setItem(offLineItem.map((item) => ({
          ...item,
          id: item._id,
          ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
        })))
        const offLineItemCode1 = await db.itemCodeSchema.toArray();
        setCategory(offLineItemCode1.reverse());
        const offLineInvoice = await db.invoiceSchema.toArray();
        setInvoice(offLineInvoice.filter((row) => row.status === 'Paid').map((row) => ({
          ...row,
          id: row._id,
          invoiceNumber: 'INV-' + row.invoiceNumber,
          dateField: row.invoiceDate !== null ? dayjs(row.invoiceDate).format('DD/MM/YYYY') : '',
          items: row.items.map((Item) => ({
            ...Item,
            totalRevenueInfo: Item.itemOut * Item.itemRate,
            totalCostInfo: Item.itemOut * Item.itemCost,
          })),
          infoSell: row.totalInvoice,
          infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
        })).reverse())
        const offLinePosInvoice = await db.posSchema.toArray();
        setPosInvoice(offLinePosInvoice.filter((row) => row.status === 'Paid').map((row) => ({
          ...row,
          id: row._id,
          factureNumber: 'S-00' + row.factureNumber,
          dateField: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
          time: dayjs(row.time).format('HH:mm'),
          items: row.items.map((Item) => ({
            ...Item,
            totalRevenueInfo: Item.itemQty * Item.itemRate,
            totalCostInfo: Item.itemQty * Item.itemCost,
          })),
          infoSell: Math.round(((row.TotalAmountPaid - row.tax) / row.rate) * 100) / 100,
          infoSellFC: row.TotalAmountPaid,
          TaxUSd: Math.round((row.tax / row.rate) * 100) / 100,
          infoCost: (row.items.reduce((sum, ITem) => sum + (ITem.itemQty * ITem.itemCost), 0)) / row.rate,
          infoCostFC: (row.items.reduce((sum, ITem) => sum + (ITem.itemQty * ITem.itemCost), 0))
        })).reverse())

        const offLineMaintenance = await db.maintenanceSchema.toArray();
        setRelatedMaintenance(offLineMaintenance)
        setMaintenance(offLineMaintenance.filter((row) => row.status === 'Close').map((row) =>
        ({
          ...row,
          id: row._id,
          serviceNumber: "M-00" + row.serviceNumber,
          dateField: dayjs(row.serviceDate).format('DD/MM/YYYY'),
          items: row.items.map((Item) => ({
            ...Item,
            totalRevenueInfo: Item.itemQty * Item.itemRate,
            totalCostInfo: Item.itemOut * Item.itemCost,
          })),
          infoSell: row.subTotal,
          infoCost: row.items.reduce((sum, ITem) => sum + ITem.totalCostInfo, 0),
        })).reverse())
        const offLinePurchase = await db.purchaseSchema.toArray();
        setPurchase(offLinePurchase.map((row) => {
          const relatedInvoice = offLineInvoice.find((Item) => Item.ReferenceName2 === row._id)
          return ({
            ...row,
            RelatedInvoice: relatedInvoice,
            items: row.items.map((Item1) => ({
              ...Item1,
              totalCostInfo: Item1.itemOut * Item1.itemCost
            })),
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
          })
        }))
        const offLineProject = await db.projectSchema.toArray();
        setProject(offLineProject.filter((row) => row.status === 'Completed').map((row) => ({
          ...row,
          id: row._id,
          projectNumber: "P-00" + row.projectNumber,
          visitField: dayjs(row.visitDate).format('DD/MM/YYYY'),
          startField: dayjs(row.startDate).format('DD/MM/YYYY'),
        })))
        const offLineAttendance = await db.employeeAttendanceSchema.toArray();
        setAttendance(offLineAttendance.filter((row) => dayjs(new Date(row.timeIn)).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY') && (row.observation === 'P' || row.observation === 'S' || row.observation === 'A' || row.observation === 'H')))
        const offLineEmployee = await db.employeeSchema.toArray();
        setEmployee(offLineEmployee)
      }
    }
    fetchAll()
  }, [date, user.isHibernating])

  const fetchValue = async () => {
    try {
      const resItemOutItemReturn = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/item-usage')
      setItemValue(resItemOutItemReturn.data?.map((item) => ({
        ...item,
        id: item.itemId,
        ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
      })))
    } catch (error) {
      console.log(error)
    }
  }
  const payment = [];

  payment1.forEach(row => {
    payment.push({
      _id: row._id,
      paymentNumber: 'PAY-0' + row.paymentNumber,
      customerName: row.customerName,
      paymentDate: row.paymentDate,
      TotalAmount: row.TotalAmount,
      description: row.description,
      PaymentReceivedFC: row.PaymentReceivedFC,
      PaymentReceivedUSD: row.PaymentReceivedUSD,
      remaining: row.remaining,
      amount: row.amount,
      bankCharge: row.bankCharge,
      modes: row.modes
    })
  })
  posInvoice.forEach(row => {
    payment.push({
      _id: row._id,
      paymentNumber: row.factureNumber,
      customerName: row.customerName,
      paymentDate: row.invoiceDate,
      TotalAmount: [],
      description: "Shop",
      PaymentReceivedFC: 0,
      PaymentReceivedUSD: 0,
      remaining: 0,
      amount: row.TotalAmountPaid / row.rate,
      bankCharge: 0,
      modes: ""
    })
  })

  const itemPurchase = [];

  itemPurchaseInfo.forEach(row => {
    itemPurchase.push({
      _id: row._id,
      itemPurchaseNumber: 'IP-0' + row.itemPurchaseNumber,
      itemPurchaseDate: row.itemPurchaseDate,
      projectName: row.projectName,
      manufacturer: row.manufacturer,
      manufacturerNumber: row.manufacturerNumber,
      description: row.description,
      totalFC: row.totalFC,
      total: row.total,
      amount: row.totalUSD !== undefined ? row.totalUSD : row.total
    })
  })



  const projectWithAll = project.map((row) => {
    const relatedExpenses = expenses.filter((row2) => row2.accountNameInfo !== undefined ? row2.accountNameInfo._id === row._id : null)
    const relatedPurchase = purchase.filter((row3) => row3.projectName._id === row._id)
    return ({
      ...row,
      expenses: relatedExpenses,
      relatedPurchase,
      totalSell: relatedPurchase.filter((item) => item.RelatedInvoice !== undefined).reduce((sum, item) => sum + parseFloat(item.RelatedInvoice.totalInvoice), 0),
      totalExpenses: relatedExpenses?.reduce((sum, item) => sum + parseFloat(item.total), 0),
      totalItemCost: relatedPurchase?.reduce((sum, item) => sum + parseFloat(item.infoCost), 0)
    })
  })
  const filterInvoice = invoice.filter((row) =>
    !purchase.some((Item) => Item._id === row.ReferenceName2) && !relatedMaintenance.some((Item2) => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName)
  )

  const totalSellInvoice = filterInvoice.length > 0 ? filterInvoice.reduce((sum, item) => sum + parseFloat(item.infoSell), 0) : 0
  const totalCostInvoice = filterInvoice.length > 0 ? filterInvoice.reduce((sum, item) => sum + parseFloat(item.infoCost), 0) : 0
  const invoiceRevenue = totalSellInvoice - totalCostInvoice

  const totalPOSSellInvoice = posInvoice.length > 0 ? posInvoice.reduce((sum, item) => sum + parseFloat(item.infoSell), 0) : 0
  const totalPOSCostInvoice = posInvoice.length > 0 ? posInvoice.reduce((sum, item) => sum + parseFloat(item.infoCost), 0) : 0
  const invoicePOSRevenue = totalPOSSellInvoice - totalPOSCostInvoice



  const projectCostInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.relatedPurchase.reduce((sum, item) => sum + parseFloat(item.infoCost), 0) }, 0) : 0
  const projectExpensesInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.expenses.reduce((sum, item) => sum + parseFloat(item.total), 0) }, 0) : 0
  const projectSellInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.relatedPurchase.filter((item) => item.RelatedInvoice !== undefined).reduce((sum, item) => sum + parseFloat(item.RelatedInvoice.totalInvoice), 0) }, 0) : 0
  const projectRevenue = projectSellInfo - (projectCostInfo + projectExpensesInfo)


  const totalMaintenanceRevenue = maintenance.length > 0 ? maintenance.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemAmount), 0) }, 0) : 0
  const totalMaintenanceCost = maintenance.length > 0 ? maintenance.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.totalCostInfo), 0) }, 0) : 0
  const totalMaintenanceLaborFees = maintenance.filter((row) => row.totalLaborFeesGenerale !== undefined).reduce((sum, row) => sum + row.totalLaborFeesGenerale, 0)


  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  //Month Payment Start
  const TotalMonthPayment = payment ? payment.reduce((acc, item) => {
    const month = dayjs(item.paymentDate).format('MMMM');
    const year = dayjs(item.paymentDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = { year, month, amount: 0 }
    }
    acc[month].amount += parseFloat(item.amount)
    return acc
  }, {}) : ''
  const newMonthArrayPayment = (Object.entries(TotalMonthPayment).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.amount.toFixed(2)), year: total.year
  })))
  const sortArrayByMonthPayment = newMonthArrayPayment.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  }).filter(row => {
    const rowDate = dayjs(row.year).format('YYYY');
    return rowDate === dayjs(date).format('YYYY')
  })
  const totalRevenue = sortArrayByMonthPayment.reduce((sum, row) => sum + row.total, 0)

  //Month Payment End
  //Daily Expenses Start
  const TotalMonthDailyExpenses = expenses ? expenses.reduce((acc, item) => {
    const month = dayjs(item.expenseDate).format('MMMM');
    const year = dayjs(item.expenseDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = { year, month, total: 0 }
    }
    acc[month].total += parseFloat(item.total)
    return acc
  }, {}) : ''
  const newMonthArrayDailyExpenses = (Object.entries(TotalMonthDailyExpenses).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.total.toFixed(2)), year: total.year
  })))
  const sortArrayByMonthDailyExpenses = newMonthArrayDailyExpenses.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalDailyExpenses = sortArrayByMonthDailyExpenses.reduce((sum, row) => sum + row.total, 0)


  //Daily Expenses End
  //PayRoll Start
  const TotalMonthPayRoll = payRoll ? payRoll.reduce((acc, item) => {
    const month = dayjs(item.month).format('MMMM');
    const year = dayjs(item.month).format('YYYY');
    if (!acc[month]) {
      acc[month] = { year, month, totalPaidDollars: 0 }
    }
    acc[month].totalPaidDollars += parseFloat(item.totalPaidDollars)
    return acc
  }, {}) : ''
  const newMonthArrayPayRoll = (Object.entries(TotalMonthPayRoll).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.totalPaidDollars.toFixed(2)), year: total.year
  })))
  const sortArrayByMonthPayRoll = newMonthArrayPayRoll.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalPayRoll = sortArrayByMonthPayRoll.reduce((sum, row) => sum + row.total, 0);
  //PayRoll End
  //Item Purchase Start
  const TotalMonthItemPurchase = itemPurchase ? itemPurchase.reduce((acc, item) => {
    const month = dayjs(item.itemPurchaseDate).format('MMMM');
    const year = dayjs(item.itemPurchaseDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = { year, month, total: 0 }
    }
    acc[month].total += parseFloat(item.amount)
    return acc
  }, {}) : ''
  const newMonthArrayItemPurchase = (Object.entries(TotalMonthItemPurchase).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.total.toFixed(2)), year: total.year
  })))
  const sortArrayByMonth = newMonthArrayItemPurchase.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalItemPurchase = sortArrayByMonth.reduce((sum, row) => sum + row.total, 0);

  const mergeArrays = (sortArrayByMonthDailyExpenses, sortArrayByMonthPayRoll, sortArrayByMonth) => {
    const merged = {};
    sortArrayByMonthDailyExpenses.forEach(item => {
      if (!merged[item.month]) {
        merged[item.month] = { ...item, total: 0 }
      }
      merged[item.month].total += parseFloat(item.total)
    });
    sortArrayByMonthPayRoll.forEach(item => {
      if (!merged[item.month]) {
        merged[item.month] = { ...item, total: 0 }
      }
      merged[item.month].total += parseFloat(item.total)
    });
    sortArrayByMonth.forEach(item => {
      if (!merged[item.month]) {
        merged[item.month] = { ...item, total: 0 }
      }
      merged[item.month].total += parseFloat(item.total)
    });
    return Object.values(merged)
  }
  const mergedArray = mergeArrays(sortArrayByMonthDailyExpenses, sortArrayByMonthPayRoll, sortArrayByMonth)


  const sortArrayByMonthTotalExpensesAll = mergedArray.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalExpenses = Number(totalDailyExpenses) + Number(totalPayRoll) + Number(totalItemPurchase)
  const Gain = totalRevenue - totalExpenses


  const normalizeSortArrayByMonthPayment = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthPayment.find((row) => row.month === moth)
    return {
      month: moth,
      total: related ? related.total : 0
    }
  })
  const normalizeSortArrayByMonthTotalExpensesAll = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthTotalExpensesAll.find((row) => row.month === moth)
    return {
      month: moth,
      total: related ? related.total : 0
    }
  })
  const data = [
    { label: 'Income', value: totalRevenue },
    { label: 'Expenses', value: totalExpenses },
    { label: 'Revenue', value: Gain },
  ];
  const data2 = [
    { label: 'Total Sell', value: totalMaintenanceRevenue },
    { label: 'Total Cost', value: totalMaintenanceCost },
    { label: 'Labor Fees', value: totalMaintenanceLaborFees },
    { label: 'Total Gain', value: totalMaintenanceRevenue - totalMaintenanceCost },
  ];
  const data3 = [
    { label: 'Total Sell', value: projectSellInfo },
    { label: 'Total Expenses', value: projectExpensesInfo },
    { label: 'Total Item Cost', value: projectCostInfo },
    { label: 'Total Gain', value: projectRevenue },
  ];
  const data4 = [
    { label: 'Total Sell', value: totalSellInvoice },
    { label: 'Total Cost', value: totalCostInvoice },
    { label: 'Revenue', value: invoiceRevenue },
  ];
  const data5 = [
    { label: 'Total Sell', value: totalPOSSellInvoice },
    { label: 'Total Cost', value: totalPOSCostInvoice },
    { label: 'Revenue', value: invoicePOSRevenue },
  ];
  const palette = ['blue', 'red', 'green'];
  const palette2 = ['blue', 'red', 'orange', 'green'];
  const palette3 = ['blue', 'red', '#643047', 'green'];
  const palette1 = ['blue', 'red'];
  //ItemPurchase End
  const totalItem = item.filter((row) => row.typeItem === 'Goods')
  const totalOut = item.filter((row) => row.itemQuantity === 0)

  const Employed = employee.filter((row) => row.status === "Employed" && "Suspended")
  const EmployedFired = employee.filter((row) => row.status === "Fired")
  const EmployedResign = employee.filter((row) => row.status === "Resign")

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const columnsItemOut = [
    { field: 'ItemNumber', headerName: '#', width: 80 },
    { field: 'itemName', headerName: 'Item Name', width: open ? 250 : 250, renderCell: (params) => params.row.itemName.toUpperCase() },
    { field: 'balanceQty', headerName: 'Total Sell', width: open ? 120 : 100, renderCell: (params) => params.row.balanceQty?.toFixed(2) },
    { field: 'Sell', headerName: 'Sell Rate', width: 100, renderCell: (params) => `$${params.row.Sell?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'Value', headerName: 'Value', width: 150, renderCell: (params) => parseFloat(params.row.balanceQty * params.row.Sell).toFixed(2) }
  ]
  const columnMaintenance = [
    { field: 'serviceNumber', headerName: 'Service#', width: 80 },
    { field: 'dateField', headerName: 'Service Date', width: 100 },
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'defectDescription', headerName: 'Defect', width: open ? 130 : 200 },
    { field: 'infoSell', headerName: 'Total Sell', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(parseFloat(params.row.infoSell) - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'totalLaborFeesGenerale', headerName: 'Labor Fees', width: 150, renderCell: (params) => `$${params.row.totalLaborFeesGenerale !== undefined ? params.row.totalLaborFeesGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'Undefined'}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/MaintenanceViewInformation/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    }
  ]
  const columnProject = [
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 240, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'projectName', headerName: 'Project Name', width: open ? 200 : 240 },
    { field: 'description', headerName: 'Description', width: open ? 150 : 240 },
    { field: 'sell', headerName: 'Total Sell', width: 150, renderCell: (params) => params.row.relatedPurchase?.map((item) => item.RelatedInvoice ? 'INV-' + item.RelatedInvoice.invoiceNumber + ' / $' + item.RelatedInvoice.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0) },
    { field: 'cost', headerName: 'Total Item Cost', width: 150, renderCell: (params) => params.row.relatedPurchase?.map((item) => 'PUR-' + item.purchaseNumber + ' / $' + item.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) },
    { field: 'totalExpenses', headerName: 'Total Expenses', width: 150, renderCell: (params) => `$${params.row.totalExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'Gain', headerName: 'Revenue', width: 100, renderCell: (params) => params.row.relatedPurchase?.map((item) => item.RelatedInvoice ? '$' + parseFloat(item.RelatedInvoice.totalInvoice - (Number(item.infoCost) + Number(params.row.totalExpenses)))?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0) },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/ProjectViewInformation/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    }
  ]
  const columnInvoice = [
    { field: 'invoiceNumber', headerName: 'Invoice#', width: 80 },
    { field: 'dateField', headerName: 'Invoice Date', width: 100 },
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'invoiceSubject', headerName: 'Defect', width: open ? 130 : 200 },
    { field: 'total', headerName: 'A-Paid', width: 150, renderCell: (params) => `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoSell', headerName: 'Total Sell', width: 150, renderCell: (params) => `$${params.row.infoSell?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/InvoiceViewAdminAll/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    }
  ]
  const columnPOSInvoice = [
    { field: 'factureNumber', headerName: 'Invoice#', width: 80 },
    { field: 'dateField', headerName: 'Invoice Date', width: 100 },
    { field: 'time', headerName: 'Time', width: 100, valueGetter: (params) => dayjs(params.row.invoiceDate).format('HH:mm') },
    { field: 'customer', headerName: 'Customer Name', width: open ? 250 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'totalInvoice', headerName: 'Invoice Amount', width: 150, renderCell: (params) => `$${(params.row.totalInvoice / params.row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoSell', headerName: 'Total Paid', width: 150, renderCell: (params) => `$${params.row.infoSell?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` }
  ]
  const columnCustomer = [
    { field: 'customer', headerName: 'Customer Name', width: open ? 160 : 220, valueGetter: (params) => params.row.Customer },
    { field: 'credit', headerName: 'Credit', width: 100, renderCell: (params) => `$${params.row.credit?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 40, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/CustomerInformationView/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    }
  ]
  const [monthAllRevenueExpenses, setMonthAllRevenueExpenses] = useState('');
  const [showInfo, setShowInfo] = useState(1);
  const [infoName, setInfoName] = useState('')
  const handleClick = (e, monthI) => {
    setShowInfo(e)
    setMonthAllRevenueExpenses(monthI.axisValue)
    setInfoName(monthI)
  }
  return (
    <div className='Homeemployee'>
      {user.loading ? (<div style={{
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        width: 400,
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: 24,
      }}>
        <div style={{ padding: '5px' }}>
          <Loader />
        </div>
      </div>) : (
        <div className='Homeemployee'>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} sx={{ backgroundColor: '#30368a' }}>
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
                    ...(open && { display: 'none' }),

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
                  Dashboard
                </Typography>
                <NotificationVIewInfo />
                <MessageAdminView name={user.data.userName} role={user.data.role} />
                <IconButton color="inherit" onClick={handleLogout}>
                  <Logout style={{ color: 'white' }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1]
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <List sx={{ height: '700px' }}>
                <SidebarDash />
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
              <Container maxWidth="none" sx={{ mt: 4 }}>
                <div >
                  {user.data.role === 'CEO' ?
                    <div style={{ width: '100%' }}>
                      {
                        showInfo === 1 ?
                          <Grid container spacing={4}>
                            <Grid item xs={8}>
                              <Typography sx={{ fontSize: '2rem', marginBottom: '15px' }}>Overview</Typography>
                              <Card sx={{ width: '100%', height: '400px', padding: '20px', backgroundColor: '#202a5a' }}>
                                <CardContent>
                                  <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: '0px' }}>
                                    <section style={{ position: 'relative', left: '0px', transform: 'rotate(-90deg)' }}>
                                      <Card sx={{ width: '330px', marginBottom: '300px', height: '40px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', color: '#202a5a', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <Typography sx={{ position: 'relative', fontSize: '1rem', top: '-8px' }}> Expenses & Income </Typography>
                                        </CardContent>
                                      </Card>
                                    </section>
                                    <section style={{ marginLeft: '-250px', width: '800px' }}>
                                      <Card sx={{ width: '100%', height: '300px', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <LineChart
                                            width={open ? 600 : 700}
                                            height={300}
                                            series={[
                                              { data: normalizeSortArrayByMonthPayment.map((row) => row.total), label: 'Income', id: 'uvId' },
                                              { data: normalizeSortArrayByMonthTotalExpensesAll.map((row) => row.total), label: 'Expenses', id: 'pvId' },
                                            ]}
                                            xAxis={[{ scaleType: 'point', data: monthsOfYear, stroke: '#fff' }]}
                                            colors={palette1}
                                            onAxisClick={(e, monthsOfYear) => handleClick(2, monthsOfYear)}
                                          />
                                        </CardContent>
                                      </Card>
                                    </section>
                                  </div>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', backgroundColor: '#202a5a', height: '465px', padding: '5px' }}>
                                <CardContent>
                                  <Card>
                                    <CardContent>
                                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                                          <DatePicker
                                            required
                                            name='date'
                                            value={dayjs(date)}
                                            onChange={(date) => setDate(date)}
                                            format='YYYY'
                                            label={'"year"'} views={['year']}
                                          />
                                        </DemoContainer>
                                      </LocalizationProvider>
                                      <section style={{ position: 'relative', left: open ? '20%' : '25%' }}>
                                        <PieChart
                                          series={[
                                            {
                                              paddingAngle: 5,
                                              innerRadius: 60,
                                              outerRadius: 80,
                                              data,
                                            },
                                          ]}
                                          colors={palette}
                                          margin={{ right: 5 }}
                                          width={200}
                                          height={200}
                                          legend={{ hidden: true }}
                                        />
                                      </section>
                                      <Divider />
                                      <section style={{ width: '100%', justifyContent: 'center' }}>
                                        <ul style={{ listStyleType: 'none' }}>
                                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleClick(2, '')}> <span><Square style={{ color: 'blue' }} /></span> <span style={{ color: 'blue' }}>Income: $ {totalRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></li>
                                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleClick(2, '')}> <span><Square style={{ color: 'red' }} /></span> <span style={{ color: 'red' }}>Expenses: $ {totalExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></li>
                                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleClick(2, '')}> <span><Square style={{ color: 'green' }} /></span> <span style={{ color: 'green' }}>Revenue: $ {Gain?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></li>
                                        </ul>
                                      </section>
                                    </CardContent>
                                  </Card>

                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card sx={{ width: '100%', height: '300px' }}>
                                <CardContent>
                                  <div className='iconmo2'>
                                    <MonetizationOn style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                  </div>
                                  <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <section style={{ position: 'relative', left: '0px', transform: 'rotate(-90deg)' }}>
                                      <Card sx={{ width: '250px', marginBottom: '180px', height: '40px', backgroundColor: '#357a38', textAlign: 'center', justifyContent: 'center', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <Typography sx={{ position: 'relative', fontSize: '1rem', top: '-8px' }}> Income Overview</Typography>
                                        </CardContent>
                                      </Card>
                                    </section>
                                    <section style={{ marginLeft: '-150px' }}>
                                      <p style={{ color: '#357a38', fontSize: '15px', alignItems: 'center' }}><MonetizationOn /><span>{totalRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                      <Card sx={{ width: '100%', height: '200px', backgroundColor: '#357a38', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <LineChart
                                            dataset={sortArrayByMonthPayment}
                                            xAxis={[{ scaleType: 'point', data: sortArrayByMonthPayment.map((row) => row.month) }]}
                                            series={[{ dataKey: 'total', area: false }]}
                                            onAxisClick={(e, monthsOfYear) => handleClick(3, monthsOfYear)}
                                            sx={{
                                              [`& .${lineElementClasses.root}`]: {
                                                stroke: '#fff',
                                                strokeWidth: 2,
                                              },
                                              [`& .${markElementClasses.root}`]: {
                                                stroke: '#fff',
                                                scale: '0.6',
                                                fill: '#8884d8',
                                                strokeWidth: 2,
                                              },
                                              [`.${axisClasses.root}`]: {
                                                [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                                  display: 'none'
                                                },
                                                [`.${axisClasses.tickLabel}`]: {
                                                  display: 'none'
                                                },
                                              },
                                            }}
                                            width={open ? 400 : 500}
                                            height={200}
                                          />
                                        </CardContent>
                                      </Card>
                                    </section>
                                  </div>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card sx={{ width: '100%', height: '300px' }}>
                                <CardContent>
                                  <div className='iconmo3'>
                                    <ShoppingBagOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                  </div>
                                  <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <section style={{ position: 'relative', left: '0px', transform: 'rotate(-90deg)' }}>
                                      <Card sx={{ width: '250px', marginBottom: '180px', height: '40px', backgroundColor: '#C1121F', textAlign: 'center', justifyContent: 'center', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <Typography sx={{ position: 'relative', fontSize: '1rem', top: '-8px' }}> Expenses Overview</Typography>
                                        </CardContent>
                                      </Card>
                                    </section>
                                    <section style={{ marginLeft: '-150px' }}>
                                      <p style={{ color: '#C1121F', fontSize: '15px', alignItems: 'center' }}><MonetizationOn /><span>{totalDailyExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                      <Card sx={{ width: '100%', height: '200px', backgroundColor: '#C1121F', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >

                                          <LineChart
                                            dataset={sortArrayByMonthDailyExpenses}
                                            xAxis={[{ scaleType: 'point', data: sortArrayByMonthDailyExpenses.map((row) => row.month) }]}
                                            onAxisClick={(e, monthsOfYear) => handleClick(4, monthsOfYear)}
                                            series={[{ dataKey: 'total', area: false }]}
                                            sx={{
                                              [`& .${lineElementClasses.root}`]: {
                                                stroke: '#fff',
                                                strokeWidth: 2,
                                              },
                                              [`& .${markElementClasses.root}`]: {
                                                stroke: '#fff',
                                                scale: '0.6',
                                                fill: '#8884d8',
                                                strokeWidth: 2,
                                              },
                                              [`.${axisClasses.root}`]: {
                                                [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                                  display: 'none'
                                                },
                                                [`.${axisClasses.tickLabel}`]: {
                                                  display: 'none'
                                                },
                                              },
                                            }}
                                            width={open ? 400 : 500}
                                            height={200}
                                          />

                                        </CardContent>
                                      </Card>
                                    </section>
                                  </div>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card sx={{ width: '100%', height: '300px' }}>
                                <CardContent>
                                  <div className='iconmo5'>
                                    <ShoppingCart style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                  </div>
                                  <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <section style={{ position: 'relative', left: '0px', transform: 'rotate(-90deg)' }}>
                                      <Card sx={{ width: '250px', marginBottom: '180px', height: '40px', backgroundColor: '#643047', textAlign: 'center', justifyContent: 'center', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <Typography sx={{ position: 'relative', fontSize: '1rem', top: '-8px' }}> I-Purchase Overview</Typography>
                                        </CardContent>
                                      </Card>
                                    </section>
                                    <section style={{ marginLeft: '-150px' }}>
                                      <p style={{ color: '#643047', fontSize: '15px', alignItems: 'center' }}><MonetizationOn /><span>{totalItemPurchase?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                      <Card sx={{ width: '100%', height: '200px', backgroundColor: '#643047', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <LineChart
                                          dataset={sortArrayByMonth}
                                          xAxis={[{ scaleType: 'point', data: sortArrayByMonth.map((row) => row.month) }]}
                                          onAxisClick={(e, monthsOfYear) => handleClick(5, monthsOfYear)}
                                          series={[{ dataKey: 'total', area: false }]}
                                          sx={{
                                            [`& .${lineElementClasses.root}`]: {
                                              stroke: '#fff',
                                              strokeWidth: 2,
                                            },
                                            [`& .${markElementClasses.root}`]: {
                                              stroke: '#fff',
                                              scale: '0.6',
                                              fill: '#8884d8',
                                              strokeWidth: 2,
                                            },
                                            [`.${axisClasses.root}`]: {
                                              [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                                display: 'none'
                                              },
                                              [`.${axisClasses.tickLabel}`]: {
                                                display: 'none'
                                              },
                                            },
                                          }}
                                          width={open ? 400 : 500}
                                          height={200}
                                        />
                                      </Card>
                                    </section>
                                  </div>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card sx={{ width: '100%', height: '300px' }}>
                                <CardContent>
                                  <div className='iconmo4'>
                                    <Payment style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                  </div>
                                  <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <section style={{ position: 'relative', left: '0px', transform: 'rotate(-90deg)' }}>
                                      <Card sx={{ width: '250px', marginBottom: '180px', height: '40px', backgroundColor: '#003049', textAlign: 'center', justifyContent: 'center', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <Typography sx={{ position: 'relative', fontSize: '1rem', top: '-8px' }}> Pay-Roll Overview</Typography>
                                        </CardContent>
                                      </Card>
                                    </section>
                                    <section style={{ marginLeft: '-150px' }}>
                                      <p style={{ color: '#003049', fontSize: '15px', alignItems: 'center' }}><MonetizationOn /><span>{totalPayRoll?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                      <Card sx={{ width: '100%', height: '200px', backgroundColor: '#003049', color: 'white', boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)' }}>
                                        <CardContent >
                                          <LineChart
                                            dataset={sortArrayByMonthPayRoll}
                                            xAxis={[{ scaleType: 'point', data: sortArrayByMonthPayRoll.map((row) => row.month) }]}
                                            onAxisClick={(e, monthsOfYear) => handleClick(6, monthsOfYear)}
                                            series={[{ dataKey: 'total', area: false }]}
                                            sx={{
                                              [`& .${lineElementClasses.root}`]: {
                                                stroke: '#fff',
                                                strokeWidth: 2,
                                              },
                                              [`& .${markElementClasses.root}`]: {
                                                stroke: '#fff',
                                                scale: '0.6',
                                                fill: '#8884d8',
                                                strokeWidth: 2,
                                              },
                                              [`.${axisClasses.root}`]: {
                                                [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                                  display: 'none'
                                                },
                                                [`.${axisClasses.tickLabel}`]: {
                                                  display: 'none'
                                                },
                                              },
                                            }}
                                            width={open ? 400 : 500}
                                            height={200}
                                          />
                                        </CardContent>
                                      </Card>
                                    </section>
                                  </div>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>ITem & Customer</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                onClick={(e) => handleClick(10, 'Category')}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo7'>
                                      <Store style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}> Store</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: '#669BBC' }}>{totalItem.length} Item</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>

                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                onClick={(e) => handleClick(10, 'Out of Stock')}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo7'>
                                      <ProductionQuantityLimitsIcon style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Item Out of Store</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: 'red' }}>{totalOut.length}</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center' }}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo7'>
                                      <Person2Sharp style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}> Customer</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: '#669BBC' }}>{customer1.length}</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <Card sx={{ width: '100%', height: '450px', backgroundColor: '#643047', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                {
                                  itemsValue.length > 0 ? <CardContent >
                                    <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '5px' }}>
                                      <DataGrid
                                        rows={itemsValue}
                                        columns={columnsItemOut}
                                        sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                      />
                                    </TableContainer>
                                  </CardContent> : <Button onClick={fetchValue}>Item Value</Button>
                                }

                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '450px', backgroundColor: '#643047', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent >
                                  <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '5px' }}>
                                    <DataGrid
                                      rows={customer}
                                      columns={columnCustomer}
                                      sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                    />
                                  </TableContainer>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>Maintenance</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '273px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <Card sx={{ width: '100%', height: '220px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                    onClick={(e) => handleClick(7, 'All')}
                                  >
                                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                      <PieChart
                                        series={[
                                          {
                                            paddingAngle: 5,
                                            innerRadius: 60,
                                            outerRadius: 80,
                                            data: data2,
                                          },
                                        ]}
                                        colors={palette2}
                                        margin={{ right: 5 }}
                                        width={200}
                                        height={200}
                                        legend={{ hidden: true }}
                                      />
                                      <section>

                                      </section>
                                    </CardContent>
                                  </Card>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <div style={{ width: '100%' }}>
                                <Grid container spacing={4}>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(7, 'Sell')}
                                    >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'blue' }}>
                                            <Sell style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Sell</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'blue' }}>${totalMaintenanceRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(7, 'Cost')}
                                    >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'red' }}>
                                            <ShoppingBagOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Cost</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'red' }}>${totalMaintenanceCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(7, 'Labor')}
                                    >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'orange' }}>
                                            <PriceChange style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Labor Fees</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'orange' }}>${totalMaintenanceLaborFees?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(7, 'Revenue')}
                                    >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'green' }}>
                                            <AddCard style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Revenue</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'green' }}>${(totalMaintenanceRevenue - totalMaintenanceCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ width: '100%', height: '500px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <TableContainer sx={{ height: '450px', width: '100%', borderRadius: '5px' }}>
                                    <DataGrid
                                      rows={maintenance}
                                      columns={columnMaintenance}
                                      sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                    />
                                  </TableContainer>
                                </CardContent>
                              </Card>
                            </Grid>

                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>Project</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '273px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <Card sx={{ width: '100%', height: '220px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                    onClick={(e) => handleClick(8, 'Revenue')}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                      <PieChart
                                        series={[
                                          {
                                            paddingAngle: 5,
                                            innerRadius: 60,
                                            outerRadius: 80,
                                            data: data3,
                                          },
                                        ]}
                                        colors={palette3}
                                        margin={{ right: 5 }}
                                        width={200}
                                        height={200}
                                        legend={{ hidden: true }}
                                      />
                                      <section>

                                      </section>
                                    </CardContent>
                                  </Card>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <div style={{ width: '100%' }}>
                                <Grid container spacing={4}>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(8, 'Sell')}
                                    >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'blue' }}>
                                            <Sell style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Sell</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'blue' }}>${projectSellInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(8, 'Expenses')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'red' }}>
                                            <ShoppingBagOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Expenses Cost</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'red' }}>${projectExpensesInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(8, 'Item Cost')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: '#643047' }}>
                                            <ShoppingCart style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Item Cost</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: '#643047' }}>${projectCostInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(8, 'Revenue')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'green' }}>
                                            <AddCard style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Revenue</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'green' }}>${projectRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ width: '100%', height: '500px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <TableContainer sx={{ height: '450px', width: '100%', borderRadius: '5px' }}>
                                    <DataGrid
                                      rows={projectWithAll}
                                      columns={columnProject}
                                      sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                    />
                                  </TableContainer>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>Invoice</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '273px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <Card sx={{ width: '100%', height: '220px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                    onClick={(e) => handleClick(9, 'Revenue')}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                      <PieChart
                                        series={[
                                          {
                                            paddingAngle: 5,
                                            innerRadius: 60,
                                            outerRadius: 80,
                                            data: data4,
                                          },
                                        ]}
                                        colors={palette}
                                        margin={{ right: 5 }}
                                        width={200}
                                        height={200}
                                        legend={{ hidden: true }}
                                      />
                                      <section>

                                      </section>
                                    </CardContent>
                                  </Card>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <div style={{ width: '100%' }}>
                                <Grid container spacing={4}>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(9, 'Sell')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'blue' }}>
                                            <Sell style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Sell</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'blue' }}>${totalSellInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(9, 'Cost')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'red' }}>
                                            <ShoppingBagOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Cost</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'red' }}>${totalCostInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(9, 'Revenue')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'green' }}>
                                            <AddCard style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Revenue</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'green' }}>${invoiceRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ width: '100%', height: '500px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <TableContainer sx={{ height: '450px', width: '100%', borderRadius: '5px' }}>
                                    <DataGrid
                                      rows={filterInvoice}
                                      columns={columnInvoice}
                                      sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                    />
                                  </TableContainer>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>Shop</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '273px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <Card sx={{ width: '100%', height: '220px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                    onClick={(e) => handleClick(11, 'All')}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                      <PieChart
                                        series={[
                                          {
                                            paddingAngle: 5,
                                            innerRadius: 60,
                                            outerRadius: 80,
                                            data: data5,
                                          },
                                        ]}
                                        colors={palette}
                                        margin={{ right: 5 }}
                                        width={200}
                                        height={200}
                                        legend={{ hidden: true }}
                                      />
                                      <section>

                                      </section>
                                    </CardContent>
                                  </Card>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <div style={{ width: '100%' }}>
                                <Grid container spacing={4}>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(11, 'Sell')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'blue' }}>
                                            <Sell style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Sell</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'blue' }}>${totalPOSSellInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(11, 'Cost')}>
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'red' }}>
                                            <ShoppingBagOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Total Cost</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'red' }}>${totalPOSCostInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      onClick={(e) => handleClick(11, 'Revenue')} >
                                      <CardContent >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                          <section className='iconmo7' style={{ backgroundColor: 'green' }}>
                                            <AddCard style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                          </section>
                                          <section>
                                            <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Revenue</Typography>
                                          </section>
                                        </div>
                                        <section>
                                          <Typography sx={{ float: 'right', color: 'green' }}>${invoicePOSRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                        </section>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ width: '100%', height: '500px', backgroundColor: '#202a5a', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <TableContainer sx={{ height: '450px', width: '100%', borderRadius: '5px' }}>
                                    <DataGrid
                                      rows={posInvoice}
                                      columns={columnPOSInvoice}
                                      sx={{ borderRadius: '5px', backgroundColor: '#fff' }}
                                    />
                                  </TableContainer>
                                </CardContent>
                              </Card>
                            </Grid>

                            <Grid item xs={12}>
                              <Typography sx={{ fontSize: '2rem' }}>Employee</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center' }}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo8'>
                                      <GroupOutlined style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}> Employee</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: '#669BBC' }}>{Employed && Employed.length}</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center' }}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo8'>
                                      <PersonAddDisabled style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Resigned Employee</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: 'red' }}>{EmployedResign && EmployedResign.length}</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '120px', backgroundColor: '#fff', textAlign: 'center', justifyContent: 'center' }}>
                                <CardContent >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <section className='iconmo8'>
                                      <GroupRemove style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                    </section>
                                    <section>
                                      <Typography sx={{ textAlign: 'left', fontSize: '20px' }}>Fired Employed</Typography>
                                    </section>
                                  </div>
                                  <section>
                                    <Typography sx={{ float: 'right', color: 'red' }}>{EmployedFired && EmployedFired.length}</Typography>
                                  </section>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={4}>
                              <Card sx={{ width: '100%', height: '450px', backgroundColor: '#003049', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent >
                                  <Box sx={{ borderRadius: '5px', backgroundColor: '#fff', maxHeight: '400px', padding: '10px' }} component={Paper}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <section>
                                        <Typography>Notification</Typography>
                                      </section>
                                      <section className='iconmo8'>
                                        <NotificationAdd style={{ fontSize: '30px', position: 'relative', top: '10px' }} />
                                      </section>
                                    </div>
                                    <Divider />
                                    <div style={{ position: 'relative', textAlign: 'left', width: '100%', height: '330px', overflow: 'hidden', overflowY: 'scroll', justifyContent: 'left' }}>
                                      {
                                        notification?.map((row) => (
                                          <Timeline key={row._id}
                                            sx={{
                                              [`& .${timelineItemClasses.root}:before`]: {
                                                flex: 0,
                                                padding: 0,
                                              },

                                            }}
                                          >
                                            <TimelineItem>
                                              <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                              </TimelineSeparator>
                                              <TimelineContent>
                                                <Typography className="txt2">{row.person}</Typography>
                                                <Typography className="txt1">{row.reason}</Typography>
                                              </TimelineContent>
                                            </TimelineItem>
                                          </Timeline>
                                        ))
                                      }
                                    </div>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={8}>
                              <Card sx={{ width: '100%', height: '450px', backgroundColor: '#003049', textAlign: 'center', justifyContent: 'center', padding: '10px' }}>
                                <CardContent>
                                  <TableContainer sx={{ borderRadius: '5px', backgroundColor: '#fff', height: '400px' }}>
                                    <Table >
                                      <TableBody>
                                        {
                                          employeeAttendance?.map((row, i) => (
                                            <TableRow key={row._id}>
                                              <TableCell>{i + 1}</TableCell>
                                              <TableCell>{row.name}</TableCell>
                                              <TableCell>{dayjs(row.timeIn).format('HH:mm')} AM</TableCell>
                                              <TableCell>{row.observation}</TableCell>
                                            </TableRow>
                                          ))
                                        }
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </CardContent>
                              </Card>
                              <br />
                            </Grid>
                          </Grid> : ''
                      }
                      {
                        showInfo === 2 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <RevenueExpensesAll
                              onMonth={monthAllRevenueExpenses}
                              onPayment={payment}
                              onPayRoll={payRoll}
                              onItemPurChase={itemPurchase}
                              onExpenses={expenses}
                            />
                          </div> : ''
                      }
                      {
                        showInfo === 3 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PaymentReportInf
                              onMonth={monthAllRevenueExpenses}
                              onPayment={payment}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 4 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <DailyExpensesReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onExpenses={expenses}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 5 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ItemPurchaseReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onItemPurChase={itemPurchase}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 6 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PayRollReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onPayRoll={payRoll}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 7 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <MaintenanceReportInfo
                              onMonth={infoName}
                              onMaintenance={maintenance}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 8 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ProjectReportInfo
                              onMonth={infoName}
                              onProjectName={projectWithAll}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 9 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <InvoiceReportInfo
                              onMonth={infoName}
                              onInvoice={filterInvoice}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 11 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PosReportInvoice
                              onMonth={infoName}
                              onInvoice={posInvoice}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 10 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ItemReportInfo
                              onMonth={infoName}
                              onItem={item}
                            />
                          </div>
                          : ''
                      }
                    </div>
                    : (
                      <div>
                        <div className='projectSection1'>
                          <div className='projectSectionAdminView' style={{ justifyContent: 'center', textAlign: 'center', marginLeft: '260px', top: '30%', position: 'absolute' }}>
                            <h2>Welcome {user.data.userName}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <section style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <h2> Today's Rate </h2>
                                <CurrencyExchangeIcon />
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>)}

                </div>
              </Container>

            </Box>
          </Box>
        </div>)}
    </div>
  )
}

export default AdminHome
