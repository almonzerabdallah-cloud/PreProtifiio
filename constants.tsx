import React from 'react';
import type { Project, Skill } from './types';

// Using inline SVGs for icons to avoid extra dependencies
// FIX: Changed 'path' parameter type from 'string' to 'React.ReactNode' to allow JSX elements.
const createSvgIcon = (path: React.ReactNode) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-accent"
  >
    {path}
  </svg>
);

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: createSvgIcon(<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />) },
  { name: 'CSS3', icon: createSvgIcon(<><path d="m14 12-2 2 2 2" /><path d="M10 12H8" /><path d="m16 6-4 14" /><path d="M22 12h-2" /></>) },
  { name: 'JavaScript', icon: createSvgIcon(<><path d="M10 20v-6l-4 4l-4-4v6" /><path d="M22 14v6" /><path d="m18 14 4 4" /><path d="m18 20 4-4" /><path d="M12 20h.01" /></>) },
  { name: 'TypeScript', icon: createSvgIcon(<><path d="M12 20h.01" /><path d="M4 4l8 8" /><path d="m14 6-4 4" /><path d="m4 20 5-5" /><path d="M18 12h2" /><path d="M12 12h4" /><path d="M6 12H4" /><path d="M12 18v2" /><path d="M12 6V4" /></>) },
  { name: 'React', icon: createSvgIcon(<><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></>) },
  { name: 'Node.js', icon: createSvgIcon(<><path d="M10.2 2.2c-1.3 2.4-1.3 5.1 0 7.5" /><path d="M13.8 2.2c1.3 2.4 1.3 5.1 0 7.5" /><path d="M12 17.8c-1.3-2.4-1.3-5.1 0-7.5" /><path d="M12 2v1.8" /><path d="M12 20.2V22" /><path d="m4.9 4.9 1.3 1.3" /><path d="m17.8 17.8 1.3 1.3" /><path d="M2.2 12h1.8" /><path d="M20.2 12h1.8" /><path d="m4.9 19.1 1.3-1.3" /><path d="m17.8 6.2 1.3-1.3" /></>) },
  { name: 'Python', icon: createSvgIcon(<><path d="M16 8a4 4 0 1 0-8 0c0 4 8 3 8 7a4 4 0 1 1-8 0" /><path d="M12 2v2" /><path d="M12 18v2" /></>) },
  { name: 'Tailwind CSS', icon: createSvgIcon(<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />) },
  { name: 'Framer Motion', icon: createSvgIcon(<><path d="M12 12L4 4" /><path d="M20 4l-8 8" /><path d="M12 12v8" /></>) },
  { name: 'Three.js', icon: createSvgIcon(<><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>) },
  { name: 'Git & GitHub', icon: createSvgIcon(<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />) },
  { name: 'Docker', icon: createSvgIcon(<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V12H8v-2h2V8.5C10 6.57 11.57 5 13.5 5H16v2h-1.5c-.83 0-1.5.67-1.5 1.5V10h3l-.5 2h-2.5v9.8c4.56-0.93 8-4.96 8-9.8z" />) },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Research Publication',
    description: 'A published Scopus paper on machine learning models for predictive analysis.',
    longDescription: 'This project involved extensive research into various machine learning algorithms. We collected and preprocessed a large dataset, trained multiple models including regression and neural networks, and evaluated their performance. The final paper was accepted and published in a Scopus-indexed journal, contributing to the academic community.',
    image: 'https://picsum.photos/seed/project1/800/600',
    tags: ['Machine Learning', 'Python', 'Scopus', 'Research'],
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce site with modern design and payment integration.',
    longDescription: 'Built from the ground up, this platform features a React frontend for a dynamic user experience and a Node.js backend with Express for robust API handling. It includes user authentication, product management, a shopping cart, and Stripe integration for secure payments. The entire application is containerized with Docker for easy deployment.',
    image: 'https://picsum.photos/seed/project2/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
  },
  {
    id: 3,
    title: 'Interactive 3D Portfolio',
    description: 'This very portfolio, built with React, Three.js, and Framer Motion.',
    longDescription: 'A personal project to showcase my skills in modern web development. It leverages @react-three/fiber for 3D graphics, creating an engaging and memorable user experience. Framer Motion is used for all animations and page transitions to ensure a smooth, fluid feel. The design is fully responsive and built with Tailwind CSS for rapid, utility-first styling.',
    image: 'https://picsum.photos/seed/project3/800/600',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Prompt Engineering Toolkit',
    description: 'A web app to help users craft, test, and refine prompts for LLMs.',
    longDescription: 'As an expert in prompt engineering, I developed this tool to streamline the process of interacting with large language models. Users can create, save, and version their prompts, test them against various models via API, and compare outputs. The interface is designed to be intuitive, helping both beginners and experts improve their prompt crafting skills.',
    image: 'https://picsum.photos/seed/project4/800/600',
    tags: ['React', 'AI', 'API Integration', 'Next.js'],
  },
];