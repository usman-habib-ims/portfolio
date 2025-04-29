'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Usman Habib
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2">
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Certifications
            </Link>
            <Link
              href="#projects"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 