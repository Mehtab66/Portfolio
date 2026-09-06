import React, { useState } from "react";
import { Activity, Shield, Stethoscope, Zap, Bot, Users, Layers, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "evitals",
    title: "eVitals",
    category: "HEALTHTECH & REAL-TIME",
    subtitle: "HIPAA-Compliant RPM & Telehealth Platform",
    metric: "30+ US Practices • -40% Check-in Time",
    problem: "US medical clinics faced fragmented vitals data collection, disconnected communication channels, and high manual patient check-in overhead.",
    solution: "Architected a HIPAA-compliant cloud platform with RingCentral telephony & telehealth messaging integration, BP/SPO2 hardware SDK telemetry, medical billing, staff workflows, and real-time alerts.",
    result: "Deployed across 30+ US medical practices, reducing manual check-in time by 40% with zero security/compliance incidents.",
    tags: ["React Native", "Node.js", "NestJS", "RingCentral", "AWS", "HIPAA", "WebSockets"],
    icon: <Stethoscope size={18} color="var(--accent-light)" />
  },
  {
    id: "telestroke",
    title: "Telestroke",
    category: "HEALTHTECH & REAL-TIME",
    subtitle: "Real-Time Neurological Evaluation System",
    metric: "100+ Daily Sessions • Sub-Second Latency",
    problem: "Neurologists during stroke emergencies needed zero-latency visualization of ocular movements from medical headgear for critical diagnosis.",
    solution: "Developed high-speed Node.js + Python streaming backend sending ocular motion telemetry via WebSockets and VideoSDK directly to real-time clinical graph dashboards.",
    result: "Reliably supports 100+ daily live diagnostic sessions with sub-second data streaming and accurate clinical synchronization.",
    tags: ["Node.js", "Python", "WebSockets", "VideoSDK", "D3.js", "React"],
    icon: <Activity size={18} color="var(--accent-light)" />
  },
  {
    id: "22rpm",
    title: "22RPM",
    category: "HEALTHTECH & REAL-TIME",
    subtitle: "Remote Patient Vitals Monitoring App",
    metric: "Instant Medical Alerts & Telemetry",
    problem: "Physicians lacked continuous remote visibility and instant alerting when outpatient blood pressure and oxygen saturation levels crossed dangerous thresholds.",
    solution: "Built a cross-platform React Native app integrating native Bluetooth BP and SPO2 device SDKs with instant triage alerting and encrypted doctor-patient messaging.",
    result: "Empowered clinicians to detect patient vitals degradation early and intervene immediately.",
    tags: ["React Native", "Node.js", "Device SDKs", "Bluetooth BLE", "Express"],
    icon: <Zap size={18} color="var(--accent-light)" />
  },
  {
    id: "dermatoscope",
    title: "Dermatoscope Kiosk",
    category: "HEALTHTECH & REAL-TIME",
    subtitle: "Kiosk-Mode Skin Diagnostic System",
    metric: "Active in 3 Medical Clinics",
    problem: "Dermatology clinics struggled with cumbersome manual optical camera setups and inconsistent skin polarization lighting controls.",
    solution: "Engineered a dedicated kiosk-mode application with native module hardware lens controls and polarization light adjustments for standardized skin imaging.",
    result: "Successfully deployed and actively used across 3 medical clinics for standardized skin examination.",
    tags: ["React Native", "Native Modules", "Android Kiosk", "Hardware APIs", "AWS S3"],
    icon: <Shield size={18} color="var(--accent-light)" />
  },
  {
    id: "social-pro",
    title: "Social Pro",
    category: "AI & SAAS",
    subtitle: "AI-Powered Multiplatform Content Engine",
    metric: "200+ Scheduled Posts / Week",
    problem: "Marketing agencies spent dozens of manual hours weekly generating, formatting, and scheduling posts across fragmented social media networks.",
    solution: "Integrated OpenAI GPT APIs into a unified multi-brand dashboard backed by BullMQ queue workers, Redis caching, and multi-platform OAuth2.",
    result: "Automated content generation and multi-channel scheduling for 200+ posts/week per client deployment.",
    tags: ["MERN Stack", "OpenAI GPT API", "BullMQ", "Redis", "OAuth2", "Docker"],
    icon: <Bot size={18} color="var(--accent-light)" />
  },
  {
    id: "scam-eye",
    title: "Scam Eye",
    category: "AI & SAAS",
    subtitle: "Gamified AI Fraud Detection Platform",
    metric: "500+ Users • 98% Email Delivery",
    problem: "Users frequently fell prey to evolving online scams due to a lack of interactive and engaging cybersecurity threat detection tools.",
    solution: "Created a Next.js + Firebase fraud detection web application incorporating gamified learning (streaks, referrals, rewards) and automated phishing reporting.",
    result: "Attracted 500+ registered active users while maintaining a 98% email delivery rate across transactional communications.",
    tags: ["Next.js", "Firebase", "TypeScript", "Node.js", "SendGrid"],
    icon: <Sparkles size={18} color="var(--accent-light)" />
  },
  {
    id: "falkie",
    title: "Falkie",
    category: "ENTERPRISE & MOBILE",
    subtitle: "Multi-Tenant Operations Platform",
    metric: "-35% Admin Overhead Across Orgs",
    problem: "Expanding organizations suffered from disjointed employee management, messy client reporting, and inadequate access hierarchies.",
    solution: "Constructed a MERN + React Native platform featuring granular 3-tier RBAC, live Socket.IO chat, and real-time company announcement broadcasts.",
    result: "Reduced client reporting time by 30% and cut overall administrative overhead by 35% across 3 organizations.",
    tags: ["React", "React Native", "Node.js", "MongoDB", "Socket.IO", "RBAC"],
    icon: <Users size={18} color="var(--accent-light)" />
  },
  {
    id: "petapp",
    title: "PetApp",
    category: "ENTERPRISE & MOBILE",
    subtitle: "AI Pet Care & QR Recovery Ecosystem",
    metric: "End-to-End AI Pet Health & QR Recovery",
    problem: "Pet owners lacked an integrated ecosystem for early symptom triage, lost pet recovery, and routine weight/walk tracking.",
    solution: "Engineered an AI-powered pet care mobile application with an AI symptom checker, dynamic QR-code lost & found tag system, walk tracking, and Amazon marketplace integration.",
    result: "Shipped a comprehensive mobile companion providing full lifecycle pet wellness management.",
    tags: ["React Native", "Node.js", "AI Symptom API", "QR System", "AWS S3", "Stripe"],
    icon: <Layers size={18} color="var(--accent-light)" />
  }
];

