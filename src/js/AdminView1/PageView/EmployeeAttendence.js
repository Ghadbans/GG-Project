import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const data = [
    { id:1,fullName: "George", arrivedTime: "7h00AM",leavedTime: "18h00", date: "23/3/2023"},
    
]
function EmployeeAttendence() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  }
  return (
    <div>
      <div className='Customerbuttonadd'>
          <button className='btn1' onClick={() => setShow(!show)}> Add </button>
          <br/><br/>
          <div className='modalView'>
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
      <div className='formhaideshow2'>
      <label className='statusBilllabel'>
                Employee
                <select className='select-box'>
                <option value=''>
                        Select an Employee
                    </option>
                    <option value='fullPaid'>
                        Employee Name
                    </option>
                </select>
             </label>
      </div>
      <div className='formhaideshow'>
        <label htmlFor='arrivedTime'> Arrived Time</label>
             <input type="time" name='arrivedTime' id='arrivedTime'
             />
     </div>
     <div className='formhaideshow'>
        <label htmlFor='leavedTime'> Leaved Time</label>
             <input type="time" name='leavedTime' id='leavedTime'
             />
     </div>
     <div className='formhaideshow'>
        <label htmlFor='date'> Date</label>
             <input type="date" name='date' id='date'
             />
     </div>
        </form>
            </div>
            :null
          }
          </div>
      </div>

        <div className='employeeth'>
        <table>
        <thead>
                <tr>
                    <th>Id</th>
                    <th>Full-Name</th>
                    <th>Arrived-Time</th>
                    <th>Leaved-Time</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
                {data.map((val, key) => {
                    return (
                         <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.fullName}</td>
                            <td>{val.arrivedTime}</td>
                            <td>{val.leavedTime}</td>
                            <td>{val.date}</td>
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
    </div>
  )
}

export default EmployeeAttendence
