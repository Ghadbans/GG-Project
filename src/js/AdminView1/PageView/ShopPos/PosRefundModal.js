import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ENDPOINT_URL } from '../../../apiConfig';
import { invalidateCache } from '../../../utils/apiCache';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

export default function PosRefundModal({ open, handleClose, posId, rate }) {
  const [items, setItems] = useState([]);
  const [posData, setPosData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && posId) {
      fetchData();
    }
  }, [open, posId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${ENDPOINT_URL}/get-pos/${posId}`);
      if (res.data && res.data.data) {
        setPosData(res.data.data);
        const fetchedItems = res.data.data.items.map(item => ({
          ...item,
          refundInput: 0, // State for the current refund action
          refundedQty: parseFloat(item.refundedQty) || 0,
          itemQty: parseFloat(item.itemQty) || 0
        }));
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch POS details');
    }
    setLoading(false);
  };

  const handleRefundInputChange = (index, value) => {
    const newItems = [...items];
    const val = parseFloat(value) || 0;
    const maxAllowed = newItems[index].itemQty - newItems[index].refundedQty;
    if (val < 0) {
      newItems[index].refundInput = 0;
    } else if (val > maxAllowed) {
      newItems[index].refundInput = maxAllowed;
    } else {
      newItems[index].refundInput = val;
    }
    setItems(newItems);
  };

  const calculateTotalRefundAmount = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.itemAmount) || 0;
      return total + (price * (parseFloat(item.refundInput) || 0));
    }, 0);
  };

  const calculateNewSubTotal = () => {
    if (!posData) return 0;
    const refundSub = items.reduce((total, item) => {
      const price = parseFloat(item.itemAmount) || 0;
      const totalRefundedQty = (parseFloat(item.refundedQty) || 0) + (parseFloat(item.refundInput) || 0);
      return total + (price * totalRefundedQty);
    }, 0);
    // Original total WITHOUT any refunds is simply summing (itemAmount * itemQty)
    const originalSub = items.reduce((tot, item) => tot + ((parseFloat(item.itemAmount) || 0) * (parseFloat(item.itemQty) || 0)), 0);
    return originalSub - refundSub;
  };

  const handleSubmit = async () => {
    if (!posData) return;
    const totalRefundInput = items.reduce((sum, i) => sum + (parseFloat(i.refundInput) || 0), 0);
    if (totalRefundInput === 0) {
      toast.warning('Please specify at least 1 quantity to refund.');
      return;
    }

    setLoading(true);

    const newItems = items.map(item => ({
      ...item,
      refundedQty: (parseFloat(item.refundedQty) || 0) + (parseFloat(item.refundInput) || 0)
    }));

    // Calculate new financial totals
    const originalSub = items.reduce((tot, item) => tot + ((parseFloat(item.itemAmount) || 0) * (parseFloat(item.itemQty) || 0)), 0);
    const newSubTotal = calculateNewSubTotal();
    
    // Tax is usually included in totalFC based on CheckTvA if applied, but for simplicity we assume tax applies proportionally or we just calculate based on POS rate
    // Actually, in GG POS, totalInvoice = subTotal + tax + etc. We will simply deduct the refunded amount from the total
    const refundFC = calculateTotalRefundAmount();
    // Assuming refund is taken proportionally from TotalAmountPaid
    
    const newTotalPaid = Math.max(0, parseFloat(posData.TotalAmountPaid) - refundFC);
    const newTotalFC = Math.max(0, parseFloat(posData.totalFC) - refundFC);
    const newTotalUSD = parseFloat((newTotalFC / (posData.rate || rate || 1)).toFixed(2));
    
    // Check if fully refunded
    const totalQtyPurchased = newItems.reduce((sum, i) => sum + (parseFloat(i.itemQty) || 0), 0);
    const totalQtyRefunded = newItems.reduce((sum, i) => sum + (parseFloat(i.refundedQty) || 0), 0);
    
    let newStatus = posData.status;
    if (totalQtyRefunded >= totalQtyPurchased) {
      newStatus = 'Refunded';
    } else if (totalQtyRefunded > 0) {
      newStatus = 'Partially-Refunded';
    }

    const payload = {
      items: newItems.map(({ refundInput, ...rest }) => rest), // remove temporary input field
      TotalAmountPaid: newTotalPaid,
      subTotal: newSubTotal,
      totalFC: newTotalFC,
      totalUSD: newTotalUSD,
      remaining: Math.max(0, newTotalFC - newTotalPaid),
      balanceDue: Math.max(0, newTotalFC - newTotalPaid), // Sync balanceDue with remaining
      status: newStatus,
      tax: posData.tax // Keeping original tax unless we strictly need to recalculate it
    };

    try {
      await axios.post(`${ENDPOINT_URL}/refund-pos/${posId}`, payload);
      toast.success('Refund processed successfully!');
      invalidateCache('/pos');
      handleClose(true); // pass true to indicate success
    } catch (error) {
      console.error(error);
      toast.error('Failed to process refund');
    }
    setLoading(false);
  };

  return (
    <Modal open={open} onClose={() => handleClose(false)}>
      <Box sx={style}>
        <IconButton onClick={() => handleClose(false)} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Process Refund (POS Invoice #{posData?.factureNumber})
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Price (FC)</TableCell>
                <TableCell>Qty Bought</TableCell>
                <TableCell>Already Refunded</TableCell>
                <TableCell>Refund Qty</TableCell>
                <TableCell>Refund Value (FC)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.itemName?.itemDescription || 'Unknown'}</TableCell>
                  <TableCell>{parseFloat(item.itemAmount || 0).toLocaleString()}</TableCell>
                  <TableCell>{item.itemQty}</TableCell>
                  <TableCell>{item.refundedQty}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      value={item.refundInput}
                      onChange={(e) => handleRefundInputChange(index, e.target.value)}
                      inputProps={{ min: 0, max: item.itemQty - item.refundedQty }}
                      sx={{ width: '80px' }}
                      disabled={loading || (item.itemQty - item.refundedQty <= 0)}
                    />
                  </TableCell>
                  <TableCell>
                    {((parseFloat(item.itemAmount) || 0) * (item.refundInput || 0)).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="error">
            Total Refund: FC {calculateTotalRefundAmount().toLocaleString()}
          </Typography>
          <Button variant="contained" color="error" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Refund'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
