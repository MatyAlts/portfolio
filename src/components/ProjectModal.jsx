import { motion, AnimatePresence } from "motion/react";
import { memo, useEffect } from "react";

const ProjectModal = memo(({ project, onClose }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scroll when modal closes
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop with blur */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(8px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative z-10 w-full max-w-6xl p-6 md:p-8 overflow-hidden rounded-2xl max-h-[85vh] bg-gradient-to-b from-storm to-indigo flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute text-2xl text-gray-400 top-4 right-4 hover:text-white"
          >
            ×
          </button>

          {/* Content Grid - Scrollable */}
          <div className="grid grid-cols-1 gap-8 overflow-y-auto scrollbar-hide md:grid-cols-2">
            {/* Left: Project Details */}
            <div>
              <h2 className="mb-4 text-3xl font-bold">{project.title}</h2>
              <p className="mb-6 leading-relaxed subtext whitespace-pre-line">
                {project.detailedDescription}
              </p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="pt-6 mt-6 border-t border-gray-700">
                  <h3 className="mb-4 text-lg font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-2 transition-transform rounded-lg bg-gray-800/50 md:hover:scale-110"
                      >
                        <img
                          src={`/assets/logos/${tech}.svg`}
                          alt={tech}
                          className="w-full h-full pointer-events-none"
                        />
                      </div>
                    ))}
                    
                    {/* Links - Inline with technologies */}
                    {(project.github || project.demo) && (
                      <>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 transition-colors border rounded-full border-gray-700 hover:bg-gray-800"
                          >
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 transition-colors border rounded-full border-gray-700 hover:bg-gray-800"
                          >
                            Live Demo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Mobile Screenshot - Only on desktop */}
            {project.mobileImage && (
              <div className="items-center justify-center hidden md:flex">
                <div className="max-w-[200px] w-full">
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} - Mobile View`}
                    className="object-contain w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
