import React from 'react'
import './Immobilier.css'
function Immobilier() {
    return (
        <div className='immobilier'>
            <img src="/immeuble.png" alt="Immobilier" className='immobilier__image' />
            <h1 className='immobilier__title'>Immobilier</h1>
            <p className='immobilier__description'>
                SINKO SERVICES vous accompagne dans toutes vos transactions immobilières :<br /><br />

                . Vente et achat de terrains, maisons et appartements.<br />

                . Location de biens résidentiels et commerciaux.<br />

                . Gestion et valorisation de votre patrimoine immobilier.<br />

                . Conseil pour vos projets d’investissement.<br /><br />

                Notre engagement : un service fiable, rapide et transparent, pour vous offrir des solutions sur mesure dans les domaines du nettoyage et de l’immobilier.
            </p>
        </div>
    )
}

export default Immobilier
