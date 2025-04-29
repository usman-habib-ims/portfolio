'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
  timeline?: string
  highlights?: string[]
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  timeline,
  highlights,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      {timeline && (
        <p className="text-sm text-purple-200 mb-3">{timeline}</p>
      )}
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 bg-blue-800/50 text-blue-100 rounded-full text-sm hover:bg-blue-700/50 transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      {highlights && (
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hover:text-white transition-colors duration-200"
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
      )}
      {link && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project →
        </motion.a>
      )}
    </motion.div>
  )
} 