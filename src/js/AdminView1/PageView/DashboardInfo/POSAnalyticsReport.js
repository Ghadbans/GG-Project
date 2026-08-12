import React, { useMemo, useState } from 'react';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, FormControl, InputLabel, Select,
    MenuItem, Grid, Card, CardContent, Divider, TextField
} from '@mui/material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { LineChart } from '@mui/x-charts/LineChart';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { FileDownload, TrendingUp, Receipt, PointOfSale } from '@mui/icons-material';
import Button from '@mui/material/Button';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

function POSAnalyticsReport({ onPos }) {
    const [dateRange, setDateRange] = useState('Month');
    const [customStart, setCustomStart] = useState(dayjs().startOf('month').format('YYYY-MM-DD'));
    const [customEnd, setCustomEnd] = useState(dayjs().endOf('month').format('YYYY-MM-DD'));

    const processedData = useMemo(() => {
        if (!onPos || !Array.isArray(onPos)) return { items: [], chartData: [], stats: { revenue: 0, count: 0, profit: 0 } };

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

        const filtered = onPos.filter(inv => {
            if (dateRange === 'All') return true;
            let d = dayjs(inv.invoiceDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
            if (!d.isValid()) d = dayjs(inv.invoiceDate);
            return d.isValid() && d.isBetween(start, end, 'day', '[]');
        });

        const stats = filtered.reduce((acc, curr) => {
            const sell = (curr.TotalAmountPaid || 0) / (curr.rate || 1);
            const cost = curr.items?.reduce((sum, it) => sum + ((it.itemQty || 0) * (it.itemCost || 0)), 0) / (curr.rate || 1);

            return {
                revenue: acc.revenue + sell,
                count: acc.count + 1,
                profit: acc.profit + (sell - cost)
            };
        }, { revenue: 0, count: 0, profit: 0 });

        // Chart Data (Last 12 months)
        const months = [];
        for (let i = 11; i >= 0; i--) {
            const m = now.subtract(i, 'month');
            const startM = m.startOf('month');
            const endM = m.endOf('month');
            const monthLabel = m.format('MMM');
            const monthSales = onPos
                .filter(inv => dayjs(inv.invoiceDate).isBetween(startM, endM, 'day', '[]'))
                .reduce((sum, inv) => sum + ((inv.TotalAmountPaid || 0) / (inv.rate || 1)), 0);
            months.push({ label: monthLabel, value: monthSales });
        }

        return { items: filtered, chartData: months, stats };
    }, [onPos, dateRange, customStart, customEnd]);

    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('POS Sales');
        worksheet.columns = [
            { header: 'Invoice #', key: 'facture', width: 15 },
            { header: 'Date', key: 'date', width: 15 },
            { header: 'Customer', key: 'customer', width: 25 },
            { header: 'Total Paid (USD)', key: 'amount', width: 15 },
        ];
        processedData.items.forEach(row => {
            worksheet.addRow({
                facture: `S-${String(row.factureNumber).padStart(5, '0')}`,
                date: dayjs(row.invoiceDate).format('YYYY-MM-DD'),
                customer: row.customerName?.customerName || 'Walk-in',
                amount: (row.TotalAmountPaid || 0) / (row.rate || 1)
            });
        });
        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer]), `POS_Sales_${dayjs().format('YYYY-MM-DD')}.xlsx`);
    };

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#30368a' }}>POS Performance Overview</Typography>
                <FormControl size="small" sx={{ width: 150, ml: 'auto' }}>
                    <InputLabel>Period</InputLabel>
                    <Select value={dateRange} label="Period" onChange={(e) => setDateRange(e.target.value)}>
                        <MenuItem value="All">All Time</MenuItem>
                        <MenuItem value="Month">This Month</MenuItem>
                        <MenuItem value="Year">This Year</MenuItem>
                        <MenuItem value="Custom">Custom Range</MenuItem>
                    </Select>
                </FormControl>
                {dateRange === 'Custom' && (
                    <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
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
                    </Box>
                )}
                <Button variant="contained" startIcon={<FileDownload />} onClick={exportToExcel} sx={{ backgroundColor: '#30368a' }}>
                    Export Excel
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <PointOfSale color="primary" />
                                <Typography color="textSecondary" variant="subtitle2">Sales Volume</Typography>
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{processedData.stats.count} Transactions</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <TrendingUp color="success" />
                                <Typography color="textSecondary" variant="subtitle2">POS Revenue</Typography>
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>${processedData.stats.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Receipt color="secondary" />
                                <Typography color="textSecondary" variant="subtitle2">Gross Profit</Typography>
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'success.main' }}>+${processedData.stats.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ height: 350, mb: 4, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Sales Trend (Last 12 Months)</Typography>
                <LineChart
                    height={280}
                    series={[{ data: processedData.chartData.map(d => d.value), label: 'Monthly Sales ($)', color: '#30368a', area: true }]}
                    xAxis={[{ scaleType: 'point', data: processedData.chartData.map(d => d.label) }]}
                    margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
                />
            </Box>

            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee' }}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Invoice #</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Customer</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>Total USD</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processedData.items.slice(0, 10).map((row) => (
                            <TableRow key={row._id} hover>
                                <TableCell>S-{String(row.factureNumber).padStart(5, '0')}</TableCell>
                                <TableCell>{dayjs(row.invoiceDate).format('DD MMM YYYY')}</TableCell>
                                <TableCell>{row.customerName?.customerName || 'Walk-in'}</TableCell>
                                <TableCell align="right">${((row.TotalAmountPaid || 0) / (row.rate || 1)).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                        {processedData.items.length > 10 && (
                            <TableRow>
                                <TableCell colSpan={4} align="center" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                                    Viewing last 10 transactions. Export to Excel for full history.
                                </TableCell>
                            </TableRow>
                        )}
                        {processedData.items.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} align="center" sx={{ py: 3 }}>No data for selected period</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default POSAnalyticsReport;
