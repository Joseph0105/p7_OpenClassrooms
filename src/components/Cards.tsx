import React from "react";

interface CardProps {
    cover: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ cover, title }) => {
    return (
        <article className="relative flex w-80 h-64 md:w-84 md:h-84 rounded transition-transform duration-1000 hover:shadow">
            <img className="absolute w-full h-full object-cover rounded" src={cover} alt="location" />
            <div className="absolute w-full h-full bg-gradient-to-t from-black rounded flex items-center">
                <p className="absolute w-11/12 mx-auto my-0 bottom-4 md:text-lg font-medium text-white">{title}</p>
            </div>
        </article>
    );
}

export default Card;
