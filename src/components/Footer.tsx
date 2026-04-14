import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='bg-[#111111] pt-20 pb-12 px-10 border-t border-white/5'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start'>
          {/* Sütun 1: İletişim Bilgileri */}
          <div className='space-y-8'>
            <h3 className='text-3xl font-light text-white italic tracking-tighter'>
              Bize Ulaşın
            </h3>
            <div className='space-y-5 text-white/50 text-[14px] tracking-wide'>
              <div className='flex items-start gap-4'>
                <span className='opacity-50 italic text-lg leading-none'>
                  Adres:
                </span>
                <p>
                  Horozluhan Mah. Saraycık Sok. No:123
                  <br />
                  Selçuklu, Konya
                </p>
              </div>

              <div className='flex items-center gap-4'>
                <span className='opacity-50 italic text-lg leading-none'>
                  Tel:
                </span>
                <p>(+90) 543 241 25 27</p>
              </div>
            </div>
            {/* Orta: Sosyal Medya İkonları */}
            <div className='flex items-center gap-8'>
              {/* Instagram */}
              <a
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
              </a>

              {/* Facebook */}
              <a
                href='https://www.facebook.com/people/Gnl-Dusakabin-Ve-Cam-Aksesuarlar%C4%B1/100088997501514/'
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
              </a>

              {/* WhatsApp */}
              <a
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
              </a>
            </div>
          </div>

          {/* Sütun 2: Hızlı Linkler */}
          <div className='flex flex-col md:items-center space-y-4 pt-2'>
            <div className='flex flex-col gap-3 text-[12px] uppercase tracking-[0.3em] text-white/40'>
              <Link href='/' className='hover:text-white transition-colors'>
                AnaSayfa
              </Link>
              <Link
                href='/hakkimizda'
                className='hover:text-white transition-colors'
              >
                Hakkımızda
              </Link>
              <Link
                href='/urunler'
                className='hover:text-white transition-colors'
              >
                Ürünler
              </Link>
              <Link
                href='/referanslar'
                className='hover:text-white transition-colors'
              >
                Referanslar
              </Link>
              <Link
                href='/iletisim'
                className='hover:text-white transition-colors'
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Sütun 3: Logo, Gizli Link ve Tasarımcı İmzası */}
          <div className='flex flex-col items-end justify-between h-full min-h-[180px]'>
            {/* Görünmez Admin Kapısı: GNL yazısına tıklandığında gider */}
            <Link href='/studio' className='group text-right'>
              <span className='text-5xl font-bold tracking-tighter text-white/5 group-hover:text-white/60 transition-all duration-1000 select-none'>
                GNL
              </span>
              <p className='text-[10px] text-white/40 uppercase tracking-[0.4em] mt-2 italic'>
                Duşakabin ve Cam Aksesuarları
              </p>
            </Link>

            <div className='text-right'>
              <p className='text-[11px] text-white/30 tracking-widest'>
                Design by{' '}
                <span className='text-white/60 font-bold uppercase'>
                  Feyza Gazioğlu
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Alt Bar: Telif Hakkı ve Kurumsal Linkler */}
        <div className='pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[10px] text-white/20 uppercase tracking-[0.25em]'>
            © 2026 GNL İNOVASYON. Tüm Hakları Saklıdır.
          </p>
          <div className='flex gap-8 text-[10px] text-white/30 uppercase tracking-widest italic'>
            <a href='#' className='hover:text-white transition-all'>
              KVKK
            </a>
            <a href='#' className='hover:text-white transition-all'>
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
