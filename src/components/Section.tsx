import React, { ReactNode } from "react";
import CodeSymbol from "./CodeSymbol";
import * as styles from "./Section.module.css";

interface SectionProps {
    id: string
    children?: React.ReactNode
    header?: ReactNode | string
    className?: string
    style?: React.CSSProperties
}


interface SectionHeaderProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export function SectionHeader({className="", style={}, children}: SectionHeaderProps) {
    return <div style={style} className={`${styles.section_header} ${className}`}>
        <CodeSymbol scale={70} direction="left" />
        {children}
        <CodeSymbol scale={70} direction="right" />
    </div>
}

export default function Section(props: SectionProps) {
    return <section {...props} 
    className={`${styles.section} ${props?.className ? props.className : ""}`}
    >
        {
            props?.header && (
                typeof props.header === "string"? <SectionHeader>{props.header}</SectionHeader> : props.header
            )
        }   

        {props?.children}
    </section>
}