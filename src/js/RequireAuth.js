import React, { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, setUser } from "./features/auth/authSlice";
import { getRoutePermission, canAccessModule, fetchUserGrantAccess } from "./utils/permissionUtils";
import { isNativeMobile } from "./utils/isMobile";
import axios from "axios";
import { ENDPOINT_URL } from "./apiConfig";
import { toast } from "react-toastify";
import Loader from "./component/Loader";

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = isNativeMobile();

  const [grantAccess, setGrantAccess] = useState(null);
  const [checking, setChecking] = useState(isMobile);

  const userName = user?.data?.userName || "";
  const userRole = user?.data?.role || "";
  const userId = user?.data?.id || user?.data?._id || "";

  useEffect(() => {
    // STRICT ISOLATION: Desktop (.exe) and Web Portal handle auth/permissions
    // inside their own module views and SidebarDash (allowing Shift+Click new windows
    // to mount and hydrate from localStorage without false "Access Denied" redirects).
    if (!isMobile) {
      setChecking(false);
      return;
    }

    let isMounted = true;
    const checkPermissions = async () => {
      let resolvedId = userId;
      let resolvedName = userName;
      let resolvedRole = userRole;

      // Hydrate from localStorage if Redux store has not hydrated yet
      if (!resolvedId || !resolvedName) {
        const storedUserId = localStorage.getItem("user");
        if (!storedUserId) {
          if (isMounted) setChecking(false);
          return;
        }
        resolvedId = storedUserId;
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storedUserId}`);
          const empData = res.data?.data;
          if (empData) {
            resolvedName = empData.employeeName || "";
            resolvedRole = empData.role || "";
            dispatch(
              setUser({
                id: empData._id || storedUserId,
                userName: resolvedName,
                role: resolvedRole,
              })
            );
          }
        } catch (err) {
          console.error("Error hydrating user in RequireAuth:", err);
        }
      }

      if (!resolvedId) {
        if (isMounted) setChecking(false);
        return;
      }

      // GG Superuser bypass
      if (resolvedName === "GG") {
        if (isMounted) {
          setGrantAccess([]);
          setChecking(false);
        }
        return;
      }

      try {
        const modules = await fetchUserGrantAccess(resolvedId);
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
  }, [isMobile, userId, userName, userRole, dispatch]);

  // STRICT DESKTOP & WEB ISOLATION:
  // Preserve 100% original Desktop & Web behavior so Shift+Click new windows
  // and page transitions never trigger mobile route guard redirects.
  if (!isMobile) {
    return user && user.data ? (
      <Outlet />
    ) : (
      <Navigate to="/" state={{ from: location }} replace />
    );
  }

  // --- NATIVE MOBILE ONLY BELOW ---

  // 1. Authentication Check
  const storedUserId = localStorage.getItem("user");
  if ((!user || !user.data) && !storedUserId) {
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