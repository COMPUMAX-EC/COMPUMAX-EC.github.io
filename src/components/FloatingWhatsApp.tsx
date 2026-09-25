import Image from "next/image"

const whatsappUrl =
  "https://wa.me/593980494770?text=Buenas%20tardes%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp al 0980494770"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-4 ring-white/80 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#128C7E] sm:bottom-6 sm:right-6"
    >
      <Image src="/assets/whatsapp-icon.png" alt="" width={30} height={30} />
    </a>
  )
}

export { whatsappUrl }
