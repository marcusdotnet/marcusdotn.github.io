import React, { ReactNode } from "react";
import CodeSymbol from "./CodeSymbol";
import { isMobile } from "react-device-detect";

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

export function SectionHeader(props: SectionHeaderProps) {
    return <div style={props.style} className={`flex flex-row w-fit h-fit items-center text-4xl font-black ${isMobile && "text-center"} ${props?.className}`}>
        <CodeSymbol scale={70} direction="left" />
        {props?.children}
        <CodeSymbol scale={70} direction="right" />
    </div>
}

export default function Section(props: SectionProps) {
    return <section {...props}>
        {
            props?.header && (
                typeof props.header === "string"? <SectionHeader>{props.header}</SectionHeader> : props.header
            )
        }   

        {props?.children}
    </section>
}