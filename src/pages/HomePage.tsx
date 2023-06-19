import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import axios from "axios";
import 'tailwindcss/tailwind.css';

interface Logement {
    id: number;
    cover: string;
    title: string;
}

const Home: React.FC = () => {
    const [data, setData] = useState<Logement[]>([]);

    useEffect(() => {
        axios.get("/logements.json").then((res) => setData(res.data));
    }, []);

    return (
        <>
            <Banner />
            <div className="flex justify-center w-full gap-5 md:gap-12 py-6 md:py-8 md:bg-gray-100 rounded-md flex-wrap mx-2 md:mx-8">
                {data.map((appart: Logement, id: number) => (
                    <Cards cover={appart.cover} title={appart.title} key={id} />
                ))}
            </div>
        </>
    );
}

export default Home;
