import React from "react";
import '../Styles/Home/Home.css';
import mainPNG from '../assets/main.png'
import gif1 from '../assets/retina.gif'
import gif2 from '../assets/encryption.gif'
import gif3 from '../assets/fingerprint-scan.gif'
import gif4 from '../assets/cybersecurity.gif'

export default function Home() {

    return (
        <>
            <div className="home" id="Home">
                <div className="text">
                    <p>Bonjour à tous !</p>
                    <h1>Ingénieur<br/>En Cybersécurité</h1>
                </div>
                <div className="image">
                    <div className="oval"></div>
                    <img src={mainPNG} alt="Main" />
                    <div className="gif-1" style={{ backgroundImage: `url(${gif1})`}}></div>
                    <div className="gif-2" style={{ backgroundImage: `url(${gif2})`}}></div>
                    <div className="gif-3" style={{ backgroundImage: `url(${gif3})`}}></div>
                    <div className="gif-4" style={{ backgroundImage: `url(${gif4})`}}></div>
                </div>
                <div className="button-function">
                    <a href="#" className="En-savoir-plus">En savoir plus</a>
                    <a href="#" className="Contactez-moi">Contactez-moi</a>
                </div>
            </div>
        </>
    );
}