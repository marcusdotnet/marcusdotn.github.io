import React from "react"

interface GradientDividerProps {
    startColor: string
    endColor: string
    start: string
    end: string
    className?: string
    style?: React.CSSProperties
}

export default function GradientDivider(props: GradientDividerProps) {
    return <div className={`w-full ${props?.className ? props.className : ""}`} style={{
        background: `linear-gradient(180deg, ${props.startColor} ${props.start}, ${props.endColor} ${props.end})`,
        ...props?.style
    }}/>
}