'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-white to-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m <span className="text-blue-600">Confidence Bassey</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A passionate Full-Stack Web and Android Developer crafting modern, high-performance applications that deliver seamless user experiences and real-world impact.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
