import React from "react";
import CodeSymbol from "../../components/CodeSymbol";
import Button from "../../components/Button";
import Section, { SectionHeader } from "../../components/Section";

export default function IntroSection() {
    return <Section 
    id="intro" 
    className="h-screen flex flex-col"
    header={<SectionHeader className="font-black text-4xl text-nowrap self-center mt-80">Hi, <br/>I'm marcus</SectionHeader>}
    style={{
        background: `linear-gradient(180deg, #241F35 6%, var(--background-color) 80%)`
    }}
    >
        <div className="flex flex-col gap-7 self-center mt-10 items-center text-center">

            <p>full-stack developer, app dev & game enthusiast</p>

            <Button className="mt-16" BtnType="transparentWhiteborder" GotoSectionId="skills">GET TO KNOW ME</Button>
        </div>
    </Section> 
}