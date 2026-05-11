import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "PROJECTS", id: "projects" },
    { label: "SKILLS", id: "skills" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    // Active section tracker
    const trackSection = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("scroll", trackSection);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("scroll", trackSection);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: "0 5%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s, backdrop-filter 0.4s",
      transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
    }}>
      {/* Logo */}
      <div onClick={() => scrollToSection("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "32px", height: "32px", border: "1px solid var(--accent)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", fontWeight: 700 }}>M</span>
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, background: "linear-gradient(90deg, #fff, var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          MEHTAB.DEV
        </span>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              background: activeSection === item.id ? "rgba(74,222,128,0.08)" : "none",
              border: "none",
              color: activeSection === item.id ? "var(--accent)" : "var(--text-dim)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 500,
              cursor: "pointer",
              padding: "8px 14px",
              borderRadius: "6px",
              letterSpacing: "1px",
              transition: "all 0.2s",
              position: "relative",
            }}
            onMouseEnter={(e) => { if (activeSection !== item.id) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { if (activeSection !== item.id) e.currentTarget.style.color = "var(--text-dim)"; }}
          >
            {item.label}
            {activeSection === item.id && (
              <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}></div>
            )}
          </button>
        ))}

        {/* Hire CTA */}
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} style={{
          marginLeft: "12px",
          padding: "9px 20px",
          background: "var(--accent)",
          color: "#000",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "1px",
          borderRadius: "6px",
          textDecoration: "none",
          transition: "all 0.2s",
          whiteSpace: "nowrap"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(74,222,128,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
          HIRE ME
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer", marginLeft: "12px" }} className="nav-hamburger">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: "absolute", top: "70px", left: 0, right: 0, background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--glass-border)", padding: "20px 5%" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} style={{ display: "block", width: "100%", background: "none", border: "none", color: activeSection === item.id ? "var(--accent)" : "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", padding: "14px 0", textAlign: "left", cursor: "pointer", letterSpacing: "2px", borderBottom: "1px solid var(--glass-border)" }}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav > div:last-child > button:not(.nav-hamburger) { display: none !important; }
          nav > div:last-child > a { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;