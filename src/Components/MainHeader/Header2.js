import React from "react";
import "./styles/header2.css";
import Hero from "./hero";
import NavigationBar from "./navigationbar2";
function Header(props) {
    return (
        <div className="header-container">
            <Hero />
            <NavigationBar {...props} />
        </div>
    );
}
export default Header;