const CaseStudyCard = ({ p, index }) => {
  return (
    <div
      style={{
        padding: "28px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "var(--transition)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
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
      {/* Top Meta Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ padding: "6px", background: "var(--accent-muted)", borderRadius: "var(--radius-sm)", display: "flex" }}>
            {p.icon}
          </div>
          <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontWeight: 600 }}>
            {p.category}
          </span>
        </div>
        <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Header */}
      <div>
        <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", marginBottom: "3px" }}>
          {p.title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 500 }}>
          {p.subtitle}
        </p>
      </div>

      {/* Impact Highlight */}
      <div style={{
        padding: "8px 12px",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent-light)", fontWeight: 700 }}>
          OUTCOME:
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#f8fafc", fontWeight: 600 }}>
          {p.metric}
        </span>
      </div>

      {/* Problem -> Solution -> Result Breakdown */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "10px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#94a3b8", fontWeight: 700, display: "block", marginBottom: "2px" }}>
            CHALLENGE
          </span>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
            {p.problem}
          </p>
        </div>

        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "10px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent-light)", fontWeight: 700, display: "block", marginBottom: "2px" }}>
            ARCHITECTURE & SOLUTION
          </span>
          <p style={{ fontSize: "0.82rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
            {p.solution}
          </p>
        </div>

        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "10px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#60a5fa", fontWeight: 700, display: "block", marginBottom: "2px" }}>
            RESULT
          </span>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
            {p.result}
          </p>
        </div>
      </div>

      {/* Tech Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", paddingTop: "6px" }}>
        {p.tags.map((tag, i) => (
          <span key={i} style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.02)", padding: "3px 8px", borderRadius: "4px", border: "1px solid var(--border)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "HEALTHTECH & REAL-TIME", "AI & SAAS", "ENTERPRISE & MOBILE"];

  const filtered = filter === "ALL" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <div className="section-tag">
            <span className="section-tag-dot"></span> Engineering Case Studies
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", marginBottom: "16px", fontWeight: 800 }}>
            Featured <span className="text-metallic">Projects</span>.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Detailed breakdown of production systems across healthcare telemetry, hardware integrations, AI workflows, and multi-tenant architectures.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="reveal" style={{ display: "flex", gap: "8px", marginBottom: "36px", flexWrap: "wrap" }}>
          {filters.map((f) => {
            const isSelected = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  background: isSelected ? "var(--accent)" : "rgba(255, 255, 255, 0.03)",
                  color: isSelected ? "#090a0f" : "var(--text-secondary)",
                  border: `1px solid ${isSelected ? "var(--accent)" : "var(--border)"}`,
                  padding: "6px 16px",
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  transition: "var(--transition)"
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
          {filtered.map((p, i) => (
            <CaseStudyCard key={p.id} p={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;