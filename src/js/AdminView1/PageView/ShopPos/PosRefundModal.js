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
  width: '85%',
  maxWidth: '900px',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

export default function PosRefundModal({ open, handleClose, posId }) {
  const [items, setItems] = useState([]);
  const [posData, setPosData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cashRefundUSD, setCashRefundUSD] = useState(0);
  const [cashRefundFC, setCashRefundFC] = useState(0);

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
          refundInput: 0,
          refundedQty: parseFloat(item.refundedQty) || 0,
          itemQty: parseFloat(item.itemQty) || 0,
          itemRate: parseFloat(item.itemRate) || (parseFloat(item.itemAmount) / (parseFloat(item.itemQty) || 1)) || 0
        }));
        setItems(fetchedItems);
        setCashRefundUSD(0);
        setCashRefundFC(0);
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

    // Auto-update default cash refund in FC
    const newTotalFC = newItems.reduce((total, item) => {
      const unitPrice = parseFloat(item.itemRate) || 0;
      return total + (unitPrice * (parseFloat(item.refundInput) || 0));
    }, 0);
    setCashRefundFC(newTotalFC);
    setCashRefundUSD(0);
  };

  const getItemName = (item) => {
    if (item.itemName && typeof item.itemName === 'object') {
      return item.itemName.itemName || item.itemName.itemDescription || 'Item';
    }
    return item.itemName || item.itemDescription || 'Item';
  };

  const calculateTotalRefundAmountFC = () => {
    return items.reduce((total, item) => {
      const unitPrice = parseFloat(item.itemRate) || 0;
      return total + (unitPrice * (parseFloat(item.refundInput) || 0));
    }, 0);
  };

  const rate = posData ? (parseFloat(posData.rate) || 1) : 1;
  const totalRefundFC = calculateTotalRefundAmountFC();
  const totalRefundUSD = (totalRefundFC / rate).toFixed(2);

  const setAllFC = () => {
    setCashRefundFC(totalRefundFC);
    setCashRefundUSD(0);
  };

  const setAllUSD = () => {
    setCashRefundUSD(parseFloat(totalRefundUSD));
    setCashRefundFC(0);
  };

  const setProportional = () => {
    if (!posData) return;
    const origPaidFC = parseFloat(posData.totalFC) || 0;
    const origPaidUSD = parseFloat(posData.totalUSD) || 0;
    const totalPaidFCVal = (origPaidUSD * rate) + origPaidFC;
    if (totalPaidFCVal > 0) {
      const fcRatio = origPaidFC / totalPaidFCVal;
      const refFC = Math.round(totalRefundFC * fcRatio);
      const remainingForUSD = totalRefundFC - refFC;
      const refUSD = parseFloat((remainingForUSD / rate).toFixed(2));
      setCashRefundFC(refFC);
      setCashRefundUSD(refUSD);
    } else {
      setAllFC();
    }
  };

  const givenCashFC = parseFloat(cashRefundFC) || 0;
  const givenCashUSD = parseFloat(cashRefundUSD) || 0;
  const totalGivenInFC = (givenCashUSD * rate) + givenCashFC;
  const cashDifferenceFC = totalGivenInFC - totalRefundFC;

  const handleSubmit = async () => {
    if (!posData) return;
    const totalRefundInput = items.reduce((sum, i) => sum + (parseFloat(i.refundInput) || 0), 0);
    if (totalRefundInput === 0) {
      toast.warning('Please specify at least 1 quantity to refund.');
      return;
    }

    if (givenCashFC === 0 && givenCashUSD === 0 && totalRefundFC > 0) {
      toast.warning('Please specify the cash refund amount in USD ($) or FC.');
      return;
    }

    setLoading(true);

    const newItems = items.map(item => ({
      ...item,
      refundedQty: (parseFloat(item.refundedQty) || 0) + (parseFloat(item.refundInput) || 0)
    }));

    const refundFC = totalRefundFC;

    // Deduct exact cash given back in USD and in FC from the POS record
    const newTotalUSD = (parseFloat(posData.totalUSD || 0) - givenCashUSD);
    const newTotalFC = (parseFloat(posData.totalFC || 0) - givenCashFC);
    const newTotalPaid = Math.max(0, (newTotalUSD * rate) + newTotalFC);
    const newSubTotal = Math.max(0, parseFloat(posData.subTotal || 0) - refundFC);
    const newTotalInvoice = Math.max(0, parseFloat(posData.totalInvoice || 0) - refundFC);

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
      items: newItems.map(({ refundInput, ...rest }) => rest),
      TotalAmountPaid: newTotalPaid,
      subTotal: newSubTotal,
      totalInvoice: newTotalInvoice,
      totalFC: newTotalFC,
      totalUSD: newTotalUSD,
      remaining: Math.max(0, newTotalFC - newTotalPaid),
      balanceDue: Math.max(0, newTotalFC - newTotalPaid),
      status: newStatus,
      tax: posData.tax,
      refundedAmountFC: (parseFloat(posData.refundedAmountFC) || 0) + refundFC,
      refundedAmountUSD: (parseFloat(posData.refundedAmountUSD) || 0) + parseFloat(totalRefundUSD),
      refundedCashFC: (parseFloat(posData.refundedCashFC) || 0) + givenCashFC,
      refundedCashUSD: (parseFloat(posData.refundedCashUSD) || 0) + givenCashUSD
    };

    try {
      await axios.post(`${ENDPOINT_URL}/refund-pos/${posId}`, payload);
      toast.success('Refund processed successfully!');
      invalidateCache('/pos');
      handleClose(true);
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
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          Process Refund (POS Invoice #{posData?.factureNumber})
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Customer: <strong>{posData?.customerName?.customerName || 'Walk-in'}</strong> | Rate: <strong>1 USD = {rate.toLocaleString()} FC</strong> | Originally Paid: <strong>FC {(parseFloat(posData?.totalFC) || 0).toLocaleString()} + ${(parseFloat(posData?.totalUSD) || 0).toFixed(2)}</strong>
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Item</strong></TableCell>
                <TableCell><strong>Unit Price (FC)</strong></TableCell>
                <TableCell align="center"><strong>Qty Bought</strong></TableCell>
                <TableCell align="center"><strong>Already Refunded</strong></TableCell>
                <TableCell align="center"><strong>Refund Qty</strong></TableCell>
                <TableCell align="right"><strong>Refund Value (FC)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => {
                const unitPrice = parseFloat(item.itemRate) || 0;
                const maxAllowed = item.itemQty - item.refundedQty;
                const refundValue = unitPrice * (parseFloat(item.refundInput) || 0);

                return (
                  <TableRow key={index}>
                    <TableCell>{getItemName(item)}</TableCell>
                    <TableCell>FC {unitPrice.toLocaleString()}</TableCell>
                    <TableCell align="center">{item.itemQty} {item.unit || ''}</TableCell>
                    <TableCell align="center">{item.refundedQty} {item.unit || ''}</TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        size="small"
                        value={item.refundInput}
                        onChange={(e) => handleRefundInputChange(index, e.target.value)}
                        inputProps={{ min: 0, max: maxAllowed, step: 'any' }}
                        sx={{ width: '85px' }}
                        disabled={loading || maxAllowed <= 0}
                      />
                    </TableCell>
                    <TableCell align="right">
                      FC {refundValue.toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Cash Refund Currency Breakdown Box */}
        <Box sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
            Cash Returned to Customer (USD $ and FC Frank):
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
            <TextField
              label="Refund in USD ($)"
              type="number"
              size="small"
              value={cashRefundUSD}
              onChange={(e) => setCashRefundUSD(e.target.value)}
              inputProps={{ min: 0, step: 'any' }}
              sx={{ width: '160px', backgroundColor: 'white' }}
            />
            <TextField
              label="Refund in FC (Francs)"
              type="number"
              size="small"
              value={cashRefundFC}
              onChange={(e) => setCashRefundFC(e.target.value)}
              inputProps={{ min: 0, step: 'any' }}
              sx={{ width: '180px', backgroundColor: 'white' }}
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button size="small" variant="outlined" onClick={setAllFC}>All in FC</Button>
              <Button size="small" variant="outlined" onClick={setAllUSD}>All in USD</Button>
              <Button size="small" variant="outlined" onClick={setProportional}>Proportional</Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', fontSize: '13px' }}>
            <span>Required Refund: <strong>FC {totalRefundFC.toLocaleString()} (${totalRefundUSD})</strong></span>
            <span>|</span>
            <span>Cash Given: <strong>FC {givenCashFC.toLocaleString()} + ${givenCashUSD} (= FC {totalGivenInFC.toLocaleString()})</strong></span>
            {Math.abs(cashDifferenceFC) < 1 ? (
              <span style={{ color: 'green', fontWeight: 'bold' }}>✓ Exact Match</span>
            ) : cashDifferenceFC > 0 ? (
              <span style={{ color: 'orange', fontWeight: 'bold' }}>Overpaying by FC {cashDifferenceFC.toLocaleString()}</span>
            ) : (
              <span style={{ color: 'red', fontWeight: 'bold' }}>Remaining to return: FC {Math.abs(cashDifferenceFC).toLocaleString()}</span>
            )}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, backgroundColor: '#fff3e0', borderRadius: '6px' }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
              Total Refund Value: FC {totalRefundFC.toLocaleString()} (${totalRefundUSD})
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              This will update the physical cash in hand in POS Report & Daily Expenses Summary, and return physical inventory to stock.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleSubmit} 
            disabled={loading || totalRefundFC <= 0}
            sx={{ px: 3, py: 1 }}
          >
            {loading ? 'Processing...' : 'Confirm Refund'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
