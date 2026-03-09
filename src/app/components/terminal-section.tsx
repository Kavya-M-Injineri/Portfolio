import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Kavya\'s Terminal! Type "help" for available commands.' },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const commands: Record<string, string> = {
    help: `Available commands:
  help       - Show this help message
  about      - Display information about Kavya
  skills     - List technical skills
  projects   - Show featured projects
  resume     - View resume information
  github     - Display GitHub profile link
  linkedin   - Display LinkedIn profile link
  contact    - Show contact information
  clear      - Clear the terminal`,

    about: `Kavya Mahantesh Injineri
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Machine Learning Engineer | Full Stack Developer

Computer Science and Engineering student at Maharaja Institute 
of Technology Mysuru with a CGPA of 9.275 (Expected 2027).

Focused on building intelligent systems and scalable software
that address real-world challenges.

Location: Mysuru, Karnataka, India`,

    skills: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
► Programming: Python, Java, C
► Frontend: HTML5, CSS3, JavaScript, React.js
► Backend: Flask, FastAPI, Node.js
► ML/DL: CNN, RNN, LSTM, GRU, YOLOv8, EfficientNet
► Frameworks: TensorFlow, Keras, Scikit-learn
► Gen AI: RAG, GANs, BERT, FAISS
► Cloud: AWS (EC2, S3), Docker, CI/CD
► Database: MySQL
► Tools: Git, GitHub, VS Code`,

    projects: `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. KrishiSarthi AI - Agricultural intelligence platform
2. DevDoc AI - Automated documentation assistant (RAG)
3. Pneumonia Detection - Deep learning CNN for X-rays
4. Digital Forensic Tool - Evidence analysis system
5. SoldierCare+ - Real-time health monitoring
6. DC-GAN Image Generator - Generative AI research
7. Phishing Detection - ML-based security system
8. UI Bug Classifier - Automated bug categorization
9. Space Guide - Interactive astronomy application

Visit GitHub for more: https://github.com/Kavya-M-Injineri`,

    resume: `Kavya's Resume
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Machine Learning Engineer | Full Stack Developer
CGPA: 9.275
Maharaja Institute of Technology Mysuru

Commands available:
  view-resume     - Scroll to resume section
  download-resume - Download resume PDF`,

    'view-resume': () => {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
      return 'Navigating to resume section...';
    },

    'download-resume': () => {
      const link = document.createElement('a');
      link.href = '/Kavya_Mahantesh_Injineri_Resume.pdf';
      link.download = 'Kavya_Mahantesh_Injineri_Resume.pdf';
      link.click();
      return 'Downloading resume...';
    },

    github: `GitHub Profile:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 https://github.com/Kavya-M-Injineri

Explore repositories, contributions, and open-source work.`,

    linkedin: `LinkedIn Profile:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 https://linkedin.com/in/kavya-injineri-4a54532b7

Connect for professional networking and opportunities.`,

    contact: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: kavyainjineri@gmail.com
📱 Phone: +91 9019709952
📍 Location: Mysuru, Karnataka, India

GitHub: https://github.com/Kavya-M-Injineri
LinkedIn: https://linkedin.com/in/kavya-injineri-4a54532b7`,

    clear: 'CLEAR',
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    setHistory((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);

    if (trimmedCmd === 'clear') {
      setHistory([
        { type: 'output', content: 'Welcome to Kavya\'s Terminal! Type "help" for available commands.' },
      ]);
      return;
    }

    if (commands[trimmedCmd]) {
      const output = typeof commands[trimmedCmd] === 'function'
        ? (commands[trimmedCmd] as () => string)()
        : commands[trimmedCmd];
      
      setHistory((prev) => [...prev, { type: 'output', content: output }]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'output', content: `Command not found: ${cmd}. Type "help" for available commands.` },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <TerminalIcon className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold">Kavya's Terminal</h2>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">kavya@portfolio:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 h-96 overflow-y-auto font-mono text-sm">
              {history.map((line, index) => (
                <div key={index} className="mb-2">
                  {line.type === 'input' ? (
                    <div className="text-green-400">{line.content}</div>
                  ) : (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {line.content}
                    </div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleSubmit} className="bg-gray-900 px-4 py-3 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-mono text-sm">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-white font-mono text-sm outline-none"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </form>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center">
            Try commands like "help", "about", "skills", or "projects"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
