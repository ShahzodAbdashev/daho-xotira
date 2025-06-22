import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Clock, Users, BookOpen, Target } from 'lucide-react';

const featuresData = [
  {
    icon: <Brain className="h-8 w-8 text-primary-600" />,
    title: "Ilmiy Asoslangan",
    description: "Zamonaviy neyrofan kashfiyotlari va xotira chempionlari tajribasiga asoslangan."
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-500" />,
    title: "Tezkor Natija",
    description: "2-3 soat chalg‘imasdan ishlashni o’rganasiz, endi sizni hech kim gapirsa ham chalg’itopmaydi, sizda esa samaradorlik ancha oshadi.."
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary-500" />,
    title: "Dars o'tilish tarzi",
    description: "Kurs 100% online, yopiq kanalda bo‘ladi. Video darslar, amaliy mashqlar bajarish uchun tarqatma materiallar va uyga vazifalarni tekshirish bo’ladi."
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: "Jamiyat Qo'llab-quvvatlashi",
    description: "O'zaro yordam va motivatsiya uchun faol o'quvchilar jamoasiga qo'shiling."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-accent-500" />,
    title: "To'liq Dastur",
    description: "So‘zlar, raqamlar, faktlar, sanalarni yodlash bo‘yicha maxsus texnikalar o’rganasiz va har qanday ma’lumotlarni eslab qolib adashmasdan aytib berasiz."
  },
  {
    icon: <Target className="h-8 w-8 text-secondary-500" />,
    title: "Amaliy Qo'llash",
    description: "O'quv, ish va kundalik hayotda darhol qo'llash mumkin bo'lgan usullar."
  }
];

const Features: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nima Uchun "Daho Xotira" Kursini Tanlashingiz Kerak?
          </h2>
          <p className="text-gray-700 text-lg">
            Bizning kursimiz minglab o'quvchilarga o'z xotira qobiliyatlarini sezilarli darajada oshirishga yordam berdi.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border border-gray-100"
            >
              <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;