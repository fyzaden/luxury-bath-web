import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#080808] pt-24 pb-12 px-10 border-t border-white/5'>
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
          </div>

          {/* Sütun 2: Hızlı Linkler */}
          <div className='flex flex-col md:items-center space-y-4 pt-2'>
            <div className='flex flex-col gap-3 text-[12px] uppercase tracking-[0.3em] text-white/40'>
              <Link href='/' className='hover:text-white transition-colors'>
                Ana Sayfa
              </Link>
              <Link
                href='/hakkımızda'
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
        <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[10px] text-white/20 uppercase tracking-[0.25em]'>
            © 2026 GNL Duşakabin. Tüm Hakları Saklıdır.
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
