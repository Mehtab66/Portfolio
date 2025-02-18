import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "90%", rating: 9 },
  { name: "TypeScript", level: "80%", rating: 8 },
  { name: "React.js", level: "85%", rating: 8.5 },
  { name: "Node.js", level: "80%", rating: 8 },
  { name: "Express.js", level: "75%", rating: 7.5 },
  { name: "MongoDB", level: "75%", rating: 7.5 },
  { name: "Redis", level: "70%", rating: 7 },
  { name: "Docker", level: "70%", rating: 7 },
  { name: "AWS EC2", level: "65%", rating: 6.5 },
  { name: "Tailwind CSS", level: "80%", rating: 8 },
  { name: "Stripe", level: "75%", rating: 7.5 },
  { name: "RESTful APIs", level: "85%", rating: 8.5 },
  { name: "Vercel", level: "75%", rating: 7.5 },
  { name: "Render", level: "70%", rating: 7 },
  { name: "Twilio", level: "65%", rating: 6.5 },
];

const Skills = () => {
  return (
    <section className="bg-[#1F1F1F] text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#F5F5F5] mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-[#B2B2B2]">
                  {skill.name}
                </h3>
                <span className="text-[#FF5733] text-sm font-semibold">
                  {skill.rating}/10
                </span>
              </div>
              <div className="bg-[#444444] rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-[#FF5733] h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
