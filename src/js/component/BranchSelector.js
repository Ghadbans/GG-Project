import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { Select, MenuItem, FormControl } from '@mui/material';

function BranchSelector() {
  const [branches, setBranches] = useState([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
  const [selectedBranch, setSelectedBranch] = useState(localStorage.getItem('selectedBranch') || 'HQ');

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/companyProfile`);
        if (res.data && res.data.data && res.data.data.length > 0) {
          const profile = res.data?.data?.[0];
          if (profile.branches && profile.branches.length > 0) {
            setBranches(profile.branches);
          }
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };
    fetchBranches();
  }, []);

  const handleChange = (e) => {
    const newBranch = e.target.value;
    setSelectedBranch(newBranch);
    localStorage.setItem('selectedBranch', newBranch);
    window.location.reload(); // Reload the app to apply branch filter globally
  };

  return (
    <FormControl size="small" sx={{ minWidth: 150, mr: 2, backgroundColor: 'white', borderRadius: 1 }}>
      <Select
        value={selectedBranch}
        onChange={handleChange}
        displayEmpty
        sx={{
          height: '35px',
          '.MuiSelect-select': {
            paddingTop: '6px',
            paddingBottom: '6px'
          }
        }}
      >
        {branches.map((b) => (
          <MenuItem key={b.branchId} value={b.branchId}>
            {b.branchName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BranchSelector;
