import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';
import { getDictionary } from '@/lib/get-dictionary';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title:
      lang === 'tr'
        ? 'GNL Inovasyon | Duşakabin ve Cam Aksesuarları'
        : 'GNL Innovation | Shower Cabins and Glass Accessories',
    description:
      lang === 'tr'
        ? 'GNL Inovasyon, modern banyo çözümleri sunar. Kaliteli ve dayanıklı banyo ürünleri.'
        : 'GNL Innovation offers modern bathroom solutions. High quality and durable bathroom products.',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: 'tr' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className='antialiased font-sans selection:bg-white selection:text-black bg-brand-black'>
        <Navbar dict={dict} lang={lang} />

        {children}

        <ScrollToTop />
        <CookieBanner />

        <Footer dict={dict} />
      </body>
    </html>
  );
}
