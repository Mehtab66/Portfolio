import React, { useState } from "react";

const experiences = [
  {
    company: "Revive Medical Technologies",
    role: "Full Stack Developer",
    period: "Feb 2024 – Present",
    type: "Full-time",
    location: "Rawalpindi, PK",
    color: "var(--accent)",
    desc: "Building HIPAA-compliant medical platforms with real-time patient monitoring, hardware device integrations, and cross-platform mobile apps.",
    achievements: [
      "Built cross-platform patient monitoring app (iOS & Android) integrating BP/SpO2 SDKs — reduced check-in time by 40%",
      "Enhanced real-time assessment using Node.js + WebSocket + VideoSDK, supporting 100+ daily sessions",
      "Engineered kiosk-mode dermatoscope app deployed across 3 medical clinics",
      "Maintained zero security incidents with JWT + OAuth across all production environments",
    ],
    stack: ["React Native", "Node.js", "WebSocket", "VideoSDK", "JWT", "AWS"],
  },
  {
    company: "DevEntia Tech",
    role: "Full Stack Developer",
    period: "Jan 2023 – Jan 2024",
    type: "Full-time",
    location: "Rawalpindi, PK",
    color: "var(--secondary)",
    desc: "Full-stack development across SaaS products — AI automation, MERN platforms, and real-time communication systems.",
    achievements: [
      "Integrated GPT-4 API enabling AI-driven content generation for 200+ scheduled posts/week",
      "Launched WebSocket-based announcement system supporting 50+ concurrent users",
      "Expanded MERN platform with React Native mobile app, reducing client reporting time by 30%",
      "Architected scalable multi-tenant backend services across 5+ client deployments",
    ],
    stack: ["MERN Stack", "React Native", "GPT API", "WebSocket", "Redis", "Docker"],
  },
];

const WorkExperience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" style={{ position: "relative", padding: "120px 20px" }}>
      <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>05</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="reveal" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "4px", marginBottom: "16px" }}>&gt; git log --author="Mehtab"</p>
        <h2 className="reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "60px", fontFamily: "var(--font-display)" }}>
          WORK <span style={{ background: "linear-gradient(135deg, var(--accent), var(--secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>JOURNEY</span>
        </h2>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "40px" }}>
          {/* Tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {experiences.map((e, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                background: active === i ? "var(--bg-card)" : "transparent",
                border: "none",
                borderLeft: `2px solid ${active === i ? e.color : "rgba(255,255,255,0.05)"}`,
                color: active === i ? "#fff" : "var(--text-dim)",
                padding: "20px 24px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.25s",
                borderRadius: "0 8px 8px 0",
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "1px", marginBottom: "4px", color: active === i ? e.color : "var(--text-dim)" }}>{e.company.toUpperCase()}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)", opacity: 0.6 }}>{e.period}</div>
              </button>
            ))}

            {/* Status Badge */}
            <div style={{ marginTop: "20px", padding: "16px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)", animation: "pulse 2s infinite" }}></div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--accent)", letterSpacing: "2px" }}>OPEN TO WORK</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", lineHeight: 1.6 }}>
                Available for freelance & full-time opportunities
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div key={active} style={{ animation: "fadeUp 0.4s ease forwards" }}>
            <div style={{ padding: "40px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "16px", position: "relative", overflow: "hidden" }}>
              {/* Header */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: exp.color, border: `1px solid ${exp.color}50`, padding: "3px 10px", borderRadius: "4px", letterSpacing: "2px" }}>
                    ● {exp.type.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)", border: "1px solid var(--glass-border)", padding: "3px 10px", borderRadius: "4px" }}>
                    📍 {exp.location}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)", border: "1px solid var(--glass-border)", padding: "3px 10px", borderRadius: "4px" }}>
                    🗓 {exp.period}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-display)", marginBottom: "4px" }}>{exp.role}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: exp.color }}>@ {exp.company}</div>
              </div>

              <p style={{ color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "28px", fontSize: "0.95rem" }}>{exp.desc}</p>

              {/* Achievements */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {exp.achievements.map((ach, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", padding: "14px 18px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = exp.color + "40"; e.currentTarget.style.background = `${exp.color}08`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}>
                    <span style={{ color: exp.color, fontFamily: "var(--font-mono)", fontSize: "0.8rem", flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.7 }}>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "3px", marginBottom: "12px" }}>// TECH USED</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.stack.map((tech) => (
                    <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: exp.color, background: `${exp.color}10`, border: `1px solid ${exp.color}30`, padding: "5px 14px", borderRadius: "4px" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner glow */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: `radial-gradient(circle, ${exp.color}08, transparent 70%)`, pointerEvents: "none" }}></div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${exp.color}50, transparent)` }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 8px var(--accent); } 50% { box-shadow: 0 0 20px var(--accent); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { #experience > div > div:last-child > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default WorkExperience;