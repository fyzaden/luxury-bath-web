import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GNL Düşakabin | Modern Banyo Çözümleri',
  description:
    'GNL Düşakabin, modern banyo çözümleri sunar. Kaliteli ve dayanıklı banyo ürünleri için tıklayın.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className='antialiased font-sans selection:bg-white selection:text-black'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
