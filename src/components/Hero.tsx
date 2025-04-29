'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Usman Habib
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-8"
          >
            MERN Stack Developer | Cloud Enthusiast | UI/UX Designer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            A passionate Software Engineering student with expertise in building modern web applications
            and cloud solutions. Focused on creating seamless user experiences and scalable architectures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 