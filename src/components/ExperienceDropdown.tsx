import React from "react";
import { useState } from "react";
import { Experience } from "../config";
import * as styles from "./ExperienceDropdown.module.css";
import { isAbsolute } from "path";
import { isMobile } from "react-device-detect";


interface ExperienceDropdownProps {
    experience: Experience
    defaultExpanded?: boolean
    onToggle?: (isExpanded: boolean) => void
}


const ExpandedIndicator = ({isExpanded}: {isExpanded: boolean}) => (
    isExpanded ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#F1F1F1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
    : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="#F1F1F1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12H19" stroke="#F1F1F1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
)


export default function ExperienceDropdown({experience, defaultExpanded=false, onToggle}: ExperienceDropdownProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const isAlt = experience.isAlt;

    const doToggle = () => {
        setIsExpanded(!isExpanded);
        onToggle && onToggle(isExpanded);
    }

    return <div className={`${styles.container}`}>
        <button 
        className={`${styles.button} ${isAlt ? styles.button_alt : ""}`} 
        onClick={doToggle}>
            {isMobile ? (
                <div className={styles.mobile_wrapper}>
                    <div className={styles.mobile_title}>
                        <span className={styles.title}>{experience.title}</span>
                        <span className={styles.datespan}>{experience.start} - {experience.end}</span>
                    </div>

                    <span className={styles.mobile_expanded_indicator}>
                        <ExpandedIndicator isExpanded={isExpanded} />
                    </span>
                </div>
            ) : (
                <>
                    <p className={styles.title}>
                        {experience.title}
                    </p>
                    <div className={styles.status}>
                        <span>{experience.start} - {experience.end}</span>
                        <ExpandedIndicator isExpanded={isExpanded} />
                    </div>
                </>
            )}
        </button>

        <div 
        className={`${styles.content} ${isAlt ? styles.content_alt : ""} ${isExpanded ? "h-fit p-4" : "h-0 p-0 visible"}`}
        >
            <p className={styles.description}>{experience.description}</p>

            <div className={styles.skills_container}>
                {experience.skills.map((skill, id) => (
                    <span key={id} className={`${styles.skill} ${isAlt ? styles.skill_alt : ""}`}>{skill}</span>
                ))}
            </div>
        </div>
    </div>
}