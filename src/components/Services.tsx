import React from 'react'
import Image from 'next/image'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: "Corte Láser",
    description: "Corte de precisión en diversos materiales para proyectos personalizados",
    icon: "/assets/corte_icon.jpg",
    features: ["Corte en madera", "Corte en acrílico", "Corte en metal", "Diseños personalizados"]
  },
  {
    id: 2,
    title: "Estampados",
    description: "Estampado de alta calidad en textiles y diversos materiales",
    icon: "/assets/estampado_icon.jpg",
    features: ["Estampado textil", "Sublimación", "Vinilo textil", "Serigrafía"]
  },
  {
    id: 3,
    title: "Letras Corporeas",
    description: "Letras tridimensionales para identidad corporativa y señalética",
    icon: "/assets/letras_icon.jpg",
    features: ["Letras en acrílico", "Letras en metal", "Letras iluminadas", "Diseño corporativo"]
  },
  {
    id: 4,
    title: "Rótulos",
    description: "Rótulos publicitarios y señalética para todo tipo de negocios",
    icon: "/assets/rotulo_icon.jpg",
    features: ["Rótulos luminosos", "Rótulos de fachada", "Señalética interior", "Diseño gráfico"]
  },
  {
    id: 5,
    title: "Señaléticas",
    description: "Sistemas de señalización profesional para orientación y comunicación",
    icon: "/assets/señaleticas_icon.jpg",
    features: ["Señalización vial", "Señalización corporativa", "Señalización de seguridad", "Mapas y directorios"]
  },
  {
    id: 6,
    title: "Reconocimientos",
    description: "Trofeos y placas de reconocimiento para eventos y logros especiales",
    icon: "/assets/trofeo_icon.jpg",
    features: ["Trofeos personalizados", "Placas conmemorativas", "Medallas", "Reconocimientos corporativos"]
  }
]

const Services = () => {
  return (
    <section id="servicios" className="py-16 px-4 bg-[#e4eef5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d4380] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en publicidad y tecnología para hacer crecer tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Service Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-[#0d4380] group-hover:text-[#1a5ba8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-gray-200">
                  <ul className="space-y-2 text-sm text-gray-500">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0d4380] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            ¿Tienes un proyecto en mente? Contáctanos para una cotización personalizada
          </p>
          <a
            href="#contacto"
            className="bg-[#0d4380] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a5ba8] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
