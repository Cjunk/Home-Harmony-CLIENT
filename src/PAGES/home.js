/*
    This is the initial non logged in home welcome page
    Jericho Sharman
    2024
*/
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/home.css'
function HomePage() {
    useEffect(() => {
        document.title = "Home";
    }, [])
    return (
        <div className="home-page-container background-image">
   
            {/* {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} */}
            {/* <img src="./home1.jpg" alt="sdf"/> */}
            </div>
    );
}
export default HomePage;