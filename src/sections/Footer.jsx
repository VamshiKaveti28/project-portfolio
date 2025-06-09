import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Name */}
        <a href="./" className="text-xl font-semibold mb-4 md:mb-0 cursor-pointer">
          Vamshi Kaveti
        </a>
        

        {/* Navigation Links */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Vamshi Kaveti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
