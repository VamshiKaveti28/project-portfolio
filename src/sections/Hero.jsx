import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gray-100 pt-20"
    >
      <SectionWrapper>
        <div className="text-center max-w-2xl">
          <div className="flex justify-center items-center text-4xl md:text-5xl font-bold mb-4 hover:scale-150 transition-transform">
            <h2>
              Hi I'm <span>Vamshi Kaveti</span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            A passionate Full Stack Developer with 4+ years of experience
            building scalable web applications.
          </p>
          <div className="flex items-center mt-14 justify-center gap-15">
            <a
              href="#about"
              className="bg-black text-xl rounded-4xl border-2 border-white text-white p-4 hover:scale-130 transition-transform"
            >
              See More
            </a>
            <button className="bg-black text-xl  border-2 border-white rounded-4xl text-white p-4 hover:scale-130 transition-transform">
              Resume
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
