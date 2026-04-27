'use client';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
  { name: 'Shower', logo: '/images/partners/shower-logo.png' },
];
export default function BrandMarquee() {
  return (
    // Toplam yüksekliği py-16 ile daha makul bir seviyeye indirdik
    <div className='w-full py-16 bg-[#0a0a0a] overflow-hidden border-y border-white/5 relative z-10'>
      {/* BAŞLIK: Üst border'dan kopması için mt-4, logolardan kopması için mb-10 */}
      <div className='w-full flex justify-center mt-4 mb-10'>
        <p className='text-[10px] uppercase tracking-[0.5em] text-amber-600 font-semibold opacity-90'>
          Çözüm Ortaklarımız
        </p>
      </div>

      {/* MARQUEE ALANI */}
      <div className='relative flex w-full h-12 items-center'>
        <motion.div
          className='flex whitespace-nowrap min-w-max items-center'
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className='flex items-center justify-center mx-16'>
              <img
                src={brand.logo}
                alt={brand.name}
                className='h-9 w-auto object-contain brightness-125 opacity-80 hover:opacity-100 transition-all duration-500'
              />
            </div>
          ))}
        </motion.div>

        {/* Kenar Gölgeleri: Daha dar tutularak alan genişletildi */}
        <div className='absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10'></div>
        <div className='absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10'></div>
      </div>
    </div>
  );
}
