import React from "react";
import SkillCard from "../../components/SkillCard";
import Section from "../../components/Section";
import { isMobile } from "react-device-detect";
import * as styles from "./SkillsSection.module.css";


export default function SkillsSection() {
    return <Section 
     header="My skills"
     id="skills"
     className={styles.section}
     >
            <div className={`flex ${isMobile ? "flex-col" : "flex-row"} w-4/5 h-fit gap-4 mt-20`}>
                <SkillCard 
                    title="Full-stack Web Development"
                    titleIconSrc="/static/img/logo_html.png"
                    content="Experience in developing full-stack applications, primarily using ASP.NET, Next.js, Express.js and React"
                />
                <SkillCard 
                    title="Cross-platform Application Development"
                    titleIconSrc="/static/img/logo_desktop.png"
                    content="Passionate about designing applications that look beautiful while also prioritizing the user experience"
                />
                <SkillCard 
                    title="UI/UX Design"
                    titleIconSrc="/static/img/logo_figma.png"
                    content="Software should adapt to every platform - I can make that happen using Electron, .NET MAUI & Capacitor"
                />
            </div>
    </Section>
}