import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Rotulos/fachada.jpg"
          alt="Fachada Compumax"
          fill
          priority
          className="object-cover"
        />
        {/* Capa de transparencia (Overlay) */}
        {/* Ajusta el opacity-80 para más o menos transparencia (90 es más oscuro, 70 más claro) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d4380]/90 to-[#1a5ba8]/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/assets/logo.jpg"
              alt="Compumax Logo"
              width={150}
              height={150}
              className="rounded-full shadow-2xl border-4 border-white"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Publicidad que piensa.
            <br />
            <span className="text-yellow-300">Tecnología que impulsa.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Diseño gráfico, desarrollo web y automatización digital para tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="#contacto"
              className="bg-white text-[#0d4380] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white hover:scale-105"
            >
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#0d4380] transition-all duration-300 hover:scale-105"
            >
              Nuestros Servicios
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
