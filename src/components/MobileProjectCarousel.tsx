import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import * as styles from "./MobileProjectCarousel.module.css";
import CarouselContext from "../contexts/CarouselContext";
import React from "react";

interface MobileProjectCarouselProps {
    children: ReactNode
}

export default function MobileProjectCarousel({children}: MobileProjectCarouselProps) {
    if (!children) return null;

    const containerRef = useRef<HTMLDivElement>(null);
    var scrollX = 0;

    const [showRightButton, setShowRightButton] = useState(false);
    const [showLeftButton, setShowLeftButton] = useState(false);
    
    const scroll = (direction: "left" | "right") => {
        const projectContainer = containerRef.current as unknown as HTMLDivElement;
        var scrollAmount = projectContainer.scrollWidth * 0.25;
        
        if (direction === "left") {
            scrollAmount = -scrollAmount;
        }

        projectContainer.scrollBy({top: 0, left: scrollAmount, behavior: "smooth"});
    }

    useEffect(() => {
        const projectContainer = containerRef.current as HTMLDivElement;

        setShowRightButton(projectContainer.scrollWidth > document.body.clientWidth);
    }, [children]);



    return <div className={`${styles.project_carousel} ${styles.carousel_btn_left}`} onScrollCapture={e => {
        const projectContainer = containerRef.current as unknown as HTMLDivElement;
        scrollX = projectContainer.scrollLeft;

        if (scrollX + projectContainer.clientWidth < projectContainer.scrollWidth) {
            setShowRightButton(true);
        }
        else if (setShowRightButton) {
            setShowRightButton(false);
        }

        if (scrollX > 0) {
            setShowLeftButton(true);
        } 
        else if (showLeftButton) {
            setShowLeftButton(false);
        }
    }}>
        {showLeftButton && (
            <button
            className={styles.carousel_btn}
            onClick={() => scroll("left")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
        )}

        <div ref={containerRef} className={styles.project_container} style={{
            scrollbarWidth: "none"
        }}>
            {children}
        </div>

        {showRightButton && (
            <button 
            className={`${styles.carousel_btn} ${styles.carousel_btn_right}`}
            onClick={() => scroll("right")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        )}
    </div>
}