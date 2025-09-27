import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import SkillCard from '../ui/SkillCard';
import { SKILLS } from '../../constants';

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display">My <span className="text-accent">Skills</span></h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          A collection of technologies I'm proficient in, from frontend to backend and beyond.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
