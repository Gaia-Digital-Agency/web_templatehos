import { Helmet } from 'react-helmet-async'

const values = [
  {
    title: 'Built by Hand, Not by Committee',
    description:
      'Every motorcycle that leaves our workshop is shaped, welded, and finished by a single lead builder. No assembly lines, no rush jobs. Each bike carries the builder\'s signature on the frame — a promise that one person saw it through from bare metal to first ride.',
  },
  {
    title: 'Engineering Meets Art',
    description:
      'We treat each build as a design problem. Frame geometry, exhaust routing, electrical integration — they all have to work mechanically and look intentional. A custom bike should feel fast standing still.',
  },
  {
    title: 'Ride It, Don\'t Display It',
    description:
      'Our builds are meant for the road, not a showroom pedestal. We stress-test every weld, dial in suspension for real riding conditions, and set up ergonomics around the actual owner — not a generic mannequin.',
  },
]

const team = [
  {
    name: 'Marcus Tan',
    role: 'Founder & Lead Builder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Jake Reeves',
    role: 'Fabrication Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sofia Hartmann',
    role: 'Paint & Finish Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Rajan Patel',
    role: 'Engine & Tuning Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      <Helmet>
        <title>About — Ironside Customs</title>
        <meta name="description" content="Hand-built motorcycles for riders who refuse to blend in." />
      </Helmet>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          About Ironside
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          We build motorcycles the way they were meant to be built — one at a time.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          Ironside Customs is a boutique motorcycle workshop specialising in ground-up custom builds, restorations, and performance modifications. Founded in 2016, we work out of a 4,000 sq ft shop and take on roughly 20 commissions per year.
        </p>
      </section>

      {/* Workshop Image */}
      <section className="container pb-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(35,24,15,0.15)]">
          <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1400&h=600&fit=crop" alt="Ironside Customs workshop" className="object-cover absolute inset-0 w-full h-full" sizes="100vw" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* Values */}
      <section className="container pb-24">
        <h2 className="text-3xl font-bold mb-12 text-[#1d140d]">What We Stand For</h2>
        <div className="flex flex-col gap-24">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : 'md:order-1'}>
                <h3 className="text-2xl font-bold mb-4 text-[#1d140d]">{item.title}</h3>
                <p className="text-lg text-[#5a4631] leading-8">{item.description}</p>
              </div>
              <div
                className={`aspect-video relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(35,24,15,0.15)] ${i % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <img src={
                    [
                      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&h=450&fit=crop',
                      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=450&fit=crop',
                      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=450&fit=crop',
                    ][i]
                  } className="object-cover absolute inset-0 w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1f1610] py-16 md:py-24">
        <div className="container">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase">The Crew</p>
          <h2 className="mt-4 text-3xl font-bold text-white mb-12">Meet the builders behind every bike.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <img src={member.image} className="object-cover absolute inset-0 w-full h-full" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" decoding="async" />
                </div>
                <h4 className="font-semibold text-white">{member.name}</h4>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '8', label: 'Years Running' },
            { value: '160+', label: 'Builds Completed' },
            { value: '12', label: 'Show Awards' },
            { value: '4', label: 'Master Builders' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-[#1d140d] md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-[#7d633d] tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
