import React from 'react';
import { useState } from "react";
// Interfaces
import { CarrouselProps } from '../interfaces/Carroussel';
// Styles
import left from "../assets/vector-left.svg";
import right from "../assets/vector-right.svg";
import CarrousselStyle from "./Carroussel.module.css";

const Carrousel: React.FC<CarrouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section id={CarrousselStyle.carrouselContainer}>
            {length > 1 && (
                <>
                    <img
                        src={left} 
                        alt="gauche"
                        onClick={prevSlide}
                        className={CarrousselStyle.leftArrow}
                    />

                    <img
                        src={right}
                        alt="droite"
                        onClick={nextSlide}
                        className={CarrousselStyle.rightArrow}
                    />
                </>
            )}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={current === index ? CarrousselStyle.slider + " " + CarrousselStyle.blMsk + " " + CarrousselStyle.whMsk + " " + CarrousselStyle.activeAnim : CarrousselStyle.slider + " " + CarrousselStyle.blMsk + " " + CarrousselStyle.whMsk}


                >
                    {index === current && <img src={slide} alt="appartement à louer" />}
                    {index === current && (
                        <span className={CarrousselStyle.sliderNumber}>
                            {current + 1}/{length}
                        </span>
                    )}
                </div>
            ))
            }
        </section >
    );
}

// Pour la key il faut un id qui ne change pas, si par exemple on ajoute une fonction de modification. 
// Ex : à l'index 3 si on le supprime le 4 prendrais sa place te ça entraine des bugs

export default Carrousel;