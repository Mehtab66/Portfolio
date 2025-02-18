import React from "react";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="bg-[#1F1F1F] text-white py-16 px-6"
    >
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-[#F5F5F5] text-center mb-8">
          Work Experience
        </h2>
        <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#FF5733]">
            Freelance MERN Stack Developer
          </h3>
          <p className="text-gray-400 text-lg mb-4">September 2024 - Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Developed a modern property management system with interactive
              maps and secure payments.
            </li>
            <li>
              Built a scalable backend using Node.js, Express.js, and MongoDB.
            </li>
            <li>
              Optimized API performance and implemented role-based access.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
