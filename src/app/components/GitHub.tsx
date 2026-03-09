import { motion } from 'motion/react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

export function GitHubSection() {
  const topRepos = [
    { name: 'KrishiSarthi-AI', stars: 12, forks: 4, description: 'Agricultural intelligence platform' },
    { name: 'DevDoc-AI', stars: 8, forks: 2, description: 'Documentation assistant with RAG' },
    { name: 'Pneumonia-Detection', stars: 15, forks: 6, description: 'Medical image classification CNN' },
  ];

  return (
    <section id="github" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Explore My <span className="text-[#3b82f6]">GitHub</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#3b82f6]/10 rounded-full">
                <Github className="text-[#3b82f6]" size={40} />
              </div>
              <div>
                <h3 className="text-2xl">Kavya-M-Injineri</h3>
                <p className="text-white/60">@Kavya-M-Injineri</p>
              </div>
            </div>

            <p className="text-white/70 mb-6">
              Building intelligent systems and solving real-world problems with AI and machine learning.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl text-[#3b82f6]">9+</div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[#3b82f6]">35+</div>
                <div className="text-sm text-white/60">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[#3b82f6]">12+</div>
                <div className="text-sm text-white/60">Forks</div>
              </div>
            </div>

            <a
              href="https://github.com/Kavya-M-Injineri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Visit GitHub Profile
              <ExternalLink size={18} />
            </a>
          </motion.div>

          {/* Top Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl mb-6">Top Repositories</h3>
            {topRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg group-hover:text-[#3b82f6] transition-colors duration-200">
                    {repo.name}
                  </h4>
                  <ExternalLink size={18} className="text-white/40 group-hover:text-[#3b82f6] transition-colors duration-200" />
                </div>
                <p className="text-white/60 mb-4">{repo.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white/60">
                    <Star size={16} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60">
                    <GitFork size={16} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages Used */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/5 rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl mb-6">Most Used Languages</h3>
          <div className="space-y-4">
            {[
              { name: 'Python', percentage: 65, color: '#3b82f6' },
              { name: 'JavaScript', percentage: 20, color: '#f59e0b' },
              { name: 'Java', percentage: 10, color: '#ef4444' },
              { name: 'Other', percentage: 5, color: '#6b7280' },
            ].map((lang) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">{lang.name}</span>
                  <span className="text-white/60">{lang.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
