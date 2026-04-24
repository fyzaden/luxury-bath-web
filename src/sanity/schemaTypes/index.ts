import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType'; // Oluşturduğumuz kategori şeması
import { productType } from './productType'; // Oluşturduğumuz ürün şeması

export const schema: { types: SchemaTypeDefinition[] } = {
  // Tanımladığımız şemaları buraya ekliyoruz
  types: [categoryType, productType],
};
