import React, { useState, useEffect, useRef } from "react";

const roles = [
  "SCALABLE APPLICATIONS",
  "HIGH-PERFORMANCE SYSTEMS",
  "CROSS-PLATFORM SOLUTIONS",
  "SECURE CLOUD ARCHITECTURES"
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [time, setTime] = useState(new Date());
  const name = "MEHTAB AHMED";
  const heroRef = useRef(null);

  // Live Clock
  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && roleText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setRoleText(currentRole.substring(0, isDeleting ? roleText.length - 1 : roleText.length + 1));
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const resetMagnetic = (e) => { e.currentTarget.style.transform = `translate(0, 0)`; };

  const padded = (n) => String(n).padStart(2, "0");

  return (
    <section id="home" ref={heroRef} style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="section-num" style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontWeight: 800, color: "rgba(255,255,255,0.015)", fontSize: "20rem", pointerEvents: "none", zIndex: -1 }}>01</div>

      {/* Corner HUD Decorations */}
      <div style={{ position: "absolute", top: "80px", left: "30px", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--accent)", opacity: 0.6, lineHeight: 2 }}>
        <div>◉ ONLINE</div>
        <div style={{ color: "var(--text-dim)" }}>PKST {padded(time.getHours())}:{padded(time.getMinutes())}:{padded(time.getSeconds())}</div>
        <div style={{ color: "var(--text-dim)" }}>LAT: 33.6°N</div>
      </div>

      <div style={{ position: "absolute", top: "80px", right: "30px", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--secondary)", opacity: 0.6, lineHeight: 2, textAlign: "right" }}>
        <div>BUILD: v3.0.0</div>
        <div style={{ color: "var(--text-dim)" }}>ENV: PRODUCTION</div>
        <div style={{ color: "var(--accent)" }}>STATUS: AVAILABLE</div>
      </div>

      {/* Floating Geometric Icons */}
      <div style={{ position: "absolute", top: "20%", left: "8%", opacity: 0.15, animation: "float 6s ease-in-out infinite" }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="0.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div style={{ position: "absolute", top: "30%", right: "8%", opacity: 0.12, animation: "float 8s ease-in-out infinite", animationDelay: "-3s" }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="0.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      </div>
      <div style={{ position: "absolute", bottom: "25%", left: "12%", opacity: 0.12, animation: "float 7s ease-in-out infinite", animationDelay: "-5s" }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--tertiary)" strokeWidth="0.8"><polygon points="12 2 22 20 2 20"/></svg>
      </div>

      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(74,222,128,0.07), transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(96,165,250,0.07), transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>

      {/* Main Content */}
      <div style={{ textAlign: "center", maxWidth: "1100px", zIndex: 2, padding: "0 20px" }}>
        <p className="reveal" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "4px", marginBottom: "20px", fontSize: "0.8rem" }}>
          &gt; HELLO, I AM_
        </p>

        <h1 style={{ fontSize: "clamp(2rem, 8vw, 7rem)", lineHeight: 0.9, marginBottom: "20px", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
          {name.split("").map((char, i) => (
            <span key={i} className="char-reveal-span" style={{ animationDelay: `${i * 0.05}s`, display: "inline-block" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Typewriter */}
        <div className="reveal" style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)", fontFamily: "var(--font-mono)", color: "var(--text-dim)", minHeight: "1.5em", marginBottom: "50px", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "var(--accent)" }}>//</span>
          <span>I ENGINEER</span>
          <span style={{ color: "var(--accent)", fontWeight: 800 }}>{roleText}</span>
          <span style={{ width: "2px", height: "1em", background: "var(--accent)", display: "inline-block", animation: "blink 1s step-end infinite" }}></span>
        </div>

        {/* Stats Bar */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "50px", flexWrap: "wrap" }}>
          {[
            { label: "YEARS EXP", value: "2+" },
            { label: "PROJECTS", value: "15+" },
            { label: "CLIENTS", value: "10+" },
            { label: "UPTIME", value: "99.9%" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: i % 2 === 0 ? "var(--accent)" : "var(--secondary)", fontFamily: "var(--font-mono)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "2px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="magnetic-btn" onMouseMove={handleMagnetic} onMouseLeave={resetMagnetic}>
            VIEW MY WORK →
          </a>
          <a href="#contact" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "1px", padding: "16px 32px", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "100px", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.background = "rgba(74,222,128,0.05)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "rgba(74,222,128,0.3)"; e.target.style.background = "transparent"; }}>
            LET'S TALK
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{ position: "absolute", bottom: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", opacity: 0.4 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "3px", color: "var(--text-dim)" }}>SCROLL</span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, var(--accent), transparent)" }}></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .char-reveal-span { opacity: 0; animation: charReveal 0.5s ease forwards; }
        @keyframes charReveal { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Header;