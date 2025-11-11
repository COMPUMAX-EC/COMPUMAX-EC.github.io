'use client'

import React from 'react'
import Image from 'next/image'

const Contact = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch from iframe getting modified by browser extensions
  if (!mounted) {
    return (
      <section id="contacto" className="section-padding bg-[#e4eef5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d4380] mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a hacer realidad tu proyecto
            </p>
          </div>
          <div className="h-96" aria-hidden="true" />
        </div>
      </section>
    )
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
          {/* Google Maps */}
          <div className="card">
            <h3 className="text-2xl font-bold text-[#0d4380] mb-6">
              Nuestra Ubicación
            </h3>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.2213558309645!2d-77.7162452!3d0.6616578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e297186d03432f3%3A0x5c36e9b3ad03d5ae!2sCOMPUMAX%20Agencia%20de%20dise%C3%B1o%20y%20publicidad!5e1!3m2!1ses-419!2sec!4v1755963258089!5m2!1ses-419!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COMPUMAX Agencia de diseño y publicidad"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/MxaJP9Pbi5FvRWWh8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver en Google Maps
              </a>
            </div>
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
                    <p className="text-gray-600">+593 98 0494 770</p>
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
                    <p className="text-gray-600">servicio.compumax@gmail.com</p>
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
                    <p className="text-gray-600">Tulcán, Ecuador</p>
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
                href="https://wa.me/593980494770?text=Buenas%20tardes%2C%20quisiera%20solicitar%20informaci%C3%B3n%20para%20mandar%20a%20hacer%20un%20r%C3%B3tulo.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
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
                  href="https://www.facebook.com/AgenciaCompumax"
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
                  href="https://www.instagram.com/compumax.ec/"
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
                  href="https://www.tiktok.com/@agencia.compumax?lang=en"
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
