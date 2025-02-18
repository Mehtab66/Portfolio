import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu on mobile
  };

  return (
    <nav className="bg-[#1F1F1F] text-white py-6 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold">Mehtab Ahmed</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          {["HOME", "ABOUT", "WORK EXPERIENCE", "PROJECTS", "SKILLS"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="hover:text-gray-400 transition-colors duration-200"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center py-4 text-lg">
          {["HOME", "ABOUT", "WORK EXPERIENCE", "PROJECTS", "SKILLS"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="hover:text-gray-400 transition-colors duration-200"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
