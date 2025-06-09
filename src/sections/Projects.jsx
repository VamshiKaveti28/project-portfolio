import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const projects = [
  {
    title: "MyChart Replica",
    description:
      "A full-featured healthcare portal allowing patients to book appointments, view health records, and find nearby hospitals. Built with React, Node.js, MongoDB, and Tailwind CSS.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "#", // Replace with actual URL
    codeLink: "#", // Replace with GitHub repo
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing product inventory, orders, and user analytics. Integrated charts and data visualization with Recharts and Context API.",
    tech: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "Responsive personal portfolio website built with Vite, React, and Tailwind CSS. Includes smooth scroll, mobile nav, and sectioned layout.",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:scale-130 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
