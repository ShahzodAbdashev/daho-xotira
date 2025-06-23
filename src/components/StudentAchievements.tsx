import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Trophy, Star, Users, Hash } from 'lucide-react';

const StudentAchievements: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      id: 1,
      title: "Xotira Chempionati G'olibi",
      
      description: "Bizning o'quvchimiz yangi rekordni qo'yib oldi",
      videoUrl: "https://youtu.be/AM2lgGgI0D4?si=OSMGLBJE5hlVWyFI",
      thumbnail: "https://img.youtube.com/vi/AM2lgGgI0D4/maxresdefault.jpg",
      studentName: "Husnora",
      achievement: "Raqam yodlash rekordchisi"
    },
    {
      id: 2,
      title: "Tezkor O'qish Rekordi",
      description: "Bir daqiqada 1000 ta raqamni o'qish va eslab qolish bo'yicha yangi rekord",
      videoUrl: "https://youtu.be/6YHcc6gMpIA?si=giyFGAaNvGlrxZQN",
      thumbnail: "https://img.youtube.com/vi/6YHcc6gMpIA/maxresdefault.jpg",
      studentName: "Zafar",
      achievement: "Raqam yodlash rekordchisi"
    }
  ];

  const stats = [
    { icon: <Trophy className="h-8 w-8" />, number: "50+", label: " Maktab Chempionlar" },
    { icon: <Star className="h-8 w-8" />, number: "1000+", label: "Muvaffaqiyatli o'quvchilar" },
    { icon: <Play className="h-8 w-8" />, number: "100%", label: "Kafolatlangan natija" },
    { icon: <Hash className="h-8 w-8" />, number: "1000+", label: "Raqam yodlash natijasi" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            O'quvchilarimizning Muvaffaqiyatlari
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 text-lg mb-8"
          >
            Bizning isbotlangan texnikalarimiz orqali o'z xotira qobiliyatlarini yangi bosqichga olib chiqqan o'quvchilarimizning natijalari
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievement Videos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer">
                <img 
                  src={achievement.thumbnail} 
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {achievement.achievement}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold">
                        {achievement.studentName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{achievement.studentName}</div>
                      <div className="text-sm text-gray-600">{achievement.achievement}</div>
                    </div>
                  </div>
                  <a
                    href={achievement.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Ko'rish
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6">
            Siz ham shunday muvaffaqiyatlarga erishishni xohlaysizmi?
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('newsletter');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-primary-700 transition-colors flex items-center mx-auto"
          >
            <Trophy className="h-5 w-5 mr-2" />
            O'z Muvaffaqiyatingizni Boshlang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentAchievements; 