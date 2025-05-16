'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['OOP', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'Next.js']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Cloud Computing',
    skills: ['AWS (EC2, S3, VPC, Cloud Watch, IAM)']
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'Draw.io', 'Figma', 'Power BI']
  },
  {
    title: 'Design',
    skills: ['UI/UX Design (Figma, Prototyping)']
  },
  {
    title: 'Project Management',
    skills: ['Agile', 'Risk Management', 'Project Planning & Execution']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-200">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-800/50 text-blue-100 rounded-full text-sm hover:bg-blue-700/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 