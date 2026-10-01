# Ricky A. George Portfolio

A production-style personal portfolio for Ricky A. George built with Next.js 14 App Router, plain CSS, and static export for GitHub Pages hosting.

## Design plan

### Design tokens

- Primary: deep navy (#0F1F3A)
- Accent: red (#C81E1E)
- Background light: soft white / grey (#F4F6F8)
- Text: near-black navy (#101B2B)
- Radius: 12px, 18px, 24px
- Shadows: soft, restrained elevation for cards and hero element
- Typography: one sans-serif family with strong hierarchy and comfortable reading widths

### Layout

- Sticky top navigation with a light/dark mode toggle
- Hero with strongly branded statement and profile card
- Technology strip under the hero
- About section with honest stat cards
- Skills grouped into categories
- Featured project card followed by mini project grid
- Contact section with email form, phone and WhatsApp links
- Footer with identity and location message

### File structure

- app/
  - globals.css
  - layout.js
  - page.js
- components/
  - ContactForm.js
  - SectionHeading.js
  - ThemeToggle.js
- public/
  - favicon.svg
  - og-image.svg
- .gitignore
- data.js
- jsconfig.json
- next.config.mjs
- package.json
- README.md

## Local setup

1. Install Node.js 18 or 20 LTS.
2. Open a terminal in this project folder.
3. Run:
   ```bash
   npm install
   ```
4. Start the app locally:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Production build

```bash
npm run build
```

This project is configured for static export, so the build output is generated in the `out/` directory.

## Deploy to GitHub Pages

The included GitHub Actions workflow builds the static export and deploys it to GitHub Pages whenever code is pushed to `main`.

1. In the repository, open **Settings > Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Push to `main` and follow the deployment under the repository's **Actions** tab.

The project site URL is https://rickyageorge7-create.github.io/ricky-portfolio/.

## Replace these placeholders before publishing

- Photo / avatar image: currently a styled initials fallback is used. Replace it with your real profile photo if you add one.
- Email: update the placeholder value in data.js.
- Social links: update the placeholder values in data.js.
- RIGZA URL: replace the placeholder GitHub Pages URL in data.js.
- Website URL: update the metadata base in app/layout.js.

## Content source

All portfolio content is stored in one file for easy edits:

- data.js
