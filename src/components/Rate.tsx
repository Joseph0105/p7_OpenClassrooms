import React from 'react';
// Interfaces
import { RateProps } from "../interfaces/Rate";
// Styles
import emptyStar from "../assets/emptyStar.svg";
import fullStar from "../assets/star-rate.svg";
import RateStyle from "../components/Rate.module.css";


const Rate: React.FC<RateProps> = ({ score }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className={RateStyle.rateComp}>
            {stars.map((level) =>
                <img
                    key={level.toString()}
                    className={RateStyle.star}
                    src={score >= level ? fullStar : emptyStar}
                    alt="rating star"
                />
            )}
        </div>
    );
}

export default Rate;