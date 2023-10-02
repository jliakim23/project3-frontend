import React from "react";
import { Link } from "react-router-dom";
import { TbLogout2} from "react-icons/tb";
import { LuPalmtree} from "react-icons/lu";
import { AiOutlineHome} from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/Home"><AiOutlineHome  />{" "}Home</Link>
        <Link to="/trips"><LuPalmtree  />{" "}My Trips</Link>
        <Link to="/"><TbLogout2  />{" "}Logout</Link>
      </nav>

    </div>
  );
};

export default Nav;
