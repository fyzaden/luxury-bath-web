import { TagIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Kategoriler',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Kategori Adı',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'image',
      title: 'Kategori Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'parentCategory',
      title: 'Üst Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Duş Kabinleri', value: 'dus-kabinleri' },
          { title: 'Cam Aksesuarları', value: 'cam-aksesuarlari' },
        ],
      },
    }),
  ],
});
