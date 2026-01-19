import React from "react";
import NavBar from '../Components/navBar'
import Home from "../Components/main/Home";
import About from "../Components/main/About";
import Skills from "../Components/main/Skills";
import Contact from "../Components/main/Contact";
import Formation from '../Components/main/Formation';
import Projet from "../Components/main/Projet";

export default function Francais() {

    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Formation />
            <Skills />
            <Projet />
            <Contact />
        </>
    );
}