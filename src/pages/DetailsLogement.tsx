import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Interfaces
import { Appartment } from "../interfaces/DetailsLogement";
// Components
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Tag from "../components/Tag";
// Styles
import CollapseStyle from "../components/Collapse.module.css";
import HostStyle from "../components/Host.module.css";
import RateStyle from "../components/Rate.module.css";
import TagStyle from "../components/Tag.module.css";






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
    }, []);

    const slidePics = selectedAppart && selectedAppart.pictures;
    const tags = selectedAppart && selectedAppart.tags;
    const equipments = selectedAppart && selectedAppart.equipments;
    const equipmentCollpas = selectedAppart && equipments && equipments.map(function (item, index) {
        return (
            <li key={index} className="equipList">
                {item}
            </li>
        );
    });
    
    return (
        selectedAppart && (
            <div key={params.id} className={HostStyle.ficheContainer}>
                <Carrousel slides={slidePics ? slidePics : []} />
                <section className={HostStyle.hostInfoContainer}>
                    <div className={TagStyle.titleTagsContainer}>
                        <div className={`${HostStyle.titleContainer} ${HostStyle.redFont}`}>
                            <h1>{selectedAppart.title}</h1>
                            <h3>{selectedAppart.location}</h3>
                        </div>
                        <div className={TagStyle.tagsContainer}>
                            {(tags || []).map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className={HostStyle.rateHostContainer}>
                        <div className={HostStyle.hostContainer}>
                            <Host
                                hostName={selectedAppart.host.name}
                                hostPic={selectedAppart.host.picture}
                                id={String(selectedAppart.id)}
                            />
                        </div>
                        <div className={RateStyle.rateContainer}>
                            <Rate score={selectedAppart.rating} />
                        </div>
                    </div>
                </section >
                <div className={CollapseStyle.collapseContainer}>
                    <div className={CollapseStyle.collapseFicheContainer}>
                        <Collapse
                            aboutTitle="Description"
                            aboutText={selectedAppart.description}
                        />
                    </div>

                    <div className={CollapseStyle.collapseFicheContainer}>

                        <Collapse aboutTitle="Équipements" aboutText={equipmentCollpas} />
                    </div>
                </div>
            </div >
        )
    );
}

export default DetailsLogement;
