import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate(); 

  const handleFormSubmit = async () => {
    const { name, password } = formData;

    try {
      const response = await fetch("https://tripadvisor-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        if (data.message === "Login successful") {
          navigate("/home");
        }
      } else {
        const errorData = await response.json();
        console.error(`Login failed: ${errorData.message}`);
        setLoginStatus("Login failed");
      }
    } catch (error) {
      console.error("Error: " + error.message);
      setLoginStatus("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <CiMail style={{ margin: "0px 30px" }} />{" "}
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="input" style={{ display: "flex", alignItems: "center" }}>
          <RiLockPasswordLine style={{ margin: "0px 30px" }} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleFormSubmit}>
            Login
          </button>
        </div>
        {loginStatus && <div className="login-status">{loginStatus}</div>}
      </div>
    </div>
  );
};

export default Login;