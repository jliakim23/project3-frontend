import React from "react";
import "./LoginSignup.css";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async () => {
    if (action === "Login" || action === "Sign Up") {
      const endpoint = action === "Login" ? "/login" : "/signup"; 
  
      const response = await fetch('https://tripadvisor-backend.onrender.com', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error(` failed`);
      }
    } else {
      console.error("Invalid action");
    }
  };
  // const handleFormSubmit = async () => {
  //   if (action === "Login") {
  //     // Make a POST request to /login
  //     const response = await fetch(
  //       "https://tripadvisor-backend.onrender.com/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: formData.email,
  //           password: formData.password,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.message);
  //     } else {
  //       console.error("Login failed");
  //     }
  //   } else if (action === "Sign Up") {
  //     const response = await fetch(
  //       "https://tripadvisor-backend.onrender.com/signup",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: formData.name,
  //           email: formData.email,
  //           password: formData.password,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.message);
  //     } else {
  //       console.error("Signup failed");
  //     }
  //   }
  // };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <BiUser style={{ margin: "0px 30px" }} />{" "}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        )}
        <div className="input">
          <CiMail style={{ margin: "0px 30px" }} />{" "}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div
          className="input"
          style={{ display: "flex", alignItems: "center" }}
        >
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
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              console.log("Sign Up clicked");
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
