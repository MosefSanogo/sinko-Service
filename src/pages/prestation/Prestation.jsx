import React from 'react'
import './prestation.css'
function Prestation() {
    return (
        <div className='prestation'>
            <img src="/prestation.png" alt="Prestation" className='prestation__image' />
            <h1 className='prestation__title'>Prestation</h1>
            <p className='prestation__description'>
                <b>1. Nettoyage et entretien</b><br />

                Nettoyage de bureaux, commerces et habitations.<br />

                Entretien après travaux ou après déménagement.<br />

                Lavage de vitres et vitrines.<br />

                Désinfection et traitement des espaces.<br /><br />


                <b>2. Services immobiliers</b><br />

                Vente et achat de terrains, maisons et appartements.<br />

                Location résidentielle et commerciale.<br />

                Gestion locative et suivi de biens.<br />   

                Conseil en investissement immobilier.<br /><br />

                <b>3. Commerce général</b><br />

                Approvisionnement et distribution de produits divers.<br />

                Fourniture de matériel et équipements adaptés à vos besoins.

            </p>
        </div>
    )
}

export default Prestation
