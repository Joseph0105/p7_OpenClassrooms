import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { Logement } from "../interfaces/Logement";

const Home = () => {
    const [data, setData] = useState<Logement[]>([]);

    // utiliser fetch
    useEffect(() => {
        fetch("/logements.json", { method: "GET" }).then(res => res.json()).then((res) => {
            setData(res || []);
        });

    }, []);

    return (
        <>
            <Banner />
            <div className="cardsContainer">
                {data.map((appart, id) => (
                    <div className="cardLogement" key={id}>
                        <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                            <Cards cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
