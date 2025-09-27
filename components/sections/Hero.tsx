import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../canvas/HeroCanvas';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
  </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-8 flex justify-between items-center">
        <div className="font-display text-xl sm:text-2xl font-bold tracking-widest cursor-pointer hover:text-accent transition-colors">
          &gt; ALMONZER
        </div>
        <a href="#contact" className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base border border-text-primary rounded-md text-text-primary hover:bg-text-primary hover:text-background transition-colors font-semibold">
          Contact
        </a>
      </header>

      {/* Main Content */}
      <div className="relative w-full h-full flex items-center">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 lg:w-7/12 h-full flex flex-col justify-center items-start p-4 sm:p-8 md:pl-16 lg:pl-24 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-white">
              ALMONZER <span className="text-accent">HAMID</span>
            </h1>
            <p className="mt-4 font-sans text-lg sm:text-xl md:text-2xl text-text-primary">
              Web Developer (Full Stack Vibe Coder)
            </p>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-text-secondary">
              ML & AI Passionate Researcher
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 max-w-xl font-sans text-md md:text-lg text-text-secondary mx-auto md:mx-0"
          >
            Passionate about designing and building web apps with modern design. Published in Scopus. Expert in prompt engineering and vibe coding.
          </motion.p>

           <motion.a 
            href="#about" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8 font-display text-lg text-accent-purple font-bold flex items-center gap-2 group mx-auto md:mx-0"
          >
            About me
            <span className="transform transition-transform group-hover:translate-x-2">&gt;</span>
          </motion.a>
        </div>

        {/* Right 3D Canvas */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>

      {/* Bottom Left Icon */}
      <div className="absolute bottom-10 left-4 sm:left-10 z-20">
        <a href="#" aria-label="GitHub Profile" className="text-text-secondary hover:text-accent transition-colors duration-300">
          <GithubIcon />
        </a>
      </div>
      
      {/* Right Sidebar */}
      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col items-center space-y-16">
        {/* Section indicator */}
        <div className="flex flex-col-reverse items-center space-y-2 space-y-reverse">
          {['00', '01', '02', '03', '04'].map((num, i) => (
            <div key={num} className="flex items-center space-x-4">
              <span className={`text-xs font-display transition-colors ${i === 0 ? 'text-white' : 'text-text-secondary'}`}>{num}</span>
              <div className={`transition-all duration-300 ${i === 0 ? 'w-8 h-px bg-white' : 'w-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Scroll down text */}
        <a href="#about" className="[writing-mode:vertical-rl] text-text-secondary text-xs tracking-widest uppercase group flex items-center gap-2">
            <span className="transform transition-transform group-hover:-translate-y-1">Scroll Down</span>
            <span className="transform rotate-90">&lt;</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;