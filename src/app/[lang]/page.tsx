'use client';
import { useState, useEffect } from 'react';

// Öne Çıkan Resimler ve Başlıklar

const highlights = [
  { id: 1, url: '/images/SUPERLUX/dusakabin1.jpg', title: 'Gold Şıklığı' },
  { id: 2, url: '/images/SUPERLUX/dusakabin2.jpg', title: 'Modern Tasarım' },
  { id: 3, url: '/images/SUPERLUX/dusakabin5.jpeg', title: 'Zarif Detaylar' },
];
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='relative bg-brand-black font-sans'>
      {/* HERO SECTION */}
      <section className='relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-48 pb-20 px-10 '>
        {/* Arka Plan Görseli - public/images/ içine attığın resmi buraya yaz */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat '
          style={{
            backgroundImage: `url('/images/OTTI/Otel_tipi1.jpg')`,
            backgroundAttachment: 'fixed', // Bu özellik resmi sabitler, sayfa üzerine kayar
          }}
        >
          {/* Karartma katmanı */}
          <div className='absolute inset-0 bg-black/30 overlay-soft '></div>
        </div>

        {/* Orta Metin Alanı */}
        <div className='relative z-10 text-center space-y-4 px-6'>
          <h1 className='text-6xl md:text-[120px] font-bold tracking-tighter text-white  leading-none drop-shadow-2xl'>
            Estetik Dokunuş
          </h1>
          <p className='text-xs md:text-sm font-light tracking-[0.6em] text-amber-600 uppercase'>
            Banyonuzun Yeni Mimari Kimliği
          </p>
        </div>
        {/* Kaydır İşareti (Mouse Wheel Efekti) */}
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce'>
          <div className='w-[1px] h-12 bg-gradient-to-b from-transparent to-white'></div>
        </div>
      </section>
      {/* 2. SEKSİYON: HİZMETLER (Resimli & Yazılı Geçiş) */}
      <section className='flex flex-col md:flex-row h-auto md:h-screen bg-[#222222]'>
        <div
          className='w-full md:w-1/2 h-96 md:h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000'
          style={{ backgroundImage: `url('/images/KATYA/KATYA_SARI.jpg')` }}
        ></div>

        <div className='w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 py-20'>
          <h2 className='text-4xl font-light text-white mb-8 border-l-2 border-amber-600 pl-6'>
            Hizmetlerimiz
          </h2>
          <ul className='space-y-4 text-white/50 text-lg font-light italic'>
            <li>• Özel Ölçü Duşakabin İmalatı</li>
            <li>• Temperli Cam Aksesuarları</li>
            <li>• Banyo Mimari Modelleme</li>
            <li>• Kurumsal Proje Uygulama</li>
          </ul>
        </div>
      </section>
      {/* 3. SEKSİYON: ÖNE ÇIKAN TASARIMLAR (Animasyonlu Slider) */}
      <section className='flex flex-col md:flex-row h-auto md:h-[80vh] bg-brand-black border-t border-white/5 overflow-hidden'>
        {/* SOL: Estetik Sabit Yazı */}
        <div className='w-full md:w-2/5 flex flex-col justify-center px-12 md:px-24 py-20 z-10'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <span className='text-[10px] uppercase tracking-[0.6em] text-amber-600 font-semibold '>
                Koleksiyon 2026
              </span>
              <h2 className='text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight'>
                Öne Çıkan <br />{' '}
                <span className='italic font-light opacity-80'>Tasarımlar</span>
              </h2>
            </div>

            <div className='h-[1px] w-20 bg-amber-600/30'></div>

            <p className='text-white/40 text-sm md:text-base leading-relaxed font-light italic tracking-wide max-w-sm'>
              Banyonuzun ruhunu değiştiren, şeffaflığın ve metalin kusursuz
              uyumuyla hazırlanan en yeni serilerimizi keşfedin.
            </p>

            {/* Slider Göstergeleri (Dots) */}
            <div className='flex gap-4 pt-4'>
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-[2px] transition-all duration-700 ${idx === activeSlide ? 'w-12 bg-amber-600' : 'w-6 bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* SAĞ: Animasyonlu Resim Geçişi */}
        <div className='w-full md:w-3/5 h-[50vh] md:h-full relative overflow-hidden group bg-neutral-900'>
          {highlights.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out transform
                ${index === activeSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
              `}
              style={{
                backgroundImage: `url('${img.url}')`,
                backgroundSize: 'cover',
                // Eğer hala çok zoomlu gelirse 'contain' yapabiliriz ama 'cover' genelde standarttır.
              }}
            >
              {/* Resim Üzeri Yazı Animasyonu */}
              <div className='absolute bottom-12 left-12 z-20'>
                <span
                  className={`text-[11px] text-white/50 uppercase tracking-[0.4em] transition-all duration-1000 delay-500
                  ${index === activeSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  {img.title}
                </span>
              </div>
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors'></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEKSİYON: DEĞERLERİMİZ (İkonlu Alan) */}
      <section className='py-32 px-10 bg-brand-black border-t border-white/5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {[
            { title: 'Geniş Ürün Yelpazesi', icon: '📐' },
            { title: 'Profesyonel Ekip', icon: '🛠️' },
            { title: 'Estetik Tasarım', icon: '✨' },
            { title: 'Müşteri Memnuniyeti', icon: '🌿' },
          ].map((item, index) => (
            <div
              key={index}
              className='relative group p-10 flex flex-col items-center justify-center transition-all duration-500'
            >
              {/* Modern Amber Çerçeve */}
              <div className='absolute inset-0 border border-white/5 group-hover:border-amber-600/40 transition-all duration-500'></div>

              {/* Köşe Detayları (Lüks görünüm için) */}
              <div className='absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
              <div className='absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>

              <div className='text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500'>
                {item.icon}
              </div>
              <h3 className='text-white/70 group-hover:text-amber-600 font-medium tracking-[0.2em] text-[11px] uppercase text-center transition-colors'>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
