import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main/Projet.css'
import NavBar from "../Components/navBar";
import CardProjectPerEN from "../Components/card-projectPerEN";


export default function ProjectPersonnel() {

    return (
        <>
            <div className="projet-personnel-page">
                <Link to="/English" className="btn-retour">Back</Link>
                <h1 className="titre-projet">Personal projects</h1>
                <div className="list-projets">
                    <CardProjectPerEN />
                </div>
            </div>
        </>
    );
}