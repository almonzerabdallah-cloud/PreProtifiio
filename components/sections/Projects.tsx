import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { PROJECTS } from '../../constants';
import type { Project } from '../../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <AnimatedSection id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display">My <span className="text-accent">Projects</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Here are some of the projects I've worked on, showcasing my skills and passion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </AnimatedSection>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
