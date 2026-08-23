import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ENDPOINT_URL } from '../apiConfig'; // Adjust if needed
import { selectCurrentUser } from '../features/auth/authSlice';

// Global flag to stop heartbeat when unmounting
let lockTimeouts = {};


// Generate a unique session ID for this browser tab so we can distinguish multiple tabs logged in as the same user
const sessionLockId = Math.random().toString(36).substring(2, 6).toUpperCase();

export const useDocumentLock = (documentId, collectionName) => {
    const user = useSelector(selectCurrentUser);
    const lockedBy = (user?.data?.userName || 'Unknown User') + ' (' + sessionLockId + ')';


    const [isLocked, setIsLocked] = useState(false);
    const [lockedByUser, setLockedByUser] = useState(null);
    const [lockError, setLockError] = useState(null);

    const acquireLock = useCallback(async () => {
        if (!documentId || !collectionName) return;

        try {
            const res = await axios.post(`${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/acquire`, {
                documentId,
                collectionName,
                lockedBy
            });
            setIsLocked(false); // We hold the lock
            startHeartbeat();
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setIsLocked(true);
                setLockError(error.response.data.error);
                // alert removed in favor of UI overlay
            }
        }
    }, [documentId, collectionName, lockedBy]);

    const startHeartbeat = () => {
        if (lockTimeouts[documentId]) {
            clearInterval(lockTimeouts[documentId]);
        }
        lockTimeouts[documentId] = setInterval(async () => {
            try {
                await axios.post(`${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/heartbeat`, {
                    documentId,
                    collectionName,
                    lockedBy
                });
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    clearInterval(lockTimeouts[documentId]);
                    setIsLocked(true);
                    alert("Your session expired and another user took over. Refreshing page to load their latest data...");
                    window.location.reload();
                }
            }
        }, 30000); // 30 seconds
    };

    const releaseLock = useCallback(async () => {
        if (!documentId || !collectionName) return;
        if (lockTimeouts[documentId]) {
            clearInterval(lockTimeouts[documentId]);
            delete lockTimeouts[documentId];
        }
        try {
            await axios.post(`${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/release`, {
                documentId,
                collectionName,
                lockedBy
            });
        } catch (error) {
            console.error('Error releasing lock', error);
        }
    }, [documentId, collectionName, lockedBy]);

    useEffect(() => {
        acquireLock();
        return () => {
            releaseLock();
        };
    }, [acquireLock, releaseLock]);

    // Provide the config object to append to axios PUT requests for the middleware
    const lockConfig = {
        headers: {
            'x-lock-user': lockedBy
        }
    };

    return { isLocked, lockError, lockConfig, lockedBy };
};
