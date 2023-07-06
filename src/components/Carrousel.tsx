import React from 'react';
import { useState } from "react";
// Interfaces
import { CarrouselProps } from '../interfaces/Carroussel';
// Styles
import left from "../assets/vector-left.svg";
import right from "../assets/vector-right.svg";
import CarrousselStyle from "./Carroussel.module.css";

const Carrousel: React.FC<CarrouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0); //je définis l'index du premier slide à 0
    const length = slides.length; // longueur du tableau de slides

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
    };

    return (
        <section id={CarrousselStyle.carrouselContainer}>
            {length > 1 && (
                <img
                    src={left} //Affichage des flèches seulement si length > 1
                    alt="gauche"
                    onClick={prevSlide}
                    className={CarrousselStyle.leftArrow}
                />
            )}
            {length > 1 && (
                <img
                    src={right}
                    alt="droite"
                    onClick={nextSlide}
                    className={CarrousselStyle.rightArrow}
                />
            )}
            {slides.map((slide, index) => (
                <div
                    key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
                    className={CarrousselStyle.slider + " " + CarrousselStyle.blMsk + " " + CarrousselStyle.whMsk + (current === index ? " " + CarrousselStyle.activeAnim : "")}

                >
                    {index === current && <img src={slide} alt="appartement à louer" />}
                    {index === current && (
                        <span className={CarrousselStyle.sliderNumber}>
                            {current + 1}/{length}
                        </span>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Carrousel;