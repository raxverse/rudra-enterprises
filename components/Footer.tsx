import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram } from 'react-icons/fa';

type Settings = Record<string, string>;

export default function Footer({ settings }: { settings: Settings }) {
  const siteName = settings.site_name || 'Rudra Enterprises';
  const whatsapp = settings.whatsapp_number || '9919678020';
  const phone = settings.phone_number || '+91 9919678020';
  const email = settings.email || 'info@rudraenterprises.com';
  const address = settings.address || 'India';

  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{siteName}</div>
                <div className="text-xs text-orange-400 tracking-wide">Premium Spices</div>
              </div>
            </div>
            <p className="text-amber-300 text-sm leading-relaxed max-w-sm mb-6">
              Bringing the authentic taste of India to your kitchen. Premium hand-crafted masalas made with traditional recipes passed down through generations.
            </p>
            <div className="flex gap-3">
              {settings.facebook_url && (
                <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-amber-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.instagram_url && (
                <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-amber-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/products', 'Products'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-amber-300 hover:text-orange-400 transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-5 mt-7 text-base">Policies</h4>
            <ul className="space-y-2.5">
              {[['/policies/privacy-policy', 'Privacy Policy'], ['/policies/terms-conditions', 'Terms & Conditions'], ['/policies/shipping-policy', 'Shipping Policy'], ['/policies/return-refund', 'Return & Refund']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-amber-300 hover:text-orange-400 transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-amber-300 hover:text-orange-400 transition-colors text-sm">{phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-amber-300 hover:text-orange-400 transition-colors text-sm break-all">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-amber-300 text-sm">{address}</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-amber-900/50 rounded-xl border border-amber-800">
              <p className="text-xs text-amber-400 mb-2 font-medium">WhatsApp Orders</p>
              <a
                href={`https://wa.me/${whatsapp}?text=Hello, I would like to place an order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white font-semibold"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                {whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <p className="text-amber-500 text-xs">Made with love for authentic Indian flavors</p>
        </div>
      </div>
    </footer>
  );
}
