import { Inter_Tight } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { SideBar } from "./components/side-bar";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Fullstack Developer",
  description:
    "Portfolio of Djaomananjara Djenidi — Fullstack Developer specializing in React, Next.js, Node.js, and TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
