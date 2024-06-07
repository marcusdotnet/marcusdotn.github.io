import { ReactNode } from "react";
import placeholderImg from "./images/placeholder.png";

import superPumpkin1 from "./images/projects/sp_1.png";
import superPumpkin2 from "./images/projects/sp_2.png";
import superPumpkin3 from "./images/projects/sp_3.png";
import superPumpkin4 from "./images/projects/sp_4.png";

import tthkApi1 from "./images/projects/tthkapi_1.png";
import tthkApi2 from "./images/projects/tthkapi_2.png";
import tthkApi3 from "./images/projects/tthkapi_3.png";

import htmlLogo from "./images/logo_html.png";
import desktopLogo from "./images/logo_desktop.png";
import figmaLogo from "./images/logo_figma.png";


const config: {
    NAV_LINKS: NavLink[]
    PROJECTS: Project[]
    SKILLS: Skill[]
    EXPERIENCE: Experience[]
    PLACEHOLDER_IMG: string
} = {
    NAV_LINKS: [
        {
            text: "home",
            sectionId: "intro",
            isDefault: true
        },
        {
            text: "skills",
            sectionId: "skills"
        },
        {
            text: "projects",
            sectionId: "projects"
        },
        {
            text: "experience",
            sectionId: "experience"
        },
        {
            text: "contact",
            sectionId: "contact"
        }
    ],
    PROJECTS: [
        {
            title: "Super Pumpkin",
            category: "Games",
            link: "https://makud3v.itch.io/super-pumpkin",
            description: `Super Pumpkin is a game written entirely in Lua, using the LÖVE framework. The game obviously took some inspiration from Super Mario but every piece of content for the game was created from scratch, to have just a little bit of originality.
            Honestly it's just some mess I cooked up for TTHK's first Game Jam event and I had fun making it, even if I could've done it way better now that I think about it.`,
            images: [superPumpkin1, superPumpkin2, superPumpkin3, superPumpkin4]
        },
        {
            title: "TTHK Timetable API",
            category: "Web Development",
            link: "https://github.com/marcusdotn/tthk-api",
            description: `This is the unofficial, open source API to retrieve public timetable related information for Tallinn Industrial Education Center.
            Timetable data is fetched from EduPage's public endpoints at configurable intervals and interpreted to make it easier to work with without being authenticated.`,
            images: [tthkApi1, tthkApi2, tthkApi3]
        }
    ],
    SKILLS: [
        {
            title: "Full-stack Web Development",
            titleIconSrc: htmlLogo,
            content: "Experience in developing full-stack applications, primarily using ASP.NET, Next.js, Express.js and React"
        },
        {
            title: "Cross-platform Application Development",
            titleIconSrc: desktopLogo,
            content: "Software should adapt to every platform - I can make that happen using Electron, .NET MAUI & Capacitor"
        },
        {
            title: "UI/UX Design",
            titleIconSrc: figmaLogo,
            content: "Passionate about designing applications that look beautiful while also prioritizing the user experience"
        }
    ],
    EXPERIENCE: [
        {
            title: "Junior Software Developer @ Tallinn Industrial Education Center",
            start: "2022",
            end: "present",
            description: "Student at Tallinn Industrial Education Center, developing both desktop- as well as web applications.",
            skills: ["Python", "JavaScript", ".NET", "PHP"]
        },
        {
            title: "More to come",
            start: "2004",
            end: "present",
            description: "My journey into the world of computer science has only just begun! I'll be sharing my experiences with you here :)",
            skills: ["Life"],
            isAlt: true
        }     
    ],
    PLACEHOLDER_IMG: placeholderImg
}


export interface Project {
    title: string
    category: string
    description?: string
    link?: string
    images: string[]
}

export interface Experience {
    title: string
    start: string
    end: string
    description?: string
    skills: string[]
    isAlt?: boolean
}

export interface Skill {
    title: string
    titleIconSrc: string
    content: string
}

export interface NavLink {
    text: string
    sectionId: string
    isDefault?: boolean
}



export default config;