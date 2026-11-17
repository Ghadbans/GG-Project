import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import { ENDPOINT_URL } from '../apiConfig';

export default function AttachmentPreviewDialog({ open, onClose, attachment }) {
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (open) {
      setZoom(1);
      setLoading(true);
    }
  }, [open, attachment]);

  if (!attachment) return null;

  const fileName = attachment.fileName || 'Attachment';
  const contentType = (attachment.contentType || '').toLowerCase();
  const isPdf = contentType.includes('pdf') || fileName.toLowerCase().endsWith('.pdf');
  const isImage = contentType.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(fileName);
  const fileUrl = `${ENDPOINT_URL}/attachment-file/${attachment._id}`;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const handlePrint = () => {
    if (isPdf) {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          iframeRef.current.contentWindow.focus();
          iframeRef.current.contentWindow.print();
          return;
        } catch (e) {
          console.warn('Iframe print blocked, falling back to print window:', e);
        }
      }
      const printWindow = window.open(fileUrl, '_blank');
      if (printWindow) {
        printWindow.addEventListener('load', () => {
          printWindow.focus();
          printWindow.print();
        });
      }
    } else if (isImage) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${fileName}</title>
              <style>
                @page { size: auto; margin: 10mm; }
                body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; }
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
    } else {
      window.open(fileUrl, '_blank');
    }
  };

  const handleDownload = () => {
    const downloadUrl = `${ENDPOINT_URL}/attachment-file/${attachment._id}?download=true`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          height: '92vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#1e293b',
          color: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden'
        }
      }}
    >
      {/* Top Toolbar - Clean, Non-Overflowing Header */}
      <DialogTitle
        sx={{
          m: 0,
          p: { xs: '8px 12px', sm: '10px 20px' },
          bgcolor: '#0f172a',
          color: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #334155',
          gap: 1
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0, flex: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '6px',
              bgcolor: isPdf ? 'rgba(239, 68, 68, 0.15)' : isImage ? 'rgba(56, 189, 248, 0.15)' : 'rgba(148, 163, 184, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {isPdf ? (
              <PictureAsPdfIcon sx={{ color: '#ef4444', fontSize: 20 }} />
            ) : isImage ? (
              <ImageIcon sx={{ color: '#38bdf8', fontSize: 20 }} />
            ) : (
              <InsertDriveFileIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
            )}
          </Box>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                color: '#f8fafc',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              title={fileName}
            >
              {fileName}
            </Typography>
            {attachment?.fileSize ? (
              <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: '0.72rem', lineHeight: 1.1 }}>
                {(attachment.fileSize / (1024 * 1024)).toFixed(1)} MB
                {attachment.uploadedBy ? ` • By ${attachment.uploadedBy}` : ''}
              </Typography>
            ) : null}
          </Box>
        </Box>

        {/* Toolbar Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexShrink: 0 }}>
          {/* Direct Print Button */}
          <Tooltip title="Print Attachment">
            <IconButton
              size="small"
              onClick={handlePrint}
              sx={{
                color: '#f8fafc',
                bgcolor: 'rgba(255,255,255,0.08)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' }
              }}
            >
              <PrintIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {/* Download Button */}
          <Tooltip title="Download File">
            <IconButton
              size="small"
              onClick={handleDownload}
              sx={{
                color: '#f8fafc',
                bgcolor: 'rgba(255,255,255,0.08)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' }
              }}
            >
              <DownloadIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {/* Close Button */}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: '#94a3b8',
              bgcolor: 'rgba(255,255,255,0.04)',
              ml: 0.5,
              '&:hover': { color: '#ffffff', bgcolor: 'rgba(239, 68, 68, 0.2)' }
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Main Content Area */}
      <DialogContent
        sx={{
          p: 0,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#0b1120',
          position: 'relative',
          overflow: 'auto'
        }}
      >
        {isPdf ? (
          <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            {loading && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#0b1120',
                  zIndex: 1
                }}
              >
                <CircularProgress color="primary" />
                <Typography variant="body2" sx={{ color: '#94a3b8', mt: 2 }}>
                  Loading document preview...
                </Typography>
              </Box>
            )}
            <iframe
              ref={iframeRef}
              src={fileUrl}
              onLoad={() => setLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
              title={fileName}
            />
          </Box>
        ) : isImage ? (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              overflow: 'auto'
            }}
          >
            {loading && (
              <Box sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress color="primary" />
              </Box>
            )}
            <img
              src={fileUrl}
              alt={fileName}
              onLoad={() => setLoading(false)}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transform: `scale(${zoom})`,
                transition: 'transform 0.15s ease-in-out',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                borderRadius: '4px'
              }}
            />
          </Box>
        ) : (
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: 'center',
              bgcolor: '#1e293b',
              color: '#f8fafc',
              borderRadius: '8px',
              maxWidth: 420
            }}
          >
            <InsertDriveFileIcon sx={{ fontSize: 64, color: '#38bdf8', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {fileName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3 }}>
              Preview is not available for this file type. You can download and open it on your device.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
              startIcon={<DownloadIcon />}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Download to View
            </Button>
          </Paper>
        )}

        {/* Floating Glassmorphic Zoom Controls for Images */}
        {isImage && (
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 16, sm: 24 },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(8px)',
              borderRadius: '24px',
              px: 1.5,
              py: 0.5,
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.12)'
            }}
          >
            <Tooltip title="Zoom Out">
              <IconButton size="small" onClick={handleZoomOut} sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <ZoomOutIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Typography variant="caption" sx={{ color: '#fff', px: 1.2, fontWeight: 700, minWidth: '44px', textAlign: 'center', userSelect: 'none' }}>
              {Math.round(zoom * 100)}%
            </Typography>
            <Tooltip title="Zoom In">
              <IconButton size="small" onClick={handleZoomIn} sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <ZoomInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reset Zoom">
              <IconButton size="small" onClick={handleResetZoom} sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <RestartAltIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
