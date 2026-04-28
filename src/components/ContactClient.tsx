'use client';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Map from './Map';

export default function ContactClient({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  const contact = dict.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    // --- KURUMSAL MAİLİ ALDIĞINDA BURADAKİ BİLGİLERİ DOLDURACAKSIN ---
    const SERVICE_ID = 'YOUR_SERVICE_ID'; // EmailJS'den alacağın servis ID
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // EmailJS'den alacağın template ID
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // EmailJS'den alacağın public key
    // ----------------------------------------------------------

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      toast.success(
        lang === 'tr'
          ? 'Mesajınız başarıyla iletildi!'
          : 'Message sent successfully!',
        {
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '1px solid #d97706',
            borderRadius: '0px',
            fontSize: '12px',
          },
        },
      );

      formRef.current.reset();
    } catch (error) {
      toast.error(
        lang === 'tr' ? 'Mesaj gönderilemedi.' : 'Failed to send message.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className='bg-brand-black min-h-screen pt-40 pb-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-32 space-y-4'
        >
          <h1 className='text-4xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none'>
            {contact.title_1} <br />
            <span className='italic font-light opacity-60'>
              {contact.title_2}
            </span>
          </h1>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='space-y-12'
          >
            <div className='group'>
              <p className='text-amber-600 text-[10px] uppercase tracking-widest mb-2 font-bold'>
                {contact.address_label}
              </p>
              <p className='text-white/60 text-lg font-light leading-relaxed max-w-sm group-hover:text-white transition-colors'>
                Horozluhan Mah. Hotamış Sok. No:16/A <br />
                Selçuklu, Konya / Türkiye
              </p>
            </div>

            <div className='group'>
              <p className='text-amber-600 text-[10px] uppercase tracking-widest mb-2 font-bold'>
                {contact.email_label}
              </p>
              <p className='text-2xl text-white/80 font-light hover:text-amber-600 transition-colors'>
                info@gnldusakabin.com
              </p>
            </div>

            <div className='group'>
              <p className='text-amber-600 text-[10px] uppercase tracking-widest mb-2 font-bold'>
                {contact.phone_label}
              </p>
              <p className='text-2xl text-white/80 font-light'>
                +90 543 241 25 27
              </p>
            </div>

            {/* HARİTA BURAYA GELDİ */}
            <div className='pt-10 border-t border-white/5'>
              <Map />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden'
          >
            <form className='space-y-6 relative z-10' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-[10px] uppercase tracking-widest text-white/40 ml-1'>
                    {contact.name_field}
                  </label>
                  <input
                    type='text'
                    className='w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-amber-600/50 transition-colors'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-[10px] uppercase tracking-widest text-white/40 ml-1'>
                    {contact.email_field}
                  </label>
                  <input
                    type='email'
                    className='w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-amber-600/50 transition-colors'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-[10px] uppercase tracking-widest text-white/40 ml-1'>
                  {contact.message_field}
                </label>
                <textarea
                  rows={4}
                  className='w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-amber-600/50 transition-colors'
                />
              </div>
              <button className='w-full bg-amber-600 hover:bg-amber-700 text-brand-black font-bold py-5 px-8 transition-all duration-300 uppercase text-xs tracking-[0.3em]'>
                {contact.send_button}
              </button>
            </form>
            <div className='absolute -bottom-10 -right-10 text-white/[0.02] text-[150px] font-bold pointer-events-none select-none'>
              GNL
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
