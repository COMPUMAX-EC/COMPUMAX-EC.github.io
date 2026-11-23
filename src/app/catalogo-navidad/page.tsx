import CatalogoClient, { type CatalogProduct } from './CatalogoClient'

// Las filas vienen de la hoja publicada. La columna Categoría puede traer opciones
// ("Pequeño, Mediano, Grande"); en ese caso la categoría se deduce del nombre.
const CATEGORY_KEYWORDS: Array<[string, string[]]> = [
  ['Reconocimientos', ['reconocimiento', 'medalla', 'trofeo', 'placa', 'banda']],
  ['Gigantografías', ['roll up', 'rollup', 'bandera', 'lona', 'gigantograf', 'banner']],
  ['Señaléticas', ['señal', 'senal', 'hablador', 'rotulo', 'rótulo']],
  ['Sellos', ['sello']],
  ['Corte Láser', ['laser', 'láser', 'corte', 'mdf']],
  ['Regalos personalizados', ['fotoroca', 'cuadro', 'taza', 'sublima', 'navid', 'pesebre', 'adorno']],
]

function inferCategory(name: string): string {
  const text = name.toLowerCase()
  return CATEGORY_KEYWORDS.find(([, words]) => words.some((word) => text.includes(word)))?.[0] || 'Otros'
}

/** "25" o "25,10" es un precio; algo como "12,12,14,25" es ambiguo y se muestra "Consultar". */
function parsePrice(raw: string): number | null {
  const text = raw.replace(/\$/g, '').trim()
  if (!/^\d+([.,]\d{1,2})?$/.test(text)) return null
  return Number(text.replace(',', '.'))
}

function splitList(raw: string): string[] {
  return raw.split(/[,/;]/).map((item) => item.trim()).filter(Boolean)
}

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRiCzFhJgb7KD9sZogvjlSWRegq0UAxmjvFCub_dO0l6hTusku93ScNY0hVxZ2BQ8924ZnadV__jphJ/pub?gid=0&single=true&output=csv'

const fallbackProducts: CatalogProduct[] = [
  { name: 'Carrusel navideño', category: 'Regalos personalizados', price: 49.97, options: [], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Casas Nuevas', category: 'Regalos personalizados', price: 6.51, options: [], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Escenas Navideñas', category: 'Regalos personalizados', price: 14.96, options: [], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Caja Pesebres', category: 'Regalos personalizados', price: 7.50, options: [], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyHyYOHBwj4magpsdQncEY0wKBHXqt.png' },
  { name: 'Torres', category: 'Regalos personalizados', price: 6.47, options: [], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ylwDoVxyDQr4wOYxY5NmKRr7pfXLfx.png' },
]

function parseCsv(csv: string): CatalogProduct[] {
  const rows = csv.trim().split(/\r?\n/).map((line) => {
    const cells: string[] = []
    let cell = ''
    let quoted = false
    for (let index = 0; index < line.length; index += 1) {
      const character = line[index]
      if (character === '"' && line[index + 1] === '"' && quoted) {
        cell += '"'
        index += 1
      } else if (character === '"') {
        quoted = !quoted
      } else if (character === ',' && !quoted) {
        cells.push(cell.trim())
        cell = ''
      } else {
        cell += character
      }
    }
    cells.push(cell.trim())
    return cells
  })
  const headers = (rows.shift() || []).map((header) => header.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''))
  const value = (row: string[], keys: string[]) => row[headers.findIndex((header) => keys.includes(header))] || ''
  const knownCategories = CATEGORY_KEYWORDS.map(([category]) => category.toLowerCase())
  return rows
    .filter((row) => value(row, ['nombre', 'name']))
    .map((row) => {
      const name = value(row, ['nombre', 'name'])
      const categoryCell = value(row, ['categoria', 'category'])
      const isCategory = categoryCell && !categoryCell.includes(',') && knownCategories.includes(categoryCell.toLowerCase())
      const optionCell = value(row, ['opciones', 'options', 'variantes', 'disenos', 'tamanos']) || (isCategory ? '' : categoryCell)
      return {
        name,
        category: isCategory ? categoryCell : inferCategory(name),
        price: parsePrice(value(row, ['precio', 'price'])),
        image: value(row, ['imagen', 'image', 'url_imagen']),
        description: value(row, ['descripcion', 'description']),
        options: splitList(optionCell),
      }
    })
    .filter((product) => product.image)
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
