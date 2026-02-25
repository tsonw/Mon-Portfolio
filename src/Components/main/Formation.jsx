import React from "react";
import TimeLineEdu from "../time-line-edu";

export default function Formation () {

    const list_formation = [
        {
            year: "2025 - 2026",
            name: "IUT d'Orsay, Université Paris - Saclay, France",
            description: "Étudiant en BUT 2 - Parcours B déploiement d'applications communicantes et sécurisées"
        },
        {
            year: "2024 - 2025",
            name: "IUT d'Orsay, Université Paris - Saclay, France",
            description: "Étudiant en BUT 1 - en informatique"
        },
        {
            year: "2023 - 2024",
            name: "Programme DU - FLE, Université Paris-Saclay, France",
            description: "Diplôme d’Université en Français Langue Étrangère"
        },
        {
            year: "2020 - 2023",
            name: "Lycée d’excéllence Hoang Van Thu, Hoabinh, Viet nam",
            description: "Baccalauréat (équivalent Baccalauréat Général)"
        }
    ];

    return (
        <>
            <div className="formation" id="formation">
                <div className="box_text_formation">
                    <h2 className="formation_titre">Formation.</h2>
                </div>
                <div className="formation_timeline">
                    {list_formation.map((item, i) => (
                        <div key={i} className="formation_box">
                            <span className="formation_year">{item.year}</span>
                            <span className="formation_name">{item.name}</span>
                            <span className="formation_description">{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}