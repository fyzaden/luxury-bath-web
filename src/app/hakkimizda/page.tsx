'use client';
import { motion } from 'framer-motion';

export default function Hakkimizda() {
  return (
    <main className='bg-brand-black text-white font-sans selection:bg-amber-600/30'>
      {/* BAŞLIK BÖLÜMÜ (MINIMAL) */}
      <section className='pt-40 pb-20 px-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <span className='text-[10px] uppercase tracking-[0.8em] text-amber-600 font-semibold'>
            Hikayemiz & Vizyonumuz
          </span>
          <h1 className='text-5xl md:text-8xl font-bold tracking-tighter'>
            Modernliğin <br />
            <span className='italic font-light opacity-70'>
              Estetik Dokunuşu
            </span>
          </h1>
        </motion.div>
      </section>
      {/* İÇERİK BÖLÜMÜ (ASİMETRİK) */}
      <section className='pb-32 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
        {/* SOL: Metin Alanı */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-8'
        >
          <div className='h-[1px] w-24 bg-amber-600'></div>
          <h2 className='text-3xl font-light leading-relaxed italic'>
            Bir Konya Markası, Bir Dünya Standardı
          </h2>

          <div className='space-y-6 text-white/50 font-light leading-loose text-lg'>
            <p>
              2023 yılında %100 yerli sermaye ve yerli işgücü ile temelleri
              atılan GNL Duşakabin ve Cam Aksesuarları, Konya’nın üretim gücünü
              modern mimariyle birleştiren vizyoner bir markadır. Hızla
              genişleyen ürün yelpazemiz ve sürekli gelişen teknolojik
              altyapımızla, bugün yaşam alanlarında estetik ve kaliteyi bir
              arada arayanların öncelikli tercihi olmanın gururunu yaşıyoruz.
            </p>
            <p>
              Faaliyetlerimizi sadece üretimle sınırlı görmüyor; toprağa, doğaya
              ve tüm canlılara duyduğumuz saygıyla, iş sağlığı ve güvenliğini
              merkezimize alarak sürdürülebilir bir gelecek inşa ediyoruz. Tüm
              ürünlerimizde sahip olduğumuz CE Sertifikası, uluslararası kalite
              ve güvenlik standartlarına olan sadakatimizin bir tescilidir.
              Müşterilerimize verdiğimiz sözleri yasal mevzuatların ötesinde
              birer güven akdi olarak görüyor, koşulsuz müşteri memnuniyetini en
              üst düzeyde tutmayı taahhüt ediyoruz.
            </p>
          </div>

          {/* Küçük İstatistikler */}
          <div className='grid grid-cols-2 gap-10 pt-10 border-t border-white/5'>
            <div>
              <p className='text-3xl font-bold text-amber-600'>3+</p>
              <p className='text-[10px] uppercase tracking-widest opacity-50'>
                Yıllık Deneyim
              </p>
            </div>
            <div>
              <p className='text-3xl font-bold text-amber-600'>250+</p>
              <p className='text-[10px] uppercase tracking-widest opacity-50'>
                Tamamlanan Proje
              </p>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: Görsel Alanı (Görsellerinden ilham alındı) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='relative group'
        >
          {/* Ana Görsel */}
          <div
            className='aspect-[3/4] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl'
            style={{
              backgroundImage: `url('/images/SUPERLUX/dusakabin6.jpeg')`,
            }} // Paylaştığın mimari görsellerden birini buraya koyabilirsin
          ></div>

          {/* Dekoratif Amber Çerçeve (Görselin arkasında hafif kayık) */}
          <div className='absolute -bottom-6 -right-6 w-full h-full border border-amber-600/20 -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-700'></div>

          {/* Usta/İşçilik Vurgusu İçin Küçük Badge */}
          <div className='absolute -top-10 -left-10 bg-amber-600 p-8 hidden md:block'>
            <p className='text-brand-black font-bold text-xs uppercase tracking-tighter leading-none'>
              Kusursuz <br /> İşçilik
            </p>
          </div>
        </motion.div>
      </section>

      {/* ALT BÖLÜM: SÖZ */}
      <section className='py-40 bg-white/[0.02] text-center px-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='max-w-4xl mx-auto space-y-6'
        >
          <span className='text-4xl opacity-20'>“</span>
          <p className='text-2xl md:text-4xl font-light italic opacity-80 leading-snug'>
            Camın berraklığı, suyun huzuruyla buluştuğunda; tasarım sadece bir
            form olmaktan çıkıp bir yaşam deneyimine dönüşür.
          </p>
          <div className='h-px w-12 bg-amber-600 mx-auto'></div>
        </motion.div>
      </section>
    </main>
  );
}
