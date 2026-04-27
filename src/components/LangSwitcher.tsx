'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/');
  const currentLang = segments[1];

  const handleLanguageChange = (newLang: string) => {
    if (currentLang === newLang) return;

    const newSegments = [...segments];
    newSegments[1] = newLang;

    let newPath = newSegments.join('/');
    if (newPath === '') newPath = `/${newLang}`;

    router.push(newPath);
  };

  return (
    <div className='flex gap-2 text-[12px] font-bold tracking-widest uppercase ml-4'>
      <button
        onClick={() => handleLanguageChange('tr')}
        className={`${currentLang === 'tr' ? 'text-amber-600' : 'text-white/40'} hover:text-white transition-colors cursor-pointer`}
      >
        TR
      </button>
      <span className='text-white/10'>|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`${currentLang === 'en' ? 'text-amber-600' : 'text-white/40'} hover:text-white transition-colors cursor-pointer`}
      >
        EN
      </button>
    </div>
  );
}
