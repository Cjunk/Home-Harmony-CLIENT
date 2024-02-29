import  { useEffect, useRef } from 'react';
import { logout } from '../../services/authService';

const globalTimeout = 15 * 60 * 1000; // 5 minutes in milliseconds

function AutoLogout({ onLogout }) {
    const lastActivityTimestampRef = useRef(Date.now());
    const timeoutRef = useRef(null);

    const handleUserActivity = () => {
        lastActivityTimestampRef.current = Date.now();
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(logoutUser, globalTimeout);
    };

    const logoutUser = () => {
        logout();
        onLogout();
    };

    useEffect(() => {
        const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

        const addEventListeners = () => {
            events.forEach(event => {
                document.addEventListener(event, handleUserActivity);
            });
        };

        const removeEventListeners = () => {
            events.forEach(event => {
                document.removeEventListener(event, handleUserActivity);
            });
        };

        addEventListeners();
        timeoutRef.current = setTimeout(logoutUser, globalTimeout);

        return () => {
            clearTimeout(timeoutRef.current);
            removeEventListeners();
        };
    });

    useEffect(() => {
        const checkInactivity = () => {
            const currentTime = Date.now();
            const timeSinceLastActivity = currentTime - lastActivityTimestampRef.current;
            if (timeSinceLastActivity > globalTimeout) {
                logoutUser();
            } else {
                timeoutRef.current = setTimeout(checkInactivity, globalTimeout - timeSinceLastActivity);
            }
        };

        timeoutRef.current = setTimeout(checkInactivity, globalTimeout);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    });

    return null;
}

export default AutoLogout;




