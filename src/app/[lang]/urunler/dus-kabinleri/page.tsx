import { getCategoriesByParent } from '@/lib/sanity.queries';
import Link from 'next/link';

export default async function DusKabinleriPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const categories = await getCategoriesByParent('dus-kabinleri', lang);

  return (
    <div className='min-h-screen pt-32 pb-20 px-6 md:px-12 bg-black text-white'>
      <h1 className='text-3xl font-bold mb-12 tracking-tighter text-center uppercase'>
        {lang === 'tr' ? 'Duş Kabini Serileri' : 'Shower Enclosure Series'}
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories.map((cat: any) => (
          <Link
            key={cat.slug}
            href={`/${lang}/urunler/dus-kabinleri/${cat.slug}`}
            className='group p-8 border border-white/10 bg-zinc-900/50 hover:border-amber-600 transition-all'
          >
            <div className='aspect-[4/5] relative'>
              {cat.imageUrl ? (
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className='object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500'
                />
              ) : (
                <div className='w-full h-full bg-zinc-800 flex items-center justify-center text-white/20 uppercase text-[10px]'>
                  Görsel Yok
                </div>
              )}
            </div>
            <h2 className='text-xl font-bold group-hover:text-amber-600 transition-colors uppercase italic'>
              {cat.title}
            </h2>
            <p className='text-[10px] text-white/40 mt-2 tracking-widest uppercase'>
              {lang === 'tr' ? 'Modelleri İncele' : 'View Models'} →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
