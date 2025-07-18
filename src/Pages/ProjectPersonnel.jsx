import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main/Projet.css'
import NavBar from "../Components/navBar";
import CardProjectPer from "../Components/card-projectPer";


export default function ProjectPersonnel() {

    return (
        <>
            <div className="projet-personnel-page">
                <Link to="/" className="btn-retour">Retour</Link>
                <h1 className="titre-projet">Projets Personnels</h1>
                <div className="list-projets">
                    <CardProjectPer />
                </div>
            </div>
        </>
    );
}