import React, { useMemo, useState } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, FormControl, InputLabel, Select,
    MenuItem, Grid, Card, CardContent, Divider, TextField
} from '@mui/material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { FileDownload } from '@mui/icons-material';
import Button from '@mui/material/Button';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

function InventoryMovementReport({ onInventoryIn, onInventoryOut }) {
    const [dateRange, setDateRange] = useState('Month');
    const [searchTerm, setSearchTerm] = useState('');

    const processedData = useMemo(() => {
        const movement = {};

        const now = dayjs();
        const start = dateRange === 'Month' ? now.startOf('month') : now.startOf('year');
        const end = now.endOf('day');

        // Process Purchases (In)
        if (Array.isArray(onInventoryIn)) {
            onInventoryIn.forEach(proc => {
                // Try parsing robustly
                let d = dayjs(proc.itemPurchaseDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
                if (!d.isValid()) d = dayjs(proc.itemPurchaseDate);

                if (dateRange !== 'All' && (!d.isValid() || !d.isBetween(start, end, 'day', '[]'))) return;

                (proc.items || []).forEach(it => {
                    const sku = it.itemName?.itemName || (typeof it.itemName === 'string' ? it.itemName : 'Unknown');
                    if (!movement[sku]) movement[sku] = { name: sku, in: 0, out: 0, balance: 0 };
                    movement[sku].in += Number(it.itemQty || 0);
                });
            });
        }

        // Process Item Outs
        if (Array.isArray(onInventoryOut)) {
            onInventoryOut.forEach(out => {
                if (dateRange !== 'All') {
                    // Try parsing robustly
                    let d = dayjs(out.itemOutDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
                    if (!d.isValid()) d = dayjs(out.itemOutDate);

                    if (!d.isValid() || !d.isBetween(start, end, 'day', '[]')) return;
                }

                (out.itemsQtyArray || []).forEach(it => {
                    const sku = it.itemName?.itemName || (typeof it.itemName === 'string' ? it.itemName : 'Unknown');
                    if (!movement[sku]) movement[sku] = { name: sku, in: 0, out: 0, balance: 0 };
                    // Use newItemOut (from ItemOut) or itemOut (fallback)
                    movement[sku].out += Number(it.newItemOut || it.itemOut || 0);
                });
            });
        }

        return Object.values(movement)
            .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(item => ({ ...item, balance: item.in - item.out }))
            .sort((a, b) => b.in + b.out - (a.in + a.out));
    }, [onInventoryIn, onInventoryOut, dateRange, searchTerm]);

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Inventory Movement');
        worksheet.columns = [
            { header: 'Item Name', key: 'name', width: 30 },
            { header: 'Total In', key: 'in', width: 15 },
            { header: 'Total Out', key: 'out', width: 15 },
            { header: 'Net Movement', key: 'balance', width: 15 },
        ];
        processedData.forEach(row => worksheet.addRow(row));
        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `Inventory_Movement_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="Search Item"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FormControl size="small" sx={{ width: 150 }}>
                    <InputLabel>Period</InputLabel>
                    <Select value={dateRange} label="Period" onChange={(e) => setDateRange(e.target.value)}>
                        <MenuItem value="Month">This Month</MenuItem>
                        <MenuItem value="Year">This Year</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" startIcon={<FileDownload />} onClick={exportToExcel} sx={{ ml: 'auto', backgroundColor: '#30368a' }}>
                    Export Excel
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Item Name</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', color: 'success.main' }}>Stock In</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', color: 'error.main' }}>Stock Out</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Net Movement</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processedData.map((row) => (
                            <TableRow key={row.name} hover>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.in.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.out.toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                    {row.balance > 0 ? `+${row.balance}` : row.balance}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default InventoryMovementReport;
