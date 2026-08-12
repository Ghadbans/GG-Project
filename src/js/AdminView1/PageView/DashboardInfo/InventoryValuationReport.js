import React, { useMemo, useState } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, TextField, Grid, Card, CardContent, Divider
} from '@mui/material';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { FileDownload, Inventory, MonetizationOn } from '@mui/icons-material';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';

function InventoryValuationReport({ items }) {
    const [searchTerm, setSearchTerm] = useState('');

    const processedData = useMemo(() => {
        if (!items || !Array.isArray(items)) return [];

        return items
            .filter(item => item.typeItem === 'Goods')
            .filter(item =>
                item.itemName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.itemDescription?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(item => ({
                id: item._id,
                name: item.itemName || 'Unnamed Item',
                description: item.itemDescription || '-',
                quantity: item.itemQuantity || 0,
                costPrice: item.itemCostPrice || 0,
                valuation: (item.itemQuantity || 0) * (item.itemCostPrice || 0)
            }))
            .sort((a, b) => b.valuation - a.valuation);
    }, [items, searchTerm]);

    const totals = useMemo(() => {
        return processedData.reduce((acc, curr) => ({
            qty: acc.qty + curr.quantity,
            value: acc.value + curr.valuation
        }), { qty: 0, value: 0 });
    }, [processedData]);

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Inventory Valuation');
        worksheet.columns = [
            { header: 'Item Name', key: 'name', width: 30 },
            { header: 'Description', key: 'description', width: 40 },
            { header: 'Quantity', key: 'quantity', width: 12 },
            { header: 'Unit Cost ($)', key: 'costPrice', width: 15 },
            { header: 'Total Value ($)', key: 'valuation', width: 15 },
        ];

        processedData.forEach(row => worksheet.addRow(row));
        worksheet.getRow(1).font = { bold: true };
        worksheet.addRow([]);
        worksheet.addRow({ name: 'TOTALS', quantity: totals.qty, valuation: totals.value }).font = { bold: true };

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `Inventory_Valuation_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="Search Inventory"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ width: 300 }}
                />
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
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ borderLeft: '5px solid #30368a' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Inventory color="primary" />
                                <Typography color="textSecondary" variant="subtitle2">Total Units in Stock</Typography>
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{totals.qty.toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ borderLeft: '5px solid #2e7d32' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <MonetizationOn color="success" />
                                <Typography color="textSecondary" variant="subtitle2">Total Inventory Assets</Typography>
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                                ${totals.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee' }}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Item Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Description</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Qty</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Unit Cost</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Subtotal Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processedData.map((row) => (
                            <TableRow key={row.id} hover>
                                <TableCell sx={{ fontWeight: 'medium' }}>{row.name}</TableCell>
                                <TableCell sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>{row.description}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right">${row.costPrice.toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                    ${row.valuation.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </TableCell>
                            </TableRow>
                        ))}
                        {processedData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 5 }}>
                                    <Typography color="textSecondary">No items found matching your search.</Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>TOTAL INVENTORY VALUATION</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>{totals.qty}</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: '#f8f9fa' }}></TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa', fontSize: '1rem', color: '#2e7d32' }}>
                                ${totals.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default InventoryValuationReport;
