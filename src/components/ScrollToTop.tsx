'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className='fixed bottom-6 left-6 z-[9998] p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl'
        >
          <div className='relative flex items-center justify-center w-12 h-12'>
            <div className='absolute inset-0 bg-brand-black/80 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 group-hover:border-amber-600/50 group-hover:scale-110' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-amber-600'
            >
              <path d='m18 15-6-6-6 6' />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
