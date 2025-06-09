import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black py-16 px-4"
    >
      <SectionWrapper delay={0.2}>
        <div className=" text-white max-w-5xl mx-auto text-center">
          <h2 className=" md:text-4xl font-bold  mb-6">
            About Me
          </h2>
          <p className="text-xl leading-8">
            I'm a{" "}
            <span className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white/100">
              Full Stack Developer
            </span>{" "}
            with over
            <span className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white/100">
              {" "}
              4 years of experience
            </span>{" "}
            building scalable and maintainable web applications. I specialize in
            the MERN stack — MongoDB, Express, React, and Node.js — and love
            creating clean, performant user interfaces with Tailwind CSS.
            <br />
            <br />
            Over the years, I’ve contributed to diverse projects across
            e-commerce, healthcare, and internal enterprise tools. My focus is
            on writing clean, reusable code, solving real-world problems, and
            collaborating with cross-functional teams.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-black text-xl  border-2 border-white rounded-4xl text-white p-4 hover:scale-130 transition-transform"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
