import React from "react";
import '../Styles/card-profile/card-profile.css';
import profilePic from '../assets/profile-avatar.jpg';

export default function CardProfileEN() {
    return (
        <>
            <div className="card-profile" style={{ backgroundImage: `url(${profilePic})`}}>
                <div className="text-card-profile">
                    <h2 className="name">Hoang Thai Son</h2>
                    <p className="sous-titre">Second-year student at IUT d’Orsay</p>
                    <p className="descript">Path B: Deployment of Secure and Communicative Applications</p>
                </div>
            </div>
        </>
    );
}