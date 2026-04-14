import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — NeuralArc',
  description: 'Insights on AI, machine learning, and the future of intelligent systems.',
}

const featuredPost = {
  title: 'Why On-Device AI Will Reshape the Next Decade of Software',
  excerpt:
    'Cloud-first AI is hitting its ceiling. Latency, privacy regulations, and bandwidth costs are pushing inference to the edge. We break down what this means for developers building the next generation of intelligent applications.',
  date: 'April 8, 2026',
  category: 'AI Infrastructure',
  readTime: '9 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
}

const posts = [
  {
    title: 'Building RAG Pipelines That Actually Work in Production',
    excerpt:
      'Retrieval-augmented generation sounds simple in theory. In practice, chunking strategies, embedding drift, and reranking pipelines make or break your results. Here is what we learned deploying RAG at scale.',
    date: 'April 2, 2026',
    category: 'Engineering',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
  },
  {
    title: 'The Rise of Agentic AI: From Chatbots to Autonomous Workflows',
    excerpt:
      'AI agents that plan, use tools, and execute multi-step tasks are moving from research demos to production systems. We examine the architecture patterns making this possible.',
    date: 'March 26, 2026',
    category: 'Product',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
  },
  {
    title: 'Fine-Tuning vs Prompting: When Each Strategy Wins',
    excerpt:
      'Not every problem needs fine-tuning, and not every prompt chain scales. We share a decision framework based on 50+ client deployments across industries.',
    date: 'March 19, 2026',
    category: 'Machine Learning',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=400&fit=crop',
  },
  {
    title: 'How We Cut Inference Costs by 73% Without Sacrificing Quality',
    excerpt:
      'Model distillation, quantisation, and smart batching reduced our GPU bill from $42K to $11K per month. Here is the playbook with real numbers.',
    date: 'March 12, 2026',
    category: 'Engineering',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    title: 'Responsible AI Is Not a Checkbox — It Is an Architecture Decision',
    excerpt:
      'Bias detection, explainability layers, and guardrails need to be designed in from day one. We walk through how NeuralArc builds safety into the model lifecycle.',
    date: 'March 5, 2026',
    category: 'AI Ethics',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop',
  },
  {
    title: 'Multimodal Models in Enterprise: Beyond the Hype',
    excerpt:
      'Vision-language models are impressive in demos, but enterprise adoption requires document parsing accuracy, OCR fallbacks, and audit trails. Here is what real deployment looks like.',
    date: 'February 27, 2026',
    category: 'Product',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3efe4_0%,#f7edd9_28%,#ffffff_74%)]">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="inline-flex rounded-full border border-[#d6c5a8] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#7d633d] uppercase">
          NeuralArc Blog
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
          Thinking out loud about AI, engineering, and what comes next.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
          NeuralArc builds applied AI systems for enterprises. Our blog shares what we learn along the way — from architecture decisions and cost optimisation to the ethical questions that keep us up at night.
        </p>
      </section>

      {/* Featured Post */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border border-[#d6c5a8]/50 bg-white/60 overflow-hidden shadow-[0_25px_60px_rgba(35,24,15,0.1)]">
          <div className="relative aspect-video lg:aspect-auto">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex gap-3 mb-4">
              <span className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]">
                {featuredPost.category}
              </span>
              <span className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]">
                {featuredPost.readTime}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1d140d] mb-4 md:text-3xl">{featuredPost.title}</h2>
            <p className="text-[#5a4631] leading-7 mb-4">{featuredPost.excerpt}</p>
            <p className="text-sm text-[#8a6b3f]">{featuredPost.date}</p>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="container pb-24">
        <h2 className="text-2xl font-bold text-[#1d140d] mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-[#d6c5a8]/50 bg-white/60 overflow-hidden hover:shadow-[0_15px_40px_rgba(35,24,15,0.1)] transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex gap-3 mb-3">
                  <span className="inline-block rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-medium text-[#7d633d]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#8a6b3f] self-center">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1d140d] mb-2">{post.title}</h3>
                <p className="text-sm text-[#5a4631] leading-7 flex-1">{post.excerpt}</p>
                <p className="mt-4 text-xs text-[#8a6b3f]">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#1f1610] py-16 md:py-24">
        <div className="container text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f0c278] uppercase">Stay in the loop</p>
          <h2 className="mt-4 text-3xl font-bold text-white mb-4">Get our best thinking, delivered weekly.</h2>
          <p className="text-white/70 mb-8">
            No spam, no fluff. One email per week with our latest articles on AI engineering, product strategy, and the research papers worth reading.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#f0c278]/50"
              readOnly
            />
            <button className="rounded-md bg-[#f0c278] px-6 py-3 text-sm font-medium text-[#1f1610] hover:bg-[#e6b56a] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
