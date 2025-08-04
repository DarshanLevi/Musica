import React, { useState } from "react";
import "./Navbar.css";
import musicaLogo from "../assets/Musica.svg";
import ClickSpark from "./ClickSpark";
import { FiMenu, FiX } from "react-icons/fi";
import Magnet from "./Magnet";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <ClickSpark
      sparkColor="rgba(229, 150, 40, 0.45)"
      sparkSize={5}
      sparkRadius={15}
      sparkCount={40}
      duration={300}
    >
      <nav className="navbar">
        <div className="nav-wrap">
          <a href="/" className="logo-link">
          <img src={musicaLogo} alt="MUSICA Logo" className="logo-img" />
          <div className="navbar-logo">MUSICA</div>
          </a>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
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
            <Magnet padding={140} disabled={false} magnetStrength={7}>
              <button className="get-app-button">Get App</button>
            </Magnet>
          </li>
        </ul>
      </nav>
    </ClickSpark>
  );
};

export default Navbar;
