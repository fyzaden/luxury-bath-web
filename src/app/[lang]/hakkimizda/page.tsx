import { getDictionary } from '@/lib/get-dictionary';
import AboutClient from '@/components/AboutClient';

export default async function Hakkimizda({
  params,
}: {
  params: Promise<{ lang: 'tr' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutClient dict={dict} />;
}
