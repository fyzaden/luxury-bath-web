// app/api/draft/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  // Güvenlik: Vercel'e eklediğin gizli bir şifreyle kontrol et
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Geçersiz token', { status: 401 });
  }

  (await draftMode()).enable(); // Önizleme modunu aktif et

  // Müşteriyi ana sayfaya veya belirli bir kategoriye yönlendir
  redirect(`/${slug || 'tr'}`);
}
