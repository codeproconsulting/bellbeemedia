/**
 * app/data/wordpress.ts
 * 
 * Typed WordPress GraphQL client.
 * 
 * Set WORDPRESS_GRAPHQL_URL in your environment to point to your WPGraphQL endpoint.
 * Set WORDPRESS_AUTH_TOKEN to a WordPress Application Password for write mutations.
 * 
 * If WORDPRESS_GRAPHQL_URL is not set, all fetch functions fall back to
 * static placeholder data so the site renders without a live WordPress instance.
 */

// ──────────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────────

export interface WPBlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  featuredImageUrl: string | null
  author: {
    name: string
    role: string
    initials: string
    avatarUrl: string | null
  }
}

export interface WPCaseStudy {
  id: string
  slug: string
  title: string
  tag: string
  metric: string
  metricLabel: string
  description: string
  featuredImageUrl: string | null
}

export interface WPSuccessStory {
  id: string
  slug: string
  title: string
  tag: string
  challenge: string
  strategy: string
  results: string[]
}

export interface WPJob {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  applyUrl: string
}

// ──────────────────────────────────────────────────────────────────────────────
// Core fetch helper
// ──────────────────────────────────────────────────────────────────────────────

async function fetchWP<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const endpoint = process.env.WORDPRESS_GRAPHQL_URL
  if (!endpoint) {
    throw new Error('WORDPRESS_GRAPHQL_URL not configured')
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  const authToken = process.env.WORDPRESS_AUTH_TOKEN
  if (authToken) {
    headers['Authorization'] = `Basic ${authToken}`
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`WordPress GraphQL request failed: ${res.status} ${res.statusText}`)
  }

  const json = await res.json() as { data?: T; errors?: { message: string }[] }

  if (json.errors && json.errors.length > 0) {
    throw new Error(`WordPress GraphQL error: ${json.errors.map(e => e.message).join(', ')}`)
  }

  if (!json.data) {
    throw new Error('WordPress GraphQL returned no data')
  }

  return json.data
}

// ──────────────────────────────────────────────────────────────────────────────
// Blogs
// ──────────────────────────────────────────────────────────────────────────────

const BLOGS_QUERY = `
  query GetBlogPosts($first: Int = 10) {
    posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        databaseId
        slug
        title
        excerpt(format: RAW)
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
            description
            avatar {
              url
            }
          }
        }
        blogFields {
          readTime
          authorRole
        }
      }
    }
  }
`

interface WPPostsResponse {
  posts: {
    nodes: {
      id: string
      databaseId: number
      slug: string
      title: string
      excerpt: string
      date: string
      featuredImage: { node: { sourceUrl: string } } | null
      categories: { nodes: { name: string }[] }
      author: { node: { name: string; description: string; avatar: { url: string } | null } }
      blogFields: { readTime: string | null; authorRole: string | null } | null
    }[]
  }
}

function mapBlogPost(node: WPPostsResponse['posts']['nodes'][0]): WPBlogPost {
  const authorName = node.author.node.name
  const initials = authorName
    .split(' ')
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() ?? '')
    .join('')
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    excerpt: stripHtml(node.excerpt),
    date: formatDate(node.date),
    readTime: node.blogFields?.readTime ?? '5 min read',
    category: node.categories.nodes[0]?.name ?? 'Insights',
    featuredImageUrl: node.featuredImage?.node.sourceUrl ?? null,
    author: {
      name: authorName,
      role: node.blogFields?.authorRole ?? 'Digital Strategist',
      initials,
      avatarUrl: node.author.node.avatar?.url ?? null,
    },
  }
}

export async function fetchBlogPosts(count = 10): Promise<WPBlogPost[]> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    return FALLBACK_BLOGS
  }
  try {
    const data = await fetchWP<WPPostsResponse>(BLOGS_QUERY, { first: count })
    return data.posts.nodes.map(mapBlogPost)
  } catch (err) {
    console.error('[WordPress] fetchBlogPosts error:', err)
    return FALLBACK_BLOGS
  }
}

const BLOG_POST_QUERY = `
  query GetBlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      slug
      title
      excerpt(format: RAW)
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      blogFields {
        readTime
        authorRole
      }
    }
  }
`

export interface WPBlogPostFull extends WPBlogPost {
  content: string
}

interface WPSinglePostResponse {
  post: WPPostsResponse['posts']['nodes'][0] & { content: string }
}

