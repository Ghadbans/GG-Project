import React from 'react';
import useCompanyProfile from '../hooks/useCompanyProfile';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';

const DEFAULT_FOOTER = {
  email: 'contact@globalgate.sarl',
  phone: '+243 827 722 222',
  website: 'www.GlobalGate.sarl'
};

const PrintFooter = ({ branchId }) => {
  const { getBranchDetails } = useCompanyProfile();
  const fetched = getBranchDetails ? getBranchDetails(branchId) : null;
  const branchInfo = fetched || DEFAULT_FOOTER;

  const email = branchInfo.email || DEFAULT_FOOTER.email;
  const phone = branchInfo.phone || DEFAULT_FOOTER.phone;
  const website = branchInfo.website || DEFAULT_FOOTER.website;

  return (
    <section className="avoid-page-break" style={{ width: '100%', borderTop: '1px solid #d1d5db', marginTop: '12px', paddingTop: '6px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'transparent', fontSize: '9px', color: '#4b5563' }}>
      {email && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><EmailIcon sx={{ fontSize: '13px' }} /></span>
          <span>{email}</span>
        </p>
      )}
      {phone && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><PhoneIcon sx={{ fontSize: '13px' }} /></span>
          <span>{phone}</span>
        </p>
      )}
      {website && (
        <p style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}>
          <span><WebIcon sx={{ fontSize: '13px' }} /></span>
          <span>{website}</span>
        </p>
      )}
    </section>
  );
};

export default PrintFooter;
