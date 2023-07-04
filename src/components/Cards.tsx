import React from "react";
// Interfaces
import { CardProps } from "../interfaces/Card"
// Styles
import styles from "./Cards.module.css";


const Card: React.FC<CardProps> = ({ cover, title }) => {
    return (
        <article className={styles.cardLogement} >
            <img src={cover} alt="location" />
            <div className={styles.cardLogementLayer}>
                <p className={styles.cardLogementTitle}>{title}</p>
            </div>
        </article>
    );
}

export default Card;
