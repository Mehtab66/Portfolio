import React from "react";

const WorkExperience = () => {
  return (
    <section className="p-6 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center">Work Experience</h2>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Freelance MERN Stack Developer</h3>
        <p>September 2024 - Present</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            Developed a modern property management system with interactive maps
            and secure payments.
          </li>
          <li>
            Built a scalable backend using Node.js, Express.js, and MongoDB.
          </li>
          <li>Optimized API performance and implemented role-based access.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
