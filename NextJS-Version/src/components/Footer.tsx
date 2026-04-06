import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                AP TEXTILE
              </h3>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase mt-1">Industries</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted wholesaler & supplier of premium yarn and home décor products. Serving businesses since 2010.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-wider text-xs mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products" className="hover:text-white transition-colors">Cotton Yarn</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Polyester Yarn</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Satin Cord Yarn</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Bath Towels</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-wider text-xs mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold uppercase tracking-wider text-xs mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📍</span>
                <span>Aggarwal Market, Gali No. 2<br/>Gohana Road, Panipat - 132103</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">📞</span>
                <a href="tel:+917419300657" className="hover:text-white transition-colors">+91-7419300657</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✉️</span>
                <a href="mailto:aptextileindustries1@gmail.com" className="hover:text-white transition-colors">aptextileindustries1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>© 2025 AP Textile Industries. All rights reserved.</p>
          <p>Panipat, Haryana · India</p>
        </div>
      </div>
    </footer>
  );
}
