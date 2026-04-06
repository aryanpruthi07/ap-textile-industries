# AP Textile Industries — Website Project Write-Up

**Student Assignment | Web Development | Due: 12 April 2026**

---

## 1. Business Overview

**Business Name:** AP Textile Industries
**Location:** Panipat, Haryana, India
**Established:** 2010
**Industry:** Textile Wholesale & Export

AP Textile Industries is a Panipat-based wholesaler and exporter of premium textile products. The business deals in:

- **Cotton Yarn** — Ring-spun and open-end, counts 10s–40s
- **Polyester Yarn** — DTY, FDY, POY variants
- **Satin Cord Yarn (Malai Dori)** — Lustrous 1–5mm cords
- **Bath Towels** — 100% cotton, multi-purpose premium towels
- **Bath Mats** — Anti-slip cotton mats, high comfort padding

The business serves 200+ clients across India including garment manufacturers, hospitality businesses, and craft retailers.

---

## 2. Website Goals

| Goal | Description |
|------|-------------|
| **Showcase Products** | Present the full product catalog clearly with specifications and imagery |
| **Generate Inquiries** | Drive B2B leads via a contact form with a product interest dropdown |
| **Build Credibility** | Communicate brand story, history (Est. 2010), values and client testimonials |
| **Mobile Accessibility** | Ensure the site works on all screen sizes for buyers on mobile devices |

---

## 3. Target Audience

- **Garment manufacturers** looking for bulk yarn supply
- **Hospitality businesses** (hotels, spas) sourcing bath linen in bulk
- **Retail stores** stocking home décor products
- **Craft suppliers** needing satin cord yarn
- **Export buyers** from Southeast Asia and the Middle East

---

## 4. Features Implemented

- ✅ Responsive navigation bar with hamburger menu (mobile)
- ✅ Full-page hero section with background imagery and gradient
- ✅ Stats bar — 15+ years, 200+ clients, 50+ products, 100% quality
- ✅ Product catalog split into **Yarn Products** and **Home Décor** categories
- ✅ Detailed product cards with specifications and inquiry CTAs
- ✅ About Us page — story, mission, vision, values
- ✅ Contact form — connected to **Resend API** for direct email delivery
- ✅ Testimonials section with 3 client quotes
- ✅ SEO-optimised meta tags on every page
- ✅ Full dark footer with product links, navigation, and contact details

---

## 5. Design Preferences

**Color Palette:**
- Primary: Deep Navy `#0f2240`
- Accent: Warm Gold `#c8973d`
- Background: Cream `#faf7f2`
- Text: Charcoal `#2d3748`

**Typography:**
- Headings: *Playfair Display* (serif — conveys heritage and premium quality)
- Body: *Inter* (clean, highly legible modern sans-serif)

**Layout:** Card-based with alternating image-text rows on the Products page. Consistent section padding, rounded corners, subtle shadows.

**Tone:** Professional, trustworthy, premium — befitting a B2B textile brand.

---

## 6. Tools & Technology Used

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Google Fonts (Playfair Display + Inter) |
| Images | Unsplash (via next/image with remote patterns) |
| Version Control | Git / GitHub |
| Hosting | GitHub Pages / Vercel (free tier) |
| AI Assistance | Google Deepmind Antigravity (code generation & design) |

---

## 7. Wireframe Summary

```
┌─────────────────────────────────┐
│           NAVBAR                │  Sticky, mobile hamburger
├─────────────────────────────────┤
│  HOME:  Hero → Stats → Products │  Full-height hero
│         → About → Testimonials  │  Gold stats bar
│         → CTA                   │  2-column product cards
├─────────────────────────────────┤
│  ABOUT: Header → Story+Image    │  Split layout
│         → Stats → Mission/Vision│  Navy stats bar
│         → Values (4 cards)      │
├─────────────────────────────────┤
│  PRODUCTS: Header               │  Section: Yarn Products  
│            Yarn Section         │  Section: Home Décor
│            Home Décor Section   │  Alternating card rows
│            Custom Order CTA     │
├─────────────────────────────────┤
│  CONTACT: Header                │  Sidebar: 4 info cards
│           Info + Form           │  Form: 6 fields + submit
└─────────────────────────────────┘
│           FOOTER                │  4-column dark footer
└─────────────────────────────────┘
```

---

## 8. AI Usage

AI (Google Antigravity) was used to:
- Generate all React/TypeScript page components and Tailwind CSS styling
- Suggest color palette and typography choices appropriate for a textile B2B brand
- Write product descriptions and business copy for each product category
- Structure the contact form with accessible labeling and validation

All architectural decisions, product details, and business logic were reviewed and verified.

---

## 9. Live Website & Repository

| Resource | Link |
|----------|------|
| **Live Website** | *(GitHub Pages URL — add after deployment)* |
| **Source Code** | *(GitHub Repository URL — add after pushing)* |

> **Instructions to deploy on GitHub Pages:**
> 1. Push this repository to GitHub
> 2. Add a `next.config.ts` export with `output: 'export'`
> 3. Run `npm run build` to generate static files
> 4. Enable GitHub Pages from the `/out` directory or use Vercel for zero-config deployment

---

*Submitted by: [Your Name] | Roll No: [Your Roll Number] | Date: April 2026*
