import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const projects = [
  {
    title: "Food Delivery Application",
    description:
      "Developed a backend-centric food delivery application emphasizing robust API design, order management, user authentication, and real-time delivery status tracking.",
    tech: ["Java", "Springboot", "Postgresql", "Postman"],
    demoLink: "", // Replace with actual URL
    codeLink: "https://github.com/VamshiKaveti28/FoodDeliveryApp", // Replace with GitHub repo
  },
  {
    title: "StudyNest",
    description:
      "Built StudyNest, a full-stack MERN application that helps students explore beginner to advanced projects, with user authentication, certificate generation, instructor dashboards, and a review system.",
    tech: ["React", "Javascript", "Tailwind CSS", "Firebase","Nodejs","ExpressJs"],
    demoLink: "#",
    codeLink: "https://github.com/VamshiKaveti28/StudyNest",
  },
  {
    title: "Developer Portfolio",
    description:
      "Responsive personal portfolio website built with Vite, React, and Tailwind CSS. Includes smooth scroll, mobile nav, and sectioned layout.",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "https://github.com/VamshiKaveti28/project-portfolio",
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
                {/* <a
                  href={project.demoLink}
                  target="_blank"
                  className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Demo
                </a> */}
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
