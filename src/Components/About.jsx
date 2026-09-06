import React from "react";
import { GraduationCap, ShieldCheck, Zap, Stethoscope, Server, Check } from "lucide-react";

const pillars = [
  {
    title: "HealthTech & Device SDKs",
    desc: "Integrating Bluetooth and native medical hardware SDKs (BP, SPO2, Dermatoscope lenses) with HIPAA compliance and clinical reliability.",
    icon: <Stethoscope size={20} color="var(--accent-light)" />
  },
  {
    title: "Real-Time Telemetry & WebSockets",
    desc: "Sub-second bidirectional data streaming for neurological eye-movement tracking and instant clinical alerts using WebSockets, Socket.IO & VideoSDK.",
    icon: <Zap size={20} color="var(--accent-light)" />
  },
  {
    title: "Cloud & Microservices (AWS)",
    desc: "High-throughput APIs built with NestJS and Node.js, containerized with Docker, queued with BullMQ & Redis, and deployed on AWS.",
    icon: <Server size={20} color="var(--accent-light)" />
  },
  {
    title: "Zero-Trust Security & Compliance",
    desc: "Production-tested JWT/OAuth authentication, multi-tenant RBAC, and HIPAA compliance with zero security incidents.",
    icon: <ShieldCheck size={20} color="var(--accent-light)" />
  }
];

const technologies = [
  "React", "Next.js", "React Native", "TypeScript", "Node.js", "NestJS", "Express.js",
  "Python", "WebSockets", "Socket.IO", "VideoSDK", "RingCentral", "AWS (EC2, S3)",
  "Docker", "MongoDB", "Redis", "BullMQ", "Firebase", "Stripe", "Mapbox", "JWT", "OAuth", "HIPAA"
];

const About = () => {
  return (
    <section id="about">
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "50px" }}>
          <div className="section-tag">
            <span className="section-tag-dot"></span> About & Engineering Philosophy
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", marginBottom: "16px", fontWeight: 800 }}>
            Specialized in <span className="text-gradient-emerald">Mission-Critical</span> Systems.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Software Engineer based in Rawalpindi, PK, focusing on building resilient healthcare tools, low-latency communication architectures, and scalable cloud applications.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "36px", alignItems: "start" }}>
          
          {/* Left Column: Background & Pillars */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{
              padding: "28px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)"
            }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
                Proven Engineering with Tangible Outcomes
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "16px" }}>
                With production experience across healthtech startups and SaaS organizations, I specialize in bridging medical hardware with modern web and mobile apps. Whether it is reducing patient check-in times by 40% with automated SDKs or streaming 100+ daily real-time diagnostic sessions, my code is built for resilience, compliance, and speed.
              </p>
              
              {/* Education Card */}
              <div style={{
                padding: "16px 20px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}>
                <div style={{ padding: "10px", background: "var(--accent-muted)", borderRadius: "8px", color: "var(--accent-light)" }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff" }}>
                    Bachelor of Science in Software Engineering
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                    COMSATS University Islamabad (2019 – 2023)
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    transition: "var(--transition)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.background = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg-card)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    {p.icon}
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{p.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tech Stack & Freelance Availability */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Tech Stack Box */}
            <div style={{
              padding: "28px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                  Core Tech Stack & Tools
                </h3>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--accent-light)" }}>
                  22+ Verified
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 12px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.78rem",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono)",
                      transition: "var(--transition)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                      e.currentTarget.style.color = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "HIPAA & Healthcare Data Standards",
                  "Bluetooth BLE & Native Hardware Modules",
                  "Low-Latency WebSocket Streaming",
                  "Production Microservices with NestJS"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    <Check size={14} color="var(--accent-light)" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Callout */}
            <div style={{
              padding: "24px",
              background: "rgba(16, 185, 129, 0.05)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "var(--radius-lg)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }}></span>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-light)", letterSpacing: "0.05em" }}>
                  OPEN FOR ENGAGEMENT
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Open to freelance development, MVP builds, technical consulting, and ongoing engineering partnerships.
              </p>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;