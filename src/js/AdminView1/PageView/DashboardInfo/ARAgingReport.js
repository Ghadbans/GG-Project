import React, { useState, useMemo, useRef } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, TextField, Divider, Grid, Card, CardContent,
    IconButton, Tooltip, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { LocalPrintshop, FileDownload, InfoOutlined, Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useReactToPrint } from 'react-to-print';

function ARAgingReport({ onInvoice, onPayment }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `Statement_Of_Accounts_${selectedCustomer?.name || 'Customer'}`
    });

    const customerInvoices = useMemo(() => {
        if (!selectedCustomer || !onInvoice || !Array.isArray(onInvoice)) return [];
        return onInvoice.filter(inv => {
            if (['Draft', 'Voided', 'Void', 'Decline'].includes(inv.status)) return false;
            const balance = Number(inv.balanceDue || 0);
            if (balance <= 0) return false;
            const custId = inv.customerName?._id || inv.customerId || 'unknown';
            return custId === selectedCustomer.id;
        }).sort((a, b) => new Date(a.invoiceDate) - new Date(b.invoiceDate));
    }, [selectedCustomer, onInvoice]);

    const agingData = useMemo(() => {
        if (!onInvoice || !Array.isArray(onInvoice)) return [];

        const customerMap = {};

        onInvoice.forEach(inv => {
            // Only consider invoices with a balance due and not voided/draft
            if (['Draft', 'Voided', 'Void', 'Decline'].includes(inv.status)) return;
            
            const balance = Number(inv.balanceDue || 0);
            if (balance <= 0) return;

            const custId = inv.customerName?._id || inv.customerId || 'unknown';
            const custName = inv.customerName?.customerName || 'Unknown Customer';

            if (!customerMap[custId]) {
                customerMap[custId] = {
                    id: custId,
                    name: custName,
                    '0-30': 0,
                    '31-60': 0,
                    '61-90': 0,
                    '90+': 0,
                    total: 0
                };
            }

            const invDate = dayjs(inv.invoiceDate);
            const today = dayjs();
            const daysOverdue = today.diff(invDate, 'day');

            if (daysOverdue <= 30) {
                customerMap[custId]['0-30'] += balance;
            } else if (daysOverdue <= 60) {
                customerMap[custId]['31-60'] += balance;
            } else if (daysOverdue <= 90) {
                customerMap[custId]['61-90'] += balance;
            } else {
                customerMap[custId]['90+'] += balance;
            }
            customerMap[custId].total += balance;
        });

        return Object.values(customerMap)
            .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => b.total - a.total);
    }, [onInvoice, searchTerm]);

    const totals = useMemo(() => {
        return agingData.reduce((acc, curr) => ({
            '0-30': acc['0-30'] + curr['0-30'],
            '31-60': acc['31-60'] + curr['31-60'],
            '61-90': acc['61-90'] + curr['61-90'],
            '90+': acc['90+'] + curr['90+'],
            total: acc.total + curr.total
        }), { '0-30': 0, '31-60': 0, '61-90': 0, '90+': 0, total: 0 });
    }, [agingData]);

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('A-R Aging Report');

        worksheet.columns = [
            { header: 'Customer Name', key: 'name', width: 30 },
            { header: '0-30 Days', key: '0-30', width: 15 },
            { header: '31-60 Days', key: '31-60', width: 15 },
            { header: '61-90 Days', key: '61-90', width: 15 },
            { header: '90+ Days', key: '90+', width: 15 },
            { header: 'Total Balance', key: 'total', width: 18 },
        ];

        agingData.forEach(row => {
            worksheet.addRow(row);
        });

        worksheet.getRow(1).font = { bold: true };
        worksheet.addRow([]);
        worksheet.addRow({
            name: 'TOTALS',
            '0-30': totals['0-30'],
            '31-60': totals['31-60'],
            '61-90': totals['61-90'],
            '90+': totals['90+'],
            total: totals.total
        }).font = { bold: true };

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `AR_Aging_Report_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="Search Customer"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ width: 300 }}
                />
                <Tooltip title="Aging is calculated based on Invoice Date vs Today">
                    <IconButton size="small"><InfoOutlined /></IconButton>
                </Tooltip>
                
                <Button
                    variant="contained"
                    startIcon={<FileDownload />}
                    onClick={exportToExcel}
                    sx={{ ml: 'auto', backgroundColor: '#30368a' }}
                >
                    Export Excel
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ borderTop: '4px solid #4caf50' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="caption" sx={{ fontWeight: 'bold' }}>0-30 DAYS (CURRENT)</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals['0-30'].toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ borderTop: '4px solid #ff9800' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="caption" sx={{ fontWeight: 'bold' }}>31-60 DAYS</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals['31-60'].toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ borderTop: '4px solid #f44336' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="caption" sx={{ fontWeight: 'bold' }}>61-90 DAYS</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals['61-90'].toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ borderTop: '4px solid #b71c1c', backgroundColor: '#fff5f5' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="caption" sx={{ fontWeight: 'bold' }}>OVER 90 DAYS</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#b71c1c' }}>${totals['90+'].toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Customer Name</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>0-30 Days</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>31-60 Days</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>61-90 Days</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>90+ Days</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#30368a', color: 'white' }}>Total Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agingData.map((row) => (
                            <TableRow key={row.id} hover>
                                <TableCell 
                                    sx={{ fontWeight: '500', color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }} 
                                    onClick={() => setSelectedCustomer(row)}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" sx={{ color: row['0-30'] > 0 ? '#4caf50' : '#ccc' }}>
                                    {row['0-30'] > 0 ? `$${row['0-30'].toLocaleString()}` : '-'}
                                </TableCell>
                                <TableCell align="right" sx={{ color: row['31-60'] > 0 ? '#ff9800' : '#ccc' }}>
                                    {row['31-60'] > 0 ? `$${row['31-60'].toLocaleString()}` : '-'}
                                </TableCell>
                                <TableCell align="right" sx={{ color: row['61-90'] > 0 ? '#f44336' : '#ccc' }}>
                                    {row['61-90'] > 0 ? `$${row['61-90'].toLocaleString()}` : '-'}
                                </TableCell>
                                <TableCell align="right" sx={{ color: row['90+'] > 0 ? '#b71c1c' : '#ccc', fontWeight: row['90+'] > 0 ? '700' : '400' }}>
                                    {row['90+'] > 0 ? `$${row['90+'].toLocaleString()}` : '-'}
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                    ${row.total.toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                        {agingData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                    No outstanding balances found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>GRAND TOTALS</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>${totals['0-30'].toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>${totals['31-60'].toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>${totals['61-90'].toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>${totals['90+'].toLocaleString()}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4', fontSize: '1.1rem' }}>${totals.total.toLocaleString()}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

            <Dialog open={Boolean(selectedCustomer)} onClose={() => setSelectedCustomer(null)} maxWidth="md" fullWidth>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Statement of Accounts - {selectedCustomer?.name}
                    </Typography>
                    <IconButton onClick={() => setSelectedCustomer(null)}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <div ref={componentRef} style={{ padding: '10px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, display: 'none', '@media print': { display: 'block' } }}>
                            Statement of Accounts - {selectedCustomer?.name}
                        </Typography>
                        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Date</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Invoice #</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Total Amount</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Amount Paid</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Balance Due</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f1f3f4' }}>Overdue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customerInvoices.map(inv => {
                                        const invDate = dayjs(inv.invoiceDate);
                                        const daysOverdue = Math.max(0, dayjs().diff(invDate, 'day'));
                                        const total = Number(inv.totalInvoice || inv.total || 0);
                                        const balance = Number(inv.balanceDue || 0);
                                        const paid = total - balance;
                                        return (
                                            <TableRow key={inv._id} hover>
                                                <TableCell>{invDate.format('DD/MM/YYYY')}</TableCell>
                                                <TableCell>{inv.invoiceNumber ? `INV-${String(inv.invoiceNumber).padStart(6, '0')}` : (inv.factureNumber ? `INV-${String(inv.factureNumber).padStart(6, '0')}` : 'N/A')}</TableCell>
                                                <TableCell align="right">${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                                <TableCell align="right">${paid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>${balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                                <TableCell align="center">
                                                    <Chip label={`${daysOverdue} days`} size="small" color={daysOverdue > 90 ? "error" : daysOverdue > 30 ? "warning" : "success"} variant="outlined" />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {customerInvoices.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                                No outstanding invoices found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={4} sx={{ fontWeight: 'bold', textAlign: 'right', backgroundColor: '#f8f9fa' }}>Total Outstanding Balance:</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold', color: '#d32f2f', backgroundColor: '#f8f9fa', fontSize: '1.1rem' }}>
                                            ${selectedCustomer?.total?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                        </TableCell>
                                        <TableCell sx={{ backgroundColor: '#f8f9fa' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePrint} variant="outlined" startIcon={<LocalPrintshop />} sx={{ mr: 'auto', color: '#30368a', borderColor: '#30368a' }}>
                        Print
                    </Button>
                    <Button onClick={() => setSelectedCustomer(null)} variant="contained" sx={{ backgroundColor: '#30368a' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ARAgingReport;
