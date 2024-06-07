import React from "react";
import * as styles from "./SkillCard.module.css";

interface SkillCardProps {
    TitleIconSrc: string;
    Title: string;
    Content: string;
    className?: string
    style?: React.CSSProperties
}

export default function SkillCard({TitleIconSrc, Title, Content, className="", style={}}: SkillCardProps) {
    return <div 
    className={`${styles.skillcard} ${className}`}
    style={style}
    >
        <h2>
            <img src={TitleIconSrc} alt={Title} className={styles.titleicon} />
            {Title}
        </h2>
        <p>
            {Content}
        </p>
    </div>
}