import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    borderTop: '8px solid #d32f2f' // Red warning border
};

const ConfirmDeleteModal = ({ open, handleClose, handleDelete, itemName }) => {
    const [confirmText, setConfirmText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (confirmText === 'DELETE') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [confirmText]);

    const onConfirm = () => {
        handleDelete();
        setConfirmText('');
        handleClose();
    };

    const onClose = () => {
        setConfirmText('');
        handleClose();
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="confirm-delete-title"
            aria-describedby="confirm-delete-description"
        >
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography id="confirm-delete-title" variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center', color: '#d32f2f', fontWeight: 'bold' }}>
                            <WarningAmberIcon sx={{ mr: 1 }} /> Confirm Deletion
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                        <IconButton onClick={onClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                            Are you sure you want to delete <strong>{itemName || 'this record'}</strong>?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            This action is irreversible and may affect linked data.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                            Please type <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>DELETE</span> to confirm:
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Type DELETE here"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            autoFocus
                            error={confirmText !== '' && confirmText !== 'DELETE'}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                        <Button 
                            onClick={onClose} 
                            variant="outlined" 
                            sx={{ color: 'gray', borderColor: 'gray', '&:hover': { borderColor: '#202a5a', color: '#202a5a' } }}
                        >
                            Cancel
                        </Button>
                        <Button 
                            onClick={onConfirm} 
                            variant="contained" 
                            disabled={isDisabled}
                            sx={{ 
                                bgcolor: '#d32f2f', 
                                '&:hover': { bgcolor: '#b71c1c' },
                                '&:disabled': { bgcolor: '#ef9a9a', color: 'white' }
                            }}
                        >
                            Delete Irreversibly
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ConfirmDeleteModal;

