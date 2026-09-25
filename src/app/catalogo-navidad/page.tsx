'use client'

import { useState } from 'react'

const products = [
  { name: 'Carrusel navideño', category: 'Decoración', price: '49,97', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Casas Nuevas', category: 'Casas y edificios', price: '6,51', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Escenas Navideñas', category: 'Escenas', price: '14,96', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Caja Pesebres', category: 'Pesebres', price: '7,50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Torres', category: 'Arquitectura navideña', price: '6,47', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ylwDoVxyDQr4wOYxY5NmKRr7pfXLfx.png' },
  { name: 'Aldea iluminada', category: 'Decoración', price: '12,80', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
]

const filters = ['Todos', 'Otros', 'Ciudades y casas', 'Molinos']

export default function CatalogoNavidadPage() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(1)
  const [cartTotal, setCartTotal] = useState(19.35)

  const addToCart = (price: string) => {
    const numericPrice = Number(price.replace(',', '.'))
    setCartCount((count) => count + quantity)
    setCartTotal((total) => total + numericPrice * quantity)
    setSelected(null)
  }

  return (
    <main className="min-h-screen bg-[#062f2a] text-[#f9f1c7] selection:bg-[#f7c34d] selection:text-[#062f2a]">
      <div className="mx-auto min-h-screen max-w-md border-x border-[#2d6fa3] bg-[#073b34] px-3 pb-6 shadow-2xl">
        <header className="sticky top-0 z-10 -mx-3 border-b border-[#2d6fa3] bg-[#073b34]/95 px-3 pb-3 pt-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <a href="/" className="text-lg font-bold tracking-tight text-[#f7c34d]">Compumax</a>
            <label className="flex min-w-0 flex-1 items-center rounded-full border border-[#3d83b8] bg-[#0b4265] px-3 text-xs text-[#9bc1ad]">
              <span className="sr-only">Buscar productos</span>
              <input className="w-full bg-transparent py-1.5 outline-none placeholder:text-[#9bc1ad]" placeholder="Buscar producto o código" />
            </label>
            <a href="/" aria-label="Cerrar catálogo" className="rounded-full border border-[#3d83b8] px-2 py-1 text-sm text-[#b9d3bc]">×</a>
          </div>
          <p className="mt-1 text-center text-[10px] text-[#9bc1ad]">Página 3 de 12 · Catálogo de Navidad</p>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full border px-3 py-1 text-[10px] transition ${filter === item ? 'border-[#f7c34d] bg-[#f7c34d] font-semibold text-[#073b34]' : 'border-[#3d83b8] text-[#a9c8b2] hover:border-[#f7c34d]'}`}>
                {item}
              </button>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-2 gap-x-3 gap-y-4 pt-4" aria-label="Productos navideños">
          {products.map((product, index) => (
            <button key={`${product.name}-${index}`} onClick={() => { setSelected(product); setQuantity(1) }} className="group text-left">
              <div className="overflow-hidden rounded-lg border border-[#438bc0] bg-[#0a466b] shadow-[0_5px_20px_rgba(0,0,0,.18)]">
                <img src={product.image} alt={`Vista de ${product.name}`} className="aspect-[4/5] w-full object-cover object-top transition duration-300 group-hover:scale-105" />
              </div>
              <h2 className="mt-1.5 text-sm font-semibold leading-tight">{product.name}</h2>
              <p className="mt-0.5 text-[10px] text-[#94baa2]">desde <strong className="text-sm text-[#f7c34d]">${product.price}</strong> · {product.category}</p>
            </button>
          ))}
        </section>

        <footer className="mt-6 flex items-center justify-between rounded-lg border border-[#438bc0] bg-[#0d4665] px-3 py-2">
          <div><strong className="block text-base text-[#f8f3d6]">${cartTotal.toFixed(2).replace('.', ',')}</strong><span className="text-[10px] text-[#a9c8b2]">{cartCount} artículos</span></div>
          <button onClick={() => setSelected(products[4])} className="rounded-lg bg-[#f7c34d] px-4 py-2 text-xs font-bold text-[#073b34] shadow hover:bg-[#ffd66f]">🛒 Ver carrito</button>
        </footer>
      </div>

      {selected && (
        <div className="fixed inset-0 z-20 flex items-end justify-center bg-black/65 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={`Detalle de ${selected.name}`}>
          <div className="w-full max-w-md overflow-hidden rounded-t-2xl border border-[#438bc0] bg-[#073b34] sm:rounded-2xl">
            <div className="relative h-64 bg-[#0a466b]"><img src={selected.image} alt={`Detalle de ${selected.name}`} className="h-full w-full object-cover object-top" /><button onClick={() => setSelected(null)} aria-label="Cerrar detalle" className="absolute right-3 top-3 rounded-full bg-[#073b34]/85 px-3 py-1 text-lg">×</button></div>
            <div className="p-4"><p className="text-[10px] uppercase tracking-widest text-[#9bc1ad]">{selected.category}</p><h2 className="mt-1 text-2xl font-bold text-[#f7c34d]">{selected.name}</h2><p className="mt-1 text-sm text-[#d4e0c5]">Diseño navideño listo para personalizar y sumar a tu decoración.</p>
              <div className="mt-4 flex items-center justify-between"><span className="text-sm text-[#a9c8b2]">Cantidad</span><div className="flex items-center rounded-lg border border-[#438bc0]"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2">−</button><span className="border-x border-[#438bc0] px-4 py-2 text-sm">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2">+</button></div></div>
              <button onClick={() => addToCart(selected.price)} className="mt-4 w-full rounded-lg bg-[#f7c34d] py-3 text-sm font-bold text-[#073b34]">Añadir al carrito · ${selected.price}</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
