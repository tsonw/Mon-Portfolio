import { useState } from 'react';
import '../../Styles/main/projet.css';
import { Link } from "react-router-dom";
import CardProjet from "../card-projet";

import iconHTML from '../../assets/icon/color/html-5.png';
import iconCSS from '../../assets/icon/color/css-3.png';
import iconReact from '../../assets/icon/color/react.png';

import iconCpp from '../../assets/icon/color/c++.png';
import iconJava from '../../assets/icon/color/java.png';
import iconJS from '../../assets/icon/color/js.png';
import iconPython from '../../assets/icon/color/python.png';
import iconPhp from '../../assets/icon/color/php.png';

import iconOracle from '../../assets/icon/color/oracle.png';
import iconMySQL from '../../assets/icon/color/MySQL.png';
import iconSQLite from '../../assets/icon/color/SQLite.png';

import iconPTS from '../../assets/icon/color/photoshop.png';
import iconAI from '../../assets/icon/color/illustrator.png';
import iconFigma from '../../assets/icon/color/figma.png';

import iconWindow from '../../assets/icon/color/window.png';
import iconLinux from '../../assets/icon/color/ubuntu.png';
import iconMacOS from '../../assets/icon/color/macos.png';

import iconGithub from '../../assets/icon/color/github.png';
import iconGit from '../../assets/icon/color/git.png';
import iconGitlab from '../../assets/icon/color/gitlab.png';
import iconOffice from '../../assets/icon/color/office.png';
import iconFireBase from '../../assets/icon/color/firebase.png'
import iconAPI from '../../assets/icon/color/api.png'


import imgProjet11 from '../../assets/projet/informatique/base-donnees/1.png';
import imgProjet12 from '../../assets/projet/informatique/base-donnees/2.png';

import imgProjet21 from '../../assets/projet/informatique/game2d/1.png';
import imgProjet22 from '../../assets/projet/informatique/game2d/2.png';

import imgProjet31 from '../../assets/projet/informatique/web-booking/1.png';
import imgProjet32 from '../../assets/projet/informatique/web-booking/2.png';

import imgProjet41 from '../../assets/projet/informatique/appJava/1.png';
import imgProjet42 from '../../assets/projet/informatique/appJava/2.png';
import imgProjet43 from '../../assets/projet/informatique/appJava/3.png';
import imgProjet44 from '../../assets/projet/informatique/appJava/4.png';
import imgProjet45 from '../../assets/projet/informatique/appJava/5.png';
import imgProjet46 from '../../assets/projet/informatique/appJava/6.png';
import imgProjet47 from '../../assets/projet/informatique/appJava/7.jpg';

import imgProjet51 from '../../assets/projet/informatique/data/1.png';
import imgProjet52 from '../../assets/projet/informatique/data/2.png';
import imgProjet55 from '../../assets/projet/informatique/data/5.png';
import imgProjet56 from '../../assets/projet/informatique/data/6.png';
import imgProjet57 from '../../assets/projet/informatique/data/7.png';

import imgProjet61 from '../../assets/projet/informatique/phpJavaApi/1.jpg';
import imgProjet62 from '../../assets/projet/informatique/phpJavaApi/2.png';
import imgProjet63 from '../../assets/projet/informatique/phpJavaApi/3.png';
import imgProjet64 from '../../assets/projet/informatique/phpJavaApi/4.png';
import imgProjet65 from '../../assets/projet/informatique/phpJavaApi/5.png';
import imgProjet66 from '../../assets/projet/informatique/phpJavaApi/6.png';
import imgProjet67 from '../../assets/projet/informatique/phpJavaApi/7.png';
import imgProjet68 from '../../assets/projet/informatique/phpJavaApi/8.png';
import imgProjet69 from '../../assets/projet/informatique/phpJavaApi/9.png';
import imgProjet610 from '../../assets/projet/informatique/phpJavaApi/10.png';
import imgProjet611 from '../../assets/projet/informatique/phpJavaApi/11.png';
import imgProjet612 from '../../assets/projet/informatique/phpJavaApi/12.png';
import imgProjet613 from '../../assets/projet/informatique/phpJavaApi/13.png';
import imgProjet614 from '../../assets/projet/informatique/phpJavaApi/14.png';
import imgProjet615 from '../../assets/projet/informatique/phpJavaApi/15.png';

import imgProjet112 from '../../assets/projet/personnel/ptsai/posters.jpg';
import imgProjet122 from '../../assets/projet/personnel/ptsai/logo1.jpg';
import imgProjet132 from '../../assets/projet/personnel/ptsai/logo2.jpg';
import imgProjet142 from '../../assets/projet/personnel/ptsai/logo3.jpg';

import imgProjet212 from '../../assets/projet/personnel/tictactoe/gameScreen.png';
import imgProjet222 from '../../assets/projet/personnel/tictactoe/gameScreen1.png';
import imgProjet232 from '../../assets/projet/personnel/tictactoe/gameScreen2.png';
import imgProjet242 from '../../assets/projet/personnel/tictactoe/gameScreen3.png';

