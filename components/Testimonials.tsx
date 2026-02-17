"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "I launched my AI writing tool on a Friday and had 200 signups by Monday. The template saved me two weeks of frontend work.",
    name: "Sarah Chen",
    role: "Founder",
    company: "WriteFlow AI",
    avatar: "SC",
    accentColor: "from-violet-500 to-purple-600",
  },
  {
    quote: "The scroll animations alone are worth it. My conversion rate jumped 34% after switching from a plain HTML page to LaunchDark.",
    name: "Marcus Johnson",
    role: "Solo Developer",
    company: "CodePilot",
    avatar: "MJ",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    quote: "As a designer, I'm picky about templates. This one actually looks good out of the box. The dark mode palette is chef's kiss.",
    name: "Priya Patel",
    role: "Design Engineer",
    company: "Synthwave Labs",
    avatar: "PP",
    accentColor: "from-pink-500 to-rose-600",
  },
  {
    quote: "Deployed to Vercel in literally 2 minutes. Had Stripe payments working the same afternoon. This is how shipping should feel.",
    name: "Alex Rivera",
    role: "Indie Hacker",
    company: "ShipIt.dev",
    avatar: "AR",
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    quote: "We used LaunchDark for 3 different product launches this quarter. Each one looked completely unique with just color changes.",
    name: "Jordan Kim",
    role: "CTO",
    company: "NeuralStack",
    avatar: "JK",
    accentColor: "from-green-500 to-emerald-600",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-24 md:py-32" aria-label="Customer testimonials">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-animate mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">Testimonials</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by{" "}
            <span className="text-gradient">builders like you</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Carousel with crossfade */}
          <div className="relative min-h-[260px]" role="region" aria-roledescription="carousel" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card ${i === active ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                aria-hidden={i !== active}
              >
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] p-8 md:p-10">
                  <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="h-5 w-5 text-[var(--accent-amber)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-6 text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.accentColor} text-sm font-bold text-white`} aria-hidden="true">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">{t.name}</p>
                      <p className="text-sm text-[var(--muted)]">{t.role} at {t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--border-light)] hover:text-[var(--foreground)]"
              aria-label="Previous testimonial"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border-light)] hover:bg-[var(--muted)]"}`}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--border-light)] hover:text-[var(--foreground)]"
              aria-label="Next testimonial"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
