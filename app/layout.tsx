import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Djenidi Djaomananjara - Développeur Fullstack",
  description:
    "Portfolio de Djenidi Djaomananjara, développeur fullstack : des applications web complètes, de l'interface jusqu'à la base de données.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-white font-body text-ink antialiased min-h-screen">
        <div className="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
