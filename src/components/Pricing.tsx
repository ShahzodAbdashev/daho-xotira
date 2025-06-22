import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pricingPlans } from '../data/courseData';
import { Check, Star, Zap } from 'lucide-react';

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
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Xotira Ustasi Bo'lish Yo'lingizni Tanlang
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              O'z maqsadlaringiz va majburiyatlaringizga eng mos keladigan rejani tanlang
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Chegirmalar faqat bu hafta!
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`
                relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${plan.popular 
                  ? 'border-primary-500 shadow-xl transform md:-translate-y-4 bg-white' 
                  : 'border-gray-200 shadow-lg hover:border-primary-300 bg-white'}
              `}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{plan.discount} CHEGIRMA
                </div>
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    ENG OMMABOP
                  </div>
                </div>
              )}

              <div className="p-8 pt-14">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="ml-2 text-gray-600">{plan.duration}</span>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <span className="text-lg text-gray-500 line-through mr-3">{plan.originalPrice} {plan.duration}</span>
                    <span className="text-green-600 font-semibold">
                      Tejab qoldingiz: {(
                        parseInt(plan.originalPrice.replace(/[, ]/g, '')) - 
                        parseInt(plan.price.replace(/[, ]/g, ''))
                      ).toLocaleString('en-US')} {plan.duration}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`
                    w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg' 
                      : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'}
                  `}
                >
                  {plan.popular ? 'Eng Yaxshi Taklifni Tanlang' : 'Xarid Qilish'}
                </button>

                {/* Popular Plan Extra Info */}
                {plan.popular && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      ⭐ 1000+ o'quvchi tanlagan
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Tashkilotingiz yoki jamoangiz uchun maxsus yechim kerakmi?
          </p>
          <a href="#newsletter" className="text-primary-600 font-medium hover:underline">
            Biz bilan bog'laning
          </a>{' '}
          maxsus guruh narxlari uchun.
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;