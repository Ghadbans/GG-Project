import React, { useState, useEffect, useRef } from 'react';
import './view.css'
import SidebarDash from '../component/SidebarDash'
import {
  IconButton, styled, Typography, Box, TextField, Grid, Card,
  CardContent, Button, Divider, Stack, List, ListItemIcon,
  ListItemText, Collapse, Container, CssBaseline, Toolbar,
  ListSubheader, ListItemButton, Paper, CircularProgress
} from '@mui/material';
import {
  Assessment, MonetizationOn, Inventory, Groups, Engineering,
  Description, Receipt, LocalPrintshop, ExpandLess, ExpandMore,
  StarBorder, Person3Outlined, Logout, ChevronLeft, Menu as MenuIcon
} from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';

dayjs.extend(customParseFormat);
import { useNavigate } from 'react-router-dom';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import ReactToPrint from 'react-to-print';
import Loader from '../component/Loader';
// Import existing report components
import RevenueExpensesAll from './PageView/DashboardInfo/RevenueExpensesAll';
import ItemReportInfo from './PageView/DashboardInfo/ItemReportInfo';
import MaintenanceReportInfo from './PageView/DashboardInfo/MaintenanceReportInfo';
import InvoiceReportInfo from './PageView/DashboardInfo/InvoiceReportInfo';
import PayRollReportInfo from './PageView/DashboardInfo/PayRollReportInfo';
import ProjectReportInfo from './PageView/DashboardInfo/ProjectReportInfo';
import DailyExpensesReportInfo from './PageView/DashboardInfo/DailyExpensesReportInfo';
import SalesByCustomerReport from './PageView/DashboardInfo/SalesByCustomerReport';
import POSAnalyticsReport from './PageView/DashboardInfo/POSAnalyticsReport';
import InventoryMovementReport from './PageView/DashboardInfo/InventoryMovementReport';
import InventoryValuationReport from './PageView/DashboardInfo/InventoryValuationReport';
import ARAgingReport from './PageView/DashboardInfo/ARAgingReport';
import SupplierReportInfo from './PageView/DashboardInfo/SupplierReportInfo';

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

