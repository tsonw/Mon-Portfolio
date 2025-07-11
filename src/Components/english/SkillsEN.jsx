import React from "react";
import '../../Styles/main/skills.css';
import TimeLineEdu from "../time-line-edu";
import CardSkill from "../card-skill";
import { Link } from "react-router-dom";

export default function SkillsEN() {

    return (
        <>
            <div className="panel-skill" id="skills">
                <div className="skills">
                    <div className="box-text">
                        <h2 className="titre-skill">Compétences</h2>
                    </div>
                    <div className="skills-box">
                        <CardSkill />
                    </div>
                    <div className="button-projet-skills">
                        <Link to="/english" className="pjt-skills">Projets personnels</Link>
                        <button className="pjt-skills">Projets informatiques</button>
                    </div>
                </div>
            </div>
        </>
    );
}