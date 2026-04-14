import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio — Flavour Collective',
  description: 'Showcasing our family of food & beverage brands across Southeast Asia.',
}

const brands = [
  {
    name: 'Nori & Co.',
    description:
      'A modern Japanese-fusion bistro chain with 14 locations across Singapore and Kuala Lumpur. Known for hand-rolled sushi bowls and matcha-infused desserts, Nori & Co. brings casual Tokyo dining culture to the heart of Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=800&fit=crop',
    tag: 'Japanese Fusion',
  },
  {
    name: 'The Bread Republic',
    description:
      'An artisan bakery and brunch destination serving 26 cities. Every loaf is made with locally sourced flour and 48-hour fermented sourdough starters. Their signature croissant flights have become an Instagram phenomenon.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop',
    tag: 'Artisan Bakery',
  },
  {
    name: 'Wok & Flame',
    description:
      'High-energy open-kitchen Chinese street food, reimagined for the modern diner. The concept brings the theatrics of wok hei cooking to a fast-casual format with locations in food halls and standalone stores.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=800&fit=crop',
    tag: 'Chinese Street Food',
  },
  {
    name: 'Verde Kitchen',
    description:
      'A plant-forward restaurant chain proving that healthy food does not mean boring food. Verde sources ingredients from partner farms within 100km of each location, offering seasonal menus that change every eight weeks.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop',
    tag: 'Plant-Forward',
  },
  {
    name: 'Copperline Coffee',
    description:
      'Specialty third-wave coffee roasters with a network of 40 cafes. Each outlet features single-origin beans roasted in micro-batches at their central roastery. Their barista training academy has become an industry benchmark.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=800&fit=crop',
    tag: 'Specialty Coffee',
  },
  {
    name: 'Mariscos Bay',
    description:
      'Coastal seafood dining that celebrates the catch of the day. With open-air restaurants in Bali, Phuket, and Langkawi, Mariscos Bay serves ocean-to-table dishes with a Latin American twist and craft cocktail pairings.',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&h=800&fit=crop',
    tag: 'Seafood & Cocktails',
  },
]

export default function PortfolioPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          Our Portfolio
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          A family of brands built around great food and bold ideas.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          Flavour Collective manages six distinct F&B brands across Southeast Asia — from specialty coffee roasters to coastal seafood dining. Each concept is designed to create memorable experiences around the table.
        </p>
      </section>

      {/* Portfolio Items */}
      <section className="container pb-24">
        <div className="flex flex-col gap-24">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : 'md:order-1'}>
                <span className="inline-block rounded-full border border-[#d6c5a8] bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#8a6b3f] uppercase mb-4">
                  {brand.tag}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-[#1d140d]">{brand.name}</h3>
                <p className="text-lg text-[#5a4631] leading-8">{brand.description}</p>
              </div>
              <div
                className={`aspect-square relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(35,24,15,0.15)] ${i % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1f1610] py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6', label: 'Brands' },
              { value: '120+', label: 'Locations' },
              { value: '14', label: 'Cities' },
              { value: '3,200+', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#f0c278] md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70 tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
