import React from "react";
import Section from "../../components/Section";
import config from "../../config";
import ExperienceDropdown from "../../components/ExperienceDropdown";
import * as styles from "./ExperienceSection.module.css";


export default function ExperienceSection() {
    const experiences = config.EXPERIENCE;

    return <Section 
    header="Professional experience"
    id="experience"
    className="h-fit flex flex-col items-center pb-80 pt-20"
    >
    <div className={styles.experience_container}>
        {
        experiences.map((experience, id) => (
            <ExperienceDropdown key={id} experience={experience} />
        ))
        }
    </div>
   </Section>
}   