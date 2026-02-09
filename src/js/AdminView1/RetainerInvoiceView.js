import React from 'react'
import './view.css'
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RetainerAllViewTable from './PageView/RetainerView/RetainerAllViewTable';
import { Typography } from '@mui/material';
function RetainerInvoiceView() {

  return (
    <div className='Homeemployee'>
    <div className='sidemnuandcontent'>
       <SidebarDash/>
       <div className='header'>
        <div className='headername'>
          <Typography variant='h5'>
           Retainer Invoice
          </Typography>
        </div>
        <div className='box1'>
            <input type='checkbox' id='checkBox1'></input>
        <div id='centercontent'>
          <input type="text" placeholder="Type here..."/>
          <label htmlFor='checkBox1' className='iconesize'>
          <SearchIcon className='searchIcon1'/>
          </label>
        </div>
        </div>
        <div className='rightcontent'>
          <NotificationsNoneIcon className='iconesize'/>
          <Typography>User Name</Typography>
          <AccountCircleIcon className='iconesize'/>
        </div>

       </div>
     </div>
     <div className='Customerbuttonadd1'>
          <button className='btn1' >Sort By</button>
      </div>

   <div className='invoice'>
       <RetainerAllViewTable/>
       </div>
</div>
  )
}

export default RetainerInvoiceView