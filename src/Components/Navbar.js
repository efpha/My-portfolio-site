import React from "react";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareThreads } from "@fortawesome/free-brands-svg-icons";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <a href='#' className="logo-content">KEFFA.</a>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-bars" />            
            <ul>
                <li><a href='#' className="links-content">About</a></li>
                <li><a href='#' className="links-content">Experience</a></li>
                <li><a href='#' className="links-content">Projects</a></li>
                <li><a href='#' className="links-content">Contact</a></li>
            </ul>
        </div>
    )
}
export default Navbar;
