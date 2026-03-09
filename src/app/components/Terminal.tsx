import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([
    {
      command: '',
      output: [
        'Welcome to Kavya\'s Terminal! Type "help" to see available commands.',
        '',
      ],
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const commands: { [key: string]: string[] } = {
    help: [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - About Kavya',
      '  skills     - List technical skills',
      '  projects   - Show project list',
      '  resume     - Display resume information',
      '  github     - Show GitHub profile',
      '  linkedin   - Show LinkedIn profile',
      '  contact    - Display contact information',
      '  clear      - Clear the terminal',
      '',
    ],
    about: [
      'Kavya Mahantesh Injineri',
      'Computer Science & Engineering Student',
      'Maharaja Institute of Technology Mysuru',
      'CGPA: 9.275 | Expected Graduation: 2027',
      '',
      'Interests: Machine Learning, Deep Learning, Full Stack Development',
      'Location: Mysuru, Karnataka, India',
      '',
    ],
    skills: [
      'Technical Skills:',
      '  Languages: Python, Java, C',
      '  Frontend: HTML5, CSS3, JavaScript, React.js',
      '  Backend: Flask, FastAPI, Node.js',
      '  Databases: MySQL',
      '  ML/DL: CNN, RNN, LSTM, GRU, YOLOv8, TensorFlow, Keras',
      '  Generative AI: RAG, GANs, BERT, FAISS',
      '  Cloud & DevOps: AWS (EC2, S3), Docker, CI/CD',
      '  Tools: Git, GitHub, VS Code',
      '',
    ],
    projects: [
      'Featured Projects:',
      '',
      '1. KrishiSarthi AI - Agricultural intelligence platform',
      '2. DevDoc AI - Technical documentation assistant',
      '3. Pneumonia Detection System - Medical image classification',
      '4. Digital Forensic Tool - Evidence analysis system',
      '5. SoldierCare+ - Health monitoring dashboard',
      '6. DC-GAN Image Generator - Generative AI model',
      '7. Phishing Detection - ML-based security system',
      '8. UI Bug Classifier - Bug categorization tool',
      '9. Space Guide - Educational astronomy app',
      '',
    ],
    resume: [
      'Kavya\'s Resume',
      '---',
      'Machine Learning Engineer | Full Stack Developer',
      'CGPA: 9.275',
      'Maharaja Institute of Technology Mysuru',
      '',
      'Commands available:',
      '  view-resume     - View resume in browser',
      '  download-resume - Download resume PDF',
      '',
    ],
    'view-resume': [
      'Opening resume viewer...',
      'Scroll to the Resume section to view the full resume.',
      '',
    ],
    'download-resume': [
      'Downloading Kavya_Mahantesh_Injineri_Resume.pdf...',
      'Check your downloads folder.',
      '',
    ],
    github: [
      'GitHub Profile',
      '---',
      'Username: Kavya-M-Injineri',
      'URL: https://github.com/Kavya-M-Injineri',
      '',
      'Projects: 9+',
      'Stars: 35+',
      'Focus: Machine Learning, AI, Full Stack Development',
      '',
    ],
    linkedin: [
      'LinkedIn Profile',
      '---',
      'Name: Kavya Mahantesh Injineri',
      'URL: https://linkedin.com/in/kavya-injineri-4a54532b7',
      '',
    ],
    contact: [
      'Contact Information',
      '---',
      'Email: kavyainjineri@gmail.com',
      'Phone: +91 9019709952',
      'Location: Mysuru, Karnataka, India',
      '',
      'GitHub: https://github.com/Kavya-M-Injineri',
      'LinkedIn: https://linkedin.com/in/kavya-injineri-4a54532b7',
      '',
    ],
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([
        {
          command: '',
          output: ['Terminal cleared. Type "help" for available commands.', ''],
        },
      ]);
      return;
    }

    if (trimmedCmd === 'download-resume') {
      const link = document.createElement('a');
      link.href = '/Kavya_Mahantesh_Injineri_Resume.pdf';
      link.download = 'Kavya_Mahantesh_Injineri_Resume.pdf';
      link.click();
    }

    if (trimmedCmd === 'view-resume') {
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const output = commands[trimmedCmd] || [
      `Command not found: ${cmd}`,
      'Type "help" for available commands.',
      '',
    ];

    setHistory([...history, { command: cmd, output }]);
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="terminal" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Kavya's <span className="text-[#3b82f6]">Terminal</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon size={16} className="text-[#3b82f6]" />
              <span className="text-sm text-white/70">kavya@portfolio:~$</span>
            </div>
          </div>

          {/* Terminal Output */}
          <div
            ref={outputRef}
            className="p-6 font-mono text-sm h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3b82f6] scrollbar-track-white/5"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                {entry.command && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#3b82f6]">$</span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                )}
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-white/70 pl-4">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#3b82f6]">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-white font-mono"
                autoFocus
              />
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-white/50 text-sm"
        >
          <p>Tip: Use arrow keys to navigate command history</p>
        </motion.div>
      </div>
    </section>
  );
}
