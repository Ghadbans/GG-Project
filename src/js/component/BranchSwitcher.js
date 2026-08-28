import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { ENDPOINT_URL } from '../apiConfig';

function BranchSwitcher() {
  const [availableBranches, setAvailableBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(localStorage.getItem('selectedBranch') || 'HQ');
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setIsLoading(true);
        const profileRes = await axios.get(`${ENDPOINT_URL}/companyProfile`);
        const profile = profileRes.data?.data?.[0] || {};
        let allBranches = [{ branchId: 'HQ', branchName: 'HeadQuarters' }];
        if (profile.branches && profile.branches.length > 0) {
          allBranches = profile.branches;
        }

        let role = user?.data?.role;
        const userId = user?.data?.id || localStorage.getItem('user');

        let empName = user?.data?.employeeName || user?.data?.userName;
        if (!role && userId) {
          try {
            const empRes = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${userId}`);
            role = empRes.data?.data?.role;
            empName = empRes.data?.data?.employeeName;
          } catch (e) {
            console.error('Error fetching role', e);
          }
        }

        let finalBranches = [];
        if (empName && empName.trim().toUpperCase() === 'GG') {
          finalBranches = [...allBranches];
        } else {
          const accessRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
          const myAccess = accessRes.data.data.slice().reverse().find(a => a.userID === userId);
          if (myAccess && myAccess.branches && myAccess.branches.length > 0) {
            const myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchName) || myAccess.branches.includes(b.branchId));
            finalBranches = myBranches.length > 0 ? myBranches : [];
          } else {
            finalBranches = [];
          }
        }
        
        // Active Eviction: if a regular user has 0 branches assigned (e.g. revoked), force logout
        if (finalBranches.length === 0 && (!empName || empName.trim().toUpperCase() !== 'GG')) {
            localStorage.clear();
            window.location.href = '/';
            return;
        }

        setAvailableBranches(finalBranches);
        
        // Enforce branch validity in localStorage
        const currentSelected = localStorage.getItem('selectedBranch') || 'HQ';
        const isValid = finalBranches.some(b => b.branchId === currentSelected);
        if (!isValid && finalBranches.length > 0) {
          localStorage.setItem('selectedBranch', finalBranches[0].branchId);
          window.location.reload();
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (user?.data?.role || localStorage.getItem('user')) {
      fetchBranches();
    }
  }, [user]);

  const handleChange = (e) => {
    const newBranch = e.target.value;
    setSelectedBranch(newBranch);
    localStorage.setItem('selectedBranch', newBranch);
    // Reload to re-fetch all data and reset Redux/component state for the new branch
    window.location.reload();
  };

  if (isLoading) {
    return (
      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <CircularProgress size={20} sx={{ color: 'white' }} />
      </Box>
    );
  }

  if (availableBranches.length <= 1) {
    return (
      <Box sx={{ mr: 2, color: 'white', display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}>
        {availableBranches[0]?.branchId || 'HQ'}
      </Box>
    );
  }

  return (
    <FormControl variant="standard" sx={{ mr: 2, minWidth: 120 }}>
      <Select
        value={selectedBranch}
        onChange={handleChange}
        sx={{
          color: 'white',
          '& .MuiSelect-icon': { color: 'white' },
          '&:before': { borderBottom: 'none' },
          '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
          '&:after': { borderBottom: 'none' },
          fontSize: '14px',
          fontWeight: 'bold'
        }}
        renderValue={(selected) => selected}
      >
        {availableBranches.map((branch) => (
          <MenuItem key={branch.branchId} value={branch.branchId}>
            {branch.branchId} - {branch.branchName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BranchSwitcher;
