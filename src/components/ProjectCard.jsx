import { motion } from "motion/react";
import { memo } from "react";

const ProjectCard = memo(({ project, onReadMore }) => {
  return (
    <motion.div
      className="relative grid grid-cols-1 gap-6 p-6 overflow-hidden md:grid-cols-2 rounded-2xl bg-gradient-to-b from-storm to-indigo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Left: Content */}
      <div className="flex flex-col justify-center">
        <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
        <p className="mb-4 subtext">{project.description}</p>
        <button
          onClick={() => onReadMore(project)}
          className="px-4 py-2 text-sm font-medium transition-colors border rounded-full border-gray-700 hover:bg-gray-800 w-fit"
        >
          Read More
        </button>
      </div>
      
      {/* Right: Image */}
      {project.image && (
        <div className="flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
