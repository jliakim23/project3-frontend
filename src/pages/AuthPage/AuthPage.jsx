import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './AuthPage.css';

const AuthPage = () => {
  const [isSignupVisible, setSignupVisible] = useState(false);

  const toggleSignupForm = () => {
    setSignupVisible(!isSignupVisible);
  };

  return (     
    <div className>
      <div className>
        <Login />
        {!isSignupVisible && (
          <button onClick={toggleSignupForm}>Register</button>
        )}
      </div>

      {isSignupVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={toggleSignupForm}>
              &times;
            </span>
            <Signup />  
          </div> 
        </div>
      )}
    </div>
  );
}

export default AuthPage;
