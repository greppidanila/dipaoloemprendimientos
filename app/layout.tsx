import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Di Paolo Emprendimientos | Desarrollos Inmobiliarios en Pozo',
  description: 'Tu departamento en pozo, una inversión rentable y segura en Tres de Febrero, Nordelta y Morón. Inmobiliaria Di Paolo y Constructora Clamaco.',
  openGraph: {
    title: 'Di Paolo Emprendimientos | Desarrollos Inmobiliarios en Pozo',
    description: 'Tu departamento en pozo, una inversión rentable y segura en Tres de Febrero, Nordelta y Morón. Inmobiliaria Di Paolo y Constructora Clamaco.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Di Paolo Emprendimientos | Desarrollos Inmobiliarios en Pozo',
    description: 'Tu departamento en pozo, una inversión rentable y segura en Tres de Febrero, Nordelta y Morón. Inmobiliaria Di Paolo y Constructora Clamaco.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans text-neutral-800 bg-white selection:bg-red-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
