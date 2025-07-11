import React from "react";
import NavBar from '../Components/navBar'
import HomeEN from "../Components/english/HomeEN";
import AboutEN from "../Components/english/AboutEN";
import SkillsEN from "../Components/english/SkillsEN";
import ContactEN from "../Components/english/ContactEN";

export default function English() {

    return (
        <>
            <NavBar />
            <HomeEN />
            <AboutEN />
            <SkillsEN />
            <ContactEN />
        </>
    );
}