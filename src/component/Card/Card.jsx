import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom'
function Card({data}) {
  return (
    <div className="card">
      <img src={data.img} alt="Card Image" className="card__image" />
      <h3 className="card__title">{data.title}</h3>
      <p className="card__description">{data.description}</p>
      <NavLink to={`/${data.title.toLowerCase()}`} className="card__button">Voir Plus</NavLink>
    </div>
  )
}

export default Card
