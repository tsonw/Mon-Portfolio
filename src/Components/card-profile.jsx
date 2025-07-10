import React from "react";
import '../Styles/card-profile/card-profile.css';
import profilePic from '../assets/profile-avatar.jpg';

export default function CardProfile() {
    return (
        <>
            <div className="card-profile" style={{ backgroundImage: `url(${profilePic})`}}>
                <div className="text-card-profile">
                    <h2 className="name">Hoang Thai Son</h2>
                    <p className="sous-titre">Étudiant en 2ᵉ année à l’IUT d’Orsay</p>
                    <p className="descript">Parcours B : Déploiement d'applications communicantes et sécurisées.</p>
                </div>
            </div>
        </>
    );
}