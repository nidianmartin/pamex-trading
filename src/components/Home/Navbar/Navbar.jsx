import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiTreehouse } from "react-icons/si";
import { useAuthContext } from "../../../contexts/AuthContext"

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const authContext = useAuthContext();

  if (authContext.user) {
     return null;
  }


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
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/market">
              Mercado
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/exchanges">
              Exchanges
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/how-it-work">
              Cómo funciona
            </Link>
          </li>
          <li className="nav-btn">
            <Link to="/login" className="btn-default">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
