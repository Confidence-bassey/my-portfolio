'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaAndroid,
  FaPython,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSpringboot,
  SiKotlin,
  SiPostman,
  SiTensorflow,
} from 'react-icons/si'

type Skill = {
  name: string
  icon: JSX.Element
}

const skills: Skill[] = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-700" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
  { name: 'Spring Security', icon: <SiSpringboot className="text-gray-800" /> }, // Fallback
  { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" /> },
  { name: 'Android Studio', icon: <FaAndroid className="text-green-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-600" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
  { name: 'TensorFlow Lite', icon: <SiTensorflow className="text-blue-500" /> },
]


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
