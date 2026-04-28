import { getCategoriesByParent } from '@/lib/sanity.queries';
import Link from 'next/link';

export default async function CamAksesuarlariPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const categories = await getCategoriesByParent('cam-aksesuarlari', lang);

  return (
    <div className='min-h-screen pt-32 pb-20 px-6 md:px-12 bg-black text-white'>
      <h1 className='text-3xl font-bold mb-12 tracking-tighter text-center uppercase italic'>
        {lang === 'tr' ? 'Cam Aksesuarları' : 'Glass Accessories'}
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {categories.map((cat: any) => (
          <Link
            key={cat.slug}
            href={`/${lang}/urunler/cam-aksesuarlari/${cat.slug}`}
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
              {lang === 'tr' ? 'Ürünleri Listele' : 'View Products'} →
            </p>
          </Link>
        ))}

        {categories.length === 0 && (
          <p className='col-span-full text-center text-white/20 py-20 border border-dashed border-white/10'>
            Henüz aksesuar kategorisi eklenmedi.
          </p>
        )}
      </div>
    </div>
  );
}
