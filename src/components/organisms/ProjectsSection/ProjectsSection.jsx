import React from 'react';
import { Button } from '../../ui/button';
import { Text } from '../../atoms/Text/Text';
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard';

export const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 relative self-stretch w-full">
      <div className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full">
        <Text variant="h2" color="primary" align="center" className="self-stretch">
          Projects
        </Text>

        <Text variant="body" color="secondary" align="center" className="w-full max-w-[782px] px-4">
          A selection of my projects, where I turn ideas into seamless,
          user-friendly digital experiences.
        </Text>
      </div>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 w-full max-w-[1200px]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Button className="w-full max-w-[400px] h-12 sm:h-14 md:h-16 bg-[#3d46c9] rounded-[999px] hover:bg-[#3d46c9]/90 transition-colors">
        <span className="flex-1 text-lg sm:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-center tracking-[0] leading-[normal]">
          Explore More
        </span>
      </Button>
    </section>
  );
};