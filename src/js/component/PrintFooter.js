import React from 'react';
import useCompanyProfile from '../hooks/useCompanyProfile';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';

const PrintFooter = ({ branchId }) => {
  const { getBranchDetails } = useCompanyProfile();
  const branchInfo = getBranchDetails(branchId);

  if (!branchInfo) return null;

  return (
    <section style={{ position: 'fixed', bottom: 0, left: 0, right: 0, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 0' }}>
      {branchInfo.email && (
        <p style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: 0 }}>
          <span><EmailIcon fontSize="small" /></span>
          <span>{branchInfo.email}</span>
        </p>
      )}
      {branchInfo.phone && (
        <p style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: 0 }}>
          <span><PhoneIcon fontSize="small" /></span>
          <span>{branchInfo.phone}</span>
        </p>
      )}
      {branchInfo.website && (
        <p style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: 0 }}>
          <span><WebIcon fontSize="small" /></span>
          <span>{branchInfo.website}</span>
        </p>
      )}
    </section>
  );
};

export default PrintFooter;
