import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g fill="none" stroke="#4A2A75" strokeWidth="0.2">
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M${Math.random() * 100},${Math.random() * 100} 
                    C${Math.random() * 100},${Math.random() * 100} 
                    ${Math.random() * 100},${Math.random() * 100} 
                    ${Math.random() * 100},${Math.random() * 100}`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Miyangizning <span className="text-primary-600">Chinakam Kuchini</span> Kashf Eting
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              Sizning xotirangiz past emas - undan to'g'ri foydalanishni bilmaysiz, xolos. Bizning "Daho Xotira" kursimiz orqali xotira qobiliyatingizni 10 baravarga oshiring.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('newsletter');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium text-lg shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center"
              >
                Hoziroq Boshlang
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium text-lg hover:bg-primary-50 transition-all flex items-center justify-center">
                Batafsil Ma'lumot
              </button>
            </div>
            
          </motion.div>
          
          <motion.div 
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/public/photo_2025-06-05_17-22-29.jpg" 
                  alt="O'quvchi muvaffaqiyati" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;