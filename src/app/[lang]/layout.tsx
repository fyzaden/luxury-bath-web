import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';
import { getDictionary } from '@/lib/get-dictionary';
import { Toaster } from 'react-hot-toast';
import WhatsAppButton from '@/components/WhatsAppButton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title:
      lang === 'tr'
        ? 'GNL İnovasyon | Duşakabin ve Cam Aksesuarları'
        : 'GNL Innovation | Shower Cabins and Glass Accessories',
    description:
      lang === 'tr'
        ? 'GNL İnovasyon, modern banyo çözümleri sunar. Kaliteli ve dayanıklı banyo ürünleri.'
        : 'GNL Innovation offers modern bathroom solutions. High quality and durable bathroom products.',
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; //
}) {
  const params = await props.params;
  const lang = params.lang;

  const dict = await getDictionary(lang as 'tr' | 'en');

  return (
    <html lang={lang} suppressHydrationWarning={true}>
      <head>
        <meta
          name='google-site-verification'
          content='SV-pJxmTWDmJYWPNPstZUf2VNSfo_TtTetoUu4sJd9s'
        />
      </head>
      <body
        className='antialiased font-sans selection:bg-white selection:text-black bg-brand-black'
        suppressHydrationWarning={true}
      >
        <Toaster
          position='bottom-right'
          toastOptions={{
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
        <Navbar dict={dict} lang={lang} />

        {props.children}
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
