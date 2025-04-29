'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Artic Estate (Real Estate Web App)',
    description: 'Final Year Project - A comprehensive real estate platform built with MERN Stack and AWS services. Features include secure OAuth authentication, property listing management, and integrated payment system.',
    technologies: ['MERN Stack', 'AWS (EC2, S3, RDS, CloudFront)', 'OAuth', 'Payment API'],
    link: 'https://github.com/your-username/artic-estate',
    timeline: '2024 - Present',
    highlights: [
      'Led project management and milestone planning',
      'Implemented secure authentication and CRUD operations',
      'Integrated payment system and cloud storage',
      'Deployed on Render for scalability'
    ]
  },
  {
    title: 'Next.js Authentication Project',
    description: 'A secure authentication system built with Next.js, featuring Clerk integration and MongoDB for data storage.',
    technologies: ['Next.js', 'Clerk', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/your-username/next-auth',
    highlights: [
      'Developed frontend components and responsive UI',
      'Implemented Clerk authentication integration',
      'Created webhooks for real-time data synchronization',
      'Ensured secure data storage with MongoDB'
    ]
  },
  {
    title: 'Movie App (IMDb-like)',
    description: 'A modern movie discovery platform built with Next.js 14, featuring TMDB API integration and responsive design.',
    technologies: ['Next.js 14', 'Tailwind CSS', 'TMDB API'],
    link: 'https://github.com/your-username/movie-app',
    highlights: [
      'Built responsive and modern UI',
      'Integrated TMDB API for movie data',
      'Implemented search and detailed info display',
      'Deployed on Hostinger'
    ]
  },
  {
    title: 'Freelance Web Development Projects',
    description: 'Multiple MERN Stack projects with Next.js frontend and various backend services.',
    technologies: ['MERN Stack', 'Next.js', 'Firebase', 'MySQL', 'AWS'],
    highlights: [
      'Developed full-stack applications',
      'Integrated Firebase and MySQL databases',
      'Implemented AWS S3 for file storage',
      'Deployed on EC2 for efficient hosting'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
} 