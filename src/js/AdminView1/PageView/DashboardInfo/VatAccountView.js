import React, { useMemo, useState, useRef } from 'react';
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Chip,
    IconButton,
    TextField,
    Button
} from '@mui/material';
import {
    ArrowBack,
    ArrowUpward,
    ArrowDownward,
    MonetizationOn,
    Print as PrintIcon,
    Download as DownloadIcon
} from '@mui/icons-material';
import dayjs from 'dayjs';
import { useReactToPrint } from 'react-to-print';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const VatAccountView = ({
    payments = [],
    allInvoices = [],
    expenses = [],
    itemPurchase = [],
    onAction
}) => {
    const componentRef = useRef();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Helper functions for robust data extraction
    const hasTva = (item) => {
        return item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA || false;
    };

    const getTaxAmount = (item, totalVal) => {
        const taxVal = Number(item.tax || item.taxUSd || item.taxUSD || item.taxAmount || item.vatAmount || item.TvaAmount || 0);
        if (taxVal > 0) return taxVal;

        // Fallback calculation if tax field is missing but TVA flag is set
        if (hasTva(item) && totalVal > 0) {
            return Math.round(totalVal * 0.16 * 100) / 100;
        }
        return 0;
    };

    const getItemAmount = (item) => {
        return Number(item.totalUSD || item.total || item.amount || 0);
    };

    // Combine and format all VAT-related transactions
    const vatTransactions = useMemo(() => {
        let transactions = [];

        // 1. VAT Collected (Payments/Invoices/POS) -> TVA +
        payments.forEach(p => {
            const totalVal = getItemAmount(p);
            const taxAmount = getTaxAmount(p, totalVal);

            if (taxAmount > 0 && p.status !== 'Voided') {
                transactions.push({
                    id: p._id || p.id,
                    date: p.paymentDate || p.createdAt,
                    type: 'Collected (TVA +)',
                    source: p.paymentMethod === 'Cash' && p.transactionType === 'POS' ? 'POS Sale' : 'Invoice Payment',
                    reference: p.paymentNumber ? `PAY-${p.paymentNumber}` : 
                               p.ReferenceNumber ? `INV-${p.ReferenceNumber}` : 
                               p.invoiceNumber ? `INV-${p.invoiceNumber}` : 'N/A',
                    amount: taxAmount,
                    rawDate: new Date(p.paymentDate || p.createdAt),
                    isPositive: true
                });
            }
        });

        // Add Direct Invoices
        allInvoices.forEach(inv => {
            const totalVal = getItemAmount(inv);
            const taxAmount = getTaxAmount(inv, totalVal);

            if (taxAmount > 0 && !['Draft', 'Voided', 'Void', 'Decline'].includes(inv.status)) {
                const paymentExists = payments.some(p => p.invoiceNumber === inv.invoiceName || p.ReferenceNumber === inv.invoiceName);
                if (!paymentExists) {
                    transactions.push({
                        id: inv._id || inv.id,
                        date: inv.invoiceDate,
                        type: 'Collected (TVA +)',
                        source: 'Direct Invoice',
                        reference: inv.invoiceName ? `INV-${inv.invoiceName}` : 
                                   inv.invoiceNumber ? `INV-${inv.invoiceNumber}` : 'INV-N/A',
                        amount: taxAmount,
                        rawDate: new Date(inv.invoiceDate),
                        isPositive: true
                    });
                }
            }
        });

        // 2. VAT Paid (Expenses) -> TVA -
        expenses.forEach(e => {
            const totalVal = getItemAmount(e);
            const taxAmount = getTaxAmount(e, totalVal);

            if (taxAmount > 0) {
                // Robust reference/category name access
                let ref = e.description || 'Expense';
                if (e.expenseCategory) {
                    const catName = typeof e.expenseCategory === 'object'
                        ? (e.expenseCategory.expensesCategory || e.expenseCategory.name)
                        : e.expenseCategory;
                    if (catName) ref = `${catName}: ${ref}`;
                }

                transactions.push({
                    id: e._id || e.idInfo,
                    date: e.expenseDate,
                    type: 'Paid (TVA -)',
                    source: 'Daily Expense',
                    reference: e.expenseNumber ? `D-${e.expenseNumber}` : ref,
                    amount: taxAmount,
                    rawDate: new Date(e.expenseDate),
                    isPositive: false
                });
            }
        });

        // 3. VAT Paid (Purchases) -> TVA -
        itemPurchase.forEach(p => {
            const totalVal = getItemAmount(p);
            const taxAmount = getTaxAmount(p, totalVal);

            if (taxAmount > 0 && p.status !== 'Voided') {
                transactions.push({
                    id: p._id || p.outNumber,
                    date: p.itemPurchaseDate || p.itemOutDate || p.purchaseDate,
                    type: 'Paid (TVA -)',
                    source: 'Item Purchase',
                    reference: p.itemPurchaseNumber ? `IP-${p.itemPurchaseNumber}` : 
                               p.purchaseNumber ? `IP-${p.purchaseNumber}` : 
                               p.outNumber ? `PO-${p.outNumber}` : 'Purchase',
                    amount: taxAmount,
                    rawDate: new Date(p.itemPurchaseDate || p.itemOutDate || p.purchaseDate),
                    isPositive: false
                });
            }
        });

        // Sort items by date descending, then filter by chosen date range
        let sortedTransactions = transactions.sort((a, b) => {
            const aTime = a.rawDate ? a.rawDate.getTime() : 0;
            const bTime = b.rawDate ? b.rawDate.getTime() : 0;
            return bTime - aTime;
        });

        if (startDate) {
            const startLimit = new Date(startDate);
            startLimit.setHours(0, 0, 0, 0);
            sortedTransactions = sortedTransactions.filter(t => t.rawDate && t.rawDate.getTime() >= startLimit.getTime());
        }
        if (endDate) {
            const endLimit = new Date(endDate);
            endLimit.setHours(23, 59, 59, 999);
            sortedTransactions = sortedTransactions.filter(t => t.rawDate && t.rawDate.getTime() <= endLimit.getTime());
        }
        return sortedTransactions;
    }, [payments, allInvoices, expenses, itemPurchase, startDate, endDate]);

    const totalCollected = vatTransactions.filter(t => t.isPositive).reduce((sum, t) => sum + t.amount, 0);
    const totalPaid = vatTransactions.filter(t => !t.isPositive).reduce((sum, t) => sum + t.amount, 0);
    const netVat = totalCollected - totalPaid;

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'VAT Account Statement',
    });

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('VAT Statement');

        // Add headers
        sheet.addRow(['Date', 'Type', 'Source', 'Reference / Description', 'Amount (USD)']);
        sheet.getRow(1).font = { bold: true };

        // Add rows
        vatTransactions.forEach(row => {
            sheet.addRow([
                dayjs(row.rawDate).format('DD MMM YYYY, HH:mm'),
                row.type,
                row.source,
                row.reference,
                (row.isPositive ? row.amount : -row.amount)
            ]);
        });

        // Add summary at bottom
        sheet.addRow([]);
        sheet.addRow(['Summary', '', '', '', '']);
        sheet.addRow(['Total Collected (TVA +)', '', '', '', totalCollected]);
        sheet.addRow(['Total Paid (TVA -)', '', '', '', -totalPaid]);
        sheet.addRow(['Net VAT', '', '', '', netVat]);

        const fileContent = await workbook.xlsx.writeBuffer();
        const blob = new Blob([fileContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `VAT_Statement_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="dashboard-container" style={{ padding: '24px' }}>
            <header className="dashboard-header" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <IconButton onClick={() => onAction(1)} sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#f3f4f6' } }}>
                        <ArrowBack />
                    </IconButton>
                    <div>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>VAT Account Statement</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Detailed breakdown of Collected VAT (TVA +) and Paid VAT (TVA -)
                        </Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <TextField
                        type="date"
                        label="Start Date"
                        InputLabelProps={{ shrink: true }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        size="small"
                        sx={{ backgroundColor: 'white', width: '150px' }}
                    />
                    <TextField
                        type="date"
                        label="End Date"
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        size="small"
                        sx={{ backgroundColor: 'white', width: '150px' }}
                    />
                    <Button
                        variant="outlined"
                        startIcon={<PrintIcon />}
                        onClick={handlePrint}
                        sx={{ height: '40px', backgroundColor: 'white' }}
                    >
                        Print PDF
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<DownloadIcon />}
                        onClick={exportToExcel}
                        sx={{ height: '40px' }}
                    >
                        Excel
                    </Button>
                </div>
            </header>

            <div ref={componentRef} style={{ padding: '10px' }}>
                {/* KPI Summary Cards for VAT */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                    {/* Net VAT */}
                    <Paper sx={{ p: 3, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: netVat >= 0 ? '#eff6ff' : '#fef2f2', border: `1px solid ${netVat >= 0 ? '#bfdbfe' : '#fecaca'}`, boxShadow: 'none' }}>
                        <div style={{ backgroundColor: netVat >= 0 ? '#3b82f6' : '#ef4444', padding: '12px', borderRadius: '12px', color: 'white' }}>
                            <MonetizationOn sx={{ fontSize: 32 }} />
                        </div>
                        <div>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Net VAT Balance</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: netVat >= 0 ? '#1e3a8a' : '#991b1b' }}>
                                ${Math.abs(netVat).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Typography>
                            <Typography variant="caption" sx={{ color: netVat >= 0 ? '#2563eb' : '#dc2626', fontWeight: 500 }}>
                                {netVat >= 0 ? 'To Pay to Tax Authority' : 'Reclaimable / Credit'}
                            </Typography>
                        </div>
                    </Paper>

                    {/* Collected VAT */}
                    <Paper sx={{ p: 3, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e5e7eb', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#ecfdf5', padding: '12px', borderRadius: '12px', color: '#10b981' }}>
                            <ArrowUpward sx={{ fontSize: 32 }} />
                        </div>
                        <div>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Collected (TVA +)</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827' }}>
                                ${totalCollected.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Typography>
                        </div>
                    </Paper>

                    {/* Paid VAT */}
                    <Paper sx={{ p: 3, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e5e7eb', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#fff7ed', padding: '12px', borderRadius: '12px', color: '#f97316' }}>
                            <ArrowDownward sx={{ fontSize: 32 }} />
                        </div>
                        <div>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Paid (TVA -)</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827' }}>
                                ${totalPaid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Typography>
                        </div>
                    </Paper>
                </div>
                {/* Transactions Table */}
                <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="vat transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600, backgroundColor: '#f9fafb', color: '#4b5563' }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: 600, backgroundColor: '#f9fafb', color: '#4b5563' }}>Type</TableCell>
                                    <TableCell sx={{ fontWeight: 600, backgroundColor: '#f9fafb', color: '#4b5563' }}>Source</TableCell>
                                    <TableCell sx={{ fontWeight: 600, backgroundColor: '#f9fafb', color: '#4b5563' }}>Reference / Description</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, backgroundColor: '#f9fafb', color: '#4b5563' }}>Amount (USD)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vatTransactions.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                                            <Typography variant="body1" color="textSecondary">No VAT transactions found.</Typography>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    vatTransactions
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`${row.id}-${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell sx={{ color: '#4b5563' }}>
                                                    {dayjs(row.rawDate).format('DD MMM YYYY, HH:mm')}
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={row.type}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: row.isPositive ? '#ecfdf5' : '#fff7ed',
                                                            color: row.isPositive ? '#065f46' : '#9a3412',
                                                            fontWeight: 600,
                                                            border: `1px solid ${row.isPositive ? '#a7f3d0' : '#ffedd5'}`
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 500, color: '#111827' }}>{row.source}</TableCell>
                                                <TableCell sx={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#4b5563' }}>
                                                    {row.reference}
                                                </TableCell>
                                                <TableCell align="right" sx={{ fontWeight: 700, color: row.isPositive ? '#10b981' : '#f97316' }}>
                                                    {row.isPositive ? '+' : '-'} ${row.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[15, 30, 50, 100]}
                        component="div"
                        count={vatTransactions.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        sx={{ borderTop: '1px solid #e5e7eb' }}
                    />
                </Paper>
            </div>
        </div>
    );
};

export default VatAccountView;
