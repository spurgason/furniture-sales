import React from "react";
import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

function Nav(props) {
    function showNavigation() {
        // Set up auth to if else to conditionally render

        //   return (
        //     <ul>
        //       <li>
        //         <Link to="/profile">Profile</Link>
        //       </li>
        //       <li>
        //         <Link to="/signOut">Sign Out</Link>
        //       </li>
        //     </ul>
        //   );

        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">
                    <Link to="/">Furniture Restore</Link>
                </h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                >
                    {showNavigation()}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
