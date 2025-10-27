import React, { useState, useRef } from "react";

import '../Styles/card-skill/card-skill.css';

import imgProjet11 from '../assets/projet/informatique/base-donnees/1.png';
import imgProjet12 from '../assets/projet/informatique/base-donnees/2.png';
import iconOracle from '../assets/icon/skill/oracle.png';
import iconSQLite from '../assets/icon/skill/SQLite.png';

import imgProjet21 from '../assets/projet/informatique/game2d/1.png';
import imgProjet22 from '../assets/projet/informatique/game2d/2.png';
import iconCpp from '../assets/icon/skill/c++.png';

import imgProjet31 from '../assets/projet/informatique/web-booking/1.png';
import imgProjet32 from '../assets/projet/informatique/web-booking/2.png';
import iconHTML from '../assets/icon/skill/html-5.png';
import iconCSS from '../assets/icon/skill/css-3.png';

import imgProjet41 from '../assets/projet/informatique/appJava/1.png';
import imgProjet42 from '../assets/projet/informatique/appJava/2.png';
import imgProjet43 from '../assets/projet/informatique/appJava/3.png';
import imgProjet44 from '../assets/projet/informatique/appJava/4.png';
import imgProjet45 from '../assets/projet/informatique/appJava/5.png';
import imgProjet46 from '../assets/projet/informatique/appJava/6.png';
import imgProjet47 from '../assets/projet/informatique/appJava/7.jpg';
import iconGit from '../assets/icon/skill/git.png';
import iconGitlab from '../assets/icon/gitlab.png';
import iconJava from '../assets/icon/skill/java.png';
import iconFigma from '../assets/icon/skill/figma.png';

import imgProjet51 from '../assets/projet/informatique/data/1.png';
import imgProjet52 from '../assets/projet/informatique/data/2.png';
import imgProjet55 from '../assets/projet/informatique/data/5.png';
import imgProjet56 from '../assets/projet/informatique/data/6.png';
import imgProjet57 from '../assets/projet/informatique/data/7.png';
import iconPython from '../assets/icon/skill/python.png';

import arrow from '../assets/icon/arrow.png';

const listProjets = [
    { 
        id: 1,
        date: "2024 - 2025",
        name: "Création d'une base de données et requêtes pour un système bancaire",
        descript: "Ce projet consiste à concevoir et créer une base de données complète pour un système bancaire, incluant des tables pour les clients, les comptes, les transactions, les employés et les agences. Des requêtes SQL seront utilisées pour gérer et exploiter les données, telles que la consultation de soldes ou la génération de statistiques sur les opérations. Des données simulées seront ajoutées afin d'assurer le bon fonctionnement de toutes les fonctionnalités essentielles d'une banque moderne.",
        langue: [
            { icon: iconOracle, nameLangue: "Oracle"},
            { icon: iconSQLite, nameLangue: "SQLite"}
        ],
        image: [
            { icon: imgProjet11, nameLangue: "img1"},
            { icon: imgProjet12, nameLangue: "img2"}
        ]
    },
    { 
        id: 2,
        date: "2024 - 2025",
        name: "Développement de la logique d’un jeu 2D en C++",
        descript: "Ce projet vise à développer la logique d’un jeu 2D en utilisant le langage C++. Il inclut la gestion des entités du jeu, les interactions entre les objets, les mouvements, les collisions, ainsi que la boucle principale du jeu. L’objectif est de créer une base solide pour un jeu interactif, fluide et optimisé, en mettant l’accent sur la structure du code et la réutilisabilité des composants.",
        langue: [
            { icon: iconCpp, nameLangue: "C++"}
        ],
        image: [
            { icon: imgProjet21, nameLangue: "img1"},
            { icon: imgProjet22, nameLangue: "img2"}
        ]
    },
    { 
        id: 3,
        date: "2024 - 2025",
        name: "Création d’un site web pour un complexe de loisirs",
        descript: "Ce projet a pour objectif de créer un site web statique et attrayant pour un complexe de loisirs, en utilisant uniquement HTML et CSS. Le site présentera les différentes activités proposées telles que les jeux, le cinéma, la restauration ou les événements. Il comprendra plusieurs sections : page d’accueil, présentation des services, galerie d’images, horaires d’ouverture et page de contact. Le design mettra l’accent sur l’ergonomie, l’esthétique et l’adaptabilité sur différents types d’écrans (responsive design), en exploitant au mieux les possibilités offertes par HTML et CSS.",
        langue: [
            { icon: iconHTML, nameLangue: "HTML"},
            { icon: iconCSS, nameLangue: "CSS"}
        ],
        image: [
            { icon: imgProjet32, nameLangue: "img1"},
            { icon: imgProjet31, nameLangue: "img2"}
        ]
    },
    { 
        id: 4,
        date: "2024 - 2025",
        name: "Projet Java : Développement d’une application de gestion des étudiants en colocation (Java Swing – équipe de 4 personnes)",
        descript: "Ce projet, mené entre 2024 et 2025 par une équipe de quatre développeurs, vise à créer une application de gestion destinée aux étudiants vivant en résidence ou en colocation, en utilisant Java pour la logique de programmation et Swing pour l’interface graphique. L’application permet de gérer les profils des étudiants, l’attribution des chambres, le suivi des paiements, la gestion des demandes de maintenance, ainsi que la communication entre les résidents et l’administration.Plutôt que d’utiliser une base de données, toutes les données sont conservées en mémoire à l’aide de structures telles que des listes ou des tableaux. L’interface a été pensée pour être simple, claire et intuitive, afin de faciliter la gestion quotidienne d’une résidence étudiante sans recourir à une solution de base de données complexe.",
        langue: [
            { icon: iconGit, nameLangue: "Git"},
            { icon: iconGitlab, nameLangue: "Gitlab"},
            { icon: iconJava, nameLangue: "Java"},
            { icon: iconFigma, nameLangue: "Figma"}
        ],
        image: [
            { icon: imgProjet41, nameLangue: "img"},
            { icon: imgProjet42, nameLangue: "img"},
            { icon: imgProjet43, nameLangue: "img"},
            { icon: imgProjet44, nameLangue: "img"},
            { icon: imgProjet45, nameLangue: "img"},
            { icon: imgProjet46, nameLangue: "img"},
            { icon: imgProjet47, nameLangue: "img"}
        ]
    },
    { 
        id: 5,
        date: "2024 - 2025",
        name: "Projet d’analyse de données : Écriture de requêtes et analyse sur une plateforme de jeu",
        descript: "Ce projet a consisté à écrire des requêtes SQL complexes pour analyser les données d’une plateforme de jeu fournie. J’ai développé des fonctions et des procédures afin de simplifier la manipulation et la lecture des tables de données.L’analyse a été approfondie grâce à l’utilisation de Python et Jupyter Notebook pour la visualisation des résultats à travers des graphiques clairs (histogrammes, courbes, boxplots, etc.). J’ai extrait les informations clés de la base de données de la plateforme de jeu, puis effectué des comparaisons basées sur des indicateurs statistiques tels que la moyenne, la médiane, l’écart-type… L’ensemble du travail a été présenté sous forme de rapport d’analyse détaillé, incluant des visualisations pertinentes et des explications claires des tendances observées, dans le but d’identifier des insights concrets à partir des données du jeu.",
        langue: [
            { icon: iconOracle, nameLangue: "Oracle"},
            { icon: iconPython, nameLangue: "Python"}
        ],
        image: [
            { icon: imgProjet51, nameLangue: "img"},
            { icon: imgProjet52, nameLangue: "img"},
            { icon: imgProjet55, nameLangue: "img"},
            { icon: imgProjet56, nameLangue: "img"},
            { icon: imgProjet57, nameLangue: "img"}
        ]
    }
];

