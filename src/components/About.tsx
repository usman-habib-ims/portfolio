'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            "I am a Software Engineering student with a strong passion for web development and cloud computing. My journey in technology has equipped me with comprehensive skills in the MERN stack, Next.js, and AWS cloud services.",
            "What drives me is the opportunity to create impactful solutions that solve real-world problems. I enjoy the process of transforming complex requirements into elegant, user-friendly applications that deliver exceptional experiences.",
            "Beyond coding, I'm deeply interested in UI/UX design and project management. I believe that successful software development requires not just technical expertise, but also a keen understanding of user needs and efficient project execution.",
            "I'm constantly learning and exploring new technologies to stay at the forefront of web development. My goal is to contribute to innovative projects that make a difference in people's lives."
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
} 