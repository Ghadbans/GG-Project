import React, { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./features/auth/authSlice";
import { getRoutePermission, canAccessModule, fetchUserGrantAccess } from "./utils/permissionUtils";
import { toast } from "react-toastify";
import Loader from "./component/Loader";

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  const [grantAccess, setGrantAccess] = useState(null);
  const [checking, setChecking] = useState(true);

  const userName = user?.data?.userName || "";
  const userRole = user?.data?.role || "";
  const userId = user?.data?.id || user?.data?._id || "";

  useEffect(() => {
    let isMounted = true;
    const checkPermissions = async () => {
      if (!userId) {
        if (isMounted) setChecking(false);
        return;
      }

      // GG Superuser bypass
      if (userName === "GG") {
        if (isMounted) {
          setGrantAccess([]);
          setChecking(false);
        }
        return;
      }

      try {
        const modules = await fetchUserGrantAccess(userId);
        if (isMounted) {
          setGrantAccess(modules);
          setChecking(false);
        }
      } catch (err) {
        console.error("Error verifying route permissions:", err);
        if (isMounted) {
          setGrantAccess([]);
          setChecking(false);
        }
      }
    };

    checkPermissions();

    return () => {
      isMounted = false;
    };
  }, [userId, userName]);

  // 1. Authentication Check
  if (!user || !user.data) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // 2. While fetching access permissions for non-GG users
  if (checking && userName !== "GG") {
    return <Loader />;
  }

  // 3. Superuser 'GG' bypass
  if (userName === "GG") {
    return <Outlet />;
  }

  // 4. Evaluate Route Permission Rule
  const routePerm = getRoutePermission(location.pathname);

  // Unrestricted logged-in routes (e.g. /AdminHome, /SettingsViewAdmin)
  if (!routePerm) {
    return <Outlet />;
  }

  // Special restrictions
  if (routePerm.ggOnly && userName !== "GG") {
    toast.error("Access Denied: Grant Access is restricted to Super Administrator.");
    return <Navigate to="/AdminHome" replace />;
  }

  if (routePerm.ceoOnly && userRole !== "CEO" && userName !== "GG") {
    toast.error("Access Denied: This module requires CEO authorization.");
    return <Navigate to="/AdminHome" replace />;
  }

  // Standard Module Permission Check
  const hasAccess = canAccessModule(user.data, grantAccess || [], routePerm.module, routePerm.action);

  if (!hasAccess) {
    toast.error(`Access Denied: You do not have permission for the ${routePerm.module} module.`);
    return <Navigate to="/AdminHome" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;