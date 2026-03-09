import { motion } from 'motion/react';
import { Award, Trophy, BookOpen } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: '2nd Place — Teckshetra 2025',
      organization: 'Sri Jayachamarajendra College of Engineering',
      type: 'achievement',
    },
  ];

  const certifications = [
    {
      icon: BookOpen,
      title: 'IBM Generative AI: Introduction and Applications',
      organization: 'Coursera',
      type: 'certification',
    },
    {
      icon: BookOpen,
      title: 'IBM Developing Front-End Apps with React',
      organization: 'Coursera',
      type: 'certification',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Achievements & <span className="text-[#3b82f6]">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <Award className="text-[#3b82f6]" size={28} />
              Achievements
            </h3>
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3b82f6]/10 rounded-lg">
                    <item.icon className="text-[#3b82f6]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{item.title}</h4>
                    <p className="text-white/60">{item.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <BookOpen className="text-[#3b82f6]" size={28} />
              Certifications
            </h3>
            {certifications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3b82f6]/10 rounded-lg">
                    <item.icon className="text-[#3b82f6]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{item.title}</h4>
                    <p className="text-white/60">{item.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
