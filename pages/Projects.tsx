'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

type Project = {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: 'Financial Dashboard',
    description: 'A finance dashboard',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Confidence-bassey/financial-dashboard-app',
  },
  {
    title: 'POS-Padi',
    description: 'POS-Padi platform is fast, secure, and designed for growth. Manage transfers, withdrawals, bill payments, and more, all from one device.',
    tech: ['React', 'Chakra UI', 'Redux Toolkit', 'React Router', 'MUI'],
    liveUrl: 'https://pospadi.com.ng',
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'BankDash',
    description: 'BankDash is a modern, responsive, and intuitive banking dashboard built with React, Vite, and Tailwind CSS. It provides users with an interactive and seamless experience for managing accounts, transactions, investments, credit cards, and other financial services.',
    tech: ['React', 'React Icons', 'Vite','Tailwind CSS', 'React Router'],
    liveUrl: 'bankdash-team-2025.netlify.app/',
    githubUrl: 'https://github.com/InternPulse-Frontend-March-2025/bankdash',
  },
  {
    title: 'FarmStedi',
    description: 'Farmstedi is a web app that help farmers and plant lovers determine the right crops to grow, track plant health, monitor weather conditions, and optimise watering habit. It blends AI-based recommendations, weather integration and personal dashboard for modern responsive plant care.',
    tech: ['React', 'Material UI', 'Javascript'],
    liveUrl: 'https://farmstedi.netlify.app/',
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'TechLiftInspired',
    description: 'A full-stack task management application with user authentication.',
    tech: ['React', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Eve',
    description: 'Eve is an AI powered mobile app. It intends to grant medical access by way of telemedicine, giving fast and accurate diagnosis for women located in rural and remote areas. Eve can track symptoms, ask questions to narrow down a diagnosis, look up education on sexual and reproductive health, pregnancy tracker and even schedule a virtual doctor appointment or show you a list of the nearest hospitals according to your GPS location.',
    tech: ['Java', 'Gemini API', 'Firebase', 'XML', 'Python'],
    githubUrl: 'https://github.com/Confidence-bassey/Eve-',
  },
  
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt size={14} />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline flex items-center gap-1"
                >
                  Code <FaGithub size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
