'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LangSwitcher from './LangSwitcher';

interface NavbarProps {
  dict: any;
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Linkleri merkezi bir yerde tutalım ki düzenlemesi kolay olsun
  const navLinks = [
    { name: 'ANASAYFA', href: `/${lang}` },
    { name: 'HAKKIMIZDA', href: `/${lang}/hakkimizda` },
    { name: 'ÜRÜNLER', href: `/${lang}/urunler` },
    { name: 'REFERANSLAR', href: `/${lang}/referanslar` },
    { name: 'İLETİŞİM', href: `/${lang}/iletisim` },
  ];

  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-brand-black/20 backdrop-blur-md border-white/5'>
      {/* Sol Taraf: Logo */}
      <Link href='/' className='flex flex-col text-white z-[60]'>
        <span className='text-2xl md:text-3xl font-bold tracking-tighter leading-none'>
          GNL
        </span>
        <span className='text-[8px] font-medium uppercase tracking-[0.3em] mt-1 text-amber-600'>
          Duşakabin ve Cam Aksesuarları
        </span>
      </Link>

      {/* Masaüstü Linkler (Sadece LG ve üzeri) */}
      <div className='hidden lg:flex gap-8 text-[11px] font-semibold tracking-[0.2em] text-white/80'>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className='hover:text-amber-600 transition-all'
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Sağ Taraf: Dil & Hamburger */}
      <div className='flex items-center gap-6'>
        <div className='hidden md:flex gap-4 text-[11px] font-bold tracking-widest text-white/40'>
          <button className='text-white hover:text-amber-600 transition-colors uppercase'>
            TR
          </button>
          <button className='hover:text-white transition-colors uppercase'>
            EN
          </button>
        </div>

        {/* Minimal Hamburger */}
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

      {/* KÜÇÜK SAYDAM DROPDOWN MENÜ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='absolute top-23 right-6 md:right-5w-48 bg-brand-black/50 backdrop-blur-xl border border-white/10 p-6 rounded-sm shadow-2xl overflow-hidden'
          >
            <div className='flex flex-col gap-5'>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    className='text-[10px] font-medium tracking-[0.3em] text-white/70 hover:text-amber-600 transition-colors uppercase block'
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobilde Dil Seçeneği (Opsiyonel) */}
              <div className='md:hidden flex gap-3 pt-4 border-t border-white/5 mt-2'>
                <button className='text-[10px] text-amber-600 font-bold'>
                  TR
                </button>
                <button className='text-[10px] text-white/40'>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LangSwitcher />
    </nav>
  );
}
