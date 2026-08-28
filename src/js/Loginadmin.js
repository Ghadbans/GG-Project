import React, { useState, useRef, useEffect } from 'react'
import { setCredentials } from './features/auth/authSlice';
import './css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import Image from './img/Image1.png'
import LogoutIcon from './component/NetworkLogoutIcon';
import { Person, VisibilityOff } from '@mui/icons-material';
import LoadingView from './component/LoadingView';
import { jwtDecode } from 'jwt-decode';
import { useLoginMutation } from './app/api/apiSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setUser } from './features/auth/authSlice';
import { Checkbox, Modal, Box, Typography, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import axios from 'axios';
import { cachedGet } from './utils/apiCache';
import { ENDPOINT_URL } from './apiConfig';


function Loginadmin() {
	useEffect(() => {
		const fetchData = async () => {
			// Online-only: No need to pre-cache data into Dexie
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

	const [showBranchModal, setShowBranchModal] = useState(false);
	const [availableBranches, setAvailableBranches] = useState([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
	const [selectedBranch, setSelectedBranch] = useState('HQ');
	const [tempUserData, setTempUserData] = useState(null);

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

		try {
			setIsLoading(true);
			const userData = await login({ employeeName, password }).unwrap()
			await new Promise((resolve) => setTimeout(resolve, 500));
			const user = jwtDecode(userData.token);
			setTempUserData({ user, userData });

			// Fetch Branches logic
			try {
				const profileRes = await axios.get(`${ENDPOINT_URL}/companyProfile`);
				let allBranches = [{ branchId: 'HQ', branchName: 'HeadQuarters' }];
				if (profileRes.data && profileRes.data.data && profileRes.data.data.length > 0) {
					const profile = profileRes.data?.data?.[0];
					if (profile.branches && profile.branches.length > 0) {
						allBranches = profile.branches;
					}
				}

				// If CEO, give all. Else fetch GrantAccess.
				let role = user?.role || user?.data?.role;
				if (!role) {
					try {
						const empRes = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${user.userId}`);
						role = empRes.data?.data?.role;
					} catch (e) {
						console.error("Error fetching role", e);
					}
				}

				if (employeeName && employeeName.trim().toUpperCase() === 'GG') {
					setAvailableBranches([...allBranches]);
					setSelectedBranch(allBranches[0] ? allBranches[0].branchId : 'HQ');
				} else {
					// Fetch Grant Access for this user
					const accessRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
					const myAccess = accessRes.data.data.slice().reverse().find(a => a.userID === user.userId);
					if (myAccess && myAccess.branches && myAccess.branches.length > 0) {
						const myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchName) || myAccess.branches.includes(b.branchId));
						if (myBranches.length > 0) {
							setAvailableBranches(myBranches);
							setSelectedBranch(myBranches[0].branchId);
						} else {
							setIsErrorLoading(true);
							setErrorMsg('Your account has not been assigned to any branch. Please contact your administrator.');
							return;
						}
					} else {
						setIsErrorLoading(true);
						setErrorMsg('Your account has not been assigned to any branch. Please contact your administrator.');
						return;
					}
				}

			} catch (err) {
				console.error('Error fetching branches/access', err);
			}

			setShowBranchModal(true);

		} catch (error) {
			console.log(error)
			setIsErrorLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setErrorMsg('An Error As Occurred, Try Again');
		} finally {
			setIsLoading(false)
			setIsErrorLoading(false)
		}
	}

	const handleBranchSelectSubmit = () => {
		if (tempUserData) {
			const { user, userData } = tempUserData;
			localStorage.setItem('user', user.userId);
			localStorage.setItem('token', userData.token);
			localStorage.setItem('activeSidebarMenu', '1');
			localStorage.setItem('activeSidebarMenuE2', '1');
			localStorage.setItem('selectedBranch', selectedBranch);
			
			setEmployeeName('');
			setPassword('');
			setShowBranchModal(false);
			navigate('/AdminHome');
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
							<img  src={Image} />
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

			<Modal
				open={showBranchModal}
				onClose={() => {}}
				aria-labelledby="branch-modal-title"
			>
				<Box sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					bgcolor: 'background.paper',
					boxShadow: 24,
					p: 4,
					borderRadius: 2
				}}>
					<Typography id="branch-modal-title" variant="h6" component="h2" mb={2}>
						Select Branch
					</Typography>
					<FormControl fullWidth size="small">
						<InputLabel>Branch</InputLabel>
						<Select
							value={selectedBranch}
							label="Branch"
							onChange={(e) => setSelectedBranch(e.target.value)}
						>
								{availableBranches.map(branch => (
									<MenuItem key={branch.branchId} value={branch.branchId}>
										{branch.branchId} - {branch.branchName}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<Box mt={3} display="flex" justifyContent="flex-end">
						<Button variant="contained" color="primary" onClick={handleBranchSelectSubmit}>
							Continue
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	)
}

export default Loginadmin