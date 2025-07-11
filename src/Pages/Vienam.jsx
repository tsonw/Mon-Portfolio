import React from "react";
import NavBar from '../Components/navBar'
import Home from "../Components/main/Home";
import About from "../Components/main/About";
import Skills from "../Components/main/Skills";
import Contact from "../Components/main/Contact";

export default function Vietnam() {

    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Contact />
        </>
    );
}