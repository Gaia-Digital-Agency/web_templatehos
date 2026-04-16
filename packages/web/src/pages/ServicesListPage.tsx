import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { usePageData } from '@/hooks/usePageData'

export const ServicesListPage: React.FC = () => {
  const data = usePageData()
  const services: any[] = data?.services?.docs || []

  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      <Helmet>
        <title>Services — Gaiada</title>
        <meta name="description" content="AI-powered digital services by Gaiada — websites, automation, and intelligent agents." />
      </Helmet>

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          Our Services
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          Smart digital services that make your business work harder.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          Gaiada builds AI agents, websites, and automation systems for businesses ready to operate smarter. Every service is designed to save time, reduce cost, and create real competitive advantage.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container pb-24">
        {services.length === 0 ? (
          <p className="text-[#5a4631]">Loading services…</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => {
              const img = service.image?.url || service.image?.sizes?.medium?.url
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="flex flex-col rounded-2xl border border-[#d6c5a8]/50 bg-white/60 overflow-hidden hover:shadow-[0_25px_60px_rgba(35,24,15,0.12)] transition-all hover:-translate-y-1 group"
                >
                  {img && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={img}
                        alt={service.image?.alt || service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-semibold text-[#1d140d] mb-3 group-hover:text-[#7d633d] transition-colors">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-sm text-[#5a4631] leading-7 flex-1">{service.description}</p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* Victor CTA */}
      <section className="bg-[#1f1610] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase">Meet Victor</p>
              <h2 className="mt-4 text-3xl font-bold text-white mb-4">
                This entire site was managed by our AI agent.
              </h2>
              <p className="text-white/70 leading-8 mb-6">
                Victor is Gaiada&apos;s general-purpose AI assistant. He handles email, manages calendars, publishes blog posts, analyses documents, and writes marketing copy — all through a simple chat interface. This showcase site is living proof of what an AI agent can do for your business.
              </p>
              <a
                href="https://www.gaiada.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#f0c278] px-8 py-3 text-sm font-medium text-[#1f1610] hover:bg-[#e6b56a] transition-colors"
              >
                Learn More at gaiada.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase mb-6">Victor Can</p>
              <ul className="space-y-4">
                {[
                  'Send and manage email via Gmail',
                  'Create and update calendar events',
                  'Publish blog posts to your CMS',
                  'Analyse PDFs, Excel, and Word files',
                  'Write ad copy and SEO content',
                  'Manage files on Google Drive',
                  'Describe and analyse images',
                  'Draft professional letters',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#f0c278]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container py-16 md:py-24 text-center">
        <h2 className="text-3xl font-bold text-[#1d140d] mb-4">Ready to get started?</h2>
        <p className="text-lg text-[#5a4631] mb-8 max-w-xl mx-auto">
          Tell us what you need and we will scope a solution that fits your business, timeline, and budget.
        </p>
        <a
          href="https://www.gaiada.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#1d140d] px-8 py-3 text-sm font-medium text-white hover:bg-[#2a1f15] transition-colors"
        >
          Get in Touch at gaiada.com
        </a>
      </section>
    </main>
  )
}
