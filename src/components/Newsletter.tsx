import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace these with your actual bot token and chat ID
      const BOT_TOKEN = '7622069536:AAEs8Bzvkg7xFJ5LxW1gI0G1-KJW4HxOF_c';
      const CHAT_ID = '7054963789';
      
      const message = `
🆕 Yangi Ro'yxatdan O'tgan:
👤 Ism: ${formData.fullName}
📱 Telefon: ${formData.phone}
⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
      `;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Bepul Xotira Texnikasini Oling
            </h2>
            <p className="text-gray-700">
              Yangiliklarimizga obuna bo'ling va darhol qo'llashingiz mumkin bo'lgan kuchli xotira texnikasini bepul oling.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="To'liq ismingiz"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon raqamingiz"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center ${
                status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? 'Yuborilmoqda...' : "Ro'yxatdan O'tish"}
              <Send className="ml-2 h-5 w-5" />
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center mt-2">
                Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center mt-2">
                Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;