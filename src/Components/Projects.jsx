import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "Full-stack web application for browsing and reviewing campgrounds.",
      technologies: "Node.js, Express, MongoDB, EJS, Mapbox",
      link: "https://github.com/Mehtab66/YelpCamp",
    },
    {
      title: "RedisCache Explorer",
      description:
        "Node.js application demonstrating Redis caching for optimized data retrieval.",
      technologies: "Node.js, Redis",
      link: "https://github.com/Mehtab66/Redis_Implementation",
    },
    {
      title: "Task Manager",
      description: "Task management web app for efficient task tracking.",
      technologies: "React.js, Tailwind CSS",
      link: "https://github.com/Mehtab66/TaskManager",
    },
    {
      title: "LandMark Pakistan",
      description: "Property management system for housing societies.",
      technologies:
        "Node.js, Express.js, Nodemailer,  Twillio, MongoDB, React.js, Tailwind CSS",
      link: "https://github.com/Mehtab66/LandMark-Pakistan",
    },
  ];

  return (
    <section className="bg-white text-[#1F1F1F] py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#1F1F1F] mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-bold text-[#FF5733]">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-700">{project.description}</p>
              <p className="mt-2 text-gray-500">{project.technologies}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#FF5733] text-white px-6 py-2 rounded-lg shadow-md transition-all hover:bg-[#E74C3C] hover:scale-105"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
