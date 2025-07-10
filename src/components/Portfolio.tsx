'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Corte Láser en Madera",
    category: "corte",
    image: "/assets/corteLaser/corte (1).jpg",
    description: "Corte de precisión en madera para decoración"
  },
  {
    id: 2,
    title: "Corte Láser Decorativo",
    category: "corte",
    image: "/assets/corteLaser/corte (2).jpg",
    description: "Diseños decorativos con corte láser"
  },
  {
    id: 3,
    title: "Estampado Textil",
    category: "estampado",
    image: "/assets/estampados/estampado (1).jpg",
    description: "Estampado de alta calidad en textiles"
  },
  {
    id: 4,
    title: "Sublimación",
    category: "estampado",
    image: "/assets/estampados/estampado (2).jpg",
    description: "Sublimación en diversos materiales"
  },
  {
    id: 5,
    title: "Letras Corporeas",
    category: "letras",
    image: "/assets/letrasCorporeas/letras (1).jpg",
    description: "Letras tridimensionales para empresas"
  },
  {
    id: 6,
    title: "Rótulo Empresarial",
    category: "rotulos",
    image: "/assets/Rotulos/rotulo (1).jpg",
    description: "Rótulos profesionales para negocios"
  },
  {
    id: 7,
    title: "Señalética Interior",
    category: "señaleticas",
    image: "/assets/señaleticas/señaletica (1).jpg",
    description: "Señalización para espacios interiores"
  },
  {
    id: 8,
    title: "Reconocimientos",
    category: "reconocimientos",
    image: "/assets/reconocimientos/reconocimiento (1).jpg",
    description: "Trofeos y placas de reconocimiento"
  }
]

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'corte', name: 'Corte Láser' },
  { id: 'estampado', name: 'Estampados' },
  { id: 'letras', name: 'Letras Corporeas' },
  { id: 'rotulos', name: 'Rótulos' },
  { id: 'señaleticas', name: 'Señaléticas' },
  { id: 'reconocimientos', name: 'Reconocimientos' }
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const openModal = (item: PortfolioItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="portafolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d4380] mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#0d4380] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-black rounded-full p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0d4380] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