export default function CardProjectInf() {

    // State chứa index ảnh hiện tại của từng project
    const [currentImgIndexes, setCurrentImgIndexes] = useState(
        Array(listProjets.length).fill(0) // mỗi project bắt đầu ở ảnh đầu tiên
    );

    // Hàm chuyển ảnh tới
    const nextImage = (projectIndex) => {
        setCurrentImgIndexes((prev) => {
            const newIndexes = [...prev];
            const images = listProjets[projectIndex].image;
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % images.length;
            return newIndexes;
        });
    };

    // Hàm chuyển ảnh lùi
    const prevImage = (projectIndex) => {
        setCurrentImgIndexes((prev) => {
            const newIndexes = [...prev];
            const images = listProjets[projectIndex].image;
            newIndexes[projectIndex] =
                (newIndexes[projectIndex] - 1 + images.length) % images.length;
            return newIndexes;
        });
    };

    return (
        <>
            {listProjets.map((item, i) => {
                const currentImg = item.image[currentImgIndexes[i]].icon;
                return (
                    <div className="projet-box" key={item.id}>
                        <div className="image-box-projet">
                            <div className="image-box-content">    
                                <img
                                    src={currentImg}
                                    className="image-box-projet-content"
                                    draggable="false"
                                    alt={`project-${item.id}-img`}
                                />
                            </div>
                            <button className="btn-change-image-next" onClick={() => nextImage(i)}>
                                <img src={arrow} className="img-btn-change" draggable="false" alt="next" />
                            </button>
                            <button className="btn-change-image-back" onClick={() => prevImage(i)}>
                                <img src={arrow} className="img-btn-change" draggable="false" alt="back" />
                            </button>
                        </div>

                        <div className="text-box-projet">
                            <div className="text-content-box-projet">
                                <h3 className="date-project-content">{item.date}</h3>
                                <h2 className="titre-project-content">{item.name}</h2>
                                <p className="description-project-content">{item.descript}</p>
                            </div>

                            <div className="icon-langue-box-projet">
                                {item.langue.map((langue, j) => (
                                    <div className="icon-box-projet-content" key={j}>
                                        <img src={langue.icon} className="icon-langue-box-projet-content" alt="Logo-Langue" draggable="false"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}