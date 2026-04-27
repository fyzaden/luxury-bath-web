'use client';
import { motion } from 'framer-motion';

export default function AboutClient({ dict }: { dict: any }) {
  return (
    <main className='bg-brand-black text-white font-sans selection:bg-amber-600/30'>
      <section className='pt-40 pb-20 px-10 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-12'
          >
            <div className='space-y-6'>
              <span className='text-[10px] uppercase tracking-[0.8em] text-amber-600 font-semibold block'>
                {dict.nav.about}
              </span>

              <h1 className='text-4xl md:text-7xl font-bold tracking-tighter leading-tight'>
                {dict.about.title_1}
              </h1>

              <div className='h-[1px] w-24 bg-amber-600'></div>
            </div>

            <div className='space-y-8'>
              <h2 className='text-2xl md:text-3xl font-light leading-relaxed italic text-white/90'>
                {dict.about.title_2}
              </h2>

              <div className='space-y-6 text-white/50 font-light leading-loose text-lg'>
                <p className='text-white/80 italic opacity-100 font-normal'>
                  {dict.about.subtitle}
                </p>
                <p>{dict.about.p1}</p>
                <p>{dict.about.p2}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 pt-10 border-t border-white/5'>
              <div>
                <p className='text-3xl font-bold text-amber-600'>3+</p>
                <p className='text-[10px] uppercase tracking-widest opacity-50'>
                  {dict.about.stat_1}
                </p>
              </div>
              <div>
                <p className='text-3xl font-bold text-amber-600'>250+</p>
                <p className='text-[10px] uppercase tracking-widest opacity-50'>
                  {dict.about.stat_2}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='relative group lg:mt-24'
          >
            <div
              className='aspect-[3/4] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl relative z-10'
              style={{
                backgroundImage: `url('/images/SUPERLUX/dusakabin6.jpeg')`,
              }}
            ></div>
            <div className='absolute -bottom-6 -right-6 w-full h-full border border-amber-600/20 z-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-700'></div>

            <div className='absolute -top-10 -left-10 bg-amber-600 p-8 hidden md:block z-20 shadow-xl'>
              <p className='text-brand-black font-bold text-[10px] uppercase tracking-tighter leading-none'>
                {dict.about.badge_1} <br /> {dict.about.badge_2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='py-40 bg-white/[0.02] text-center px-10 border-y border-white/5'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='max-w-4xl mx-auto space-y-6'
        >
          <span className='text-4xl opacity-20'>“</span>
          <p className='text-2xl md:text-4xl font-light italic opacity-80 leading-snug'>
            {dict.about.quote}
          </p>
          <div className='h-px w-12 bg-amber-600 mx-auto mt-8'></div>
        </motion.div>
      </section>
    </main>
  );
}
