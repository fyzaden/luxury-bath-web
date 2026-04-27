'use client';

import Link from 'next/link';

interface FooterProps {
  dict: any;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const { nav, footer } = dict;

  return (
    <footer className='bg-[#111111] pt-20 pb-12 px-10 border-t border-white/5'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h3 className='text-4xl font-light text-amber-600 italic tracking-tighter'>
            {footer.contact_us}
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start'>
          <div className='space-y-8'>
            <div className='space-y-6 text-white/50 text-[14px] tracking-wide'>
              <div className='flex items-start gap-4 group cursor-default'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#c5a059'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0'
                >
                  <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                <p className='group-hover:text-white transition-colors leading-relaxed'>
                  Horozluhan Mah. Saraycık Sok. No:123 <br /> Selçuklu, Konya
                </p>
              </div>
              <Link
                href='mailto:info@gnldusakabin.com'
                className='flex items-center gap-4 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#c5a059'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='opacity-70 group-hover:opacity-100 transition-opacity shrink-0'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2' />
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                </svg>
                <p className='group-hover:text-white transition-colors'>
                  info@gnldusakabin.com
                </p>
              </Link>
              {/* Tel */}
              <Link
                href='tel:+905432412527'
                className='flex items-center gap-4 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#c5a059'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='opacity-70 group-hover:opacity-100 transition-opacity shrink-0'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
                <p className='group-hover:text-white transition-colors'>
                  (+90) 543 241 25 27
                </p>
              </Link>
            </div>

            <div className='flex items-center gap-6 pt-2'>
              <Link
                href='https://www.instagram.com/gnldusakabin/'
                target='_blank'
                className='text-white/40 hover:text-amber-600 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </Link>
              <Link
                href='#'
                target='_blank'
                className='text-white/40 hover:text-blue-600 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
              </Link>
              <Link
                href='https://wa.me/905432412527'
                target='_blank'
                className='text-white/40 hover:text-green-500 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </Link>
            </div>
          </div>

          <div className='flex flex-col md:items-center'>
            <div className='flex flex-col gap-5 text-[12px] uppercase tracking-[0.3em] text-white/40'>
              <Link
                href={`/${lang}`}
                className='hover:text-white transition-colors'
              >
                {nav.home}
              </Link>
              <Link
                href={lang ? `/${lang}/hakkimizda` : '/tr/hakkimizda'}
                className='hover:text-white transition-colors'
              >
                {nav.about}
              </Link>
              <Link
                href={
                  lang
                    ? `/${lang}/urunler/dus-kabinleri`
                    : '/tr/urunler/dus-kabinleri'
                }
                className='hover:text-white transition-colors'
              >
                {nav.products}
              </Link>
              <Link
                href={lang ? `/${lang}/referanslar` : '/tr/referanslar'}
                className='hover:text-white transition-colors'
              >
                {nav.references}
              </Link>
              <Link
                href={lang ? `/${lang}/iletisim` : '/tr/iletisim'}
                className='hover:text-white transition-colors'
              >
                {nav.contact}
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-end justify-between h-full min-h-[220px]'>
            <Link href='/studio' className='group text-right'>
              <span className='text-6xl font-bold tracking-tighter text-white/5 group-hover:text-white/60 transition-all duration-1000 select-none'>
                GNL
              </span>
              <p className='text-[10px] text-white/40 uppercase tracking-[0.4em] mt-2 italic'>
                {lang === 'tr'
                  ? 'Duşakabin ve Cam Aksesuarları'
                  : 'Shower Cabins and Glass Accessories'}
              </p>
            </Link>

            <div className='text-right'>
              <p className='text-[11px] text-white/30 tracking-widest'>
                Design |{' '}
                <span className='text-white/60 font-bold uppercase'>
                  Feyza Gazioğlu
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[10px] text-white/20 uppercase tracking-[0.25em]'>
            © 2026 GNL INOVASYON {footer.rights}
          </p>
          <div className='flex gap-8 text-[10px] text-white/30 uppercase tracking-widest italic'>
            <Link
              href={lang ? `/${lang}/kvkk` : '/tr/kvkk'}
              className='hover:text-white transition-all'
            >
              KVKK
            </Link>
            <Link
              href={lang ? `/${lang}/cerez-politikasi` : '/tr/cerez-politikasi'}
              className='hover:text-white transition-all'
            >
              {footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
