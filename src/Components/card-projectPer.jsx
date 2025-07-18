import React, { useState, useRef } from "react";

import '../Styles/card-skill/card-skill.css';

import imgProjet11 from '../assets/projet/personnel/ptsai/posters.jpg';
import imgProjet12 from '../assets/projet/personnel/ptsai/logo1.jpg';
import imgProjet13 from '../assets/projet/personnel/ptsai/logo2.jpg';
import imgProjet14 from '../assets/projet/personnel/ptsai/logo3.jpg';
import iconPTS from '../assets/icon/skill/photoshop.png';
import iconAI from '../assets/icon/skill/illustrator.png';

import iconOracle from '../assets/icon/skill/oracle.png';
import iconSQLite from '../assets/icon/skill/SQLite.png';
import iconHTML from '../assets/icon/skill/html-5.png';
import iconCSS from '../assets/icon/skill/css-3.png';
import iconReact from '../assets/icon/skill/react.png';

import iconCpp from '../assets/icon/skill/c++.png';
import iconJava from '../assets/icon/skill/java.png';
import iconJS from '../assets/icon/skill/js.png';
import iconPython from '../assets/icon/skill/python.png';

import iconMySQL from '../assets/icon/skill/MySQL.png';

import iconFigma from '../assets/icon/skill/figma.png';

import iconWindow from '../assets/icon/skill/window.png';
import iconLinux from '../assets/icon/skill/ubuntu.png';
import iconMacOS from '../assets/icon/skill/macos.png';

import iconGithub from '../assets/icon/skill/github.png';
import iconGit from '../assets/icon/skill/git.png';
import iconOffice from '../assets/icon/skill/office.png';

import arrow from '../assets/icon/arrow.png';

const listProjets = [
    { 
        id: 1,
        date: "2021 - 2023",
        name: "Gestion de contenu pour une fanpage de tournoi de football",
        descript: "J’ai assuré la gestion complète d’une fanpage dédiée à un tournoi de football amateur, en élaborant une stratégie de contenu cohérente et en publiant régulièrement des posts engageants. Après chaque match, je concevais des visuels dynamiques — résumés de scores, moments forts, portraits de joueurs — en utilisant des outils tels que Photoshop, Illustrator et Canva. Ces contenus visaient à renforcer l’identité visuelle du tournoi, valoriser les performances des équipes et maintenir un fort niveau d’engagement auprès de la communauté tout au long de l’événement.",
        langue: [
            { icon: iconPTS, nameLangue: "Oracle"},
            { icon: iconAI, nameLangue: "SQLite"}
        ],
        image: [
            { icon: imgProjet11, nameLangue: "img"},
            { icon: imgProjet12, nameLangue: "img"},
            { icon: imgProjet13, nameLangue: "img"},
            { icon: imgProjet14, nameLangue: "img"}
        ]
    }
];

export default function CardProjectPer() {

    const divRefs = useRef([]);

    const scrollDownByHeight = (i) => {
        const div = divRefs.current[i];
        if (div) {
            div.scrollTo({
                top: div.scrollTop + div.clientHeight,
                behavior: 'smooth'
            });
        }
    };

    const scrollUpByHeight = (i) => {
        const div = divRefs.current[i];
        if (div) {
            div.scrollTo({
                top: div.scrollTop - div.clientHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {listProjets.map((item, i) => ( 
                <div className="projet-box" key={item.id}>
                    <div className="image-box-projet">
                        <div ref={(el) => (divRefs.current[i] = el)} className="image-box-content">    
                            {item.image.map((image, i) => (
                                <img key={i} src={image.icon} className="image-box-projet-content" draggable="false"/>
                            ))}
                        </div>
                        <button className="btn-change-image-next" onClick={() => scrollDownByHeight(i)}>
                            <img src={arrow} className="img-btn-change" draggable="false" alt="" />
                        </button>
                        <button className="btn-change-image-back" onClick={() => scrollUpByHeight(i)}>
                            <img src={arrow} className="img-btn-change" draggable="false" alt="" />
                        </button>
                    </div>
                    <div className="text-box-projet">
                        <div className="text-content-box-projet">
                            <h3 className="date-project-content">{item.date}</h3>
                            <h2 className="titre-project-content">{item.name}</h2>
                            <p className="description-project-content">{item.descript}</p>
                        </div>
                        <div className="icon-langue-box-projet">
                            {item.langue.map((langue, i) => (
                                <div className="icon-box-projet-content" key={i}>
                                    <img src={langue.icon} className="icon-langue-box-projet-content" alt="Logo-Langue" draggable="false"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}