import React, { useEffect, useState } from 'react';
import '../Chartview.css';
import SidebarDashE2 from '../../../component/SidebarDashE2';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, IconButton, Paper, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, FormControl, InputLabel, Drawer } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { toast, ToastContainer } from 'react-toastify';

function BranchManagement() {
  const [branches, setBranches] = useState([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
  const [profileId, setProfileId] = useState(null);
  const [fullProfile, setFullProfile] = useState(null);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchId, setNewBranchId] = useState('');
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newLogo, setNewLogo] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newProvince, setNewProvince] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [newRccm, setNewRccm] = useState('');
  const [newNatId, setNewNatId] = useState('');

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState(null);
  const [editBranchName, setEditBranchName] = useState('');
  const [editBranchId, setEditBranchId] = useState('');
  const [editCompanyName, setEditCompanyName] = useState('');
  const [editLogo, setEditLogo] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editProvince, setEditProvince] = useState('');
  const [editCountry, setEditCountry] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editWebsite, setEditWebsite] = useState('');
  const [editRccm, setEditRccm] = useState('');
  const [editNatId, setEditNatId] = useState('');

  const handleLogoUpload = (e, isEdit) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) setEditLogo(reader.result);
        else setNewLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [branchToDelete, setBranchToDelete] = useState(null);
  const [transferBranchId, setTransferBranchId] = useState('');

  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/companyProfile`);
      if (res.data && res.data.data && res.data.data.length > 0) {
        const profile = res.data?.data?.[0];
        setProfileId(profile._id);
        setFullProfile(profile);
        if (profile.branches && profile.branches.length > 0) {
          setBranches(profile.branches);
        }
      }
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  };

  const handleAddBranch = async () => {
    if (!newBranchName || !newBranchId) {
      toast.error("Please provide both Branch Name and ID.");
      return;
    }
    
    const cleanId = newBranchId.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

    const newBranch = { 
      branchId: cleanId, 
      branchName: newBranchName,
      companyName: newCompanyName,
      logo: newLogo,
      address: newAddress,
      province: newProvince,
      country: newCountry,
      phone: newPhone,
      email: newEmail,
      website: newWebsite,
      rccm: newRccm,
      natId: newNatId
    };
    const updatedBranches = [...branches, newBranch];
    
    setBranches(updatedBranches);
    setNewBranchName('');
    setNewBranchId('');
    setNewCompanyName('');
    setNewLogo('');
    setNewAddress('');
    setNewProvince('');
    setNewCountry('');
    setNewPhone('');
    setNewEmail('');
    setNewWebsite('');
    setNewRccm('');
    setNewNatId('');

    await saveBranchesToProfile(updatedBranches);
  };

  const saveBranchesToProfile = async (updatedBranches) => {
    if (fullProfile) {
      const updatedProfile = { ...fullProfile, branches: updatedBranches };
      try {
        await axios.put(`${ENDPOINT_URL}/update-companyProfile/${fullProfile._id}`, { ...updatedProfile, branchId: localStorage.getItem("selectedBranch") || "HQ" });
        toast.success("Branches updated successfully!");
      } catch (error) {
        console.error('Error updating branches:', error);
        toast.error("Failed to update branches. Backend route missing.");
      }
    } else {
      toast.error("No company profile found to attach branches to. Please create a Company Profile first.");
    }
  };

  const handleEditClick = (branch) => {
    setEditingBranch(branch);
    setEditBranchName(branch.branchName || '');
    setEditBranchId(branch.branchId || '');
    setEditCompanyName(branch.companyName || '');
    setEditLogo(branch.logo || '');
    setEditAddress(branch.address || '');
    setEditProvince(branch.province || '');
    setEditCountry(branch.country || '');
    setEditPhone(branch.phone || '');
    setEditEmail(branch.email || '');
    setEditWebsite(branch.website || '');
    setEditRccm(branch.rccm || '');
    setEditNatId(branch.natId || '');
    setEditDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    const cleanId = editBranchId.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    const updatedBranches = branches.map(b => 
      b.branchId === editingBranch.branchId ? { 
        branchId: cleanId, 
        branchName: editBranchName,
        companyName: editCompanyName,
        logo: editLogo,
        address: editAddress,
        province: editProvince,
        country: editCountry,
        phone: editPhone,
        email: editEmail,
        website: editWebsite,
        rccm: editRccm,
        natId: editNatId
      } : b
    );

    if (editingBranch.branchId !== cleanId) {
      // Call backend to update all documents if ID changed
      try {
        await axios.post(`${ENDPOINT_URL}/rename-branch`, {
          oldBranchId: editingBranch.branchId,
          newBranchId: cleanId
        });
        toast.info("Branch ID updated across all documents.");
      } catch (err) {
        console.warn("Rename endpoint not yet implemented by backend AI.");
      }
    }

    setBranches(updatedBranches);
    await saveBranchesToProfile(updatedBranches);
    setEditDialogOpen(false);
  };

  const handleDeleteClick = (branchId) => {
    setBranchToDelete(branchId);
    setTransferBranchId('');
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      // Call delete-branch endpoint to check for data and transfer
      const payload = { branchIdToDelete: branchToDelete };
      if (transferBranchId) {
        payload.transferToBranchId = transferBranchId;
      }

      await axios.post(`${ENDPOINT_URL}/delete-branch`, payload);
      
      const updatedBranches = branches.filter(b => b.branchId !== branchToDelete);
      setBranches(updatedBranches);
      await saveBranchesToProfile(updatedBranches);
      setDeleteDialogOpen(false);

    } catch (err) {
      if (err.response && err.response.data && err.response.data.error === 'Data exists') {
        toast.error(err.response.data.message);
      } else {
        toast.error("Error communicating with delete endpoint.");
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <ToastContainer />
      <Box sx={{ flexShrink: 0 }}>
        <Drawer variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              position: 'relative',
              height: '100vh',
              backgroundColor: '#202a5a',
              overflowY: 'auto'
            },
          }}
        >
          <SidebarDashE2 />
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Box className='header' sx={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#202a5a', color: 'white', px: 2, py: 1 }}>
          <Typography variant='h5'>Branch Management</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: 1, px: 1 }}>
              <input type="text" placeholder="Type here..." style={{ border: 'none', outline: 'none', padding: '4px' }}/>
              <SearchIcon sx={{ color: 'gray' }} />
            </Box>
            <NotificationsNoneIcon />
            <Typography>User Name</Typography>
            <AccountCircleIcon />
          </Box>
        </Box>
      
      <div className='invoice' style={{ marginLeft: '20px', marginRight: '20px' }}>
        <Box sx={{ p: 3 }}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>Add New Branch</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Branch Name (e.g. Downtown Store)" value={newBranchName} onChange={(e) => setNewBranchName(e.target.value)} required />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Branch Short ID (e.g. BR01)" value={newBranchId} onChange={(e) => setNewBranchId(e.target.value)} required />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Company Name (For print headers)" value={newCompanyName} onChange={(e) => setNewCompanyName(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <InputLabel shrink>Branch Logo</InputLabel>
                <input type="file" accept="image/*" onChange={(e) => handleLogoUpload(e, false)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Phone Number" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Website" value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address (Street, PO Box)" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Province/State" value={newProvince} onChange={(e) => setNewProvince(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Country" value={newCountry} onChange={(e) => setNewCountry(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="RCCM" value={newRccm} onChange={(e) => setNewRccm(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="ID NAT" value={newNatId} onChange={(e) => setNewNatId(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" color="primary" onClick={handleAddBranch} fullWidth sx={{ height: '56px', backgroundColor: '#30368a' }}>
                  Add Branch
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell><strong>Branch ID</strong></TableCell>
                  <TableCell><strong>Branch Name</strong></TableCell>
                  <TableCell align="right"><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {branches.map((row) => (
                  <TableRow key={row.branchId}>
                    <TableCell>{row.branchId}</TableCell>
                    <TableCell>{row.branchName}</TableCell>
                    <TableCell align="right">
                      {row.branchId !== 'HQ' && (
                        <>
                          <IconButton color="primary" onClick={() => handleEditClick(row)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDeleteClick(row.branchId)}>
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Branch</DialogTitle>
        <DialogContent sx={{ minWidth: 600, pt: 2 }}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Branch Name" value={editBranchName} onChange={(e) => setEditBranchName(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Branch Short ID" value={editBranchId} onChange={(e) => setEditBranchId(e.target.value)} disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company Name" value={editCompanyName} onChange={(e) => setEditCompanyName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel shrink>Branch Logo</InputLabel>
              <input type="file" accept="image/*" onChange={(e) => handleLogoUpload(e, true)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Phone" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Website" value={editWebsite} onChange={(e) => setEditWebsite(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" value={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Province" value={editProvince} onChange={(e) => setEditProvince(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Country" value={editCountry} onChange={(e) => setEditCountry(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="RCCM" value={editRccm} onChange={(e) => setEditRccm(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="ID NAT" value={editNatId} onChange={(e) => setEditNatId(e.target.value)} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete/Transfer Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Branch</DialogTitle>
        <DialogContent sx={{ minWidth: 400 }}>
          <Typography gutterBottom>
            Are you sure you want to delete this branch? If this branch contains data, you must select another branch to transfer the data to.
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Transfer Data To (Optional)</InputLabel>
            <Select
              value={transferBranchId}
              label="Transfer Data To (Optional)"
              onChange={(e) => setTransferBranchId(e.target.value)}
            >
              <MenuItem value=""><em>None (Delete only if empty)</em></MenuItem>
              {branches.filter(b => b.branchId !== branchToDelete).map(b => (
                <MenuItem key={b.branchId} value={b.branchId}>{b.branchName} ({b.branchId})</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={confirmDelete}>Delete & Transfer</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
  )
}

export default BranchManagement;
