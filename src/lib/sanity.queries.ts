import { client } from '@/sanity/lib/client';
import { draftMode } from 'next/headers';

const getClient = async () => {
  const isDraft = (await draftMode()).isEnabled;

  if (isDraft) {
    return client.withConfig({
      token: process.env.SANITY_API_READ_TOKEN, //
      perspective: 'previewDrafts',
      useCdn: false,
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
