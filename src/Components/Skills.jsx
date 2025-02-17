import React from "react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: "90%" },
    { name: "React.js", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "Docker", level: "70%" },
    { name: "AWS EC2", level: "65%" },
  ];

  return (
    <section className="p-6 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center">Skills</h2>
      <div className="mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{skill.name}</h3>
            <div className="bg-gray-300 rounded-full h-4">
              <div
                className={`bg-blue-600 h-4 rounded-full`}
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
