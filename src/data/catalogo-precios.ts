// Lista de precios tomada de "LISTA DE PRECIOS COMPUMAX.xlsx".
// unit = valor unitario, dozen = valor por unidad al comprar 12 o más (columna VALOR DOCENA).
// from = el precio es referencial ("desde"); sin unit = "Consultar".

export type PriceItem = {
  code: string
  name: string
  unit?: number
  dozen?: number
  /** Unidad de venta cuando no es la pieza (m², metro lineal, ciento...). */
  per?: string
  from?: boolean
  note?: string
}

export type PriceCategory = {
  id: string
  name: string
  items: PriceItem[]
}

export const DOZEN_QTY = 12

export const priceCategories: PriceCategory[] = [
  {
    id: 'impresion',
    name: 'Impresión',
    items: [
      { code: 'IM001', name: 'Impresión lona', unit: 12, dozen: 10 },
      { code: 'IM002', name: 'Impresión imantado', unit: 45 },
      { code: 'IM003', name: 'Impresión microperforado', unit: 20, dozen: 19, note: '$25 instalado' },
      { code: 'IM004', name: 'Impresión lona translúcida', unit: 18, dozen: 17 },
      { code: 'IM005', name: 'Impresión vinil', unit: 14, dozen: 12 },
      { code: 'IM006', name: 'Impresión vinil + corte', unit: 18, dozen: 16 },
      { code: 'IM007', name: 'Vinil', unit: 7, dozen: 6, per: 'm²' },
      { code: 'IM013', name: 'Impresión vinil + sintra', unit: 55, dozen: 35, from: true },
      { code: 'IM008', name: 'Impresión arete para ganado', unit: 3, dozen: 1 },
      { code: 'IM009', name: 'Menú PVC impreso a 2 caras', unit: 8, dozen: 6 },
      { code: 'IM016', name: 'Señalética vinil + PVC', unit: 3.5, dozen: 3.25 },
      { code: 'IM020', name: 'Etiquetas de queso cuadradas, vinil adhesivo 12 × 6 cm', unit: 0.08, note: 'Venta por millar' },
      { code: 'IM021', name: 'Etiquetas de queso, vinil adhesivo 10 cm', unit: 0.14, note: 'Venta por millar' },
    ],
  },
  {
    id: 'placas-lapidas-bandas',
    name: 'Placas, lápidas y bandas',
    items: [
      { code: 'IM014', name: 'Placa de vehículo PVC', unit: 10, dozen: 10 },
      { code: 'IM015', name: 'Placa de vehículo metálica con relieve', unit: 20, dozen: 20 },
      { code: 'IM010', name: 'Lápida porcelanato', unit: 80 },
      { code: 'IM011', name: 'Lápida acrílico corte láser', unit: 80 },
      { code: 'IM012', name: 'Lápida PVC 70 × 40 cm', unit: 30, dozen: 28 },
      { code: 'IM017', name: 'Banda de reina sublimada, satín', unit: 15, dozen: 14 },
      { code: 'IM018', name: 'Banda tricolor sublimada, satín', unit: 18, dozen: 16 },
      { code: 'IM019', name: 'Banda de gamuza con letras de escarcha', unit: 25, dozen: 23 },
    ],
  },
  {
    id: 'sublimacion',
    name: 'Sublimación',
    items: [
      { code: 'SUB001', name: 'Jarro sublimado', unit: 5, dozen: 2.5 },
      { code: 'SUB002', name: 'Jarro mágico sublimado', unit: 8, dozen: 6 },
      { code: 'SUB003', name: 'Jarro dorado / plateado', unit: 7, dozen: 6 },
      { code: 'SUB004', name: 'Plato sublimado', unit: 10, dozen: 8 },
      { code: 'SUB005', name: 'Escarapela sublimada', unit: 5, dozen: 3 },
      { code: 'SUB006', name: 'Esfero sublimado', unit: 3, dozen: 0.5 },
      { code: 'SUB007', name: 'Gorra sublimada', unit: 5, dozen: 2.75 },
      { code: 'SUB008', name: 'Placa metálica sublimada A5', unit: 10, dozen: 8 },
      { code: 'SUB009', name: 'Fotoroca sublimada', unit: 20, dozen: 15 },
      { code: 'SUB010', name: 'Almohada sublimada', unit: 15, dozen: 10 },
      { code: 'SUB011', name: 'Camiseta sublimada A4', unit: 5, dozen: 4 },
      { code: 'SUB012', name: 'Llavero sublimado', unit: 6, dozen: 5 },
      { code: 'RT008', name: 'Impresión UV en CD', unit: 5, dozen: 4 },
    ],
  },
  {
    id: 'reconocimientos',
    name: 'Reconocimientos y medallas',
    items: [
      { code: 'REC001', name: 'Reconocimiento acrílico + MDF con base', unit: 20, dozen: 15 },
      { code: 'REC002', name: 'Reconocimiento de cristal', unit: 30, dozen: 25 },
      { code: 'REC003', name: 'Medalla honorífica', unit: 8, dozen: 6 },
      { code: 'CL004', name: 'Medalla MDF', unit: 1.25, dozen: 1.2 },
      { code: 'CL005', name: 'Medalla acrílico', unit: 1.75, dozen: 1.65 },
      { code: 'CL006', name: 'Medalla en lata', unit: 1.25, dozen: 1.25 },
      { code: 'CL007', name: 'Medalla doble corte', unit: 2.25, dozen: 2.2 },
    ],
  },
  {
    id: 'corte-laser',
    name: 'Corte láser y detalles',
    items: [
      { code: 'CL001', name: 'Recuerdo de grado corte láser 11 cm + impresión', unit: 8, dozen: 4 },
      { code: 'RT006', name: 'Portarretratos MDF + acrílico', unit: 8, dozen: 7 },
      { code: 'RT006-B', name: 'Portarretratos MDF', unit: 5, dozen: 4.5 },
      { code: 'DT001', name: 'Caja impresa', unit: 3, dozen: 0.75 },
      { code: 'RT012', name: 'Lámpara LED' },
    ],
  },
  {
    id: 'rotulos',
    name: 'Rótulos y publicidad',
    items: [
      { code: 'CL002', name: 'Rótulo circular 50 cm', unit: 125, dozen: 120, note: 'Sin instalación' },
      { code: 'RT001', name: 'Lona + bastidor', unit: 45, dozen: 40, from: true },
      { code: 'RT002', name: 'Rótulo LED acrílico + neón', unit: 120, dozen: 110, from: true },
      { code: 'RT003', name: 'Rótulo caja de luz', unit: 90, dozen: 70, from: true },
      { code: 'RT004', name: 'Rótulo triángulo 120 × 30 cm sin iluminación', unit: 50, dozen: 48 },
      { code: 'RT005', name: 'Rótulo triángulo 120 × 30 cm con iluminación', unit: 70, dozen: 68 },
      { code: 'RT007', name: 'Dummy vinilo + foam board 90 × 60 cm', unit: 18, dozen: 17 },
      { code: 'RT009', name: 'Roll-up', unit: 45, dozen: 40 },
      { code: 'CL003', name: 'Bandera rotativa', unit: 85, dozen: 80 },
      { code: 'CL002-B', name: 'Mesa degustativa', unit: 120, dozen: 100 },
    ],
  },
  {
    id: 'sellos-papeleria',
    name: 'Sellos, carnets y tarjetas',
    items: [
      { code: 'CL010', name: 'Sello de caucho S-722', unit: 8, dozen: 7 },
      { code: 'CL011', name: 'Sello de caucho S-841', unit: 9, dozen: 8 },
      { code: 'CL012', name: 'Sello de caucho S-843', unit: 10, dozen: 9 },
      { code: 'CL013', name: 'Sello de caucho S-844', unit: 12, dozen: 11 },
      { code: 'CL014', name: 'Sello de caucho S-845', unit: 14, dozen: 13 },
      { code: 'CL015', name: 'Sello de caucho R-552', unit: 20, dozen: 19 },
      { code: 'CL016', name: 'Sello seco pequeño', unit: 25, dozen: 24 },
      { code: 'CL017', name: 'Sello seco mediano', unit: 30, dozen: 29 },
      { code: 'CL008', name: 'Carnet', unit: 5, dozen: 2.5, note: 'Sin cordón' },
      { code: 'CL009', name: 'Cordón para carnet', unit: 0.5, dozen: 0.4 },
      { code: 'TP-100', name: 'Tarjetas de presentación', unit: 12, per: 'ciento' },
      { code: 'TP-1000', name: 'Tarjetas de presentación', unit: 40, per: 'millar' },
      { code: 'RT013', name: 'Estampado textil' },
    ],
  },
  {
    id: 'materiales-metro',
    name: 'Materiales por metro',
    items: [
      { code: 'M-VB', name: 'Vinilo blanco / transparente', unit: 3, per: 'm²' },
      { code: 'M-MP', name: 'Microperforado', unit: 6, per: 'm²' },
      { code: 'M-LN', name: 'Lona normal', unit: 2.5, per: 'm²' },
      { code: 'M-LT', name: 'Lona translúcida', unit: 5, per: 'm²' },
      { code: 'M-ES', name: 'Esmerilado', unit: 10, per: 'm²' },
      { code: 'M-VT', name: 'Vinilo textil', unit: 17, per: 'm²' },
      { code: 'M-CN', name: 'Cinta neón', unit: 12, per: 'm²' },
      { code: 'M-HS', name: 'Hojas de sublimar', unit: 0.5, per: 'hoja' },
      { code: 'M-VN', name: 'Vinilo normal', unit: 8, per: 'metro lineal' },
      { code: 'M-VM', name: 'Vinilo metalizado', unit: 10, per: 'metro lineal' },
      { code: 'M-VF', name: 'Vinilo fibra de carbono', unit: 12, per: 'metro lineal' },
      { code: 'M-VE', name: 'Vinilo electrocortado', unit: 18, from: true, note: 'Sin instalación' },
      { code: 'M-UV', name: 'Impresión UV + corte láser en foam board', unit: 35, from: true, note: 'Sin instalación' },
    ],
  },
]

/** Precio por unidad según la cantidad: desde 12 se aplica el precio por docena. */
export function unitPriceFor(item: PriceItem, quantity: number): number | undefined {
  if (item.unit === undefined) return undefined
  if (item.dozen !== undefined && quantity >= DOZEN_QTY) return item.dozen
  return item.unit
}
