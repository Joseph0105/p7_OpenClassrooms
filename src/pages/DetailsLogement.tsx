import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Interfaces
import { HostInterface, Appartment } from "../interfaces/DetailsLogement";
// Components
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Tag from "../components/Tag";


const DetailsLogement = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [selectedAppart, setSelectedAppart] = useState<Appartment | null>(null);

    useEffect(() => {
        const getData = () => {
            fetch("/logements.json", { method: "GET" })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("HTTP error " + res.status);
                    }
                    return res.json();
                })
                .then(data => {
                    const selected = (data as Appartment[]).find(({ id }) => id === params.id);
                    setSelectedAppart(selected || null);
                    if (selected === undefined) {
                        navigate("/404", { state: { message: "Can't get data" } });
                    }
                })
                .catch(function () {
                    navigate("/404", { state: { message: "Can't get data" } });
                });
        };
        getData();
    }, []); // array vide du useEffect pour ne lancer qu'une seule fois

    const slidePics = selectedAppart && selectedAppart.pictures;
    const tags = selectedAppart && selectedAppart.tags;
    const equipments = selectedAppart && selectedAppart.equipments;
    const equip = selectedAppart && equipments && equipments.map(function (item, index) {
        return (
            <li key={index} className="equipList">
                {item}
            </li>
        );
    });

    return (
        selectedAppart && (
            <div key={params.id} className="fiche-container">
                <Carrousel slides={slidePics ? slidePics : []} />
                <section className="hostInfo-container">
                    <div className="title-tags-container">
                        <div className="title-container redFont">
                            <h1>{selectedAppart.title}</h1>
                            <h3>{selectedAppart.location}</h3>
                        </div>
                        <div className="tags-container">
                            {tags || [].map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rate-host-container">
                        <div className="host-container redFont">
                            <Host
                                hostName={selectedAppart.host.name}
                                hostPic={selectedAppart.host.picture}
                                id={String(selectedAppart.id)}
                            />
                        </div>
                        <div className="rate-container">
                            <Rate score={selectedAppart.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-fiche-container">
                    <Collapse
                        aboutTitle="Description"
                        aboutText={selectedAppart.description}
                    />
                    <Collapse aboutTitle="Équipements" aboutText={equip} />
                </div>
            </div>
        )
    );
}

export default DetailsLogement;
