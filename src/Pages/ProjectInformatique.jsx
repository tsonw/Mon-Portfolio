import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main/Projet.css'
import NavBar from "../Components/navBar";
import CardProjectPer from "../Components/card-projectPer";
import CardProjectInf from "../Components/card-projectInf";


export default function ProjectInformatique() {

    return (
        <>
            <div className="projet-personnel-page">
                <Link to="/" className="btn-retour">Retour</Link>
                <h1 className="titre-projet">Projets Informatiques</h1>
                <div className="list-projets">
                    <CardProjectInf />
                </div>
            </div>
        </>
    );
}