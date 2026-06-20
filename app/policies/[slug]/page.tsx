import { getPage } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const policyMeta: Record<string, { title: string; description: string }> = {
  'privacy-policy': { title: 'Privacy Policy - Rudra Enterprises', description: 'Privacy policy for Rudra Enterprises.' },
  'terms-conditions': { title: 'Terms & Conditions - Rudra Enterprises', description: 'Terms and conditions for using Rudra Enterprises.' },
  'shipping-policy': { title: 'Shipping Policy - Rudra Enterprises', description: 'Shipping policy for Rudra Enterprises.' },
  'return-refund': { title: 'Return & Refund Policy - Rudra Enterprises', description: 'Return and refund policy for Rudra Enterprises.' },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = policyMeta[params.slug];
  return { title: meta?.title || 'Policy - Rudra Enterprises', description: meta?.description || '' };
}

const policyLinks = [
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'terms-conditions', label: 'Terms & Conditions' },
  { slug: 'shipping-policy', label: 'Shipping Policy' },
  { slug: 'return-refund', label: 'Return & Refund' },
];

export default async function PolicyPage({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);
  if (!page) notFound();

  return (
    <div>
      <div className="bg-gradient-to-br from-amber-950 to-amber-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-400 text-sm mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-300">{page.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            {page.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <h3 className="font-bold text-amber-900 mb-4 text-sm uppercase tracking-wide">Policies</h3>
              <ul className="space-y-1">
                {policyLinks.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`/policies/${link.slug}`}
                      className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${params.slug === link.slug ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-amber-800 hover:text-orange-600 hover:bg-amber-100'}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white border border-amber-100 rounded-2xl p-8 shadow-sm">
              <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: page.content || '' }} />
              <p className="text-xs text-gray-400 mt-8 pt-6 border-t border-gray-100">
                Last updated: {new Date(page.updated_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
