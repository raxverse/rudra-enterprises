import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getSettings } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rudra Enterprises',
  description: 'Premium Indian Spices & Masalas',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar settings={settings} />
          <main className="flex-1 pt-16">{children}</main>
          <Footer settings={settings} />
        </div>
      </body>
    </html>
  );
}
