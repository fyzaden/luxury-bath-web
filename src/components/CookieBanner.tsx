'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className='fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:w-[400px] z-[100]'
        >
          <div className='bg-brand-black/90 backdrop-blur-xl border border-white/10 p-6 shadow-2xl rounded-sm'>
            <div className='space-y-4'>
              <h4 className='text-xs font-bold tracking-widest uppercase text-white'>
                Çerez Politikası
              </h4>
              <p className='text-[11px] leading-relaxed text-white/60 font-light'>
                Deneyiminizi geliştirmek için çerezleri kullanıyoruz. Sitemizde
                kalarak
                <Link
                  href='/cerez-politikasi'
                  className='text-amber-600 underline ml-1'
                >
                  çerez kullanımını
                </Link>{' '}
                kabul etmiş olursunuz.
              </p>
              <div className='flex gap-4 pt-2'>
                <button
                  onClick={acceptCookies}
                  className='flex-1 bg-white text-black text-[10px] font-bold py-3 uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all'
                >
                  Kabul Et
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
