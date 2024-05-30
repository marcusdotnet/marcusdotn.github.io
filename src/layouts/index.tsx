import NavBar from "../components/NavBar";
import React, { createContext, useEffect, useState } from "react";



export const SectionContext = createContext("intro");


interface LayoutProps {
    children?: React.ReactElement
}

export default function Layout({ children }: LayoutProps) {
    const [activeSectionId, setActiveSectionId] = useState("intro");

    useEffect(() => {
        const index = document.getElementById("page-container");

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes") {
                    setActiveSectionId(index.getAttribute("section") as string);
                }
            });
        })

        observer.observe(index as Node, {
            attributes: true,
            attributeFilter: ["section"]
        });
    }, []);

    return <div className="top-0 left-0 fixed w-full h-full">
        {children}
        <NavBar isAlt={activeSectionId != "intro"} activeSectionId={activeSectionId} />
    </div>
}