import React from "react";

const About = () => {
  return (
    <section className="bg-white text-[#1F1F1F] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - About Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F] mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I’m <span className="font-bold text-[#FF5733]">Mehtab Ahmed</span>,
            a passionate Full Stack Developer specializing in the MERN Stack,
            Docker, and AWS EC2. I build scalable web applications, optimize API
            performance, and implement secure payment gateways to deliver
            high-performance solutions.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My projects, including YelpCamp, RedisCache Explorer, Task Manager,
            and Landmark Pakistan, demonstrate my expertise in real-time
            analytics, interactive maps, and optimized database structures.
          </p>
          <a
            href="https://github.com/Mehtab66"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-4 text-xl text-white bg-[#FF5733] rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            Visit My GitHub
          </a>
        </div>

        {/* Right Side - Skills Card */}
        <div className="mt-10 md:mt-0 bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
          <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4">
            Skills & Tech Stack
          </h3>
          <ul className="text-gray-700 grid grid-cols-2 gap-4 text-lg">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Docker</li>
            <li>AWS EC2</li>
            <li>Tailwind CSS</li>
            <li>Stripe</li>
            <li>RESTful APIs</li>
            <li>Vercel</li>
            <li>Render</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
