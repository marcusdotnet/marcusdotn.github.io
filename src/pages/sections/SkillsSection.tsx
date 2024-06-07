import React from "react";
import SkillCard from "../../components/SkillCard";
import Section from "../../components/Section";
import * as styles from "./SkillsSection.module.css";


import codeBackground from "../../images/background_code.png";
import config from "../../config";


export default function SkillsSection() {
    return <Section 
     header="My skills"
     id="skills"
     className={styles.section}
     >
        <div className={styles.skills_container}>
            {config.SKILLS.map((skill, index) => (
                <SkillCard
                Title={skill.title}
                TitleIconSrc={skill.titleIconSrc}
                Content={skill.content}
                key={index}
                />
            ))}
        </div>

        <div className={styles.code_background}>
            <img src={codeBackground} alt="Code background" className={styles.code_background_img} />
            <div className={styles.code_background_overlay} />
        </div>
    </Section>
}