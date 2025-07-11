import React from "react";
import '../Styles/main/ProjetPersonnel.css'
import NavBar from "../Components/navBar";
import CardProjectPer from "../Components/card-projectPer";


export default function ProjectPersonnel() {

    return (
        <>
            <NavBar />
            <div className="list-projets">
                <CardProjectPer />
            </div>
        </>
    );

}