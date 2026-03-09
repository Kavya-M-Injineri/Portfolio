import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            About <span className="text-[#3b82f6]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              Kavya Mahantesh Injineri is a Computer Science and Engineering student at{' '}
              <span className="text-[#3b82f6]">Maharaja Institute of Technology Mysuru</span> with a CGPA of{' '}
              <span className="text-[#3b82f6]">9.275</span> and expected graduation in 2027.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Her interests include machine learning, deep learning, and full stack development. She enjoys designing
              end-to-end AI systems that move from research and experimentation to real-world deployment.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <MapPin className="text-[#3b82f6]" size={24} />
              <span className="text-lg text-white/80">Mysuru, Karnataka, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg">
                  <GraduationCap className="text-[#3b82f6]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Education</h3>
                  <p className="text-white/70">B.E. in Computer Science and Engineering</p>
                  <p className="text-white/60">Maharaja Institute of Technology Mysuru</p>
                  <p className="text-[#3b82f6] mt-1">CGPA: 9.275</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg">
                  <Briefcase className="text-[#3b82f6]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Current Role</h3>
                  <p className="text-white/70">SDE Intern</p>
                  <p className="text-[#3b82f6]">Bluestock Fintech</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg">
                  <Award className="text-[#3b82f6]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Focus Areas</h3>
                  <ul className="text-white/70 space-y-1">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• Full Stack Development</li>
                    <li>• AI System Design & Deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}