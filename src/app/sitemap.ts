import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

interface SanityCategory {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gnldusakabin.com.tr';

  // 1. Sabit (Statik) Sayfalarımız
  const staticRoutes = [
    '',
    '/tr',
    '/en',
    '/tr/hakkimizda',
    '/tr/iletisim',
    '/tr/referanslar',
    '/tr/urunler',
    '/en/about',
    '/en/contact',
    '/en/references',
    '/en/products',
    '/tr/urunler/dus-kabinleri',
    '/tr/urunler/cam-aksesuarlari',
    '/en/products/shower-enclosures',
    '/en/products/glass-accessories',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/tr' ? 1.0 : 0.8,
  }));

  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const categories: SanityCategory[] = await client.fetch(
      `*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`,
    );

    dynamicRoutes = categories.flatMap((cat) => [
      {
        url: `${baseUrl}/tr/urunler/dus-kabinleri/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/en/products/shower-enclosures/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      },

      {
        url: `${baseUrl}/tr/urunler/cam-aksesuarlari/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/en/products/glass-accessories/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      },
    ]);
  } catch (error) {
    console.error('Sitemap dinamik yollar çekilirken hata oluştu:', error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
