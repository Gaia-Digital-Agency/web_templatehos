import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Careers — Meridian Travel Co.',
  description: 'Join the team that turns dream trips into real itineraries.',
}

const openings = [
  {
    department: 'Travel Planning',
    roles: [
      {
        title: 'Senior Travel Consultant',
        location: 'Singapore',
        type: 'Full-Time',
        description:
          'Work directly with clients to design bespoke multi-destination itineraries. You will handle high-value bookings, negotiate with hotel partners, and coordinate complex logistics across time zones.',
      },
      {
        title: 'Adventure Trip Coordinator',
        location: 'Bali, Indonesia',
        type: 'Full-Time',
        description:
          'Plan and manage adventure travel packages including trekking, diving, and wildlife tours. You will liaise with local guides and ensure safety protocols are met for every excursion.',
      },
    ],
  },
  {
    department: 'Marketing & Growth',
    roles: [
      {
        title: 'Content & Social Media Lead',
        location: 'Remote',
        type: 'Full-Time',
        description:
          'Own our social media channels and travel blog. Create destination guides, client travel stories, and visual content that inspires people to book. Photography skills a strong plus.',
      },
      {
        title: 'Partnerships Manager',
        location: 'Kuala Lumpur',
        type: 'Full-Time',
        description:
          'Build and maintain relationships with airlines, hotel groups, and experience providers. Negotiate exclusive rates and co-marketing opportunities that give our clients an edge.',
      },
    ],
  },
  {
    department: 'Operations',
    roles: [
      {
        title: 'Client Experience Specialist',
        location: 'Singapore',
        type: 'Full-Time',
        description:
          'Be the on-trip support contact for our travellers. Handle rebookings, flight disruptions, and last-minute changes with calm efficiency. Available for rotating on-call shifts.',
      },
      {
        title: 'Finance & Bookings Analyst',
        location: 'Remote',
        type: 'Part-Time',
        description:
          'Manage invoicing, commission reconciliation, and booking platform data. Produce weekly revenue reports and flag pricing anomalies before they impact margins.',
      },
    ],
  },
]

const perks = [
  { title: 'Annual Travel Credit', description: 'Every team member receives a yearly travel allowance to explore a new destination — on us.' },
  { title: 'Flexible Remote Work', description: 'Work from wherever you are. We have team members across four countries and three time zones.' },
  { title: 'Familiarisation Trips', description: 'Join FAM trips to partner hotels and resorts so you can recommend destinations with first-hand knowledge.' },
  { title: 'Learning Budget', description: 'Annual budget for courses, certifications, and conferences. We invest in people who invest in themselves.' },
]

export default function CareersPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          We&apos;re Hiring
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          Help people see the world. Build your career while you&apos;re at it.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          Meridian Travel Co. is a boutique travel agency that designs custom itineraries for discerning travellers. We are growing fast and looking for passionate people who believe travel should be personal, not packaged.
        </p>
      </section>

      {/* Hero Image */}
      <section className="container pb-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(35,24,15,0.15)]">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=600&fit=crop"
            alt="Meridian Travel team"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Open Positions */}
      <section className="container pb-24">
        <h2 className="text-3xl font-bold mb-4 text-[#1d140d]">Open Positions</h2>
        <p className="text-lg text-[#5a4631] mb-12">Find a role that fits your skills and wanderlust.</p>

        <div className="flex flex-col gap-16">
          {openings.map((dept) => (
            <div key={dept.department} className="flex flex-col gap-6">
              <div className="border-b border-[#d6c5a8] pb-4">
                <h3 className="text-2xl font-bold text-[#1d140d]">{dept.department}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.roles.map((role) => (
                  <div
                    key={role.title}
                    className="flex flex-col gap-3 border border-[#d6c5a8]/50 p-6 rounded-2xl bg-white/60 hover:shadow-[0_15px_40px_rgba(35,24,15,0.1)] transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-[#1d140d]">{role.title}</h4>
                    <div className="flex gap-3">
                      <span className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]">
                        {role.location}
                      </span>
                      <span className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]">
                        {role.type}
                      </span>
                    </div>
                    <p className="text-[#5a4631] leading-7 text-sm">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="bg-[#1f1610] py-16 md:py-24">
        <div className="container">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase">Why Meridian</p>
          <h2 className="mt-4 text-3xl font-bold text-white mb-12">Perks that go beyond the office.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{perk.title}</h4>
                <p className="text-sm text-white/70 leading-7">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d140d] mb-4">Don&apos;t see your role?</h2>
          <p className="text-lg text-[#5a4631] mb-8">
            We are always interested in hearing from talented people. Send us your CV and a short note about what excites you about travel — we will keep you in mind for future openings.
          </p>
          <a
            href="mailto:careers@meridiantravel.co"
            className="inline-flex items-center justify-center rounded-md bg-[#1d140d] px-8 py-3 text-sm font-medium text-white hover:bg-[#2a1f15] transition-colors"
          >
            Send Your Application
          </a>
        </div>
      </section>
    </main>
  )
}
