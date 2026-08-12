import React, { useEffect, useState } from 'react';
import { TextField, IconButton, Tabs, Tab, Checkbox, Typography, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';

const ViewTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#30368a',
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

function ProjectNameInfo({ onId }) {
    const user = useSelector(selectCurrentUser);
    const location = useLocation();
    const [project, setProject] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);
    const [hidden, setHidden] = useState([]);
    const [search, setSearch] = useState('');
    const [show2, setShow2] = useState(1);
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resProjects, resHidden] = await Promise.all([
                    axios.get(`${ENDPOINT_URL}/projects`),
                    axios.get(`${ENDPOINT_URL}/hidden`)
                ]);
                setProject(resProjects.data.data.reverse());
                setHidden(resHidden.data.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredRows(project.filter(row => !hidden.some((row2) => row2.idRow === row._id)));
    }, [project, hidden]);

    useEffect(() => {
        const selectedIndex = project.findIndex(row => row._id === onId);
        if (selectedIndex !== -1) {
            setValue(selectedIndex);
        }
        const selectedIndex2 = filteredRows.findIndex(row => row._id === onId);
        if (selectedIndex2 !== -1) {
            setValue2(selectedIndex2);
        }
    }, [project, filteredRows, onId]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const newArray = search !== '' ? project.filter((row) =>
        row.projectName.toLowerCase().includes(search.toLowerCase()) ||
        row.projectNumber.toString().includes(search) ||
        (row.description && row.description.toLowerCase().includes(search.toLowerCase())) ||
        (row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase()))
    ) : project;

    const newArray2 = search !== '' ? filteredRows.filter((row) =>
        row.projectName.toLowerCase().includes(search.toLowerCase()) ||
        (row.description && row.description.toLowerCase().includes(search.toLowerCase())) ||
        row.projectNumber.toString().includes(search) ||
        (row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase()))
    ) : filteredRows;

    return (
        <div className='itemInfoContainer'>
            {show2 === 1 ? (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                            <Checkbox />
                            <Typography variant='h6'>All Projects</Typography>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <p className='btnCustomer1' onClick={() => setShow2(2)} style={{ cursor: 'pointer' }}>Filter</p>
                        </div>
                    </div>
                    <div style={{ height: 'calc(100vh - 170px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                        <Tabs
                            value={value}
                            onChange={(e, v) => setValue(v)}
                            orientation="vertical"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'white',
                                    height: '0px'
                                }
                            }}
                        >
                            {(user.data.role === 'CEO' ? project : filteredRows).map((row, index) => (
                                <Tab
                                    key={index}
                                    label={`${row.customerName?.customerName || 'Unknown'} | P-${String(row.projectNumber).padStart(6, '0')}`}
                                    component={Link}
                                    to={`/ProjectInfo/${row._id}`}
                                    sx={{
                                        '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: '#30368a',
                                            borderRadius: '10px'
                                        }
                                    }}
                                />
                            ))}
                        </Tabs>
                    </div>
                </>
            ) : (
                <>
                    <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                        <Grid item xs={10}>
                            <TextField
                                label='Search'
                                id='search'
                                value={search}
                                variant="standard"
                                onChange={handleSearch}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ViewTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => setShow2(1)} style={{ position: 'relative', float: 'right' }}>
                                    <Close style={{ color: '#30368a' }} />
                                </IconButton>
                            </ViewTooltip>
                        </Grid>
                    </Grid>
                    <div style={{ height: 'calc(100vh - 125px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                        <Tabs
                            value={user.data.role === 'CEO' ? value : value2}
                            onChange={(e, v) => user.data.role === 'CEO' ? setValue(v) : setValue2(v)}
                            orientation="vertical"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#30368a'
                                }
                            }}
                        >
                            {(user.data.role === 'CEO' ? newArray : newArray2).map((row, index) => (
                                <Tab
                                    key={index}
                                    label={`${row.customerName?.customerName || 'Unknown'} | P-${String(row.projectNumber).padStart(6, '0')}`}
                                    component={Link}
                                    to={`/ProjectInfo/${row._id}`}
                                    sx={{
                                        '&.Mui-selected': {
                                            color: '#30368a'
                                        }
                                    }}
                                />
                            ))}
                        </Tabs>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProjectNameInfo;
