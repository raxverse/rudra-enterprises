import { getSettings } from '@/lib/data';
import ContactForm from './ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Rudra Enterprises',
  description: 'Get in touch with Rudra Enterprises for orders, inquiries, and support.',
};

export default async function ContactPage() {
  const settings = await getSettings();
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-950 to-amber-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Reach Out</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
          <p className="text-amber-200 text-lg mt-4 max-w-xl mx-auto">We'd love to hear from you. Order, inquire, or just say hello!</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactForm settings={settings} />
      </div>
    </div>
  );
}
