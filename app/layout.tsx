import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NomadGym - Train at Any Gym in Spain with a Single Pass',
  description:
    'NomadGym is a centralized gym-platform offering a unified gympass across Spain. Perfect for tourists, digital nomads, and vanlifers.',
  openGraph: {
    title: 'NomadGym - Train at Any Gym in Spain with a Single Pass',
    description:
      'NomadGym is a centralized gym-platform offering a unified gympass across Spain. Perfect for tourists, digital nomads, and vanlifers.',
    url: 'https://www.nomadgym.es',
    siteName: 'NomadGym',
    images: [
      {
        url: 'https://www.veronikacodes.com/web-preview.png',
        width: 1200,
        height: 630,
        alt: 'NomadGym - Train at Any Gym in Spain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NomadGym - Train at Any Gym in Spain with a Single Pass',
    description:
      'NomadGym is a centralized gym-platform offering a unified gympass across Spain. Perfect for tourists, digital nomads, and vanlifers.',
    images: ['https://www.veronikacodes.com/web-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
