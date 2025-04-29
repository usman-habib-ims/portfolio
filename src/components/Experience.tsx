'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Final Year Project',
    company: 'IMSciences',
    period: '2024 - Present',
    description: [
      'Built a real estate web application using MERN Stack, integrating AWS services (EC2, S3, RDS, CloudFront) for secure storage and high performance; deployed on Render for scalability',
      'Led project management by planning milestones, timelines, and ensuring on-time delivery; implemented secure OAuth-based authentication, property listing CRUD operations, and cloud storage',
      'Integrated a payment system API for seamless transactions and handled full-stack deployment, from environment setup to user and property management features'
    ]
  },
  {
    title: 'Software Engineering Intern',
    company: 'Mission-Critical Communication',
    period: 'June - September 2023 (Remote)',
    description: [
      'Completed a remote internship with a self-paced, structured virtual curriculum involving weekly tasks, progress reviews, and mentor guidance',
      'Gained practical experience in UI/UX design using Figma, JavaScript, and Flutter for mobile app development through project-based assignments',
      'Enhanced frontend development and app prototyping skills, applying design principles and coding knowledge in real-world scenarios',
      'Gained experience in remote collaboration and project management'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <p className="text-blue-200">{experience.company}</p>
                  </div>
                  <span className="text-sm text-purple-200">{experience.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {experience.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 