import React, { useState } from 'react'
import './Chartview.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
function ProjectInfoView() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  }
  return (
    <div>
       <div className='Customerbuttonadd'>
          <button className='btn1' onClick={() => setShow(!show)}> Add </button>
          <br/><br/>
          <div className='modalView5'>
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
      <div className='formhaideshow'>
      <label className='statusBilllabel'>
                Status 
                <select className='select-box'>
                <option value=''>
                        Select an Options
                    </option>
                    <option value='fullPaid'>
                        On-going
                    </option>
                    <option value='partially'>
                        Wait-Approval
                    </option>
                    <option value='notPaid'>
                        Completed
                    </option>
                </select>
             </label>
      </div>
      <div className='formhaideshow'>
      <label className='statusBilllabel'>
                project 
                <select className='select-box'>
                <option value=''>
                        Select a Project
                    </option>
                    <option value='fullPaid'>
                        Project Name
                    </option>
                </select>
             </label>
      </div>
      <div className='formhaideshow'>
      <label className='statusBilllabel'>
                Supervisor 
                <select className='select-box'>
                <option value=''>
                        Select a Supervisor
                    </option>
                    <option value='fullPaid'>
                        Supervisor Name
                    </option>
                </select>
             </label>
      </div>
      <div className='formhaideshow'>
      <label className='statusBilllabel'>
                Department 
                <select className='select-box'>
                <option value=''>
                        Select a Department
                    </option>
                    <option value='fullPaid'>
                        Department Name
                    </option>
                </select>
             </label>
      </div>
      <div className='formhaideshow'>
             <input type="number" name='projectBudget' id='projectBudget'
             placeholder='Budget'/>
              <input type="number" name='projectTotal' id='projectTotal'
               placeholder='Total'/>
     </div>
     <div className='formhaideshow'>
     <textarea name="description" id="description" placeholder="Description..."/>
     <br/>
     </div>
        </form>
            </div>
            :null
          }
          </div>
      </div>

      <div className='containerInfo'>
         <div className='card2'>

          {/* ''card 1'' */}
          <div className='cardProject2'>
            <div className='cardProject2head'>
              <div className='cardProject2headIcon'> 
              <div className='cardProject2headtitleinfo'>
              <p>
              <AccessTimeIcon />
              </p>
              <p>On-Going</p>
              </div>
              </div>
            </div>
            <div className='cardProject2headtitle'>
              <p>Project Name</p>
              <span><EditIcon/>
                    <DeleteIcon/> 
                   </span>
            </div>
            <div className='cardProject2Content'>
            <span>
              <p> Supervisor Name</p>
              <p>Department Name</p>
            </span>
            <span>
              <p>Budget</p>
              <p>Total Expenses</p>
            </span>
            </div>
            <hr/>
            <div className='cardProject2Bttom'>
              <p>Description</p>
              <br/>
              <br/>
              <div className='progress1'>
              <label htmlFor="project">Progress</label>
              <progress id="project" value="25" max="100"> Phase 1 25% </progress>
              </div>
            </div>
          </div>
          {/* ''end card 1'' */}
          {/* ''card 2'' */}
          <div className='cardProject2'>
          <div className='cardProject2head'>
              <div className='cardProject2headIcon'> 
              <div className='cardProject2headtitleinfo'>
              <p>
              <AccessTimeIcon />
              </p>
              <p>Wait Approval</p>
              </div>
              </div>
            </div>
            <div className='cardProject2headtitle'>
              <p>Project Name</p>
              <span><EditIcon/>
                    <DeleteIcon/> 
                   </span>
            </div>
            <div className='cardProject2Content'>
            <span>
              <p> Supervisor Name</p>
              <p>Department Name</p>
            </span>
            <span>
              <p>Budget</p>
              <p>Total Expenses</p>
            </span>
            </div>
            <hr/>
            <div className='cardProject2Bttom'>
              <p>Description</p>
              <br/>
              <br/>
              <div className='progress1'>
              <label htmlFor="project">Progress</label>
              <progress id="project" value="50" max="100"> Phase 2 50% </progress>
              </div>
            </div>
          </div>
          {/* ''end card 2'' */}
          {/* ''card 3'' */}
          <div className='cardProject2'>
          <div className='cardProject2head'>
              <div className='cardProject2headIcon'> 
              <div className='cardProject2headtitleinfo'>
              <p>
              <AccessTimeIcon />
              </p>
              <p>Completed</p>
              </div>
              </div>
            </div>
            <div className='cardProject2headtitle'>
              <p>Project Name</p>
              <span><EditIcon/>
                    <DeleteIcon/> 
                   </span>
            </div>
            <div className='cardProject2Content'>
            <span>
              <p> Supervisor Name</p>
              <p>Department Name</p>
            </span>
            <span>
              <p>Budget</p>
              <p>Total Expenses</p>
            </span>
            </div>
            <hr/>
            <div className='cardProject2Bttom'>
              <p>Description</p>
              <br/>
              <br/>
              <div className='progress1'>
              <label htmlFor="project">Progress</label>
              <progress id="project" value="100" max="100"> 100% </progress>
              </div>
            </div>
          </div>
          {/* ''end card 3'' */}


         </div>

      </div>
    
    </div>
  )
}

export default ProjectInfoView