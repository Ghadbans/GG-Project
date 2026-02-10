import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import {MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box } from '@mui/material'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import axios from 'axios';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import { useNavigate,useParams } from 'react-router-dom';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ItemCommentForm({onCreateOption,onId}) {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
      .then(res => {
        // Handle the response data here
        const Name = res.data.data.employeeName;
        const Role = res.data.data.role;
        dispatch(setUser({userName: Name, role: Role}));
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch(logOut())
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  },[dispatch]);
    const [Comments1,setComments]= useState([]);
    const [reason,setReason]= useState("");
    useEffect (() => {
        axios.get(`https://gg-project-production.up.railway.app/endpoint/get-item/${onId}`)
        .then(res => {
          // get the response data here
          setComments(res.data.data.Comments);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
        },[])

    const CommentInfo = 
    {
      _id:v4(),
      person: user.data.userName ,
      reason
    }
    
    const Comments = [ ...Comments1, CommentInfo];
     {/** Loading Start */}

     const [loading,setLoading]= useState(false);
     const [loadingOpenModal,setLoadingOpenModal] = useState(false);
     const [ErrorOpenModal,setErrorOpenModal] = useState(false);
 
     const handleOpen = () => {
 
       setLoadingOpenModal(true);
       setLoading(true);

       setTimeout(()=> {
         setLoading(false);
       }, 500)
 
     }
     const handleError = () => {
       setErrorOpenModal(true);
       setLoading(true);
       setTimeout(()=> {
         setLoading(false);
      }, 500)
     }
     const handleClose = () => {
        window.location.reload();
     }
     const handleCloseError = () => {
       setErrorOpenModal(false);
     }
     {/** Loading End */}
     const fetchingData = async () => {
        try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-item/${onId}`)
            onCreateOption(res.data.data.Comments);
        } catch (error) {
            console.log(error)
        }
     }
    
     const handleSubmitEdit = (e) => {
       e.preventDefault();
       const data = {
         Comments
       };
      axios.put(`https://gg-project-production.up.railway.app/endpoint/update-item/${onId}`,data)
       .then((res) => {
         if (res) {
           setReason("");
           handleOpen();
           fetchingData()
         }
       })
       .catch((error) => {
         if (error) {
           handleError();
         }
       });
     } 
  return (
    <div>
         <form onSubmit={handleSubmitEdit}>
            <Grid container style={{alignItems:'center'}} spacing={1}>
              <Grid item xs={12}>
              <TextField 
          required
          id='comments'
          name='comments' 
          multiline
          rows={4}
          value={reason}
          onChange={(e)=>setReason(e.target.value)}
          label='Comments'
          sx={{ width:'100%', backgroundColor:'white' }}      
              />
              </Grid>
              <Grid item xs={12}>
              <button type='submit' style={{width:'100%'}} className='btnCustomer6'>Save</button>
              </Grid>
            </Grid>

        </form> 
        <Modal 
           open={loadingOpenModal}
           onClose={handleClose}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data Saved successfully</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleClose} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
        <Modal 
           open={ErrorOpenModal}
           onClose={handleCloseError}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
                  <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CancelIcon style={{color:'red',height:'40px', width:'40px'}}/></p>
                  <h2> Data Failed to Saved</h2>
                  <button className='btnCustomer' onClick={handleCloseError}>
                    Try Again
                  </button>
                </div>
                )}
          </Box>
          </Modal>
    </div>
  )
}

export default ItemCommentForm
