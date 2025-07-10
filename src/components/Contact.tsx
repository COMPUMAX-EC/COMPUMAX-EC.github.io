'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    // Ejemplo: enviar por WhatsApp
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="section-padding bg-[#e4eef5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d4380] mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a hacer realidad tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-[#0d4380] mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4380] focus:border-transparent transition-colors duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4380] focus:border-transparent transition-colors duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4380] focus:border-transparent transition-colors duration-200"
                  placeholder="099 999 9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4380] focus:border-transparent transition-colors duration-200"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary hover:scale-105 transition-transform duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card">
              <h3 className="text-2xl font-bold text-[#0d4380] mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#0d4380] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+593 99 999 9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#0d4380] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@compumax.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#0d4380] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Quito, Ecuador</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-[#0d4380] mb-4">
                ¿Prefieres WhatsApp?
              </h3>
              <p className="text-gray-600 mb-6">
                Chatea con nosotros directamente para una respuesta más rápida
              </p>
              <a
                href="https://wa.me/593999999999?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <Image
                  src="/assets/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Chatear por WhatsApp
              </a>
            </div>

            {/* Social Media */}
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-[#0d4380] mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/assets/socialNetwork-ico/facebook_ico.png"
                    alt="Facebook"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/assets/socialNetwork-ico/insta_ico.png"
                    alt="Instagram"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/assets/socialNetwork-ico/tiktok_ico.png"
                    alt="TikTok"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
