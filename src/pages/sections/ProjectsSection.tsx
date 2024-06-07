import React, { useContext, useEffect, useState } from "react";
import {Button} from "../../components/Button";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import config, { Project } from "../../config";
import ProjectViewDetails from "../../components/ProjectViewDetails";
import * as styles from "./ProjectsSection.module.css";
import { isMobile } from "react-device-detect";
import MobileProjectCarousel from "../../components/MobileProjectCarousel";


interface FilterButtonProps {
    children?: React.ReactNode;
    category?: string | null
}


export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<string | null | undefined>(null);
    const [isExpanded, setIsExpanded] = useState(isMobile);
    const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

    const projects = config.PROJECTS;
    const categories = [...new Set(projects.map(section => section.category))];

    const CategoryFilterButton = ({children, category}: FilterButtonProps) => (
        <button className={activeCategory === category ? "text-purple-500" : ""} onClick={() => setActiveCategory(category)}>
            {children || category} ({projects.filter(section => section.category === category)?.length || projects.length})
        </button>
    )


    const categoryProjects = activeCategory != null ? projects.filter(project => project.category === activeCategory) : projects;
    const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
    
    useEffect(() => {
        setVisibleProjects(isExpanded ? categoryProjects : categoryProjects.filter((_, index) => index < 3));
    }, [isExpanded, activeCategory]);

    const RenderedProjects = () => (
        visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => setActiveProjectId(index)} />
        ))
    );



    return <Section 
        header="My projects"
        id="projects"
        className="h-fit flex flex-col items-center pb-80 pt-20"
        >
        <div className={styles.filter_container}>
            <label className={styles.filter_by}>Filter by</label>

            <div className={styles.filter_options_container}>
                <CategoryFilterButton category={null}>All</CategoryFilterButton>
                {categories.map(category => (
                    <CategoryFilterButton key={category} category={category} />
                ))}
            </div>
        </div>
        
        {isMobile ? (
            <MobileProjectCarousel>
                <RenderedProjects />
            </MobileProjectCarousel>
        ) : (
            <div className={styles.project_container} style={{maxHeight: "55em"}}>
                <RenderedProjects />
            </div>
        )}

        {!isMobile && categoryProjects.length > 3 && (
            !isExpanded ? 
            (
            <Button BtnType="filledPrimary" onClick={() => setIsExpanded(true)}>SHOW MORE</Button>
            ) :
            (
            <Button BtnType="transparentWhiteborder" onClick={() => setIsExpanded(false)}>SHOW LESS</Button>
            )
        )}



        <ProjectViewDetails 
        project={activeProjectId != null ? projects[activeProjectId] : null} 
        onClose={() => {
            setActiveProjectId(null);
            setVisibleProjects([...visibleProjects]);
        }} />
    </Section>
}   