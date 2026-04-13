import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent'>
      {/* Sol Taraf: Logo  eklenecek*/}
      <div className='flex flex-col text-white group cursor-default'>
        <span className='text-4xl font-bold tracking-tighter leading-none'>
          GNL
        </span>
        {/* düzeltilecek */}
        <span className='text-[10px] font-medium uppercase tracking-widest mt-1 opacity-80'>
          Duşakabin ve Cam Aksesuarları
        </span>
      </div>

      {/* Navigasyon Linkleri */}
      <div className='hidden lg:flex gap-10 text-[13px] font-semibold tracking-[0.2em] uppercase text-white/90'>
        <Link href='/' className='hover:text-brand-gold transition-all'>
          ANASAYFA
        </Link>
        <Link
          href='/hakkımızda'
          className='hover:text-brand-gold transition-all'
        >
          HAKKIMIZDA
        </Link>
        <Link href='/urunler' className='hover:text-brand-gold transition-all'>
          ÜRÜNLER
        </Link>
        <Link
          href='/referanslar'
          className='hover:text-brand-gold transition-all'
        >
          REFERANSLAR
        </Link>
        <Link href='/iletisim' className='hover:text-brand-gold transition-all'>
          İLETİŞİM
        </Link>
      </div>

      {/* Dil Seçeneği (TR/EN) */}
      <div className='flex items-center gap-4 text-white'>
        <div className='flex gap-2 text-[13px] font-bold tracking-widest uppercase border-l border-white/20 pl-6'>
          <button className='text-white hover:text-brand-gold'>TR</button>
          <span className='opacity-20'>|</span>
          <button className='opacity-50 hover:opacity-100'>EN</button>
        </div>
      </div>
    </nav>
  );
}
