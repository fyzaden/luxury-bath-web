'use client';

const WhatsAppButton = () => {
  const phoneNumber = '+905432412527';
  const message = 'Merhaba, ürünleriniz hakkında bilgi alabilir miyim?';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-[9999] flex items-center justify-center bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20 w-14 h-14 md:w-16 md:h-16'
      aria-label='WhatsApp'
    >
      <svg
        viewBox='0 0 24 24'
        style={{ width: '32px', height: '32px', fill: '#25D366' }} // CSS sınıfları yerine inline style ile garanti ettik
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.877-1.032l-.278-.164-2.885.756.77-2.812-.18-.287a8.142 8.142 0 01-1.248-4.379c0-4.492 3.656-8.148 8.148-8.148 4.492 0 8.148 3.656 8.148 8.148 0 4.492-3.656 8.148-8.148 8.148m0-17.52C7.75 1.584 3.5 5.834 3.5 11.084c0 1.677.433 3.313 1.258 4.757L3 22.584l6.959-1.825a7.561 7.561 0 003.625.925c5.25 0 9.5-4.25 9.5-9.5 0-5.25-4.25-9.5-9.5-9.5z' />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
