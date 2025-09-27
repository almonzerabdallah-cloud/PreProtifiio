import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display">About <span className="text-accent">Me</span></h2>
      </div>
      <div className="max-w-4xl text-left md:text-center text-lg text-text-secondary space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a full-stack developer with a passion for creating beautiful and functional web applications. My journey into tech began with a curiosity for how things work, and it has evolved into a career where I get to build them. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong affinity for modern, clean design using tools like Tailwind CSS and Framer Motion.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Beyond web development, I'm deeply interested in the world of Artificial Intelligence and Machine Learning. This led me to conduct research that was ultimately published in a Scopus-indexed journal. I enjoy the challenge of working with data, training models, and exploring how AI can solve real-world problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I consider myself an expert in prompt engineering, mastering the art of communicating with Large Language Models to get precise and creative outputs. Whether I'm "vibe coding" a new feature or diving deep into a dataset, I bring a blend of technical expertise and creative problem-solving to every project.
        </motion.p>
      </div>
    </AnimatedSection>
  );
};

export default About;
