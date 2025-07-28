import { useState } from "react";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      role: "Full Stack Developer – MassMutual",
      time: "Jul 2021 – Dec 2022 | Hyderabad, India",
      points: [
        "Spearheaded the modernization of an internal business operations tool by rewriting the legacy system using Java(Spring Boot) and React.js, significantly improving application responsiveness and long-term maintainability.",
        "Led backend development of 20+ RESTful APIs and microservices using Spring Boot and integrated with MySQL and DynamoDB, enabling scalable, secure data operations and improving system performance by 35%.",
        "Orchestrated cloud migration strategy, moving application infrastructure from on-premise to AWS (EC2, RDS,S3), which enhanced system availability and reduced maintenance downtime by 50%.",
        "Built responsive and dynamic front-end components with React.js, improving page load speed by 40% using techniques like lazy loading, state management, and modular design.",
        "Containerized applications using Docker and automated builds/deployments via Jenkins, resulting in a 70% reduction in deployment time and fewer manual errors.",
        "Wrote comprehensive unit and integration tests with JUnit and Mockito, maintaining 85%+ test coverage,which contributed to a 30% drop in post-release bugs.",
        "Collaborated closely with cross-functional teams including QA, DevOps, and product owners in Agile sprints,consistently delivering features on time with a >95% story completion rate.",
      ],
    },
    // Add more jobs here
  ];

  return (
    <section id="experience" className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mt-15 font-bold mb-12 text-center text-gray-800">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`hover:scale-130 transform transition  duration-300 border-l-4 pl-6 rounded-lg p-4 cursor-pointer ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-60"
                  : "blur-0 opacity-100"
              } hover:shadow-lg hover:bg-blue-50`}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.time}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
