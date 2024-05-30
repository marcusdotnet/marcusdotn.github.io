import React from "react";

interface CodeSymbolProps {
    direction: "left" | "right"
    scale?: number
}

export default function CodeSymbol({direction, scale=100}: CodeSymbolProps) {
    if (direction === "left") return (
        <svg style={{scale: `${scale}%`}} width="72" height="138" viewBox="0 0 72 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67 5L3 69L67 133" stroke="white" strokeOpacity="0.6" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    );
    else if (direction === "right") return (
        <svg style={{scale: `${scale}%`}} width="72" height="138" viewBox="0 0 72 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 133L69 69L5 5" stroke="white" strokeOpacity="0.6" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    );
}