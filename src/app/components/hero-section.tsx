import { motion } from 'motion/react';
import { Github, Linkedin, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Code. Data. Intelligence.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Transforming real-world problems
            </span>
            <br />
            into AI solutions.
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white"
          >
            Kavya Mahantesh Injineri
          </motion.h2>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 text-blue-400"
          >
            Machine Learning Engineer | Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto"
          >
            Computer Science and Engineering student focused on building intelligent
            systems and scalable software that address real-world challenges.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
            >
              View Projects
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg transition-all"
            >
              <a
                href="https://github.com/Kavya-M-Injineri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              onClick={scrollToResume}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all"
            >
              <a
                href="/Kavya_Mahantesh_Injineri_Resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/Kavya-M-Injineri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/kavya-injineri-4a54532b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
