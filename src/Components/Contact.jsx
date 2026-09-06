import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ArrowUpRight, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'config_missing' | 'error'
  const [statusMessage, setStatusMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending message to Mehtab...");

    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_SERVICE || "").trim();
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_TEMPLATE || "").trim();
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC || "").trim();

    // Check if EmailJS keys are configured in .env
    if (serviceId && templateId && publicKey) {
      try {
        const templateParams = {
          from_name: formData.name,
          name: formData.name,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Mehtab Ahmed"
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setStatus("success");
        setStatusMessage("Message sent successfully! I will reply to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error("EmailJS sending error:", err);
        setStatus("error");
        setStatusMessage(`Email delivery failed (${err?.text || err?.message || "Check EmailJS setup"}). You can email directly below.`);
      }
    } else {
      // Clear notification when keys are missing in .env
      const missing = [];
      if (!serviceId) missing.push("Service ID");
      if (!templateId) missing.push("Template ID");
      if (!publicKey) missing.push("Public Key");

      setStatus("config_missing");
      setStatusMessage(`Missing EmailJS ${missing.join(" & ")} in .env. Add them to .env or send directly via email client.`);
    }
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || "Client"}`);
    const body = encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.open(`mailto:mohamadmehtabahmed@gmail.com?subject=${subject}&body=${body}`, '_blank');
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
                  <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>EMAIL DIRECTLY</div>
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
              Have a question or project in mind? Drop a message below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name or Organization"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-light)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-light)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              <textarea
                name="message"
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
                disabled={status === "sending"}
                style={{
                  padding: "13px",
                  background: status === "sending" ? "var(--text-dim)" : "var(--accent)",
                  color: "#090a0f",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "var(--transition)",
                  opacity: status === "sending" ? 0.7 : 1
                }}
              >
                {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
              </button>

              {/* Status Alert Notification */}
              {status !== "idle" && (
                <div style={{
                  marginTop: "6px",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.82rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  background: status === "success" ? "rgba(16, 185, 129, 0.1)" : status === "config_missing" ? "rgba(245, 158, 11, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  border: `1px solid ${status === "success" ? "rgba(16, 185, 129, 0.3)" : status === "config_missing" ? "rgba(245, 158, 11, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
                  color: status === "success" ? "#34d399" : status === "config_missing" ? "#fbbf24" : "#f87171"
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    {status === "success" ? <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: "2px" }} /> : <AlertCircle size={16} style={{ flexShrink: 0, marginTop: "2px" }} />}
                    <div>{statusMessage}</div>
                  </div>

                  {(status === "config_missing" || status === "error") && (
                    <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                      <button
                        type="button"
                        onClick={openEmailClient}
                        style={{
                          padding: "6px 12px",
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid currentColor",
                          borderRadius: "var(--radius-sm)",
                          color: "inherit",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        Open In Email App <ExternalLink size={12} />
                      </button>
                    </div>
                  )}
                </div>
              )}
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