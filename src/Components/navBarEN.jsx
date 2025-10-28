import React from "react";
import { Link } from "react-router-dom";
import BtnLangueEN from "./function-nav/btn-langueEN";
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
                        }}>About</a></li>
                    <li><a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('skills');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Skills</a></li>
                    <li><a href="/Mon-Portfolio/" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            console.log('element about:', el);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Contact</a></li>
                </ul>
                <BtnLangueEN />
            </nav>
        </>
    );
}