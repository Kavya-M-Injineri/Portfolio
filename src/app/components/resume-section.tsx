import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function ResumeSection() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Kavya's Resume
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Download or view my complete resume with detailed information about my
            education, projects, skills, and achievements.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <Button
              onClick={() => setShowViewer(!showViewer)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all text-lg flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {showViewer ? 'Hide Resume' : 'View Resume'}
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-4 rounded-lg transition-all text-lg"
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

          {/* Resume Viewer */}
          {showViewer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 overflow-hidden"
            >
              <div className="bg-white rounded-lg" style={{ height: '800px' }}>
                <iframe
                  src="/Kavya_Mahantesh_Injineri_Resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Kavya's Resume"
                />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                If the resume doesn't display, please download it or ensure the PDF
                file is in the public folder.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
