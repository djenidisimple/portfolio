import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Djenidi Djaomananjara — Fullstack Developer",
  description:
    "Portfolio de Djaomananjara Djenidi — Développeur Fullstack spécialisé React, Next.js, Node.js et TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-ink text-white font-body antialiased min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
