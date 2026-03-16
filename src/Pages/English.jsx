import React from "react";
import NavBarEN from '../Components/english/componentsEN/navBarEN'
import HomeEN from "../Components/english/HomeEN";
import AboutEN from "../Components/english/AboutEN";
import SkillsEN from "../Components/english/SkillsEN";
import ContactEN from "../Components/english/ContactEN";
import FormationEN from "../Components/english/FormationEN";
import ProjectsEN from "../Components/english/ProjectsEN"

export default function English() {

    return (
        <>
            <NavBarEN />
            <HomeEN />
            <AboutEN />
            <FormationEN />
            <SkillsEN />
            <ProjectsEN />
        </>
    );
}