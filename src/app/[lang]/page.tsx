import { getDictionary } from '@/lib/get-dictionary';
import HomeClient from '@/components/HomeClient';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'tr' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className='relative bg-black font-sans'>
      <HomeClient dict={dict} />

      <section className='py-32 px-10 bg-[#111111] border-t border-white/5'>
        <section className='py-32 px-10 bg-brand-black border-t border-white/5'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto'>
            {' '}
            {[
              { title: dict.home.values_1, icon: '📐' },
              { title: dict.home.values_2, icon: '🛠️' },
              { title: dict.home.values_3, icon: '✨' },
              { title: dict.home.values_4, icon: '🌿' },
            ].map((item, index) => (
              <div
                key={index}
                className='relative group p-10 flex flex-col items-center justify-center transition-all duration-500'
              >
                <div className='absolute inset-0 border border-white/5 group-hover:border-amber-600/40 transition-all duration-500'></div>

                <div className='absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                <div className='absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>

                <div className='text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500'>
                  {item.icon}
                </div>
                <h3 className='text-white/70 group-hover:text-amber-600 font-medium tracking-[0.2em] text-[11px] uppercase text-center transition-colors'>
                  {item.title}{' '}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
