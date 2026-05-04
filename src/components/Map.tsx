'use client';

const Map = () => {
  const query = 'Horozluhan Mah. Saraycık Sk. No:123 Selçuklu Konya';
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className='w-full h-[450px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10'>
      <iframe
        src={mapUrl}
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
