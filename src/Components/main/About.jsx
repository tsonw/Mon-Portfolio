import React from "react";
import '../../Styles/main/about.css';
import CardProfile from "../card-profile";
import TimeLineEdu from "../time-line-edu";
import photo from "../../assets/about.png"
import logo from "../../assets/logo.png"

export default function About() {

    return (
        <>
            <div className="about" id="about">
                <div className="text-about">
                    <div className="box-text">
                        <h2 className="titre_1">BONJOUR</h2>
                        <h2 className="titre_2">JE SUIS THAI SON</h2>
                        <p className="sous-titre-about">ÉTUDIANT EN 2E ANNÉE DE BUT INFORMATIQUE (IUT D’ORSAY)<br/>À LA RECHERCHE D’UN STAGE EN DÉVELOPPEUR INFORMATIQUE</p>
                        <p className="contenu">Je suis originaire du Vietnam et passionné par la programmation, avec un intérêt particulier pour la cybersécurité. Curieux, rigoureux et motivé, je me forme en continu aux nouvelles technologies afin de renforcer mes compétences techniques et d’approfondir ma compréhension des systèmes informatiques.<br/>Dans le cadre de mon parcours en informatique, je suis actuellement à la recherche d’un stage en informatique afin de mettre en pratique mes connaissances, contribuer à des projets concrets, collaborer au sein d’une équipe et progresser dans un environnement stimulant. Mon objectif est de continuer à évoluer dans ce domaine exigeant, tout en partageant ma passion et en donnant envie à d’autres de découvrir le plaisir du code.</p>
                        <a className="btn_download_CV" href="/Mon-Portfolio/CV_Stage.pdf" download>
                            <span>Consulter mon CV</span>
                            <svg
                                viewBox="0 0 256 256"
                                height="32"
                                width="38"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
                                fill="currentColor"
                                ></path>
                            </svg></a>
                    </div>
                    <div className="card-profile-box">
                        <img className="logo_about" src={logo} alt="logo" draggable="false" />
                        <img className="photo_about" src={photo} alt="photo" draggable="false" />
                        <div className="pattern_about1"></div>
                        <div className="pattern_about2"></div>
                        <div className="pattern_about3"></div>
                        <div className="pattern_about4"></div>
                        <div className="pattern_about5"></div>
                        <div className="pattern_about6"></div>
                        <div className="pattern_about7"></div>
                        <div className="pattern_about8"></div>
                    </div>
                </div>
            </div>
        </>
    );
}