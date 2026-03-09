import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'KrishiSarthi AI',
    description:
      'Agricultural intelligence platform using EfficientNet-B0 and YOLOv8 for crop disease detection and wildlife intrusion alerts.',
    tags: ['EfficientNet', 'YOLOv8', 'Computer Vision', 'Agriculture'],
  },
  {
    title: 'DevDoc AI',
    description:
      'Automated technical documentation assistant using Retrieval-Augmented Generation (RAG), FAISS, and BERT to improve documentation search efficiency.',
    tags: ['RAG', 'FAISS', 'BERT', 'NLP'],
  },
  {
    title: 'Pneumonia Detection System',
    description:
      'Deep learning CNN model for classifying pediatric chest X-ray images for early pneumonia detection.',
    tags: ['CNN', 'Deep Learning', 'Healthcare', 'TensorFlow'],
  },
  {
    title: 'Digital Forensic Tool',
    description:
      'Python-based digital evidence analysis system using SHA-256 verification and file carving techniques.',
    tags: ['Python', 'Cybersecurity', 'Forensics', 'SHA-256'],
  },
  {
    title: 'SoldierCare+',
    description:
      'Real-time military health monitoring dashboard using Node.js, WebSockets, and React.',
    tags: ['Node.js', 'WebSockets', 'React', 'Real-time'],
  },
  {
    title: 'DC-GAN Image Generator',
    description:
      'Implemented a Deep Convolutional GAN model to generate synthetic images for research and experimentation in generative deep learning.',
    tags: ['GANs', 'Deep Learning', 'Generative AI', 'PyTorch'],
  },
  {
    title: 'Phishing Detection using Regression',
    description:
      'Machine learning system that detects phishing websites using regression models and extracted URL-based security features.',
    tags: ['Machine Learning', 'Regression', 'Cybersecurity', 'Python'],
  },
  {
    title: 'UI Bug Classifier',
    description:
      'Machine learning model designed to classify and categorize UI bugs from issue reports to help developers prioritize fixes efficiently.',
    tags: ['NLP', 'Classification', 'Machine Learning', 'Scikit-learn'],
  },
  {
    title: 'Space Guide',
    description:
      'Interactive application that provides educational insights and navigation through astronomical objects and space-related data.',
    tags: ['React', 'Educational', 'Data Visualization', 'API Integration'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in machine learning, deep
            learning, and full-stack development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-600/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/Kavya-M-Injineri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-600/50 hover:bg-gray-800 transition-all text-gray-300"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
