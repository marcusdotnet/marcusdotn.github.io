import React, { ReactNode } from "react";


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    BtnType: "transparentWhiteborder" | "filledPrimary" | "neutral"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    GotoSectionId?: string
    className?: string
    style?: React.CSSProperties
    children?: ReactNode
}

export default function Button({BtnType, onClick, GotoSectionId, className="", style={}, children}: ButtonProps) {
    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (GotoSectionId)
            window.location.hash = GotoSectionId;

        if (onClick)
            onClick(e);
    };
    
    return <button 
    className={`${BtnType} button ${className}`}
    onClick={clickHandler}
    style={style}
    >
        {children}
    </button>
}