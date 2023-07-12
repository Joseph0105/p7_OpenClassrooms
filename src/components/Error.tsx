import { Link } from "react-router-dom";
import React from "react";
// Style
import ErrorStyle from "./Error.module.css";

const ErrorPage: React.FC = () => {
    return (
        <div className={ErrorStyle.errorContainer}>
            <p className={ErrorStyle.errorNumber}>404</p>
            <p className={ErrorStyle.errorText}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={ErrorStyle.errorLinkHome}>
                Retourner sur la page d’accueil
            </Link>
        </div >
    );
}

export default ErrorPage;
