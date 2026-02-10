import React from 'react'
import {Outlet ,Link } from 'react-router-dom';
import '../css/Side.css'
import PersonIcon from '@mui/icons-material/Person';
import Image from '../img/Images4.png'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Sidebar() {
  return (
    <>
    <div className='nav1'>
      <div className='nav1Item'>
        <ul className='nav-menu '>
        <li className='menu-item1'>
          <div style={{display:'flex',alignItems:'center', fontSize:'50px', gap:"10px"}}>
                <Link to="/" className='LinkName'>
                <img src={Image} style={{width:'100px', height:'50px'}}/>
                </Link>
                <span> GLOBAL GATE</span>
                </div>
            </li>
            </ul>
            <div className='nav-menu1'>
            <div className="cardNav">
            <div className="face face1">
                <div className="cardNavContent">
                    <div className="cardNavIcon">
                      <span>
                      <PersonIcon className='cardNavIcon1'/>
                      </span></div>
                </div>
            </div>
            <div className="face face2">
                <div className="cardNavContent">
                    <Link to="Loginadmin" className='LinkName'> <button className='btnLoginAs'>LOGIN</button></Link>
                </div>
            </div>
        </div>
      
            </div>
        
        <Outlet></Outlet>
        </div>
    </div>
    </>
  )
}

export default Sidebar
