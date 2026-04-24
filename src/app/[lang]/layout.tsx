import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';
import { getDictionary } from '@/lib/get-dictionary';

export const metadata: Metadata = {
  title: 'GNL Inovasyon | Duşakabin ve Cam Aksesuarları',
  description:
    'GNL Inovasyon, modern banyo çözümleri sunar. Kaliteli ve dayanıklı banyo ürünleri için tıklayın.',
};

export default async function RootLayout({
  children,
  params, // HATA BURADAYDI: Buraya params eklenmemişti.
}: {
  children: React.ReactNode;
  params: Promise<{ lang: 'tr' | 'en' }>;
}) {
  // Next.js 15'te params bir Promise olduğu için await ile çözüyoruz
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className='antialiased font-sans selection:bg-white selection:text-black'>
        <Navbar dict={dict.nav} lang={lang} />
        {children}
        <ScrollToTop />
        <CookieBanner />
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
