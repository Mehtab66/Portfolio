import React from "react";
import { ArrowRight, Mail, CheckCircle2, ShieldCheck, Activity, Cpu } from "lucide-react";

const Header = () => {
  return (
    <section id="home" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1050px", margin: "0 auto", textAlign: "center", zIndex: 2 }}>
        
        {/* Availability Badge */}
        <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 16px", background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "var(--radius-full)", marginBottom: "28px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }}></span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600, color: "#34d399", letterSpacing: "0.03em" }}>
            AVAILABLE FOR FREELANCE & PARTNERSHIPS
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="reveal" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)", lineHeight: 1.12, marginBottom: "24px", letterSpacing: "-0.03em", fontWeight: 800 }}>
          Building <span className="text-metallic">HealthTech</span> & <span className="text-gradient-emerald">Real-Time Systems</span> with Measurable Impact.
        </h1>

        {/* Value Proposition Description */}
        <p className="reveal" style={{ color: "var(--text-secondary)", maxWidth: "780px", margin: "0 auto 36px auto", fontSize: "clamp(1rem, 1.25vw, 1.15rem)", lineHeight: 1.75 }}>
          I am a Full Stack Software Engineer (React, React Native, Node.js, NestJS, WebSockets, AWS) with hands-on experience delivering HIPAA-compliant healthcare applications, medical device SDK integrations (BP/SPO2 & Dermatoscope), and ultra-low-latency telemetry backends.
        </p>

        {/* Primary Action Buttons */}
        <div className="reveal" style={{ display: "flex", gap: "14px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginBottom: "60px" }}>
          <a href="#projects" className="btn-primary">
            View Case Studies <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} color="var(--accent-light)" /> Get In Touch
          </a>
        </div>

        {/* Metric Cards - Clean, modern, understated */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "14px",
          textAlign: "left"
        }}>
          {[
            { metric: "-40%", title: "Manual Check-in Time", desc: "Cut via React Native patient monitoring app & device SDKs" },
            { metric: "100+", title: "Daily Live Sessions", desc: "Real-time ocular telemetry streaming via WebSockets & VideoSDK" },
            { metric: "30+", title: "US Medical Practices", desc: "HIPAA cloud platform with RingCentral integration" },
            { metric: "Zero", title: "Security Incidents", desc: "Enforced JWT & OAuth security across production backends" }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "20px 22px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                transition: "var(--transition)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.85rem", fontWeight: 800, color: "#fff", marginBottom: "2px", letterSpacing: "-0.02em" }}>
                {item.metric}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Header;