const KPICard = ({ title, value, icon, color }) => (
  <Card sx={{ height: '100%', boxShadow: 3, borderLeft: `5px solid ${color}` }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography color="textSecondary" gutterBottom variant="overline" sx={{ fontSize: '0.7rem' }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {value}
          </Typography>
        </Box>
        <Box sx={{ color: color }}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const ReportSection = ({ title, icon, items, open, onToggle, activeReport, onSelect }) => (
  <Box sx={{ mb: 2 }}>
    <ListItemButton onClick={onToggle} sx={{ borderRadius: 1, mb: 0.5, backgroundColor: open ? 'rgba(48, 54, 138, 0.04)' : 'transparent' }}>
      <ListItemIcon sx={{ color: '#30368a' }}>{icon}</ListItemIcon>
      <ListItemText primary={title} sx={{ fontWeight: 'bold' }} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{ pl: 4, borderRadius: 1, backgroundColor: activeReport === item.id ? 'rgba(48, 54, 138, 0.1)' : 'transparent' }}
            onClick={() => onSelect(item.id)}
          >
            <ListItemIcon>
              <StarBorder fontSize="small" color={activeReport === item.id ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ color: activeReport === item.id ? '#30368a' : 'inherit' }} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  </Box>
);

function ReportsViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const componentRef = useRef();

  const [sideBar, setSideBar] = useState(true);
  const [openSection, setOpenSection] = useState('financials');
  const [activeReport, setActiveReport] = useState('revenue');
  const [data, setData] = useState({
    items: [],
    invoices: [],
    expenses: [],
    payroll: [],
    payments: [],
    itemPurchases: [],
    maintenance: [],
    projects: [],
    pos: [],
    itemOut: [],
    suppliers: []
  });
  const [stats, setStats] = useState({
    revenue: 0,
    expenses: 0,
    profit: 0,
    inventoryValue: 0
  });

  const [selectedYear, setSelectedYear] = useState('All');

  const availableYears = React.useMemo(() => {
    const years = new Set();
    const getYear = (date) => {
      if (!date) return null;
      // Try parsing common formats
      let d = dayjs(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
      if (!d.isValid()) d = dayjs(date);
      return d.isValid() ? d.format('YYYY') : null;
    };

    data.invoices.forEach(i => {
      const y = getYear(i.invoiceDate || i.dateInvoice || i.date);
      if (y) years.add(y);
    });
    data.expenses.forEach(e => {
      const y = getYear(e.expenseDate);
      if (y) years.add(y);
    });
    data.payroll.forEach(p => {
      const y = getYear(p.month);
      if (y) years.add(y);
    });
    data.pos.forEach(p => {
      const y = getYear(p.invoiceDate || p.paymentDate);
      if (y) years.add(y);
    });

    const finalYears = Array.from(years).sort((a, b) => b - a);
    return ['All', ...finalYears];
  }, [data]);

  useEffect(() => {
    const filterByYear = (items, dateField) => {
      if (selectedYear === 'All' || !items) return items || [];
      return items.filter(item => {
        const date = item[dateField];
        if (!date) return false;
        let d = dayjs(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs(date);
        return d.isValid() && d.format('YYYY') === selectedYear;
      });
    };

    const filteredInvoices = filterByYear(data.invoices, 'invoiceDate');
    const filteredPos = filterByYear(data.pos, 'invoiceDate');
    const filteredExpenses = filterByYear(data.expenses, 'expenseDate');
    const filteredPayroll = filterByYear(data.payroll, 'month');
    const filteredItemPurchases = filterByYear(data.itemPurchases, 'itemPurchaseDate');

    // For Inventory Value, we show total value regardless of selected year for the snapshot
    const filteredItems = data.items;

    // 1. INVOICES: Only count Invoices that have actually been PAID or PARTIALLY-PAID (Actual money received)
    const totalInvoiceRevenue = filteredInvoices
      .filter(inv => {
        const s = (inv.status || '').toUpperCase();
        return s === 'PAID' || s === 'FULL PAID' || s === 'PARTIALLY-PAID' || s === 'PARTIALLY PAID';
      })
      .reduce((sum, inv) => sum + (Number(inv.total || 0)), 0);

    // 2. POS SALES: Already counts 'TotalAmountPaid' (money actually collected)
    const totalPosRevenue = filteredPos.reduce((sum, p) => sum + (Number(p.TotalAmountPaid || 0) / (Number(p.rate || 1))), 0);
    const totalRevenue = totalInvoiceRevenue + totalPosRevenue;

    // 3. EXPENSES: Add Daily Expenses, Payroll, AND Item Purchases
    const totalExp = filteredExpenses.reduce((sum, exp) => sum + (Number(exp.total || 0)), 0);
    const totalPayroll = filteredPayroll.reduce((sum, roll) => sum + (Number(roll.totalPaidDollars || 0)), 0);
    
    const totalItemPurchases = filteredItemPurchases
      .filter(item => {
        const s = (item.status || '').toUpperCase();
        return s === 'PAID' || s === 'FULL PAID' || s === 'PARTIALLY-PAID' || s === 'PARTIALLY PAID';
      })
      .reduce((sum, item) => {
        // Sum the actual money paid to suppliers for this item purchase
        const paidAmount = (item.payments || []).reduce((pSum, p) => {
          const rate = parseFloat(p.rate) || 2800;
          const pUSD = parseFloat(p.amount) || 0;
          const pFC = parseFloat(p.amountFC) || 0;
          return pSum + (parseFloat(p.totalUSD) || (pUSD + (pFC / rate)));
        }, 0);
        return sum + paidAmount;
      }, 0);

    const totalExpenses = totalExp + totalPayroll + totalItemPurchases;

    const invVal = filteredItems
      .filter(item => item.typeItem === 'Goods')
      .reduce((sum, item) => sum + (Number(item.itemQuantity || 0) * Number(item.itemCostPrice || 0)), 0);

    setStats({
      revenue: totalRevenue,
      expenses: totalExpenses,
      profit: totalRevenue - totalExpenses,
      inventoryValue: Number(invVal.toFixed(2))
    });
  }, [data, selectedYear]);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch, navigate]);

  const [grantAccess, setGrantAccess] = useState([]);
  const [isFetchingAccess, setIsFetchingAccess] = useState(true);

  useEffect(() => {
    if (user?.data?.id) {
      const fetchNumber = async () => {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
          const userAccess = res.data?.data?.filter((row) => row.userID === user.data.id);
          if (userAccess.length > 0) {
            setGrantAccess(userAccess[0].modules);
          }
        } catch (error) {
          console.error('Error fetching access:', error);
        } finally {
          setIsFetchingAccess(false);
        }
      };
      fetchNumber();
    } else {
      // If user is not yet loaded into Redux, keep it loading
      setIsFetchingAccess(true);
    }
  }, [user]);

  const hasAccess = user?.data?.userName === 'GG' || grantAccess.some(m => m.moduleName === 'Reports' && m.access.readM);

  useEffect(() => {
    if (!hasAccess && grantAccess.length > 0 && user?.data?.userName !== 'GG') {
      // If we've fetched permissions and user is not GG and doesn't have access
      // We could redirect or show a message.
    }
    const fetchAllData = async () => {
      try {
        const [
          resItems, resInvoices, resExpenses, resPayroll,
          resPayments, resItemPurchases, resMaintenance, resProjects,
          resPos, resItemOut, resSuppliers
        ] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/item`),
          axios.get(`${ENDPOINT_URL}/invoice?summary=true`),
          axios.get(`${ENDPOINT_URL}/expense?summary=true`),
          axios.get(`${ENDPOINT_URL}/payRoll`),
          axios.get(`${ENDPOINT_URL}/payment`),
          axios.get(`${ENDPOINT_URL}/itemPurchase?summary=true`),
          axios.get(`${ENDPOINT_URL}/maintenance?summary=true`),
          axios.get(`${ENDPOINT_URL}/projects`),
          axios.get(`${ENDPOINT_URL}/pos?summary=true`),
          axios.get(`${ENDPOINT_URL}/item-usage`),
          axios.get(`${ENDPOINT_URL}/Supplier`)
        ]);

        const fetchedData = {
          items: resItems.data.data || [],
          invoices: resInvoices.data.data || [],
          expenses: resExpenses.data.data || [],
          payroll: resPayroll.data.data || [],
          payments: resPayments.data.data || [],
          itemPurchases: resItemPurchases.data.data || [],
          maintenance: resMaintenance.data.data || [],
          projects: resProjects.data.data || [],
          pos: resPos.data.data || [],
          itemOut: resItemOut.data?.data || [],
          suppliers: resSuppliers.data?.data || []
        };

        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchAllData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const activeReportLabel = () => {
    const allItems = [
      { id: 'revenue', label: 'Revenue Centrals' },
      { id: 'item_report', label: 'Item Inventory' },
      { id: 'stock_val', label: 'Inventory Valuation' },
      { id: 'maintenance', label: 'Maintenance Analysis' },
      { id: 'projects', label: 'Project Profitability' },
      { id: 'payroll', label: 'Payroll Summary' },
      { id: 'daily_exp', label: 'Daily Expenses' },
      { id: 'sales_customer', label: 'Sales by Customer' },
      { id: 'pos_analysis', label: 'POS Sales Analysis' },
      { id: 'inventory_movement', label: 'Inventory Movement' },
      { id: 'ar_aging', label: 'A/R Aging Report' },
      { id: 'supplier_payables', label: 'Supplier Payables' }
    ];
    return allItems.find(i => i.id === activeReport)?.label || 'Report';
  };

  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Professional Report Center
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}>
            <SidebarDash />
          </List>
        </Drawer>
        <Box component="main" sx={{ backgroundColor: '#f4f5f7', flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            {isFetchingAccess ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress />
              </Box>
            ) : !hasAccess ? (
              <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h4" color="error">Access Denied</Typography>
                <Typography variant="body1">You do not have permission to view the Professional Report Center. Please contact GG for access.</Typography>
              </Box>
            ) : (
              <>
                {/* KPI Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#30368a' }}>
                    Performance Overview
                  </Typography>
                  <TextField
                    select
                    size="small"
                    label="Filter by Year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    SelectProps={{ native: true }}
                    sx={{ width: 150 }}
                  >
                    {availableYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </TextField>
                </Box>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                  <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Total Revenue" value={`$${stats.revenue.toLocaleString()}`} icon={<MonetizationOn fontSize="large" />} color="#2e7d32" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Total Expenses" value={`$${stats.expenses.toLocaleString()}`} icon={<Receipt fontSize="large" />} color="#d32f2f" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Net Profit" value={`$${stats.profit.toLocaleString()}`} icon={<Assessment fontSize="large" />} color="#0288d1" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Inventory Value" value={`$${stats.inventoryValue.toLocaleString()}`} icon={<Inventory fontSize="large" />} color="#ed6c02" />
                  </Grid>
                </Grid>

                {/* Main Content */}
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Card sx={{ boxShadow: 2 }}>
                      <CardContent sx={{ p: 0 }}>
                        <ListSubheader component="div" sx={{ py: 2, fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#fff', color: '#30368a' }}>
                          Operational Reports
                        </ListSubheader>
                        <Divider />
                        <List sx={{ p: 1 }}>
                          <ReportSection
                            title="Financials"
                            icon={<MonetizationOn />}
                            open={openSection === 'financials'}
                            onToggle={() => handleToggleSection('financials')}
                            activeReport={activeReport}
                            onSelect={setActiveReport}
                            items={[
                              { id: 'revenue', label: 'Revenue Centrals' },
                              { id: 'daily_exp', label: 'Daily Expenses' },
                              { id: 'sales_customer', label: 'Sales by Customer' },
                              { id: 'ar_aging', label: 'A/R Aging View' },
                              { id: 'supplier_payables', label: 'Supplier Payables' }
                            ]}
                          />
                          <ReportSection
                            title="Inventory"
                            icon={<Inventory />}
                            open={openSection === 'inventory'}
                            onToggle={() => handleToggleSection('inventory')}
                            activeReport={activeReport}
                            onSelect={setActiveReport}
                            items={[
                              { id: 'item_report', label: 'Item Inventory' },
                              { id: 'stock_val', label: 'Stock Valuation' },
                              { id: 'inventory_movement', label: 'Movement Analysis' }
                            ]}
                          />
                          <ReportSection
                            title="Projects & Ops"
                            icon={<Engineering />}
                            open={openSection === 'ops'}
                            onToggle={() => handleToggleSection('ops')}
                            activeReport={activeReport}
                            onSelect={setActiveReport}
                            items={[
                              { id: 'maintenance', label: 'Maintenance' },
                              { id: 'projects', label: 'Project Info' },
                              { id: 'pos_analysis', label: 'POS Analysis' }
                            ]}
                          />
                          <ReportSection
                            title="HR & Payroll"
                            icon={<Groups />}
                            open={openSection === 'hr'}
                            onToggle={() => handleToggleSection('hr')}
                            activeReport={activeReport}
                            onSelect={setActiveReport}
                            items={[
                              { id: 'payroll', label: 'Payroll summary' }
                            ]}
                          />
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={9}>
                    <Card sx={{ height: '100%', minHeight: '650px', boxShadow: 2 }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Description fontSize="small" /> {activeReportLabel()}
                          </Typography>
                          <Stack direction="row" spacing={1}>
                            <ReactToPrint
                              trigger={() => (
                                <Button variant="outlined" startIcon={<LocalPrintshop />} size="small">
                                  Print Report
                                </Button>
                              )}
                              content={() => componentRef.current}
                            />
                          </Stack>
                        </Box>
                        <Divider sx={{ mb: 2 }} />

                        <Box sx={{ p: 1, backgroundColor: '#fff', minHeight: '550px' }} ref={componentRef}>
                          {activeReport === 'revenue' && (
                            <RevenueExpensesAll
                              onMonth="All"
                              onPayment={data.payments}
                              onPayRoll={data.payroll}
                              onItemPurChase={data.itemPurchases}
                              onExpenses={data.expenses}
                              allInvoices={data.invoices}
                              posInvoice={data.pos}
                              customers={data.customers}
                            />
                          )}
                          {activeReport === 'item_report' && (
                            <ItemReportInfo
                              onMonth="Category"
                              onItem={data.items}
                            />
                          )}
                          {activeReport === 'maintenance' && (
                            <MaintenanceReportInfo
                              onMonth="All"
                              onMaintenance={data.maintenance}
                            />
                          )}
                          {activeReport === 'daily_exp' && (
                            <DailyExpensesReportInfo
                              onMonth="All"
                              onExpenses={data.expenses}
                            />
                          )}
                          {activeReport === 'ar_aging' && (
                            <ARAgingReport onInvoice={data.invoices} onPayment={data.payments} />
                          )}
                          {activeReport === 'payroll' && (
                            <PayRollReportInfo
                              onMonth=""
                              onPayRoll={data.payroll}
                            />
                          )}
                          {activeReport === 'projects' && (
                            <ProjectReportInfo
                              onMonth="Revenue"
                              onProjectName={data.projects}
                              onPayment={data.payments}
                            />
                          )}
                          {activeReport === 'stock_val' && (
                            <InventoryValuationReport items={data.items} />
                          )}
                          {activeReport === 'sales_customer' && (
                            <SalesByCustomerReport onInvoice={data.invoices} onPos={data.pos} onPayment={data.payments} />
                          )}
                          {activeReport === 'pos_analysis' && (
                            <POSAnalyticsReport onPos={data.pos} />
                          )}
                          {activeReport === 'inventory_movement' && (
                            <InventoryMovementReport onInventoryIn={data.itemPurchases} onInventoryOut={data.itemOut} />
                          )}
                          {activeReport === 'supplier_payables' && (
                            <SupplierReportInfo onSuppliers={data.suppliers} onItemPurchase={data.itemPurchases} />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </>
            )}
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default ReportsViewAdmin;
