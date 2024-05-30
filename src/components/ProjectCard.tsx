import React from "react";
import * as styles from "./ProjectCard.module.css";
import { Project } from "../config";
import { isMobile } from "react-device-detect";

interface ProjectCardProps {
    project: Project
    onClick?: () => void;
}

export default function ProjectCard({project, onClick}: ProjectCardProps) {
    const imageSources = project.images;
    const thumbnailSrc = imageSources.length != 0 ? imageSources[0] : "/static/img/placeholder.jpeg";

    return <div className={styles.projectcard} onClick={onClick}>
        <img className={styles.projectcard_image} src={thumbnailSrc} alt="Project card image" /> 
        <div className={styles.projectcard_title_container} >
            <label className={styles.projectcard_title}>{project.title}</label>
            <label className={styles.projectcard_category}>{project.category}</label>
        </div>
    </div>
}