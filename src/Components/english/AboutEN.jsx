import React from "react";
import '../../Styles/main/aboutEN.css';
import CardProfile from "../card-profile";
import TimeLineEdu from "../time-line-edu";
import photo from "../../assets/about-brg.png"
import logo from "../../assets/logo.png"

export default function AboutEN() {

    return (
        <>
            <div className="about" id="about">
                <h1 className="about_titre">About.</h1>
                <div className="about_content">
                    <div className="about_content_text">
                        <div className="about_content_text_photo_box">
                            <img src={photo} alt="photo" className="about_content_text_photo_img" draggable="false" />
                            <div className="about_content_text_photo_box_shadow"></div>
                        </div>
                        <p className="about_content_text_content"><strong>2nd-Year Computer Science Student (IUT d’Orsay),</strong> <br/>
                        <strong>Seeking an internship in software development.</strong><br/>Originally from Vietnam, I am passionate about cybersecurity: I enjoy understanding how systems operate, identifying vulnerabilities, and learning how to secure them. My long-term goal is to transition into a backend role, building reliable, high-performance, and secure services. This internship is an opportunity for me to apply my skills, learn from a professional team, and strengthen my expertise through hands-on projects.</p>
                    </div>
                </div>
            </div>
        </>
    );
}