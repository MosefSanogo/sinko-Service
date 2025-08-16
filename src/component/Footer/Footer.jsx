import React from 'react'
import './footer.css'
import {  FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
function Footer() {
    return (
        <div className="footer">
            <div className="items">
                <div className="item">
                    <h3>Adresse</h3>
                    <p><FaMapMarkedAlt /> Près du lycée Tigana, Kalaban Coro, Cercle de Kati, Commune de Kalabancoro</p>
                </div>
                <div className="item">
                    <h3>Contact</h3>
                    <p><FaPhoneAlt/> Téléphone : +223 75 01 37 75</p>
                    <p><FaEnvelope /> Email : alydjire1992@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
