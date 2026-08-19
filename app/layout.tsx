import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mecanica-jorge.vercel.app"),
  title: "Mecánica de Jorge | Mecánico Móvil de Confianza",
  description:
    "Servicio de mecánica móvil rápido y confiable. Jorge va hasta tu puerta para resolver problemas de tu auto sin complicaciones. ¡Llama o escribe sin ningún compromiso!",
  keywords: [
    "mecánico móvil",
    "mecánica a domicilio",
    "reparación de autos",
    "cambio de aceite a domicilio",
    "mecánico de confianza",
    "Mecánica de Jorge",
  ],
  authors: [{ name: "Mecánica de Jorge" }],
  creator: "Mecánica de Jorge",
  openGraph: {
    title: "Mecánica de Jorge | Mecánico Móvil de Confianza",
    description:
      "Servicio de mecánica móvil rápido y confiable. Jorge va hasta tu puerta para resolver problemas de tu auto.",
    url: "https://mecanica-jorge.vercel.app",
    siteName: "Mecánica de Jorge",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Mecánica de Jorge - Mecánico Móvil",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mecánica de Jorge | Mecánico Móvil de Confianza",
    description:
      "Servicio de mecánica móvil rápido y confiable directo a tu puerta.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
