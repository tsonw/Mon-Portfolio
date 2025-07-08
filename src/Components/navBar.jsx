import React from "react";
import { Link } from "react-router-dom";
import BtnLangue from "./function-nav/btn-langue";
import '../Styles/navBar/navBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link className="logo_link" to="/"><img className="logo"  src="/Mon-Portfolio/LogoTS.png" alt="Logo" /></Link>
                <ul className="navbar_links">
                    <li><a href="/Mon-Portfolio/">À propos</a></li>
                    <li><a href="/Mon-Portfolio/">Compétences</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <BtnLangue />
            </nav>
        </>
    );
}