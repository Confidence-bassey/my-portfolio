'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MyPic from "../public/My picture.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <Image
              src={MyPic}
              alt="Profile"
              width={250}
              height={250}
              className="rounded-full object-cover shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 text-gray-700 text-lg leading-relaxed"
          >
            <p className="mb-4">
              I&apos;m a passionate web developer with experience in building responsive and performant web applications using modern technologies like <strong>Java</strong>, <strong>Spring boot</strong>, <strong>Spring Security</strong>, <strong>Next.js</strong>, <strong>React JS</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>
            <p className="mb-4">
              I love translating ideas into beautiful interfaces and efficient backends. Whether it&apos;s crafting a polished frontend, designing REST APIs, or deploying to the cloud - I enjoy every part of the development lifecycle.
            </p>
            <p>
              Outside of coding, I enjoy reading books, writing tech blogs, exploring AI/ML trends, listening to music and contributing to open-source projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
