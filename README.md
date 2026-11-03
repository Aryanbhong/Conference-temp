# IC-NBITS 2027 — Conference Website

> **International Research Conference on Nation-Building through Innovation, Technology and Sustainability**  
> Organised by SIESCOMS, Nerul, Navi Mumbai · Hybrid Mode

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The dev server runs at **http://localhost:5173** by default.

---

## 🗂 Project Structure

```
src/
 ├─ assets/            # Images & SVGs (add campus photo, speaker photos here)
 ├─ components/
 │   ├─ layout/        # Header, Navbar, Footer, BackToTop
 │   ├─ ui/            # Button, SectionHeading, Card, Accordion, Badge, Stepper
 │   └─ sections/      # All page sections (Hero → Contact)
 ├─ data/              # ALL editable content lives here (see below)
 ├─ hooks/             # useActiveSection, useMediaQuery
 ├─ pages/             # Home.jsx (single-page, imports all sections)
 ├─ styles/            # index.css (design tokens + Tailwind base)
 ├─ App.jsx
 └─ main.jsx
public/
 ├─ hero-building.svg  # Replace with actual SIESCOMS line-art illustration
 ├─ favicon.svg
 └─ brochure.pdf       # Place the real brochure here
```

---

## ✏️ How to Update Content

All conference content is data-driven. **You should never need to edit component JSX** for routine year-to-year updates.

### For a new edition (e.g., IC-NBITS 2028)

| What to change | File |
|---|---|
| Year, dates, mode, acronym, venue | `src/data/conference.js` |
| Nav links | `src/data/navLinks.js` |
| Tracks & sub-topics | `src/data/tracks.js` |
| Speakers | `src/data/speakers.js` |
| Publications / journals | `src/data/publications.js` |
| Important dates timeline | `src/data/dates.js` |
| Registration fees | `src/data/fees.js` |
| Committee members | `src/data/committee.js` |

### Adding a speaker photo

1. Place the image file in `src/assets/speakers/` (e.g., `dr-john-doe.jpg`).
2. In `src/data/speakers.js`, import the photo at the top:
   ```js
   import drJohnDoe from '../assets/speakers/dr-john-doe.jpg';
   ```
3. Set the `photo` field for that speaker:
   ```js
   { id: 'keynote-1', name: 'Dr. John Doe', photo: drJohnDoe, ... }
   ```

### Replacing the hero building illustration

Drop your `hero-building.svg` into `public/` — the Hero component already loads `/hero-building.svg`.

### Adding the brochure

Drop `brochure.pdf` into `public/`. The "Download Brochure" button is already wired to `/brochure.pdf`.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary navy | `#1F3589` |
| Accent gold | `#E5A82B` |
| Cream background | `#FEF7E6` |
| Grey-blue sections | `#F3F4F9` |
| Serif font | Lora (Google Fonts) |
| Sans-serif font | Inter (Google Fonts) |

Tailwind v4 custom colour tokens are defined in `src/styles/index.css` under `@theme { ... }`.

---

## ☁️ Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Add a `vercel.json` at the root for SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build & deploy
netlify deploy --dir=dist --prod
```

Add a `public/_redirects` file:
```
/*  /index.html  200
```

### Static hosting (GitHub Pages, etc.)

```bash
npm run build
# Upload the contents of /dist
```

---

## 🔧 Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Utility-first styling |
| lucide-react | 1.x | Icon library |
| prop-types | 15 | Runtime prop validation |

---

## 📝 Notes

- The site is a **single-page application** with smooth-scroll navigation. No router is needed for the main content.
- The `useActiveSection` hook uses `IntersectionObserver` to highlight the active nav item.
- All data is **static** — no backend or API calls.
- Images are lazy-loaded via the native `loading="lazy"` attribute.
- The Google Maps embed in the Contact section uses a placeholder URL — replace `mapEmbedUrl` in `conference.js` with the real embed URL from Google Maps.

