import React from "react";
// Styles
import logo from "../assets/logo-footer.svg";
import FooterStyles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={FooterStyles.footContainer}>
            <img src={logo} alt="logo de kasa" />
            <p className={FooterStyles.footContainerText}>© 2023 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
