import React , {useEffect, useState }  from 'react'
import ConfirmDeleteModal from '../../../component/ConfirmDeleteModal';
import '../Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink,useNavigate } from 'react-router-dom';
import {Table,Paper, IconButton,styled,TableBody,TableCell,TableHead,TableRow, TableContainer,Modal,Backdrop,Box }  from '@mui/material';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import Add from '@mui/icons-material/Add';
import dayjs from 'dayjs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

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

function EmployeeAllViewTable() {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
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
  },[dispatch])
  const [employee,setEmployee]= useState([])

  const apiUrl = `${ENDPOINT_URL}/employee`;

  useEffect(()=> {
  axios.get(apiUrl)
  .then(res => {
    // Handle the response data here
    setEmployee(res.data.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
},[])
const [open, setOpen] = useState(false);
const [DeleteId, setDeleteId]= useState(null);
const [loading,setLoading]= useState(false);
const [modalOpenLoading,setModalOpenLoading]= useState(false);

const handleOpen = (id) => {
  setOpen(true);
  setDeleteId(id)
};
const handleOpenModal = () => {
  setModalOpenLoading(true);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
};

const handleClose = () => {
  setOpen(false);
};
const handleCloseModal = () => {
    window.location.reload();
};
const handleDelete = async () => {
  try {
    const res = await axios.delete(`${ENDPOINT_URL}/delete-employee/${DeleteId}`);
    if (res) {
      setOpen(false);
      handleOpenModal();
    }
  } catch (error) {
    alert(error);
  }
};
  return (
    <div> 
 <div className='allTableContainer'>

                               <ViewTooltip title="Add" style={{position:'relative',float:'right',margin:'10px'}}>
                                  <span>
                                      <IconButton disabled={user.data.role === 'User'}>
                                      <NavLink to="/EmployeeFormView" className='LinkName'>
                                      <Add className='btnCustomer'/> 
                                      </NavLink>
                                      </IconButton>
                                      </span>
                               </ViewTooltip>
                <TableContainer component={Paper}>
  <Table style={{backgroundColor:'white'}}>
  <TableHead >
    <TableRow>
      <TableCell align="center">Join Date</TableCell>
      <TableCell align="center">Employee Name</TableCell>
      <TableCell align="center">Phone</TableCell>
      <TableCell align="center">Address</TableCell>
      <TableCell align="center">Role</TableCell>
      <TableCell align="center">Department</TableCell>
      <TableCell align="left">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {employee && employee.length > 0 ? (
      employee.map((row) => (
      <TableRow
        key={row._id}  >
        <TableCell align="center">{dayjs(row.joinDate).format('DD/MM/YYYY')}</TableCell>
        <TableCell align="center">{row.employeeName}</TableCell>
        <TableCell align="center">{row.employeePhone}</TableCell>
        <TableCell align="center">{row.employeeAddress}</TableCell>
        <TableCell align="center">{row.employeeRole}</TableCell>
        <TableCell align="center">{row.department}</TableCell>
        <TableCell align="center" style={{display:'flex',alignItems:'center',gap:'5px'}}>  
             <ViewTooltip title="View">
                                  <span>
                                      <IconButton disabled={user.data.role === 'User'}>
                                      <NavLink to={`/EmployeeViewAdminAll/${row._id}`} className='LinkName'>
                                      <VisibilityIcon style={{color:'#202a5a'}}/> 
                                      </NavLink>
                                      </IconButton>
                                      </span>
                               </ViewTooltip>
             <span style={{display:'flex',gap:'10px',position:'relative'}}>
                                <EditTooltip title="Edit">
                                  <span>
                                      <IconButton disabled={user.data.role === 'User'}>
                                      <NavLink to={`/EmployeeUpdateView/${row._id}`} className='LinkName'>
                                      <EditIcon style={{color:'gray'}}/> 
                                      </NavLink>
                                      </IconButton>
                                      </span>
                               </EditTooltip>
                                <DeleteTooltip title="Delete">
                                  <span>
                                <IconButton onClick={() => handleOpen(row._id)} disabled={user.data.role === 'User'} >
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
                                </span>
                              </DeleteTooltip> 
              </span>
          </TableCell>
      </TableRow>
    ))) : (
      <TableRow>
        <TableCell colSpan={7} align="center" sx={{ py: 3, color: '#888' }}>
          No employees found
        </TableCell>
      </TableRow>
    )}
  </TableBody>
      
  </Table>
    </TableContainer>
  </div>
  <ConfirmDeleteModal open={open} handleClose={handleClose} handleDelete={handleDelete} itemName={employee.find(e => e._id === DeleteId)?.employeeName || "this employee"} />
    <Modal
      open={modalOpenLoading}
      onClose={handleCloseModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
            timeout: 500,
           }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
      <div>
              {loading?(<Loader/>
                )
         :( 
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data successfully deleted</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseModal} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
                </div> 
      </Box>
    </Modal>
  </div>
  )
}

export default EmployeeAllViewTable


