'use client'

import { motion } from 'framer-motion'

interface Certification {
  title: string
  issuer: string
  platform: string
  date?: string
}

const certifications: Certification[] = [
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Coursera',
    platform: 'Coursera',
    date: '2025'
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google IT Support',
    platform: 'Google',
    date: '2024'
  },
  {
    title: 'Introduction to Python',
    issuer: '365 Data Science',
    platform: '365 Data Science',
    date: '2021'
  },
  {
    title: 'Google Project Management',
    issuer: 'Coursera',
    platform: 'Coursera',
    date: '2025'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <div className="flex items-center text-blue-200 mb-2">
                <span className="font-medium">{cert.issuer}</span>
                <span className="mx-2">•</span>
                <span>{cert.platform}</span>
              </div>
              {cert.date && (
                <p className="text-sm text-purple-200">{cert.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 