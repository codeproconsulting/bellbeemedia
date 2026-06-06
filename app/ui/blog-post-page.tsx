import { Layout } from './layout.tsx'
import { routes } from '../routes.ts'
import { type Handle } from 'remix/ui'
import { type WPBlogPostFull } from '../data/wordpress.ts'

interface BlogPostPageProps {
  post: WPBlogPostFull
}

export function BlogPostPage(handle: Handle<BlogPostPageProps>) {
  const { post } = handle.props

  let isoDate = "";
  try {
    const d = new Date(post.date);
    if (!isNaN(d.getTime())) {
      isoDate = d.toISOString().split('T')[0];
    }
  } catch {
    // Fallback
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImageUrl || "https://bellbeemedia.com/og-image.jpg",
    "datePublished": isoDate || undefined,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "BellBee Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bellbeemedia.com/Logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bellbeemedia.com/blogs/${post.slug}`
    }
  };

  return () => (
    <Layout
      title={`${post.title} | Bell Bee Media Blog`}
      description={post.excerpt}
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      <div class="bg-white min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-4xl">

          {/* Breadcrumb */}
          <nav class="flex items-center gap-2 text-sm text-text-secondary mb-12 pt-8">
            <a href={routes.blogs.href()} class="hover:text-primary transition-colors">Blog</a>
            <i class="ph ph-caret-right text-xs"></i>
            <span class="text-surface-dark0 font-medium truncate max-w-[260px]">{post.title}</span>
          </nav>

          {/* Header */}
          <header class="mb-12">
            <span class="inline-block text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-5">
              {post.category}
            </span>
            <h1 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div class="flex items-center gap-6 text-sm text-text-secondary">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  {post.author.initials}
                </div>
                <span>{post.author.name}</span>
                <span class="text-text-secondary/50">·</span>
                <span>{post.author.role}</span>
              </div>
              <span class="w-1 h-1 rounded-full bg-surface-3"></span>
              <span>{post.date}</span>
              <span class="w-1 h-1 rounded-full bg-surface-3"></span>
              <span class="flex items-center gap-1">
                <i class="ph ph-clock"></i> {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image (if exists) */}
          {post.featuredImageUrl && (
            <div class="rounded-3xl overflow-hidden mb-12 shadow-xl">
              <img
                src={post.featuredImageUrl}
                alt={post.title}
                class="w-full h-72 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Post Content — WordPress sanitized HTML rendered server-side */}
          <article
            class="prose prose-lg max-w-none text-surface-dark1 leading-relaxed [&_h2]:font-black [&_h2]:text-surface-dark0 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-bold [&_h3]:text-surface-dark0 [&_h3]:mt-8 [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_ul]:pl-6 [&_li]:mb-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-text-secondary"
            innerHTML={post.content}
          />

          {/* CTA Banner */}
          <div class="mt-20 bg-gradient-to-br from-primary to-[#0e2c50] rounded-3xl p-10 text-center text-white">
            <h2 class="text-3xl font-black mb-4">Ready to grow your brand?</h2>
            <p class="text-white/80 mb-8 text-lg max-w-xl mx-auto">
              Get a free, no-obligation proposal from our team of digital marketing experts.
            </p>
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
              Get Your Free Proposal <i class="ph ph-arrow-right"></i>
            </a>
          </div>

          {/* Back to blog */}
          <div class="mt-12 text-center">
            <a href={routes.blogs.href()} class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <i class="ph ph-arrow-left"></i> Back to all posts
            </a>
          </div>

        </div>
      </div>
    </Layout>
  )
}