import imgProjet312 from '../../assets/projet/personnel/monAmour/1.png';
import imgProjet322 from '../../assets/projet/personnel/monAmour/2.png';
import imgProjet332 from '../../assets/projet/personnel/monAmour/3.png';
import imgProjet342 from '../../assets/projet/personnel/monAmour/4.png';
import imgProjet352 from '../../assets/projet/personnel/monAmour/5.png';
import imgProjet362 from '../../assets/projet/personnel/monAmour/6.png';
import imgProjet372 from '../../assets/projet/personnel/monAmour/7.png';
import imgProjet382 from '../../assets/projet/personnel/monAmour/8.png';
import imgProjet392 from '../../assets/projet/personnel/monAmour/9.png';

import imgProjet412 from '../../assets/projet/personnel/weather/1.png';

const listProjetInfos = [
       { 
              id: 1,
              date: "2024 - 2025",
              name: "Banking System Database Design & Querying",
              descript: "This project involved designing and implementing a comprehensive database for a banking system, including tables for clients, accounts, transactions, employees, and branches. SQL queries were developed to manage and analyze data, such as balance inquiries and transaction statistics. Simulated data was integrated to ensure the seamless operation of all essential modern banking features.",
              photo: imgProjet12,
              classDetail: "Projet_detail_1",
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
              name: "2D Game Engine Logic Development in C++",
              descript: "Developed the core logic of a 2D game using C++. The project covers entity management, object interactions, movement mechanics, collision detection, and the main game loop. The goal was to build a robust, fluid, and optimized foundation for interactive gaming, with a focus on clean code structure and component reusability.",
              photo: imgProjet22,
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
              name: "Leisure Center Website Design",
              descript: "Designed and developed an engaging static website for a leisure complex using HTML and CSS. The site showcases various activities including games, cinema, dining, and events. It features a homepage, service overviews, image galleries, opening hours, and a contact page. The design prioritizes UX/UI, aesthetics, and full responsiveness across all devices.",
              photo: imgProjet31,
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
              name: "Student Housing Management Application (Java Swing – Team of 4)",
              descript: "Collaborated in a team of four to develop a management application for students in shared housing or residences. Built using Java for core logic and Swing for the GUI, the app manages student profiles, room assignments, payment tracking, maintenance requests, and administrative communication. To demonstrate data structure proficiency, all data is managed in-memory (lists/arrays) rather than through an external database. Designed with a clean, intuitive interface for daily administrative use.",
              photo: imgProjet47,
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
              name: "Data Analysis: SQL Querying & Gaming Platform Insights",
              descript: "Performed complex SQL querying to analyze data from a provided gaming platform, developing specialized functions and procedures to streamline data manipulation. The analysis was enhanced using Python and Jupyter Notebook to visualize results through clear charts (histograms, line graphs, boxplots). Key insights were extracted based on statistical indicators (mean, median, standard deviation), culminating in a detailed report identifying concrete trends from the raw game data.",
              photo: imgProjet52,
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
       },
       { 
              id: 6,
              date: "2025 - 2026",
              name: "FullStack University Group Management Platform — PHP/MySQL, Java, REST API",
              descript: "- Developed a platform to automate the creation of student groups for large cohorts (>100 students) with pedagogical constraints.\n- Implemented authentication with Role-Based Access Control (RBAC) for administrators, instructors, and students.\n- Features include student/promotion management, polls for student preferences, and a carpooling selection tool.\n- Built a CSV import system with data validation and column mapping for student grades.\n- Integrated an automatic group generation algorithm focusing on academic balance (mean/standard deviation) and diversity quotas (gender, background, etc.).\n- Supports manual adjustments via a quality control dashboard and full CSV exports.\n- Architecture: PHP (MVC) web interface, MySQL database, secure REST API (JSON), and a Java (OOP) client application.\n- Built in a team of 3 using a User-Centered Design (UCD) approach with a focus on data security.",
              photo: imgProjet61,
              langue: [
              { icon: iconPhp, nameLangue: "PHP (MVC)" },
              { icon: iconMySQL, nameLangue: "MySQL" },
              { icon: iconJava, nameLangue: "Java (OOP)" },
              { icon: iconAPI, nameLangue: "REST API" }
              ],
              image: [
              { icon: imgProjet62, nameLangue: "img" },
              { icon: imgProjet63, nameLangue: "img" },
              { icon: imgProjet64, nameLangue: "img" },
              { icon: imgProjet65, nameLangue: "img" },
              { icon: imgProjet66, nameLangue: "img" },
              { icon: imgProjet67, nameLangue: "img" },
              { icon: imgProjet68, nameLangue: "img" },
              { icon: imgProjet69, nameLangue: "img" },
              { icon: imgProjet611, nameLangue: "img" },
              { icon: imgProjet611, nameLangue: "img" },
              { icon: imgProjet612, nameLangue: "img" },
              { icon: imgProjet613, nameLangue: "img" },
              { icon: imgProjet614, nameLangue: "img" },
              { icon: imgProjet615, nameLangue: "img" }
              ]
       }
];

