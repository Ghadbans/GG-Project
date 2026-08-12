import React, { useEffect,useState,useRef } from 'react';
import '../Chartview.css';
import dayjs from 'dayjs'
import axios from 'axios';
import { CurrencyExchange } from '@mui/icons-material';

const PrintPayRoll = React.forwardRef(({id},ref) => {
    const [payRoll,setPayRoll] = useState([]);
    const [employee,setEmployee] = useState([]);
    useEffect(()=> {
        axios.get('https://gg-project-production.up.railway.app/endpoint/payRoll')
        .then(res => {
          // Handle the response data here
          setPayRoll(res.data.data.reverse());
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
      },[])
      useEffect(()=> {
        axios.get('https://gg-project-production.up.railway.app/endpoint/employee')
                .then(res => {
                        // Handle the response data here
                        const formatDate = res.data.data
                        setEmployee(formatDate);
                })
                .catch(error => {
                        // Handle errors
                        console.error('Error fetching data:', error);
        });
      },[])
  return (
    <div>
           {payRoll?.filter(row=> row._id === id)?.map((row)=>{
           const related = employee.find((Item)=>Item._id === row.employeeName.id) 
            return(
           <div key={row._id} ref={ref} style={{fontSize:'12px'}}>
             <table className="secondTable" style={{fontSize:'80%',marginBottom:'0px',border:'1px solid #DDD'}}>
           <thead>
             <tr>
               <th colSpan={5}  style={{padding:'5px',border:'1px solid #DDD',backgroundColor:'#316FF6', color:'white'}}>Global Gate</th>
             </tr>
             <tr>
               <th  style={{padding:'5px',border:'1px solid #DDD',backgroundColor:'#e8f7fe', color:'black'}} colSpan={5}>ٍSalary Slip for the month Of: {dayjs(row.month).format('MMMM-YYYY')}</th>
             </tr>
           </thead>
           <tbody>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Employee Name</td>
            <td style={{width:'200px',border:'1px solid #DDD'}} colSpan={2}>{row.employeeName.name?row.employeeName.name:''}</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Total Days</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}> {row.daysOpen}  
             </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Employee Details</td>
            <td style={{width:'200px',border:'1px solid #DDD'}} colSpan={2}>{related.employeePhone !==undefined?related.employeePhone:''}</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>LOPs</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>   
            {row.Lops} 
             </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Employee Id</td>
            <td style={{width:'200px',border:'1px solid #DDD'}} colSpan={2}>{related.employeeId}</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Paid Days</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>   
            {row.daysW} 
              </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Grade</td>
            <td style={{width:'200px',border:'1px solid #DDD'}} colSpan={2}>{related.employeeRole}</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Bank Name</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>{related.bankName}</td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>Date</td>
            <td style={{width:'200px',border:'1px solid #DDD'}} colSpan={2}>{dayjs(row.payDate).format('DD-MMMM-YYYY')}</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>A/C No.</td>
            <td style={{width:'200px',border:'1px solid #DDD'}}>{related.bankAccountNumber}</td>
          </tr>
          <tr>
            <td style={{width:'400px',border:'1px solid #DDD'}} colSpan={2}>Department</td>
            <td style={{width:'400px',border:'1px solid #DDD'}} colSpan={3}>{related.department}</td>
          </tr>
        </tbody>
           <thead>
             <tr>
               <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Earning (FC)</th>
               <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Actual Salary (FC)</th>
               <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Earnings (FC)</th>
               <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}} colSpan={2}>Deductions (FC)</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Basic wage</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
                 {row.basicSalary}
                 </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{row.earningSalary}</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>In advanced allowances </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{row.advancedSalary}</td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Transport allowances</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
               {row.basicTransport}
                 </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
                 {row.transportEarning}
                 </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Transport</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
                 {row.transportDeduction}
                </td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Food allowances</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
               {row.foodBasic}
               </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
             {row.foodEarning}
               </td>
                 <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Food</td>
                 <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
                 {row.foodDeduction}
               </td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Bounce allowances 3%</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
               {row.bounceAllowances}
               </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> {row.bounceAllowancesEarning}</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Loan recovery</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{row.loan}</td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Other</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{row.other}</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> {row.otherEarning}</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Item lost recovery</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{row.itemLost}</td>
             </tr>
             </tbody>
         </table>
         <table className="secondTable" style={{fontSize:'80%',marginBottom:'5px',border:'1px solid #DDD', color:'black'}}>
           <tbody>
             <tr>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={6}>Total(FC)</td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Basic:</span> <span> Fc {row.totalActualSalary.toFixed(2)}</span> </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Earning:</span> <span> Fc {row.totalActualEarning.toFixed(2)}</span> </td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Deduction:</span> <span> Fc {row.totalActualDeduction.toFixed(2)}</span> </td>
             </tr>
             <tr>
               <td style={{border:'1px solid #DDD', color:'black'}} colSpan={2}>Net payable</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.totalNet.toFixed(2)}</td>
             </tr>
             <tr>
               <td style={{border:'1px solid #DDD', color:'black'}} colSpan={2}>Net Words</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>{row.words} Franc Congolais.</td>
             </tr>
             <tr>
               <td style={{border:'1px solid #DDD', color:'black'}} colSpan={2}>Overtime</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.bonus.toFixed(2)}</td>
             </tr>
             <tr>
               <td style={{border:'1px solid #DDD', color:'black'}} colSpan={2}>Total Paid</td>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.totalPaid.toFixed(2)}</td>
             </tr>
             <tr>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={6}>Total($)</td>
             </tr>
             <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>Net payable(FC): FC{row.totalNet.toFixed(2)}</td>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}}> <span>rate</span>: {row.rate}</td>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={2}>Net payable($): ${row.totalPaidDollars.toFixed(2)}</td>
             </tr>
           </tbody>
         </table>
           </div>)})}
               </div>
  )
})

export default PrintPayRoll
