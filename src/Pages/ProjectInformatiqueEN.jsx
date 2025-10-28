import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main/Projet.css'
import NavBar from "../Components/navBar";
import CardProjectPer from "../Components/card-projectPer";
import CardProjectInfEN from "../Components/card-projectInfEN";


export default function ProjectInformatiqueEN() {

    return (
        <>
            <div className="projet-personnel-page">
                <Link to="/English" className="btn-retour">Back</Link>
                <h1 className="titre-projet">Academic projects</h1>
                <div className="list-projets">
                    <CardProjectInfEN />
                </div>
            </div>
        </>
    );
}