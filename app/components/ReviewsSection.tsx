'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import type { Review } from '@/lib/db';

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) {
      setError('Please fill all fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), review: reviewText.trim(), rating }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setSubmitted(true);
      setName(''); setReviewText(''); setRating(5);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-amber-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Happy Customers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((review) => (
              <div key={review.id} className="bg-amber-900/50 border border-amber-800/50 backdrop-blur-sm rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-amber-700'}`} />
                  ))}
                </div>
                <p className="text-amber-100 text-sm leading-relaxed mb-5 italic">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    {review.name[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-amber-400 text-xs">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-amber-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Share Your Experience
          </h3>
          <p className="text-amber-700 text-sm mb-6">Your review will appear after approval.</p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600 fill-green-600" />
              </div>
              <p className="text-green-700 font-semibold text-lg">Thank you for your review!</p>
              <p className="text-gray-500 text-sm mt-1">It will appear once approved.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-orange-600 hover:text-orange-700 text-sm font-medium">
                Write another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star className={`w-7 h-7 ${star <= (hoveredStar || rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                  placeholder="Share your experience..."
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
