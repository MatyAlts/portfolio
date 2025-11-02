import { memo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const Projects = memo(function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Landing Page Belmonte Salafia Law Firm",
      description: "A modern, responsive platform designed to present legal services, generate client leads, and reflect the firm’s professionalism and values.",
      detailedDescription: `The belmontesalafia.com project consists of the full development of the official website for the Belmonte – Salafia Law Firm, based in Mendoza, Argentina.

The main objective was to build a digital presence that conveys trust, professionalism, and accessibility, offering clients a clean and intuitive platform to explore the firm’s legal services and contact its professionals easily.`,
      technologies: ["typescript", "react", "tailwindcss", "java", "n8n", "postgresql"],
      image: "/assets/projects/belmontesalafia.png",
      mobileImage: "/assets/projects/belmontesalafia_mobile.png",
      demo: "https://belmontesalafia.com/"
    },
  ];

  return (
    <section id="projects" className="c-space section-spacing">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-center text-heading">
          My Projects
        </h2>
        
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onReadMore={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
});

export default Projects;
