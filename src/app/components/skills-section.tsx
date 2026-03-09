import { motion } from 'motion/react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    category: 'Backend',
    skills: ['Flask', 'FastAPI', 'Node.js'],
  },
  {
    category: 'Databases',
    skills: ['MySQL'],
  },
  {
    category: 'Machine Learning',
    skills: [
      'CNN',
      'RNN',
      'LSTM',
      'GRU',
      'YOLOv8',
      'EfficientNet',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
    ],
  },
  {
    category: 'Generative AI',
    skills: ['RAG', 'GANs', 'BERT', 'FAISS'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3)', 'Docker', 'CI/CD'],
  },
  {
    category: 'Core Computer Science',
    skills: ['Data Structures and Algorithms', 'Object-Oriented Programming'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:border-blue-600/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
