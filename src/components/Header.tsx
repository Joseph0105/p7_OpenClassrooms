import React from "react";
import logo from "../assets/LOGO.svg";
import Navigation from "../components/Navigation";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.class}>
            <figure className="headerWrap__fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <Navigation />
        </header>
    );
};

export default Header;
