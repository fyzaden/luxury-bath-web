import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Next.js'in "isimlendirilmiş export" beklentisini karşılamak için fonksiyon adını 'proxy' yapıyoruz
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locales = ['tr', 'en'];

  // 1. Dil zaten varsa devam et
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // 2. Statik dosyaları dışla
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.includes('/studio') ||
    pathname.startsWith('/images') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg')
  ) {
    return NextResponse.next();
  }

  // 3. Dil yoksa yönlendir
  const url = request.nextUrl.clone();
  url.pathname = `/tr${pathname}`;
  return NextResponse.redirect(url);
}

// Next.js'in "default export" beklentisini karşılamak için
export default proxy;

// Matcher ayarları
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|studio).*)',
  ],
};
