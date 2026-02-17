export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--accent-cyan)] opacity-[0.03] blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="hero-enter hero-enter-1 mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <span className="text-sm text-[var(--muted)]">Now in public beta — 2,000+ products launched</span>
          </div>
        </div>

        <h1 className="hero-enter hero-enter-2 mx-auto max-w-4xl text-center font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
          Ship your AI product{" "}
          <span className="text-gradient">in days, not months</span>
        </h1>

        <p className="hero-enter hero-enter-3 mx-auto mt-6 max-w-2xl text-center text-lg text-[var(--muted)] md:text-xl">
          Stop spending weeks on landing pages. LaunchDark gives you a production-ready dark-mode template with scroll animations, pricing tables, and everything your AI product needs to convert.
        </p>

        <div className="hero-enter hero-enter-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#pricing" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
            Start Building Free
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-base font-medium text-[var(--foreground)] transition-all hover:border-[var(--border-light)] hover:bg-[var(--surface-raised)]">
            <svg className="h-5 w-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Product Demo */}
        <div className="hero-enter-demo relative mx-auto mt-16 max-w-5xl md:mt-20" id="demo">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent-cyan)]/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3" aria-hidden="true">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-[var(--background)] px-3 py-1 text-center text-xs text-[var(--muted)]">
                yourproduct.ai
              </div>
            </div>
            <div className="relative aspect-video bg-gradient-to-br from-[var(--surface)] to-[var(--background)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                  <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--muted)]">Your product demo goes here</p>
              </div>
              <div className="absolute left-6 top-6 w-48 space-y-3 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] p-4 opacity-60" aria-hidden="true">
                <div className="h-2 w-24 rounded-full bg-[var(--border-light)]" />
                <div className="h-2 w-36 rounded-full bg-[var(--border)]" />
                <div className="h-2 w-20 rounded-full bg-[var(--border)]" />
              </div>
              <div className="absolute bottom-6 right-6 w-40 space-y-2 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] p-4 opacity-60" aria-hidden="true">
                <div className="h-8 w-full rounded bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent-cyan)]/20" />
                <div className="h-2 w-28 rounded-full bg-[var(--border)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
