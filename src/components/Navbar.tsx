'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-[#0d4380] shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.jpg"
                alt="Compumax Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#inicio"
                className="text-white hover:text-[#e4eef5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-white hover:text-[#e4eef5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Servicios
              </Link>
              <Link
                href="#portafolio"
                className="text-white hover:text-[#e4eef5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Portafolio
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#e4eef5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Acerca de
              </Link>
              <Link
                href="#contacto"
                className="text-white hover:text-[#e4eef5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#e4eef5] hover:bg-[#1a5ba8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d4380] border-t border-[#1a5ba8]">
            <Link
              href="#inicio"
              className="block text-white hover:text-[#e4eef5] px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block text-white hover:text-[#e4eef5] px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="block text-white hover:text-[#e4eef5] px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Portafolio
            </Link>
            <Link
              href="#contacto"
              className="block text-white hover:text-[#e4eef5] px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
