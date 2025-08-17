import React from 'react'
import './Immobilier.css'
function Immobilier() {
    return (
        <div className='immobilier'>
            <img src={`${import.meta.env.BASE_URL}/immeuble.png`} alt="Immobilier" className='immobilier__image' />
            <h1 className='immobilier__title'>Immobilier</h1>
            <div className='immobilier__description'>
                <p>SINKO SERVICES vous accompagne dans toutes vos transactions immobilières :</p>

                <ul>
                    <li>Vente et achat de terrains, maisons et appartements.</li>
                    <li>Location de biens résidentiels et commerciaux.</li>
                    <li>Gestion et valorisation de votre patrimoine immobilier.</li>
                    <li>Conseil pour vos projets d’investissement.</li>
                </ul>

                <p>Notre engagement : un service fiable, rapide et transparent, pour vous offrir des solutions sur mesure dans les domaines du nettoyage et de l’immobilier.</p>
            </div>
        </div>
    )
}

export default Immobilier
