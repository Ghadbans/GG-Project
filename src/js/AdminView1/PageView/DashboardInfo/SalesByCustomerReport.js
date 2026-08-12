import React, { useState, useMemo } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, TextField, FormControl, InputLabel,
    Select, MenuItem, Divider, Grid, Card, CardContent, Dialog,
    DialogTitle, DialogContent, AppBar, Toolbar, Slide, IconButton
} from '@mui/material';
import { Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { LocalPrintshop, FileDownload } from '@mui/icons-material';
import Button from '@mui/material/Button';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SalesByCustomerReport({ onInvoice, onPos, onPayment }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [dateRange, setDateRange] = useState('All');
    const [customStart, setCustomStart] = useState(dayjs().startOf('month').format('YYYY-MM-DD'));
    const [customEnd, setCustomEnd] = useState(dayjs().endOf('month').format('YYYY-MM-DD'));
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);

    const processedData = useMemo(() => {
        let allTransactions = [];

        // 1. Process Invoices
        if (onInvoice && Array.isArray(onInvoice)) {
            allTransactions = [...allTransactions, ...onInvoice.filter(inv => inv.status && !['Draft', 'Decline', 'Void'].includes(inv.status)).map(inv => ({
                ...inv,
                type: 'Invoice',
                date: inv.invoiceDate,
                amount: (inv.totalInvoice || 0),
                paid: 0, // Do not add invoice's paid amount to avoid double counting with Payments
                due: (inv.balanceDue || 0)
            }))];
        }

        // 2. Process POS Sales (if customer is attached)
        if (onPos && Array.isArray(onPos)) {
            allTransactions = [...allTransactions, ...onPos
                .filter(p => p.customerName && (p.customerName.customerName || typeof p.customerName === 'string')) // Only named customers
                .map(pos => ({
                    ...pos,
                    type: 'POS',
                    date: pos.invoiceDate || pos.paymentDate,
                    amount: (pos.TotalAmountPaid || pos.totalInvoice || 0) / (pos.rate || 1),
                    paid: (pos.TotalAmountPaid || pos.totalInvoice || 0) / (pos.rate || 1), // POS is fully paid
                    due: 0
                }))
            ];
        }

        // 3. Process Payments
        if (onPayment && Array.isArray(onPayment)) {
            allTransactions = [...allTransactions, ...onPayment
                .filter(pay => pay.modes !== 'Credit-Account') // Prevent double counting credit usages
                .map(pay => {
                let pAmount = parseFloat(pay.amount || 0);
                if (pay.modes === 'Credit') {
                    pAmount = parseFloat(pay.PaymentReceivedUSD || 0) + (parseFloat(pay.PaymentReceivedFC || 0) / parseFloat(pay.rate || 1));
                } else if (pAmount === 0 && (pay.amountFC || pay.PaymentReceivedFC)) {
                    pAmount = parseFloat(pay.totalUSD || 0) || (parseFloat(pay.amount || 0) + (parseFloat(pay.amountFC || pay.PaymentReceivedFC || 0) / parseFloat(pay.rate || 1)));
                }
                
                // Exclude Credit balance that hasn't been applied if we want true collections, 
                // but since it's a customer statement, advanced payments SHOULD reduce their balance!
                
                if (pay.transactionType === 'Refund') {
                    pAmount = -Math.abs(pAmount);
                }
                return {
                    ...pay,
                    type: 'Payment',
                    date: pay.paymentDate,
                    amount: 0,
                    paid: pAmount,
                    due: 0
                }
            })];
        }

        let filteredTransactions = [...allTransactions];
        // Date Filtering
        if (dateRange !== 'All') {
            const now = dayjs();
            let start, end;
            if (dateRange === 'Month') {
                start = now.startOf('month');
                end = now.endOf('month');
            } else if (dateRange === 'Year') {
                start = now.startOf('year');
                end = now.endOf('year');
            } else if (dateRange === 'Custom') {
                start = dayjs(customStart);
                end = dayjs(customEnd);
            }

            filteredTransactions = filteredTransactions.filter(item => {
                let d = dayjs(item.date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
                if (!d.isValid()) d = dayjs(item.date);
                return d.isValid() && d.isBetween(start, end, 'day', '[]');
            });
        }

        // Aggregation
        const customerMap = {};
        filteredTransactions.forEach(item => {
            let custId = item.customerName?._id || item.customerId; 
            let custName = item.customerName?.customerName || item.customerName || 'Unknown Customer';

            // Fallback for missing ID but having name
            if (!custId && typeof item.customerName === 'string') {
                custId = item.customerName; 
            }

            if (!custId && item.type !== 'POS') return;

            const id = custId || 'pos_unnamed';

            if (!customerMap[id]) {
                customerMap[id] = {
                    id: id,
                    name: typeof custName === 'string' ? custName : 'Unknown Customer',
                    invoiceCount: 0,
                    totalSales: 0,
                    totalPaid: 0,
                    balance: 0,
                    transactions: []
                };
            }

            // Exclude voided payments from statement
            if (item.type === 'Payment' && item.status === 'Voided') return;

            customerMap[id].transactions.push(item);

            if (item.type === 'Invoice') {
                customerMap[id].invoiceCount += 1;
                customerMap[id].totalSales += (item.amount || 0);
                customerMap[id].totalPaid += (item.paid || 0);
            } else if (item.type === 'POS') {
                customerMap[id].invoiceCount += 1;
                customerMap[id].totalSales += (item.amount || 0);
                customerMap[id].totalPaid += (item.paid || 0);
            } else if (item.type === 'Payment') {
                customerMap[id].totalPaid += (item.paid || 0);
            }
        });

        // Finalize balance calculation for each customer
        Object.values(customerMap).forEach(c => {
            c.balance = c.totalSales - c.totalPaid;
        });

        return Object.values(customerMap).filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).sort((a, b) => b.totalSales - a.totalSales);
    }, [onInvoice, onPos, onPayment, searchTerm, dateRange, customStart, customEnd]);

    const totals = useMemo(() => {
        return processedData.reduce((acc, curr) => ({
            sales: acc.sales + curr.totalSales,
            paid: acc.paid + curr.totalPaid,
            balance: acc.balance + curr.balance
        }), { sales: 0, paid: 0, balance: 0 });
    }, [processedData]);

    const handleOpenDetails = (customer) => {
        setSelectedCustomer(customer);
        setOpenDetails(true);
    };

    const handleCloseDetails = () => {
        setOpenDetails(false);
        setSelectedCustomer(null);
    };

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sales by Customer');

        worksheet.columns = [
            { header: 'Customer Name', key: 'name', width: 30 },
            { header: 'Invoices', key: 'count', width: 10 },
            { header: 'Total Sales', key: 'sales', width: 15 },
            { header: 'Total Paid', key: 'paid', width: 15 },
            { header: 'Balance Due', key: 'balance', width: 15 },
        ];

        processedData.forEach(row => {
            worksheet.addRow({
                name: row.name,
                count: row.invoiceCount,
                sales: row.totalSales,
                paid: row.totalPaid,
                balance: row.balance
            });
        });

        worksheet.getRow(1).font = { bold: true };
        worksheet.addRow([]);
        worksheet.addRow({
            name: 'TOTALS',
            sales: totals.sales,
            paid: totals.paid,
            balance: totals.balance
        }).font = { bold: true };

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `Sales_By_Customer_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <TextField
                    label="Search Customer"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ width: 250 }}
                />
                <FormControl size="small" sx={{ width: 150 }}>
                    <InputLabel>Period</InputLabel>
                    <Select
                        value={dateRange}
                        label="Period"
                        onChange={(e) => setDateRange(e.target.value)}
                    >
                        <MenuItem value="All">All Time</MenuItem>
                        <MenuItem value="Month">This Month</MenuItem>
                        <MenuItem value="Year">This Year</MenuItem>
                        <MenuItem value="Custom">Custom Range</MenuItem>
                    </Select>
                </FormControl>

                {dateRange === 'Custom' && (
                    <>
                        <TextField
                            type="date"
                            label="From"
                            size="small"
                            value={customStart}
                            onChange={(e) => setCustomStart(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            type="date"
                            label="To"
                            size="small"
                            value={customEnd}
                            onChange={(e) => setCustomEnd(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                    </>
                )}

                <Button
                    variant="contained"
                    startIcon={<FileDownload />}
                    onClick={exportToExcel}
                    sx={{ ml: 'auto', backgroundColor: '#30368a' }}
                >
                    Export Excel
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: '#e8f5e9' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="subtitle2">Total Sales</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals.sales.toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="subtitle2">Total Collected</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals.paid.toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: '#fff3e0' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="subtitle2">Total Outstanding</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e65100' }}>${totals.balance.toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Customer Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Invoices</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Total Sales</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Total Paid</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Balance Due</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processedData.map((row) => (
                            <TableRow key={row.id} hover>
                                <TableCell
                                    sx={{
                                        fontWeight: 'medium',
                                        cursor: 'pointer',
                                        color: '#30368a',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                    onClick={() => handleOpenDetails(row)}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.invoiceCount}</TableCell>
                                <TableCell align="right">${row.totalSales.toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ color: 'success.main' }}>${row.totalPaid.toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ color: row.balance > 0 ? 'error.main' : 'inherit' }}>
                                    ${row.balance.toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                        {processedData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                                    No data found for the selected criteria
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>TOTALS</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>{processedData.reduce((a, b) => a + b.invoiceCount, 0)}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.sales.toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.paid.toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.balance.toLocaleString()}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <Dialog
                fullScreen
                open={openDetails}
                onClose={handleCloseDetails}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: '#30368a' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseDetails}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Transaction Details: {selectedCustomer?.name}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleCloseDetails}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <DialogContent sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="overline" color="textSecondary">Total Sales</Typography>
                                    <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                                        ${(selectedCustomer?.totalSales || 0).toLocaleString()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="overline" color="textSecondary">Total Paid</Typography>
                                    <Typography variant="h5" sx={{ color: '#0288d1', fontWeight: 'bold' }}>
                                        ${(selectedCustomer?.totalPaid || 0).toLocaleString()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="overline" color="textSecondary">Balance Due</Typography>
                                    <Typography variant="h5" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                                        ${(selectedCustomer?.balance || 0).toLocaleString()}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Type</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Reference</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Amount</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Paid</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(() => {
                                    let runningBalance = 0;
                                    return selectedCustomer?.transactions
                                        ?.sort((a, b) => new Date(a.date) - new Date(b.date))
                                        .map((item, idx) => {
                                            if (item.type === 'Invoice' || item.type === 'POS') {
                                                runningBalance += (item.amount || 0);
                                            }
                                            runningBalance -= (item.paid || 0);

                                            return (
                                                <TableRow key={idx}>
                                                    <TableCell>{dayjs(item.date).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell>
                                                        <span style={{
                                                            padding: '4px 8px',
                                                            borderRadius: '4px',
                                                            fontSize: '0.75rem',
                                                            backgroundColor: item.type === 'Invoice' ? '#e8f5e9' : item.type === 'POS' ? '#e3f2fd' : '#fff3e0',
                                                            color: item.type === 'Invoice' ? '#2e7d32' : item.type === 'POS' ? '#0288d1' : '#e65100'
                                                        }}>
                                                            {item.type}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.type === 'Invoice' ? `INV-${item.invoiceNumber}` :
                                                            item.type === 'POS' ? `POS-${item.factureNumber}` :
                                                                `PAY-${item.paymentNumber}`}
                                                    </TableCell>
                                                    <TableCell align="right">${(item.amount || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right">${(item.paid || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                                        ${runningBalance.toLocaleString()}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        });
                                })()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default SalesByCustomerReport;
