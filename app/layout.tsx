import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Password Generator",
  description:
    "Generador de Contraseñas Seguras está diseñada para ofrecerte contraseñas únicas y robustas con el máximo enfoque en tu privacidad. Con un algoritmo avanzado, genera combinaciones aleatorias de caracteres que cumplen con los estándares de seguridad más altos, protegiendo tu información de accesos no autorizados.",
  icons: [
    {
      url: "./favicons/favicon-red.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "./favicons/favicon-white.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
