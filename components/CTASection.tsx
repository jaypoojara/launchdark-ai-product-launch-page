export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-label="Call to action">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="scroll-animate">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            Ready to launch{" "}
            <span className="text-gradient">your AI product?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)]">
            Join 2,000+ indie hackers who shipped their landing pages in a single afternoon. Your product deserves more than a half-built homepage.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
            >
              Get Started — It&apos;s Free
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">No credit card required. Deploy in under 2 minutes.</p>
        </div>
      </div>
    </section>
  );
}
