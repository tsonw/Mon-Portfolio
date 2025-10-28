import React from "react";
import { Link } from "react-router-dom";
import arrowDown from '../../assets/icon/angle-down.svg';
import '../../Styles/navBar/btn-langue.css';

export default function BtnLangueEN() {
    
    function toggleLangue() {
        const btnLangue = document.getElementById("btn-langue");
        const btnLangueContent = document.getElementById("btn-langue-content");
        
        if (btnLangueContent.style.display === "block") {
            btnLangueContent.style.display = "none";
            btnLangue.style.backgroundColor = "#ffffff"
        } else {
            btnLangueContent.style.display = "block";
            btnLangue.style.backgroundColor = "#DEF246";
            btnLangue.style.border = "#000000 solid 1px";
        }
    }

    window.onclick = function(event) {
        const btnLangue = document.getElementById("btn-langue");

        if (!event.target.matches('.btn-langue')) {
            var dropdowns = document.getElementsByClassName("btn-langue-content");
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = "none";
            }
            btnLangue.style.backgroundColor = "#ffffff";
            btnLangue.style.border = "#000000 solid 0px";
        }
    }
    
    return (
        <>
            <div>
                <div className="button-langue">
                    <button onClick={toggleLangue} className="btn-langue" id="btn-langue">
                        Language 
                    </button>
                    <div className="btn-langue-content" id="btn-langue-content">
                        <ul>
                            <li><Link to="/">français</Link></li>    
                            <li><Link to="/english">anglais</Link></li>    
                            <li><Link to="/vietnam">vietnamien</Link></li>    
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

/*
const list = ["Pizza", "Burger", "Sushi"];

function MyList() {
    return (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
}
*/