import React from "react";
import "./Navbar.css";
import {assets} from '../../assets/assets.js'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo"/>
        <img src={assets.profile_image} alt="" className="profile"/>
      </div>
    </div>
  );
};
import "./Navbar.css";
export default Navbar;
