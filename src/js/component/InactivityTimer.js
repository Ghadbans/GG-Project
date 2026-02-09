import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHibernating, selectCurrentUser } from '../features/auth/authSlice';

const InactivityTimer = ({ children }) => {
    const dispatch = useDispatch();
    const { isHibernating } = useSelector(selectCurrentUser);
    const timeoutRef = useRef(null);

    // 30 minutes in milliseconds
    const INACTIVITY_LIMIT = 30 * 60 * 1000;

    const resetTimer = useCallback(() => {
        // If we were hibernating, wake up immediately
        if (isHibernating) {
            console.log("Activity detected! Reconnecting to cloud...");
            dispatch(setHibernating(false));
        }

        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set new timeout for hibernation
        timeoutRef.current = setTimeout(() => {
            console.log("No activity for 30 minutes. Entering sleep mode to save bandwidth...");
            dispatch(setHibernating(true));
        }, INACTIVITY_LIMIT);
    }, [dispatch, isHibernating]);

    useEffect(() => {
        // Events to monitor for activity
        const events = [
            'mousedown',
            'mousemove',
            'keypress',
            'scroll',
            'touchstart',
            'click',
            'keydown'
        ];

        // Handler for activity
        const handleActivity = () => {
            resetTimer();
        };

        // Add event listeners
        events.forEach(event => {
            window.addEventListener(event, handleActivity, { passive: true });
        });

        // Initial timer set
        resetTimer();

        // Cleanup on unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
        };
    }, [resetTimer]);

    return (
        <>
            {isHibernating && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999999,
                    backdropFilter: 'blur(5px)',
                    cursor: 'pointer'
                }} onClick={resetTimer}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sleep Mode</h1>
                        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Saving bandwidth due to inactivity.</p>
                        <p style={{ marginTop: '2rem', animation: 'pulse 2s infinite' }}>Move mouse or press any key to wake up</p>
                    </div>
                    <style>{`
                        @keyframes pulse {
                            0% { opacity: 0.5; }
                            50% { opacity: 1; }
                            100% { opacity: 0.5; }
                        }
                    `}</style>
                </div>
            )}
            {children}
        </>
    );
};

export default InactivityTimer;
