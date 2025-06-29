import { HeroSection } from "../../organisms/HeroSection/HeroSection";
import { AboutSection } from "../../organisms/AboutSection/AboutSection";
import { SkillsSection } from "../../organisms/SkillsSection/SkillsSection";
import { ProjectsSection } from "../../organisms/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "../../organisms/TestimonialsSection/TestimonialsSection";
import { FooterSection } from "../../organisms/FooterSection/FooterSection";
import { usePortfolio } from "../../../hooks/usePortfolio";
import { Ticker } from "../../molecules/Ticker/Ticker";

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
      <div className="flex flex-col w-full items-center justify-center">
        <HeroSection
          personalInfo={personalInfo}
          navigationItems={navigationItems}
        />
      </div>
      <Ticker items={designerRoles} />
      <div className="flex flex-col w-full  items-center justify-center">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] space-y-16 sm:space-y-24 md:space-y-32">
          <AboutSection personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </div>
      <FooterSection socialLinks={socialLinks} />
    </div>
  );
};
