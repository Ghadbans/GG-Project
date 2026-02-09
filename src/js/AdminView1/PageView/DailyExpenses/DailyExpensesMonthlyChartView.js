import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import db from '../../../dexieDb';
  

function DailyExpensesMonthlyChartView() {
    const [monthExpensesTotal, setMonthExpensesTotal] = useState([]);
    const [yearExpensesTotal, setYearExpensesTotal] = useState(()=>{
        const date1 = new Date()
        return date1
      });
    const [categories,setCategories] = useState([]);
useEffect(()=> {
        const fetchData = async () => {
         if (navigator.onLine) {
           try {
             const [expenseResponse,categoryResponse] = await Promise.all([
               axios.get('https://globalgate-backend-production.up.railway.app/endpoint/expense'),
               axios.get('https://globalgate-backend-production.up.railway.app/endpoint/expensesCategory')
             ])
             setMonthExpensesTotal(expenseResponse.data.data.filter(row=>dayjs(row.expenseDate).format('YYYY') === dayjs(yearExpensesTotal).format('YYYY')));
             setCategories(categoryResponse.data.data);
           } catch (error) {
             console.log(error)
           }
         } else {
          const offLineDailyExpenses = await db.dailyExpenseSchema.toArray();
          const offLineDailyExpensesCategory = await db.dailyExpensesCategorySchema.toArray();
          setMonthExpensesTotal(offLineDailyExpenses);
          setCategories(offLineDailyExpensesCategory);
         }
        }
        fetchData()
        
      },[yearExpensesTotal])

      const [totalExpenses,setTotalExpenses]= useState(0)
      useEffect(()=>{
       const ExT= monthExpensesTotal.reduce((sum,row)=> sum + row.total,0 );
       setTotalExpenses(ExT)
      },[monthExpensesTotal])
      
      const TotalMonth = monthExpensesTotal? monthExpensesTotal.reduce((acc, item) =>{
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
     
      const categoryTotalChart = categories.map((row)=>({
        id: row._id,
        name: row.expensesCategory,
        total: monthExpensesTotal.reduce((acc,expense)=>{
          if (expense.expenseCategory._id === row._id) {
            return acc + parseFloat(expense.total)
          }
          return acc
        },0)
      }))
      const categoryTotalChart1 = categoryTotalChart.map((row)=>({
        id: row._id,
        name: row.name,
        total: row.total.toFixed(2)
      }))
  return (
    <div>
      <div style={{padding:'20px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
         format='YYYY' 
          label={'"year"'} views={['year']}
          name='yearExpensesTotal'
          value={dayjs(yearExpensesTotal)}
          onChange={(date)=> setYearExpensesTotal(date)}
          />
        </DemoContainer>
      </LocalizationProvider>
      </div>
      <Grid container style={{alignItems:'center'}} spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ minWidth: 1000, height: 400 }}>
            <CardContent>
              <section>
              <Typography sx={{position:'relative',float:'right',color:'#8884d8', fontSize:'20px'}}>Total Expenses: <span style={{color:'gray'}}><span>$</span> {totalExpenses?totalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</span></Typography>
              <br/>
              </section>
          <Typography sx={{color:'#8884d8'}}>Total Expenses per Month</Typography>
          <LineChart
      dataset={sortArrayByMonth}
      xAxis={[{ scaleType: 'point', data: sortArrayByMonth.map((row)=> row.month) }]}
      series={[{ dataKey: 'total',area: true}]}
      sx={{width:'100%'}}
      height={350}
    />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default DailyExpensesMonthlyChartView
