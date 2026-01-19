import React from "react";
import { Link } from "react-router-dom";
import '../Styles/navBar/navBar.css';

export default function NavBar() {



    return (
        <>
            <nav className="navbar">
                <a className="logo_link" href="/Mon-Portfolio/" onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('home');
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}><img className="logo" draggable="false" src="/Mon-Portfolio/LogoTS.png" alt="Logo" /></a>
                <div className="panel_fonction">
                    <ul className="navbar_fonction">
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('about');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>À propos</a></li>
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('skills');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>Compétences</a></li>
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('projets');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>Projets</a></li> 
                    </ul>
                    <div className="button_langue">
                        <ul>
                            <li><Link to="/">FR</Link></li>    
                            <li><Link to="/english">EN</Link></li>    
                            <li><Link to="/vietnam">VI</Link></li>    
                        </ul>
                    </div>
                    <div className="btn_contact">
                        <a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Contactez-moi</a>
                    </div>
                </div>
            </nav>
        </>
    );
}