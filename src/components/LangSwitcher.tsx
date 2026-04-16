'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.split('/')[1];

  const toggleLang = (lang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className='flex gap-2 text-[10px] font-bold tracking-widest uppercase'>
      <button
        onClick={() => toggleLang('tr')}
        className={`${currentLang === 'tr' ? 'text-amber-600' : 'text-white/40'} hover:text-white transition-colors`}
      >
        TR
      </button>
      <span className='text-white/10'>|</span>
      <button
        onClick={() => toggleLang('en')}
        className={`${currentLang === 'en' ? 'text-amber-600' : 'text-white/40'} hover:text-white transition-colors`}
      >
        EN
      </button>
    </div>
  );
}
