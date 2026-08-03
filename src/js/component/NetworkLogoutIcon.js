import React, { useState, useEffect, useRef } from 'react';
import Logout from '@mui/icons-material/Logout';
import { API_BASE_URL } from '../apiConfig';

export default function NetworkLogoutIcon({ style, ...props }) {
  const [connectionStatus, setConnectionStatus] = useState(navigator.onLine ? 'fast' : 'offline');
  const controllerRef = useRef(null);

  useEffect(() => {
    const checkStatus = async () => {
      if (!navigator.onLine) {
        setConnectionStatus('offline');
        return;
      }
      
      const startTime = Date.now();
      
      try {
        if (controllerRef.current) {
           controllerRef.current.abort();
        }
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const timeoutId = setTimeout(() => {
            if (controllerRef.current) controllerRef.current.abort();
        }, 4000);

        // Ping the Railway backend to accurately reflect if the server is reachable
        await fetch(`${API_BASE_URL}/`, { mode: 'no-cors', cache: 'no-store', signal });
        clearTimeout(timeoutId);

        const duration = Date.now() - startTime;

        if (duration < 1500) {
          setConnectionStatus('fast');
        } else {
          setConnectionStatus('slow');
        }
      } catch (e) {
        if (e.name === 'AbortError') {
          const duration = Date.now() - startTime;
          if (duration >= 3900) {
              setConnectionStatus('offline');
          }
        } else {
          setConnectionStatus('offline');
        }
      }
    };

    const handleOnline = () => checkStatus();
    const handleOffline = () => setConnectionStatus('offline');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const interval = setInterval(checkStatus, 5000);
    checkStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
      if (controllerRef.current) {
          controllerRef.current.abort();
      }
    };
  }, []);

  const getStyle = () => {
    switch(connectionStatus) {
      case 'fast':
        return { color: '#4caf50', filter: 'drop-shadow(0 0 6px #4caf50)' };
      case 'slow':
        return { color: '#ff9800', filter: 'drop-shadow(0 0 8px #ff9800)' };
      case 'offline':
      default:
        return { color: '#f44336', filter: 'drop-shadow(0 0 8px #f44336)' };
    }
  };

  const statusStyle = getStyle();

  return (
    <Logout
      style={{
        ...style,
        ...statusStyle,
        transition: 'all 0.3s ease-in-out'
      }}
      {...props}
    />
  );
}
