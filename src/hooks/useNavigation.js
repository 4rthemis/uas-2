import { useState, useCallback } from 'react';

export const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navigateToSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    closeMobileMenu();
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [closeMobileMenu]);

  return {
    isMobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    closeMobileMenu,
    navigateToSection
  };
};