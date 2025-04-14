
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-devops-dark shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-poppins text-devops-navy dark:text-devops-navy-dark">
          DevOps<span className="text-devops-accent">Pro</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors hover:text-devops-accent ${isScrolled ? 'text-devops-navy dark:text-devops-navy-dark' : 'text-devops-navy dark:text-devops-navy-dark'}`}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="/resume.pdf" 
            className="btn-primary"
            download="lakshman_bolisetti_resume.pdf"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-devops-navy dark:text-devops-navy-dark"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-devops-dark shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium py-2 transition-colors hover:text-devops-accent dark:text-devops-navy-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              download="lakshman_bolisetti_resume.pdf"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
