import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4">
      <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations, freelance projects, or just a tech chat!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
