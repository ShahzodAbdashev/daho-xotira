import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
const CTA: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Xotirangizni O'zgartirishga Tayyormisiz?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bizning isbotlangan xotira texnikalarimiz orqali o'z miyasining chinakam potensialini ochgan minglab o'quvchilarimizga qo'shiling.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('newsletter');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              Hoziroq Ro'yxatdan O'ting
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Batafsil Ma'lumot
            </button>
          </div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;