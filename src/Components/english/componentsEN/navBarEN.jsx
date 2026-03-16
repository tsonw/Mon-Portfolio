import React from "react";
import { Link } from "react-router-dom";
import '../../../Styles/navBar/navBar.css';
import '../../../Styles/navBar/btn-langue.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="panel_fonction">
                    <ul className="navbar_fonction">
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('about');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>About</a></li>
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('skills');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>Skills</a></li>
                        <li><a href="/Mon-Portfolio/" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('projets');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>Projects</a></li> 
                    </ul>
                    <div className="button_langue">
                        <ul>
                            <li><Link to="/">FR</Link></li>    
                            <li><Link to="/en">EN</Link></li>      
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}