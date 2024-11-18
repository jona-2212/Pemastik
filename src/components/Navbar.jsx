import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo fade-in">
        <span className="k">K</span>ONTENQ
      </div>
      <div className="menu fade-in">
        <Link to="/" className="menu-home">Home</Link>
        <Link to="/topics" className="menu-topics">Topics</Link>
        <Link to="/songs" className="menu-songs">Songs</Link>
        <Link to="/find" className="menu-find">Find</Link>
        <Link to="/profil" className="profile-icon">
          <img src="Orang.png" alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

