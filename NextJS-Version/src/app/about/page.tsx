import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | AP Textile Industries',
  description: 'Learn about AP Textile Industries — our story, mission, values, and commitment to quality since 2010.',
};

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '50+', label: 'Product Variants' },
  { value: '10+', label: 'States Served' },
];

const values = [
  {
    icon: '🤝',
    title: 'Integrity',
    text: 'We believe in honest, transparent dealings with all clients and partners — no compromise on commitments.',
  },
  {
    icon: '⭐',
    title: 'Quality',
    text: 'Every product undergoes strict quality checks to ensure it meets or exceeds industry specifications.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    text: 'We constantly expand our product portfolio to keep pace with evolving textile industry demands.',
  },
  {
    icon: '🌍',
    title: 'Reliability',
    text: 'Timely delivery and consistent stock availability make us the preferred partner for growing businesses.',
  },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── Page Header ── */}
      <section className="gradient-hero text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90" />
        <div className="relative z-10 container mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">About AP Textile</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Building lasting textile partnerships since 2010, from the heart of Panipat, Haryana.
          </p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl font-bold text-navy mt-2 mb-6">From a Small Trading House to a Trusted Exporter</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AP Textile Industries was established in 2010 in Panipat — the city of weavers. We started as a small yarn trading unit, sourcing premium Indian cotton and polyester yarn for local weavers and garment brands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, we expanded our portfolio to include satin cord yarn for specialty crafts, and a premium home décor line featuring ultra-soft bath towels and bath mats — all crafted to hospitality-grade standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we serve 200+ businesses across India, with an eye toward export markets in Southeast Asia and the Middle East. Our strength is in the relationships we build — with yarn mills, with buyers, and with the craftspeople who bring fabric to life.
              </p>
              <Link href="/contact" className="px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors">
                Get in Touch
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <video
                src="https://media.istockphoto.com/id/1353223216/video/sewing-spools-managed-by-a-factory-machine-in-a-close-up.mp4?s=mp4-640x640-is&k=20&c=FTWB4bqr9po-Gj5788ePTqcGEgiUhUo1RVKq7dp-Vxc="
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 backdrop-blur-xl bg-navy/20 z-0 flex items-center justify-center border-y border-white/10">
                <span className="text-white/40 text-sm tracking-[0.4em] uppercase font-bold">AP Textile Industries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="text-white">
                <div className="text-5xl font-bold text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <div className="text-gray-300 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-navy text-white p-10 rounded-2xl">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Mission</span>
              <h3 className="text-2xl font-bold mt-3 mb-4">Why We Do What We Do</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most reliable link in the textile supply chain — delivering excellence through superior quality products, transparent business practices, and a genuine commitment to client success.
              </p>
            </div>
            <div className="bg-cream border border-gray-200 p-10 rounded-2xl">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Vision</span>
              <h3 className="text-2xl font-bold text-navy mt-3 mb-4">Where We Are Headed</h3>
              <p className="text-gray-600 leading-relaxed">
                To expand our presence to 10+ countries by 2030, bringing the finest Indian textiles to global markets while supporting sustainable and ethical sourcing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-bold text-navy text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
