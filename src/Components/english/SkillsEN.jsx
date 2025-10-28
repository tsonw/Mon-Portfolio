import React from "react";
import '../../Styles/main/skills.css';
import TimeLineEdu from "../time-line-edu";
import CardSkillEN from "../card-skillEN";
import { Link } from "react-router-dom";

export default function SkillsEN() {

    return (
        <>
            <div className="panel-skill" id="skills">
                <div className="skills">
                    <div className="box-text">
                        <h2 className="titre-skill">Skills</h2>
                    </div>
                    <div className="skills-box">
                        <CardSkillEN />
                    </div>
                    <div className="button-projet-skills">
                        <Link to="/ProjetPersonnelEN" className="pjt-skills">Personal projects</Link>
                        <Link to="/ProjetInformatiqueEN" className="pjt-skills">Academic projects</Link>
                    </div>
                </div>
            </div>
        </>
    );
}