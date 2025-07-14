import React from "react";
import "./Navbar.css";
import musicaLogo from "../assets/Musica.svg";
import ClickSpark from "./ClickSpark";

const Navbar = () => {
  return (
        <ClickSpark
      sparkColor="rgb(229, 151, 40)"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={300}
    >
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
    </ClickSpark>
  );
};

export default Navbar;
