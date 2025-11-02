import { memo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const Projects = memo(function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Landing Page Estudio Jurídico Belmonte Salafia",
      description: "Desarrollo responsivo y moderno con énfasis en experiencia de usuario, contacto directo y presentación profesional del equipo legal.",
      detailedDescription: `El proyecto belmontesalafia.com consiste en el desarrollo integral del sitio web institucional del Estudio Jurídico Belmonte – Salafia, con sede en Mendoza, Argentina.

El objetivo principal fue transmitir confianza, profesionalismo y accesibilidad, ofreciendo a los clientes una plataforma moderna y funcional para conocer los servicios legales del estudio y establecer contacto directo con sus profesionales.`,
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
