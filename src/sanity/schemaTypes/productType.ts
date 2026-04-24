import { BasketIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Ürünler',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'code',
      title: 'Ürün Kodu',
      type: 'string',
    }),
    defineField({
      name: 'productImage',
      title: 'Ürün Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
});
