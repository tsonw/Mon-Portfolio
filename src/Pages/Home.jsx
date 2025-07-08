import React from "react";
import '../Styles/Home/Home.css';
import NavBar from '../Components/navBar'

export default function Home() {

    return (
        <>
            <NavBar />
            <div className="home">
                <div className="text">
                    <p>Bonjour à tous !</p>
                    <h1>Ingénieur<br/>En Cybersécurité</h1>
                </div>
                <div className="image">
                    <div className="oval"></div>
                    <img src="src/assets/main.png" alt="Main" />
                    <div className="gif-1"></div>
                    <div className="gif-2"></div>
                    <div className="gif-3"></div>
                    <div className="gif-4"></div>
                </div>
            </div>
        </>
    );
}