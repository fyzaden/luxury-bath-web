import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. ÖNEMLİ: Fonksiyonu "default" olarak dışa aktardığından emin ol
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Statik dosyaları ve Sanity studio'yu koru
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/studio') ||
    pathname.includes('/api/') ||
    pathname.includes('/images/') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg')
  ) {
    return NextResponse.next();
  }

  const locales = ['tr', 'en'];
  const defaultLocale = 'tr';

  // Mevcut URL dil kodu içeriyor mu?
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Dil kodu yoksa yönlendir
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// 2. Matcher ayarları
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|studio).*)',
  ],
};
