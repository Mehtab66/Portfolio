import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      const mailtoLink = `mailto:mohamadmehtabahmed@gmail.com?subject=Project Inquiry: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid var(--border)",
    padding: "12px 16px",
    borderRadius: "var(--radius-sm)",
    color: "#fff",
    fontFamily: "var(--font-body)",
    fontSize: "0.88rem",
    outline: "none",
    transition: "var(--transition)"
  };

  return (
    <section id="contact">
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <div className="section-tag">
            <span className="section-tag-dot"></span> Get In Touch
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", marginBottom: "16px", fontWeight: 800 }}>
            Let's Discuss <span className="text-metallic">Your Next Project</span>.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "650px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Available for freelance full-stack development, HealthTech architectures, real-time WebSocket systems, and ongoing technical partnerships.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "36px", alignItems: "start" }}>
          
          {/* Left Column: Direct Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            {/* Email Card */}
            <div style={{
              padding: "20px 22px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "var(--transition)"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--border-hover)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
              <a href="mailto:mohamadmehtabahmed@gmail.com" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", color: "inherit", flexGrow: 1 }}>
                <div style={{ padding: "10px", background: "var(--accent-muted)", borderRadius: "var(--radius-sm)", color: "var(--accent-light)", display: "flex" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>EMAIL</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>mohamadmehtabahmed@gmail.com</div>
                </div>
              </a>
              <button
                onClick={() => handleCopy("mohamadmehtabahmed@gmail.com", "email")}
                title="Copy Email"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: copiedEmail ? "var(--accent-light)" : "var(--text-muted)", padding: "8px", cursor: "pointer", transition: "var(--transition)" }}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div style={{
              padding: "20px 22px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "var(--transition)"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--border-hover)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
              <a href="tel:+923430519849" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", color: "inherit", flexGrow: 1 }}>
                <div style={{ padding: "10px", background: "var(--accent-muted)", borderRadius: "var(--radius-sm)", color: "var(--accent-light)", display: "flex" }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>PHONE / WHATSAPP</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>+92 343 0519849</div>
                </div>
              </a>
              <button
                onClick={() => handleCopy("+923430519849", "phone")}
                title="Copy Phone"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: copiedPhone ? "var(--accent-light)" : "var(--text-muted)", padding: "8px", cursor: "pointer", transition: "var(--transition)" }}
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div style={{
              padding: "20px 22px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}>
              <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "var(--radius-sm)", color: "var(--text-secondary)", display: "flex" }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>LOCATION</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>Rawalpindi, Pakistan (Open to Global Remote)</div>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <a
                href="https://linkedin.com/in/mehtab-ahmed058"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  transition: "var(--transition)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              >
                <Linkedin size={16} color="#60a5fa" /> LinkedIn <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>

              <a
                href="https://github.com/Mehtab66"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  transition: "var(--transition)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              >
                <Github size={16} /> GitHub <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div style={{
            padding: "32px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)"
          }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
              Send an Inquiry
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Fill out the form below to initiate an email directly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                type="text"
                placeholder="Your Name or Company"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-light)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-light)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              <textarea
                placeholder="Details regarding your project, timeline, or architecture..."
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-light)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />

              <button
                type="submit"
                style={{
                  padding: "12px",
                  background: status === "success" ? "var(--accent-muted)" : "var(--accent)",
                  color: status === "success" ? "var(--accent-light)" : "#090a0f",
                  border: status === "success" ? "1px solid var(--accent-border)" : "none",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "var(--transition)"
                }}
              >
                {status === "sending" ? "Preparing..." : status === "success" ? "✓ Inquiry Ready!" : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;