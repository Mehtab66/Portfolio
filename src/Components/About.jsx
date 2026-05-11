import React from "react";

const highlights = [
  { label: "Experience", value: "2+ yrs", color: "var(--accent)", icon: "⚡" },
  { label: "Projects Shipped", value: "15+", color: "var(--secondary)", icon: "🚀" },
  { label: "Clean Code", value: "100%", color: "var(--tertiary)", icon: "✦" },
  { label: "Happy Clients", value: "10+", color: "var(--accent)", icon: "◈" },
];

const stack = [
  { name: "React", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" },
  { name: "React Native", cat: "Mobile" },
  { name: "MongoDB", cat: "Database" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "AWS", cat: "Cloud" },
  { name: "TypeScript", cat: "Language" },
  { name: "Docker", cat: "DevOps" },
  { name: "Python", cat: "Language" },
  { name: "Next.js", cat: "Frontend" },
  { name: "WebSocket", cat: "Realtime" },
  { name: "Redis", cat: "Cache" },
];

const About = () => {
  return (
    <section id="about" style={{ position: "relative", padding: "120px 20px" }}>
      <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>02</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Label */}
        <p className="reveal" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "4px", marginBottom: "16px" }}>&gt; cat about.md</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Left */}
          <div className="reveal">
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", fontFamily: "var(--font-display)" }}>
              CRAFTING <span style={{ background: "linear-gradient(135deg, var(--accent), var(--secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DIGITAL</span> EXPERIENCES.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.9, marginBottom: "20px" }}>
              Full Stack Developer based in Rawalpindi, Pakistan — specializing in high-performance web & mobile applications with a precision focus on clean architecture and developer experience.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.9, marginBottom: "40px" }}>
              2+ years shipping production systems at scale — from HIPAA-compliant medical platforms to AI-driven SaaS products. I care deeply about reliability, performance, and code that future engineers won't curse.
            </p>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {highlights.map((h, i) => (
                <div key={i} style={{
                  padding: "24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = h.color; e.currentTarget.style.boxShadow = `0 0 20px ${h.color}20`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "4px" }}>{h.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: h.color, fontFamily: "var(--font-mono)" }}>{h.value}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)", letterSpacing: "2px", textTransform: "uppercase" }}>{h.label}</div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${h.color}, transparent)` }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech Stack Terminal */}
          <div className="reveal">
            {/* Terminal Window */}
            <div style={{ background: "#0d1117", border: "1px solid var(--glass-border)", borderRadius: "12px", overflow: "hidden" }}>
              {/* Title Bar */}
              <div style={{ padding: "12px 20px", borderBottom: "1px solid var(--glass-border)", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }}></div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", marginLeft: "auto" }}>tech-stack.sh</span>
              </div>

              {/* Terminal Body */}
              <div style={{ padding: "24px", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                <div style={{ color: "var(--accent)", marginBottom: "16px" }}>
                  <span style={{ color: "var(--text-dim)" }}>~ </span>mehtab@portfolio
                  <span style={{ color: "var(--secondary)" }}> $ </span>
                  <span style={{ color: "#fff" }}>list --skills</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {stack.map((s, i) => (
                    <span key={i} style={{
                      padding: "6px 14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      color: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--secondary)" : "var(--tertiary)",
                      cursor: "default",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                      {s.name}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "24px", color: "var(--text-dim)", fontSize: "0.7rem" }}>
                  <span style={{ color: "var(--accent)" }}>✓ </span>12 technologies loaded
                </div>
                <div style={{ color: "var(--text-dim)", fontSize: "0.7rem", marginTop: "4px" }}>
                  <span style={{ color: "var(--secondary)" }}>~ </span>
                  <span style={{ animation: "blink 1s step-end infinite", display: "inline-block", width: "8px", height: "14px", background: "var(--accent)", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>

            {/* Currently Building Card */}
            <div style={{ marginTop: "20px", padding: "20px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "12px", display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 15px var(--accent)", flexShrink: 0, animation: "pulse 2s infinite" }}></div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "4px" }}>CURRENTLY BUILDING</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#fff" }}>AI-powered Health Monitoring Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 10px var(--accent); } 50% { box-shadow: 0 0 25px var(--accent), 0 0 40px var(--accent); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 900px) { #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
};

export default About;