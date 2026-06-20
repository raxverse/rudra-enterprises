import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getSettings } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rudra Enterprises - Premium Indian Spices & Masalas',
  description: 'Experience authentic Indian flavors with Rudra Enterprises premium hand-crafted masalas and spices made with traditional recipes.',
  keywords: 'Indian spices, masala, garam masala, turmeric, red chilli powder, premium spices, authentic spices',
  openGraph: {
    title: 'Rudra Enterprises - Premium Indian Spices & Masalas',
    description: 'Experience authentic Indian flavors with Rudra Enterprises premium hand-crafted masalas and spices.',
    type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/6512996/pexels-photo-6512996.jpeg?auto=compress&cs=tinysrgb&w=1200' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudra Enterprises - Premium Indian Spices & Masalas',
    description: 'Experience authentic Indian flavors with premium hand-crafted masalas.',
    images: ['https://images.pexels.com/photos/6512996/pexels-photo-6512996.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar settings={settings} />
          <main className="flex-1 pt-16">{children}</main>
          <Footer settings={settings} />
        </div>
      </body>
    </html>
  );
}
