# Chirag Mandyal — Portfolio

Personal portfolio site. Full Stack Developer working across React, NestJS, and TypeScript.

**Live:** https://portfolio-typescript2026.vercel.app

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (light/dark theme)
- Framer Motion animations
- React Hook Form + Formspree (contact form)

## Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
```

## Config

The contact form posts to a Formspree endpoint. Create a `.env` (gitignored) with:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/<your-id>
```
