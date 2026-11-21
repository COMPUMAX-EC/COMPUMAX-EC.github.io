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

const WHATSAPP_NUMBER = '593980494770'
const CUSTOM = 'personalizada'

const money = (value: number) => `$${value.toFixed(2)}`
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export default function CotizadorClient() {
  const [materialId, setMaterialId] = useState(sheetMaterials[0].id)
  const [formatId, setFormatId] = useState(sheetFormats[0].id)
  const [customWidth, setCustomWidth] = useState(60)
  const [customHeight, setCustomHeight] = useState(40)
  const [quantity, setQuantity] = useState(1)
  const [cutMinutes, setCutMinutes] = useState(0)

  const material = sheetMaterials.find((item) => item.id === materialId) ?? sheetMaterials[0]

  const size = useMemo(() => {
    if (formatId === CUSTOM) {
      return { name: 'Medida personalizada', widthCm: customWidth, heightCm: customHeight }
    }
    return sheetFormats.find((item) => item.id === formatId) ?? sheetFormats[0]
  }, [formatId, customWidth, customHeight])

  const unitPrice = piecePrice(material, size.widthCm, size.heightCm)
  const materialTotal = unitPrice * quantity
  const cutTotal = cutMinutes * CUT_PRICE_PER_MINUTE
  const total = materialTotal + cutTotal

  const comparison = sheetMaterials
    .map((item) => ({ id: item.id, name: item.name, price: piecePrice(item, size.widthCm, size.heightCm) }))
    .sort((a, b) => b.price - a.price)
  const maxPrice = Math.max(...comparison.map((item) => item.price), 0.01)

  const sizeLabel = `${size.widthCm} × ${size.heightCm} cm`

  const requestQuote = () => {
    const lines = [
      'Hola Compumax, quiero cotizar:',
      `- Material: ${material.name}`,
      `- Formato: ${size.name} (${sizeLabel}) x${quantity} = ${money(materialTotal)}`,
      cutMinutes > 0 ? `- Corte láser: ${cutMinutes} min = ${money(cutTotal)}` : null,
      `Total referencial: ${money(total)}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
  }

  const formatCards = [
    ...sheetFormats.map((item) => ({ ...item, price: piecePrice(material, item.widthCm, item.heightCm) })),
    { id: CUSTOM, name: 'Personalizada', widthCm: customWidth, heightCm: customHeight, price: piecePrice(material, customWidth, customHeight) },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8" id="cotizar">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1a5ba8]">Cotizar</p>
        <h1 className="mt-1 text-3xl font-bold text-[#0d4380] sm:text-4xl">Materiales por plancha y corte láser</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Elige el material y la medida. Te mostramos el precio de la plancha completa ({SHEET_WIDTH_CM} × {SHEET_HEIGHT_CM} cm),
          media plancha, A3 o la medida que necesites, y puedes sumar minutos de corte láser.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
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
                  className={`rounded-full border px-4 py-2 text-sm transition ${item.id === materialId ? 'border-[#0d4380] bg-[#0d4380] font-semibold text-white' : 'border-gray-300 text-gray-700 hover:border-[#1a5ba8]'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="formato-title">
            <h2 id="formato-title" className="text-lg font-semibold text-[#0d4380]">2. Medida</h2>
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
                  <input
                    type="number"
                    min={1}
                    max={SHEET_WIDTH_CM}
                    value={customWidth}
                    onChange={(event) => setCustomWidth(clamp(Number(event.target.value) || 1, 1, SHEET_WIDTH_CM))}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700">
                  Alto (cm)
                  <input
                    type="number"
                    min={1}
                    max={SHEET_HEIGHT_CM}
                    value={customHeight}
                    onChange={(event) => setCustomHeight(clamp(Number(event.target.value) || 1, 1, SHEET_HEIGHT_CM))}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </label>
              </div>
            )}
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm" aria-labelledby="cantidad-title">
            <h2 id="cantidad-title" className="text-lg font-semibold text-[#0d4380]">3. Cantidad y corte láser</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-gray-700">
                Cantidad de piezas
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(event) => setQuantity(Math.max(1, Math.floor(Number(event.target.value) || 1)))}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="text-sm text-gray-700">
                Minutos de corte láser (total)
                <input
                  type="number"
                  min={0}
                  value={cutMinutes}
                  onChange={(event) => setCutMinutes(Math.max(0, Number(event.target.value) || 0))}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <span className="mt-1 block text-xs text-gray-500">{money(CUT_PRICE_PER_MINUTE)} por minuto</span>
              </label>
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
                        <span
                          className={`block h-5 rounded transition-all ${active ? 'bg-[#0d4380]' : 'bg-[#9dbad6]'}`}
                          style={{ width: `${(item.price / maxPrice) * 100}%` }}
                        />
                      </span>
                      <span className={`text-right tabular-nums ${active ? 'font-semibold text-[#0d4380]' : 'text-gray-600'}`}>{money(item.price)}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>

        <aside className="h-fit rounded-2xl bg-[#0d4380] p-5 text-white shadow-lg lg:sticky lg:top-24" aria-label="Resumen de la cotización">
          <h2 className="text-lg font-semibold">Tu cotización</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-3"><dt className="text-[#c9dcef]">Material</dt><dd>{material.name}</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-[#c9dcef]">Medida</dt><dd className="text-right">{size.name}<br /><span className="text-xs text-[#c9dcef]">{sizeLabel}</span></dd></div>
            <div className="flex justify-between gap-3"><dt className="text-[#c9dcef]">Precio por pieza</dt><dd className="tabular-nums">{money(unitPrice)}</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-[#c9dcef]">Material × {quantity}</dt><dd className="tabular-nums">{money(materialTotal)}</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-[#c9dcef]">Corte láser · {cutMinutes} min</dt><dd className="tabular-nums">{money(cutTotal)}</dd></div>
          </dl>

          <div className="mt-4" aria-hidden={total === 0}>
            <div className="flex h-3 overflow-hidden rounded-full bg-[#1a5ba8]">
              <span className="bg-[#f7c34d]" style={{ width: `${total ? (materialTotal / total) * 100 : 0}%` }} />
              <span className="bg-[#7fd1ae]" style={{ width: `${total ? (cutTotal / total) * 100 : 0}%` }} />
            </div>
            <div className="mt-2 flex gap-4 text-xs text-[#c9dcef]">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#f7c34d]" />Material</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#7fd1ae]" />Corte láser</span>
            </div>
          </div>

          <div className="mt-5 flex items-baseline justify-between border-t border-[#1a5ba8] pt-4">
            <span>Total referencial</span>
            <strong className="text-3xl tabular-nums">{money(total)}</strong>
          </div>
          <p className="mt-1 text-xs text-[#c9dcef]">Precios en USD. Confirmamos el valor final por WhatsApp.</p>

          <button
            type="button"
            onClick={requestQuote}
            className="mt-4 w-full rounded-lg bg-[#25D366] py-3 text-sm font-bold text-[#062f2a] transition hover:bg-[#3ee07d]"
          >
            Enviar cotización por WhatsApp
          </button>
        </aside>
      </div>
    </main>
  )
}
