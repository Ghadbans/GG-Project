import React from 'react';
import useCompanyProfile from '../hooks/useCompanyProfile';
import defaultLogo from '../img/images.png';

const PrintHeader = ({ branchId, fontSize, marginTop }) => {
  const { getBranchDetails } = useCompanyProfile();
  const branchInfo = getBranchDetails(branchId);

  if (!branchInfo) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
      <div>
        {branchInfo.logo && branchInfo.logo.length > 50 ? (
          <img src={branchInfo.logo} alt="Company Logo" style={{ maxHeight: '80px', maxWidth: 'var(--header-logo-width, 240px)', objectFit: 'contain', margin: 0, float: 'none', display: 'inline-block' }} />

        ) : (
          <img src={defaultLogo} alt="Default Logo" style={{ maxHeight: '80px', maxWidth: 'var(--header-logo-width, 240px)', objectFit: 'contain', margin: 0, float: 'none', display: 'inline-block' }} />

        )}
      </div>
      <address style={{ textAlign: 'var(--header-text-alignment, right)', fontStyle: 'normal', marginTop: marginTop || '0', margin: 0, lineHeight: 1.5 }}>
        <p style={{ fontWeight: 'bold', margin: '0 0 2px', fontSize: fontSize || 'var(--header-name-font-size, 12px)' }}>{branchInfo.companyName}</p>
        <p style={{ fontWeight: 'normal', margin: 0, fontSize: 'var(--header-details-font-size, 10px)', lineHeight: 1.4 }}>
          {branchInfo.rccm && `RCCM ${branchInfo.rccm}`} <br />
          {branchInfo.natId && `ID NAT ${branchInfo.natId}`} <br />
          {branchInfo.address} <br />
          {branchInfo.province} <br />
          {branchInfo.country}
        </p>
      </address>
    </div>
  );
};

export default PrintHeader;
