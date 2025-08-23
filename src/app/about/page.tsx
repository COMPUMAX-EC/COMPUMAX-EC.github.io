'use client'

// 📝 CONCEPTOS REACT + TYPESCRIPT:

// 1. IMPORTACIONES
import React from 'react'           // React para componentes
import Image from 'next/image'      // Componente optimizado de Next.js
import Navbar from '@/components/Navbar'  // Componente de navegación

// 2. INTERFAZ TYPESCRIPT (define la estructura de datos)
interface TeamMember {
  name: string      // tipo string
  role: string      // tipo string
  image: string     // tipo string
  description: string
}

// Interfaz para clientes
interface Client {
  name: string
  logo: string
  description: string
  project: string
  testimonial: string
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
      description: "Desarrollador Full Stack con 3 años de experiencia"
    },
    {
      name: "María Jose Basantes",
      role: "Diseñadora Gráfica",
      image: "/assets/team/maria.jpg", 
      description: "5 años de experiencia en diseño gráfico"
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
      image: "/assets/team/danilo.png", 
      description: "Especialista en diseño y creación de soluciones gráficas"
    }
  ]

  // 5b. DATOS DE CLIENTES
  const clients: Client[] = [
    {
      name: "GAD Julio Andrade",
      logo: "/assets/clients/gadJulio.jpg",
      description: "Gobierno Autonomo Descentralizado",
      project: "Señalética institucional y rótulos",
      testimonial: "Agradecemos a Compumax por la excelente señalética institucional que diseñaron para nuestras oficinas. Los rótulos y letreros corporeos dan una imagen muy profesional a nuestra institución."
    },
    {
      name: "Credimax",
      logo: "/assets/clients/credimax.jpg", 
      description: "Cadena de Almacenes",
      project: "Rótulos luminosos y material POP",
      testimonial: "Los rótulos luminosos y el material publicitario que nos diseñaron han mejorado notablemente la visibilidad de nuestras tiendas. ¡Excelente trabajo en diseño gráfico!"
    },
    {
      name: "GAD Municipal Sucumbios",
      logo: "/assets/clients/gadSucumbios.jpg",
      description: "Gobierno Autónomo Descentralizado",
      project: "Reconocimientos y trofeos personalizados",
      testimonial: "Los reconocimientos y trofeos personalizados que elaboraron para nuestros eventos cívicos fueron perfectos. La calidad del grabado láser es excepcional."
    },
    {
      name: "Junta Administradora de Agua Potable Julio Andrade",
      logo: "/assets/clients/junta_agua_julio.jpeg",
      description: "Junta de Agua Potable",
      project: "Souvenirs y merchandising institucional",
      testimonial: "Los souvenirs y productos promocionales que diseñaron representan perfectamente nuestra institución. Muy agradecidos por su creatividad y profesionalismo."
    },
    {
      name: "Comercial Tío Tarqui",
      logo: "/assets/clients/tarqui.png",
      description: "Cadena de tiendas",
      project: "Estampados textiles y uniformes",
      testimonial: "Los estampados en nuestros uniformes y camisetas promocionales quedaron increíbles. La técnica de estampado digital que utilizan es de alta calidad."
    },
    {
      name: "Team Montañeros 04",
      logo: "/assets/clients/montañeros.jpg",
      description: "Club de ciclismo",
      project: "Corte láser y diseño de medallas",
      testimonial: "Las medallas y reconocimientos cortados con láser para nuestras competencias son impresionantes. El diseño personalizado refleja perfectamente el espíritu de nuestro club."
    }
  ]

  // 6. FUNCIONES (manejan eventos)
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  // 7. RENDER (JSX - HTML con JavaScript)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
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

            {/* Botón Clientes */}
            <button
              onClick={() => handleSectionChange('clientes')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'clientes' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Clientes
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

          {/* Sección Clientes */}
          {activeSection === 'clientes' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestros Clientes
              </h2>
              <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Hemos tenido el privilegio de trabajar con empresas increíbles que confían en nosotros para llevar sus proyectos al siguiente nivel.
              </p>
              
              {/* Grid de clientes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clients.map((client, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    {/* Logo del cliente */}
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {/* Intentar mostrar logo real, si no existe mostrar placeholder */}
                      {client.logo && (
                        <div className="w-16 h-16 relative">
                          <Image
                            src={client.logo}
                            alt={`Logo de ${client.name}`}
                            width={64}
                            height={64}
                            className="object-contain w-full h-full rounded"
                            onError={(e) => {
                              // Si falla la imagen, mostrar placeholder
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.setAttribute('style', 'display: flex');
                            }}
                          />
                          {/* Placeholder que se muestra si la imagen falla */}
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center absolute top-0 left-0" style={{display: 'none'}}>
                            <span className="text-white font-bold text-lg">
                              {client.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Información del cliente */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {client.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {client.description}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        <span className="font-semibold">Proyecto:</span> {client.project}
                      </p>
                      
                      {/* Testimonial */}
                      <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 text-sm italic">
                          "{client.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Estadísticas */}
              <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Resultados que Hablan por Sí Solos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Proyectos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-gray-600">Satisfacción del Cliente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">Soporte Técnico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
                    <div className="text-gray-600">Años de Experiencia</div>
                  </div>
                </div>
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
