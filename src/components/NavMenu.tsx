import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import * as styles from "./NavMenu.module.css";
import NavLogo from "./NavLogo";
import config from "../config";


interface NavMenuLinkProps {
    sectionId: string
    children: React.ReactNode
    isHome?: boolean
    isActive?: boolean
}

export interface NavMenuProps {
    onClose: Function
    activeSectionId?: string
}

export default function NavMenu({onClose, activeSectionId}: NavMenuProps) {
    const CloseButton = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        const _props = {};
        Object.assign(_props, props); 
        Object.assign(_props, {
            className: `${styles?.navmenuclosebtn}  ${props?.className}`
        });


        return <button {..._props} onClick={() => onClose()}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    };

    const NavMenuLink = (props: NavMenuLinkProps) => {
        return <li className={`${styles.navmenulink} ${props?.isActive && styles.active}`}>
        <a href={`#${props.sectionId}`} onClick={() => onClose()}>
            - {props.children}
        </a>
    </li>
    }

    return <div className={styles.navmenu}>
        <div className="w-full h-fit flex flex-row gap-12 items-center">
            <CloseButton className="ml-6 mt-4" />
            <NavLogo />
        </div>
        <ul className="flex flex-col w-full h-fit mt-20 ml-4">
            {config.NAV_LINKS.map(link => (
            <NavMenuLink isActive={activeSectionId === link.sectionId} sectionId={link.sectionId}>{link.text}</NavMenuLink>
        ) )}
        </ul>

        <div className="absolute bottom-0 mb-10 flex flex-col text-center items-center gap-3 text-gray-300 w-full h-fit">
            <p>
                Made with passion by Marcus & <br/>
                Moonglade Art Studio
            </p>

            <a href="https://www.instagram.com/moon_glade_art_studio/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
}