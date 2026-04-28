'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LangSwitcher from './LangSwitcher';

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const nav = dict.nav;

  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-brand-black/20 backdrop-blur-md border-white/5'>
      <Link href={`/${lang}`} className='flex flex-col text-white z-[60]'>
        <span className='text-3xl md:text-3xl font-bold tracking-tighter leading-none'>
          GNL
        </span>
        <span className='text-[10px] font-medium uppercase tracking-[0.3em] mt-1 text-amber-600'>
          {lang === 'tr'
            ? 'Duşakabin ve Cam Aksesuarları'
            : 'Shower Cabins and Glass Accessories'}
        </span>
      </Link>

      <div className='hidden lg:flex gap-8 text-[12px] font-semibold tracking-[0.2em] uppercase  text-white/80 items-center'>
        <Link href={`/${lang}`} className='hover:text-amber-600 transition-all'>
          {nav.home}
        </Link>
        <Link
          href={`/${lang}/hakkimizda`}
          className='hover:text-amber-600 transition-all'
        >
          {nav.about}
        </Link>

        <div
          className='relative'
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <button className='hover:text-amber-600 transition-all uppercase flex items-center gap-1 cursor-default'>
            {nav.products}
            <motion.span
              animate={{ rotate: isProductsOpen ? 180 : 0 }}
              className='text-[8px]'
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {isProductsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className='absolute top-full left-0 mt-2 w-52 bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-sm shadow-2xl'
              >
                <Link
                  href={`/${lang}/urunler/dus-kabinleri`}
                  className='block px-4 py-3 text-[10px] hover:bg-amber-600/20 hover:text-amber-600 transition-all border-b border-white/5'
                >
                  {nav.shower_cabins || 'DUŞ KABİNLERİ'}
                </Link>
                <Link
                  href={`/${lang}/urunler/cam-aksesuarlari`}
                  className='block px-4 py-3 text-[10px] hover:bg-amber-600/20 hover:text-amber-600 transition-all'
                >
                  {nav.glass_accessories || 'CAM AKSESUARLARI'}
                </Link>
                <Link
                  href='https://shower.com.tr/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block px-4 py-3 text-[10px] hover:bg-amber-600/20 hover:text-amber-600 transition-all'
                >
                  SHOWER ÜRÜNLERİ ↗
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href={`/${lang}/referanslar`}
          className='hover:text-amber-600 transition-all'
        >
          {nav.references || 'REFERANSLAR'}
        </Link>
        <Link
          href={`/${lang}/iletisim`}
          className='hover:text-amber-600 transition-all'
        >
          {nav.contact}
        </Link>
      </div>

      <div className='flex items-center gap-6'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden flex flex-col gap-1.5 px-2 py-1 z-70'
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className='w-6 h-[1px] bg-white'
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className='w-6 h-[1px] bg-white'
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className='w-6 h-[1px] bg-white'
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className='absolute top-24 right-6 w-56 bg-brand-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-sm shadow-2xl overflow-hidden z-50'
          >
            <div className='flex flex-col gap-5'>
              <Link
                onClick={() => setIsOpen(false)}
                href={`/${lang}`}
                className='text-[10px] tracking-[0.3em] text-white/70 hover:text-amber-600 uppercase'
              >
                {nav.home}
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={`/${lang}/hakkimizda`}
                className='text-[10px] tracking-[0.3em] text-white/70 hover:text-amber-600 uppercase'
              >
                {nav.about}
              </Link>

              <div className='flex flex-col gap-3 pl-2 border-l border-amber-600/30'>
                <span className='text-[9px] text-amber-600 font-bold tracking-widest'>
                  {nav.products}
                </span>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`/${lang}/urunler/dus-kabinleri`}
                  className='text-[9px] text-white/50 hover:text-white uppercase'
                >
                  - {nav.shower_cabins || 'Duş Kabinleri'}
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`/${lang}/urunler/cam-aksesuarlari`}
                  className='text-[9px] text-white/50 hover:text-white uppercase'
                >
                  - {nav.glass_accessories || 'Cam Aksesuarları'}
                </Link>
                <Link
                  href='https://shower.com.tr/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setIsOpen(false)}
                  className='text-[9px] text-white/50 hover:text-white uppercase italic'
                >
                  - SHOWER ÜRÜNLERİ ↗
                </Link>
              </div>

              <Link
                onClick={() => setIsOpen(false)}
                href={`/${lang}/referanslar`}
                className='text-[10px] tracking-[0.3em] text-white/70 hover:text-amber-600 uppercase'
              >
                {nav.references || 'REFERANSLAR'}
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={`/${lang}/iletisim`}
                className='text-[10px] tracking-[0.3em] text-white/70 hover:text-amber-600 uppercase'
              >
                {nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LangSwitcher />
    </nav>
  );
}
