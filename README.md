# Sachin Jadhav — Portfolio

Personal portfolio site built with Next.js 14 (App Router) and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Set `NEXT_DIST_DIR=.next-build` to build into a separate folder while a dev server is running.

## Contact form

`src/app/api/contact/route.js` delivers messages through Resend, Web3Forms, or the FormSubmit relay, whichever is configured first. Copy `.env.example` to `.env.local` and fill in what you need.

## SEO

`src/app/site-url.js` holds the public address (override with `NEXT_PUBLIC_SITE_URL`). It feeds the canonical links, `sitemap.xml`, `robots.txt` and the share image (`src/app/opengraph-image.png`).

## Layout

- `src/app/` — pages: home, about, experience, portfolio, skills, contact
- `src/app/component/` — shared components
- `src/app/providers/` — theme and page-loader providers
- `src/app/assets/css/` — Tailwind entry point (`tailwind.css`) and custom styles
- `public/images/` — images, logos and the downloadable CV
