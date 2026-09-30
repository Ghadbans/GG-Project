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
    <section className="avoid-page-break" style={{ width: '100%', borderTop: '1px solid #d1d5db', marginTop: '12px', paddingTop: '6px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'transparent', fontSize: '9px', color: '#4b5563' }}>
      {branchInfo.email && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><EmailIcon sx={{ fontSize: '13px' }} /></span>
          <span>{branchInfo.email}</span>
        </p>
      )}
      {branchInfo.phone && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><PhoneIcon sx={{ fontSize: '13px' }} /></span>
          <span>{branchInfo.phone}</span>
        </p>
      )}
      {branchInfo.website && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><WebIcon sx={{ fontSize: '13px' }} /></span>
          <span>{branchInfo.website}</span>
        </p>
      )}
    </section>
  );
};

export default PrintFooter;
