import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Tools from '@/components/Tools'
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Prueba de Tailwind */}
      
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Tools />    </div>
  )
}
