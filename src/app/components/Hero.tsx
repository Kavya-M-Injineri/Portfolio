import { motion } from 'motion/react';
import { Github, Linkedin, FileText, Download, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-[#3b82f6] bg-clip-text text-transparent font-semibold">
                Kavya Mahantesh Injineri
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#3b82f6]">Machine Learning Engineer | Full Stack Developer</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Code. Data.{' '}
            <span className="text-[#3b82f6]">Intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-white/60"
          >
            Transforming real-world problems into AI solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Computer Science and Engineering student focused on building intelligent systems and scalable software that address real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 pt-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors duration-200 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </button>

            <a
              href="https://github.com/Kavya-M-Injineri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>

            <button
              onClick={() => scrollToSection('resume')}
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors duration-200 flex items-center gap-2"
            >
              <FileText size={18} />
              View Resume
            </button>

            <a
              href="/Kavya_Mahantesh_Injineri_Resume.pdf"
              download
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors duration-200 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 pt-4 justify-center"
          >
            <a
              href="https://github.com/Kavya-M-Injineri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#3b82f6] transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kavya-injineri-4a54532b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#3b82f6] transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}