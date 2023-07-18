import React from "react";
// Components
import Navigation from "../components/Navigation";
// Styles
import HeaderStyles from "./Header.module.css";
import logo from "../assets/LOGO.svg";


const Header = () => {
    return (
        <header className={HeaderStyles.headerWrap}>
            <figure className={HeaderStyles.headerWrapFig}>
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <Navigation />
        </header>
    );
};

export default Header;
