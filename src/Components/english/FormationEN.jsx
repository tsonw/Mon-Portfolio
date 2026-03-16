import React from "react";
import TimeLineEdu from "../time-line-edu";

export default function FormationEN () {

    const list_formation = [
        {
            year: "2025 - 2026",
            name: "IUT d'Orsay, Paris-Saclay University, France",
            description: "2nd-year Bachelor of Technology (BUT) - Specialized in Communicating and Secure Applications Deployment"
        },
        {
            year: "2024 - 2025",
            name: "IUT d'Orsay, Paris-Saclay University, France",
            description: "1st-year Bachelor of Technology (BUT) in Computer Science"
        },
        {
            year: "2023 - 2024",
            name: "DU-FLE Program, Paris-Saclay University, France",
            description: "University Diploma in French as a Foreign Language"
        },
        {
            year: "2020 - 2023",
            name: "Hoang Van Thu High School for the Gifted, Hoa Binh, Vietnam",
            description: "High School Diploma (General Baccalaureate equivalent)"
        }
    ];

    return (
        <>
            <div className="formation" id="formation">
                <div className="box_text_formation">
                    <h2 className="formation_titre">Education.</h2>
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