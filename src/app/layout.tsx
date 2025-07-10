import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Compumax - Diseño y Tecnología",
  description: "Publicidad que piensa. Tecnología que impulsa. Diseño gráfico, desarrollo web y automatización digital para tu negocio.",
  keywords: "diseño gráfico, desarrollo web, automatización digital, publicidad, tecnología, corte láser, estampados, letras corporeas",
  authors: [{ name: "Compumax" }],
  creator: "Compumax",
  publisher: "Compumax",
  openGraph: {
    title: "Compumax - Diseño y Tecnología",
    description: "Publicidad que piensa. Tecnología que impulsa.",
    url: "https://compumax.com",
    siteName: "Compumax",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
