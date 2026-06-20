import { getPage } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Rudra Enterprises',
  description: 'Learn about Rudra Enterprises - our story, mission, vision and commitment to premium Indian spices.',
};

export default async function AboutPage() {
  const page = await getPage('about');
  if (!page) notFound();

  return (
    <div>
      <div className="bg-gradient-to-br from-amber-950 to-amber-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Heritage</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            {page.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/7474222/pexels-photo-7474222.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our spices"
              className="rounded-2xl shadow-xl w-full object-cover aspect-square"
            />
          </div>
          <div>
            <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: page.content || '' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Years of Tradition', value: '10+', color: 'from-orange-500 to-amber-600' },
            { label: 'Happy Customers', value: '5000+', color: 'from-amber-600 to-yellow-600' },
            { label: 'Spice Varieties', value: '50+', color: 'from-green-600 to-emerald-600' },
          ].map((stat) => (
            <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center text-white`}>
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
              <div className="text-sm font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
