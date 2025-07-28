import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import profile from '../assets/v.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex gap-2 text-xl font-bold text-blue-600 ">
          <img className="w-12" src={profile} alt="" />
          
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex i space-x-19 text-gray-700 font-medium ">
          <li>
            <a href="#home" className="hover:text-blue-600  ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 ">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600 ">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 ">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 ">
              Contact
            </a>
          </li>
          
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-black">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
