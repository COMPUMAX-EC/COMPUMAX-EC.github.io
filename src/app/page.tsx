import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ClientMarquee from '@/components/ClientMarquee'
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Prueba de Tailwind */}
      
      
      <Navbar />
      <Hero />
      <ClientMarquee />
      <Services />
      <Portfolio />

      {/* Client-only marquee to avoid SSR/CSR hydration mismatches */}
      
      <Contact />
      <Footer />
   </div>
  )
}
