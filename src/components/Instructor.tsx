import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { instructor } from '../data/courseData';
import { CheckCircle } from 'lucide-react';

const Instructor: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <motion.div 
              className="w-full md:w-2/5"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-secondary-500/30 rounded-2xl -m-3 blur-md"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
                  <img 
                    src="/public/photo_2025-06-05_17-34-02.jpg" 
                    alt={instructor.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-3/5"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                O'qituvchingiz Bilan Tanishing
              </h2>
              <h3 className="text-xl text-primary-600 font-medium mb-4">
                {instructor.name}
              </h3>
              <p className="text-gray-600 mb-2">{instructor.role}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {instructor.bio}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Malakalar:</h4>
                <ul className="space-y-2">
                  {instructor.credentials.map((credential, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;