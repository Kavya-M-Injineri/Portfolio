import { motion } from 'motion/react';
import { Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'KrishiSarthi AI',
      subtitle: 'Agricultural Intelligence Platform',
      technologies: 'Python, TensorFlow, EfficientNet-B0, YOLOv8, Transfer Learning, OpenWeatherMap API',
      github: 'https://github.com/Kavya-M-Injineri/KrishiSarthi-AI',
      achievements: [
        'Developed a crop disease classification model using Transfer Learning on EfficientNet-B0, achieving 90.7% accuracy',
        'Built object detection pipeline using YOLOv8 for wildlife intrusion alerts with sub-150ms inference latency',
        'Engineered data orchestration layer integrating OpenWeatherMap and Government Mandi APIs',
      ],
    },
    {
      title: 'DevDoc AI',
      subtitle: 'Automated Technical Documentation Assistant',
      technologies: 'Python, RAG, LLM, Docker, FAISS',
      github: 'https://github.com/Kavya-M-Injineri/DevDoc-AI',
      achievements: [
        'Architected a Retrieval-Augmented Generation (RAG) pipeline integrating FAISS vector search',
        'Cutting developer documentation search time by 70%',
        'Improved semantic search relevance by 45% using FAISS vector embeddings',
        'Containerized the full ML pipeline using Docker, enabling 50% faster onboarding',
      ],
    },
    {
      title: 'Pneumonia Detection',
      subtitle: 'Healthcare AI Diagnostic System',
      technologies: 'Python, TensorFlow, Keras, CNN, Flask, Image Augmentation',
      github: 'https://github.com/Kavya-M-Injineri/Pneumonia-Detection',
      achievements: [
        'Designed a Convolutional Neural Network (CNN) using TensorFlow/Keras achieving 92%+ diagnostic accuracy',
        'Applied image augmentation and dropout regularization to improve model generalization',
        'Deployed a Flask-based web application for radiologists to upload scans with 80% reduced screening time',
      ],
    },
    {
      title: 'Digital-Forensic-Tool',
      subtitle: 'Python-Based Evidence Analysis Suite',
      technologies: 'Python, SHA-256, SleuthKit (TSK), File Carving',
      github: 'https://github.com/Kavya-M-Injineri/Digital-Forensic-Tool',
      achievements: [
        'Built an automated forensic metadata extraction and disk analysis tool, accelerating evidence recovery by 50%',
        'Implemented SHA-256 hashing for chain-of-custody integrity verification with zero-loss digital evidence validation',
        'Developed custom File Carving engine in Python reconstructing fragmented file headers from raw disk images',
      ],
    },
    {
      title: 'SoldierCare-',
      subtitle: 'Real-Time Military Health Monitoring System',
      technologies: 'Node.js, WebSockets, React.js, Real-Time Data Streaming',
      github: 'https://github.com/Kavya-M-Injineri/SoldierCare-Plus',
      achievements: [
        'Built a mission-critical health monitoring system using Node.js and WebSockets for real-time vital-sign transmission',
        'Achieved 99.9% delivery reliability for live biometric data visualization',
        'Designed a React.js dashboard improving commanding officers\' situational awareness during field simulations',
      ],
    },
    {
      title: 'DC-GAN Image Generator',
      subtitle: 'Deep Convolutional Generative Adversarial Network',
      technologies: 'Python, GANs, Deep Learning, TensorFlow',
      github: 'https://github.com/Kavya-M-Injineri/DC-GAN-Image-Generator',
      achievements: [
        'Implemented Deep Convolutional GAN model to generate synthetic images',
        'Experimentation in generative deep learning for research purposes',
        'Successfully trained model on large-scale image datasets',
      ],
    },
    {
      title: 'Phishing Detection',
      subtitle: 'ML-Based Website Security Classifier',
      technologies: 'Python, Machine Learning, Regression, URL Analysis, Cybersecurity',
      github: 'https://github.com/Kavya-M-Injineri/Phishing-Detection',
      achievements: [
        'Developed machine learning system detecting phishing websites using regression models',
        'Extracted URL-based security features for accurate classification',
        'Implemented real-time phishing detection with high accuracy',
      ],
    },
    {
      title: 'UI Bug Classifier',
      subtitle: 'Automated Bug Categorization System',
      technologies: 'Python, NLP, Classification, Machine Learning',
      github: 'https://github.com/Kavya-M-Injineri/UI-Bug-Classifier',
      achievements: [
        'Designed ML model to classify and categorize UI bugs from issue reports',
        'Helped developers prioritize fixes efficiently using automated classification',
        'Applied NLP techniques for bug report analysis',
      ],
    },
    {
      title: 'Space Guide',
      subtitle: 'Interactive Astronomy Education Platform',
      technologies: 'JavaScript, Educational Technology, Interactive Visualization',
      github: 'https://github.com/Kavya-M-Injineri/Space-Guide',
      achievements: [
        'Built interactive application for educational insights into astronomical objects',
        'Navigation through space-related data with engaging visualizations',
        'Educational platform for astronomy enthusiasts',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="text-[#3b82f6]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl mb-1">{project.title}</h3>
                  <p className="text-white/60 italic">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  title="View on GitHub"
                >
                  <Github size={20} className="text-[#3b82f6]" />
                </a>
              </div>

              <p className="text-white/50 text-sm mb-4">
                <span className="text-white/70">Technologies:</span> {project.technologies}
              </p>

              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="text-white/80 text-sm leading-relaxed flex items-start">
                    <span className="text-[#3b82f6] mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
