import React from "react";
import * as styles from "./SkillCard.module.css";

interface SkillCardProps extends React.HtmlHTMLAttributes<HTMLElement> {
    titleIconSrc: string;
    title: string;
    content: string;
}

export default function SkillCard(props: SkillCardProps) {
    return <div {...props} className={`${styles.skillcard} ${props.className != undefined ? props.className : ""}`}>
        <h2>
            <img src={props.titleIconSrc} alt={props.title} className={styles.titleicon} />
            {props.title}
        </h2>
        <p>
            {props.content}
        </p>
    </div>
}