export async function fetchBlogPost(slug: string): Promise<WPBlogPostFull | null> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    const post = FALLBACK_BLOGS.find(p => p.slug === slug) ?? null
    return post ? { ...post, content: '<p>WordPress is not yet connected. This is placeholder content.</p>' } : null
  }
  try {
    const data = await fetchWP<WPSinglePostResponse>(BLOG_POST_QUERY, { slug })
    if (!data.post) return null
    return { ...mapBlogPost(data.post), content: data.post.content }
  } catch (err) {
    console.error('[WordPress] fetchBlogPost error:', err)
    return null
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Case Studies
// ──────────────────────────────────────────────────────────────────────────────

const CASE_STUDIES_QUERY = `
  query GetCaseStudies($first: Int = 12) {
    caseStudies(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        caseStudyFields {
          tag
          metric
          metricLabel
          description
        }
      }
    }
  }
`

interface WPCaseStudiesResponse {
  caseStudies: {
    nodes: {
      id: string
      slug: string
      title: string
      featuredImage: { node: { sourceUrl: string } } | null
      caseStudyFields: {
        tag: string
        metric: string
        metricLabel: string
        description: string
      } | null
    }[]
  }
}

export async function fetchCaseStudies(count = 12): Promise<WPCaseStudy[]> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    return FALLBACK_CASE_STUDIES
  }
  try {
    const data = await fetchWP<WPCaseStudiesResponse>(CASE_STUDIES_QUERY, { first: count })
    return data.caseStudies.nodes.map(node => ({
      id: node.id,
      slug: node.slug,
      title: node.title,
      tag: node.caseStudyFields?.tag ?? 'Marketing',
      metric: node.caseStudyFields?.metric ?? '—',
      metricLabel: node.caseStudyFields?.metricLabel ?? '',
      description: node.caseStudyFields?.description ?? '',
      featuredImageUrl: node.featuredImage?.node.sourceUrl ?? null,
    }))
  } catch (err) {
    console.error('[WordPress] fetchCaseStudies error:', err)
    return FALLBACK_CASE_STUDIES
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Success Stories
// ──────────────────────────────────────────────────────────────────────────────

const SUCCESS_STORIES_QUERY = `
  query GetSuccessStories($first: Int = 10) {
    successStories(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        successStoryFields {
          tag
          challenge
          strategy
          results
        }
      }
    }
  }
`

interface WPSuccessStoriesResponse {
  successStories: {
    nodes: {
      id: string
      slug: string
      title: string
      successStoryFields: {
        tag: string
        challenge: string
        strategy: string
        results: string
      } | null
    }[]
  }
}

export async function fetchSuccessStories(count = 10): Promise<WPSuccessStory[]> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    return FALLBACK_SUCCESS_STORIES
  }
  try {
    const data = await fetchWP<WPSuccessStoriesResponse>(SUCCESS_STORIES_QUERY, { first: count })
    return data.successStories.nodes.map(node => ({
      id: node.id,
      slug: node.slug,
      title: node.title,
      tag: node.successStoryFields?.tag ?? '',
      challenge: node.successStoryFields?.challenge ?? '',
      strategy: node.successStoryFields?.strategy ?? '',
      // results stored as newline-separated string in WP ACF textarea
      results: (node.successStoryFields?.results ?? '')
        .split('\n')
        .map(r => r.trim())
        .filter(Boolean),
    }))
  } catch (err) {
    console.error('[WordPress] fetchSuccessStories error:', err)
    return FALLBACK_SUCCESS_STORIES
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Jobs / Careers
// ──────────────────────────────────────────────────────────────────────────────

const JOBS_QUERY = `
  query GetJobs($first: Int = 20) {
    jobOpenings(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        jobFields {
          department
          location
          type
          description
          applyUrl
        }
      }
    }
  }
`

interface WPJobsResponse {
  jobOpenings: {
    nodes: {
      id: string
      title: string
      jobFields: {
        department: string
        location: string
        type: string
        description: string
        applyUrl: string
      } | null
    }[]
  }
}

export async function fetchJobs(count = 20): Promise<WPJob[]> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    return FALLBACK_JOBS
  }
  try {
    const data = await fetchWP<WPJobsResponse>(JOBS_QUERY, { first: count })
    return data.jobOpenings.nodes.map(node => ({
      id: node.id,
      title: node.title,
      department: node.jobFields?.department ?? 'General',
      location: node.jobFields?.location ?? 'Remote',
      type: node.jobFields?.type ?? 'Full-Time',
      description: node.jobFields?.description ?? '',
      applyUrl: node.jobFields?.applyUrl ?? 'mailto:careers@bellbeemedia.com',
    }))
  } catch (err) {
    console.error('[WordPress] fetchJobs error:', err)
    return FALLBACK_JOBS
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Quote Form Submission
// ──────────────────────────────────────────────────────────────────────────────

const SUBMIT_PROPOSAL_MUTATION = `
  mutation SubmitProposal(
    $fullName: String!
    $email: String!
    $company: String
    $phone: String
    $services: String
    $details: String
  ) {
    createProposalSubmission(input: {
      fullName: $fullName
      email: $email
      company: $company
      phone: $phone
      services: $services
      details: $details
    }) {
      success
      message
    }
  }
`

export interface ProposalFormData {
  fullName: string
  email: string
  company?: string
  phone?: string
  services?: string
  details?: string
  [key: string]: string | undefined
}

export type ProposalSubmissionResult = {
  success: boolean
  message: string
}

export async function submitProposal(data: ProposalFormData): Promise<ProposalSubmissionResult> {
  if (!process.env.WORDPRESS_GRAPHQL_URL) {
    // Dev mode: simulate success
    console.log('[WordPress] Proposal (dev mode, not sent):', data)
    return { success: true, message: 'Proposal received! (WordPress not yet connected)' }
  }
  try {
    const result = await fetchWP<{ createProposalSubmission: ProposalSubmissionResult }>(
      SUBMIT_PROPOSAL_MUTATION,
      data,
    )
    return result.createProposalSubmission
  } catch (err) {
    console.error('[WordPress] submitProposal error:', err)
    return { success: false, message: 'Sorry, something went wrong. Please try again or email us directly.' }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Utilities
// ──────────────────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return iso
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Fallback / Placeholder Data (shown when WP not configured)
// ──────────────────────────────────────────────────────────────────────────────

const FALLBACK_BLOGS: WPBlogPost[] = [
  {
    id: '1',
    slug: '10-seo-mistakes-killing-organic-traffic',
    title: '10 SEO Mistakes That Are Killing Your Organic Traffic',
    excerpt: 'Common technical SEO traps and content strategy errors that hold websites back from ranking on Google, with simple fixes.',
    category: 'SEO & Growth',
    readTime: '8 min read',
    date: '28 May 2026',
    featuredImageUrl: null,
    author: { name: 'Muhammad Ali', role: 'Head of SEO', initials: 'MA', avatarUrl: null },
  },
  {
    id: '2',
    slug: 'anatomy-high-converting-b2b-landing-page',
    title: 'The Anatomy of a High-Converting B2B Landing Page',
    excerpt: 'Breaking down the key design sections, CTA placements, and copy structures that successfully turn visitors into qualified leads.',
    category: 'Web Solutions',
    readTime: '6 min read',
    date: '24 May 2026',
    featuredImageUrl: null,
    author: { name: 'Sara Khan', role: 'Lead Designer', initials: 'SK', avatarUrl: null },
  },
  {
    id: '3',
    slug: 'why-relying-solely-on-social-media-is-dangerous',
    title: 'Why Relying Solely on Social Media Is a Dangerous Play',
    excerpt: 'Algorithms change overnight. Learn how to diversify your distribution channels and build owned digital assets.',
    category: 'Strategy',
    readTime: '10 min read',
    date: '18 May 2026',
    featuredImageUrl: null,
    author: { name: 'Usman Raza', role: 'Director of Strategy', initials: 'UR', avatarUrl: null },
  },
  {
    id: '4',
    slug: 'email-marketing-2026-automation-over-spam',
    title: 'Email Marketing in 2026: Automation Over Spam',
    excerpt: 'How personalization tokens, customer survey triggers, and segment flow setups can boost email engagement by up to 180%.',
    category: 'Performance Marketing',
    readTime: '7 min read',
    date: '12 May 2026',
    featuredImageUrl: null,
    author: { name: 'Ayesha Tariq', role: 'CRM Lead', initials: 'AT', avatarUrl: null },
  },
  {
    id: '5',
    slug: 'understanding-ad-ctr-why-yours-might-be-dropping',
    title: 'Understanding Ad CTR and Why Yours Might Be Dropping',
    excerpt: 'A diagnostic checklist for Facebook and Google Ads campaigns that are seeing declining click-through rates.',
    category: 'Performance Marketing',
    readTime: '5 min read',
    date: '5 May 2026',
    featuredImageUrl: null,
    author: { name: 'Muhammad Ali', role: 'Head of SEO', initials: 'MA', avatarUrl: null },
  },
]

const FALLBACK_CASE_STUDIES: WPCaseStudy[] = [
  {
    id: '1', slug: 'ecommerce-brand-growth', title: 'E-Commerce Brand Growth',
    tag: 'Social Media', metric: '+320%', metricLabel: 'Engagement Rate',
    description: 'Scaled an online fashion retailer from 5K to 85K Instagram followers in 6 months with a content-led social strategy.',
    featuredImageUrl: null,
  },
  {
    id: '2', slug: 'd2c-product-launch', title: 'D2C Product Launch',
    tag: 'Performance Ads', metric: '4.8x ROAS', metricLabel: 'Return on Ad Spend',
    description: 'Launched a health supplement brand with Google and Meta ads, achieving profitability in week 3 of a 6-week campaign.',
    featuredImageUrl: null,
  },
  {
    id: '3', slug: 'b2b-saas-seo-overhaul', title: 'B2B SaaS SEO Overhaul',
    tag: 'Web & SEO', metric: '+415%', metricLabel: 'Organic Traffic Growth',
    description: 'Rebuilt a SaaS company\'s website with technical SEO foundations, growing monthly visits from 2K to 10K in 4 months.',
    featuredImageUrl: null,
  },
  {
    id: '4', slug: 'consumer-brand-awareness', title: 'Consumer Brand Awareness',
    tag: 'Digital PR', metric: '180+', metricLabel: 'Media Placements',
    description: 'Ran a 6-month Digital PR campaign securing coverage in Forbes, The Guardian, and 30+ niche publications.',
    featuredImageUrl: null,
  },
  {
    id: '5', slug: 'full-brand-rebrand', title: 'Full Brand Rebrand',
    tag: 'Brand Design', metric: '2.1x', metricLabel: 'Conversion Rate Lift',
    description: 'Rebranded a 10-year-old retail business with a new visual identity, tone of voice, and website — doubling conversions.',
    featuredImageUrl: null,
  },
  {
    id: '6', slug: 'viral-product-video', title: 'Viral Product Video Campaign',
    tag: 'Production', metric: '5.2M', metricLabel: 'Video Views in 30 Days',
    description: 'Produced a short-form product video series that generated over 5 million organic views across TikTok and YouTube.',
    featuredImageUrl: null,
  },
]

const FALLBACK_SUCCESS_STORIES: WPSuccessStory[] = [
  {
    id: '1', slug: 'fashion-brand-zero-to-500k', title: 'Zero to 500K: How We Built a Fashion Brand\'s Digital Empire', tag: 'Social Media + Production',
    challenge: 'A UK fashion startup with no social presence and minimal budget needed to establish brand recognition and drive online sales fast.',
    strategy: 'We developed a TikTok-first content strategy with weekly UGC-style videos, micro-influencer activations, and targeted Meta ads to retarget engaged viewers.',
    results: ['500K TikTok followers in 12 months', '£1.2M in attributable social commerce revenue', '3.8% average engagement rate (industry avg: 1.1%)'],
  },
  {
    id: '2', slug: 'b2b-saas-page-10-to-1', title: 'How a B2B SaaS Company Went from Page 10 to #1 on Google', tag: 'SEO + Web Development',
    challenge: 'A project management SaaS tool was invisible on search engines, relying entirely on paid ads for customer acquisition.',
    strategy: 'We rebuilt their website with a technical SEO foundation, executed a 12-month content strategy targeting 80+ commercial keywords, and earned 200+ editorial backlinks.',
    results: ['#1 ranking for primary keyword within 8 months', '415% organic traffic growth', 'CAC reduced by 65% through organic channel'],
  },
  {
    id: '3', slug: 'health-brand-500k-in-90-days', title: 'Launching a Health Brand to £500K Revenue in 90 Days', tag: 'Performance Ads + Digital PR',
    challenge: 'A new wellness supplement brand needed rapid market entry, brand credibility, and sales volume simultaneously.',
    strategy: 'Parallel tracks: aggressive Meta and Google ad campaigns for immediate revenue, combined with a Digital PR blitz securing 40+ health publication features.',
    results: ['£500K in verified revenue within 90 days', '40+ editorial features in health publications', 'Profitable from day 18 of ad launch'],
  },
]

const FALLBACK_JOBS: WPJob[] = [
  { id: '1', title: 'Senior Social Media Strategist', department: 'Social Media', location: 'Remote', type: 'Full-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
  { id: '2', title: 'Performance Marketing Manager', department: 'Paid Advertising', location: 'Remote', type: 'Full-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
  { id: '3', title: 'SEO Content Writer', department: 'Content & SEO', location: 'Remote', type: 'Full-Time / Part-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
  { id: '4', title: 'Brand & UI Designer', department: 'Creative', location: 'Remote', type: 'Full-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
  { id: '5', title: 'Video Editor & Motion Designer', department: 'Production', location: 'Remote', type: 'Full-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
  { id: '6', title: 'Account Manager', department: 'Client Services', location: 'Remote', type: 'Full-Time', description: '', applyUrl: 'mailto:careers@bellbeemedia.com' },
]
