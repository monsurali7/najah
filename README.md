# Najah — Deployment Guide

## Project Structure

```
najah/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # All styles
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Marquee.tsx
│       ├── About.tsx
│       ├── Offerings.tsx
│       ├── Process.tsx
│       ├── JoinSection.tsx
│       ├── Footer.tsx
│       ├── Logo.tsx
│       ├── Pillars.tsx
│       └── ValueBoxes.tsx
├── styles/
│   └── globals.css         # Also here for @/styles import alias
├── public/                 # Static assets (add favicon etc. here)
├── next.config.js          # Static export config
├── tsconfig.json
└── package.json
```

---

## Deploying to Cloudflare Pages

### Option A — GitHub + Cloudflare Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/najah.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click **Create a project → Connect to Git**
   - Select your `najah` repo

3. **Build settings** (Cloudflare will detect Next.js, but verify):
   | Setting | Value |
   |---|---|
   | Framework preset | Next.js (Static HTML Export) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node.js version | `18` or `20` |

4. Click **Save and Deploy** — your site will be live at `https://najah.pages.dev`

### Option B — Manual deploy (drag & drop)

1. Build locally:
   ```bash
   npm install
   npm run build
   ```
2. This generates an `out/` folder
3. Go to Cloudflare Pages → Create project → **Upload assets**
4. Drag and drop the `out/` folder

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Next Steps

- Add favicon to `/public/favicon.ico`
- Connect email capture (Kit/Beehiiv) in `JoinSection.tsx`
- Add Decap CMS config in `/public/admin/` when ready
- Set custom domain in Cloudflare Pages → Custom domains
