import React from "react";

const Footer = () => {
  const links = [
    { label: "GITHUB", href: "https://github.com/Mehtab66" },
    { label: "LINKEDIN", href: "https://linkedin.com/in/mehtab-ahmed058" },
    { label: "EMAIL", href: "mailto:mohamadmehtabahmed@gmail.com" },
  ];

  return (
    <footer style={{ 
      borderTop: "1px solid var(--glass-border)",
      background: "var(--bg-dark)",
      padding: "50px 5%"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "30px", marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--glass-border)" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ width: "28px", height: "28px", border: "1px solid var(--accent)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)", fontWeight: 700 }}>M</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>MEHTAB.DEV</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", maxWidth: "280px", lineHeight: 1.8 }}>
              Full Stack Developer crafting scalable systems and exceptional digital experiences.
            </p>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {links.map((link, i) => (
              <a key={i} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-dim)",
                textDecoration: "none",
                letterSpacing: "2px",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-dim)"; }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            background: "transparent",
            border: "1px solid var(--glass-border)",
            color: "var(--text-dim)",
            padding: "10px 22px",
            borderRadius: "100px",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "2px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(74,222,128,0.15)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.boxShadow = "none"; }}>
            BACK TO TOP ↑
          </button>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)" }}>
            © 2026 Mehtab Ahmed • Rawalpindi, Pakistan
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)", animation: "pulse 2s infinite" }}></div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)" }}>
              All systems <span style={{ color: "var(--accent)" }}>operational</span>
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)" }}>
            Built with React + Vite
          </span>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
    </footer>
  );
};

export default Footer;