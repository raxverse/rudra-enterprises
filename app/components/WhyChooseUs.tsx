import { Shield, Leaf, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Pure Ingredients',
    description: 'We source only the finest, freshest spices directly from trusted farms across India. Zero fillers, zero additives.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: Heart,
    title: 'Traditional Recipes',
    description: 'Our masala blends follow time-honored recipes passed down through generations, preserving authentic flavors.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every batch undergoes rigorous quality checks. We guarantee the best quality in every pack you receive.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Shield,
    title: 'Authentic Taste',
    description: 'Experience flavors exactly as nature intended. No artificial flavors, no artificial colors, just pure taste.',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 spice-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-orange-100/50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-amber-100/50 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-orange-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">Our Promise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Us
          </h2>
          <p className="text-amber-700 mt-3 sm:mt-4 text-base sm:text-lg max-w-xl mx-auto px-2">
            We are committed to bringing you the finest spices with unmatched quality and authenticity
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.bg} border ${feature.border} rounded-2xl p-5 sm:p-7 card-hover text-center`}
              >
                <div className={`inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 ${feature.bg} rounded-full mb-4 sm:mb-5 border-2 ${feature.border} shadow-sm`}>
                  <Icon className={`w-6 sm:w-7 h-6 sm:h-7 ${feature.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-amber-800/80 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
