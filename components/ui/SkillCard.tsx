import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


// FIX: Removed unused Tilt component, its fallback, and Node-specific `require.resolve` logic
// that caused TypeScript errors in a browser environment. The component now uses the intended
// implementation with Framer Motion and CSS for a 3D effect on hover.
const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  // A simple way to provide a 3D-like effect without the library
  return (
     <motion.div 
        className="bg-primary p-6 rounded-2xl border border-gray-800 h-full flex flex-col justify-center items-center transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent transform hover:-translate-y-2"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        style={{ perspective: '1000px' }}
      >
        <div className="transform-style-3d group">
           <div className="transition-transform duration-500 group-hover:rotate-y-15">
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-text-primary">{skill.name}</p>
           </div>
        </div>
      </motion.div>
  );
};


export default SkillCard;