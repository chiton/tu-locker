import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tu-locker.com.ar"),
  title: {
    default: "tu-locker | Guardamuebles y self-storage en Bahía Blanca",
    template: "%s | tu-locker",
  },
  description:
    "Alquiler de espacios de almacenamiento seguros en Bahía Blanca. Guardamuebles, boxes para objetos personales, muebles, mudanzas y uso comercial.",
  keywords: [
    "tu-locker",
    "guardamuebles Bahía Blanca",
    "self-storage Bahía Blanca",
    "alquiler de depósitos",
    "storage",
  ],
  openGraph: {
    title: "tu-locker | Espacio seguro para lo que más valorás",
    description:
      "Espacios de almacenamiento seguros, flexibles y accesibles en Montevideo 1450, Bahía Blanca.",
    url: "https://tu-locker.com.ar",
    siteName: "tu-locker",
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://tu-locker.com.ar",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
