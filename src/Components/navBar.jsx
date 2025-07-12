import React from "react";
import { Link } from "react-router-dom";
import BtnLangue from "./function-nav/btn-langue";
import '../Styles/navBar/navBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link className="logo_link" to="/"><img className="logo" draggable="false" src="/Mon-Portfolio/LogoTS.png" alt="Logo" /></Link>
                <ul className="navbar_links">
                    <li><a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('about');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>À propos</a></li>
                    <li><a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('skills');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Compétences</a></li>
                    <li><a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Contact</a></li>
                </ul>
                <BtnLangue />
            </nav>
        </>
    );
}