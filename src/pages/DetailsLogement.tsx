import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsLogement = () => {
    // Utilisation des paramètres de l'URL pour obtenir l'identifiant du logement
    const { id } = useParams();

    // TODO: Récupérer les détails du logement en utilisant l'ID ici...

    return (
        <div>
            <h1>Détails du logement {id}</h1>
            {/* Affichez ici les détails du logement... */}
        </div>
    );
};

export default DetailsLogement;
