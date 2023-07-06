import React from 'react';
// Interfaces
import { RateProps } from "../interfaces/Rate";
// Styles
import emptyStar from "../assets/emptyStar.svg";
import fullStar from "../assets/star-rate.svg";

const Rate: React.FC<RateProps> = ({ score }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rate-comp">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={fullStar}
                        alt="rating star"
                    />
                ) : (
                    <img
                        key={level.toString()}
                        className="star"
                        src={emptyStar}
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}

export default Rate;