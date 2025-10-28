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
        name: "Database Design and Queries for a Banking System",
        descript: "This project involved designing and creating a comprehensive database for a banking system, including tables for clients, accounts, transactions, employees, and branches. SQL queries were used to manage and utilize data, such as checking balances or generating operational statistics. Simulated data was added to ensure all essential banking functionalities worked correctly.",
        langue: [
            { icon: iconOracle, nameLangue: "Oracle" },
            { icon: iconSQLite, nameLangue: "SQLite" }
        ],
        image: [
            { icon: imgProjet11, nameLangue: "img1" },
            { icon: imgProjet12, nameLangue: "img2" }
        ]
    },
    { 
        id: 2,
        date: "2024 - 2025",
        name: "2D Game Logic Development in C++",
        descript: "This project focused on developing the logic for a 2D game using C++. It included managing game entities, interactions between objects, movements, collisions, and the main game loop. The goal was to create a solid foundation for an interactive, smooth, and optimized game, emphasizing code structure and component reusability.",
        langue: [
            { icon: iconCpp, nameLangue: "C++" }
        ],
        image: [
            { icon: imgProjet21, nameLangue: "img1" },
            { icon: imgProjet22, nameLangue: "img2" }
        ]
    },
    { 
        id: 3,
        date: "2024 - 2025",
        name: "Website Development for a Leisure Complex",
        descript: "The aim of this project was to create a static and visually appealing website for a leisure complex using only HTML and CSS. The site showcases activities such as games, cinema, dining, and events, with multiple sections: homepage, service presentation, image gallery, opening hours, and contact page. The design focused on usability, aesthetics, and responsiveness across different screen types.",
        langue: [
            { icon: iconHTML, nameLangue: "HTML" },
            { icon: iconCSS, nameLangue: "CSS" }
        ],
        image: [
            { icon: imgProjet32, nameLangue: "img1" },
            { icon: imgProjet31, nameLangue: "img2" }
        ]
    },
    { 
        id: 4,
        date: "2024 - 2025",
        name: "Java Project: Student Management App for Shared Housing (Java Swing – Team of 4)",
        descript: "This project, developed by a team of four between 2024 and 2025, aimed to create a management application for students living in shared housing. It used Java for programming logic and Swing for the graphical interface. The app manages student profiles, room assignments, payment tracking, maintenance requests, and communication between residents and administration. Instead of a database, all data is stored in-memory using structures like lists and arrays. The interface was designed to be simple, clear, and intuitive to facilitate daily management without a complex database solution.",
        langue: [
            { icon: iconGit, nameLangue: "Git" },
            { icon: iconGitlab, nameLangue: "GitLab" },
            { icon: iconJava, nameLangue: "Java" },
            { icon: iconFigma, nameLangue: "Figma" }
        ],
        image: [
            { icon: imgProjet41, nameLangue: "img" },
            { icon: imgProjet42, nameLangue: "img" },
            { icon: imgProjet43, nameLangue: "img" },
            { icon: imgProjet44, nameLangue: "img" },
            { icon: imgProjet45, nameLangue: "img" },
            { icon: imgProjet46, nameLangue: "img" },
            { icon: imgProjet47, nameLangue: "img" }
        ]
    },
    { 
        id: 5,
        date: "2024 - 2025",
        name: "Data Analysis Project: SQL Queries and Insights on a Gaming Platform",
        descript: "This project involved writing complex SQL queries to analyze data from a provided gaming platform. I developed functions and procedures to simplify data handling and reading. The analysis was further enhanced using Python and Jupyter Notebook to visualize results through clear graphs (histograms, curves, boxplots, etc.). Key insights were extracted from the gaming platform database, and statistical comparisons were performed using metrics such as mean, median, and standard deviation. The final output was presented as a detailed analysis report with relevant visualizations and clear explanations of observed trends.",
        langue: [
            { icon: iconOracle, nameLangue: "Oracle" },
            { icon: iconPython, nameLangue: "Python" }
        ],
        image: [
            { icon: imgProjet51, nameLangue: "img" },
            { icon: imgProjet52, nameLangue: "img" },
            { icon: imgProjet55, nameLangue: "img" },
            { icon: imgProjet56, nameLangue: "img" },
            { icon: imgProjet57, nameLangue: "img" }
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