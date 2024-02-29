/*
  Registration Form component
*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'; // Import Axios
function RegisterForm() {
  const [firstname, setFirstname] = useState('');
  const [email, setemail] = useState('');
  const [pswd, setpswd] = useState('');
  const [Cpswd, setCpswd] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
//   const [formData, setFormData] = useState({ //TODO: To be implemented to replace above constants
//   firstname: '',
//   email: '',
//   pswd: '',
//   Cpswd: '',
//   errorMessage: '',
// });
  useEffect(() => {
    document.title = "Register";
  }, [])
const handleSubmit = async (event) => {
  event.preventDefault();
  // Check if passwords match
  if (pswd !== Cpswd) {
    setErrorMessage("Passwords do not match.");
    return; // Stop the function here
  }
  const payload = {
    firstname: firstname,
    email: email,
    pswd: pswd,
  };
  
  try {
    
    const response = await axios.post(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/register`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Uncomment if needed based on your backend setup
       withCredentials: true,
    });
    if (response.status === 201) { // Assuming 201 for successful creation
      setErrorMessage(""); // Clear any existing errors
      // Handle post-registration logic here, e.g., redirect or login
    } else {
      console.error('Failed to register:', response);
      setErrorMessage("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error('Failed to register:', error);
    setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
  }

  };
  const handleAlertButtonClick = () => {
    alert("Complete the cancel options")
  };
  const handlePasswordKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event); // Call the handleSubmit function when Enter is pressed
    }
  };
  return (
    <div className="container"> {/* Add Bootstrap container class */}
      <div className="form-container background-image">

        <form className="form" onSubmit={handleSubmit}>
          <div>

            <h2 className="mb-4">REGISTER</h2>
            <div className="mb-3">
              <label htmlFor="firstname" className="formlabel">Firstname:</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="form-control"
              />
            </div>

          </div>
          <div>
            <label htmlFor="email" className="formlabel">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
            <div>
            <label htmlFor="pswd" className="formlabel">Password:</label>
            <input
              type="password"
              id="pswd"
              value={pswd}
              onChange={(e) => setpswd(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="Cpswd" className="formlabel">Confirm password:</label>
            <input
              type="password"
              id="Cpswd"
              value={Cpswd}
              onChange={(e) => setCpswd(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
          <div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <button type="button" className="btn btn-danger" onClick={handleAlertButtonClick} onTouchStart={handleAlertButtonClick}>
                Cancel
              </button>
            </div>
          </div>
        </form>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
    </div>
  );
}
export default RegisterForm;