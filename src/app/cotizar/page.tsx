import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CotizadorClient from './CotizadorClient'

export const metadata: Metadata = {
  title: 'Cotizar · Lista de precios | Compumax',
  description: 'Lista de precios por categoría con valor por unidad y por docena, y cotizador de MDF, acrílico, sintra, coroplast y foam board por plancha, media plancha o A3, con minutos de corte láser.',
}

export default function CotizarPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <Navbar />
      <CotizadorClient />
      <Footer />
    </div>
  )
}
