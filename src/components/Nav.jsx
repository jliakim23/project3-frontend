import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Trip">My Trip</Link>
        <Link to="/">Logout</Link>
      </nav>
    </div>
  );
};

export default Nav;
