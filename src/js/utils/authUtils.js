import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';
import { logOut } from '../features/auth/authSlice';

/**
 * Centrally handle user logout with audit trail recording
 * @param {Function} dispatch - Redux dispatch
 * @param {Function} navigate - React Router navigate
 * @param {Object} currentUser - Current user object from redux (optional)
 */
export const handleUserLogout = async (dispatch, navigate, currentUser = null) => {
  const userName = currentUser?.userName || currentUser?.data?.userName || localStorage.getItem('currentUserName') || '';
  const role = currentUser?.role || currentUser?.data?.role || '';
  const userId = currentUser?.id || currentUser?.data?.id || localStorage.getItem('user') || '';
  const branchId = currentUser?.selectedBranch || currentUser?.data?.selectedBranch || localStorage.getItem('selectedBranch') || 'HQ';

  try {
    if (userName) {
      await axios.post(`${API_BASE_URL}/auth/logout`, {
        employeeName: userName,
        role: role,
        userId: userId,
        branchId: branchId,
      });
    }
  } catch (err) {
    console.error('Failed to notify logout to backend:', err);
  } finally {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserName');
    if (dispatch) {
      dispatch(logOut());
    }
    if (navigate) {
      navigate('/');
    }
  }
};
