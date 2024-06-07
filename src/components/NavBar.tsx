import React, { MouseEventHandler, MutableRefObject, ReactElement, ReactNode, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import * as styles from "./NavBar.module.css";
import config from "../config";


interface NavBarProps {
    isAlt?: boolean
    activeSectionId?: string
}

interface NavBarLinkProps {
    sectionId: string
    isAlt?: boolean
    isHome?: boolean
    children: ReactNode
}


export default function NavBar(props: NavBarProps) {
    const activeSectionId = props?.activeSectionId;

    const links: MutableRefObject<HTMLAnchorElement>[] = [];
    const [showNavmenu, setShowNavmenu] = useState(false);

    const NavMenuButton = () => (<button onClick={() => setShowNavmenu(true)}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </button>)

    const NavBarLink = (props: NavBarLinkProps) => {
        const isActive = () => props.isHome ? !activeSectionId : activeSectionId === props.sectionId;
        const linkRef = useRef<HTMLAnchorElement>();
        links.push(linkRef as unknown as any);

        const onMouseEnter = () => {
            for (const {current} of links) {
                if (current == linkRef.current) continue;
                current.classList.add(styles.unfocused_link);
            }
        };

        const onMouseLeave = () => {
            for (const {current} of links) {
                current.classList.remove(styles.unfocused_link);
            }
        };

        const link = <a 
        className={`${styles.link} ${isActive() && styles.active_link} ${props.isAlt && styles.alt_link}`} 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        ref={linkRef} 
        href={`#${props.sectionId}`}
        >
            {props.children}
        </a>;

        return link;
    }

    if (isMobile) return (
        <nav className={styles.navbar}>
            <NavMenuButton />
            <NavLogo className="ml-10" />
            {showNavmenu && <NavMenu activeSectionId={activeSectionId} onClose={() => setShowNavmenu(false)}/>}
        </nav>
    );

    const NavLinks = ({alt=false}: {alt?: boolean}) => (
        config.NAV_LINKS.map((link, index) => (
            <NavBarLink key={index} isAlt={alt} sectionId={link.sectionId}>{link.text}</NavBarLink>
        ))   
    )
    
    if (props.isAlt) return (
        <nav className={styles.navbar_alt}>
            <NavLinks alt />
        </nav>);


    return (
    <nav className={styles.navbar}>
        <NavLogo className="ml-10" />
        <div className={styles.navbar_links_container}>
            <NavLinks />
        </div>
    </nav>)
}