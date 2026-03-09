import { motion } from 'motion/react';
import { Github, Star, GitFork, Code } from 'lucide-react';

export function GitHubSection() {
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Github className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Explore My GitHub
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Dive into my open-source contributions, personal projects, and code
            repositories. From machine learning models to full-stack applications.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Top Repositories</h3>
              <p className="text-gray-400 text-sm">
                Explore featured projects and code samples
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <Star className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Contribution Activity</h3>
              <p className="text-gray-400 text-sm">
                View commits, pull requests, and activity
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <GitFork className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Languages Used</h3>
              <p className="text-gray-400 text-sm">
                Python, JavaScript, Java, and more
              </p>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            href="https://github.com/Kavya-M-Injineri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-semibold"
          >
            <Github className="w-6 h-6" />
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
