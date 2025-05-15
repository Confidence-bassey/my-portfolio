import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        <div className="text-xl font-bold text-gray-900">
          <Link href="/">TechWith<span className="text-blue-600">Dencial</span></Link>
        </div>


        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleNav}
            aria-label="Toggle menu"
            className="text-gray-800"
          >
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
