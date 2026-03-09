import { motion } from 'motion/react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
            >
              <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">
                Maharaja Institute of Technology Mysuru
              </p>
              <p className="text-blue-400 font-semibold mt-2">CGPA: 9.275</p>
              <p className="text-gray-500 text-sm mt-1">Expected 2027</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
            >
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Mysuru, Karnataka</p>
              <p className="text-gray-500 text-sm mt-2">India</p>
            </motion.div>

            {/* Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
            >
              <Target className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focus Areas</h3>
              <p className="text-gray-400">
                Machine Learning, Deep Learning, Full Stack Development
              </p>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Kavya Mahantesh Injineri is a Computer Science and Engineering student
              at Maharaja Institute of Technology Mysuru with a CGPA of 9.275 and
              expected graduation in 2027. Her interests include machine learning,
              deep learning, and full stack development. She enjoys designing
              end-to-end AI systems that move from research and experimentation to
              real-world deployment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
