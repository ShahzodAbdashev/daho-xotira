import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { courseModules } from '../data/courseData';
import { Brain, Building, Calculator, User, BookOpen, Target, Zap, Languages, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6" />,
  building: <Building className="h-6 w-6" />,
  calculator: <Calculator className="h-6 w-6" />,
  user: <User className="h-6 w-6" />,
  'book-open': <BookOpen className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  languages: <Languages className="h-6 w-6" />,
  lightbulb: <Lightbulb className="h-6 w-6" />
};

const Curriculum: React.FC = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O'quv Dasturi
          </h2>
          <p className="text-gray-700 text-lg">
            Bizning tuzilgan, bosqichma-bosqich o'quv dasturimiz sizni asosiy tamoyillardan ilg'or xotira texnikalarigacha olib boradi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Connection Line */}
            <div className="absolute left-8 md:left-9 top-0 bottom-0 w-0.5 bg-primary-200 z-0"></div>
            
            {courseModules.map((module, index) => (
              <motion.div
                key={module.id}
                variants={itemVariants}
                className="relative z-10 mb-8 last:mb-0 flex"
              >
                {/* Module Icon */}
                <div className={`
                  flex-shrink-0 w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center
                  ${index % 3 === 0 ? 'bg-primary-100 text-primary-600' : 
                    index % 3 === 1 ? 'bg-secondary-100 text-secondary-600' : 
                    'bg-accent-100 text-accent-600'}
                  shadow-md
                `}>
                  {iconMap[module.icon]}
                </div>
                
                {/* Module Content */}
                <div className="ml-6 bg-white rounded-lg p-6 shadow-md border border-gray-100 flex-1">
                  <div className="flex items-start justify-between flex-wrap">
                    <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0">
                      {module.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{module.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;