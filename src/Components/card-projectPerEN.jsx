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
        name: "Content Management for an Amateur Football Tournament Fanpage",
        descript: "Managed the complete content strategy for a fanpage dedicated to an amateur football tournament. I regularly created and posted engaging content, including dynamic visuals — match summaries, highlights, and player portraits — using tools such as Photoshop, Illustrator, and Canva. These efforts aimed to strengthen the tournament's visual identity, showcase team performances, and maintain high engagement with the community throughout the event.",
        langue: [
            { icon: iconPTS, nameLangue: "Oracle" },
            { icon: iconAI, nameLangue: "SQLite" }
        ],
        image: [
            { icon: imgProjet11, nameLangue: "img" },
            { icon: imgProjet12, nameLangue: "img" },
            { icon: imgProjet13, nameLangue: "img" },
            { icon: imgProjet14, nameLangue: "img" }
        ]
    },
    { 
        id: 2,
        date: "July 2025 - August 2025",
        name: "Tic-Tac-Toe – React & JavaScript",
        descript: "A mini-game built with React to practice game logic, state management, and interactive interfaces. Features include a dynamic 3x3 grid, win/loss/draw detection, and a basic AI for training. This project demonstrates the ability to design responsive interfaces and efficiently structure front-end logic.",
        langue: [
            { icon: iconReact, nameLangue: "React" },
            { icon: iconJS, nameLangue: "JavaScript" }
        ],
        image: [
            { icon: imgProjet21, nameLangue: "img" },
            { icon: imgProjet22, nameLangue: "img" },
            { icon: imgProjet23, nameLangue: "img" },
            { icon: imgProjet24, nameLangue: "img" }
        ]
    },
    { 
        id: 3,
        date: "July 2025 - Present",
        name: "Internal Management Website for MON AMOUR Tea Salon",
        descript: "A real-world project aimed at optimizing and centralizing the operations of the tea salon where I work. Key features include stock tracking, financial report generation, staff management and scheduling, and product management. This project allowed me to address real operational challenges and propose effective solutions while also enhancing my technical skills, including web hosting with Firebase. Currently, I am improving the interface and integrating additional functionalities for an optimal user experience.",
        langue: [
            { icon: iconFireBase, nameLangue: "Firebase" },
            { icon: iconFigma, nameLangue: "Figma" },
            { icon: iconJS, nameLangue: "JavaScript" },
            { icon: iconReact, nameLangue: "React" }
        ],
        image: [
            { icon: imgProjet31, nameLangue: "img" },
            { icon: imgProjet32, nameLangue: "img" },
            { icon: imgProjet33, nameLangue: "img" },
            { icon: imgProjet34, nameLangue: "img" },
            { icon: imgProjet35, nameLangue: "img" }
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