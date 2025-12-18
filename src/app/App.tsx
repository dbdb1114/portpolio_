import { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectSection } from "./components/ProjectSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const handleNavigate = (index: number) => {
    setCurrentSection(index);
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll" ref={containerRef}>
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      
      <div ref={(el) => el && (sectionsRef.current[0] = el)}>
        <AboutSection />
      </div>
      
      <div ref={(el) => el && (sectionsRef.current[1] = el)}>
        <SkillsSection />
      </div>
      
      <div ref={(el) => el && (sectionsRef.current[2] = el)}>
        <ExperienceSection />
      </div>
      
      <div ref={(el) => el && (sectionsRef.current[3] = el)}>
        <ProjectSection />
      </div>
      
      <div ref={(el) => el && (sectionsRef.current[4] = el)}>
        <EducationSection />
      </div>
      
      <div ref={(el) => el && (sectionsRef.current[5] = el)}>
        <ContactSection />
      </div>
    </div>
  );
}