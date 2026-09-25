import CatalogoClient, { type CatalogProduct } from './CatalogoClient'

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1HPw5nfotD-EQL7X25Z8upkbMyc9haz_7ly2dil-zi60/export?format=csv&gid=0'

const fallbackProducts: CatalogProduct[] = [
  { name: 'Carrusel navideño', category: 'Decoración', price: '49,97', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Casas Nuevas', category: 'Casas y edificios', price: '6,51', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Escenas Navideñas', category: 'Escenas', price: '14,96', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Caja Pesebres', category: 'Pesebres', price: '7,50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Torres', category: 'Arquitectura navideña', price: '6,47', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ylwDoVxyDQr4wOYxY5NmKRr7pfXLfx.png' },
]

function parseCsv(csv: string): CatalogProduct[] {
  const rows = csv.trim().split(/\r?\n/).map((row) => row.match(/("(?:[^"]|"")*"|[^,]*)/g)?.filter((cell) => cell !== undefined).map((cell) => cell.replace(/^"|"$/g, '').replace(/""/g, '')) || [])
  const headers = (rows.shift() || []).map((header) => header.trim().toLowerCase())
  const value = (row: string[], keys: string[]) => row[headers.findIndex((header) => keys.includes(header))] || ''
  return rows.filter((row) => value(row, ['nombre', 'name'])).map((row) => ({ name: value(row, ['nombre', 'name']), category: value(row, ['categoria', 'categoría', 'category']) || 'Navidad', price: value(row, ['precio', 'price']), image: value(row, ['imagen', 'image', 'url_imagen']), description: value(row, ['descripcion', 'descripción', 'description']) })).filter((product) => product.price && product.image)
}

export default async function CatalogoNavidadPage() {
  let products = fallbackProducts
  try {
    const response = await fetch(SHEET_CSV_URL, { next: { revalidate: 60 } })
    if (response.ok) {
      const remoteProducts = parseCsv(await response.text())
      if (remoteProducts.length) products = remoteProducts
    }
  } catch {
    products = fallbackProducts
  }
  return <CatalogoClient products={products} />
}