const listProjetPersonnes = [
       { 
              id: 1,
              date: "2021 - 2023",
              name: "Content Management for Football Tournament Fan Page",
              descript: "Managed the end-to-end content strategy for an amateur football tournament fan page. Created dynamic visuals—including match summaries, highlights, and player portraits—using Photoshop, Illustrator, and Canva. These efforts strengthened the tournament's visual identity and maintained high community engagement throughout the events.",
              photo: imgProjet122,
              langue: [
              { icon: iconPTS, nameLangue: "Photoshop"},
              { icon: iconAI, nameLangue: "Illustrator"}
              ],
              image: [
              { icon: imgProjet112, nameLangue: "img"},
              { icon: imgProjet122, nameLangue: "img"},
              { icon: imgProjet132, nameLangue: "img"},
              { icon: imgProjet142, nameLangue: "img"}
              ]
       },
       { 
              id: 2,
              date: "July 2025 - August 2025",
              name: "Tic-Tac-Toe – React & JavaScript",
              descript: "A mini-game developed with React to practice game logic, state management, and interactive UI design. Includes a dynamic 3x3 grid, win/loss/draw validation, and a basic AI for single-player mode. This project demonstrates proficiency in building reactive interfaces and structuring front-end logic efficiently.",
              photo: imgProjet212,
              langue: [
              { icon: iconReact, nameLangue: "React"},
              { icon: iconJS, nameLangue: "JavaScript"}
              ],
              image: [
              { icon: imgProjet212, nameLangue: "img"},
              { icon: imgProjet222, nameLangue: "img"},
              { icon: imgProjet232, nameLangue: "img"},
              { icon: imgProjet242, nameLangue: "img"}
              ],
              url: "https://tsonw.github.io/TicTacToe/"
       },
       { 
              id: 3,
              date: "July 2025 - Present",
              name: "Internal Management System: MON AMOUR Tea House",
              descript: "A practical initiative to optimize and centralize operations for the tea house where I work. The system handles inventory tracking, financial reporting, staff scheduling, and product management. It was built to solve real-world inefficiencies with existing tools. This project also allowed me to expand my technical stack into web hosting via Firebase. Currently under active development to refine the UI and integrate advanced management features.",
              photo: imgProjet322,
              langue: [
              { icon: iconFireBase, nameLangue: "Firebase"},
              { icon: iconFigma, nameLangue: "Figma"},
              { icon: iconJS, nameLangue: "JavaScript"},
              { icon: iconReact, nameLangue: "React"}
              ],
              image: [
              { icon: imgProjet312, nameLangue: "img"},
              { icon: imgProjet322, nameLangue: "img"},
              { icon: imgProjet332, nameLangue: "img"},
              { icon: imgProjet342, nameLangue: "img"},
              { icon: imgProjet352, nameLangue: "img"},
              { icon: imgProjet362, nameLangue: "img"},
              { icon: imgProjet372, nameLangue: "img"},
              { icon: imgProjet382, nameLangue: "img"},
              { icon: imgProjet392, nameLangue: "img"},
              ]
       },
       { 
              id: 4,
              date: "2025",
              name: "Weather App – React & JavaScript (OpenWeather API)",
              descript: "A weather application built with React and JavaScript, utilizing the OpenWeather API for real-time data. Users can search for cities to view temperature, humidity, wind speed, and weather descriptions with dynamic icons. Features include state management (useState/useEffect), JSON data processing, robust error handling (city not found/network), and a mobile-first responsive design.",
              photo: imgProjet412,             
              classDetail: "Projet_detail_weather",
              langue: [
              { icon: iconReact, nameLangue: "React" },
              { icon: iconJS, nameLangue: "JavaScript" }
              ],
              image: [
              { icon: imgProjet412, nameLangue: "img" }
              ],
              url: "https://tsonw.github.io/Weather-App/"
       }
];



export default function Projet() {

       const [dataProjet, setDataProjet] = useState(listProjetPersonnes);
       const [projetChoisi, setProjetChoisi] = useState(true); // Defaut : Projet Personne

       return (
              <>
              <div className="panel-projet" id="projets">
                     <div className="projets">
                            <div className="box-text-projets">
                                   <h2 className="titre-projet">Projects.</h2>
                                   <div className="panel_btn_choix">
                                          <button 
                                          className={projetChoisi ? "btn_choisi_projet" : "btn_non_choisi_projet"} 
                                          onClick={() => {
                                                 setDataProjet(listProjetPersonnes);
                                                 setProjetChoisi(true);
                                          }}>PERSONAL</button>
                                          <button 
                                          className={projetChoisi ? "btn_non_choisi_projet" : "btn_choisi_projet"} 
                                          onClick={() => {
                                                 setDataProjet(listProjetInfos);
                                                 setProjetChoisi(false);
                                          }}>ACADEMIC</button>
                                   </div>
                            </div>
                            <div className="projets-box">
                                   <CardProjet dataProjet={dataProjet} />
                            </div>
                     </div>
              </div>
              </>
       );
}