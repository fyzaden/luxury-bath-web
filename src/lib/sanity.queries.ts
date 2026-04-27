import { client } from '@/sanity/lib/client';

export async function getCategoriesByParent(parent: string, lang: string) {
  const query = `*[_type == "category" && parentCategory == $parent] {
    "title": select($lang == 'tr' => title, titleEN),
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query, { parent, lang });
}

export async function getProductsByCategory(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    code,
    "imageUrl": productImage.asset->url
  }`;

  return await client.fetch(query, { categorySlug });
}
