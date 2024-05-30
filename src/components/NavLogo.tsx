import React from "react"

    interface NavLogoProps {
        className?: string
    }

    export default function NavLogo({className}: NavLogoProps) {
        return <label className={`font-semibold text-white tracking-widest mono text-xl ${className}`}>
            marcus.<span className="text-purple-500">n</span>
        </label>
    }