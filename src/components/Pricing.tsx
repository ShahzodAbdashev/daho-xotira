import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pricingPlans } from '../data/courseData';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Xotira Ustasi Bo'lish Yo'lingizni Tanlang
          </h2>
          <p className="text-gray-700 text-lg">
            O'z maqsadlaringiz va majburiyatlaringizga eng mos keladigan rejani tanlang
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`
                rounded-2xl overflow-hidden border transition-all duration-300
                ${plan.popular 
                  ? 'border-primary-500 shadow-xl transform md:-translate-y-4' 
                  : 'border-gray-200 shadow-md hover:shadow-lg'}
              `}
            >
              {plan.popular && (
                <div className="bg-primary-600 text-white text-center py-2 font-medium">
                  Eng Ommabop
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-600">{plan.duration}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`
                    mt-8 w-full py-3 rounded-lg font-medium transition-colors
                    ${plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'}
                  `}
                >
                  Xarid Qilish
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Tashkilotingiz yoki jamoangiz uchun maxsus yechim kerakmi?{' '}
            <a href="#contact" className="text-primary-600 font-medium hover:underline">
              Biz bilan bog'laning
            </a>{' '}
            maxsus guruh narxlari uchun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;