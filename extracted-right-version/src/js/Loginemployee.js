import React,{useState, useRef,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setCredentials } from './features/auth/authSlice';
import './css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import Image from './img/Image1.png'
import LogoutIcon from '@mui/icons-material/Logout';
import {  Person } from '@mui/icons-material';
import LoadingView from './component/LoadingView';
import { jwtDecode } from 'jwt-decode';
import { useLoginMutation } from './app/api/apiSlice';

function Loginemployee() {
	const [employeeName,setEmployeeName]= useState('');
	const [password,setPassword]= useState('');
	const navigate = useNavigate();
   const [login, {data}] = useLoginMutation();
  
	const [isLoading,setIsLoading] = useState(false);
	const [isErrorLoading,setIsErrorLoading] = useState(false);
	const [errorMsg,setErrorMsg] = useState(null)
  
	const handleClick = () => {
	  // Now you can navigate programmatically to other pages using navigate
	  navigate('/');
	};
  
  const handleSubmit = async (e) => {
	e.preventDefault()
	try {
		setIsLoading(true);
		const userData = await login({ employeeName, password }).unwrap()
		await new Promise((resolve)=> setTimeout(resolve,500));
		const user = jwtDecode(userData.token);
		console.log(user.userId);
		localStorage.setItem('user',user.userId);
		setEmployeeName('');
		setPassword('');
	    navigate('/AdminHome');
	} catch (err) {
		setIsErrorLoading(true);
		await new Promise((resolve)=> setTimeout(resolve,500));
		setErrorMsg('An Error As Occurred, Try Again ');
	} finally {
		setIsLoading(false)
		setIsErrorLoading(false)
	}
}
  return (
	<div>
	<div className="limiter">
	<div className="container-login100">
		<div className="wrap-login100">
			<div className="login100-pic js-tilt" >
				<img src={Image}/>
			</div>
			<button onClick={handleClick} className='btnBack'>
		<LogoutIcon className='btnBackIcon'/>
	</button>
		{isLoading?(<LoadingView/>):( <div> {isErrorLoading? (<LoadingView/>):(  <form onSubmit={handleSubmit} className="login100-form">
	{errorMsg?<p style={{color:'red', position:'fixed', zIndex:'1', top:'37%', marginLeft:'40px'}}>{errorMsg}</p>:''}
   <span className="login100-form-title">
	   Employee Login
   </span>
   <div className="wrap-input100 " >
	   <input required className="input100" type="text" name="employeeName" placeholder="User Name" onChange={(e)=> setEmployeeName(e.target.value)} />
	   <span className="focus-input100"></span>
	   <span className="symbol-input100">
		   <Person/>
	   </span>
   </div>
   <div className="wrap-input100 ">
	   <input required className="input100" type="password" name="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
	   <span className="focus-input100"></span>
	   <span className="symbol-input100">
		   <LockIcon/>
	   </span>
   </div>
  <div className="container-login100-form-btn">
  <button type='submit' className="login100-form-btn">Login</button>
  </div>
  <br/>
  <div className="text-center p-t-12">
	   <span className="txt1">
		   Forgot Password  
	   </span>
  <span className="txt2">
		   Contact The Admin
	   </span>
   </div>
  </form>)}
  </div>
		)}
  </div>
	</div>
  
  </div>
  </div>
  )
}
export default Loginemployee
