import React, { useEffect,useState } from 'react';
import axios from 'axios';
  import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import dayjs from 'dayjs';
  import { LineChart } from '@mui/x-charts/LineChart';
  import { Card, CardContent, Grid, Typography } from '@mui/material';
  import db from '../../../dexieDb';
    

function CategoryChart({onChangeId}) {

    const [expenses,setExpenses] = useState([]);
    const [yearExpensesTotal, setYearExpensesTotal] = useState('');
      useEffect(()=>{
        const fetchData = async () => {
         if (navigator.onLine) {
           try {
             const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/expense')
             setExpenses(res.data.data);
           } catch (error) {
             console.error('Error fetching data:', error); 
           }
         } else {
          const offLineDailyExpenses = await db.dailyExpenseSchema.toArray();
          setExpenses(offLineDailyExpenses);
         }
        }
        fetchData()
        const dateNow = new Date();
        setYearExpensesTotal(dayjs(dateNow).format('YYYY'))
      },[]);
    
      const filteredArray = expenses.filter((row)=> row.expenseCategory._id === onChangeId)
      .map((row)=>({
        ...row,
        id: row._id,
        dataField: dayjs(row.expenseDate).format('DD/MM/YYYY'),
        category: row.expenseCategory.expensesCategory,
      }))
      const TotalMonth =filteredArray? filteredArray.reduce((acc, item) =>{
        const month = dayjs(item.expenseDate).format('MMMM');
        const year = dayjs(item.expenseDate).format('YYYY');
        if (!acc[month]) {
          acc[month] = {year,month, total: 0}
        }
        acc[month].total += parseFloat(item.total)
        return acc
      },{}):''
      const newMonthArray=(Object.entries(TotalMonth).map(([month,total])=>({
        month:total.month,total:parseFloat(total.total.toFixed(2)),year:total.year
      })))
      const sortArrayByMonth = newMonthArray.sort((a,b)=> {
        const months = ['January','February','March','April','May','June','August','September','October','November','December']
        return months.indexOf(a.month) - months.indexOf(b.month)
      }).filter(row=>{
        const rowDate = dayjs(row.year).format('YYYY');
        return rowDate === dayjs(yearExpensesTotal).format('YYYY')
      })
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
          views={['year']}
          label='Year'
          name='yearExpensesTotal'
          value={dayjs(yearExpensesTotal)}
          onChange={(date)=> setYearExpensesTotal(date)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <LineChart
      dataset={sortArrayByMonth}
      xAxis={[{ scaleType: 'point', data: sortArrayByMonth.map((row)=> row.month) }]}
      series={[{ dataKey: 'total',
      area: true,}]}
      sx={{width:'100%'}}
      height={300}
    />
    </div>
  )
}

export default CategoryChart
