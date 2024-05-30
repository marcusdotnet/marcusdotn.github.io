import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import IntroSection from "./sections/IntroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import { useRef, useEffect } from "react";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import GradientDivider from "../components/GradientDivider";

export const Head: HeadFC = () => <title>{"< my portfolio />"}</title>;

export default function IndexPage() {
  const indexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      let closestSectionId: string | null = null;
      let closestRatio: number | null = null;

      Array.from(target.children).forEach((child) => {
        if (!(child instanceof HTMLElement) || child.tagName.toLowerCase() !== "section") return;
        const section = child as HTMLElement;
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const viewportHeight = window.innerHeight;

        const middleOfViewport = viewportHeight / 2;
        const sectionMiddle = sectionTop + sectionHeight / 2;

        const difference = Math.abs(middleOfViewport - sectionMiddle);

        const ratio = difference / sectionHeight;
        if (ratio < (closestRatio || Infinity)) {
          closestRatio = ratio;
          closestSectionId = section.id;
        }
      });

      indexRef.current?.setAttribute("section", closestSectionId || "intro");
    };

    indexRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      indexRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      ref={indexRef}
      id="page-container"
      className="absolute top-0 left-0 w-full h-screen overflow-y-scroll overflow-x-hidden"
      style={{
        backgroundColor: "var(--background-color)",
      }}
    >
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <GradientDivider start="6%" end="30%" startColor="var(--background-color)" endColor="black" className="h-1/3" />
      <ContactSection />
    </main>
  );
}
