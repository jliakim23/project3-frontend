import React, { useState } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { BiUser } from "react-icons/bi";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signupStatus, setSignupStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 


    const response = await fetch('https://tripadvisor-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    if (response.ok) {
      setSignupStatus('Now Login!');
    } else {
      setSignupStatus('Signup failed');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        {signupStatus && <p>{signupStatus}</p>}
        <div className="inputs">
          <div className="input">
          <BiUser style={{ margin: "0px 30px" }} />{" "}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
          <CiMail style={{ margin: "0px 30px" }} />{" "}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
          <RiLockPasswordLine style={{ margin: "0px 30px" }} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;