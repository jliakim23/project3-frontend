import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/Home">Home</Link>
        <Link to="/trips">My Trips</Link>
        <Link to="/">Logout</Link>
      </nav>

    </div>
  );
};

export default Nav;
