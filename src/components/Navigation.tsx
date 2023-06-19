import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-header_link-home">
                Accueil
            </Link>
            <Link to="/about" className="nav-header_link-about">
                A Propos
            </Link>
        </nav>
    );
};

export default Nav;
