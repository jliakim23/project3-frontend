// import "./AuthPage.css";
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


const AuthPage = () => {
  const [isSignupVisible, setSignupVisible] = useState(false);
  const toggleSignupForm = () => {
    setSignupVisible(!isSignupVisible);
  };

  return (
    <div>
      <Login />
      <button onClick={toggleSignupForm}>Signup</button>
      {isSignupVisible && <Signup />}
    </div>
  );
}

export default AuthPage
