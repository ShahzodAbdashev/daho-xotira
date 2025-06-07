import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Daho Xotira</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              ['Asosiy', 'home'],
              ['Dastur', 'curriculum'],
              ['Natijalar', 'testimonials'],
              ['Narxlar', 'pricing'],
              ['Savol-Javob', 'faq']
            ].map(([label, href]) => (
              <a 
                key={href}
                href={`#${href}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {label}
              </a>
            ))}
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors">
              Ro'yxatdan O'tish
            </button>
          </nav>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {[
                ['Asosiy', 'home'],
                ['Dastur', 'curriculum'],
                ['Natijalar', 'testimonials'],
                ['Narxlar', 'pricing'],
                ['Savol-Javob', 'faq']
              ].map(([label, href]) => (
                <a 
                  key={href}
                  href={`#${href}`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors w-full">
                Ro'yxatdan O'tish
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;