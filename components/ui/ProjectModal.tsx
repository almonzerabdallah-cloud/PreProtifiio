import React from 'react';
// FIX: Imported `Variants` type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// FIX: Explicitly typed `backdropVariants` with the `Variants` type for correctness.
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// FIX: Explicitly typed `modalVariants` with the `Variants` type to resolve type inference issues with the `type` property in `transition`.
const modalVariants: Variants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  exit: { y: "100vh", opacity: 0 },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="bg-primary w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold font-display text-white">{project.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-800 text-accent text-xs font-bold rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-text-secondary">{project.longDescription}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;