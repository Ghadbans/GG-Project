import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE2 from '../../../component/SidebarDashE2'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, Table, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Box, Drawer  } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { Add } from '@mui/icons-material';
import { Edit} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
function CompanyProfile() {
  const [profile,setProfile]= useState([]);
  const [show1, setShow1] = useState(false);
  const [editData, setEditData] = useState(null);
  const [logoBase64, setLogoBase64] = useState('');

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(()=> {
    fetchProfile();
  },[]);

  const fetchProfile = () => {
    axios.get(`${ENDPOINT_URL}/companyProfile`)
    .then(res => {
      setProfile(res.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const data = {
      companyName: target.companyName.value,
      logo: logoBase64,
      rccm: target.rccm.value,
      natId: target.natId.value,
      address : target.address.value,
      province: target.province.value,
      country: target.country.value,
      bankName: target.bankName.value,
      entitled: target.entitled.value,
      bankAccount: target.bankAccount.value,
      codeSwift: target.codeSwift.value,
      termsCondition : target.termsCondition.value,
      email: target.email.value,
      phone: target.phone.value,
      website: target.website.value,
    }; 
    
    if (editData && editData._id) {
      // Attempt update
      axios.put(`${ENDPOINT_URL}/update-companyProfile/${editData._id}`, data)
        .then((response) => {
          console.log('Update successful!');
          setShow1(false);
          fetchProfile();
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
          alert('Update failed! Please ensure the backend has an /update-companyProfile/:id route.');
        });
    } else {
      // Create new
      axios.post(`${ENDPOINT_URL}/create-companyProfile`, data)
        .then((response) => {
          console.log('Create successful!');
          setShow1(false);
          fetchProfile();
        })
        .catch((error) => {
          console.error('Error creating profile:', error);
        });
    }
  };

  const toggleModal = () => {
    setShow1(!show1);
  };

  const handleEditClick = (profData) => {
    setEditData(profData);
    setLogoBase64(profData.logo || '');
    setShow1(true);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
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
          <Typography variant='h5'>Company Profile</Typography>
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

      {show1 ? (
        <div className='modalView7'>
          <div className='Modal10' style={{maxHeight:'80vh', overflowY:'auto'}}>
            <div className='modalhead1'>
              <div className='Submitbtn'> 
              </div>
              <div>
                <CloseIcon style={{cursor:'pointer'}} onClick={() => toggleModal()}/>
              </div>
            </div>
            <form onSubmit={handleSubmit}>  
              <button type='submit' className='btnCustomer'>Save</button>
              <br/>
              <Grid container style={{alignItems:'center'}}>    
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='companyName'> Company Name</label>
                    <input type="text" name="companyName" id="companyName" defaultValue={editData?.companyName} placeholder='Name'/>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='logo'>Logo</label>
                    <div style={{ width: '100%', height: '50px', backgroundColor: '#202a5a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', marginTop: '10px' }}>
                      {logoBase64 ? (
                        <img src={logoBase64} alt="Company Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                      ) : (
                        <Typography variant="body2">Choose File</Typography>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                        onChange={handleLogoUpload}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='rccm'> RCCM</label>
                    <input type="text" name="rccm" id="rccm" defaultValue={editData?.rccm} placeholder='RCCM'/>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='natId'> National Id</label>
                    <input type="text" name="natId" id="natId" defaultValue={editData?.natId} placeholder='Id'/>
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='address'> Address</label>
                    <input type="text" name="address" id="address" defaultValue={editData?.address} placeholder='Address' />
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='province'> Province</label>
                    <input type="text" name="province" id="province" defaultValue={editData?.province} placeholder=' Province' />
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='country'> Country</label>
                    <input type="text" name="country" id="country" defaultValue={editData?.country} placeholder='Country' />
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='bankName'> Bank Name</label>
                    <input type="text" name="bankName" id="bankName" defaultValue={editData?.bankName} placeholder='Name'/>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='entitled'> Entitled</label>
                    <input type="text" name="entitled" id="entitled" defaultValue={editData?.entitled} placeholder='Entitled'/>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='bankAccount'> Bank Account</label>
                    <input type="text" name="bankAccount" id="bankAccount" defaultValue={editData?.bankAccount} placeholder='Account'/>
                  </div>
                </Grid>
                <Grid item xs={6}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='codeSwift'> Code Swift</label>
                    <input type="text" name="codeSwift" id="codeSwift" defaultValue={editData?.codeSwift} placeholder='codeSwift'/>
                  </div>
                </Grid>
                <Grid item xs={12}> 
                  <div className='InvoiceFormView'>
                    <label htmlFor='termsCondition'> Terms & Condition</label>
                    <textarea name="termsCondition" id="termsCondition" defaultValue={editData?.termsCondition} placeholder='Terms & Condition'/>
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='email'> Email</label>
                    <input type="text" name="email" id="email" defaultValue={editData?.email} placeholder='Email' />
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='phone'> Phone Number</label>
                    <input type="text" name="phone" id="phone" defaultValue={editData?.phone} placeholder=' Phone Number' />
                  </div>
                </Grid>
                <Grid item xs={4}> 
                  <div className='InvoiceFormView'> 
                    <label htmlFor='website'> Website</label>
                    <input type="text" name="website" id="website" defaultValue={editData?.website} placeholder='Website' />
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      ) : null}

      <div className='invoice' style={{ marginLeft: '20px', marginRight: '20px' }}>
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> 
          <NavLink to="/CompanyProfileForm" className='ItemsName'>
            <button className='btnCustomer'> Create a Profile</button>
          </NavLink>
          <div style={{display: 'flex', gap: '10px'}}>
            <NavLink to="/BranchManagement" className='ItemsName'>
              <button className='btnCustomer' style={{ backgroundColor: '#202a5a', color: 'white' }}>Manage Branches</button>
            </NavLink>
            <Edit className='btnCustomer' style={{ cursor: 'pointer' }} onClick={() => profile.data && profile.data.length > 0 ? handleEditClick(profile.data[0]) : alert('No profile to edit')} />
          </div>
        </div>

        {profile.data?.map((i) => (    
          <div key={i._id} >
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <p>Company Name <span>{i.companyName}</span></p>
                <p>{i.logo}</p>
              </div>
              <div> 
                <p>RCCM <span> {i.rccm}</span></p>
                <p>National Id <span> {i.natId}</span></p>
                <p>Address <span> {i.address}</span></p>
                <p>Province <span> {i.province}</span></p>
                <p>Country <span>{i.country}</span></p>
              </div>
              <div>
                <p>Bank <span> {i.bankName}</span></p>
                <p>Entitled <span> {i.entitled}</span></p>
                <p>Bank Account <span> {i.bankAccount}</span></p>
                <p>Code Swift <span> {i.codeSwift}</span></p>
              </div>
            </div>
            <div>
              <p>Terms & Condition</p> 
              <span>{i.termsCondition}</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <p>Email Address <span>{i.email}</span></p>
              </div>
              <div> 
                <p>Phone Number <span> {i.phone}</span></p>
              </div>
              <div>
                <p>Website <span> {i.website}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Box>
    </Box>
  )
}

export default CompanyProfile
