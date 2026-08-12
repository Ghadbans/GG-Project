import React, { useState, useMemo } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, TextField, FormControl, InputLabel,
    Select, MenuItem, Grid, Card, CardContent, Dialog,
    DialogTitle, DialogContent, AppBar, Toolbar, Slide, IconButton, Button
} from '@mui/material';
import { Close, FileDownload } from '@mui/icons-material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SupplierReportInfo({ onSuppliers, onItemPurchase }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPaid, setFilterPaid] = useState('All');
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);

    const processedData = useMemo(() => {
        let suppliersList = onSuppliers || [];
        let purchasesList = onItemPurchase || [];

        const supplierMap = {};

        // Initialize map with all suppliers
        suppliersList.forEach(supplier => {
            supplierMap[supplier._id] = {
                id: supplier._id,
                name: supplier.supplierName,
                storeName: supplier.storeName,
                totalBilled: 0,
                totalPaid: 0,
                balance: 0,
                status: 'Paid',
                purchases: []
            };
        });

        // Map purchases to suppliers and calculate
        purchasesList.forEach(purchase => {
            // Find supplier match (either by ID or storeName/manufacturer string match)
            let matchedSupplierId = purchase.manufacturerID;
            
            // Fallback if ID is missing but we have name match
            if (!matchedSupplierId) {
                const found = suppliersList.find(s => s.storeName === purchase.manufacturer || s.supplierName === purchase.manufacturer);
                if (found) matchedSupplierId = found._id;
            }

            if (matchedSupplierId && supplierMap[matchedSupplierId]) {
                const totalVal = purchase.totalUSD !== undefined ? purchase.totalUSD : (purchase.total || 0);
                
                let purchaseStatus = purchase.status || 'Unpaid';
                if (purchaseStatus.toLowerCase() === 'partially-paid') {
                    purchaseStatus = 'Partially-Paid';
                }

                let paidVal = 0;
                if (purchaseStatus.toLowerCase() === 'paid') {
                    paidVal = totalVal;
                } else if (purchaseStatus === 'Partially-Paid') {
                    paidVal = (purchase.payments || []).reduce((sum, p) => 
                        sum + (p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)))), 0
                    );
                }
                
                const unpaidVal = Math.max(0, totalVal - paidVal);

                supplierMap[matchedSupplierId].purchases.push({
                    ...purchase,
                    calculatedTotal: totalVal,
                    calculatedPaid: paidVal,
                    calculatedBalance: unpaidVal,
                    displayStatus: purchaseStatus
                });

                supplierMap[matchedSupplierId].totalBilled += totalVal;
                supplierMap[matchedSupplierId].totalPaid += paidVal;
            }
        });

        // Finalize balance and overall status
        Object.values(supplierMap).forEach(s => {
            s.balance = s.totalBilled - s.totalPaid;
            if (s.totalBilled === 0) {
                s.status = '-';
            } else if (s.balance <= 0) {
                s.status = 'Paid';
            } else if (s.totalPaid > 0 && s.balance > 0) {
                s.status = 'Partially-Paid';
            } else {
                s.status = 'Unpaid';
            }
        });

        return Object.values(supplierMap).filter(s => {
            const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  s.storeName.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = filterPaid === 'All' || s.status === filterPaid;

            return matchesSearch && matchesStatus && s.purchases.length > 0; // only show suppliers with activity
        }).sort((a, b) => b.totalBilled - a.totalBilled);

    }, [onSuppliers, onItemPurchase, searchTerm, filterPaid]);

    const totals = useMemo(() => {
        return processedData.reduce((acc, curr) => ({
            billed: acc.billed + curr.totalBilled,
            paid: acc.paid + curr.totalPaid,
            balance: acc.balance + curr.balance
        }), { billed: 0, paid: 0, balance: 0 });
    }, [processedData]);

    const handleOpenDetails = (supplier) => {
        setSelectedSupplier(supplier);
        setOpenDetails(true);
    };

    const handleCloseDetails = () => {
        setOpenDetails(false);
        setSelectedSupplier(null);
    };

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Supplier Payables');

        worksheet.columns = [
            { header: 'Supplier Name', key: 'name', width: 25 },
            { header: 'Store Name', key: 'store', width: 25 },
            { header: 'Total Billed', key: 'billed', width: 15 },
            { header: 'Total Paid', key: 'paid', width: 15 },
            { header: 'Balance Due', key: 'balance', width: 15 },
            { header: 'Status', key: 'status', width: 15 },
        ];

        processedData.forEach(row => {
            worksheet.addRow({
                name: row.name,
                store: row.storeName,
                billed: row.totalBilled,
                paid: row.totalPaid,
                balance: row.balance,
                status: row.status
            });
        });

        worksheet.getRow(1).font = { bold: true };
        worksheet.addRow([]);
        worksheet.addRow({
            name: 'TOTALS',
            billed: totals.billed,
            paid: totals.paid,
            balance: totals.balance
        }).font = { bold: true };

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `Supplier_Payables_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <TextField
                    label="Search Supplier / Store"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ width: 250 }}
                />
                <FormControl size="small" sx={{ width: 180 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={filterPaid}
                        label="Status"
                        onChange={(e) => setFilterPaid(e.target.value)}
                    >
                        <MenuItem value="All">All Statuses</MenuItem>
                        <MenuItem value="Paid">Fully Paid</MenuItem>
                        <MenuItem value="Partially-Paid">Partially Paid</MenuItem>
                        <MenuItem value="Unpaid">Unpaid</MenuItem>
                    </Select>
                </FormControl>

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
                            <Typography color="textSecondary" variant="subtitle2">Total Billed</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals.billed.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="subtitle2">Total Paid to Suppliers</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${totals.paid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: '#fff3e0' }}>
                        <CardContent>
                            <Typography color="textSecondary" variant="subtitle2">Total Balance Due</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e65100' }}>${totals.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Supplier Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Store Name</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Total Billed</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Total Paid</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Balance Due</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Status</TableCell>
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
                                <TableCell>{row.storeName}</TableCell>
                                <TableCell align="right">${row.totalBilled.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                <TableCell align="right" sx={{ color: 'success.main' }}>${row.totalPaid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                <TableCell align="right" sx={{ color: row.balance > 0 ? 'error.main' : 'inherit' }}>
                                    ${row.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </TableCell>
                                <TableCell align="center">
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        backgroundColor: row.status === 'Paid' ? '#e8f5e9' : row.status === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
                                        color: row.status === 'Paid' ? '#2e7d32' : row.status === 'Partially-Paid' ? '#e65100' : '#c62828'
                                    }}>
                                        {row.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                        {processedData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                    No data found for the selected criteria
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>TOTALS</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.billed.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.paid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>${totals.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                            <TableCell sx={{ backgroundColor: '#f8f9fa' }}></TableCell>
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
                            Supplier Breakdown: {selectedSupplier?.name} ({selectedSupplier?.storeName})
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
                                    <Typography variant="overline" color="textSecondary">Total Billed</Typography>
                                    <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                                        ${(selectedSupplier?.totalBilled || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="overline" color="textSecondary">Total Paid</Typography>
                                    <Typography variant="h5" sx={{ color: '#0288d1', fontWeight: 'bold' }}>
                                        ${(selectedSupplier?.totalPaid || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="overline" color="textSecondary">Balance Due</Typography>
                                    <Typography variant="h5" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                                        ${(selectedSupplier?.balance || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Purchase Ref</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Description / Project</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Billed Amount</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Paid Amount</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Balance</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedSupplier?.purchases
                                    ?.sort((a, b) => new Date(a.itemPurchaseDate) - new Date(b.itemPurchaseDate))
                                    .map((item, idx) => {
                                        return (
                                            <TableRow key={idx} hover>
                                                <TableCell>{dayjs(item.itemPurchaseDate).format('DD/MM/YYYY')}</TableCell>
                                                <TableCell>{item.itemPurchaseNumber}</TableCell>
                                                <TableCell>{item.projectName ? item.projectName.name : item.description}</TableCell>
                                                <TableCell align="right">${(item.calculatedTotal || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                                <TableCell align="right">${(item.calculatedPaid || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                                                <TableCell align="right" sx={{ fontWeight: 'bold', color: item.calculatedBalance > 0 ? '#d32f2f' : 'inherit' }}>
                                                    ${(item.calculatedBalance || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <span style={{
                                                        padding: '4px 8px',
                                                        borderRadius: '4px',
                                                        fontSize: '0.75rem',
                                                        backgroundColor: item.displayStatus === 'Paid' ? '#e8f5e9' : item.displayStatus === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
                                                        color: item.displayStatus === 'Paid' ? '#2e7d32' : item.displayStatus === 'Partially-Paid' ? '#e65100' : '#c62828'
                                                    }}>
                                                        {item.displayStatus}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {(!selectedSupplier?.purchases || selectedSupplier.purchases.length === 0) && (
                                    <TableRow>
                                        <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                                            No purchases found for this supplier.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default SupplierReportInfo;
