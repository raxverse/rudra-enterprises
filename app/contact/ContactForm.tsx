'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  settings: Record<string, string>;
}

export default function ContactForm({ settings }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const whatsapp = settings.whatsapp_number || '9919678020';
  const phone = settings.phone_number || '+91 9919678020';
  const email = settings.email || 'info@rudraenterprises.com';
  const address = settings.address || 'India';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Get In Touch</h2>
        
        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
            <p className="text-green-700">We'll get back to you as soon as possible.</p>
            <button onClick={() => setSuccess(false)} className="mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                placeholder="How can we help you?"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Information</h2>
        <div className="space-y-5">
          {[
            { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone}` },
            { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
            { icon: MapPin, label: 'Address', value: address, href: undefined },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 p-5 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-0.5">{label}</div>
                {href ? (
                  <a href={href} className="text-amber-900 font-medium hover:text-orange-600 transition-colors text-sm">{value}</a>
                ) : (
                  <span className="text-amber-900 font-medium text-sm">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl text-white">
          <h3 className="font-bold text-lg mb-1">Quick Order on WhatsApp</h3>
          <p className="text-green-100 text-sm mb-4">The fastest way to place an order or get answers.</p>
          <a
            href={`https://wa.me/${whatsapp}?text=Hello, I would like to inquire about your products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-5 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat: {whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
