import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    const closeNavbar = () => {
        const navMenu = document.getElementById("navMenu");
        if (navMenu && navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
                    <span>&lt;/&gt;</span> Harshad Shinde
                </NavLink>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav mx-auto gap-1">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills" onClick={closeNavbar}>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects" onClick={closeNavbar}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experience" onClick={closeNavbar}>
                                Experience
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">

                        <a href="/Harshad_Shinde_9322916716.pdf"
                            className="btn-cv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-download me-1"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;