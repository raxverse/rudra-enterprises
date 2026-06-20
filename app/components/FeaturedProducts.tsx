import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/db';

export default function FeaturedProducts({
  products,
  whatsappNumber,
}: {
  products: Product[];
  whatsappNumber: string;
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Bestsellers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Products
          </h2>
          <p className="text-amber-700 mt-4 text-lg max-w-xl mx-auto">
            Handpicked premium spices that transform every meal into an extraordinary experience
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 text-amber-700">No featured products yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} whatsappNumber={whatsappNumber} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg group border-b-2 border-orange-200 hover:border-orange-500 pb-0.5 transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
