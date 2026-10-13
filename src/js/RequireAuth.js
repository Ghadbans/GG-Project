import React, { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, setUser } from "./features/auth/authSlice";
import { getRoutePermission, canAccessModule, fetchUserGrantAccess } from "./utils/permissionUtils";
import axios from "axios";
import { ENDPOINT_URL } from "./apiConfig";
import { toast } from "react-toastify";
import Loader from "./component/Loader";

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const [grantAccess, setGrantAccess] = useState(null);
  const [resolvedUser, setResolvedUser] = useState(null);
  const [checking, setChecking] = useState(true);

  const reduxUserName = user?.data?.userName || "";
  const reduxUserRole = user?.data?.role || "";
  const reduxUserId = user?.data?.id || user?.data?._id || "";

  useEffect(() => {
    let isMounted = true;

    const checkPermissions = async () => {
      let currentId = reduxUserId;
      let currentName = reduxUserName;
      let currentRole = reduxUserRole;

      // 1. If Redux is not yet hydrated (e.g. Shift + Click new window, fresh tab, or page refresh),
      // hydrate user credentials from localStorage before evaluating permissions!
      if (!currentId || !currentName) {
        const storedUserId = localStorage.getItem("user");
        if (!storedUserId) {
          if (isMounted) setChecking(false);
          return;
        }
        currentId = storedUserId;
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storedUserId}`);
          const empData = res.data?.data;
          if (empData) {
            currentName = empData.employeeName || "";
            currentRole = empData.role || "";
            const userData = {
              id: empData._id || storedUserId,
              userName: currentName,
              role: currentRole,
            };
            dispatch(setUser(userData));
            if (isMounted) setResolvedUser(userData);
          }
        } catch (err) {
          console.error("Error hydrating user in RequireAuth:", err);
        }
      } else {
        if (isMounted) {
          setResolvedUser({
            id: currentId,
            userName: currentName,
            role: currentRole,
          });
        }
      }

      if (!currentId) {
        if (isMounted) setChecking(false);
        return;
      }

      // 2. Superuser 'GG' bypasses all route permission checks
      if (currentName === "GG") {
        if (isMounted) {
          setGrantAccess([]);
          setChecking(false);
        }
        return;
      }

      // 3. Fetch user's Grant Access permissions
      try {
        const modules = await fetchUserGrantAccess(currentId);
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
  }, [reduxUserId, reduxUserName, reduxUserRole, dispatch]);

  const effectiveUser = (reduxUserName ? user?.data : resolvedUser) || {};
  const effectiveUserName = effectiveUser?.userName || "";
  const effectiveUserRole = effectiveUser?.role || "";
  const storedUserId = localStorage.getItem("user");

  // Authentication check: if no user session at all, redirect to login
  if (!effectiveUserName && !storedUserId && !reduxUserId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // While checking / hydrating permissions for non-GG users, display Loader
  if (checking && effectiveUserName !== "GG") {
    return <Loader />;
  }

  // Superuser 'GG' bypass
  if (effectiveUserName === "GG") {
    return <Outlet />;
  }

  // Evaluate Route Permission Rule
  const routePerm = getRoutePermission(location.pathname);

  // Unrestricted logged-in routes (e.g. /AdminHome, /SettingsViewAdmin)
  if (!routePerm) {
    return <Outlet />;
  }

  // Special restrictions: GG only routes
  if (routePerm.ggOnly && effectiveUserName !== "GG") {
    toast.error("Access Denied: Grant Access is restricted to Super Administrator.");
    return <Navigate to="/AdminHome" replace />;
  }

  // Special restrictions: CEO only routes
  if (routePerm.ceoOnly && effectiveUserRole !== "CEO" && effectiveUserName !== "GG") {
    toast.error("Access Denied: This module requires CEO authorization.");
    return <Navigate to="/AdminHome" replace />;
  }

  // Standard Module Permission Check via Grant Access
  const hasAccess = canAccessModule(effectiveUser, grantAccess || [], routePerm.module, routePerm.action);

  if (!hasAccess) {
    toast.error(`Access Denied: You do not have permission for the ${routePerm.module} module.`);
    return <Navigate to="/AdminHome" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;