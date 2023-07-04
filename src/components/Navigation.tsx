import React from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "./Navigation.module.css";

const Nav: React.FC = () => {
    return (
        <nav className="navHeader">
            <Link to="/" className={HeaderStyles.navHeaderLinkHome}>
                Accueil
            </Link>
            <Link to="/about" className={HeaderStyles.navHeaderLinkAbout}>
                A Propos
            </Link>
        </nav>
    );
};

export default Nav;
