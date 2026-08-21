import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setCredentials } from './features/auth/authSlice';
import './css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import Image from './img/Image1.png'
import LogoutIcon from './component/NetworkLogoutIcon';
import { Person } from '@mui/icons-material';
import LoadingView from './component/LoadingView';
import { jwtDecode } from 'jwt-decode';
import { useLoginMutation } from './app/api/apiSlice';

import { Modal, Box, Typography, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios';
import { cachedGet } from './utils/apiCache';
import { ENDPOINT_URL } from './apiConfig';

function Loginemployee() {
	const [employeeName, setEmployeeName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [login, { data }] = useLoginMutation();

	const [isLoading, setIsLoading] = useState(false);
	const [isErrorLoading, setIsErrorLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null)

	const [showBranchModal, setShowBranchModal] = useState(false);
	const [availableBranches, setAvailableBranches] = useState([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
	const [selectedBranch, setSelectedBranch] = useState('HQ');
	const [tempUserData, setTempUserData] = useState(null);

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

				const empRes = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${user.userId}`);
				const role = empRes.data.data.role;

				if (employeeName && employeeName.trim().toUpperCase() === 'GG') {
					setAvailableBranches([...allBranches]);
					setSelectedBranch(allBranches[0] ? allBranches[0].branchId : 'HQ');
				} else {
					const accessRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
					const myAccess = accessRes.data.data.slice().reverse().find(a => a.userID === user.userId);
					if (myAccess && myAccess.branches && myAccess.branches.length > 0) {
						const myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchId));
						setAvailableBranches(myBranches.length > 0 ? myBranches : [{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
						if (myBranches.length > 0) setSelectedBranch(myBranches[0].branchId);
					} else {
						setAvailableBranches([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
						setSelectedBranch('HQ');
					}
				}
			} catch (err) {
				console.error('Error fetching branches/access', err);
			}

			setShowBranchModal(true);

		} catch (err) {
			setIsErrorLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setErrorMsg('An Error As Occurred, Try Again ');
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
			// The original navigates to /AdminHome, which seems wrong for employee but keeping original logic
			navigate('/AdminHome');
		}
	}
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
						{isLoading ? (<LoadingView />) : (<div> {isErrorLoading ? (<LoadingView />) : (<form onSubmit={handleSubmit} className="login100-form">
							{errorMsg ? <p style={{ color: 'red', position: 'fixed', zIndex: '1', top: '37%', marginLeft: '40px' }}>{errorMsg}</p> : ''}
							<span className="login100-form-title">
								Employee Login
							</span>
							<div className="wrap-input100 " >
								<input required className="input100" type="text" name="employeeName" placeholder="User Name" onChange={(e) => setEmployeeName(e.target.value)} />
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<Person />
								</span>
							</div>
							<div className="wrap-input100 ">
								<input required className="input100" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<LockIcon />
								</span>
							</div>
							<div className="container-login100-form-btn">
								<button type='submit' className="login100-form-btn">Login</button>
							</div>
							<br />
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
export default Loginemployee