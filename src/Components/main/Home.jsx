import React from "react";
import '../../Styles/main/Home.css';
import main from '../../assets/main-avt.png'

export default function Home() {

    return (
        <>
            <div className="home" id="home">
                <div className="text">
                    <p>Bonjour, je m’appelle Thai Son</p>
                    <span className="top_text">DÉVELOPPEUR</span>
                    <div className="under_text">
                        {("BACK-END").split("").map((ch, i) => (
                            <span key={i} className="lettre">
                                {ch === " " ? "\u00A0" : ch}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="image">
                    <div className="oval"></div>
                    <img src={main} draggable="false" alt="Main" />
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
                    >En savoir plus</button>
                    <button 
                        className="Contactez-moi" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('projets');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >Mes projets</button>
                </div>
            </div>
        </>
    );
}