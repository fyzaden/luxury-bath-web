import { MetadataRoute } from 'next';
import { client } from './sanity/lib/client'; // Sanity import yolunu klasör yapına göre ayarladım

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

  // 2. Sanity'den Kategorileri ve Ürün Detaylarını Çekiyoruz
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    // Sanity'deki kategori şemalarını çeker (Şema isminin "category" olduğunu varsayıyoruz)
    const categories: SanityCategory[] = await client.fetch(
      `*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`,
    );

    dynamicRoutes = categories.flatMap((cat) => [
      // Duş Kabinleri altındaki sayfalar (Hem Türkçe hem İngilizce)
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
      // Cam Aksesuarları altındaki sayfalar (Hem Türkçe hem İngilizce)
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

  // 3. Hepsini birleştirip tek liste halinde dönüyoruz
  return [...staticRoutes, ...dynamicRoutes];
}
