import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#0d4380] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo.jpg"
                alt="Compumax Logo"
                width={60}
                height={60}
                className="h-12 w-auto mr-4"
              />
              <h3 className="text-2xl font-bold">Compumax</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Publicidad que piensa. Tecnología que impulsa. Somos una empresa dedicada al diseño gráfico, 
              desarrollo web y automatización digital para hacer crecer tu negocio.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/assets/socialNetwork-ico/facebook_ico.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/assets/socialNetwork-ico/insta_ico.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/assets/socialNetwork-ico/tiktok_ico.png"
                  alt="TikTok"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors duration-200">
                  Corte Láser
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors duration-200">
                  Estampados
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors duration-200">
                  Letras Corporeas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors duration-200">
                  Rótulos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors duration-200">
                  Señaléticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +593 99 999 9999
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@compumax.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Quito, Ecuador
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Compumax. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
