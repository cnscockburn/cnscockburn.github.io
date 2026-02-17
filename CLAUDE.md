# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Callum Cockburn — Technical Innovation Manager, Incorporated Engineer, and AI Management Practitioner based in Bristol, UK. Built with Astro and Tailwind CSS v4, deployed to GitHub Pages at `cnscockburn.github.io`.

## Tech Stack

- **Astro v5**: Static site generator with View Transitions
- **Tailwind CSS v4**: Utility-first CSS via `@tailwindcss/vite` plugin
- **@tailwindcss/typography**: Prose styling for blog post content
- **TypeScript**: For type-safe configuration
- **Pagefind**: Client-side search (index built post-build)
- **Giscus**: GitHub Discussions-based comments on blog posts
- **@astrojs/sitemap**: Auto-generated sitemap
- **@astrojs/rss**: RSS feed generation

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (includes Pagefind indexing)
npm run preview   # Preview production build
```

Build is handled via GitHub Actions CI/CD pipeline — no need to test builds locally.

## Architecture

### Layout & Routing

- **BaseLayout** (`src/layouts/BaseLayout.astro`): Wraps all pages. Provides `<head>` metadata (SEO, OG tags, canonical URL, JSON-LD), `<main id="main-content">` landmark, skip-to-content link, Header, Footer, and BackToTop.
- **Homepage** (`src/pages/index.astro`): Single-page layout importing all section components wrapped in `<ScrollReveal>`.
- **Blog Index** (`src/pages/blog/index.astro`): Lists all posts with tag filtering (URL query param driven).
- **Blog Post** (`src/pages/blog/[...slug].astro`): Individual blog posts with related posts, prev/next navigation, and Giscus comments.
- **Search** (`src/pages/search.astro`): Pagefind-powered full-text search.
- **404** (`src/pages/404.astro`): Custom error page.
- **RSS** (`src/pages/rss.xml.ts`): RSS feed.

### Components (`src/components/`)

| Component | Purpose |
|-----------|---------|
| `Hero.astro` | Full-viewport hero with gradient, SVG programming symbols, staggered fade-in |
| `About.astro` | Bio text (parsed from `\n\n` splits) + skill tags |
| `Projects.astro` | Project cards with numbered index, optional external links |
| `Experience.astro` | Timeline layout with dots, connecting lines, bullet cards |
| `Volunteering.astro` | Same timeline layout as Experience, for volunteer roles |
| `Education.astro` | Degree cards with achievements list |
| `Certifications.astro` | Certification cards with issuer and description |
| `Publications.astro` | Academic papers with DOI links, "View Paper" buttons, IEEE citation download, ORCID link |
| `Header.astro` | Fixed desktop nav (icon-based Home/Search) + mobile drawer; sticky on scroll |
| `Footer.astro` | Site links, social icons, copyright, decorative wave pattern |
| `BlogCard.astro` | Blog post card with title, description, date, tags |
| `Breadcrumbs.astro` | Breadcrumb navigation for blog posts |
| `BackToTop.astro` | Floating scroll-to-top button |
| `ScrollReveal.astro` | Intersection Observer reveal animation wrapper |
| `ThemeToggle.astro` | Dark/light theme toggle (persisted to localStorage) |
| `TableOfContents.astro` | Collapsible ToC for blog posts with active section highlighting |
| `ReadingProgress.astro` | Thin accent progress bar fixed at top of viewport on blog posts |
| `ContactCTA.astro` | "Let's connect" CTA section with LinkedIn/email buttons |
| `SeriesBanner.astro` | Blog series navigation banner with numbered posts and prev/next |

### Content Collections

Blog posts live in `src/content/blog/` as Markdown files with frontmatter:

```yaml
title: string       # required
description: string # required
pubDate: date       # required
tags: string[]      # optional, defaults to []
draft: boolean      # optional, defaults to false (filtered out in production)
image: string       # optional, cover image URL (shown on card + post page + OG)
series: string      # optional, series name for grouping posts
seriesOrder: number  # optional, order within the series
```

### Configuration (`src/config.ts`)

Single `siteConfig` object with these sections:
- **Basic info**: `name`, `title`, `description`, `accentColor` (#0f766e teal)
- **Social links**: `linkedin`, `github` (all optional, conditionally rendered)
- **aboutMe**: Multi-paragraph string (split on `\n\n`)
- **skills**: `string[]`
- **projects**: `{name, description, link?, skills[]}`
- **experience**: `{company, title, dateRange, bullets[]}`
- **volunteering**: `{organisation, role, dateRange, bullets[]}`
- **education**: `{school, degree, dateRange, achievements[]}`
- **certifications**: `{name, issuer, year, description}`
- **publications**: `{title, type, venue, date, authors[], doi, link, description}`

## SEO & Meta

- **Canonical URLs**: Computed from `Astro.url` + `Astro.site` on every page
- **Open Graph**: `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`
- **Twitter Cards**: `summary_large_image` with image
- **JSON-LD**: Person schema (homepage) + BlogPosting schema (blog posts)
- **OG Image**: Default SVG at `public/og-image.svg`; layout accepts `image` prop for per-page overrides
- **Sitemap**: Auto-generated via `@astrojs/sitemap`
- **robots.txt**: In `public/robots.txt`
- **RSS**: At `/rss.xml`

## Key Patterns & Conventions

1. **Single Configuration File**: All portfolio content managed through `src/config.ts`
2. **Conditional Rendering**: Sections auto-hide if their data array is empty/missing
3. **Accent Color System**: `accentColor` in config propagates via CSS custom properties and inline styles
4. **View Transitions**: Astro View Transitions enabled; dark mode re-applied in `astro:after-swap`
5. **Event Lifecycle**: Interactive scripts use `astro:page-load` (not `DOMContentLoaded`) for View Transition compatibility
6. **No nested `<main>`**: BaseLayout provides `<main id="main-content">`; pages use `<div>` for their content wrappers
7. **Skip-to-content**: Hidden link in layout, visible on keyboard focus for accessibility
8. **Focus-visible**: Desktop nav links have `focus-visible:outline` for keyboard accessibility

## Styling Guidelines

- **Font**: IBM Plex Mono (weights: 400, 500, 600, 700 regular + 400 italic) from Google Fonts
- **Dark mode**: Class-based (`dark:` prefix), toggled via `.dark` class on `<html>`, persisted to localStorage
- **Prose**: Blog content uses `@tailwindcss/typography` prose classes with custom link/quote colors
- **Animations**: Hero has CSS `@keyframes fadeIn` with staggered delays; sections use `ScrollReveal` (IntersectionObserver)
- All components use Tailwind utility classes — no custom CSS files beyond `src/styles/global.css`
- Maintain the monospace font aesthetic throughout
- Use inline SVG icons (Tabler-style) for consistency

## Deployment

- **Host**: GitHub Pages at `https://cnscockburn.github.io`
- **CI/CD**: GitHub Actions workflow in `.github/workflows/`
- **Build**: `astro build && npx pagefind --site dist`
- **Site URL**: Configured in `astro.config.mjs` as `site: 'https://cnscockburn.github.io'`