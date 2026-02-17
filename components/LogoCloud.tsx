const logos = ["Vercel", "Supabase", "Stripe", "OpenAI", "Resend", "Planetscale"];

export default function LogoCloud() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] py-12" aria-label="Trusted partners">
      <div className="mx-auto max-w-6xl px-6">
        <p className="scroll-animate mb-8 text-center text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Trusted by builders shipping with
        </p>
        <div className="scroll-animate flex flex-wrap items-center justify-center gap-x-12 gap-y-6" style={{ transitionDelay: "150ms" }}>
          {logos.map((name) => (
            <span key={name} className="text-lg font-semibold tracking-tight text-[var(--muted)]/50 transition-colors hover:text-[var(--muted)]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
