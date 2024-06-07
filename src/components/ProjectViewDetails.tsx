import React, { AnimationEventHandler, useEffect, useRef } from "react";
import * as styles from "./ProjectViewDetails.module.css";
import { Project } from "../config";

interface ProjectDetailsProps {
    project?: Project | null
    className?: string
    style?: React.CSSProperties
    onClose: () => void;
}

export default function ProjectViewDetails({project, className="", style={}, onClose}: ProjectDetailsProps) {
    const isVisible = project != null;
    
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!project) return;

        const container = containerRef.current;
        container?.classList.remove("opacity-0");
        container?.classList.remove("invisible");
        container?.classList.add("slideIn");
    }, [project]);

    const handleClose = () => {
        containerRef.current?.classList.add("slideOut");
    }

    const handleAnimEnd: AnimationEventHandler = (e) => {
        const container = e.target as HTMLDivElement;

        if (e.animationName === "slideIn") {
            container.classList.remove("slideIn");
            container.focus();
        }
        else if (e.animationName === "slideOut") {
            container.classList.remove("slideOut");
            container.classList.add("opacity-0");
            container.classList.add("invisible");

            onClose();
        }
    }

    
    const BackButton = () => (<button className={`neutral ${styles.backbutton}`} onClick={handleClose}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>)
    
    return <div 
    ref={containerRef} 
    onAnimationEnd={handleAnimEnd}
    className={`${styles.container} ${!isVisible ? "opacity-0 invisible" : ""} ${className}`} 
    style={style}>
        <div className={styles.content}>
            <div className={styles.project_details_container}>
                <div className={styles.project_info_container}>
                    <div className={styles.project_header}>
                        <p className={styles.project_category}>{project?.category}</p>
                        <h3 className={`${styles.project_title} mb-8`}>{project?.title}</h3>
                    </div>

                    <p className={styles.project_description}>
                        {project?.description || "Oops, this project has no description!"}
                    </p>
                </div>

                <div className={styles.project_view_container}>
                    {project?.link ? (
                        <>
                        <label className={styles.project_view_title}>Want to see for yourself?</label>
                        <a className={`button neutral ${styles.project_view_button}`} href={project?.link} target="_blank">
                            Open project
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        </>
                    ) : (
                        <p className={styles.invalid_link}>{"I'd let you open the project but that's not possible at the moment :("}</p>
                    )}
                </div>
            </div>

            <div className={styles.project_gallery}>
                {project?.images?.map((imageSrc, index) => (
                    <img key={index} className={styles.gallery_image} src={imageSrc} />
                ))}
            </div>
        </div>

        <BackButton />
    </div>
}