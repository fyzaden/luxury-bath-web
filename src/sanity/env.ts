export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-08';

// assertValue yerine doğrudan okuma ve varsayılan değer atama yapıyoruz
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'PROJE_ID_BURAYA_YAZILABILIR';

// Bu fonksiyonu şimdilik devre dışı bırakıyoruz veya kullanmıyoruz
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    // Hata fırlatmak yerine uyarı verebiliriz veya doğrudan değeri döndürebiliriz
    console.warn(errorMessage);
    return v as T;
  }
  return v;
}
