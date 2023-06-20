import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

interface Logement {
    id: number;
    cover: string;
    title: string;
}

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
            <div className="">
                {data.map((appart: Logement) => (
                    <Cards cover={appart.cover} title={appart.title} key={appart.id} />
                ))}
            </div>
        </>
    );
}

export default Home;
