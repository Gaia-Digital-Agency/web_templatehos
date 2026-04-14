import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact — Solace Wellness',
  description: 'Reach out to begin your healing journey with Solace Wellness.',
}

const services = [
  { name: 'Holistic Massage Therapy', icon: '🌿' },
  { name: 'Sound Healing Sessions', icon: '🔔' },
  { name: 'Guided Meditation Retreats', icon: '🧘' },
  { name: 'Reiki & Energy Work', icon: '✨' },
  { name: 'Breathwork Workshops', icon: '🌬️' },
  { name: 'Herbal Consultation', icon: '🍃' },
]

const locations = [
  {
    name: 'Solace Studio — Tiong Bahru',
    address: '78 Guan Chuan Street, #02-15, Singapore 160078',
    hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
    phone: '+65 6234 5678',
  },
  {
    name: 'Solace Retreat — Ubud',
    address: 'Jl. Bisma No. 22, Ubud, Gianyar, Bali 80571',
    hours: 'Daily: 8:00 AM – 9:00 PM',
    phone: '+62 361 908 234',
  },
]

export default function ContactPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          Get in Touch
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          Your journey toward balance starts with a conversation.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          Solace Wellness offers holistic healing services designed to restore mind, body, and spirit. Whether you are managing stress, recovering from injury, or simply seeking stillness — we are here to help you find your centre.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
          {/* Form */}
          <div className="rounded-2xl border border-[#d6c5a8]/50 bg-white/60 p-8 md:p-10 shadow-[0_25px_60px_rgba(35,24,15,0.08)]">
            <h2 className="text-2xl font-bold text-[#1d140d] mb-2">Send Us a Message</h2>
            <p className="text-[#5a4631] mb-8">Tell us what you are looking for and we will get back to you within 24 hours.</p>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1d140d] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Maya"
                    className="w-full rounded-lg border border-[#d6c5a8] bg-white px-4 py-3 text-sm text-[#1d140d] placeholder:text-[#b5a48a] focus:outline-none focus:ring-2 focus:ring-[#d6c5a8]"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d140d] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Chen"
                    className="w-full rounded-lg border border-[#d6c5a8] bg-white px-4 py-3 text-sm text-[#1d140d] placeholder:text-[#b5a48a] focus:outline-none focus:ring-2 focus:ring-[#d6c5a8]"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d140d] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="maya@example.com"
                  className="w-full rounded-lg border border-[#d6c5a8] bg-white px-4 py-3 text-sm text-[#1d140d] placeholder:text-[#b5a48a] focus:outline-none focus:ring-2 focus:ring-[#d6c5a8]"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d140d] mb-2">Service Interest</label>
                <select
                  className="w-full rounded-lg border border-[#d6c5a8] bg-white px-4 py-3 text-sm text-[#b5a48a] focus:outline-none focus:ring-2 focus:ring-[#d6c5a8]"
                  disabled
                >
                  <option>Select a service...</option>
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d140d] mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your wellness goals or any questions you have..."
                  className="w-full rounded-lg border border-[#d6c5a8] bg-white px-4 py-3 text-sm text-[#1d140d] placeholder:text-[#b5a48a] focus:outline-none focus:ring-2 focus:ring-[#d6c5a8] resize-none"
                  readOnly
                />
              </div>
              <button
                type="button"
                className="self-start rounded-md bg-[#1d140d] px-8 py-3 text-sm font-medium text-white hover:bg-[#2a1f15] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col gap-8">
            {/* Services Quick List */}
            <div className="rounded-2xl border border-[#d6c5a8]/50 bg-white/60 p-8">
              <h3 className="text-lg font-semibold text-[#1d140d] mb-4">Our Healing Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center gap-3 rounded-xl bg-[#f3efe4]/60 px-4 py-3"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-sm font-medium text-[#1d140d]">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-[#d6c5a8]/50 bg-white/60 p-8"
              >
                <h3 className="text-lg font-semibold text-[#1d140d] mb-3">{loc.name}</h3>
                <div className="flex flex-col gap-2 text-sm text-[#5a4631]">
                  <p>{loc.address}</p>
                  <p>{loc.hours}</p>
                  <p className="font-medium text-[#1d140d]">{loc.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Image */}
      <section className="container pb-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(35,24,15,0.15)]">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&h=600&fit=crop"
            alt="Solace Wellness studio"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#1f1610] py-16 md:py-24">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase mb-6">Our Philosophy</p>
          <blockquote className="text-2xl font-semibold text-white leading-10 md:text-3xl">
            &ldquo;Healing is not about fixing what is broken. It is about reconnecting with what was always whole.&rdquo;
          </blockquote>
          <p className="mt-6 text-white/60 text-sm">— Dr. Lina Ramirez, Founding Practitioner</p>
        </div>
      </section>
    </main>
  )
}
