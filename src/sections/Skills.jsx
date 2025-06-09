import React from "react";

const skills = {
  frontend: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "REST APIs", icon: "postman" },
    
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Vite", icon: "vite" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    {name:"Docker",icon:"docker"}
  ],
};

const Skills = () => {
  return (
    <section id="skills" className=" min-h-screen bg-black text-white py-16 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-">
          Skills & Technologies
        </h2>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-22">
        {/* Section Component */}
        {[
          { title: "Frontend", color: "text-white", data: skills.frontend },
          { title: "Backend", color: "text-white", data: skills.backend },
          { title: "Tools & Platforms", color: "text-white", data: skills.tools },
        ].map((section) => (
          <div key={section.title} className="flex flex-col  gap-12 md:flex-row items-start md:items-center ">
            {/* Left: Section Title */}
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h3 className={`text-4xl hover:scale-180 transition-transform font-semibold ${section.color}`}>
                {section.title}
              </h3>
            </div>

            {/* Right: Skill Icons */}
            <div className="md:w-3/4  flex flex-wrap gap-9">
              {section.data.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center hover:scale-180 transition-transform"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-12 h-12 mb-2 "
                  />
                  <span className="text-xl">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
