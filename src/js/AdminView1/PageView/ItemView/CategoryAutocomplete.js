import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, IconButton, Modal, Box, Typography, Grid } from '@mui/material';
import { Edit, Delete, Close } from '@mui/icons-material';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

const CategoryAutocomplete = ({ value, onChange, required = true, disabled = false }) => {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentCategory, setCurrentCategory] = useState({ _id: '', categoryName: '' });

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/itemCategory`);
      setCategories(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenAdd = () => {
    setModalMode('add');
    setCurrentCategory({ _id: '', categoryName: '' });
    setModalOpen(true);
  };

  const handleOpenEdit = (category) => {
    setModalMode('edit');
    setCurrentCategory(category);
    setModalOpen(true);
  };

  const handleDelete = async (category) => {
    if (window.confirm(`Are you sure you want to delete ${category.categoryName}?`)) {
      try {
        await axios.delete(`${ENDPOINT_URL}/delete-itemCategory/${category._id}`);
        fetchCategories();
        if (value === category.categoryName) {
          onChange('');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === 'add') {
        await axios.post(`${ENDPOINT_URL}/create-itemCategory`, { categoryName: currentCategory.categoryName });
      } else {
        await axios.put(`${ENDPOINT_URL}/update-itemCategory/${currentCategory._id}`, { categoryName: currentCategory.categoryName });
      }
      setModalOpen(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const selectedOption = categories.find((c) => c.categoryName === value) || null;

  return (
    <>
      <Autocomplete
        id="itemCategory"
        disabled={disabled}
        options={categories}
        getOptionLabel={(option) => option.categoryName}
        value={selectedOption}
        onChange={(e, newValue) => onChange(newValue ? newValue.categoryName : '')}
        sx={{ width: '100%', backgroundColor: 'white' }}
        renderOption={(props, option) => (
          <li {...props} style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span>{option.categoryName}</span>
            <div>
              <IconButton 
                size="small"
                onMouseDown={(e) => e.stopPropagation()} 
                onClick={(e) => { e.stopPropagation(); handleOpenEdit(option); }}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                onMouseDown={(e) => e.stopPropagation()} 
                onClick={(e) => { e.stopPropagation(); handleDelete(option); }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </div>
          </li>
        )}
        PaperComponent={({ children, ...other }) => (
          <Box {...other} sx={{ backgroundColor: 'white', marginTop: '10px' }}>
            {children}
            <div>
              <button 
                type="button"
                onClick={handleOpenAdd} 
                onMouseDown={(e) => e.preventDefault()} 
                className='btnCustomer7' 
                style={{ width: '100%', padding: '10px', backgroundColor: '#202a5a', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                ADD NEW CATEGORY
              </button>
            </div>
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Category" required={required} />}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={style}>
          <IconButton onClick={() => setModalOpen(false)} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <Close />
          </IconButton>
          <Typography variant="h6" component="h2" mb={2}>
            {modalMode === 'add' ? 'Create Category' : 'Edit Category'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Category Name"
                  value={currentCategory.categoryName}
                  onChange={(e) => setCurrentCategory({ ...currentCategory, categoryName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <button type="submit" className='btnCustomer6' style={{ width: '100%', padding: '10px', backgroundColor: '#202a5a', color: 'white', border: 'none' }}>
                  Save
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CategoryAutocomplete;
