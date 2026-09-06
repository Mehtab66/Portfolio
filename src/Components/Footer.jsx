import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg-card-muted)",
      padding: "50px 6% 40px 6%"
    }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", paddingBottom: "30px", borderBottom: "1px solid var(--border)", marginBottom: "30px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>
              Mehtab Ahmed
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", maxWidth: "420px" }}>
              Full Stack Software Engineer specializing in HealthTech applications, medical device SDKs, and real-time WebSocket architectures.
            </p>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <a href="https://github.com/Mehtab66" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none", transition: "var(--transition)" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/mehtab-ahmed058" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none", transition: "var(--transition)" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
              LinkedIn
            </a>
            <a href="mailto:mohamadmehtabahmed@gmail.com" style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none", transition: "var(--transition)" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
              Email
            </a>
            <a href="tel:+923430519849" style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none", transition: "var(--transition)" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
              Phone
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              padding: "8px 16px",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-full)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "var(--transition)"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
          <span>© {new Date().getFullYear()} Mehtab Ahmed • Rawalpindi, Pakistan</span>
          <span>React • React Native • Node.js • NestJS • WebSockets • AWS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;