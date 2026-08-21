import { useState, useEffect } from 'react';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';

const useCompanyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    if (!profileData) return null;

    // Default to HQ details (root fields of the profile)
    const hqDetails = {
      companyName: profileData.companyName || 'GLOBAL GATE SARL',
      logo: profileData.logo,
      rccm: profileData.rccm,
      natId: profileData.natId,
      address: profileData.address,
      province: profileData.province,
      country: profileData.country,
      phone: profileData.phone,
      email: profileData.email,
      website: profileData.website,
      bankName: profileData.bankName,
      entitled: profileData.entitled,
      bankAccount: profileData.bankAccount,
      codeSwift: profileData.codeSwift,
      termsCondition: profileData.termsCondition,
    };

    // If a specific branch is requested (and it's not HQ explicitly), look it up
    if (branchId && branchId !== 'HQ' && profileData.branches) {
      const branch = profileData.branches.find(b => b.branchId === branchId);
      if (branch) {
        // Return a merged object: use branch details if they exist, otherwise fall back to HQ
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
          // Bank details usually remain centralized, but can be added here if needed in the future
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
