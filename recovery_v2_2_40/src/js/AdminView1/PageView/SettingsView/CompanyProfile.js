import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE2 from '../../../component/SidebarDashE2'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, Table, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography  } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Add } from '@mui/icons-material';
import { Edit} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
function CompanyProfile() {

  const [profile,setProfile]= useState([])

  const apiUrl = 'http://192.168.0.200:8080/endpoint/create-companyProfile';

  useEffect(()=> {
    axios.get('http://192.168.0.200:8080/endpoint/companyProfile')
    .then(res => {
      // Handle the response data here
      setProfile(res.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  },[])
   

  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const data = {
      companyName: target.companyName.value,
      logo: target.logo.value,
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
    setData(data);
    
  axios.post(apiUrl,data)
    .then((response) => {
      console.log('POST request successful!');
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};

    const [show1, setShow1] = useState(false);
    const toggleModal = () => {
        setShow1(!show1);
      }
  return (

    <div> 
      <div className='sidemnuandcontent'>
    <SidebarDashE2/>
    <div className='header'>
     <div className='headername'>
      <Typography variant='h5'>Company Profile</Typography>
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
       <Typography> User Name</Typography>
       <AccountCircleIcon className='iconesize'/>
     </div>
     
    </div>

    
  </div>
        {/*
 show1?
 <div className='modalView15'>
      <div className='Modal15' style={{overflow:'hidden',overflowY:'scroll'}}>
      <div className='modalhead1'>
      <div className='Submitbtn'> 
</div>
<div>
  <CloseIcon style={{cursor:'pointer'}} onClick= {() => toggleModal()}/>
</div>
</div>
<form onSubmit={handleSubmit}>  
<button type='submit' className='btnCustomer'>Save</button>
         <br/>
     <Grid container style={{alignItems:'center'}}>    
              <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='companyName'> Company Name</label>
              <input type="text" name="companyName" id="companyName" placeholder='Name'/>
              </div>
              </Grid>
              <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='logo'> Logo</label>
              <input type="file" name="logo" id="logo"/>
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='rccm'> RCCM</label>
              <input type="text" name="rccm" id="rccm" placeholder='RCCM'/>
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='natId'> National Id</label>
              <input type="text" name="natId" id="natId" placeholder='Id'/>
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='address'> Address</label>
             <input type="text" name="address" id="address" placeholder='Address' />
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='province'> Province</label>
             <input type="text" name="province" id="province" placeholder=' Province' />
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='country'> Country</label>
             <input type="text" name="country" id="country" placeholder='Country' />
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='bankName'> Bank Name</label>
              <input type="text" name="bankName" id="bankName" placeholder='Name'/>
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='entitled'> Entitled</label>
              <input type="text" name="entitled" id="entitled" placeholder='Entitled'/>
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='bankAccount'> Bank Account</label>
              <input type="text" name="bankAccount" id="bankAccount" placeholder='Account'/>
               </div>
               </Grid>
               <Grid item xs={6}> 
              <div className='InvoiceFormView'>
              <label htmlFor='codeSwift'> Code Swift</label>
              <input type="text" name="codeSwift" id="codeSwift" placeholder='codeSwift'/>
               </div>
               </Grid>
               <Grid item xs={12}> 
              <div className='InvoiceFormView'>
              <label htmlFor='termsCondition'> Terms & Condition</label>
              <textarea name="termsCondition" id="termsCondition" placeholder='Terms & Condition'/>
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='email'> Email</label>
             <input type="text" name="email" id="email" placeholder='Email' />
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='phone'> Province Number</label>
             <input type="text" name="phone" id="phone" placeholder=' Province Number' />
               </div>
               </Grid>
               <Grid item xs={4}> 
              <div className='InvoiceFormView'> 
              <label htmlFor='website'> Website</label>
             <input type="text" name="website" id="website" placeholder='Website' />
               </div>
               </Grid>
         </Grid>
         </form>
      </div></div>
      :null
  */}
       <div className='invoice'>
       <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> 
       <NavLink to="/CompanyProfileForm" className='ItemsName'>
    <button className='btnCustomer '> Create a Profile</button>
    </NavLink>
    <div>
      <Edit className='btnCustomer '/>
    </div>
    </div>
    {profile.data?.map((i) => (    
    <div  key={i._id} >
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
     <p>Bank Account <span> {i.bankName}</span></p>
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
     <p>website <span> {i.website}</span></p>
     </div>
     
    </div>

    </div>
     ))}
     </div>
    </div>
  )
}

export default CompanyProfile
