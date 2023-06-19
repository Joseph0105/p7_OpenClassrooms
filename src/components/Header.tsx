import React from "react";
import logo from "../assets/LOGO.svg";
import Navigation from "../components/Navigation";

const Header: React.FC = () => {
    return (
        <header className="headerWrap">
            <figure className="headerWrap__fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <Navigation />
        </header>
    );
};

export default Header;
