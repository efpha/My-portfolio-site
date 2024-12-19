import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    return(
        <div className="navbar navbar-expand-lg">
            <div className="logo">
                <a href='#' className="logo-content">KEFFA</a>
            </div>
            <FontAwesomeIcon className="menu-icon" onClick={toggleMenu} icon={faBars} />            
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href='#' className="links-content">About</a></li>
                <li><a href='#' className="links-content">Technical skills</a></li>
                <li><a href='#' className="links-content">Projects</a></li>
                <li><a href='#' className="links-content">Contact</a></li>
            </ul>
        </div>
    )
}
export default Navbar;
