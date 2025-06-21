import React from "react";
import { HeroSection } from "../../organisms/HeroSection/HeroSection";
import { AboutSection } from "../../organisms/AboutSection/AboutSection";
import { SkillsSection } from "../../organisms/SkillsSection/SkillsSection";
import { ProjectsSection } from "../../organisms/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "../../organisms/TestimonialsSection/TestimonialsSection";
import { FooterSection } from "../../organisms/FooterSection/FooterSection";
import { usePortfolio } from "../../../hooks/usePortfolio";

export const PortfolioTemplate = () => {
  const {
    personalInfo,
    navigationItems,
    skills,
    projects,
    testimonials,
    socialLinks,
    designerRoles,
  } = usePortfolio();

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#f6f6f6] min-h-screen">
      <div className="flex flex-col w-full max-w-[1440px] items-center justify-center">
        <HeroSection
          personalInfo={personalInfo}
          navigationItems={navigationItems}
          designerRoles={designerRoles}
        />
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] space-y-8 sm:space-y-12 md:space-y-16">
          <AboutSection personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <TestimonialsSection testimonials={testimonials} />
          <FooterSection socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
};
