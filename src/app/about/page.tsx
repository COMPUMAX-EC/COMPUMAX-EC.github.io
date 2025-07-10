'use client'

// 📝 CONCEPTOS REACT + TYPESCRIPT:

// 1. IMPORTACIONES
import React from 'react'           // React para componentes
import Image from 'next/image'      // Componente optimizado de Next.js

// 2. INTERFAZ TYPESCRIPT (define la estructura de datos)
interface TeamMember {
  name: string      // tipo string
  role: string      // tipo string
  image: string     // tipo string
  description: string
}

// 3. COMPONENTE FUNCIONAL (la forma moderna de React)
const AboutPage = () => {
  // 4. ESTADO (datos que pueden cambiar)
  const [activeSection, setActiveSection] = React.useState<string>('historia')
  
  // 5. DATOS TIPADOS (array de objetos con interfaz)
  const teamMembers: TeamMember[] = [
    {
      name: "Geovanny Basantes",
      role: "CISO y Project Manager",
      image: "/assets/team/geovanny.jpeg",
      description: "Desarrollador Full Stack con 4 años de experiencia"
    },
    {
      name: "María Jose Basantes",
      role: "Diseñadora Gráfica",
      image: "/assets/team/maria.jpg", 
      description: "10 años de experiencia en diseño gráfico"
    },
    {
      name: "Stalin Basantes",
      role: "Founder y CEO",
      image: "/assets/team/stalin.jpg", 
      description: "Especialista en desarrollo frontend y "
    },
    {
      name: "Danilo Bolaños",
      role: "Diseñador Gráfico",
      image: "/assets/team/danilo.jpg", 
      description: "Especialista en diseño y creación de soliciones graficas "
    }
  ]

  // 6. FUNCIONES (manejan eventos)
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  // 7. RENDER (JSX - HTML con JavaScript)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Acerca de Compumax
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transformando ideas en realidades digitales desde 2001
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {/* Botón Historia */}
            <button
              onClick={() => handleSectionChange('historia')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'historia' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Historia
            </button>
            
            {/* Botón Equipo */}
            <button
              onClick={() => handleSectionChange('equipo')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'equipo' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Equipo
            </button>

            {/* Botón Misión */}
            <button
              onClick={() => handleSectionChange('mision')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'mision' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Misión
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Sección Historia */}
          {activeSection === 'historia' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Compumax nació en 2015 con una visión clara: revolucionar 
                    la forma en que las empresas se conectan con sus clientes 
                    a través del diseño y la tecnología.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Comenzamos como un pequeño estudio de diseño gráfico, 
                    pero rápidamente evolucionamos para incluir desarrollo 
                    web, marketing digital y soluciones tecnológicas integrales.
                  </p>
                  <p className="text-gray-600">
                    Hoy somos un equipo de profesionales apasionados por 
                    crear experiencias digitales que generan resultados reales.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Hitos importantes:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2015: Fundación de Compumax</li>
                    <li>• 2017: Expansión a desarrollo web</li>
                    <li>• 2019: 100+ proyectos completados</li>
                    <li>• 2021: Servicios de automatización</li>
                    <li>• 2023: Certificación internacional</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Sección Equipo */}
          {activeSection === 'equipo' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestro Equipo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mapeo del array de equipo */}
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección Misión */}
          {activeSection === 'mision' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Misión y Visión
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    Misión
                  </h3>
                  <p className="text-gray-700">
                    Empoderar a las empresas con soluciones creativas y 
                    tecnológicas que impulsen su crecimiento y fortalezcan 
                    su presencia en el mercado digital.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Visión
                  </h3>
                  <p className="text-gray-700">
                    Ser la empresa líder en servicios de diseño y desarrollo 
                    digital en Ecuador, reconocida por la calidad, innovación 
                    y compromiso con nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// 8. EXPORTACIÓN (permite importar en otros archivos)
export default AboutPage
