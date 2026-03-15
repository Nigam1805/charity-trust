# Care & Share Trust – Vite + React SPA

Production-ready charitable trust website built with **Vite**, **React 19**, **TypeScript**, **Tailwind CSS**, and **React Router**. Migrated from Next.js; all content is driven by a single `siteContent.ts` file.

## Tech stack

- **Build:** Vite  
- **Framework:** React 19 + TypeScript  
- **Routing:** React Router DOM (`createBrowserRouter`)  
- **Styling:** Tailwind CSS + CSS variables  
- **Animations:** Framer Motion  
- **UI:** shadcn-style components (CVA, clsx, tailwind-merge)  
- **Icons:** Lucide React  

## Commands

```bash
# Install
npm install

# Development
npm run dev

# Production build (output in dist/)
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
  components/     # Navbar, Footer, Hero, Services, ImpactStats, DonationSection, GalleryGrid, ContactForm, MapSection
  components/ui/  # Button, Card, Input, Textarea, Label, Sheet
  content/        # siteContent.ts – single source for all copy and config
  layout/         # MainLayout (Navbar + Outlet + Footer, ScrollToTop)
  pages/          # Home, About, Gallery, Donate, Contact
  routes/         # AppRoutes (createBrowserRouter)
  styles/         # globals.css (theme variables)
  lib/            # utils.ts (cn)
```

## Content and theme

- **Content:** Edit `src/content/siteContent.ts` for trust name, hero, about, services, gallery, donation details, and contact info.  
- **Theme:** Edit `src/styles/globals.css` `:root` for `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, `--radius`.  
- **Dark mode:** Optional `.dark` class overrides are in `globals.css`.

## Deployment

Build outputs to `dist/`. Deploy that folder to Vercel, Netlify, or any static host. No `.next` or server required.

## Contact form

The contact form POSTs to `/api/contact`. On static hosting (no API), it will 404; the app treats that as success for demo. For production, point the form to your backend or a service like Formspree or Netlify Forms.
