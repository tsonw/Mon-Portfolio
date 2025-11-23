import React, { useState, useRef } from "react";

import '../Styles/card-skill/card-skill.css';

import imgProjet11 from '../assets/projet/personnel/ptsai/posters.jpg';
import imgProjet12 from '../assets/projet/personnel/ptsai/logo1.jpg';
import imgProjet13 from '../assets/projet/personnel/ptsai/logo2.jpg';
import imgProjet14 from '../assets/projet/personnel/ptsai/logo3.jpg';

import imgProjet21 from '../assets/projet/personnel/tictactoe/gameScreen.png';
import imgProjet22 from '../assets/projet/personnel/tictactoe/gameScreen1.png';
import imgProjet23 from '../assets/projet/personnel/tictactoe/gameScreen2.png';
import imgProjet24 from '../assets/projet/personnel/tictactoe/gameScreen3.png';

import imgProjet31 from '../assets/projet/personnel/monAmour/1.png';
import imgProjet32 from '../assets/projet/personnel/monAmour/2.png';
import imgProjet33 from '../assets/projet/personnel/monAmour/3.png';
import imgProjet34 from '../assets/projet/personnel/monAmour/4.png';
import imgProjet35 from '../assets/projet/personnel/monAmour/5.png';
import imgProjet36 from '../assets/projet/personnel/monAmour/6.png';
import imgProjet37 from '../assets/projet/personnel/monAmour/7.png';
import imgProjet38 from '../assets/projet/personnel/monAmour/8.png';
import imgProjet39 from '../assets/projet/personnel/monAmour/9.png';

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
import iconFireBase from '../assets/icon/skill/firebase.png';

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
    },
    { 
        id: 2,
        date: "juillet 2025 - août 2025",
        name: "Tic-Tac-Toe – React & JavaScript",
        descript: "Un mini-jeu développé avec React pour pratiquer la logique de jeu, la gestion d'état et les interfaces interactives. Il inclut une grille 3x3 dynamique, la vérification des victoires/défaites/égalité, et une IA basique pour l'entraînement. Ce projet démontre la capacité à concevoir des interfaces réactives et à structurer efficacement la logique front-end.",
        langue: [
            { icon: iconReact, nameLangue: "React"},
            { icon: iconJS, nameLangue: "JavaScript"}
        ],
        image: [
            { icon: imgProjet21, nameLangue: "img"},
            { icon: imgProjet22, nameLangue: "img"},
            { icon: imgProjet23, nameLangue: "img"},
            { icon: imgProjet24, nameLangue: "img"}
        ]
    },
    { 
        id: 3,
        date: "juillet 2025 - présent",
        name: "Site web de gestion interne du salon de thé MON AMOUR",
        descript: "Ce projet constitue une initiative concrète visant à optimiser et centraliser la gestion des opérations du salon de thé où je travaille, en couvrant notamment le suivi des stocks, la génération de rapports financiers, la gestion du personnel et de leurs horaires, ainsi que la gestion des produits. Il m’a permis de répondre à un besoin réel et de proposer des solutions efficaces aux difficultés rencontrées dans l’utilisation quotidienne des outils existants. Par ailleurs, ce projet m’a également offert l’opportunité de développer des compétences techniques supplémentaires, notamment en matière d’hébergement web via Firebase. Actuellement, je suis toujours en train de afin d’offrir une interface plus attrayante et d’intégrer les fonctionnalités nécessaires à une utilisation optimale.",
        langue: [
            { icon: iconFireBase, nameLangue: "FireBase"},
            { icon: iconFigma, nameLangue: "FireBase"},
            { icon: iconJS, nameLangue: "FireBase"},
            { icon: iconReact, nameLangue: "FireBase"}
        ],
        image: [
            { icon: imgProjet31, nameLangue: "img"},
            { icon: imgProjet32, nameLangue: "img"},
            { icon: imgProjet33, nameLangue: "img"},
            { icon: imgProjet34, nameLangue: "img"},
            { icon: imgProjet35, nameLangue: "img"},
            { icon: imgProjet36, nameLangue: "img"},
            { icon: imgProjet37, nameLangue: "img"},
            { icon: imgProjet38, nameLangue: "img"},
            { icon: imgProjet39, nameLangue: "img"},
        ]
    }
];

export default function CardProjectPer() {

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