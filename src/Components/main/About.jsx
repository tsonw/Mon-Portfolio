import React from "react";
import '../../Styles/main/about.css';
import CardProfile from "../card-profile";
import TimeLineEdu from "../time-line-edu";
import photo from "../../assets/about-brg.png"
import logo from "../../assets/logo.png"

export default function About() {

    return (
        <>
            <div className="about" id="about">
                <h1 className="about_titre">À propos.</h1>
                <div className="about_content">
                    <div className="about_content_text">
                        <div className="about_content_text_photo_box">
                            <img src={photo} alt="photo" className="about_content_text_photo_img" draggable="false" />
                            <div className="about_content_text_photo_box_shadow"></div>
                        </div>
                        <p className="about_content_text_content"><strong>Étudiant en 2e année de BUT Informatique (IUT d’Orsay),</strong> <br/>
                        <strong>je recherche un stage en développement informatique.</strong> <br/> Originaire du Vietnam, je suis passionné par la cybersécurité : j’aime comprendre comment les systèmes fonctionnent, où ils peuvent être vulnérables et comment les rendre plus sûrs. À long terme, je souhaite évoluer vers un poste backend, en construisant des services fiables, performants et sécurisés. Ce stage est pour moi l’opportunité de mettre en pratique, apprendre au contact d’une équipe, et renforcer mes compétences à travers des projets concrets.</p>
                    </div>
                </div>
            </div>
        </>
    );
}