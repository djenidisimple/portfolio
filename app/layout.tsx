import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Djenidi — Full Stack Developer",
  description: "Portfolio of Djenidi, full stack developer. Building websites and web applications with React, Next.js and Node.js.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
