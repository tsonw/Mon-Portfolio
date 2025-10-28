import React from "react";
import '../Styles/card-skill/card-skill.css';
import iconHTML from '../assets/icon/skill/html-5.png';
import iconCSS from '../assets/icon/skill/css-3.png';
import iconReact from '../assets/icon/skill/react.png';

import iconCpp from '../assets/icon/skill/c++.png';
import iconJava from '../assets/icon/skill/java.png';
import iconJS from '../assets/icon/skill/js.png';
import iconPython from '../assets/icon/skill/python.png';
import iconPhp from '../assets/icon/skill/php.png';

import iconOracle from '../assets/icon/skill/oracle.png';
import iconMySQL from '../assets/icon/skill/MySQL.png';
import iconSQLite from '../assets/icon/skill/SQLite.png';

import iconPTS from '../assets/icon/skill/photoshop.png';
import iconAI from '../assets/icon/skill/illustrator.png';
import iconFigma from '../assets/icon/skill/figma.png';

import iconWindow from '../assets/icon/skill/window.png';
import iconLinux from '../assets/icon/skill/ubuntu.png';
import iconMacOS from '../assets/icon/skill/macos.png';

import iconGithub from '../assets/icon/skill/github.png';
import iconGit from '../assets/icon/skill/git.png';
import iconOffice from '../assets/icon/skill/office.png';

const listSkills = [
    { 
        id: 1, 
        name: "Frontend Web", 
        langue: [
            { icon: iconHTML, nameLangue: "HTML"},
            { icon: iconCSS, nameLangue: "CSS"},
            { icon: iconReact, nameLangue: "React"}
        ] 
    },
    { 
        id: 2, 
        name: "Programming", 
        langue: [
            { icon: iconCpp, nameLangue: "C++"},
            { icon: iconJava, nameLangue: "Java"},
            { icon: iconJS, nameLangue: "JavaScript"},
            { icon: iconPython, nameLangue: "Python"},
            { icon: iconPhp, nameLangue: "Php"}
        ]
    },
    { 
        id: 3, 
        name: "Databases", 
        langue: [
            { icon: iconOracle, nameLangue: "Oracle"},
            { icon: iconMySQL, nameLangue: "MySQL"},
            { icon: iconSQLite, nameLangue: "SQLite"}
        ]
    },
    { 
        id: 4, 
        name: "Design Tools", 
        langue: [
            { icon: iconPTS, nameLangue: "Adobe Photoshop"},
            { icon: iconAI, nameLangue: "Adobe Illustrator"},
            { icon: iconFigma, nameLangue: "Figma"}
        ]
    },
    { 
        id: 5, 
        name: "Operating Systems", 
        langue: [
            { icon: iconWindow, nameLangue: "Window"},
            { icon: iconLinux, nameLangue: "Linux Ubuntu"},
            { icon: iconMacOS, nameLangue: "macOS"}
        ]
    },
    { 
        id: 6, 
        name: "Other Tools", 
        langue: [
            { icon: iconGithub, nameLangue: "Github"},
            { icon: iconGit, nameLangue: "Git"},
            { icon: iconOffice, nameLangue: "Microsoft Office"}
        ]
    }
];

export default function CardSkill() {
    
    return (
        <>
            {listSkills.map((item) => ( 
                <div key={item.id}>
                    <h2 className="titre-box-skill">{item.name}</h2>
                    <div className="box-skill">
                        <li key={item.id} className="box-skill-item">
                            <ul>
                                {item.langue.map((langue, i) => (
                                    <li key={i} className="box-skill-langue-item">
                                        <div className="skill-langue">
                                            <div className="icon-skill-langue-box">
                                                <img src={langue.icon} draggable="false" className="icon-skill-langue" alt="Icon" />
                                            </div>
                                            <h4 className="name-skill-langue-text">{langue.nameLangue}</h4>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>    
                    </div>
                </div>
            ))}
        </>
    );
}