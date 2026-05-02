'use client';
import { useState, useEffect } from 'react';

const highlights = [
  { id: 1, url: '/images/SUPERLUX/dusakabin1.jpg', title: 'Gold Şıklığı' },
  { id: 2, url: '/images/SUPERLUX/dusakabin2.jpg', title: 'Modern Tasarım' },
  { id: 3, url: '/images/SUPERLUX/dusakabin5.jpeg', title: 'Zarif Detaylar' },
];
export default function HomeClient({ dict }: { dict: any }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='relative bg-brand-black font-sans'>
      <section className='relative min-h-[70vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 px-4'>
        <div
          className='absolute inset-0 bg-no-repeat transition-all duration-500'
          style={{
            backgroundImage: `url('/images/OTTI/Otel_tipi1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className='absolute inset-0 bg-black/40'></div>
        </div>

        <div className='relative z-10 text-center space-y-6 px-4 w-full'>
          <h1 className='text-3xl sm:text-5xl md:text-[80px] font-bold tracking-tighter text-white leading-tight drop-shadow-2xl'>
            {dict?.home?.hero_title}
          </h1>
          <p className='text-[10px] md:text-sm font-light tracking-[0.2em] md:tracking-[0.6em] text-amber-500 uppercase leading-relaxed max-w-[260px] md:max-w-xs mx-auto'>
            {dict?.home?.hero_subtitle}
          </p>
        </div>
        <div className='absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce'>
          <div className='w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent to-white'></div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row min-h-screen bg-[#222222]'>
        <div
          className='w-full md:w-1/2 h-80 md:h-auto bg-cover bg-center grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-1000'
          style={{ backgroundImage: `url('/images/KATYA/KATYA_SARI.jpg')` }}
        ></div>

        <div className='w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 py-16'>
          <h2 className='text-3xl md:text-4xl font-light text-white mb-8 border-l-2 border-amber-600 pl-6 uppercase'>
            {dict?.home?.services_title}
          </h2>
          <ul className='space-y-4 text-white/50 text-base md:text-lg font-light italic pl-6'>
            <p className='mb-4 not-italic text-white/30 uppercase text-xs tracking-[0.3em]'>
              {dict?.home?.hero_title}
            </p>
            <li>• {dict?.home?.service_1}</li>
            <li>• {dict?.home?.service_2}</li>
            <li>• {dict?.home?.service_3}</li>
            <li>• {dict?.home?.service_4}</li>
          </ul>
        </div>
      </section>

      <section className='flex flex-col md:flex-row h-auto md:min-h-[80vh] bg-brand-black border-t border-white/5'>
        <div className='w-full md:w-2/5 flex flex-col justify-center px-6 md:px-16 py-16 z-10'>
          <div className='max-w-full'>
            <div className='mb-8 text-center md:text-left'>
              <span className='text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold block mb-4'>
                {dict?.home?.featured_tag}
              </span>
              <h2 className='text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight'>
                {dict?.home?.featured_title_1} <br />
                <span className='italic font-light opacity-80'>
                  {dict?.home?.featured_title_2}
                </span>
              </h2>
            </div>

            <div className='h-[1px] w-20 bg-amber-600/30 mx-auto md:mx-0 mb-8'></div>

            <p className='text-white/40 text-sm leading-relaxed font-light italic tracking-wide max-w-[320px] mx-auto md:mx-0 text-center md:text-left'>
              {dict?.home?.featured_desc}
            </p>

            <div className='flex justify-center md:justify-start gap-4 mt-8'>
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-[2px] transition-all duration-700 ${idx === activeSlide ? 'w-12 bg-amber-600' : 'w-6 bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='w-full md:w-3/5 h-[400px] md:h-auto relative overflow-hidden bg-neutral-900'>
          {highlights.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform
                ${index === activeSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
              `}
              style={{
                backgroundImage: `url('${img.url}')`,
                backgroundSize: 'cover',
              }}
            >
              <div className='absolute bottom-6 left-6 z-20'>
                <span
                  className={`text-[10px] text-white/70 uppercase tracking-widest transition-all
                  ${index === activeSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  {img.title}
                </span>
              </div>
              <div className='absolute inset-0 bg-black/20'></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
