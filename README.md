# DAN Web Studio

Website for DAN Web Studio.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things are

- `data/content.ts` holds all the text: hero, services, process, client sites, founder, form options.
- `public/img/` holds the logos and screenshots. Client images are named `{id}-1.jpg`, `{id}-2.jpg`, and so on, matching the `id` in `content.ts`.
- `components/` has the page sections, the screenshot viewer, the contact form, and the theme toggle.
- `app/globals.css` has the light and dark color tokens and the hero wind animation.

## Contact form

On Netlify, submissions go to Netlify Forms. In the Netlify dashboard, open the site, go to Forms, turn on form detection, then deploy once more. Email alerts are under Forms > Form notifications.

To use another service such as Formspree instead, put `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-id` in `.env.local` and rebuild.

If a message can't be sent, the form shows the email address and offers to copy the visitor's message.

## Link previews

Set `NEXT_PUBLIC_SITE_URL` (for example `https://danwebstudio.com`) in `.env.local` before building, so LinkedIn and other apps can find the preview image.

## Build and deploy

Hosted on Netlify. The build settings are in `netlify.toml`, so the site can deploy straight from this repo.

To build locally, `npm run build` creates the finished site in the `out` folder.

## Built with

Next.js (App Router, static export), TypeScript, and Tailwind CSS, with Claude Code as a pair programmer.
