export interface Product {
  id: string;
  name: string;
  description: string;
  weight: string;
  price: string;
  image_url: string;
  is_featured: boolean;
  sort_order: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export const settings = {
  site_name: 'Rudra Enterprises',
  whatsapp_number: '+919919678020',
  phone_number: '+919919678020',
  email: 'info@rudraenterprises.com',
  address: 'India',
  facebook_url: '',
  instagram_url: '',
  hero_title: 'Pure Spices, Divine Taste',
  hero_subtitle:
    'Experience the authentic flavors of India with our premium hand-crafted masalas and spices, made with traditional recipes passed down through generations.',
  logo_url: '',
};

export const pages = [
  {
    slug: 'about',
    title: 'About Us',
    content: '<h2>Our Story</h2><p>Rudra Enterprises was founded with a passion for bringing authentic Indian spices to every kitchen...</p>',
    meta_description:
      'Learn about Rudra Enterprises - premium Indian spices brand rooted in tradition and authenticity.',
  },
  {
    slug: 'contact',
    title: 'Contact Us',
    content:
      '<p>We would love to hear from you. Reach out to us for any queries, orders, or feedback.</p>',
    meta_description:
      'Contact Rudra Enterprises for premium Indian spices inquiries.',
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    content: '...',
    meta_description:
      'Privacy Policy for Rudra Enterprises - how we protect your data.',
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    content: '...',
    meta_description:
      'Terms and Conditions for using Rudra Enterprises website.',
  },
  {
    slug: 'shipping-policy',
    title: 'Shipping Policy',
    content: '...',
    meta_description:
      'Shipping Policy for Rudra Enterprises - delivery timelines and charges.',
  },
  {
    slug: 'return-refund',
    title: 'Return & Refund Policy',
    content: '...',
    meta_description:
      'Return and Refund Policy for Rudra Enterprises - hassle-free returns.',
  },
];

export const products = [
  {
    id: '1',
    name: 'Parashree Buknoo',
    description: 'Our signature blend of aromatic whole spices ground to perfection.',
    weight: '100g',
    price: '₹40',
    image_url: "parashreebuknoo.jpg",
    is_featured: true,
    sort_order: 1,
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    review:
      'Absolutely divine spices! The garam masala transformed my cooking completely.',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    rating: 5,
    review:
      'Best quality masalas I have ever used.',
  },
  {
    id: '3',
    name: 'Anita Patel',
    rating: 4,
    review:
      'Amazing quality and fast delivery.',
  },
];
