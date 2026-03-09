import { motion } from 'motion/react';
import { Code2, Layout, Server, Database, Brain, Cloud, BookOpen, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C'],
    },
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Flask', 'FastAPI', 'Node.js'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL'],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['CNN', 'RNN', 'LSTM', 'GRU', 'YOLOv8', 'EfficientNet', 'TensorFlow', 'Keras', 'Scikit-learn'],
    },
    {
      icon: Brain,
      title: 'Generative AI',
      skills: ['RAG', 'GANs', 'BERT', 'FAISS'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3)', 'Docker', 'CI/CD'],
    },
    {
      icon: BookOpen,
      title: 'Core Computer Science',
      skills: ['Data Structures and Algorithms', 'Object-Oriented Programming'],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Technical <span className="text-[#3b82f6]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0f0f0f] rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#3b82f6]/10 rounded-lg">
                  <category.icon className="text-[#3b82f6]" size={24} />
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-white/80 rounded-full text-sm border border-white/10 hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
