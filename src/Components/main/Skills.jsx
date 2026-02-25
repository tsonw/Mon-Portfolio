import React from "react";
import '../../Styles/main/skills.css';
import CardSkill from "../card-skill";
import { Link } from "react-router-dom";

export default function Skills() {

    return (
        <>
            <div className="panel-skill" id="skills">
                <div className="skills">
                    <div className="box_text_skills">
                        <h2 className="titre_skill">Compétences.</h2>
                    </div>
                    <div className="skills_box">
                        <CardSkill />
                    </div>
                </div>
            </div>
        </>
    );
}