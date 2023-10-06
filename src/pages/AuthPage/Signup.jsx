import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { RiLockPasswordLine } from 'react-icons/ri';
import { CiMail } from 'react-icons/ci';
import { BiUser } from 'react-icons/bi';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signupStatus, setSignupStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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
        <div className="underline"></div>
      </div>
      <Form onSubmit={handleFormSubmit}>
        <div className="inputs">
          <div className="input">
          <Form.Group className="input" style={{ display: "flex", alignItems: "center" }}>
            <BiUser style={{ margin: '0px 30px' }} />{' '}
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              
            />
            </Form.Group>
          </div>
          <div className="input">
          <Form.Group className="input" style={{ display: "flex", alignItems: "center" }}>
            <CiMail style={{ margin: '0px 30px' }} />{' '}
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            </Form.Group>
          </div>
          <div className="input">
          <Form.Group className="input" style={{ display: "flex", alignItems: "center" }}>
            <RiLockPasswordLine style={{ margin: '0px 30px' }} />
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            </Form.Group>
          </div>
          <div className="submit-container">
            <Button className='custom-button' type="submit">
              Sign Up
            </Button>
          </div>
          {signupStatus && (
            <Alert variant="success">
              {signupStatus}
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

export default Signup;
