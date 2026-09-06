import React from "react";
import { Activity, Code, Server, Cloud, Check } from "lucide-react";

const skillGroups = [
  {
    category: "HealthTech & Real-Time",
    icon: <Activity size={18} color="var(--accent-light)" />,
    skills: [
      "WebSockets & Socket.IO",
      "VideoSDK Telemetry Streaming",
      "Medical Device SDKs (BP/SPO2)",
      "RingCentral Telephony & APIs",
      "HIPAA Compliance & Protocols"
    ]
  },
  {
    category: "Frontend & Mobile",
    icon: <Code size={18} color="var(--accent-light)" />,
    skills: [
      "React & Next.js",
      "React Native (iOS & Android)",
      "TypeScript & ES6+ JavaScript",
      "Tailwind CSS & Component Systems",
      "State Management & Optimization"
    ]
  },
  {
    category: "Backend & Microservices",
    icon: <Server size={18} color="var(--accent-light)" />,
    skills: [
      "Node.js & Express.js",
      "NestJS Architecture",
      "RESTful APIs & Microservices",
      "Python Data & Web Services",
      "BullMQ Queue Processing"
    ]
  },
  {
    category: "Cloud, Database & Security",
    icon: <Cloud size={18} color="var(--accent-light)" />,
    skills: [
      "AWS (EC2, S3)",
      "MongoDB & Redis Caching",
      "Firebase Suite",
      "Docker & CI/CD",
      "JWT & OAuth2 Security"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <div className="section-tag">
            <span className="section-tag-dot"></span> Technical Capabilities
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", marginBottom: "16px", fontWeight: 800 }}>
            Skills & <span className="text-metallic">Core Competencies</span>.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "650px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Technologies and frameworks utilized in architecting production platforms and hardware integrations.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "36px" }}>
          {skillGroups.map((group, i) => (
            <div
              key={i}
              style={{
                padding: "26px 24px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                transition: "var(--transition)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{ padding: "8px", background: "var(--accent-muted)", borderRadius: "var(--radius-sm)", display: "flex" }}>
                  {group.icon}
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {group.skills.map((skill, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-light)" }}></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All skills tags tray */}
        <div className="reveal" style={{
          padding: "24px 28px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginRight: "8px" }}>
            ADDITIONAL:
          </span>
          {[
            "React", "Next.js", "Node.js", "NestJS", "Express.js", "React Native", "TypeScript",
            "JavaScript ES6+", "REST APIs", "WebSockets", "Socket.IO", "VideoSDK", "RingCentral",
            "JWT", "OAuth", "Firebase", "MongoDB", "Redis", "BullMQ", "AWS (EC2, S3)",
            "Docker", "Git", "Stripe", "Mapbox", "Python", "Microservices", "HIPAA"
          ].map((item, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border)",
                padding: "4px 10px",
                borderRadius: "var(--radius-sm)"
              }}
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;