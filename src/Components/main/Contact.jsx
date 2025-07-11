import React from "react";
import '../../Styles/main/contact.css';

import iconPhone from '../../assets/icon/telephone.gif';
import iconMail from '../../assets/icon/message.gif';

import iconGithub from '../../assets/icon/skill/github.png';
import iconIns from '../../assets/icon/instagram.png';
import iconThreads from '../../assets/icon/threads.png';
import iconFb from '../../assets/icon/facebook.png';
import iconlinkedin from '../../assets/icon/linkedin.png';

const listInfos = [
    { 
        id: 1, 
        icon: iconPhone,
        info: "+33 7 51 30 69 89"
    },
    { 
        id: 2, 
        icon: iconMail,
        info: "hoangthaison05dhp@gmail.com"
    }
];

const listSocialMedia = [
    {id: 1, icon: iconGithub, link: "https://github.com/tsonw"},
    {id: 2, icon: iconIns, link: "https://www.instagram.com/tsonw_19/"},
    {id: 3, icon: iconThreads, link: "https://www.threads.net/@tsonw_19?xmt=AQGzCM9Lsu-MWXqbsco2sAvhR4E-3hbWLbdd-sXhVRA15X4"},
    {id: 4, icon: iconFb, link: "https://www.facebook.com/bibeeus"},
    {id: 5, icon: iconlinkedin, link: "https://www.linkedin.com/in/thai-son-hoang-648423332/"},
]


export default function Contact() {

    return (
        <>
            <div className="panel-contact" id="contact">    
                <div className="contact">
                    <h2 className="titre-contact">Contact</h2>
                    <div className="contact-info-box">
                        {listInfos.map((item) => (
                            <div className="box-contact-info">
                                <li key={item.id} className="info-box-content">
                                    <div className="icon-contact-info-box">
                                        <img src={item.icon} className="icon-contact-info-content" alt="Phone" />
                                    </div>
                                    <h2 className="text-contact-info-content">{item.info}</h2>
                                </li>
                            </div>
                        ))}
                    </div>
                    <div className="social-media">
                        {listSocialMedia.map((item) => (
                            <div className="box-social-icon">
                                <li key={item.id} className="icon-social">
                                    <a href={item.link} className="icon-social-link">
                                        <img src={item.icon} className="icon-social-content" alt="Phone" />
                                    </a>
                                </li>
                            </div>
                        ))}
                    </div>
                    <div class="table">
                        
                    </div>
                </div>
            </div>
        </>
    );
}