import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-[#3b82f6]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <p className="text-white/70 mb-8">
                Feel free to reach out for collaborations, opportunities, or just to connect!
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:kavyainjineri@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg group-hover:bg-[#3b82f6]/20 transition-colors duration-200">
                  <Mail className="text-[#3b82f6]" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-lg group-hover:text-[#3b82f6] transition-colors duration-200">
                    kavyainjineri@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919019709952"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg group-hover:bg-[#3b82f6]/20 transition-colors duration-200">
                  <Phone className="text-[#3b82f6]" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <p className="text-lg group-hover:text-[#3b82f6] transition-colors duration-200">
                    +91 9019709952
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#3b82f6]/10 rounded-lg group-hover:bg-[#3b82f6]/20 transition-colors duration-200">
                  <MapPin className="text-[#3b82f6]" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-lg">Mysuru, Karnataka, India</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Kavya-M-Injineri"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white/5 rounded-lg hover:bg-[#3b82f6]/20 transition-colors duration-200 border border-white/10 hover:border-[#3b82f6]/50"
                >
                  <Github className="text-[#3b82f6]" size={28} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kavya-injineri-4a54532b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white/5 rounded-lg hover:bg-[#3b82f6]/20 transition-colors duration-200 border border-white/10 hover:border-[#3b82f6]/50"
                >
                  <Linkedin className="text-[#3b82f6]" size={28} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] rounded-xl p-8 border border-white/10"
          >
            <h3 className="text-2xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors duration-200 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors duration-200 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors duration-200 text-white"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors duration-200 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
