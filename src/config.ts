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

export interface NavLink {
    text: string
    sectionId: string
    isDefault?: boolean
}

interface Config {
    NAV_LINKS: NavLink[]
    PROJECTS: Project[]
    EXPERIENCE: Experience[]
}

const config: Config = {
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
            title: "Project A",
            category: "Web Development",
            images: []
        },
        {
            title: "Project B",
            category: "Web Development",
            images: []
        },
        {
            title: "Project C",
            category: "Web Development",
            images: []
        },
        {
            title: "Project D",
            category: "Web Development",
            images: []
        },
        {
            title: "Project E",
            category: "Games",
            link: "https://google.com",
            description: "ksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q qksadqidqw qwkd jqw idq dqlwk dqwlk q q",
            images: ["/static/img/placeholder.jpeg", "/static/img/placeholder.jpeg", "/static/img/placeholder.jpeg"]
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
    ]
}

export default config;