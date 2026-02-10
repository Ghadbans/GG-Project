import React, { useState, useRef, useEffect } from 'react'
import { setCredentials } from './features/auth/authSlice';
import './css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import Image from './img/Image1.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Person, VisibilityOff } from '@mui/icons-material';
import LoadingView from './component/LoadingView';
import { jwtDecode } from 'jwt-decode';
import { useLoginMutation } from './app/api/apiSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setUser } from './features/auth/authSlice';
import { Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import axios from 'axios';
import db from './dexieDb';

function Loginadmin() {
	useEffect(() => {
		const fetchData = async () => {
			if (navigator.onLine) {
				const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/employeeuser')
				await Promise.all(res.data.data.map(async (item) => {
					await db.employeeUserSchema.put({ ...item, synced: true, updateS: true })
				}))
				const resG = await axios.get('https://gg-project-production.up.railway.app/endpoint/grantAccess')
				await Promise.all(resG.data.data.map(async (item) => {
					await db.grantAccessSchema.put({ ...item, synced: true, updateS: true })
				}))
			}
		}
		fetchData()
	}, [])
	const [checkUser, setCheckUser] = useState(
		localStorage.getItem('Check') === 'true'
	);
	const [employeeName, setEmployeeName] = useState(
		localStorage.getItem('UserNameInfo') || ''
	);
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	};
	const navigate = useNavigate();
	const [login, { data }] = useLoginMutation();
	const [isLoading, setIsLoading] = useState(false);
	const [isErrorLoading, setIsErrorLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	useEffect(() => {
		localStorage.setItem('Check', checkUser ? 'true' : 'false')
	}, [checkUser])

	const handleCheck = () => {
		setCheckUser(!checkUser)
		if (!checkUser) {
			localStorage.setItem('UserNameInfo', employeeName)
			localStorage.removeItem('UserPassInfo', password)
		} else {
			localStorage.removeItem('UserNameInfo')
			localStorage.removeItem('UserPassInfo')
		}
	}

	const handleChangeUser = (e) => {
		setEmployeeName(e.target.value)
		if (checkUser) {
			localStorage.setItem('UserNameInfo', e.target.value)
		}
	}
	const handleChangePass = (e) => {
		setPassword(e.target.value)
		if (checkUser) {
			localStorage.removeItem('UserPassInfo', e.target.value)
		}
	}

	const handleClick = () => {
		// Now you can navigate programmatically to other pages using navigate
		navigate('/');
	};
	const handleSubmit = async (e) => {
		e.preventDefault()

		if (navigator.onLine) {
			try {
				setIsLoading(true);
				const userData = await login({ employeeName, password }).unwrap()
				await new Promise((resolve) => setTimeout(resolve, 500));
				const user = jwtDecode(userData.token);
				if (userData) {
					await db.userAccount.put({ idInfo: 'Credentials', employeeName, password, synced: true, updateS: true })
				}
				localStorage.setItem('user', user.userId);
				setEmployeeName('');
				setPassword('');
				navigate('/AdminHome');
			} catch (error) {
				console.log(error)
				setIsErrorLoading(true);
				await new Promise((resolve) => setTimeout(resolve, 500));
				setErrorMsg('An Error As Occurred, Try Again');
			} finally {
				setIsLoading(false)
				setIsErrorLoading(false)
			}
		} else {
			const resLocal = await db.userAccount.get({ idInfo: 'Credentials' })
			if (resLocal && resLocal.employeeName === employeeName && resLocal.password === password) {
				setIsLoading(true);
				const resLocalInfo = await db.employeeUserSchema.get({ employeeName: resLocal.employeeName })
				await new Promise((resolve) => setTimeout(resolve, 500));
				localStorage.setItem('user', resLocalInfo._id);
				setEmployeeName('');
				setPassword('');
				navigate('/AdminHome');
			} else {
				setIsErrorLoading(true);
				await new Promise((resolve) => setTimeout(resolve, 500));
				setErrorMsg('An Error As Occurred, Try Again');
				setIsErrorLoading(false)
			}
		}
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSubmit(e);
		}
	};
	return (
		<div>
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-pic js-tilt" >
							<img src={Image} />
						</div>
						<button onClick={handleClick} className='btnBack'>
							<LogoutIcon className='btnBackIcon' />
						</button>
						<form onSubmit={handleSubmit} className="login100-form">
							{errorMsg ? <p style={{ color: 'red', position: 'fixed', zIndex: '1', top: '37%', marginLeft: '40px' }}>{errorMsg}</p> : ''}
							<span className="login100-form-title">
								Login
							</span>
							<div className="wrap-input100 " >
								<input required className="input100" type="text" name="employeeName" placeholder="User Name" value={employeeName} onChange={handleChangeUser} onKeyDown={handleKeyDown} />
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<Person />
								</span>
							</div>
							<div className="wrap-input100 ">
								<input required className="input100" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={password} onChange={handleChangePass} onKeyDown={handleKeyDown} />
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<LockIcon />
									<button type='button' style={{ border: 'none', backgroundColor: '#e6e6e6' }} onClick={handleClickShowPassword}>{showPassword ? <Visibility style={{ cursor: 'pointer', pointerEvents: 'auto' }} /> : <VisibilityOff style={{ cursor: 'pointer', pointerEvents: 'auto' }} />}</button>
								</span>
							</div>
							<span className="txt2" style={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: '#4158d0' }}>
								<Checkbox checked={checkUser} onChange={handleCheck} /> Remember Me
							</span>
							<div className="container-login100-form-btn">
								<button type='submit' className="login100-form-btn">Login</button>
							</div>
						</form>
						<br />
						<div className="text-center p-t-12">
							<span className="txt1">
								Forgot Password
							</span>
							<span className="txt2">
								Contact The Admin
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loginadmin
