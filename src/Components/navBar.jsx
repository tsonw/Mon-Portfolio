import React from "react";
import BtnLangue from "./function-nav/btn-langue";
import '../Styles/navBar/navBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <img className="logo"  src="../public/LogoTS.png" alt="Logo" />
                <ul className="navbar_links">
                    <li><a href="/">À propos</a></li>
                    <li><a href="/">Compétences</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <BtnLangue />
            </nav>
        </>
    );
}