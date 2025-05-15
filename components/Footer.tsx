'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6"
      >

        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">techwith<span className="text-blue-600">Dencial</span></h4>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <Link
            href="https://github.com/Confidence-bassey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/confidence-bassey-093730190/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="mailto:confidencebass2@gmail.com"
            aria-label="Email"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </Link>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
