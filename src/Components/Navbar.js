import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar navbar-expand-lg">
      <div className="logo">
        <ScrollLink
          to="home"
          smooth={true}
          duration={0}
          className="logo-content"
          onClick={toggleMenu}
        >
          KEFFA
        </ScrollLink>
      </div>
      <FontAwesomeIcon className="menu-icon" onClick={toggleMenu} icon={faBars} />
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={0}
            className="links-content"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="aboutme"
            smooth={true}
            duration={0}
            className="links-content"
            onClick={toggleMenu}
          >
            About Me
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={0}
            className="links-content"
            onClick={toggleMenu}
          >
            Technical Skills
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
