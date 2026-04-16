'use client';
import { motion } from 'framer-motion';

export default function KVKK() {
  return (
    <main className='bg-bran-black min-h-screen pt-40 pb-20 px-6 md:px-12'>
      <div className=' max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-16'
        >
          <span className='text-10px uppercase text-amber-600 font-semibold'>
            Yasal Bilgilendirme
          </span>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mt-4'>
            KVKK
          </h1>
          <span className='italic font-light opacity-60'>Aydınlatma Metni</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='space-y-10 text-white/70 font-light leading-relaxed text-sm md:text-base'
        >
          <section className='space-y-4'>
            <h2 className='text-white font-bold uppercase tracking-widest text-lg'>
              Veri Sorumlusu
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
              kişisel verileriniz; veri sorumlusu olarak
              <strong> GNL INOVASYON YAPI SAN. TİC. LTD. ŞTİ.</strong>{' '}
              tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </section>
          <section className='space-y-4'>
            <h2 className='text-white font-bold uppercase tracking-widest text-lg'>
              2. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p>
              Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan ürün
              ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların
              iş birimlerimiz tarafından yapılması, ürün ve hizmetlerimizin
              beğeni ve ihtiyaçlarınıza göre özelleştirilerek sizlere önerilmesi
              amaçlarıyla işlenmektedir.{' '}
            </p>
          </section>
          <section className='space-y-4 font-normal text-white/50 bg-white/[0.02] p-8 border-l-2 border-amber-600'>
            <p>
              * İletişim formları aracılığıyla paylaştığınız ad, soyad, e-posta
              ve telefon gibi bilgiler sadece taleplerinize yanıt vermek
              amacıyla kullanılır.
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-white font-bold uppercase tracking-widest text-lg'>
              3. İşlenen Kişisel Verilerin Aktarımı
            </h2>
            <p>
              Kişisel verileriniz; yukarıda belirtilen amaçların
              gerçekleştirilmesi doğrultusunda, iş ortaklarımıza,
              tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel
              kişilere KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri
              işleme şartları çerçevesinde aktarılabilecektir.
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-white font-bold uppercase tracking-widest text-lg'>
              4. Veri Sahibinin Hakları
            </h2>
            <p>
              Kanun’un 11. maddesi uyarınca veri sahipleri; kendisiyle ilgili
              kişisel veri işlenip işlenmediğini öğrenme, verileri işlenmişse
              buna ilişkin bilgi talep etme, verilerin amacına uygun kullanılıp
              kullanılmadığını öğrenme haklarına sahiptir.
            </p>
          </section>

          <div className='pt-10 border-t border-white/5'>
            <p className='text-[10px] uppercase tracking-widest'>
              Son Güncelleme: 15 Nisan 2026
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
