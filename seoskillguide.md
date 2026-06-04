# SEO Skill Guide — BellBee Media

> **Skill location:** `.agents/skills/seo/`
> **Source:** [Bhanunamikaze/Agentic-SEO-Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill)
> **Coverage:** 16 sub-skills · 10 specialist agents · 89 utility scripts

---

## Quick Start

Just ask the AI naturally. These phrases all trigger the skill automatically:

```
"perform seo analysis on http://localhost:44100"
"run seo audit on bellbeemedia.com"
"check technical seo for /services"
"analyze seo" / "audit seo" / "review schema"
```

For **full audits**, the skill always produces two mandatory output files:
- `FULL-AUDIT-REPORT.md` — detailed findings with evidence
- `ACTION-PLAN.md` — prioritized fixes ordered by impact

---

## All 16 Commands

| Command | What It Does |
|---------|-------------|
| `seo audit <url>` | Full website audit — crawls multiple pages, scores all categories, delegates to specialist agents |
| `seo page <url>` | Deep single-page analysis — exhaustive on-page SEO review |
| `seo technical <url>` | Crawlability, indexability, robots.txt, sitemaps, redirects, HTTPS, mobile, JS rendering |
| `seo content <url>` | Content quality, E-E-A-T signals, readability, AI content detection |
| `seo schema <url>` | Detects, validates, and generates JSON-LD structured data |
| `seo sitemap <url>` | XML sitemap validation and generation |
| `seo images <url>` | Alt text, WebP usage, lazy loading, file sizes, descriptive filenames |
| `seo geo <url>` | AI search readiness — optimizes for ChatGPT, Perplexity, Gemini |
| `seo aeo <url>` | Answer Engine Optimization — Featured Snippets, People Also Ask, Knowledge Panel |
| `seo links <url>` | External backlink profile and internal link health |
| `seo hreflang <url>` | International SEO — hreflang tag validation for multi-language sites |
| `seo competitors <url>` | Comparison/alternatives page strategy |
| `seo programmatic <url>` | Safeguards for programmatic SEO — duplicate content, thin pages |
| `seo plan <url>` | Strategic SEO roadmap with industry-specific templates |
| `seo article <url>` | Article data extraction and LLM-driven optimization |
| `seo github <owner/repo>` | GitHub repo discoverability — README, topics, community health, traffic |

---

## Scoring System

Every full audit produces a weighted score across 7 categories:

| Category | Weight | What's Checked |
|----------|--------|----------------|
| Technical SEO | **25%** | Crawlability, redirects, HTTPS, mobile-first, JS rendering |
| Content Quality | **20%** | E-E-A-T, uniqueness, depth, readability |
| On-Page SEO | **15%** | Title tags, meta descriptions, headings, URLs, internal links |
| Schema / Structured Data | **15%** | JSON-LD types, validity, missing opportunities |
| Performance (Core Web Vitals) | **10%** | LCP, INP, CLS thresholds |
| Image Optimization | **10%** | Alt text, WebP, file sizes |
| AI Search Readiness (GEO) | **5%** | llms.txt, AI crawler access, entity clarity |

### Score Ratings
| Score | Rating |
|-------|--------|
| 90–100 | ✅ Excellent |
| 70–89 | ✅ Good |
| 50–69 | ⚠️ Needs Improvement |
| 30–49 | 🔴 Poor |
| 0–29 | 🔴 Critical |

---

## Severity Labels

All findings use consistent severity levels:

| Label | Meaning |
|-------|---------|
| 🔴 **Critical** | Directly hurts rankings or indexing — fix immediately |
| ⚠️ **Warning** | Optimization opportunity — fix within 1 month |
| ✅ **Pass** | Meets or exceeds the standard |
| ℹ️ **Info** | Not applicable or informational only |

---

## Practical Examples for BellBee Media

### Run a full site audit
```
seo audit http://localhost:44100
```
Produces `FULL-AUDIT-REPORT.md` + `ACTION-PLAN.md` in the current directory.

### Check only the homepage on-page SEO
```
seo page http://localhost:44100
```

### Validate structured data on the services page
```
seo schema http://localhost:44100/services
```

### Check if AI crawlers can index the site
```
seo geo http://localhost:44100
```
Checks `robots.txt` for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, `Google-Extended`, `Bytespider`, `CCBot`.

### Audit the GitHub repo discoverability
```
seo github codeproconsulting/bellbeemedia
```

### Get a strategic SEO plan (Agency template auto-detected)
```
seo plan http://localhost:44100
```
Detects BellBee Media as an Agency and loads the agency-specific SEO template.

### Analyze a blog post before publishing
```
seo article http://localhost:44100/blogs/your-post-slug
```

---

## Underlying Scripts (Run Manually If Needed)

The skill includes 89 Python scripts in `.agents/skills/seo/scripts/`. The most useful ones:

