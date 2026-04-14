import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services — Gaiada',
  description: 'AI-powered digital services by Gaiada — websites, automation, and intelligent agents.',
}

const services = [
  {
    title: 'AI Agent Development',
    description:
      'Custom AI agents that handle real business tasks — email management, calendar scheduling, document analysis, and client communication. Built on proven LLM architectures and deployed to your existing workflow.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['ChatGPT', 'Claude', 'Telegram Bots', 'Workflow Automation'],
  },
  {
    title: 'Website Design & Development',
    description:
      'Modern, fast, SEO-optimised websites built with Next.js and headless CMS platforms. From business landing pages to full e-commerce stores — designed to convert visitors into customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Payload CMS', 'Responsive', 'SEO'],
  },
  {
    title: 'Content & Copywriting',
    description:
      'AI-assisted content creation for blogs, ad campaigns, landing pages, and social media. We combine human editorial judgement with AI speed to produce content that sounds right and ranks well.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    tags: ['Blog Posts', 'Ad Copy', 'SEO Content', 'Social Media'],
  },
  {
    title: 'Business Process Automation',
    description:
      'Eliminate repetitive manual work by connecting your tools with intelligent automation. CRM updates, invoice processing, lead routing, report generation — if it follows a pattern, we can automate it.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['API Integration', 'Zapier', 'n8n', 'Custom Pipelines'],
  },
  {
    title: 'Document & Data Analysis',
    description:
      'Extract insights from PDFs, spreadsheets, contracts, and reports using AI-powered analysis. Get structured summaries, data extraction, and trend identification without manual review.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    tags: ['PDF Analysis', 'Excel Processing', 'Data Extraction', 'Summaries'],
  },
  {
    title: 'Digital Strategy Consulting',
    description:
      'Not sure where AI fits in your business? We audit your current workflows, identify high-impact automation opportunities, and build a phased roadmap to get you there without disrupting operations.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    tags: ['AI Readiness', 'Workflow Audit', 'Roadmapping', 'ROI Analysis'],
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'End-to-end online store setup — product catalogues, payment gateways, inventory management, and order fulfilment. We build shops that look great and handle real transaction volume without breaking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Shopify', 'WooCommerce', 'Payments', 'Inventory'],
  },
  {
    title: 'Social Media Management',
    description:
      'Strategic content planning, scheduling, and performance tracking across Instagram, Facebook, LinkedIn, and TikTok. We pair AI-generated drafts with human curation to keep your brand voice consistent.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
    tags: ['Instagram', 'LinkedIn', 'Content Calendar', 'Analytics'],
  },
  {
    title: 'Email Marketing & CRM',
    description:
      'Targeted email campaigns, automated drip sequences, and CRM integration that turns leads into loyal customers. We design templates, write copy, segment audiences, and track every open and click.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
    tags: ['Mailchimp', 'HubSpot', 'Drip Campaigns', 'Lead Nurturing'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href="https://www.gaiada.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-[#d6c5a8]/50 bg-white/60 overflow-hidden hover:shadow-[0_25px_60px_rgba(35,24,15,0.12)] transition-all hover:-translate-y-1 group"
            >
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-[#1d140d] mb-3 group-hover:text-[#7d633d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5a4631] leading-7 flex-1 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
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
