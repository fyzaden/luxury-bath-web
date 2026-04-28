'use client';
const Map = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5678!2d32.5123!3d37.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU1JzI0LjIiTiAzMsKwMzAnNDQuMyJF!5e0!3m2!1str!2str!4v1714345678901!5m2!1str!2str';

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
        className='grayscale-0 md:grayscale md:hover:grayscale-0  transition-all duration-700'
      ></iframe>
    </div>
  );
};

export default Map;
