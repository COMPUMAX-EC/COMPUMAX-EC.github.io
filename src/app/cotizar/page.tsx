import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CotizadorClient from './CotizadorClient'

export const metadata: Metadata = {
  title: 'Cotizar materiales y corte láser | Compumax',
  description: 'Calcula el precio de MDF, acrílico, sintra, coroplast y foam board por plancha, media plancha o A3, con minutos de corte láser.',
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
