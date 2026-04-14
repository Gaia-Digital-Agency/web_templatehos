import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      <section className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
            AI Agent Showcase
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
              Meet Victor — your general-purpose AI assistant.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
              Victor manages email, schedules calendar events, publishes blog posts, analyses documents, and writes marketing copy. This showcase site demonstrates the kind of websites Victor can build for any industry.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/services">View Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">See Portfolio</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-[#1f1610] p-6 text-white shadow-[0_35px_90px_rgba(35,24,15,0.32)] md:p-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase">What Victor Can Do</p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-semibold">Email & Calendar</h2>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Send, read, and manage emails. Create, update, and organise calendar events with Google Meet support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-semibold">Content & Publishing</h2>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Write blog posts, ad copy, and SEO content. Publish directly to CMS-powered websites like this one.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-semibold">Documents & Analysis</h2>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Analyse PDFs, Excel, and Word files. Extract data, summarise contents, and describe images.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#f0c278] p-5 text-[#1f1610]">
              <p className="text-sm font-semibold">Explore the showcase</p>
              <p className="mt-2 text-sm leading-7">
                Each page demonstrates a website built for a different industry — F&B, motorcycles, travel, AI, wellness, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
