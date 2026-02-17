const features = [
  {
    title: "Deploy in 90 Seconds",
    description: "Push to GitHub, connect to Vercel, and your landing page is live. No DevOps, no configuration headaches.",
    accent: "from-[var(--accent)] to-purple-400",
    iconAnim: "icon-anim icon-anim-bounce feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Dark Mode by Default",
    description: "Built for the developer aesthetic your AI audience expects. Deep blacks, vibrant gradients, and pixel-perfect contrast.",
    accent: "from-[var(--accent-cyan)] to-blue-400",
    iconAnim: "icon-anim icon-anim-scale feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Scroll Animations",
    description: "Smooth CSS animations power every section. Fade-ins, parallax effects, and staggered reveals that feel buttery smooth.",
    accent: "from-amber-400 to-[var(--accent-amber)]",
    iconAnim: "icon-anim icon-anim-spin feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Stripe-Ready Pricing",
    description: "Monthly/annual toggle with savings badges, highlight tiers, and markup structured for direct Stripe Checkout integration.",
    accent: "from-green-400 to-emerald-500",
    iconAnim: "icon-anim icon-anim-flip feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    title: "Social Proof Built In",
    description: "Testimonials carousel with avatars, roles, and companies. Because 92% of people trust peer recommendations over ads.",
    accent: "from-pink-400 to-rose-500",
    iconAnim: "icon-anim icon-anim-slide feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "95+ Lighthouse Score",
    description: "Server-rendered with Next.js, optimized images, minimal JS bundle. Your launch page loads fast on every device.",
    accent: "from-[var(--accent)] to-[var(--accent-cyan)]",
    iconAnim: "icon-anim icon-anim-spring feature-icon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32" aria-label="Features">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-animate mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Features
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient">launch fast</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Built by indie hackers, for indie hackers. Every feature exists because we needed it for our own launches.
          </p>
        </div>

        <div className="scroll-animate-group grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card stagger-item group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-light)] hover:bg-[var(--surface-raised)]"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.07]`} aria-hidden="true" />

              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${feature.accent} text-white ${feature.iconAnim}`}>
                {feature.icon}
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
