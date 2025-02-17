import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "Full-stack web application for browsing and reviewing campgrounds.",
      technologies: "Node.js, Express, MongoDB, EJS, Mapbox",
      link: "#",
    },
    {
      title: "RedisCache Explorer",
      description:
        "Node.js application demonstrating Redis caching for optimized data retrieval.",
      technologies: "Node.js, Redis",
      link: "#",
    },
    {
      title: "Task Manager",
      description: "Task management web app for efficient task tracking.",
      technologies: "React.js, Tailwind CSS",
      link: "#",
    },
    {
      title: "LandMark Pakistan",
      description: "Property management system for housing societies.",
      technologies: "Node.js, MongoDB, React.js, Tailwind CSS",
      link: "#",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-3xl font-semibold text-center">My Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-gray-600">{project.technologies}</p>
            <a
              href={project.link}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
