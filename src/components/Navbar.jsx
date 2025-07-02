import React from "react";
import "./Navbar.css";
import musicaLogo from "../assets/Musica.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <img src={musicaLogo} alt="MUSICA Logo" className="logo-img" />
        <div className="navbar-logo">MUSICA</div>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#browse">Browse events</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
        <li>
          <a href="#login">Log In</a>
        </li>
        <li>
          <button className="get-app-button">Get App</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
