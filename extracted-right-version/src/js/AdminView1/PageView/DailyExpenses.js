import React, { useState } from 'react'
import './Chartview.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
function DailyExpenses() {
    const [show, setShow] = useState(false);
    const toggleModal = () => {
        setShow(!show);
      }
    const data = [
        { id:1,description: "UAC", project:'No',dailyExDate:"24/06/2023",
        dailyExDay: 'Monday', dailyExQty:2, dailyExPriceUnit:100, dailyExTotal:200, Currency:'FC'},
    ]
  return (
    <div>
        <div className='Customerbuttonadd'>
          <button className='btn1' onClick={() => setShow(!show)}> Add </button>
          <div className='modalView4'>
          {
       show?
            <div className='Modal1'>
            
            <form className=''>
            <div className='modalhead1'>
            <div className='Submitbtn'> 
      <button type='submit' className='btn1icone'><AddIcon className='iconmo23'/></button>
      </div>
      <div>
        <CloseIcon style={{cursor:'pointer'}} onClick= {() => toggleModal()}/>
      </div>
      </div>
      <div className='formhaideshow3'>
             <input type="text" name='dailyExtDescription' id='dailyExDescription' 
             placeholder='Description'/>
      </div>
      <div >
             <label className='statusBilllabel'>
                Project 
                <select className='select-box'>
                <option value=''>
                        Select an Options
                    </option>
                    <option value='fullPaid'>
                    Project Name
                    </option>
                    <option value='partially'>
                       No
                    </option>
                </select>
             </label>
      </div>
        
      <div className='formhaideshow'>
      <input type="date" name='dailyExtDate'
       id='dailyExtDate' placeholder='Date'/>
       <input type="text" name='dailyExtDay'
       id='dailyExtDay' placeholder='Day'/>
      </div>
      <div className='formhaideshow'>
             <input type="number" name='dailyExtQty' id='dailyExtQty'
             placeholder='Qty'/>
              <input type="number" name='dailyExtPriceUnit' id='dailyExtPriceUnit'
               placeholder='U P'/>
     </div>
     <div className='formhaideshow'>
     <input type="number" name='dailyExtTotal' id='dailyExtTotal'
      placeholder='Total'/>
      </div>
      <div className='formhaideshow3'>
             <input type="text" name='dailyExtCurrency' id='dailyExCurrency' 
             placeholder='Currency'/>
      </div>
        </form>
            </div>
            :null
          }
          </div>
      </div>
        <table className='tablePurchase'>
        <thead>
                <tr>
                    <th style={{width:'50px'}}>ID</th>
                    <th>Description</th>
                    <th>Project</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th style={{width:'50px'}}>Qty</th>
                    <th style={{width:'50px'}}>P U</th>
                    <th style={{width:'50px'}}>Total</th>
                    <th>Currency</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
                {data.map((val, key) => {
                    return (
                        
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.description}</td>
                            <td>{val.project}</td>
                            <td>{val.dailyExDate}</td>
                            <td>{val.dailyExDay}</td>
                            <td>{val.dailyExQty}</td>
                            <td>{val.dailyExPriceUnit}</td>
                            <td>{val.dailyExTotal}</td>
                            <td>{val.Currency}</td>
                            <td><span className='span1'>
                                <EditIcon/>
                                <DeleteIcon/>
                                </span></td>

                        </tr>
                    )
                })}
                </tbody>
                
            </table>
    </div>
  )
}

export default DailyExpenses
