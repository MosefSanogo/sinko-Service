import React from 'react'
import './Nettoyage.css'
function Nettoyage() {
    return (
        <div className='nettoyage'>
            <img src={`${import.meta.env.BASE_URL}/cleaning.jpg`} alt="Nettoyage" className='nettoyage__image' />
            <h1 className='nettoyage__title'>Nettoyage</h1>
            <p className='nettoyage__description'>
                Nous offrons des services de nettoyage complets et soignés pour vos maisons, bureaux, commerces et sites industriels.
                Notre mission : garantir des espaces propres, sains et agréables grâce à des méthodes efficaces, des produits adaptés et une équipe qualifiée.
                Avec SINKO SERVICES, profitez d’un environnement impeccable qui inspire confiance et bien-être.
            </p>
        </div>
    )
}

export default Nettoyage
