import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ENDPOINT_URL } from '../apiConfig';
import { selectCurrentUser } from '../features/auth/authSlice';

// Global flag to stop heartbeat when unmounting
let lockTimeouts = {};

// Generate a unique session ID for this browser tab
const sessionLockId = Math.random().toString(36).substring(2, 6).toUpperCase();

export const useDocumentLock = (documentId, collectionName) => {
    const user = useSelector(selectCurrentUser);
    const resolvedUserName = user?.data?.userName || (function() {
        try { return localStorage.getItem('currentUserName') || ''; } catch (e) { return ''; }
    })();
    const lockedBy = (resolvedUserName || 'Unknown User') + ' (' + sessionLockId + ')';

    const [isLocked, setIsLocked] = useState(false);
    const [lockedByUser, setLockedByUser] = useState(null);
    const [lockError, setLockError] = useState(null);

    const startHeartbeat = useCallback(() => {
        if (!documentId) return;
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
                if (error.response && (error.response.status === 409 || error.response.status === 404)) {
                    clearInterval(lockTimeouts[documentId]);
                    setIsLocked(true);
                }
            }
        }, 30000); // 30 seconds
    }, [documentId, collectionName, lockedBy]);

    const acquireLock = useCallback(async () => {
        if (!documentId || !collectionName) return;
        // Do not send dummy lock if username is not yet known
        if (!resolvedUserName) return;

        try {
            const res = await axios.post(`${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/acquire`, {
                documentId,
                collectionName,
                lockedBy
            });
            setIsLocked(false);
            setLockError(null);
            startHeartbeat();
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setIsLocked(true);
                setLockError(error.response.data.error);
            }
        }
    }, [documentId, collectionName, lockedBy, resolvedUserName, startHeartbeat]);

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

    const forceRelease = async () => {
        if (lockTimeouts[documentId]) {
            clearInterval(lockTimeouts[documentId]);
            delete lockTimeouts[documentId];
        }
        try {
            await axios.post(`${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/release`, {
                documentId,
                collectionName,
                lockedBy: 'force',
                force: true
            });
            setIsLocked(false);
            setLockError(null);
            await acquireLock();
        } catch (error) {
            console.error('Error force releasing lock', error);
        }
    };

    return { isLocked, lockError, lockConfig, lockedBy, forceRelease };
};
