import React from "react";
import '../../Styles/main/about.css';
import CardProfileEN from "../card-profileEN";
import TimeLineEduEN from "../time-line-eduEN";

export default function AboutEN() {

    return (
        <>
            <div className="about" id="about">
                <div className="text-about">
                    <div className="box-text">
                        <h2 className="titre">About</h2>
                        <p className="sous-titre">Second-year student in Computer Science at IUT d'Orsay</p>
                        <p className="contenu">I am originally from Vietnam and passionate about programming, particularly cybersecurity. Curious and motivated, I constantly explore new technologies to strengthen my technical skills and gain a deeper understanding of computer systems.<br/><br/>My goal is not only to advance in this demanding field but also to inspire others to discover the joy of coding. I am seeking opportunities to apply my knowledge, collaborate on real projects, and grow in a stimulating environment.</p>
                    </div>
                    <div className="card-profile-box">
                        <CardProfileEN />
                    </div>
                </div>
                <div className="button-projet">
                    <button className="pjt-per" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Contact me
                    </button>
                    <button className="pjt-rea" onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('skills');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Skills
                    </button>
                </div>
                <div className="box-text">
                    <h2 className="titre-formation">Education</h2>
                </div>
                <div className="formation">
                    <div className="education">
                        <div className="timeline">
                            <TimeLineEduEN />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}