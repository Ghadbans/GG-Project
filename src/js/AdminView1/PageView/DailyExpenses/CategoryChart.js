import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent, Grid, Typography, Button, Box, Paper, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssessmentIcon from '@mui/icons-material/Assessment';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function CategoryChart({ onChangeId, onSelectMonth }) {
  const [expenses, setExpenses] = useState([]);
  const [yearExpensesTotal, setYearExpensesTotal] = useState(() => dayjs().format('YYYY'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/expense?summary=true`);
        setExpenses(res.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const selectedYear = typeof yearExpensesTotal === 'string' ? yearExpensesTotal : dayjs(yearExpensesTotal).format('YYYY');

  // Filter expenses by category
  const filteredCategoryExpenses = expenses.filter((row) => row.expenseCategory?._id === onChangeId);

  // Group by month for the selected year
  const monthlyStats = MONTH_NAMES.map((monthName, index) => {
    const monthExpenses = filteredCategoryExpenses.filter((row) => {
      const rowDate = dayjs(row.expenseDate);
      return rowDate.format('YYYY') === selectedYear && rowDate.month() === index;
    });

    const total = monthExpenses.reduce((sum, item) => sum + parseFloat(item.total || 0), 0);
    return {
      month: monthName,
      monthIndex: index,
      year: selectedYear,
      count: monthExpenses.length,
      total: Math.round(total * 100) / 100
    };
  });

  // Data for chart (only months with data or non-zero, or all 12 months)
  const chartData = monthlyStats.map(m => ({
    month: m.month.slice(0, 3), // Jan, Feb, etc.
    total: m.total
  }));

  const yearlyTotal = monthlyStats.reduce((sum, m) => sum + m.total, 0);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              views={['year']}
              label='Select Year'
              value={dayjs(selectedYear, 'YYYY')}
              onChange={(date) => {
                if (date) setYearExpensesTotal(dayjs(date).format('YYYY'));
              }}
              sx={{ width: 160 }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '12px' }}>
            Total for {selectedYear}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#30368a' }}>
            $ {yearlyTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
        </Box>
      </Box>

      {/* Line Chart */}
      <Box sx={{ width: '100%', my: 2 }}>
        <LineChart
          dataset={chartData}
          xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
          series={[{
            dataKey: 'total',
            area: true,
            color: '#0284c7',
            valueFormatter: (v) => v ? `$ ${Number(v).toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '$ 0.00'
          }]}
          height={260}
          margin={{ left: 60, right: 20, top: 20, bottom: 30 }}
        />
      </Box>

      {/* Monthly Breakdown Cards Grid */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1e293b', display: 'flex', alignItems: 'center', gap: 1 }}>
          <AssessmentIcon fontSize="small" sx={{ color: '#30368a' }} />
          Monthly Statement Breakdown ({selectedYear})
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '13px' }}>
          Click any month card to view and print its detailed transaction statement.
        </Typography>

        <Grid container spacing={1.5}>
          {monthlyStats.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.month}>
              <Paper
                elevation={item.total > 0 ? 2 : 0}
                onClick={() => {
                  if (typeof onSelectMonth === 'function') {
                    onSelectMonth(selectedYear, item.monthIndex, item.month);
                  }
                }}
                sx={{
                  p: 1.5,
                  borderRadius: '10px',
                  border: item.total > 0 ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                  backgroundColor: item.total > 0 ? '#f0f9ff' : '#fafafa',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                    borderColor: '#30368a',
                    backgroundColor: '#e0f2fe'
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: item.total > 0 ? '#0369a1' : '#64748b' }}>
                    {item.month}
                  </Typography>
                  {item.count > 0 && (
                    <Chip
                      size="small"
                      label={`${item.count} item${item.count > 1 ? 's' : ''}`}
                      sx={{ height: '20px', fontSize: '10px', backgroundColor: '#bfdbfe', color: '#1e40af' }}
                    />
                  )}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '15px', color: item.total > 0 ? '#0f172a' : '#94a3b8' }}>
                    $ {item.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: '14px !important' }} />}
                    sx={{
                      fontSize: '11px',
                      textTransform: 'none',
                      py: 0,
                      px: 0.8,
                      minWidth: 0,
                      color: item.total > 0 ? '#0284c7' : '#94a3b8'
                    }}
                  >
                    Statement
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default CategoryChart;
