// Íconos de línea (24 × 24, trazo 1.75) para categorías y productos de /cotizar.
// Para un ícono nuevo, añade su nombre y su dibujo aquí.

import type { ReactNode } from 'react'

const paths = {
  printer: <><path d="M7 9V3h10v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M7 14h10v7H7z" /><path d="M17 12h.01" /></>,
  banner: <><path d="M4 3v18" /><path d="M20 3v18" /><rect x="4" y="5" width="16" height="10" rx="1" /><path d="M8 9h8M8 12h5" /></>,
  magnet: <><path d="M6 3v8a6 6 0 0 0 12 0V3" /><path d="M6 3h4v8a2 2 0 0 0 4 0V3h4" /><path d="M6 7h4M14 7h4" /></>,
  window: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M7 8h.01M11 8h.01M15 8h.01M7 12h.01M11 12h.01M15 12h.01M7 16h.01M11 16h.01M15 16h.01" /></>,
  roll: <><ellipse cx="7" cy="8" rx="3" ry="5" /><path d="M7 3h11a3 5 0 0 1 0 10H7" /><path d="M7 13v8h11" /><circle cx="7" cy="8" r="1" /></>,
  scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" /></>,
  sign: <><rect x="3" y="4" width="18" height="11" rx="1.5" /><path d="M8 15v6M16 15v6M7 9h10" /></>,
  tag: <><path d="M12 2H4v8l10 10 8-8L12 2z" /><circle cx="8" cy="6" r="1.5" /></>,
  menu: <><path d="M5 3h14v18H5z" /><path d="M8 7h8M8 11h8M8 15h5" /></>,
  signpost: <><path d="M12 3v18" /><path d="M5 6h11l3 2.5L16 11H5z" /><path d="M19 13H8l-3 2.5L8 18h11z" /></>,
  plate: <><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M6 12h3M11 12h2M15 12h3" /><circle cx="4.5" cy="9.5" r=".5" /><circle cx="19.5" cy="9.5" r=".5" /></>,
  tombstone: <><path d="M6 21V9a6 6 0 0 1 12 0v12" /><path d="M3 21h18M12 8v6M9.5 10.5h5" /></>,
  ribbon: <><path d="M4 3l8 18 8-18" /><path d="M7.5 3h9" /><path d="M9 9h6" /></>,
  mug: <><path d="M4 7h12v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /><path d="M16 10h2a2 2 0 0 1 0 4h-2" /><path d="M8 3v2M12 3v2" /></>,
  dish: <><ellipse cx="12" cy="12" rx="9" ry="9" /><ellipse cx="12" cy="12" rx="5" ry="5" /></>,
  rosette: <><circle cx="12" cy="9" r="5" /><circle cx="12" cy="9" r="2" /><path d="M9 13.5 7 21l5-2.5 5 2.5-2-7.5" /></>,
  pen: <><path d="M15 4l5 5L9 20H4v-5z" /><path d="M13 6l5 5" /></>,
  cap: <><path d="M4 15a8 8 0 0 1 16 0z" /><path d="M20 15h2v2H9" /><path d="M12 7V5" /></>,
  plaque: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><rect x="7" y="6" width="10" height="7" rx="1" /><path d="M8 16h8M10 18.5h4" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" /></>,
  pillow: <><path d="M4 6c3-2 13-2 16 0 2 3 2 9 0 12-3 2-13 2-16 0-2-3-2-9 0-12z" /><path d="M9 12h6" /></>,
  shirt: <><path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l2 2M15 8l2 2" /></>,
  disc: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.5" /><path d="M12 6a6 6 0 0 0-6 6" /></>,
  trophy: <><path d="M8 3h8v6a4 4 0 0 1-8 0z" /><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4" /><path d="M12 13v4M8 21h8M9 17h6v4H9z" /></>,
  medal: <><path d="M8 2l4 7 4-7" /><path d="M5 2h3M16 2h3" /><circle cx="12" cy="15" r="6" /><path d="m12 12 1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L9 14h2z" /></>,
  'cap-grad': <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /><path d="M22 9v6" /></>,
  frame: <><rect x="4" y="3" width="16" height="18" rx="1" /><rect x="7" y="6" width="10" height="12" /><path d="m7 15 3-3 3 3 2-2 2 2" /></>,
  box: <><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></>,
  lamp: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" /></>,
  lightbox: <><rect x="3" y="5" width="18" height="12" rx="1.5" /><path d="M7 9h10M7 13h6" /><path d="M2 3l2 2M22 3l-2 2M12 1v2" /><path d="M9 17v4h6v-4" /></>,
  rollup: <><path d="M7 3h10v16H7z" /><path d="M5 19h14v2H5z" /><path d="M9 7h6M9 10h6M9 13h4" /></>,
  flag: <><path d="M5 21V3" /><path d="M5 3c6 0 10 3 13 9-4 0-8 1-13 3" /></>,
  table: <><path d="M3 8h18v3H3z" /><path d="M5 11v10M19 11v10M8 4h8v4H8z" /></>,
  stamp: <><path d="M9 3h6v5l-1 3h-4L9 8z" /><path d="M4 14h16v4H4z" /><path d="M6 21h12" /></>,
  idcard: <><rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2" /><path d="M6 17c.5-1.5 1.5-2 3-2s2.5.5 3 2M14 11h4M14 14h3" /><path d="M10 3h4v3h-4z" /></>,
  lanyard: <><path d="M6 2l6 11 6-11" /><rect x="9" y="13" width="6" height="8" rx="1" /></>,
  card: <><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h6M6 13h8" /><circle cx="17" cy="11.5" r="1.5" /></>,
  sheet: <><path d="M12 3 2 8l10 5 10-5z" /><path d="m2 12 10 5 10-5" /><path d="m2 16 10 5 10-5" /></>,
  laser: <><path d="M12 2v6" /><path d="M9 5h6" /><path d="m12 8-2 6h4z" /><path d="M4 20h16" /><path d="m8 20 4-6 4 6" /></>,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export default function PriceIcon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
