import React from 'react';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Daho Xotira</span>
            </div>
            <p className="text-gray-400 mb-4">
              Miyangizning chinakam kuchini kashf eting va xotira qobiliyatingizni yangi bosqichga olib chiqing.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-2">
              {[
                ['Asosiy', 'home'],
                ['Dastur', 'curriculum'],
                ['Natijalar', 'testimonials'],
                ['Narxlar', 'pricing'],
                ['Savol-Javob', 'faq']
              ].map(([label, href]) => (
                <li key={href}>
                  <a 
                    href={`#${href}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="ml-2 text-gray-400">
                  +998 95 035 34 33
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="ml-2 text-gray-400">
                  info@dahoxotira.uz
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Daho Xotira. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Maxfiylik siyosati
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;