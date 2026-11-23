'use client'

import { useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '593980494770'

export type CatalogProduct = {
  name: string
  category: string
  /** null cuando la hoja no trae un precio único (se muestra "Consultar"). */
  price: number | null
  image: string
  description?: string
  /** Tamaños, materiales o diseños que el cliente puede escoger. */
  options: string[]
}

type CartItem = { product: CatalogProduct; option: string; quantity: number }

const money = (value: number) => `$${value.toFixed(2).replace('.', ',')}`
const priceLabel = (product: CatalogProduct) => (product.price === null ? 'Consultar' : money(product.price))
const itemKey = (item: { product: CatalogProduct; option: string }) => `${item.product.name}|${item.option}`

export default function CatalogoClient({ products }: { products: CatalogProduct[] }) {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState<CatalogProduct | null>(null)
  const [option, setOption] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [search, setSearch] = useState('')

  // Solo se muestran los filtros que tienen productos.
  const filters = useMemo(() => ['Todos', ...Array.from(new Set(products.map((product) => product.category)))], [products])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0)
  const hasUnpriced = cartItems.some((item) => item.product.price === null)

  const query = search.trim().toLowerCase()
  const visibleProducts = products.filter((product) => {
    const matchesSearch = `${product.name} ${product.category} ${product.options.join(' ')}`.toLowerCase().includes(query)
    const matchesFilter = filter === 'Todos' || product.category === filter
    return matchesSearch && matchesFilter
  })

  const openProduct = (product: CatalogProduct) => {
    setSelected(product)
    setOption(product.options[0] || '')
    setQuantity(1)
  }

  const addToCart = (product: CatalogProduct) => {
    setCartItems((items) => {
      const key = itemKey({ product, option })
      const existing = items.find((item) => itemKey(item) === key)
      if (existing) return items.map((item) => (itemKey(item) === key ? { ...item, quantity: item.quantity + quantity } : item))
      return [...items, { product, option, quantity }]
    })
    setSelected(null)
  }

  const removeFromCart = (key: string) => setCartItems((items) => items.filter((item) => itemKey(item) !== key))

  const requestQuote = () => {
    const lines = cartItems.length
      ? cartItems
          .map(({ product, option, quantity }) => {
            const name = option ? `${product.name} (${option})` : product.name
            const price = product.price === null ? 'precio a confirmar' : `${money(product.price)} c/u`
            return `- ${name} x${quantity} · ${price}`
          })
          .join('\n')
      : 'Me gustaría recibir asesoría sobre los productos del catálogo.'
    const total = cartItems.length ? `\n\nTotal: ${money(cartTotal)}${hasUnpriced ? ' + productos por cotizar' : ''}` : ''
    const message = `Hola Compumax, quiero estos productos del catálogo de Navidad:\n${lines}${total}\n\n¿Me pueden compartir el número de cuenta para realizar el pago?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-[#062f2a] text-[#f9f1c7] selection:bg-[#f7c34d] selection:text-[#062f2a]">
      <div className="mx-auto min-h-screen max-w-md border-x border-[#2d6fa3] bg-[#073b34] px-3 pb-24 shadow-2xl">
        <header className="sticky top-0 z-10 -mx-3 border-b border-[#2d6fa3] bg-[#073b34]/95 px-3 pb-3 pt-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <a href="/" className="text-lg font-bold tracking-tight text-[#f7c34d]">Compumax</a>
            <label className="flex min-w-0 flex-1 items-center rounded-full border border-[#3d83b8] bg-[#0b4265] px-3 text-xs text-[#9bc1ad]">
              <span className="sr-only">Buscar productos</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full bg-transparent py-1.5 outline-none placeholder:text-[#9bc1ad]" placeholder="Buscar producto" />
            </label>
            <a href="/" aria-label="Cerrar catálogo" className="rounded-full border border-[#3d83b8] px-2 py-1 text-sm text-[#b9d3bc]">×</a>
          </div>
          <p className="mt-1 text-center text-[10px] text-[#9bc1ad]">Catálogo de Navidad · {products.length} productos</p>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full border px-3 py-1 text-[10px] transition ${filter === item ? 'border-[#f7c34d] bg-[#f7c34d] font-semibold text-[#073b34]' : 'border-[#3d83b8] text-[#a9c8b2] hover:border-[#f7c34d]'}`}>
                {item}
              </button>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-2 gap-x-3 gap-y-4 pt-4" aria-label="Productos navideños">
          {visibleProducts.map((product, index) => (
            <button key={`${product.name}-${index}`} onClick={() => openProduct(product)} className="group text-left">
              <div className="overflow-hidden rounded-lg border border-[#438bc0] bg-[#0a466b] shadow-[0_5px_20px_rgba(0,0,0,.18)]">
                <img src={product.image} alt={`Vista de ${product.name}`} className="aspect-[4/5] w-full object-cover object-top transition duration-300 group-hover:scale-105" />
              </div>
              <h2 className="mt-1.5 text-sm font-semibold leading-tight">{product.name}</h2>
              <p className="mt-0.5 text-[10px] text-[#94baa2]">
                {product.price === null ? <strong className="text-sm text-[#f7c34d]">Consultar</strong> : <>desde <strong className="text-sm text-[#f7c34d]">{money(product.price)}</strong></>} · {product.category}
              </p>
              {product.options.length > 0 && <p className="mt-0.5 truncate text-[10px] text-[#b9d3bc]">{product.options.join(' · ')}</p>}
            </button>
          ))}
        </section>
        {visibleProducts.length === 0 && (
          <p className="mt-6 rounded-lg border border-dashed border-[#438bc0] p-4 text-center text-sm text-[#c9dcc5]">No hay productos con esa búsqueda.</p>
        )}
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-10 mx-auto flex max-w-md items-center justify-between border-t border-[#438bc0] bg-[#0d4665] px-4 py-3">
        <div>
          <strong className="block text-base text-[#f8f3d6]">{money(cartTotal)}{hasUnpriced && <span className="text-[10px] font-normal text-[#a9c8b2]"> + por cotizar</span>}</strong>
          <span className="text-[10px] text-[#a9c8b2]">{cartCount} {cartCount === 1 ? 'artículo' : 'artículos'}</span>
        </div>
        <button onClick={() => setIsCartOpen(true)} className="rounded-lg bg-[#f7c34d] px-4 py-2 text-xs font-bold text-[#073b34] shadow hover:bg-[#ffd66f]">Ver carrito</button>
      </footer>

      {isCartOpen && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/65 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label="Carrito de compras">
          <div className="w-full max-w-md rounded-t-2xl border border-[#438bc0] bg-[#073b34] p-4 sm:rounded-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#f7c34d]">Tu carrito</h2>
              <button onClick={() => setIsCartOpen(false)} aria-label="Cerrar carrito" className="rounded-full border border-[#3d83b8] px-3 py-1 text-lg">×</button>
            </div>
            {cartItems.length ? (
              <div className="mt-4 max-h-[50vh] space-y-3 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={itemKey(item)} className="flex items-center justify-between gap-3 rounded-lg border border-[#438bc0] bg-[#0a466b] p-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{item.product.name}</p>
                      <p className="text-xs text-[#a9c8b2]">{item.option && `${item.option} · `}{item.quantity} × {priceLabel(item.product)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong className="text-sm text-[#f7c34d]">{item.product.price === null ? 'Consultar' : money(item.product.price * item.quantity)}</strong>
                      <button onClick={() => removeFromCart(itemKey(item))} aria-label={`Quitar ${item.product.name}`} className="rounded-full border border-[#3d83b8] px-2 text-sm">×</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-5 rounded-lg border border-dashed border-[#438bc0] p-4 text-center text-sm text-[#c9dcc5]">Aún no has añadido productos.</p>
            )}
            <div className="mt-5 flex items-center justify-between border-t border-[#438bc0] pt-4">
              <span>Total</span>
              <strong className="text-lg text-[#f7c34d]">{money(cartTotal)}{hasUnpriced && <span className="text-xs font-normal text-[#a9c8b2]"> + por cotizar</span>}</strong>
            </div>
            <button onClick={requestQuote} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-bold text-[#062f2a]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.8.9-3.2-.2-.3A8 8 0 1 1 12 19.8Zm4.4-5.9c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.1-.3.2-.5.1a6.4 6.4 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.9.6 2.6.5.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3Z" /></svg>
              Lo Quiero
            </button>
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-20 flex items-end justify-center bg-black/65 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={`Detalle de ${selected.name}`}>
          <div className="w-full max-w-md overflow-hidden rounded-t-2xl border border-[#438bc0] bg-[#073b34] sm:rounded-2xl">
            <div className="relative h-64 bg-[#0a466b]">
              <img src={selected.image} alt={`Detalle de ${selected.name}`} className="h-full w-full object-cover object-top" />
              <button onClick={() => setSelected(null)} aria-label="Cerrar detalle" className="absolute right-3 top-3 rounded-full bg-[#073b34]/85 px-3 py-1 text-lg">×</button>
            </div>
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-widest text-[#9bc1ad]">{selected.category}</p>
              <h2 className="mt-1 text-2xl font-bold text-[#f7c34d]">{selected.name}</h2>
              <p className="mt-1 text-sm leading-6 text-[#d4e0c5]">{selected.description || 'Producto personalizable de Compumax. Solicita una cotización para conocer materiales, medidas y acabados disponibles.'}</p>
              {selected.options.length > 0 && (
                <div className="mt-4">
                  <span className="text-sm text-[#a9c8b2]">Opción</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selected.options.map((item) => (
                      <button key={item} onClick={() => setOption(item)} aria-pressed={option === item} className={`rounded-full border px-3 py-1 text-xs transition ${option === item ? 'border-[#f7c34d] bg-[#f7c34d] font-semibold text-[#073b34]' : 'border-[#3d83b8] text-[#d4e0c5] hover:border-[#f7c34d]'}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#a9c8b2]">Cantidad</span>
                <div className="flex items-center rounded-lg border border-[#438bc0]">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Menos" className="px-3 py-2">−</button>
                  <span className="border-x border-[#438bc0] px-4 py-2 text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} aria-label="Más" className="px-3 py-2">+</button>
                </div>
              </div>
              <button onClick={() => addToCart(selected)} className="mt-4 w-full rounded-lg bg-[#f7c34d] py-3 text-sm font-bold text-[#073b34]">
                Añadir al carrito · {selected.price === null ? 'precio a consultar' : money(selected.price * quantity)}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
