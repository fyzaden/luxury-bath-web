export const metadata = {
  title: 'GNL Sanity Studio',
  description: 'İçerik Yönetim Paneli',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
