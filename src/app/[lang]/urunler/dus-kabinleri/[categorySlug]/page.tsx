import { getProductsByCategory } from '@/lib/sanity.queries';
import Image from 'next/image';

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ lang: string; categorySlug: string }>;
}) {
  const { lang, categorySlug } = await params;
  const products = await getProductsByCategory(categorySlug);

  return (
    <div className='min-h-screen pt-32 pb-20 px-6 md:px-12 bg-black text-white'>
      <h1 className='text-3xl font-bold mb-12 tracking-tighter uppercase italic border-l-4 border-amber-600 pl-4'>
        {categorySlug.replace(/-/g, ' ')}
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product: any) => (
          <div
            key={product._id}
            className='group bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-600/50 hover:shadow-[0_0_20px_rgba(217,119,6,0.1)]'
          >
            <div className='aspect-square w-full relative overflow-hidden bg-zinc-800'>
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.code}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center text-white/10'>
                  <span className='text-[10px] uppercase tracking-[0.2em]'>
                    Görsel Hazırlanıyor
                  </span>
                </div>
              )}
            </div>

            <div className='p-4 flex justify-between items-center bg-zinc-900'>
              <div>
                <p className='text-[10px] text-amber-600 font-bold tracking-widest uppercase mb-1'>
                  Model
                </p>
                <span className='text-sm font-bold tracking-widest text-white group-hover:text-amber-500 transition-colors'>
                  {product.code}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className='py-20 text-center border border-dashed border-white/10 rounded-lg'>
          <p className='text-white/40 text-xs uppercase tracking-[0.3em]'>
            {lang === 'tr'
              ? 'Bu kategoride henüz ürün kodu eklenmedi.'
              : 'No product codes added to this category yet.'}
          </p>
        </div>
      )}
    </div>
  );
}
