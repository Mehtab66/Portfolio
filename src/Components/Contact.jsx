import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Terminal, Code2, Cpu } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  const socials = [
    { icon: <Mail size={20} />, label: "EMAIL", value: "mohamadmehtabahmed@gmail.com", href: "mailto:mohamadmehtabahmed@gmail.com", color: "var(--accent)" },
    { icon: <Linkedin size={20} />, label: "LINKEDIN", value: "linkedin.com/in/mehtab-ahmed058", href: "https://linkedin.com/in/mehtab-ahmed058", color: "var(--secondary)" },
    { icon: <Github size={20} />, label: "GITHUB", value: "github.com/Mehtab66", href: "https://github.com/Mehtab66", color: "var(--tertiary)" },
  ];

  const inputStyle = (field) => ({
    width: "100%",
    background: focused === field ? "rgba(74, 222, 128, 0.03)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused === field ? "var(--accent)" : "var(--glass-border)"}`,
    padding: "14px 18px",
    borderRadius: "8px",
    color: "#fff",
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    outline: "none",
    transition: "all 0.3s",
    boxShadow: focused === field ? "0 0 20px rgba(74,222,128,0.1)" : "none",
    resize: field === "message" ? "vertical" : "none"
  });

  return (
    <section id="contact" style={{ position: "relative", padding: "120px 20px" }}>
      <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>06</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="reveal" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "4px", marginBottom: "16px" }}>&gt; ping mehtab.dev</p>
        <h2 className="reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "20px", fontFamily: "var(--font-display)" }}>
          LET'S <span style={{ background: "linear-gradient(135deg, var(--accent), var(--secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CONNECT.</span>
        </h2>
        <p className="reveal" style={{ color: "var(--text-dim)", maxWidth: "500px", lineHeight: 1.7, marginBottom: "60px" }}>
          Have a project, collab idea, or just want to talk code? I'm always online.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          {/* Left */}
          <div className="reveal">
            {/* Availability Banner */}
            <div style={{ padding: "20px 24px", background: "rgba(74, 222, 128, 0.05)", border: "1px solid rgba(74, 222, 128, 0.2)", borderRadius: "12px", marginBottom: "36px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 15px var(--accent)", flexShrink: 0, animation: "pulse 2s infinite" }}></div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "2px", marginBottom: "3px" }}>STATUS: AVAILABLE</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-dim)" }}>Open to freelance & full-time opportunities</div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "18px 20px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  color: "#fff"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = "translateX(8px)"; e.currentTarget.style.boxShadow = `0 0 20px ${s.color}20`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: s.color, display: "flex", flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "3px" }}>{s.label}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#fff" }}>{s.value}</div>
                  </div>
                  <span style={{ color: "var(--text-dim)", fontSize: "1.2rem" }}>→</span>
                </a>
              ))}
            </div>

            {/* Fun stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              {[
                { icon: <Terminal size={16} />, val: "50K+", label: "Lines Written" },
                { icon: <Code2 size={16} />, val: "15+", label: "Projects" },
                { icon: <Cpu size={16} />, val: "99.9%", label: "Uptime" },
              ].map((s, i) => (
                <div key={i} style={{ padding: "16px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "8px", textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", marginBottom: "8px", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 800, color: "#fff" }}>{s.val}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-dim)", letterSpacing: "1px", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div style={{ padding: "40px", background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "16px", position: "relative", overflow: "hidden" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "3px", marginBottom: "28px" }}>// SEND A MESSAGE</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  type="text" placeholder="Your Name" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                />
                <input
                  type="email" placeholder="Your Email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("email")}
                />
                <textarea
                  placeholder="Your Message" rows="5" required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("message")}
                />

                <button type="submit" style={{
                  display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",
                  padding: "16px",
                  background: status === "success" ? "rgba(74,222,128,0.15)" : "var(--accent)",
                  color: status === "success" ? "var(--accent)" : "#000",
                  border: status === "success" ? "1px solid var(--accent)" : "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  transition: "all 0.3s"
                }}>
                  {status === "sending" ? "SENDING..." : status === "success" ? "✓ MESSAGE SENT!" : <><Send size={16} /> SEND MESSAGE</>}
                </button>
              </form>

              {/* Corner glow */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--accent)50, transparent)" }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 8px var(--accent); } 50% { box-shadow: 0 0 20px var(--accent); } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); font-family: var(--font-mono); }
        @media (max-width: 900px) { #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
};

export default Contact;