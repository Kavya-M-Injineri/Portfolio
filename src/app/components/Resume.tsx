import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';
import { useState } from 'react';
import { jsPDF } from 'jspdf';
import resumePage1 from '../../assets/05f0b0d64b49d8b0cbc377bcdba78aaa044e8a43.png';
import resumePage2 from '../../assets/20b44b07095e3c939e28f6bfe7f5fd226d28d3e3.png';

export function Resume() {
  const [showPDF, setShowPDF] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadResumePDF = async () => {
    setIsGenerating(true);
    try {
      // Create a new jsPDF instance - A4 size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: false, // Disable compression for HD quality
      });

      // Function to load and enhance image brightness
      const loadAndEnhanceImage = (src: string): Promise<string> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            // Create canvas for image processing
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set high resolution
            canvas.width = img.width;
            canvas.height = img.height;
            
            if (ctx) {
              // Draw the image
              ctx.drawImage(img, 0, 0);
              
              // Apply brightness enhancement
              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
              const data = imageData.data;
              
              // Increase brightness by 30% and contrast
              const brightnessFactor = 1.3;
              for (let i = 0; i < data.length; i += 4) {
                data[i] = Math.min(255, data[i] * brightnessFactor);     // Red
                data[i + 1] = Math.min(255, data[i + 1] * brightnessFactor); // Green
                data[i + 2] = Math.min(255, data[i + 2] * brightnessFactor); // Blue
              }
              
              ctx.putImageData(imageData, 0, 0);
              
              // Convert to high-quality JPEG
              resolve(canvas.toDataURL('image/jpeg', 1.0));
            }
          };
          img.src = src;
        });
      };

      // Load and enhance both images
      const [enhancedPage1, enhancedPage2] = await Promise.all([
        loadAndEnhanceImage(resumePage1),
        loadAndEnhanceImage(resumePage2),
      ]);

      // A4 dimensions in mm
      const pageWidth = 210;
      const pageHeight = 297;

      // Add first page
      pdf.addImage(enhancedPage1, 'JPEG', 0, 0, pageWidth, pageHeight, '', 'FAST');

      // Add second page
      pdf.addPage();
      pdf.addImage(enhancedPage2, 'JPEG', 0, 0, pageWidth, pageHeight, '', 'FAST');

      // Download the PDF
      pdf.save('Kavya_Mahantesh_Injineri_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="resume" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Kavya's <span className="text-[#3b82f6]">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] rounded-xl p-8 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#3b82f6]/10 rounded-lg">
                <FileText className="text-[#3b82f6]" size={40} />
              </div>
              <div>
                <h3 className="text-2xl">Kavya's Resume</h3>
                <p className="text-white/60">Machine Learning Engineer | Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-white/80">CGPA: 9.275</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-white/80">Maharaja Institute of Technology Mysuru</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-white/80">Expected Graduation: 2027</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowPDF(!showPDF)}
                className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                {showPDF ? 'Hide Resume' : 'View Resume'}
              </button>

              <button
                onClick={downloadResumePDF}
                className="w-full px-6 py-3 border border-white/20 text-white rounded-lg hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                {isGenerating ? 'Generating...' : 'Download Resume'}
              </button>
            </div>
          </motion.div>

          {/* Resume Preview or Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] rounded-xl p-8 border border-white/10"
          >
            {showPDF ? (
              <div className="space-y-4">
                <h3 className="text-xl mb-4">Resume Preview</h3>
                <div className="space-y-4 max-h-[700px] overflow-y-auto">
                  <img 
                    src={resumePage1} 
                    alt="Resume Page 1" 
                    className="w-full rounded-lg border border-white/10"
                  />
                  <img 
                    src={resumePage2} 
                    alt="Resume Page 2" 
                    className="w-full rounded-lg border border-white/10"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl mb-4">Resume Highlights</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-[#3b82f6] mb-2">Education</h4>
                    <p className="text-white/80">B.E. Computer Science & Engineering</p>
                    <p className="text-white/60 text-sm">CGPA: 9.275 | Expected 2027</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-[#3b82f6] mb-2">Current Role</h4>
                    <p className="text-white/80">SDE Intern at Bluestock Fintech</p>
                    <p className="text-white/60 text-sm">Software Development & Engineering</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-[#3b82f6] mb-2">Skills</h4>
                    <p className="text-white/80">Python, TensorFlow, React, Node.js</p>
                    <p className="text-white/60 text-sm">ML/DL, RAG, Computer Vision, Full Stack</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-[#3b82f6] mb-2">Achievements</h4>
                    <p className="text-white/80">2nd Place - Teckshetra 2025</p>
                    <p className="text-white/60 text-sm">IBM Certified in Generative AI & React</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}