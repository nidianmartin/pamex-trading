import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiTreehouse } from "react-icons/si";
import { Button } from "antd";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <SiTreehouse className="navbar-icon" />
          PAMEX
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/market">
              Market
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/how-it-work">
              How it works
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/sing-up" className="btn-link">
                Sign Up
            </Link>
          </li>
          <li className="nav-btn">
            <Link to="/sing-up" className="btn-link">
              <Button className="btn-navbar" type="primary" shape="round">
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