```bash
# Core Web Vitals via PageSpeed Insights (no API key needed)
python3 .agents/skills/seo/scripts/pagespeed.py https://bellbeemedia.com --strategy mobile

# Check robots.txt and AI crawler rules
python3 .agents/skills/seo/scripts/robots_checker.py https://bellbeemedia.com

# Check for llms.txt (AI search readiness)
python3 .agents/skills/seo/scripts/llms_txt_checker.py https://bellbeemedia.com

# Find broken links
python3 .agents/skills/seo/scripts/broken_links.py https://bellbeemedia.com --workers 5

# Check redirect chains
python3 .agents/skills/seo/scripts/redirect_checker.py https://bellbeemedia.com

# Analyze readability of a page
python3 .agents/skills/seo/scripts/fetch_page.py https://bellbeemedia.com --output /tmp/page.html
python3 .agents/skills/seo/scripts/readability.py /tmp/page.html --json

# Validate Open Graph / Twitter Card tags
python3 .agents/skills/seo/scripts/social_meta.py https://bellbeemedia.com

# Analyze internal link structure
python3 .agents/skills/seo/scripts/internal_links.py https://bellbeemedia.com --depth 1 --max-pages 20

# Generate a self-contained HTML SEO dashboard
python3 .agents/skills/seo/scripts/generate_report.py https://bellbeemedia.com --output SEO-REPORT.html

# Validate any JSON-LD schema block in an HTML file
python3 .agents/skills/seo/scripts/validate_schema.py path/to/file.html

# Run a pre-commit SEO check on staged HTML files
bash .agents/skills/seo/scripts/pre_commit_seo_check.sh
```

### Script Dependencies
```bash
pip install requests beautifulsoup4

# For screenshot/visual analysis (optional)
pip install playwright && playwright install chromium
```

---

## 10 Specialist Agents

When running a full audit, the skill delegates to specialist agents for deeper analysis:

| Agent | Focus |
|-------|-------|
| **Technical SEO** | Crawlability, indexability, security headers, URLs, mobile, CWV, JS rendering |
| **Content Quality** | E-E-A-T assessment, content metrics, AI content detection |
| **Performance** | Core Web Vitals (LCP, INP, CLS), optimization recommendations |
| **Schema Markup** | JSON-LD detection, validation, and generation |
| **Sitemap** | XML sitemap validation and generation |
| **Visual Analysis** | Screenshots, above-the-fold, responsiveness, layout |
| **Verifier** | Deduplicates findings, suppresses contradictions, validates evidence before the final report |

---

## Critical Rules the Skill Enforces

These are non-negotiable SEO facts baked into the skill:

1. **INP, not FID** — FID was removed September 9, 2024. The only interactivity metric is now **INP** (Interaction to Next Paint).
2. **No FAQ schema** — FAQPage schema is restricted to government/healthcare sites only (August 2023). Not for commercial agencies.
3. **No HowTo schema** — Fully deprecated September 2023.
4. **JSON-LD only** — Always `<script type="application/ld+json">`. Microdata and RDFa are not recommended.
5. **E-E-A-T is universal** — As of December 2025, E-E-A-T applies to ALL competitive queries, not just YMYL.
6. **100% mobile-first indexing** — Complete since July 5, 2024.
7. **Location page limits** — Warning at 30+ pages, hard stop at 50+ pages.
8. **AI crawler management** — `robots.txt` must be checked for GPTBot, ClaudeBot, PerplexityBot, etc.

---

## Industry Templates for SEO Plans

When you run `seo plan <url>`, the skill auto-detects your industry and loads the right template:

| Industry | Detection Signals |
|----------|------------------|
| **Agency / Consultancy** ← *BellBee Media* | Case studies, /work, /portfolio, team pages, service offerings |
| SaaS / Software | Pricing page, /docs, /api, trial/demo CTAs |
| Local Service Business | Address, phone, Google Business Profile, service area pages |
| E-commerce / Retail | Product pages, cart, checkout, /collections |
| Publisher / Media | Article dates, author pages, /news |

---

## Output Artifacts Reference

| File | When Generated | Contents |
|------|---------------|----------|
| `FULL-AUDIT-REPORT.md` | All full/page audits | Detailed findings with evidence, impact, and fix for each issue |
| `ACTION-PLAN.md` | All full/page audits | Prioritized fixes ordered by impact and effort |
| `SEO-REPORT.html` | When `generate_report.py` is run | Interactive self-contained HTML dashboard |
| `GITHUB-SEO-REPORT.md` | `seo github` command | GitHub repo discoverability report |
| `GITHUB-ACTION-PLAN.md` | `seo github` command | Prioritized GitHub SEO fixes |

---

## Keeping the Skill Updated

```bash
cd .agents/skills/seo
git pull origin main
```

The skill's reference files include freshness markers. References older than 90 days are flagged automatically. To check:

```bash
python3 .agents/skills/seo/scripts/reference_freshness.py .agents/skills/seo/resources/references --max-age-days 90
```
