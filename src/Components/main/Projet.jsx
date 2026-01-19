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
        name: "Création d'une base de données et requêtes pour un système bancaire",
        descript: "Ce projet consiste à concevoir et créer une base de données complète pour un système bancaire, incluant des tables pour les clients, les comptes, les transactions, les employés et les agences. Des requêtes SQL seront utilisées pour gérer et exploiter les données, telles que la consultation de soldes ou la génération de statistiques sur les opérations. Des données simulées seront ajoutées afin d'assurer le bon fonctionnement de toutes les fonctionnalités essentielles d'une banque moderne.",
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
        name: "Développement de la logique d’un jeu 2D en C++",
        descript: "Ce projet vise à développer la logique d’un jeu 2D en utilisant le langage C++. Il inclut la gestion des entités du jeu, les interactions entre les objets, les mouvements, les collisions, ainsi que la boucle principale du jeu. L’objectif est de créer une base solide pour un jeu interactif, fluide et optimisé, en mettant l’accent sur la structure du code et la réutilisabilité des composants.",
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
        name: "Création d’un site web pour un complexe de loisirs",
        descript: "Ce projet a pour objectif de créer un site web statique et attrayant pour un complexe de loisirs, en utilisant uniquement HTML et CSS. Le site présentera les différentes activités proposées telles que les jeux, le cinéma, la restauration ou les événements. Il comprendra plusieurs sections : page d’accueil, présentation des services, galerie d’images, horaires d’ouverture et page de contact. Le design mettra l’accent sur l’ergonomie, l’esthétique et l’adaptabilité sur différents types d’écrans (responsive design), en exploitant au mieux les possibilités offertes par HTML et CSS.",
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
        name: "Projet Java : Développement d’une application de gestion des étudiants en colocation (Java Swing – équipe de 4 personnes)",
        descript: "Ce projet, mené entre 2024 et 2025 par une équipe de quatre développeurs, vise à créer une application de gestion destinée aux étudiants vivant en résidence ou en colocation, en utilisant Java pour la logique de programmation et Swing pour l’interface graphique. L’application permet de gérer les profils des étudiants, l’attribution des chambres, le suivi des paiements, la gestion des demandes de maintenance, ainsi que la communication entre les résidents et l’administration.Plutôt que d’utiliser une base de données, toutes les données sont conservées en mémoire à l’aide de structures telles que des listes ou des tableaux. L’interface a été pensée pour être simple, claire et intuitive, afin de faciliter la gestion quotidienne d’une résidence étudiante sans recourir à une solution de base de données complexe.",
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
        name: "Projet d’analyse de données : Écriture de requêtes et analyse sur une plateforme de jeu",
        descript: "Ce projet a consisté à écrire des requêtes SQL complexes pour analyser les données d’une plateforme de jeu fournie. J’ai développé des fonctions et des procédures afin de simplifier la manipulation et la lecture des tables de données.L’analyse a été approfondie grâce à l’utilisation de Python et Jupyter Notebook pour la visualisation des résultats à travers des graphiques clairs (histogrammes, courbes, boxplots, etc.). J’ai extrait les informations clés de la base de données de la plateforme de jeu, puis effectué des comparaisons basées sur des indicateurs statistiques tels que la moyenne, la médiane, l’écart-type… L’ensemble du travail a été présenté sous forme de rapport d’analyse détaillé, incluant des visualisations pertinentes et des explications claires des tendances observées, dans le but d’identifier des insights concrets à partir des données du jeu.",
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
    }
];

const listProjetPersonnes = [
    { 
        id: 1,
        date: "2021 - 2023",
        name: "Gestion de contenu pour une fanpage de tournoi de football",
        descript: "J’ai assuré la gestion complète d’une fanpage dédiée à un tournoi de football amateur, en élaborant une stratégie de contenu cohérente et en publiant régulièrement des posts engageants. Après chaque match, je concevais des visuels dynamiques — résumés de scores, moments forts, portraits de joueurs — en utilisant des outils tels que Photoshop, Illustrator et Canva. Ces contenus visaient à renforcer l’identité visuelle du tournoi, valoriser les performances des équipes et maintenir un fort niveau d’engagement auprès de la communauté tout au long de l’événement.",
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
        date: "juillet 2025 - août 2025",
        name: "Tic-Tac-Toe – React & JavaScript",
        descript: "Un mini-jeu développé avec React pour pratiquer la logique de jeu, la gestion d'état et les interfaces interactives. Il inclut une grille 3x3 dynamique, la vérification des victoires/défaites/égalité, et une IA basique pour l'entraînement. Ce projet démontre la capacité à concevoir des interfaces réactives et à structurer efficacement la logique front-end.",
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
        ]
    },
    { 
        id: 3,
        date: "juillet 2025 - présent",
        name: "Site web de gestion interne du salon de thé MON AMOUR",
        descript: "Ce projet constitue une initiative concrète visant à optimiser et centraliser la gestion des opérations du salon de thé où je travaille, en couvrant notamment le suivi des stocks, la génération de rapports financiers, la gestion du personnel et de leurs horaires, ainsi que la gestion des produits. Il m’a permis de répondre à un besoin réel et de proposer des solutions efficaces aux difficultés rencontrées dans l’utilisation quotidienne des outils existants. Par ailleurs, ce projet m’a également offert l’opportunité de développer des compétences techniques supplémentaires, notamment en matière d’hébergement web via Firebase. Actuellement, je suis toujours en train de afin d’offrir une interface plus attrayante et d’intégrer les fonctionnalités nécessaires à une utilisation optimale.",
        photo: imgProjet322,
        langue: [
            { icon: iconFireBase, nameLangue: "FireBase"},
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
        descript: "Application météo développée avec React et JavaScript, connectée à l’API OpenWeather pour afficher la météo en temps réel. L’utilisateur peut rechercher une ville, consulter la température, l’humidité, la vitesse du vent, ainsi que la description du temps et l’icône correspondante. Le projet intègre la gestion d’état (useState/useEffect), le traitement des réponses JSON, la gestion des erreurs (ville introuvable / réseau), et une interface responsive pensée pour une utilisation mobile.",
        photo: imgProjet412,             
        classDetail: "Projet_detail_weather",
        langue: [
            { icon: iconReact, nameLangue: "React" },
            { icon: iconJS, nameLangue: "JavaScript" }
        ],
        image: [
            { icon: imgProjet412, nameLangue: "img" }
        ]
    }
];



export default function Projet() {

    const [dataProjet, setDataProjet] = useState(listProjetPersonnes);

    return (
        <>
            <div className="panel-projet" id="projets">
                <div className="projets">
                    <div className="box-text-projets">
                        <h2 className="titre-projet">Projets réalisés</h2>
                        <div className="panel_btn_choix">
                            <button onClick={() => {
                                setDataProjet(listProjetPersonnes);
                            }}>PERSONNELS</button>
                            <button onClick={() => {
                                setDataProjet(listProjetInfos);
                            }}>ACADÉMIQUES</button>
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