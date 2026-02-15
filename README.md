# cnscockburn.github.io

Personal portfolio and blog site for Callum Cockburn — Technical Innovation Manager, Incorporated Engineer, and AI Management Practitioner.

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first styling
- **TypeScript** — Type-safe configuration

## Features

- Responsive single-page portfolio with sections for About, Projects, Experience, Education, and Certifications
- Blog system with Markdown posts via Astro content collections
- Dark mode with toggle and system preference detection
- Mobile navigation with slide-out drawer
- Tag filtering on blog listing page
- Estimated reading time on blog posts
- Previous / next navigation between blog posts
- RSS feed at `/rss.xml`
- Auto-generated sitemap
- SEO with Open Graph tags
- Scroll-triggered section animations
- Custom 404 page

## Development

```bash
npm install
npm run dev
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `master`.

## Project Structure

```
src/
├── components/     # Astro components (Hero, About, Projects, etc.)
├── content/blog/   # Markdown blog posts
├── layouts/        # BaseLayout with shared head/header/footer
├── pages/          # Routes (index, blog, 404, RSS)
├── styles/         # Global CSS with Tailwind config
└── config.ts       # Centralised site configuration
```

## Configuration

All personal content is managed in `src/config.ts` — name, title, social links, about text, skills, experience, education, certifications, and projects.

Blog posts are Markdown files in `src/content/blog/` with YAML frontmatter (title, description, pubDate, tags, draft).
