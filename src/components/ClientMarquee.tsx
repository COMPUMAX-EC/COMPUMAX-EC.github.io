"use client"

import React from 'react'

const logos = [
  { src: '/assets/clients/gadJulio.jpg', alt: 'GAD Julio Andrade' },
  { src: '/assets/clients/credimax.jpg', alt: 'Credimax' },
  { src: '/assets/clients/gadSucumbios.jpg', alt: 'GAD Sucumbíos' },
  { src: '/assets/clients/junta_agua_julio.jpeg', alt: 'Junta de Agua Julio' },
  { src: '/assets/clients/tarqui.png', alt: 'Comercial Tío Tarqui' },
  { src: '/assets/clients/montañeros.jpg', alt: 'Team Montañeros' },
]

export default function ClientMarquee() {
  const [mounted, setMounted] = React.useState(false)
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)
  const groupRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const repeatCount = 3 // how many times the base sequence repeats before the loop

  React.useEffect(() => {
    setMounted(true)

    // Measure the width of one group and set CSS variables to animate exactly that distance
    const marqueeEl = marqueeRef.current
    const groupEl = groupRef.current
    if (!marqueeEl || !groupEl) return

  const groupWidth = groupEl.getBoundingClientRect().width

  // Set CSS variables on the marquee element
  // distance = width of one full sequence (repeatCount logos + gap)
  marqueeEl.style.setProperty('--marquee-distance', `${groupWidth}px`)

  // Compute duration based on width so speed feels consistent (e.g., 120 px/s)
  const pxPerSec = 120
  const duration = Math.max(8, groupWidth / pxPerSec)
  marqueeEl.style.setProperty('--marquee-duration', `${duration}s`)
  }, [])

  // Render a harmless placeholder on the server to avoid SSR/CSR markup mismatch.
  if (!mounted) return <div className="h-20" aria-hidden="true" />

  return (
    <section aria-label="Logos de clientes" className="py-6">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="h-20 flex items-center">
          <div ref={marqueeRef} className="marquee w-full">
            <div ref={trackRef} className="marquee-track">
              {/* first copy: measured group (repeatCount sequences + gap) */}
              <div ref={groupRef} className="marquee-inner flex items-center space-x-12">
                {Array.from({ length: repeatCount }).map((_, r) => (
                  <React.Fragment key={r}>
                    {logos.map((l, i) => (
                      <img key={`${r}-${i}`} src={l.src} alt={l.alt} className="h-12 w-auto object-contain" />
                    ))}
                  </React.Fragment>
                ))}
                <div className="marquee-gap" aria-hidden="true" />
              </div>

              {/* duplicate copy for the seamless track */}
              <div className="marquee-inner flex items-center space-x-12" aria-hidden="true">
                {Array.from({ length: repeatCount }).map((_, r) => (
                  <React.Fragment key={`dup-${r}`}>
                    {logos.map((l, i) => (
                      <img key={`dup-${r}-${i}`} src={l.src} alt="" className="h-12 w-auto object-contain" />
                    ))}
                  </React.Fragment>
                ))}
                <div className="marquee-gap" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-by-px { 0% { transform: translateX(0); } 100% { transform: translateX(calc(var(--marquee-distance) * -1)); } }
        .marquee { overflow: hidden; }
        .marquee-track { display: inline-flex; align-items: center; flex-wrap: nowrap; }
        .marquee-inner { display: flex; align-items: center; flex-wrap: nowrap; flex-shrink: 0; }
        .marquee { display: block; }
        /* CSS vars default (overridden at runtime) */
        .marquee { --marquee-distance: 1000px; --marquee-duration: 18s; }
        /* Animate the whole track by the measured group width (one copy) */
        .marquee-track { animation: marquee-by-px var(--marquee-duration) linear infinite; }
        .marquee-gap { width: 80px; flex: 0 0 80px; }

        .marquee img { filter: grayscale(100%); opacity: .85; transition: filter .2s, opacity .2s, transform .2s; display: block; flex-shrink: 0; min-width: 48px; max-width: 120px; height: 48px; object-fit: contain; }
        .marquee img:hover { filter: none; opacity: 1; transform: scale(1.05); }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
      `}</style>
    </section>
  )
}
