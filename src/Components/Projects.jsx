import React, { useState, useRef } from "react";

const projects = [
  {
    title: "eVitals",
    subtitle: "Remote Patient Monitoring",
    desc: "HIPAA-compliant platform deployed across 30+ US medical practices. Integrates BP and SpO2 hardware SDKs.",
    tags: ["React Native", "Node.js", "AWS", "HIPAA"],
    status: "PRODUCTION",
    color: "var(--accent)",
    metric: "40% ↑ efficiency",
    featured: true
  },
  {
    title: "Social Pro",
    subtitle: "AI Content Automation",
    desc: "AI-driven pipeline scheduling 200+ posts/week using GPT-4 with multi-platform OAuth integrations.",
    tags: ["MERN Stack", "GPT-4", "BullMQ", "Redis"],
    status: "ACTIVE",
    color: "var(--secondary)",
    metric: "200+ posts/week",
    featured: true
  },
  {
    title: "Telestroke",
    subtitle: "Neurological Evaluation System",
    desc: "Real-time eye-tracking data streamed via WebSockets. Supports 100+ concurrent diagnostic sessions.",
    tags: ["Node.js", "WebSocket", "Python", "D3.js"],
    status: "RESEARCH",
    color: "var(--tertiary)",
    metric: "100+ sessions/day"
  },
  {
    title: "Scam Eye",
    subtitle: "AI Fraud Detection",
    desc: "AI-powered fraud detection with 98% email deliverability and growing user base.",
    tags: ["Next.js", "Firebase", "AI", "TypeScript"],
    status: "STABLE",
    color: "var(--accent)",
    metric: "500+ users"
  },
  {
    title: "Dermatoscope",
    subtitle: "Medical Imaging Kiosk",
    desc: "Kiosk-mode medical imaging with hardware-level native module controls. Deployed in 3 clinics.",
    tags: ["React Native", "Native Modules", "Hardware"],
    status: "DEPLOYED",
    color: "var(--secondary)",
    metric: "3 clinics"
  },
  {
    title: "Falkie",
    subtitle: "Enterprise Management SaaS",
    desc: "MERN stack SaaS reducing admin overhead 35% through granular RBAC and real-time announcements.",
    tags: ["MERN", "Socket.io", "RBAC"],
    status: "ACTIVE",
    color: "var(--tertiary)",
    metric: "35% ↓ overhead"
  },
  {
    title: "22RPM",
    subtitle: "Vitals Monitoring App",
    desc: "Cross-platform iOS & Android app integrating BP/SpO2 hardware SDKs for remote monitoring.",
    tags: ["React Native", "Node.js", "SDK"],
    status: "STABLE",
    color: "var(--accent)",
    metric: "iOS & Android"
  },
  {
    title: "PetApp",
    subtitle: "AI Pet Management",
    desc: "AI symptom checker, QR-based pet tracking, and vet booking platform.",
    tags: ["React", "Node.js", "AI", "AWS S3"],
    status: "BETA",
    color: "var(--secondary)",
    metric: "Beta launch"
  }
];

const statusColors = {
  PRODUCTION: "var(--accent)",
  ACTIVE: "var(--secondary)",
  RESEARCH: "var(--tertiary)",
  STABLE: "var(--accent)",
  DEPLOYED: "var(--secondary)",
  BETA: "var(--warning)"
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  const col = statusColors[project.status] || "var(--accent)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "30px",
        background: "var(--bg-card)",
        border: "1px solid var(--glass-border)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.12s ease-out, box-shadow 0.3s",
        gridColumn: project.featured ? "span 1" : "span 1"
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${col}33`}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; handleMouseLeave(); }}
    >
      {/* Spotlight */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04) 0%, transparent 60%)`, pointerEvents: "none" }}></div>

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", color: col, background: `${col}15`, border: `1px solid ${col}40`, padding: "3px 10px", borderRadius: "4px", letterSpacing: "2px" }}>
          ● {project.status}
        </span>
        <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-display)", marginBottom: "4px", color: "#fff" }}>{project.title}</h3>
        <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: col, letterSpacing: "1px" }}>{project.subtitle}</p>
      </div>

      <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.7, flexGrow: 1 }}>{project.desc}</p>

      {/* Metric highlight */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: col, boxShadow: `0 0 8px ${col}` }}></div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: col }}>{project.metric}</span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag, i) => (
          <span key={i} style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.03)", padding: "4px 10px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.05)" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom border glow */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${col}60, transparent)` }}></div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "PRODUCTION", "ACTIVE", "STABLE", "RESEARCH"];

  const filtered = filter === "ALL" ? projects : projects.filter(p => p.status === filter);

  return (
    <section id="projects" style={{ position: "relative", padding: "120px 20px" }}>
      <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>03</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "4px", marginBottom: "16px" }}>&gt; ./projects --list-all</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "20px", fontFamily: "var(--font-display)" }}>
            CURATED <span style={{ background: "linear-gradient(135deg, var(--accent), var(--secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>REPOS</span>
          </h2>
          <p style={{ color: "var(--text-dim)", maxWidth: "500px", lineHeight: 1.7, fontSize: "1rem" }}>
            Production-grade systems spanning healthcare, AI, SaaS, and enterprise — each built for scale and performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal" style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              background: filter === f ? "var(--accent)" : "transparent",
              color: filter === f ? "#000" : "var(--text-dim)",
              border: `1px solid ${filter === f ? "var(--accent)" : "var(--glass-border)"}`,
              padding: "8px 20px",
              borderRadius: "100px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "1px",
              transition: "all 0.2s"
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
          {filtered.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;