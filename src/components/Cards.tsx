import React from "react";
import styles from "./Cards.module.css";

interface CardProps {
    cover: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ cover, title }) => {
    return (
        <article className={styles.bg} >
            <img src={cover} alt="location" />
            <div >
                <p >{title}</p>
            </div>
        </article>
    );
}

export default Card;
