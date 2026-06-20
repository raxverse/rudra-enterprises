import {
  settings,
  pages,
  products,
  reviews,
} from './static-data';

export type { Product } from './static-data';
export type { Review } from './static-data';

export async function getSettings() {
  return settings;
}

export async function getPage(slug: string) {
  return pages.find((p) => p.slug === slug) ?? null;
}

export async function getApprovedReviews() {
  return reviews;
}

export async function getFeaturedProducts() {
  return products.filter((p) => p.is_featured);
}

export async function getAllProducts() {
  return products;
}