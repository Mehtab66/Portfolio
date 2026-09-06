import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Revive Medical Technologies",
    role: "Full Stack Developer",
    period: "02/2024 – Present",
    type: "Full-time",
    location: "Rawalpindi, PK",
    badge: "Current",
    summary: "Engineering healthcare platforms, medical device hardware SDK integrations, and ultra-low-latency real-time video and telemetry diagnostic systems.",
    achievements: [
      {
        text: "Built cross-platform patient monitoring app (iOS & Android) with React Native, integrating BP and SPO2 device SDKs — cutting manual check-in time by 40%.",
        metric: "-40% Check-in Time"
      },
      {
        text: "Enhanced real-time patient assessment system using Node.js + WebSocket + VideoSDK for neurological eye movement visualization, supporting 100+ daily sessions.",
        metric: "100+ Daily Sessions"
      },
      {
        text: "Engineered kiosk-mode dermatoscope app with native module hardware lens and polarization controls, deployed across 3 medical clinics.",
        metric: "3 Clinics Deployed"
      },
      {
        text: "Improved RESTful APIs with microservices architecture and optimized front-end performance by refactoring critical bottlenecks.",
        metric: "Microservices & Perf"
      },
      {
        text: "Enforced JWT and OAuth security standards across all services, maintaining zero security incidents across all production environments.",
        metric: "Zero Incidents"
      }
    ],
    stack: ["React Native", "Node.js", "NestJS", "WebSockets", "VideoSDK", "RingCentral", "AWS", "JWT/OAuth", "Microservices"]
  },
  {
    company: "DevEntia Tech",
    role: "Full Stack Developer",
    period: "01/2023 – 01/2024",
    type: "Full-time",
    location: "Rawalpindi, PK",
    badge: "1 Year",
    summary: "Led full-stack application development across multi-tenant SaaS products, AI automated workflows, and WebSocket broadcasting architectures.",
    achievements: [
      {
        text: "Expanded MERN stack company management platform with React Native mobile app, reducing client reporting time by 30% across 3 organizations.",
        metric: "-30% Reporting Time"
      },
      {
        text: "Integrated OpenAI GPT API into 'Social Pro' enabling AI-driven content generation for 200+ scheduled posts/week across multiple platforms.",
        metric: "200+ Posts/Week"
      },
      {
        text: "Launched WebSocket-based announcement system with admin and user role broadcasting, improving communication for 50+ concurrent users.",
        metric: "50+ Concurrent Users"
      },
      {
        text: "Architected scalable backend services with secure token-based access, supporting multi-tenant features across 5+ client deployments.",
        metric: "5+ Multi-Tenant Clients"
      }
    ],
    stack: ["MERN Stack", "React Native", "GPT API", "WebSocket", "Redis", "BullMQ", "Docker", "MongoDB"]
  }
];

const WorkExperience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience">
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "50px" }}>
          <div className="section-tag">
            <span className="section-tag-dot"></span> Career History
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", marginBottom: "16px", fontWeight: 800 }}>
            Work <span className="text-metallic">Experience</span>.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "650px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Production track record in high-concurrency systems, cross-platform mobile apps, and clinical hardware integrations.
          </p>
        </div>

        {/* Layout */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "30px", alignItems: "start" }}>
          
          {/* Company Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {experiences.map((e, i) => {
              const isCurrentActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "18px 20px",
                    background: isCurrentActive ? "var(--bg-card-hover)" : "var(--bg-card)",
                    border: "1px solid",
                    borderColor: isCurrentActive ? "var(--border-hover)" : "var(--border)",
                    borderLeft: `3px solid ${isCurrentActive ? "var(--accent)" : "transparent"}`,
                    borderRadius: "var(--radius-md)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "var(--transition)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: isCurrentActive ? "var(--accent-light)" : "var(--text-muted)", fontWeight: 600 }}>
                      {e.badge}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      {e.period}
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.98rem", fontWeight: 700, color: isCurrentActive ? "#fff" : "var(--text-primary)", marginBottom: "2px" }}>
                    {e.company}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    {e.role}
                  </div>
                </button>
              );
            })}

            {/* Quick Summary Card */}
            <div style={{
              padding: "18px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              marginTop: "10px"
            }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-light)", fontWeight: 600, marginBottom: "4px" }}>
                AVAILABILITY
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Available for contract roles, freelance development, and technical consulting.
              </p>
            </div>
          </div>

          {/* Details Card */}
          <div key={active} style={{
            padding: "36px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}>
            {/* Header info */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
              <div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>
                  {exp.role}
                </h3>
                <div style={{ fontSize: "0.95rem", color: "var(--accent-light)", fontWeight: 600 }}>
                  {exp.company}
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "var(--radius-sm)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={12} /> {exp.period}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "var(--radius-sm)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={12} /> {exp.location}
                </span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "28px" }}>
              {exp.summary}
            </p>

            {/* Achievements List */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>
                Key Measurable Impact & Deliverables
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {exp.achievements.map((ach, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "14px 16px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "14px",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
                      {ach.text}
                    </div>
                    <div style={{
                      padding: "4px 10px",
                      background: "var(--accent-muted)",
                      border: "1px solid var(--accent-border)",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--accent-light)",
                      fontWeight: 600,
                      whiteSpace: "nowrap"
                    }}>
                      {ach.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                Technologies Used
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-sm)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #experience > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;