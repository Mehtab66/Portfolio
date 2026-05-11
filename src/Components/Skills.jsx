import React, { useEffect, useState, useRef } from "react";

const skillGroups = [
  {
    category: "FRONTEND",
    icon: "◈",
    color: "var(--accent)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React Native", level: 92 },
      { name: "Tailwind / CSS", level: 90 },
    ],
  },
  {
    category: "BACKEND",
    icon: "⬡",
    color: "var(--secondary)",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 90 },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    icon: "◉",
    color: "var(--tertiary)",
    skills: [
      { name: "AWS", level: 78 },
      { name: "Docker", level: 82 },
      { name: "WebSockets", level: 88 },
      { name: "Redis / BullMQ", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, active, color }) => (
  <div style={{ marginBottom: "22px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", alignItems: "center" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#fff" }}>{name}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: color, fontWeight: 700 }}>{level}%</span>
    </div>
    <div style={{ height: "3px", background: "rgba(255,255,255,0.04)", borderRadius: "2px", overflow: "visible", position: "relative" }}>
      <div style={{
        height: "100%",
        width: active ? `${level}%` : "0%",
        background: color,
        transition: "width 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
        borderRadius: "2px",
        boxShadow: `0 0 12px ${color}80`,
        position: "relative"
      }}>
        {/* Glow dot at end */}
        <div style={{ position: "absolute", right: "-3px", top: "50%", transform: "translateY(-50%)", width: "7px", height: "7px", borderRadius: "50%", background: color, boxShadow: `0 0 10px ${color}` }}></div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ position: "relative", padding: "120px 20px" }}>
      <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>04</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <p className="reveal" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "4px", marginBottom: "16px" }}>&gt; npm list --global</p>
        <h2 className="reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "16px", fontFamily: "var(--font-display)" }}>
          TECHNICAL <span style={{ background: "linear-gradient(135deg, var(--secondary), var(--tertiary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PROWESS</span>
        </h2>
        <p className="reveal" style={{ color: "var(--text-dim)", maxWidth: "500px", lineHeight: 1.7, marginBottom: "60px" }}>
          A curated set of tools and technologies I've used to ship production systems at scale.
        </p>

        {/* Skill Cards Grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {skillGroups.map((group, i) => (
            <div key={i} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--glass-border)",
              borderRadius: "16px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.color + "60"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--glass-border)"; }}>
              {/* Top Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
                <span style={{ fontSize: "1.2rem", color: group.color }}>{group.icon}</span>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "3px", color: group.color }}>{group.category}</h3>
              </div>

              {group.skills.map((skill, j) => (
                <SkillBar key={j} {...skill} active={active} color={group.color} />
              ))}

              {/* Corner accent */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: `radial-gradient(circle, ${group.color}10, transparent 70%)` }}></div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${group.color}50, transparent)` }}></div>
            </div>
          ))}
        </div>

        {/* Additional Tech Logos Section */}
        <div className="reveal" style={{ marginTop: "60px", padding: "40px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "16px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "3px", marginBottom: "24px" }}>// ALSO PROFICIENT WITH</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["JWT", "OAuth2", "VideoSDK", "GPT-4 API", "Figma", "Git", "HIPAA", "Microservices", "REST", "GraphQL", "Firebase", "Stripe"].map((tech, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
                border: "1px solid var(--glass-border)",
                padding: "6px 14px",
                borderRadius: "4px",
                transition: "all 0.2s",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.borderColor = "var(--glass-border)"; }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;