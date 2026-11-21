'use client'

import { useMemo, useState } from 'react'
import {
  CUT_PRICE_PER_MINUTE,
  SHEET_HEIGHT_CM,
  SHEET_WIDTH_CM,
  piecePrice,
  sheetFormats,
  sheetMaterials,
} from '@/data/materiales'
import { DOZEN_QTY, priceCategories, unitPriceFor, type PriceCategory, type PriceItem } from '@/data/catalogo-precios'
import PriceIcon, { type IconName } from '@/components/PriceIcon'

const WHATSAPP_NUMBER = '593980494770'
const CUSTOM = 'personalizada'
const SHEETS_TAB = 'planchas'
const SHEETS_IMAGE = '/assets/reconocimientos/reconocimiento (5).jpg'

export type QuoteLine = {
  key: string
  label: string
  detail: string
  total: number
  from?: boolean
}

const assetUrl = (path: string) => encodeURI(path)
const money = (value: number) => `$${value.toFixed(2)}`
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export default function CotizadorClient() {
  const [tab, setTab] = useState(SHEETS_TAB)
  const [lines, setLines] = useState<QuoteLine[]>([])

  const addLine = (line: QuoteLine) => {
    setLines((current) => {
      const existing = current.findIndex((item) => item.key === line.key)
      if (existing === -1) return [...current, line]
      return current.map((item, index) => (index === existing ? line : item))
    })
  }
  const removeLine = (key: string) => setLines((current) => current.filter((item) => item.key !== key))

  const total = lines.reduce((sum, line) => sum + line.total, 0)
  const hasFrom = lines.some((line) => line.from)

  const sendQuote = () => {
    const body = lines.length
      ? lines.map((line) => `- ${line.label} · ${line.detail} = ${line.from ? 'desde ' : ''}${money(line.total)}`).join('\n')
      : 'Quisiera asesoría para una cotización.'
    const message = `Hola Compumax, quiero cotizar:\n${body}\n\nTotal referencial: ${money(total)}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  const category = priceCategories.find((item) => item.id === tab)
  const tabs: Array<{ id: string; name: string; icon: IconName }> = [
    { id: SHEETS_TAB, name: 'Planchas y corte láser', icon: 'sheet' },
    ...priceCategories.map(({ id, name, icon }) => ({ id, name, icon })),
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8" id="cotizar">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1a5ba8]">Cotizar</p>
        <h1 className="mt-1 text-3xl font-bold text-[#0d4380] sm:text-4xl">Lista de precios y cotizador</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Elige una categoría, revisa el precio por unidad y por docena, y arma tu cotización. Desde {DOZEN_QTY} unidades se
          aplica el precio por docena.
        </p>
      </header>

      <nav aria-label="Categorías" className="-mx-4 mb-6 overflow-x-auto px-4">
        <div className="flex gap-2 pb-1">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              aria-pressed={item.id === tab}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${item.id === tab ? 'border-[#0d4380] bg-[#0d4380] font-semibold text-white' : 'border-gray-300 bg-white text-gray-700 hover:border-[#1a5ba8]'}`}
            >
              <PriceIcon name={item.icon} className="h-4 w-4" />
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <CategoryBanner
            icon={category?.icon ?? 'sheet'}
            image={category?.image ?? SHEETS_IMAGE}
            title={category?.name ?? 'Planchas y corte láser'}
            subtitle={category ? `${category.items.length} productos · precio por unidad y por docena` : 'MDF, acrílico, sintra, coroplast y foam board por plancha, media plancha o A3'}
          />
          {category ? <CategoryList category={category} onAdd={addLine} /> : <SheetCalculator onAdd={addLine} />}
        </div>

        <aside className="h-fit rounded-2xl bg-[#0d4380] p-5 text-white shadow-lg lg:sticky lg:top-24" aria-label="Tu cotización">
          <h2 className="text-lg font-semibold">Tu cotización</h2>
          {lines.length ? (
            <ul className="mt-4 space-y-3">
              {lines.map((line) => (
                <li key={line.key} className="flex items-start justify-between gap-3 border-b border-[#1a5ba8] pb-3 text-sm">
                  <div className="min-w-0">
                    <p className="font-semibold leading-tight">{line.label}</p>
                    <p className="text-xs text-[#c9dcef]">{line.detail}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="tabular-nums">{line.from ? 'desde ' : ''}{money(line.total)}</span>
                    <button type="button" onClick={() => removeLine(line.key)} aria-label={`Quitar ${line.label}`} className="rounded-full px-2 text-[#c9dcef] hover:bg-[#1a5ba8] hover:text-white">×</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed border-[#5f8fc4] p-4 text-center text-sm text-[#c9dcef]">Aún no has añadido productos.</p>
          )}
          <div className="mt-4 flex items-baseline justify-between">
            <span>Total referencial</span>
            <strong className="text-3xl tabular-nums">{money(total)}</strong>
          </div>
          <p className="mt-1 text-xs text-[#c9dcef]">
            Precios en USD.{hasFrom ? ' Los precios "desde" dependen de la medida.' : ''} Confirmamos el valor final por WhatsApp.
          </p>
          <button type="button" onClick={sendQuote} className="mt-4 w-full rounded-lg bg-[#25D366] py-3 text-sm font-bold text-[#062f2a] transition hover:bg-[#3ee07d]">
            Enviar cotización por WhatsApp
          </button>
        </aside>
      </div>
    </main>
  )
}

function CategoryList({ category, onAdd }: { category: PriceCategory; onAdd: (line: QuoteLine) => void }) {
  const maxPrice = Math.max(...category.items.map((item) => item.unit ?? 0), 0.01)
  const hasDozen = category.items.some((item) => item.dozen !== undefined)

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="categoria-title">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 id="categoria-title" className="text-lg font-semibold text-[#0d4380]">Lista de precios</h2>
        {hasDozen && (
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-[#9dbad6]" />Unidad</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-[#0d4380]" />Docena (c/u)</span>
          </div>
        )}
      </div>
      <ul className="mt-4 divide-y divide-gray-100">
        {category.items.map((item) => (
          <PriceRow key={item.code} item={item} maxPrice={maxPrice} onAdd={onAdd} />
        ))}
      </ul>
    </section>
  )
}

function PriceRow({ item, maxPrice, onAdd }: { item: PriceItem; maxPrice: number; onAdd: (line: QuoteLine) => void }) {
  const [quantity, setQuantity] = useState(1)
  const price = unitPriceFor(item, quantity)
  const prefix = item.from ? 'desde ' : ''
  const per = item.per ? ` / ${item.per}` : ''
  const savings = item.unit && item.dozen !== undefined && item.dozen < item.unit ? Math.round((1 - item.dozen / item.unit) * 100) : 0

  const add = () => {
    if (price === undefined) return
    const usesDozen = item.dozen !== undefined && quantity >= DOZEN_QTY
    onAdd({
      key: `item-${item.code}`,
      label: item.name,
      detail: `${quantity}${item.per ? ` ${item.per}` : ''} × ${prefix}${money(price)}${usesDozen ? ' (precio docena)' : ''}`,
      total: price * quantity,
      from: item.from,
    })
  }

  return (
    <li className="grid grid-cols-[56px_1fr] gap-x-3 gap-y-3 py-4 sm:grid-cols-[56px_1fr_auto] sm:items-center">
      <ProductThumb item={item} />
      <div className="min-w-0">
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-500">
          {item.code}{item.note ? ` · ${item.note}` : ''}
        </p>
        {item.unit !== undefined ? (
          <div className="mt-2 space-y-1">
            <div className="grid grid-cols-[1fr_96px] items-center gap-2 text-sm">
              <span className="h-3 rounded bg-gray-100"><span className="block h-3 rounded bg-[#9dbad6]" style={{ width: `${(item.unit / maxPrice) * 100}%` }} /></span>
              <span className="tabular-nums text-gray-700">{prefix}{money(item.unit)}{per}</span>
            </div>
            {item.dozen !== undefined && (
              <div className="grid grid-cols-[1fr_96px] items-center gap-2 text-sm">
                <span className="h-3 rounded bg-gray-100"><span className="block h-3 rounded bg-[#0d4380]" style={{ width: `${(item.dozen / maxPrice) * 100}%` }} /></span>
                <span className="tabular-nums font-semibold text-[#0d4380]">
                  {prefix}{money(item.dozen)}{savings > 0 && <span className="ml-1 text-xs font-normal text-green-700">−{savings}%</span>}
                </span>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-2 text-sm font-semibold text-[#1a5ba8]">Precio a consultar</p>
        )}
      </div>
      {price !== undefined ? (
        <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
          <label className="sr-only" htmlFor={`qty-${item.code}`}>Cantidad de {item.name}</label>
          <input
            id={`qty-${item.code}`}
            type="number"
            min={1}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Math.floor(Number(event.target.value) || 1)))}
            className="w-20 rounded-lg border border-gray-300 px-2 py-2 text-sm"
          />
          <button type="button" onClick={add} className="whitespace-nowrap rounded-lg bg-[#0d4380] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1a5ba8]">
            Añadir · {prefix}{money(price * quantity)}
          </button>
        </div>
      ) : (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Compumax, quiero cotizar: ${item.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 whitespace-nowrap rounded-lg border border-[#0d4380] px-3 py-2 text-center text-sm font-semibold text-[#0d4380] hover:bg-[#e4eef5] sm:col-span-1"
        >
          Consultar
        </a>
      )}
    </li>
  )
}

function CategoryBanner({ icon, image, title, subtitle }: { icon: IconName; image: string; title: string; subtitle: string }) {
  return (
    <section className="relative isolate h-40 overflow-hidden rounded-2xl bg-[#0d4380] shadow-sm sm:h-48">
      <img src={assetUrl(image)} alt={`Trabajo de Compumax: ${title}`} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d4380]/95 via-[#0d4380]/70 to-transparent" />
      <div className="flex h-full flex-col justify-end p-5 text-white">
        <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
          <PriceIcon name={icon} />
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-[#e4eef5]">{subtitle}</p>
      </div>
    </section>
  )
}

function ProductThumb({ item }: { item: PriceItem }) {
  if (item.image) {
    return <img src={assetUrl(item.image)} alt={item.name} loading="lazy" className="h-14 w-14 rounded-xl object-cover ring-1 ring-gray-200" />
  }
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e4eef5] text-[#0d4380]">
      <PriceIcon name={item.icon} className="h-7 w-7" />
    </span>
  )
}

function SheetCalculator({ onAdd }: { onAdd: (line: QuoteLine) => void }) {
  const [materialId, setMaterialId] = useState(sheetMaterials[0].id)
  const [formatId, setFormatId] = useState(sheetFormats[0].id)
  const [customWidth, setCustomWidth] = useState(60)
  const [customHeight, setCustomHeight] = useState(40)
  const [quantity, setQuantity] = useState(1)
  const [cutMinutes, setCutMinutes] = useState(0)

  const material = sheetMaterials.find((item) => item.id === materialId) ?? sheetMaterials[0]

  const size = useMemo(() => {
    if (formatId === CUSTOM) return { name: 'Medida personalizada', widthCm: customWidth, heightCm: customHeight }
    return sheetFormats.find((item) => item.id === formatId) ?? sheetFormats[0]
  }, [formatId, customWidth, customHeight])

  const unitPrice = piecePrice(material, size.widthCm, size.heightCm)
  const materialTotal = unitPrice * quantity
  const cutTotal = cutMinutes * CUT_PRICE_PER_MINUTE
  const total = materialTotal + cutTotal
  const sizeLabel = `${size.widthCm} × ${size.heightCm} cm`

  const comparison = sheetMaterials
    .map((item) => ({ id: item.id, name: item.name, price: piecePrice(item, size.widthCm, size.heightCm) }))
    .sort((a, b) => b.price - a.price)
  const maxPrice = Math.max(...comparison.map((item) => item.price), 0.01)

  const formatCards = [
    ...sheetFormats.map((item) => ({ ...item, price: piecePrice(material, item.widthCm, item.heightCm) })),
    { id: CUSTOM, name: 'Personalizada', widthCm: customWidth, heightCm: customHeight, price: piecePrice(material, customWidth, customHeight) },
  ]

  const add = () =>
    onAdd({
      key: `plancha-${material.id}-${size.widthCm}x${size.heightCm}`,
      label: `${material.name} · ${size.name}`,
      detail: `${sizeLabel} × ${quantity}${cutMinutes > 0 ? ` + ${cutMinutes} min de corte` : ''}`,
      total,
    })

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="material-title">
        <h2 id="material-title" className="text-lg font-semibold text-[#0d4380]">1. Material</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {sheetMaterials.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMaterialId(item.id)}
              aria-pressed={item.id === materialId}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${item.id === materialId ? 'border-[#0d4380] bg-[#0d4380] font-semibold text-white' : 'border-gray-300 text-gray-700 hover:border-[#1a5ba8]'}`}
            >
              <PriceIcon name="sheet" className="h-4 w-4" />
              {item.name}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="formato-title">
        <h2 id="formato-title" className="text-lg font-semibold text-[#0d4380]">2. Medida</h2>
        <p className="mt-1 text-xs text-gray-500">Plancha completa de {SHEET_WIDTH_CM} × {SHEET_HEIGHT_CM} cm.</p>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {formatCards.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFormatId(item.id)}
              aria-pressed={item.id === formatId}
              className={`rounded-xl border p-3 text-left transition ${item.id === formatId ? 'border-[#0d4380] bg-[#e4eef5] ring-2 ring-[#0d4380]' : 'border-gray-200 hover:border-[#1a5ba8]'}`}
            >
              <span className="block text-sm font-semibold text-gray-800">{item.name}</span>
              <span className="block text-xs text-gray-500">{item.widthCm} × {item.heightCm} cm</span>
              <span className="mt-2 block text-xl font-bold text-[#0d4380]">{money(item.price)}</span>
            </button>
          ))}
        </div>
        {formatId === CUSTOM && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-sm">
            <label className="text-sm text-gray-700">
              Ancho (cm)
              <input type="number" min={1} max={SHEET_WIDTH_CM} value={customWidth} onChange={(event) => setCustomWidth(clamp(Number(event.target.value) || 1, 1, SHEET_WIDTH_CM))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
            </label>
            <label className="text-sm text-gray-700">
              Alto (cm)
              <input type="number" min={1} max={SHEET_HEIGHT_CM} value={customHeight} onChange={(event) => setCustomHeight(clamp(Number(event.target.value) || 1, 1, SHEET_HEIGHT_CM))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
            </label>
          </div>
        )}
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="cantidad-title">
        <h2 id="cantidad-title" className="text-lg font-semibold text-[#0d4380]">3. Cantidad y corte láser</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            Cantidad de piezas
            <input type="number" min={1} value={quantity} onChange={(event) => setQuantity(Math.max(1, Math.floor(Number(event.target.value) || 1)))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
          <label className="text-sm text-gray-700">
            Minutos de corte láser (total)
            <input type="number" min={0} value={cutMinutes} onChange={(event) => setCutMinutes(Math.max(0, Number(event.target.value) || 0))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
            <span className="mt-1 block text-xs text-gray-500">{money(CUT_PRICE_PER_MINUTE)} por minuto</span>
          </label>
        </div>

        <div className="mt-5 rounded-xl bg-[#f4f8fb] p-4">
          <div className="flex h-3 overflow-hidden rounded-full bg-gray-200">
            <span className="bg-[#0d4380]" style={{ width: `${total ? (materialTotal / total) * 100 : 0}%` }} />
            <span className="bg-[#f7c34d]" style={{ width: `${total ? (cutTotal / total) * 100 : 0}%` }} />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex gap-4 text-gray-600">
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-[#0d4380]" />Material {money(materialTotal)}</span>
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-[#f7c34d]" />Corte {money(cutTotal)}</span>
            </div>
            <button type="button" onClick={add} className="rounded-lg bg-[#0d4380] px-4 py-2 font-semibold text-white hover:bg-[#1a5ba8]">
              Añadir · {money(total)}
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="comparar-title">
        <h2 id="comparar-title" className="text-lg font-semibold text-[#0d4380]">Comparar materiales · {size.name} ({sizeLabel})</h2>
        <ul className="mt-4 space-y-2">
          {comparison.map((item) => {
            const active = item.id === material.id
            return (
              <li key={item.id}>
                <button type="button" onClick={() => setMaterialId(item.id)} className="grid w-full grid-cols-[96px_1fr_64px] items-center gap-3 text-left text-sm">
                  <span className={active ? 'font-semibold text-[#0d4380]' : 'text-gray-700'}>{item.name}</span>
                  <span className="h-5 rounded bg-gray-100">
                    <span className={`block h-5 rounded transition-all ${active ? 'bg-[#0d4380]' : 'bg-[#9dbad6]'}`} style={{ width: `${(item.price / maxPrice) * 100}%` }} />
                  </span>
                  <span className={`text-right tabular-nums ${active ? 'font-semibold text-[#0d4380]' : 'text-gray-600'}`}>{money(item.price)}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
