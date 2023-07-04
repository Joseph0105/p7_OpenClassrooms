import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Interfaces
import { Logement } from "../interfaces/Logement";
// Components
import Banner from "../components/Banner";
import Cards from "../components/Cards";
// Styles
import CardStyles from "../components/Cards.module.css";
import BannerStyle from "../components/Banner.module.css";



const Home = () => {
    const [data, setData] = useState<Logement[]>([]);

    useEffect(() => {
        fetch("/logements.json", { method: "GET" }).then(res => res.json()).then((res) => {
            setData(res || []);
        });

    }, []);

    return (
        <>
            <Banner />
            <div className={CardStyles.cardsContainer}>
                {data.map((appart, id) => (
                    <div className={CardStyles.cardLogement} key={id}>
                        <Link className={CardStyles.linkCardLogement} to={`/logement/${appart.id}`}>
                            <Cards cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
