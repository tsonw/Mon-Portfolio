import React from "react";
import '../../Styles/main/skills.css';
import CardSkillEN from "./componentsEN/card-skillEN";

export default function SkillsEN() {

    return (
        <>
            <div className="panel-skill" id="skills">
                <div className="skills">
                    <div className="box_text_skills">
                        <h2 className="titre_skill">Skills.</h2>
                    </div>
                    <div className="skills_box">
                        <CardSkillEN />
                    </div>
                </div>
            </div>
        </>
    );
}