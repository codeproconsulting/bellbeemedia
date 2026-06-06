import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'
import { type Handle } from 'remix/ui'
import { type WPBlogPost } from '../data/wordpress.ts'

const GRADIENT_PALETTE = [
  'from-sky-400 to-indigo-500',
  'from-emerald-400 to-teal-500',
  'from-rose-400 to-orange-500',
  'from-violet-400 to-pink-500',
  'from-blue-400 to-cyan-500',
  'from-amber-400 to-orange-500',
]

const AVATAR_COLORS = [
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-purple-500',
  'bg-rose-500',
  'bg-indigo-500',
]

function gradientFor(index: number) {
  return GRADIENT_PALETTE[index % GRADIENT_PALETTE.length]
}

function avatarColorFor(index: number) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length]
}

interface BlogsPageProps {
  posts: WPBlogPost[]
}

export function BlogsPage(handle: Handle<BlogsPageProps>) {
  // Ensure we always have something to display
  const displayPosts = handle.props.posts.length > 0 ? handle.props.posts : []
  const featured = displayPosts[0]
  const regularPosts = displayPosts.slice(1)

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blogs & Insights | Bell Bee Media",
    "description": "Actionable digital marketing guides, data-driven insights, and industry trends from the Bell Bee Media team.",
    "url": "https://bellbeemedia.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "BellBee Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bellbeemedia.com/Logo.svg"
      }
    },
    "hasPart": displayPosts.map(post => {
      let isoDate = "";
      try {
        const d = new Date(post.date);
        if (!isNaN(d.getTime())) {
          isoDate = d.toISOString().split('T')[0];
        }
      } catch {
        // Fallback
      }
      return {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.featuredImageUrl || "https://bellbeemedia.com/og-image.jpg",
        "datePublished": isoDate || undefined,
        "author": {
          "@type": "Person",
          "name": post.author.name
        },
        "url": `https://bellbeemedia.com/blogs/${post.slug}`
      };
    })
  };

  return () => (
    <Layout 
      title="Blogs & Insights | Bell Bee Media" 
      description="Actionable digital marketing guides, data-driven insights, and industry trends from the Bell Bee Media team."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      <div class="bg-surface-1 min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-6xl">

          {/* Header */}
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="flex justify-center mb-6">
              <PillBadge icon="ph-notebook" text="Insights & Strategy" />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-8 tracking-tight">
              The <span class="text-primary">Bell Bee Blog</span>
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed">
              Actionable guides, data-driven insights, and industry trends to help you navigate and win the digital landscape.
            </p>
          </div>

          {featured ? (
            <>
              {/* Featured Article */}
              <a href={`/blogs/${featured.slug}`} class="block bg-white rounded-[3rem] border border-surface-2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow grid grid-cols-1 lg:grid-cols-12 mb-16 group">
                <div class={`lg:col-span-7 h-80 lg:h-auto bg-gradient-to-tr ${gradientFor(0)} p-12 flex flex-col justify-between text-white relative`}>
                  <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] top-0 left-0"></div>
                  <span class="relative z-10 px-4 py-1.5 bg-white/20 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider self-start">
                    Featured Article
                  </span>
                  <div class="relative z-10 mt-12">
                    <i class="ph ph-sparkles text-5xl text-white/50 block mb-4"></i>
                    <div class="text-white/80 text-sm font-semibold tracking-wider uppercase mb-1">{featured.category}</div>
                    <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">
                      {featured.title}
                    </h2>
                  </div>
                </div>

                <div class="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-4 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-6">
                      <span>{featured.date}</span>
                      <span class="w-1.5 h-1.5 rounded-full bg-surface-3"></span>
                      <span>{featured.readTime}</span>
                    </div>
                    <p class="text-lg text-text-secondary leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div class="flex items-center gap-4 pt-6 border-t border-surface-2">
                    <div class={`w-12 h-12 rounded-full ${avatarColorFor(0)} flex items-center justify-center text-white font-bold`}>
                      {featured.author.initials}
                    </div>
                    <div>
                      <h4 class="font-bold text-surface-dark0">{featured.author.name}</h4>
                      <p class="text-xs text-text-secondary">{featured.author.role}</p>
                    </div>
                    <div class="ml-auto">
                      <span class="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Read <i class="ph ph-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {regularPosts.map((post, i) => (
                    <a href={`/blogs/${post.slug}`} class="flex flex-col h-full bg-white rounded-[2.5rem] border border-surface-2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                      <div class={`h-48 bg-gradient-to-tr ${gradientFor(i + 1)} p-8 flex flex-col justify-between text-white relative`}>
                        <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] top-0 left-0"></div>
                        <span class="relative z-10 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider self-start">
                          {post.category}
                        </span>
                        <h3 class="relative z-10 text-xl font-bold leading-snug">
                          {post.title}
                        </h3>
                      </div>

                      <div class="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <div class="flex items-center gap-3 text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">
                            <span>{post.date}</span>
                            <span class="w-1 h-1 rounded-full bg-surface-3"></span>
                            <span>{post.readTime}</span>
                          </div>
                          <p class="text-text-secondary leading-relaxed mb-6">
                            {post.excerpt}
                          </p>
                        </div>

                        <div class="flex items-center gap-3 pt-6 border-t border-surface-2 mt-auto">
                          <div class={`w-10 h-10 rounded-full ${avatarColorFor(i + 1)} flex items-center justify-center text-white text-sm font-bold`}>
                            {post.author.initials}
                          </div>
                          <div>
                            <h4 class="font-bold text-surface-dark0 text-sm">{post.author.name}</h4>
                            <p class="text-xs text-text-secondary">{post.author.role}</p>
                          </div>
                          <div class="ml-auto">
                            <span class="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                              Read <i class="ph ph-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div class="text-center py-24 text-text-secondary">
              <i class="ph ph-notebook text-6xl mb-4 block opacity-30"></i>
              <p class="text-xl">No posts yet. Check back soon!</p>
            </div>
          )}

          {/* Newsletter Section */}
          <div class="mt-24 text-center bg-white p-12 md:p-20 rounded-[3rem] border border-surface-2 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            <div class="relative z-10 max-w-2xl mx-auto">
              <h2 class="text-3xl font-bold text-surface-dark0 mb-4">
                Get growth insights delivered to your inbox
              </h2>
              <p class="text-lg text-text-secondary mb-8">
                Subscribe to our newsletter and join marketers and founders receiving our weekly digital strategy playbook.
              </p>
              <form class="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  class="flex-grow px-6 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0"
                />
                <button type="submit" class="px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/20 text-lg whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
