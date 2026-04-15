import './globals.css';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <div className="noise-grain" />
        {children}
      </body>
    </html>
  );
}