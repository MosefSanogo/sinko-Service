import React from 'react'
import './Acceuil.css'
import Card from '../../component/Card/Card'
function Acceuil() {
  return (
    <div>
      <div className="cards">
        <Card data={{img:'/immeuble.png', title: 'Immobilier', description: 'SINKO SERVICES vous accompagne dans toutes vos transactions immobilières.'}}/>
        <Card data={{img:'/cleaning.jpg', title: 'Nettoyage', description: 'Nous offrons des services de nettoyage complets et soignés pour vos maisons, bureaux, commerces et sites industriels.'}}/>
        <Card data={{img:'/prestation.png', title: 'Prestation', description: 'Nous proposons une large gamme de prestations pour répondre à tous vos besoins.'}}/>
      </div>
    </div>
  )
}

export default Acceuil
