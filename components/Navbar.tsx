import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { NAV_LINKS } from '../utils/coforgeData';

interface NavbarProps {
  openChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) {
      // Allow default behavior for external links (opening in new tab handled by target attribute)
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#082340] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className={`font-bold text-2xl tracking-tighter ${isScrolled ? 'text-white' : 'text-[#082340]'} lg:text-3xl cursor-pointer`}
            >
                <span className={isScrolled ? "text-white" : "text-white drop-shadow-md lg:text-[#082340]"}>Coforge</span>
            </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:text-[#f15b40] transition-colors ${
                isScrolled ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={openChat}
            className="text-white bg-[#f15b40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md active:scale-95"
          >
            Get in Touch
          </button>
          <button 
            onClick={openChat} 
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? 'text-white' : 'text-gray-800'}`}
            title="Search with AI"
          >
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white bg-[#f15b40] p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#082340] text-white py-6 px-6 flex flex-col gap-4 shadow-xl lg:hidden h-screen">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-lg font-medium border-b border-gray-700 pb-2"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openChat();
            }}
            className="bg-[#f15b40] w-full py-3 rounded-md font-bold mt-4"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;