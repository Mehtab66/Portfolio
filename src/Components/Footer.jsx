import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-[#1F1F1F] text-gray-300 py-6 text-center"
    >
      <p className="text-lg">© 2024 Mehtab Ahmed. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/mehtab-ahmed58/" // Your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Mehtab66" // Your actual GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
