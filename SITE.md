# LaunchDark

> The dark-mode landing page template built for AI product launches.

## Brand Identity

- **Personality:** Bold, technical, premium — built for developers and indie hackers
- **Mode:** Dark mode by default
- **Colors (Stellar-inspired slate/purple palette):**
  - Background: `#0f172a` (slate-900, deep navy)
  - Surface: `#162032` / `#1e293b` (slate-800, card backgrounds)
  - Borders: `#1e293b` / `#334155` (slate-700/600)
  - Text: `#f1f5f9` (primary, slate-100) / `#94a3b8` (muted, slate-400)
  - Accent: Purple `#a855f7` to Indigo `#6366f1` gradient
  - Secondary accent: Amber `#F59E0B`
- **Fonts:**
  - Headings: Space Grotesk (bold, techy)
  - Body: DM Sans (clean, readable)

## Pages

- **Homepage** (`/`) — Full landing page with all sections

## Sections (top to bottom)

1. **Navbar** — Fixed top bar with logo, nav links (Features, Pricing, Testimonials, FAQ), sign-in link, and gradient "Get Started" button. Blurs on scroll. Has a mobile hamburger menu.

2. **Hero** — Large headline "Ship your AI product in days, not months" with gradient text. Two CTA buttons (Start Building Free + Watch Demo). Below: a browser-frame mockup showing a product demo placeholder with decorative UI elements. Background has a subtle grid pattern and violet glow.

3. **Logo Cloud** — "Trusted by builders shipping with" bar showing company names (Vercel, Supabase, Stripe, OpenAI, Resend, Planetscale). Sits between hero and features.

4. **Features** — 6-card grid with icons, titles, and descriptions. Each card has a colored icon, hover gradient effect, and scroll-triggered animations. Features: Deploy in 90 Seconds, Dark Mode by Default, Scroll Animations, Stripe-Ready Pricing, Social Proof Built In, 95+ Lighthouse Score.

5. **Pricing** — Monthly/annual toggle with "Save 20%" badge. Three tiers (Starter free, Pro $49/$39, Team $149/$119). Pro has a "Popular" ribbon and violet glow. Each plan has a feature checklist with green checkmarks.

6. **Testimonials** — Carousel showing one testimonial at a time with star ratings, quotes, avatar initials, name/role/company. Auto-rotates every 6 seconds. Arrow controls and dot indicators. 5 testimonials total.

7. **FAQ** — 7-question accordion with smooth expand/collapse animation. Plus icon rotates to X when open. First question starts open. Questions cover: free tier, coding knowledge, domains, Stripe, customization, refunds, SEO.

8. **CTA Section** — Final conversion section with headline "Ready to launch your AI product?" and a single gradient CTA button. Subtle background glow effects.

9. **Footer** — 3-column links (Product, Company, Legal) plus brand column with logo, description, and social icons (Twitter/X, GitHub, Discord). Copyright bar at bottom.

10. **Sticky CTA Bar** — Mobile-only bar that appears after scrolling 600px. Shows "Start building free" text and a gradient "Get Started" button. Fixed to bottom of screen.

## Components

- **Navbar** (`components/Navbar.tsx`) — Fixed nav, scroll-aware background blur, mobile menu
- **Hero** (`components/Hero.tsx`) — Animated hero with CTA and product demo mockup
- **LogoCloud** (`components/LogoCloud.tsx`) — Social proof logo bar
- **Features** (`components/Features.tsx`) — 6-card feature grid with scroll animations
- **Pricing** (`components/Pricing.tsx`) — 3-tier pricing with monthly/annual toggle
- **Testimonials** (`components/Testimonials.tsx`) — Auto-rotating testimonial carousel
- **FAQ** (`components/FAQ.tsx`) — Accordion with smooth animations
- **CTASection** (`components/CTASection.tsx`) — Final call-to-action section
- **Footer** (`components/Footer.tsx`) — Site footer with links and social
- **StickyCTA** (`components/StickyCTA.tsx`) — Mobile sticky bottom CTA bar

## Recent Changes

- 2026-02-17: Built complete LaunchDark landing page with all 10 sections
- 2026-02-17: Set up dark-mode color system with violet-to-cyan gradient accents
- 2026-02-17: Added Framer Motion scroll-triggered animations throughout
- 2026-02-17: Created responsive mobile navigation and sticky CTA bar
- 2026-02-17: **Performance overhaul** — Removed Framer Motion (40KB+), replaced with CSS animations + tiny IntersectionObserver (~200B). Converted Hero, LogoCloud, Features, CTASection, Footer to server components. Added skip-to-content link, ARIA labels, focus styles, and semantic roles for accessibility.
- 2026-02-17: Updated color palette to Stellar-inspired slate/purple scheme (slate-900 background, purple-500 to indigo-500 gradient accents)

## How to Customize

- **To change colors:** Edit the CSS variables in `app/globals.css` under `:root`. Change `--accent` and `--accent-cyan` for different gradient colors.
- **To change text:** Edit the text directly in each component file in the `components/` folder.
- **To change pricing:** Edit the `plans` array in `components/Pricing.tsx`.
- **To change features:** Edit the `features` array in `components/Features.tsx`.
- **To change testimonials:** Edit the `testimonials` array in `components/Testimonials.tsx`.
- **To change FAQ:** Edit the `faqs` array in `components/FAQ.tsx`.
- **To add your logo:** Replace the lightning bolt SVG in `components/Navbar.tsx` and `components/Footer.tsx`.
- **To add a real video:** Replace the placeholder in `components/Hero.tsx` with an `<iframe>` or `<video>` element.
- **To connect Stripe:** Add your Stripe price IDs to the CTA links in `components/Pricing.tsx`.
