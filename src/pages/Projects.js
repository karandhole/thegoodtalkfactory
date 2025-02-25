import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectOne from '../components/project/ProjectOne';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const Projects = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Our Projects"
                currentPage="Projects" 
            />
            <ProjectOne />
            <FooterTwo />
        </>
    )
}

export default Projects;