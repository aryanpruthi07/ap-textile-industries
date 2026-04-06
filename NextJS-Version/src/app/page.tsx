import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AP Textile Industries | Premium Yarn & Home Decor',
  description: 'AP Textile Industries — premium cotton yarn, polyester yarn, satin cord yarn, bath towels and bath mats supplier in India.',
};

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Product Variants' },
  { value: '100%', label: 'Quality Assured' },
];

const productHighlights = [
  {
    name: 'Cotton Yarn',
    desc: 'Natural, breathable ring-spun and open-end cotton yarns.',
    image: 'https://www.sanathan.com/static/media/banner.02d60074.jpg',
    category: 'Yarn',
  },
  {
    name: 'Polyester Yarn',
    desc: 'High-tenacity DTY & FDY polyester for apparel and furnishings.',
    image: 'https://www.ganeshthread.com/images/products/polyester/polyester-weaving-yarn/110D-polyester-lichi-yarn.jpg',
    category: 'Yarn',
  },
  {
    name: 'Malai Dori',
    desc: 'Silky smooth satin cords in 50+ shades for crafts & trims.',
    image: 'https://image-cdn.ubuy.com/100-yards-satin-rattail-cord-2mm/400_400_100/65b89589233be16a973c4250.jpg',
    category: 'Yarn',
  },
  {
    name: 'Bath Towels',
    desc: '100% cotton, ultra-absorbent towels for retail & hospitality.',
    image: 'https://5.imimg.com/data5/MX/MY/MY-2/towels-500x500.jpg',
    category: 'Home Décor',
  },
];

const testimonials = [
  {
    quote: 'AP Textile has been our go-to supplier for cotton yarn for over 5 years. Consistent quality, timely delivery.',
    name: 'Rajesh Mehta',
    company: 'Mehta Fabrics, Surat',
  },
  {
    quote: 'The polyester yarn we get from AP Textile is incredibly durable and perfect for our high-speed looms.',
    name: 'Vikram Singh',
    company: 'Singh Weavers, Ludhiana',
  },
  {
    quote: 'Their satin cord yarn is excellent for our craft line. Great variety of colors and very competitive pricing.',
    name: 'Anil Verma',
    company: 'CraftWorld, Mumbai',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 z-0 opacity-25">
          <div className="relative w-full h-full">
            <video
              src="https://media.istockphoto.com/id/1482572266/video/weaving-factory.mp4?s=mp4-640x640-is&k=20&c=XXMDx98cgD_dRwnyWe4Uxdesj3mw2hE5QKeOfNRnePY="
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
            ></video>
            {/* Glassmorphism Watermark Cover */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 backdrop-blur-xl bg-navy/20 flex items-center justify-center border-y border-white/10">
              <span className="text-white/50 text-sm tracking-[0.5em] uppercase font-bold">AP Textile Industries</span>
            </div>
          </div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent z-0" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-xs font-bold tracking-widest uppercase rounded mb-6">
              Est. 2010 · Panipat, India
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Crafting Quality,<br />
              <span className="text-gold">Thread by Thread</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
              AP Textile Industries supplies premium cotton yarn, polyester yarn, satin cord yarn, and luxurious home décor products to businesses across India and worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-gold text-white font-bold rounded hover:brightness-110 transition-all duration-200 shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-gold py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <div className="text-sm font-medium text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Highlights ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What We Offer</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From industrial-grade yarn to premium home textiles — all under one roof, crafted for quality and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productHighlights.map((item, i) => (
              <Link href="/products" key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover block">
                <div className="relative h-48 w-full overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <span className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-navy text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <p className="text-gold font-semibold text-xs uppercase tracking-widest mt-4">Learn More →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl group">
              <video
                src="https://media.istockphoto.com/id/1164476293/video/tailoring-loom-with-rotating-sewing-reels-textile-factory-equipment.mp4?s=mp4-640x640-is&k=20&c=BVs6DpxwMzRiUBmRSiRg1HY9b4tg6z_yWj7YQtlUypg="
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
              {/* Glassmorphism Watermark Cover */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 backdrop-blur-xl bg-navy/20 z-0 flex items-center justify-center border-y border-white/10">
                <span className="text-white/40 text-sm tracking-[0.4em] uppercase font-bold">AP Textile Industries</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Since</p>
                  <p className="text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>2010</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-bold text-navy mt-2 mb-6">Over a Decade of Trust</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AP Textile Industries was born from a passion for quality craftsmanship. Founded in 2010 in Panipat's heart, we began as a small trading house and have grown into a reliable wholesale and export partner for clients across India and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we offer an extensive catalog — from high-grade cotton and polyester yarn to luxurious home décor products — all backed by rigorous quality checks and a commitment to timely delivery.
              </p>
              <Link href="/about" className="px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-gray-500">Trusted by businesses across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                <p className="text-3xl text-gold mb-4">&ldquo;</p>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">{t.quote}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Request samples, get bulk quotes, or simply ask about our product range — we reply within 24 hours.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-white font-bold rounded hover:brightness-110 transition-all shadow-xl">
            Request a Quote
          </Link>
        </div>
      </section>

    </div>
  );
}
