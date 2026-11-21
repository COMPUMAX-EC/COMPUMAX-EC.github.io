// Precios de venta tomados de "LISTA DE PRECIOS COMPUMAX.xlsx" (columna PLANCHA).
// Para actualizar un precio, cambia el valor aquí; la página /cotizar se recalcula sola.

export type SheetMaterial = {
  id: string
  name: string
  /** Precio de venta de una plancha completa de 120 × 240 cm, en USD. */
  sheetPrice: number
}

export const SHEET_WIDTH_CM = 120
export const SHEET_HEIGHT_CM = 240

/** Precio por minuto de corte láser, en USD (confirmado por Compumax, 2026-11-21). */
export const CUT_PRICE_PER_MINUTE = 0.5

export const sheetMaterials: SheetMaterial[] = [
  { id: 'mdf', name: 'MDF', sheetPrice: 35 },
  { id: 'acrilico', name: 'Acrílico', sheetPrice: 90 },
  { id: 'coroplast', name: 'Coroplast', sheetPrice: 30 },
  { id: 'foam-board', name: 'Foam board', sheetPrice: 20 },
  { id: 'sintra-3', name: 'Sintra 3 mm', sheetPrice: 20 },
  { id: 'sintra-5', name: 'Sintra 5 mm', sheetPrice: 28 },
  { id: 'sintra-6', name: 'Sintra 6 mm', sheetPrice: 30 },
]

export type SheetFormat = {
  id: string
  name: string
  widthCm: number
  heightCm: number
}

export const sheetFormats: SheetFormat[] = [
  { id: 'completa', name: 'Plancha completa', widthCm: 120, heightCm: 240 },
  { id: 'media', name: 'Media plancha', widthCm: 120, heightCm: 120 },
  { id: 'a3', name: 'A3', widthCm: 29.7, heightCm: 42 },
]

/** Precio proporcional al área de una pieza cortada de la plancha. */
export function piecePrice(material: SheetMaterial, widthCm: number, heightCm: number): number {
  const sheetArea = SHEET_WIDTH_CM * SHEET_HEIGHT_CM
  return (material.sheetPrice * (widthCm * heightCm)) / sheetArea
}
