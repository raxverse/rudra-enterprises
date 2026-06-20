import { getSettings, getFeaturedProducts, getApprovedReviews } from '@/lib/data';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import ContactCTA from './components/ContactCTA';

export default async function HomePage() {
  const [settings, products, reviews] = await Promise.all([
    getSettings(),
    getFeaturedProducts(),
    getApprovedReviews(),
  ]);

  return (
    <>
      <HeroSection settings={settings} />
      <FeaturedProducts products={products} whatsappNumber={settings.whatsapp_number || '+919919678020'} />
      <WhyChooseUs />
      <ReviewsSection reviews={reviews} />
      <ContactCTA settings={settings} />
    </>
  );
}
