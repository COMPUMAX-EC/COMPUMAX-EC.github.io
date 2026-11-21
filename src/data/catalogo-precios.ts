// Lista de precios tomada de "LISTA DE PRECIOS COMPUMAX.xlsx".
// unit = valor unitario, dozen = valor por unidad al comprar 12 o más (columna VALOR DOCENA).
// from = el precio es referencial ("desde"); sin unit = "Consultar".
// icon = ícono del producto (ver src/components/PriceIcon.tsx).
// image = foto real del producto en /public/assets; si no hay, se muestra el ícono.

import type { IconName } from '@/components/PriceIcon'

export type PriceItem = {
  code: string
  name: string
  unit?: number
  dozen?: number
  /** Unidad de venta cuando no es la pieza (m², metro lineal, ciento...). */
  per?: string
  from?: boolean
  note?: string
  icon: IconName
  image?: string
}

export type PriceCategory = {
  id: string
  name: string
  icon: IconName
  /** Foto de trabajos de Compumax para la cabecera de la categoría. */
  image: string
  items: PriceItem[]
}

export const DOZEN_QTY = 12

export const priceCategories: PriceCategory[] = [
  {
    id: 'impresion',
    name: 'Impresión',
    icon: 'printer',
    image: '/assets/461353950_1047060326595845_6254389404205422798_n.jpg',
    items: [
      { code: 'IM001', name: 'Impresión lona', unit: 12, dozen: 10, icon: 'banner' },
      { code: 'IM002', name: 'Impresión imantado', unit: 45, icon: 'magnet' },
      { code: 'IM003', name: 'Impresión microperforado', unit: 20, dozen: 19, note: '$25 instalado', icon: 'window' },
      { code: 'IM004', name: 'Impresión lona translúcida', unit: 18, dozen: 17, icon: 'banner' },
      { code: 'IM005', name: 'Impresión vinil', unit: 14, dozen: 12, icon: 'roll' },
      { code: 'IM006', name: 'Impresión vinil + corte', unit: 18, dozen: 16, icon: 'scissors' },
      { code: 'IM007', name: 'Vinil', unit: 7, dozen: 6, per: 'm²', icon: 'roll' },
      { code: 'IM013', name: 'Impresión vinil + sintra', unit: 55, dozen: 35, from: true, icon: 'sign' },
      { code: 'IM008', name: 'Impresión arete para ganado', unit: 3, dozen: 1, icon: 'tag', image: '/assets/estampados/estampado (2).webp' },
      { code: 'IM009', name: 'Menú PVC impreso a 2 caras', unit: 8, dozen: 6, icon: 'menu' },
      { code: 'IM016', name: 'Señalética vinil + PVC', unit: 3.5, dozen: 3.25, icon: 'signpost', image: '/assets/señaleticas/señaletica (1).jpg' },
      { code: 'IM020', name: 'Etiquetas de queso cuadradas, vinil adhesivo 12 × 6 cm', unit: 0.08, note: 'Venta por millar', icon: 'tag', image: '/assets/461353950_1047060326595845_6254389404205422798_n.jpg' },
      { code: 'IM021', name: 'Etiquetas de queso, vinil adhesivo 10 cm', unit: 0.14, note: 'Venta por millar', icon: 'tag' },
    ],
  },
  {
    id: 'placas-lapidas-bandas',
    name: 'Placas, lápidas y bandas',
    icon: 'plaque',
    image: '/assets/reconocimientos/reconocimiento (9).jpg',
    items: [
      { code: 'IM014', name: 'Placa de vehículo PVC', unit: 10, dozen: 10, icon: 'plate' },
      { code: 'IM015', name: 'Placa de vehículo metálica con relieve', unit: 20, dozen: 20, icon: 'plate' },
      { code: 'IM010', name: 'Lápida porcelanato', unit: 80, icon: 'tombstone' },
      { code: 'IM011', name: 'Lápida acrílico corte láser', unit: 80, icon: 'tombstone' },
      { code: 'IM012', name: 'Lápida PVC 70 × 40 cm', unit: 30, dozen: 28, icon: 'tombstone' },
      { code: 'IM017', name: 'Banda de reina sublimada, satín', unit: 15, dozen: 14, icon: 'ribbon' },
      { code: 'IM018', name: 'Banda tricolor sublimada, satín', unit: 18, dozen: 16, icon: 'ribbon' },
      { code: 'IM019', name: 'Banda de gamuza con letras de escarcha', unit: 25, dozen: 23, icon: 'ribbon' },
    ],
  },
  {
    id: 'sublimacion',
    name: 'Sublimación',
    icon: 'mug',
    image: '/assets/Obsequios/obsequio.webp',
    items: [
      { code: 'SUB001', name: 'Jarro sublimado', unit: 5, dozen: 2.5, icon: 'mug', image: '/assets/Obsequios/obsequio.webp' },
      { code: 'SUB002', name: 'Jarro mágico sublimado', unit: 8, dozen: 6, icon: 'mug' },
      { code: 'SUB003', name: 'Jarro dorado / plateado', unit: 7, dozen: 6, icon: 'mug' },
      { code: 'SUB004', name: 'Plato sublimado', unit: 10, dozen: 8, icon: 'dish' },
      { code: 'SUB005', name: 'Escarapela sublimada', unit: 5, dozen: 3, icon: 'rosette' },
      { code: 'SUB006', name: 'Esfero sublimado', unit: 3, dozen: 0.5, icon: 'pen', image: '/assets/corteLaser/corte (2).jpg' },
      { code: 'SUB007', name: 'Gorra sublimada', unit: 5, dozen: 2.75, icon: 'cap', image: '/assets/estampados/estampado (1).webp' },
      { code: 'SUB008', name: 'Placa metálica sublimada A5', unit: 10, dozen: 8, icon: 'plaque' },
      { code: 'SUB009', name: 'Fotoroca sublimada', unit: 20, dozen: 15, icon: 'image' },
      { code: 'SUB010', name: 'Almohada sublimada', unit: 15, dozen: 10, icon: 'pillow' },
      { code: 'SUB011', name: 'Camiseta sublimada A4', unit: 5, dozen: 4, icon: 'shirt', image: '/assets/estampados/estampado (3).jpg' },
      { code: 'SUB012', name: 'Llavero sublimado', unit: 6, dozen: 5, icon: 'key' },
      { code: 'RT008', name: 'Impresión UV en CD', unit: 5, dozen: 4, icon: 'disc' },
    ],
  },
  {
    id: 'reconocimientos',
    name: 'Reconocimientos y medallas',
    icon: 'trophy',
    image: '/assets/reconocimientos/reconocimiento (7).jpg',
    items: [
      { code: 'REC001', name: 'Reconocimiento acrílico + MDF con base', unit: 20, dozen: 15, icon: 'trophy', image: '/assets/reconocimientos/reconocimiento (2).jpg' },
      { code: 'REC002', name: 'Reconocimiento de cristal', unit: 30, dozen: 25, icon: 'trophy' },
      { code: 'REC003', name: 'Medalla honorífica', unit: 8, dozen: 6, icon: 'medal' },
      { code: 'CL004', name: 'Medalla MDF', unit: 1.25, dozen: 1.2, icon: 'medal' },
      { code: 'CL005', name: 'Medalla acrílico', unit: 1.75, dozen: 1.65, icon: 'medal' },
      { code: 'CL006', name: 'Medalla en lata', unit: 1.25, dozen: 1.25, icon: 'medal' },
      { code: 'CL007', name: 'Medalla doble corte', unit: 2.25, dozen: 2.2, icon: 'medal' },
    ],
  },
  {
    id: 'corte-laser',
    name: 'Corte láser y detalles',
    icon: 'laser',
    image: '/assets/corteLaser/corte (3).jpg',
    items: [
      { code: 'CL001', name: 'Recuerdo de grado corte láser 11 cm + impresión', unit: 8, dozen: 4, icon: 'cap-grad' },
      { code: 'RT006', name: 'Portarretratos MDF + acrílico', unit: 8, dozen: 7, icon: 'frame' },
      { code: 'RT006-B', name: 'Portarretratos MDF', unit: 5, dozen: 4.5, icon: 'frame' },
      { code: 'DT001', name: 'Caja impresa', unit: 3, dozen: 0.75, icon: 'box' },
      { code: 'RT012', name: 'Lámpara LED', icon: 'lamp' },
    ],
  },
  {
    id: 'rotulos',
    name: 'Rótulos y publicidad',
    icon: 'sign',
    image: '/assets/Rotulos/rotulo (1).webp',
    items: [
      { code: 'CL002', name: 'Rótulo circular 50 cm', unit: 125, dozen: 120, note: 'Sin instalación', icon: 'sign' },
      { code: 'RT001', name: 'Lona + bastidor', unit: 45, dozen: 40, from: true, icon: 'banner' },
      { code: 'RT002', name: 'Rótulo LED acrílico + neón', unit: 120, dozen: 110, from: true, icon: 'lamp' },
      { code: 'RT003', name: 'Rótulo caja de luz', unit: 90, dozen: 70, from: true, icon: 'lightbox' },
      { code: 'RT004', name: 'Rótulo triángulo 120 × 30 cm sin iluminación', unit: 50, dozen: 48, icon: 'sign' },
      { code: 'RT005', name: 'Rótulo triángulo 120 × 30 cm con iluminación', unit: 70, dozen: 68, icon: 'lightbox' },
      { code: 'RT007', name: 'Dummy vinilo + foam board 90 × 60 cm', unit: 18, dozen: 17, icon: 'sign' },
      { code: 'RT009', name: 'Roll-up', unit: 45, dozen: 40, icon: 'rollup' },
      { code: 'CL003', name: 'Bandera rotativa', unit: 85, dozen: 80, icon: 'flag' },
      { code: 'CL002-B', name: 'Mesa degustativa', unit: 120, dozen: 100, icon: 'table' },
    ],
  },
  {
    id: 'sellos-papeleria',
    name: 'Sellos, carnets y tarjetas',
    icon: 'stamp',
    image: '/assets/reconocimientos/reconocimiento (1).jpg',
    items: [
      { code: 'CL010', name: 'Sello de caucho S-722', unit: 8, dozen: 7, icon: 'stamp' },
      { code: 'CL011', name: 'Sello de caucho S-841', unit: 9, dozen: 8, icon: 'stamp' },
      { code: 'CL012', name: 'Sello de caucho S-843', unit: 10, dozen: 9, icon: 'stamp' },
      { code: 'CL013', name: 'Sello de caucho S-844', unit: 12, dozen: 11, icon: 'stamp' },
      { code: 'CL014', name: 'Sello de caucho S-845', unit: 14, dozen: 13, icon: 'stamp' },
      { code: 'CL015', name: 'Sello de caucho R-552', unit: 20, dozen: 19, icon: 'stamp' },
      { code: 'CL016', name: 'Sello seco pequeño', unit: 25, dozen: 24, icon: 'stamp' },
      { code: 'CL017', name: 'Sello seco mediano', unit: 30, dozen: 29, icon: 'stamp' },
      { code: 'CL008', name: 'Carnet', unit: 5, dozen: 2.5, note: 'Sin cordón', icon: 'idcard' },
      { code: 'CL009', name: 'Cordón para carnet', unit: 0.5, dozen: 0.4, icon: 'lanyard' },
      { code: 'TP-100', name: 'Tarjetas de presentación', unit: 12, per: 'ciento', icon: 'card' },
      { code: 'TP-1000', name: 'Tarjetas de presentación', unit: 40, per: 'millar', icon: 'card' },
      { code: 'RT013', name: 'Estampado textil', icon: 'shirt' },
    ],
  },
  {
    id: 'materiales-metro',
    name: 'Materiales por metro',
    icon: 'roll',
    image: '/assets/469309789_858646866193350_1515669265706622091_n.webp',
    items: [
      { code: 'M-VB', name: 'Vinilo blanco / transparente', unit: 3, per: 'm²', icon: 'roll' },
      { code: 'M-MP', name: 'Microperforado', unit: 6, per: 'm²', icon: 'window' },
      { code: 'M-LN', name: 'Lona normal', unit: 2.5, per: 'm²', icon: 'banner' },
      { code: 'M-LT', name: 'Lona translúcida', unit: 5, per: 'm²', icon: 'banner' },
      { code: 'M-ES', name: 'Esmerilado', unit: 10, per: 'm²', icon: 'window' },
      { code: 'M-VT', name: 'Vinilo textil', unit: 17, per: 'm²', icon: 'shirt' },
      { code: 'M-CN', name: 'Cinta neón', unit: 12, per: 'm²', icon: 'lamp' },
      { code: 'M-HS', name: 'Hojas de sublimar', unit: 0.5, per: 'hoja', icon: 'sheet' },
      { code: 'M-VN', name: 'Vinilo normal', unit: 8, per: 'metro lineal', icon: 'roll' },
      { code: 'M-VM', name: 'Vinilo metalizado', unit: 10, per: 'metro lineal', icon: 'roll' },
      { code: 'M-VF', name: 'Vinilo fibra de carbono', unit: 12, per: 'metro lineal', icon: 'roll' },
      { code: 'M-VE', name: 'Vinilo electrocortado', unit: 18, from: true, note: 'Sin instalación', icon: 'scissors' },
      { code: 'M-UV', name: 'Impresión UV + corte láser en foam board', unit: 35, from: true, note: 'Sin instalación', icon: 'sheet' },
    ],
  },
]

/** Precio por unidad según la cantidad: desde 12 se aplica el precio por docena. */
export function unitPriceFor(item: PriceItem, quantity: number): number | undefined {
  if (item.unit === undefined) return undefined
  if (item.dozen !== undefined && quantity >= DOZEN_QTY) return item.dozen
  return item.unit
}
