import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout2} from "react-icons/tb";
import { LuPalmtree} from "react-icons/lu";
import { AiOutlineHome} from "react-icons/ai";

const Nav = () => {
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  }

  return (
    <div>
      <nav className="nav">
        <Link to="/Home"><AiOutlineHome  />{" "}Home</Link>
        <Link to="/trips"><LuPalmtree  />{" "}My Trips</Link>
        <span onClick= {handleLogout}><TbLogout2  />{" "}Logout</span>
      </nav>

    </div>
  );
};

export default Nav;
