import { client } from '@/sanity/lib/client';

// 1. Belirli bir üst kategoriye (dus-kabinleri veya cam-aksesuarlari) ait alt kategorileri getirir
export async function getCategoriesByParent(parent: string) {
  const query = `*[_type == "category" && parentCategory == $parent] {
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  // Burada $parent parametresini Sanity'ye gönderiyoruz
  return await client.fetch(query, { parent });
}

// 2. Belirli bir alt kategoriye (örn: surme-seri) ait tüm ürün kodlarını getirir
export async function getProductsByCategory(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    code,
    "imageUrl": productImage.asset->url
  }`;

  // Burada $categorySlug parametresini Sanity'ye gönderiyoruz
  return await client.fetch(query, { categorySlug });
}
