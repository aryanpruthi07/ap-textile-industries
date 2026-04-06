import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Products | AP Textile Industries',
  description: 'Explore our full range of cotton yarn, polyester yarn, satin cord yarn, bath towels, and bath mats.',
};

const yarnProducts = [
  {
    id: 'cotton-yarn',
    name: '100% Cotton Yarn',
    badge: 'Natural Fiber',
    desc: 'Premium quality ring-spun and open-end cotton yarn offering excellent breathability, strength and dyeing properties. Ideal for apparel and home textiles.',
    specs: ['Counts: Ne 10s to Ne 40s', 'Type: Combed & Carded', 'End Use: Knitting / Weaving'],
    image: 'https://www.sanathan.com/static/media/banner.02d60074.jpg',
  },
  {
    id: 'polyester-yarn',
    name: 'Polyester Yarn',
    badge: 'High Durability',
    desc: 'Versatile synthetic yarn known for exceptional strength, color retention and quick-dry properties. Ideal for sportswear, home furnishings and industrial fabrics.',
    specs: ['Counts: 20s to 80s', 'Type: DTY, FDY, POY', 'Luster: Semi-Dull & Bright', 'Denier: 50D to 600D'],
    image: 'https://www.ganeshthread.com/images/products/polyester/polyester-weaving-yarn/110D-polyester-lichi-yarn.jpg',
  },
  {
    id: 'malai-dori',
    name: 'Malai Dori',
    badge: 'Specialty Yarn',
    desc: 'Silky smooth, lustrous satin cords widely used in jewelry making, macramé, gift packaging, fashion accessories and garment trims.',
    specs: ['Diameter: 1mm to 5mm', 'Material: Polyester / Nylon', 'Finish: High-Sheen Satin'],
    image: 'https://image-cdn.ubuy.com/100-yards-satin-rattail-cord-2mm/400_400_100/65b89589233be16a973c4250.jpg',
  },
];

const homeDecorProducts = [
  {
    id: 'bath-towels',
    name: 'Bath Towels',
    badge: 'Home Décor',
    desc: 'Ultra-soft, highly absorbent 100% cotton bath towels. Ideal for retail, hospitality and bulk institutional use.',
    specs: ['Material: 100% Cotton', 'Type: Terry / Honeycomb', 'Quick-Dry Feature', 'Quick-Dry Feature', 'Colors: 20+ Shades'],
    image: 'https://5.imimg.com/data5/MX/MY/MY-2/towels-500x500.jpg',
  },
  {
    id: 'bath-mats',
    name: 'Bath Mats',
    badge: 'Home Décor',
    desc: 'Plush, anti-slip cotton bath mats designed for durability and comfort. Ideal for home use, hotels and spas. Machine washable and colour-fast.',
    specs: ['Material: 100% Cotton', 'Anti-Slip Backing', 'Machine Washable', 'Customization Available'],
    image: 'https://saralhome.com/cdn/shop/collections/image_45.webp?v=1762947879',
  },
];

function ProductCard({ product, reverse = false }: { product: typeof yarnProducts[0] & { badge: string }, reverse?: boolean }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover`}>
      <div className="md:w-2/5 min-h-[240px] relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-bold rounded-full">
          {product.badge}
        </span>
      </div>
      <div className="md:w-3/5 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-navy mb-3">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.desc}</p>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Specifications</p>
          <div className="flex flex-wrap gap-2">
            {product.specs.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-cream text-navy text-xs font-medium rounded-full border border-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={`/contact?product=${product.id}`}
          className="self-start px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-light transition-colors"
        >
          Inquire About This Product
        </Link>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div>
      {/* ── Header ── */}
      <section className="gradient-hero text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Textile background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Full Catalog</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">Our Products</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Yarn solutions for every industry and premium home textiles for every space.
          </p>
        </div>
      </section>

      {/* ── Yarn Products ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-3xl">🧵</span>
            <div>
              <h2 className="text-3xl font-bold text-navy">Yarn Products</h2>
              <p className="text-gray-500 text-sm mt-1">Industrial & specialty yarn for textile brands and artisans</p>
            </div>
          </div>
          <div className="grid gap-8">
            {yarnProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Home Décor ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-3xl">🛁</span>
            <div>
              <h2 className="text-3xl font-bold text-navy">Home Décor</h2>
              <p className="text-gray-500 text-sm mt-1">Premium 100% cotton home textiles for retail, hospitality and bulk orders</p>
            </div>
          </div>
          <div className="grid gap-8">
            {homeDecorProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom CTA ── */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We take custom orders — whether it's a specific yarn count, towel GSM, or a unique color. Contact our sales team and we'll make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gold text-white font-bold rounded hover:brightness-110 transition-all"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
