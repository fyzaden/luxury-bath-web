import { client } from '@/sanity/lib/client';
import { draftMode } from 'next/headers';

// Taslakları görebilmek için yetkili bir client oluşturuyoruz
const getClient = async () => {
  const isDraft = (await draftMode()).isEnabled;

  // Eğer Draft Mode aktifse, okuma yetkisi olan token ile taslakları çek
  if (isDraft) {
    return client.withConfig({
      token: process.env.SANITY_API_READ_TOKEN, // Vercel'e eklemeniz gereken token
      perspective: 'previewDrafts',
      useCdn: false, // Taslaklarda güncel veriyi almak için CDN kapatılmalı
    });
  }
  return client;
};

export async function getCategoriesByParent(parent: string, lang: string) {
  const query = `*[_type == "category" && parentCategory == $parent] {
    "title": select($lang == 'tr' => title, titleEN),
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  const currentClient = await getClient();
  return await currentClient.fetch(query, { parent, lang });
}

export async function getProductsByCategory(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    code,
    "imageUrl": productImage.asset->url
  }`;

  const currentClient = await getClient();
  return await currentClient.fetch(query, { categorySlug });
}
