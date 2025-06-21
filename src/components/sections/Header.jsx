import React, { useState } from "react";
import { Navigation } from "./Navigation"; // Pastikan path benar

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
];

const Header = ({ activeSection = "", onNavigate = () => {} }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Navigation items={navigationItems} className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
