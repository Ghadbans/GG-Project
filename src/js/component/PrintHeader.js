import React from 'react';
import useCompanyProfile from '../hooks/useCompanyProfile';
import defaultLogo from '../img/images.png';

const DEFAULT_HQ = {
  companyName: 'GLOBAL GATE SARL',
  rccm: 'RCM CD/KWZ/RCCM/22-B-00317',
  natId: 'ID NAT 14-H5300N11179P',
  address: 'AVENUE SALONGO Q/INDUSTRIEL C/MANIKA',
  province: 'KOLWEZI LUALABA',
  country: 'DRC'
};

const PrintHeader = ({ branchId, fontSize, marginTop }) => {
  const { getBranchDetails } = useCompanyProfile();
  const fetched = getBranchDetails ? getBranchDetails(branchId) : null;
  const branchInfo = fetched || DEFAULT_HQ;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '6px' }}>
      <div>
        {branchInfo.logo && branchInfo.logo.length > 50 ? (
          <img src={branchInfo.logo} alt="Company Logo" style={{ maxHeight: '65px', maxWidth: 'var(--header-logo-width, 210px)', objectFit: 'contain', margin: 0, float: 'none', display: 'inline-block' }} />
        ) : (
          <img src={defaultLogo} alt="Default Logo" style={{ maxHeight: '65px', maxWidth: 'var(--header-logo-width, 210px)', objectFit: 'contain', margin: 0, float: 'none', display: 'inline-block' }} />
        )}
      </div>
      <address style={{ textAlign: 'var(--header-text-alignment, right)', fontStyle: 'normal', marginTop: marginTop || '0', margin: 0, lineHeight: 1.35 }}>
        <p style={{ fontWeight: 'bold', margin: '0 0 2px', fontSize: fontSize || 'var(--header-name-font-size, 12px)' }}>{branchInfo.companyName || DEFAULT_HQ.companyName}</p>
        <p style={{ fontWeight: 'normal', margin: 0, fontSize: 'var(--header-details-font-size, 9.5px)', lineHeight: 1.35 }}>
          {(branchInfo.rccm || DEFAULT_HQ.rccm) && `RCCM ${branchInfo.rccm || DEFAULT_HQ.rccm}`} <br />
          {(branchInfo.natId || DEFAULT_HQ.natId) && `ID NAT ${branchInfo.natId || DEFAULT_HQ.natId}`} <br />
          {branchInfo.address || DEFAULT_HQ.address} <br />
          {branchInfo.province || DEFAULT_HQ.province} <br />
          {branchInfo.country || DEFAULT_HQ.country}
        </p>
      </address>
    </div>
  );
};

export default PrintHeader;
