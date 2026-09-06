import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Overview", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Case Studies", id: "projects" },
    { label: "Capabilities", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      padding: "0 6%",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(8, 9, 13, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "var(--transition)"
    }}>
      {/* Brand Name */}
      <div
        onClick={() => scrollToSection("home")}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <div style={{
          width: "28px",
          height: "28px",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: "0.8rem"
        }}>
          M
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
            Mehtab Ahmed
          </span>
          <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
            HealthTech & Real-Time Systems
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-full)",
          padding: "4px 6px",
          gap: "2px"
        }} className="desktop-nav-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  border: "none",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: isActive ? 600 : 500,
                  cursor: "pointer",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          style={{
            marginLeft: "10px",
            padding: "8px 18px",
            background: "var(--accent-muted)",
            color: "var(--accent-light)",
            border: "1px solid var(--accent-border)",
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            fontWeight: 600,
            borderRadius: "var(--radius-full)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            transition: "var(--transition)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#090a0f";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent-muted)";
            e.currentTarget.style.color = "var(--accent-light)";
            e.currentTarget.style.borderColor = "var(--accent-border)";
          }}
          className="desktop-cta"
        >
          Let's Talk <ArrowUpRight size={14} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "6px"
          }}
          className="nav-hamburger"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "68px",
          left: 0,
          right: 0,
          background: "rgba(8, 9, 13, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          padding: "20px 6%"
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                color: activeSection === item.id ? "var(--accent-light)" : "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 500,
                padding: "12px 0",
                textAlign: "left",
                cursor: "pointer",
                borderBottom: "1px solid var(--border)"
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ paddingTop: "16px" }}>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                width: "100%",
                padding: "12px",
                background: "var(--accent)",
                color: "#090a0f",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer"
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav-links, .desktop-cta { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;