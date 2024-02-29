// This is the Navigation Bar
// eslint-disable-next-line
import React from 'react'
import { logout } from '../../services/authService';
import './styles/navigationbar2.css';
/**
 * NavigationBar component renders the navigation bar for the application.
 * @param {Object} props - Component props containing isLoggedIn, pageSelector, and handleLogout functions.
 * @returns {JSX.Element} Navigation bar JSX element.
 */
function NavigationBar({ isLoggedIn, pageSelector, handleLogout }) {
    const handleLogoutClick = async () => {
        try {
            console.log("ATTEMPTING LOGOUT");
            await logout();
            pageSelector(1);
            handleLogout();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    const menuItems = [
        { id: 1, name: "Home", className: "desktopButton", visible: 1 },
        { id: 2, name: "Add Item", className: "desktopButton", visible: 0 },
        { id: 3, name: "Add Location", className: "desktopButton", visible: 0 },
        { id: 4, name: "Settings", className: "desktopButton", visible: 0 },
        { id: 5, name: "Home", className: "desktopButton", visible: 0 },
        { id: 6, name: "Home", className: "desktopButton", visible: 0 },
        { id: 7, name: "Home", className: "desktopButton", visible: 0 },
        { id: 8, name: "Logout", className: "desktopButton", visible: 1, onClick: handleLogoutClick },
        { id: 9, name: "Home", className: "", visible: 1, buttonClassName: "mobileNavButtons" },
        { id: 10, name: "Options", className: "", visible: 1, onClick: handleLogoutClick, buttonClassName: "mobileNavButtons" },
    ];
    const homeMenuItems = [
        { id: 1, name: "Home", className: "desktopButton", visible: 1 },
        { id: 2, name: "Login", className: "desktopButton", visible: 1 },
        { id: 3, name: "Register", className: "desktopButton", visible: 1 },
    ];
    const executeMenuItem = (id) => {
        switch (id) {
            case 2:
                pageSelector(id);
                break;
            case 8:
                handleLogoutClick();
                break;
            case 3:
                pageSelector(id)
                break;
            case 1:
                pageSelector(id)
                break;
            default:
                break;
        }
    };

    const renderMenuItems = (menuItems) => {
        return menuItems.map((menuItem) => {
            return menuItem.visible === 1 && (
                <li key={menuItem.id} className={menuItem.className}>
                    <button className={menuItem.buttonClassName || "desktopButton"} onClick={() => executeMenuItem(menuItem.id)}>{menuItem.name}</button>
                </li>
            );
        });
    };

    return (
        <nav className="navigation-container">
            <div className="navigation-buttons2">
                <ul>
                    {isLoggedIn ? renderMenuItems(menuItems) : renderMenuItems(homeMenuItems)}

                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;