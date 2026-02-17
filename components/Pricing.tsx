"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For side projects and MVPs",
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: "Free",
    cta: "Get Started",
    ctaStyle: "border" as const,
    features: ["1 landing page", "All core sections", "Dark mode template", "Basic animations", "Community support"],
  },
  {
    name: "Pro",
    description: "For serious launches",
    monthlyPrice: 49,
    annualPrice: 39,
    priceLabel: null,
    cta: "Start Free Trial",
    ctaStyle: "gradient" as const,
    popular: true,
    features: ["Unlimited pages", "Advanced scroll animations", "Stripe checkout integration", "Custom color themes", "Analytics dashboard", "Priority support", "Remove branding"],
  },
  {
    name: "Team",
    description: "For agencies and teams",
    monthlyPrice: 149,
    annualPrice: 119,
    priceLabel: null,
    cta: "Contact Sales",
    ctaStyle: "border" as const,
    features: ["Everything in Pro", "5 team members", "White-label exports", "Custom domains", "A/B testing tools", "Dedicated account manager", "SLA guarantee"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 md:py-32" aria-label="Pricing plans">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">Pricing</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple pricing,{" "}
            <span className="text-gradient">no surprises</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Start free. Upgrade when you&apos;re ready to launch for real.
          </p>
        </div>

        {/* Toggle */}
        <div className="scroll-animate mb-12 flex items-center justify-center gap-4" style={{ transitionDelay: "150ms" }}>
          <span className={`text-sm font-medium ${!annual ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-[var(--accent)]" : "bg-[var(--border-light)]"}`}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual pricing"
          >
            <span className="pricing-knob absolute top-1 h-5 w-5 rounded-full bg-white" style={{ left: annual ? "calc(100% - 24px)" : "4px" }} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}>Annual</span>
          {annual && (
            <span className="savings-badge rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              Save 20%
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="scroll-animate-group grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`stagger-item relative overflow-hidden rounded-xl border p-6 md:p-8 ${
                plan.popular
                  ? "border-[var(--accent)]/50 bg-[var(--surface-raised)] glow-violet"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
              style={{ "--stagger": i } as React.CSSProperties}
            >
              {plan.popular && (
                <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-10 py-1 text-xs font-bold text-white" aria-label="Most popular plan">
                  Popular
                </div>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold">
                  {plan.priceLabel ?? `$${annual ? plan.annualPrice : plan.monthlyPrice}`}
                </span>
                {!plan.priceLabel && <span className="text-sm text-[var(--muted)]">/month</span>}
              </div>

              <a
                href="#"
                className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  plan.ctaStyle === "gradient"
                    ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-light)] hover:bg-[var(--surface-raised)]"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-6" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[var(--muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
