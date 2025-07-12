import React from "react";
import '../../Styles/main/Home.css';
import mainPNG from '../../assets/main.png'
import gif1 from '../../assets/retina.gif'
import gif2 from '../../assets/encryption.gif'
import gif3 from '../../assets/fingerprint-scan.gif'
import gif4 from '../../assets/cybersecurity.gif'

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
                    <img src={mainPNG} draggable="false" alt="Main" />
                    <div className="gif-1" draggable="false" style={{ backgroundImage: `url(${gif1})`}}></div>
                    <div className="gif-2" draggable="false" style={{ backgroundImage: `url(${gif2})`}}></div>
                    <div className="gif-3" draggable="false" style={{ backgroundImage: `url(${gif3})`}}></div>
                    <div className="gif-4" draggable="false" style={{ backgroundImage: `url(${gif4})`}}></div>
                </div>
                <div className="button-function">
                    <button 
                        className="En-savoir-plus"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('about');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        En savoir plus
                    </button>
                    <button href="#" className="Contactez-moi" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Contactez-moi
                    </button>
                </div>
            </div>
        </>
    );
}