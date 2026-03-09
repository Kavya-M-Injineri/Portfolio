import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    title: '2nd Place — Teckshetra 2025',
    organization: 'Sri Jayachamarajendra College of Engineering',
    type: 'competition',
  },
];

const certifications = [
  {
    title: 'IBM Generative AI: Introduction and Applications',
    provider: 'Coursera',
  },
  {
    title: 'IBM Developing Front-End Apps with React',
    provider: 'Coursera',
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            Achievements & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400">{achievement.organization}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
