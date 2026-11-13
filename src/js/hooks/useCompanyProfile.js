import { useState, useEffect } from 'react';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';

const DEFAULT_HQ_DETAILS = {
  companyName: 'GLOBAL GATE SARL',
  rccm: 'RCM CD/KWZ/RCCM/22-B-00317',
  natId: 'ID NAT 14-H5300N11179P',
  address: 'AVENUE SALONGO Q/INDUSTRIEL C/MANIKA',
  province: 'KOLWEZI LUALABA',
  country: 'DRC',
  phone: '+243 827 722 222',
  email: 'contact@globalgate.sarl',
  website: 'www.GlobalGate.sarl',
  bankName: 'SOFIBANQUE SA',
  entitled: 'GLOBAL GATE SARL',
  bankAccount: '00023233330214247020073',
  codeSwift: 'SFBXCDKIXXX',
  termsCondition: 'ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.'
};

const useCompanyProfile = () => {
  const [profileData, setProfileData] = useState(DEFAULT_HQ_DETAILS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await cachedGet(`${ENDPOINT_URL}/companyProfile`);
      if (res.data && res.data.data && res.data.data.length > 0) {
        setProfileData(res.data?.data?.[0]);
      }
    } catch (error) {
      console.error('Error fetching company profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const getBranchDetails = (branchId) => {
    const base = profileData || DEFAULT_HQ_DETAILS;

    // Default to HQ details (root fields of the profile)
    const hqDetails = {
      companyName: base.companyName || DEFAULT_HQ_DETAILS.companyName,
      logo: base.logo,
      rccm: base.rccm || DEFAULT_HQ_DETAILS.rccm,
      natId: base.natId || DEFAULT_HQ_DETAILS.natId,
      address: base.address || DEFAULT_HQ_DETAILS.address,
      province: base.province || DEFAULT_HQ_DETAILS.province,
      country: base.country || DEFAULT_HQ_DETAILS.country,
      phone: base.phone || DEFAULT_HQ_DETAILS.phone,
      email: base.email || DEFAULT_HQ_DETAILS.email,
      website: base.website || DEFAULT_HQ_DETAILS.website,
      bankName: base.bankName || DEFAULT_HQ_DETAILS.bankName,
      entitled: base.entitled || DEFAULT_HQ_DETAILS.entitled,
      bankAccount: base.bankAccount || DEFAULT_HQ_DETAILS.bankAccount,
      codeSwift: base.codeSwift || DEFAULT_HQ_DETAILS.codeSwift,
      termsCondition: base.termsCondition || DEFAULT_HQ_DETAILS.termsCondition,
    };

    // If a specific branch is requested (and it's not HQ explicitly), look it up
    if (branchId && branchId !== 'HQ' && base.branches) {
      const branch = base.branches.find(b => b.branchId === branchId);
      if (branch) {
        return {
          companyName: branch.companyName || hqDetails.companyName,
          logo: branch.logo || hqDetails.logo,
          rccm: branch.rccm || hqDetails.rccm,
          natId: branch.natId || hqDetails.natId,
          address: branch.address || hqDetails.address,
          province: branch.province || hqDetails.province,
          country: branch.country || hqDetails.country,
          phone: branch.phone || hqDetails.phone,
          email: branch.email || hqDetails.email,
          website: branch.website || hqDetails.website,
          bankName: hqDetails.bankName,
          entitled: hqDetails.entitled,
          bankAccount: hqDetails.bankAccount,
          codeSwift: hqDetails.codeSwift,
          termsCondition: hqDetails.termsCondition,
        };
      }
    }

    return hqDetails;
  };

  return { profileData, loading, getBranchDetails, refetch: fetchProfile };
};

export default useCompanyProfile;
