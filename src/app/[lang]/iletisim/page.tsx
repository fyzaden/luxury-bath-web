import { getDictionary } from '@/lib/get-dictionary';
import ContactClient from '@/components/ContactClient';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: 'tr' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactClient dict={dict} lang={lang} />;
}
