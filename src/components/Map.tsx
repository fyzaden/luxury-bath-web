'use client';

const Map = () => {
  // Adres metnini URL-safe hale getirerek dinamik bir embed linki oluşturuyoruz
  const address = 'Horozluhan Mah. Saraycık Sok. No:123 Selçuklu Konya';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=VARSA_API_KEYINIZ&q=${encodeURIComponent(address)}`;

  // Eğer Google Maps API Key'in yoksa, en güvenilir standart embed yolu şudur:
  const fallbackMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.16335198004!2d32.51950347648358!3d37.92651470355418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0859942478f77%3A0x633364f9f6e6258f!2zSG9yb3psdWhhbiwgU2FyYXljxLFrIFNrLiBObzoxMjMsIDQyMTAwIFNlbMOndWtsdS9Lbnlh!5e0!3m2!1str!2str!4v1714856000000!5m2!1str!2str';

  return (
    <div className='w-full h-[450px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10'>
      <iframe
        src={fallbackMapUrl}
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700'
      ></iframe>
    </div>
  );
};

export default Map;
