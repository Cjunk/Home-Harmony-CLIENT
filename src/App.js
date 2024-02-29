import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import RegisterForm from './PAGES/register.js'
import UserForm from './PAGES/form/form.js'
import YourInventoryHome from './PAGES/yourInventoryHome/YourInventoryHome.js';
import HomePage from './PAGES/home.js'
import Header from './Components/MainHeader/Header2.js';
import AutoLogout from './Components/AutoLogout/autologout.js';
import './App.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentPage, setcurrentPage] = useState(1)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  const handleLogin = () => {
    setLoggedIn(true)
  }
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false)
  }
  return (
    <div className="App">
      <Header isLoggedIn={loggedIn} handleLogout={handleLogout} pageSelector={setcurrentPage } />
      {/* Include AutoLogout component */}
      {loggedIn && <AutoLogout onLogout={handleLogout} />}
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? (<Navigate to="/homepage" replace />) : currentPage === 1 ? (<HomePage />) : currentPage === 2 ? (<UserForm setLogin={handleLogin} formType={1} />) : (<RegisterForm formType={2} />)}>
          </Route>
          <Route path="/homepage" element={!loggedIn ? (<Navigate to="/" replace />) : (<YourInventoryHome handleLogout={handleLogout} pageSelector={setcurrentPage} />)}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;