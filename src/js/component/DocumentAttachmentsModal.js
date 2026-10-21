import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Tooltip,
  Paper,
  Divider,
  DialogActions
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { ENDPOINT_URL } from '../apiConfig';
import AttachmentPreviewDialog from './AttachmentPreviewDialog';

export default function DocumentAttachmentsModal({
  open,
  onClose,
  documentId,
  documentType = 'Invoice',
  documentNumber = '',
  onAttachmentCountChange
}) {
  const user = useSelector(selectCurrentUser);
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewAttachment, setPreviewAttachment] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Fetch attachments on open or when documentId changes
  const fetchAttachments = async () => {
    if (!documentId) return;
    try {
      setLoading(true);
      const res = await axios.get(`${ENDPOINT_URL}/attachments/${documentId}`);
      const list = res.data?.data || [];
      setAttachments(list);
      if (onAttachmentCountChange) {
        onAttachmentCountChange(list.length);
      }
    } catch (err) {
      if (err.response?.status !== 404) {
        console.error('Error fetching attachments:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && documentId) {
      fetchAttachments();
    }
  }, [open, documentId]);

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Upload handler
  const handleFilesUpload = async (files) => {
    if (!files || files.length === 0) return;

    // Validate size (15MB limit)
    const MAX_SIZE = 15 * 1024 * 1024;
    const validFiles = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > MAX_SIZE) {
        toast.error(`File "${files[i].name}" exceeds the 15MB limit.`);
        return;
      }
      validFiles.push(files[i]);
    }

    const formData = new FormData();
    validFiles.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('documentId', documentId);
    formData.append('documentType', documentType);
    formData.append('documentNumber', documentNumber);
    formData.append('uploadedBy', user?.data?.userName || 'Staff');
    formData.append('branchId', user?.data?.selectedBranch || 'HQ');

    try {
      setUploading(true);
      const res = await axios.post(`${ENDPOINT_URL}/upload-attachment`, formData);
      toast.success(res.data?.message || 'Attachment(s) uploaded successfully');
      fetchAttachments();
    } catch (err) {
      console.error('Error uploading attachment:', err);
      if (err.response?.status === 404) {
        toast.warning('Railway deployment is currently pending (builds queued due to Railway infrastructure incident). The endpoint will activate once Railway finishes redeploying.');
      } else {
        toast.error('Failed to upload attachment. Please try again.');
      }
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleFileInputChange = (e) => {
    handleFilesUpload(e.target.files);
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      handleFilesUpload(e.dataTransfer.files);
    }
  };

  // Direct print handler for item
  const handleDirectPrint = (att) => {
    const fileUrl = `${ENDPOINT_URL}/attachment-file/${att._id}`;
    const contentType = (att.contentType || '').toLowerCase();
    const isPdf = contentType.includes('pdf') || (att.fileName || '').toLowerCase().endsWith('.pdf');

    if (isPdf) {
      const printWindow = window.open(fileUrl, '_blank');
      if (printWindow) {
        printWindow.addEventListener('load', () => {
          printWindow.focus();
          printWindow.print();
        });
      }
    } else {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${att.fileName}</title>
              <style>
                @page { size: auto; margin: 10mm; }
                body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                img { max-width: 100%; max-height: 100vh; object-fit: contain; }
              </style>
            </head>
            <body>
              <img src="${fileUrl}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  // Direct download handler
  const handleDownload = (att) => {
    const downloadUrl = `${ENDPOINT_URL}/attachment-file/${att._id}?download=true`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = att.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Delete handler
  const handleDeleteConfirm = async () => {
    if (!deleteConfirmId) return;
    try {
      await axios.delete(`${ENDPOINT_URL}/delete-attachment/${deleteConfirmId}`);
      toast.success('Attachment deleted successfully');
      setDeleteConfirmId(null);
      fetchAttachments();
    } catch (err) {
      console.error('Error deleting attachment:', err);
      toast.error('Failed to delete attachment');
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '10px',
            bgcolor: '#ffffff',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }
        }}
      >
        {/* Header - Matching Zoho Reference */}
        <DialogTitle
          sx={{
            m: 0,
            px: 3,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e2e8f0',
            bgcolor: '#f8fafc'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                bgcolor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb'
              }}
            >
              <AttachFileIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>
                Attachments
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>
                {documentNumber ? `${documentNumber} • ` : ''}
                {attachments.length === 0
                  ? 'No Files Attached'
                  : `${attachments.length} ${attachments.length === 1 ? 'File' : 'Files'} Attached`}
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: '#94a3b8',
              '&:hover': { color: '#1e293b', bgcolor: '#f1f5f9' }
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        {/* Content */}
        <DialogContent sx={{ p: 3 }}>
          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5 }}>
              <CircularProgress size={36} color="primary" />
              <Typography variant="body2" sx={{ color: '#64748b', mt: 2 }}>
                Loading attachments...
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* List of Attached Files (Matching Zoho Screenshot 4) */}
              {attachments.length > 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {attachments.map((att) => {
                    const contentType = (att.contentType || '').toLowerCase();
                    const isPdf = contentType.includes('pdf') || (att.fileName || '').toLowerCase().endsWith('.pdf');
                    const isImage = contentType.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp)$/i.test(att.fileName);

                    return (
                      <Paper
                        key={att._id}
                        variant="outlined"
                        sx={{
                          p: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: '8px',
                          borderColor: '#e2e8f0',
                          bgcolor: '#ffffff',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#cbd5e1',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                          }
                        }}
                      >
                        {/* File Info */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            minWidth: 0,
                            flex: 1,
                            cursor: 'pointer'
                          }}
                          onClick={() => setPreviewAttachment(att)}
                        >
                          <Box
                            sx={{
                              width: 38,
                              height: 38,
                              borderRadius: '6px',
                              bgcolor: isPdf ? '#fee2e2' : isImage ? '#e0f2fe' : '#f1f5f9',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            {isPdf ? (
                              <PictureAsPdfIcon sx={{ color: '#dc2626', fontSize: 22 }} />
                            ) : isImage ? (
                              <ImageIcon sx={{ color: '#0284c7', fontSize: 22 }} />
                            ) : (
                              <InsertDriveFileIcon sx={{ color: '#64748b', fontSize: 22 }} />
                            )}
                          </Box>
                          <Box sx={{ minWidth: 0, flex: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: '#1e293b',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                '&:hover': { color: '#2563eb', textDecoration: 'underline' }
                              }}
                              title={att.fileName}
                            >
                              {att.fileName}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748b', display: 'block', lineHeight: 1.2 }}>
                              File Size: {formatFileSize(att.fileSize)}
                              {att.uploadedBy ? ` • By ${att.uploadedBy}` : ''}
                              {att.createdAt ? ` • ${dayjs(att.createdAt).format('DD/MM/YYYY')}` : ''}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 1 }}>
                          <Tooltip title="Preview">
                            <IconButton
                              size="small"
                              onClick={() => setPreviewAttachment(att)}
                              sx={{ color: '#475569', '&:hover': { color: '#2563eb', bgcolor: '#eff6ff' } }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Direct Print">
                            <IconButton
                              size="small"
                              onClick={() => handleDirectPrint(att)}
                              sx={{ color: '#475569', '&:hover': { color: '#0f766e', bgcolor: '#f0fdfa' } }}
                            >
                              <PrintIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Download">
                            <IconButton
                              size="small"
                              onClick={() => handleDownload(att)}
                              sx={{ color: '#475569', '&:hover': { color: '#2563eb', bgcolor: '#eff6ff' } }}
                            >
                              <DownloadIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete">
                            <IconButton
                              size="small"
                              onClick={() => setDeleteConfirmId(att._id)}
                              sx={{ color: '#94a3b8', '&:hover': { color: '#dc2626', bgcolor: '#fee2e2' } }}
                            >
                              <DeleteOutlineIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Paper>
                    );
                  })}
                </Box>
              ) : (
                /* Empty State (Matching Zoho Screenshot 3) */
                <Box
                  sx={{
                    py: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      bgcolor: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                      color: '#94a3b8'
                    }}
                  >
                    <AttachFileIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#334155', mb: 0.5 }}>
                    No Files Attached
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', maxWidth: 360, fontSize: '13px' }}>
                    Attach purchase orders, client contracts, signed delivery slips, or related invoices so they are never lost.
                  </Typography>
                </Box>
              )}

              {/* Upload Drop Zone (Matching Zoho Screenshot 3 & 4) */}
              <Box
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                sx={{
                  p: 3,
                  border: isDragging ? '2px dashed #2563eb' : '2px dashed #cbd5e1',
                  borderRadius: '8px',
                  bgcolor: isDragging ? '#eff6ff' : '#f8fafc',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#94a3b8',
                    bgcolor: '#f1f5f9'
                  }
                }}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                  accept=".pdf,image/*,.doc,.docx,.xls,.xlsx"
                />

                {uploading ? (
                  <Box sx={{ py: 1 }}>
                    <CircularProgress size={28} color="primary" sx={{ mb: 1.5 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                      Uploading attachment(s)...
                    </Typography>
                    <LinearProgress sx={{ mt: 2, height: 6, borderRadius: 3 }} />
                  </Box>
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Button
                      variant="outlined"
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        px: 2.5,
                        py: 0.8,
                        borderRadius: '6px',
                        color: '#2563eb',
                        borderColor: '#93c5fd',
                        bgcolor: '#ffffff',
                        pointerEvents: 'none'
                      }}
                    >
                      Upload your Files
                    </Button>
                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: '12px', mt: 0.5 }}>
                      Drag and drop files here, or click to browse
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '11px' }}>
                      Supports PDF, PNG, JPG, DOC, XLS (up to 15MB each)
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={Boolean(deleteConfirmId)}
        onClose={() => setDeleteConfirmId(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: '8px', p: 1 } }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: '16px', color: '#1e293b' }}>
          Delete Attachment?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Are you sure you want to permanently delete this attachment? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setDeleteConfirmId(null)}
            sx={{ textTransform: 'none', color: '#64748b', fontWeight: 600 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Fullscreen Interactive Preview Dialog (Matching Zoho Screenshot 5) */}
      <AttachmentPreviewDialog
        open={Boolean(previewAttachment)}
        onClose={() => setPreviewAttachment(null)}
        attachment={previewAttachment}
      />
    </>
  );
}
