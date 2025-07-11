import React from "react";
import '../../Styles/main/about.css';
import CardProfile from "../card-profile";
import TimeLineEdu from "../time-line-edu";

export default function AboutEN() {

    return (
        <>
            <div className="about" id="about">
                <div className="text-about">
                    <div className="box-text">
                        <h2 className="titre">À propos</h2>
                        <p className="sous-titre">Étudiant en 2ᵉ année de BUT Informatique à l'IUT d'Orsay</p>
                        <p className="contenu">Je suis originaire du Vietnam et passionné par la programmation, en particulier la cybersécurité. Curieux et motivé, j’explore en permanence de nouvelles technologies afin de renforcer mes compétences techniques et mieux comprendre les systèmes informatiques.<br/><br/>Mon objectif est non seulement de progresser dans ce domaine exigeant, mais aussi d’inspirer les autres à découvrir le plaisir du code. Je suis à la recherche d’opportunités pour appliquer mes connaissances, collaborer sur des projets concrets et évoluer dans un environnement stimulant.</p>
                    </div>
                    <div className="card-profile-box">
                        <CardProfile />
                    </div>
                </div>
                <div className="button-projet">
                    <button className="pjt-per" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Me contactez
                    </button>
                    <button className="pjt-rea" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('skills');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Compétences
                    </button>
                </div>
                <div className="box-text">
                    <h2 className="titre-formation">Formation</h2>
                </div>
                <div className="formation">
                    <div className="education">
                        <div className="timeline">
                            <TimeLineEdu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}