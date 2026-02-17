"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this really free to start with?",
    answer: "Yes. The Starter plan is completely free with no credit card required. You get a fully functional landing page with all core sections. Upgrade to Pro only when you need advanced features like Stripe integration or custom themes.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. LaunchDark works out of the box — just edit the text and images in the template files. If you can edit a document, you can customize this template. For advanced customization, basic React knowledge helps but isn't required.",
  },
  {
    question: "Can I use this with my own domain?",
    answer: "Absolutely. Deploy to Vercel (free), Netlify, or any hosting platform, then point your custom domain. The whole process takes about 5 minutes. We include step-by-step deployment guides for all major platforms.",
  },
  {
    question: "How does the Stripe integration work?",
    answer: "The pricing section is pre-structured with Stripe Checkout-compatible markup. Add your Stripe publishable key and price IDs, and you have a working checkout flow. We include a setup guide that walks you through creating products in Stripe and connecting them.",
  },
  {
    question: "Can I customize the colors and branding?",
    answer: "Everything is customizable through CSS variables. Change the accent gradient, background shades, typography, and spacing from a single config file. The gradient system supports any two-color combination for your brand.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 14-day money-back guarantee on all paid plans, no questions asked. If LaunchDark doesn't help you ship faster, we'll refund your purchase in full.",
  },
  {
    question: "Is this optimized for SEO?",
    answer: "Yes. The template includes proper semantic HTML, meta tags, Open Graph images, structured data markup, and generates a sitemap automatically. We follow Google's Core Web Vitals best practices with a 95+ Lighthouse score out of the box.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-6">
        <div className="scroll-animate mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">FAQ</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Common questions,{" "}
            <span className="text-gradient">clear answers</span>
          </h2>
        </div>

        <div className="scroll-animate space-y-3" style={{ transitionDelay: "150ms" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "faq-open border-[var(--accent)]/30 bg-[var(--surface-raised)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="pr-4 font-medium text-[var(--foreground)]">{faq.question}</span>
                  <svg className="faq-icon h-5 w-5 shrink-0 text-[var(--muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div
                  className={`faq-content ${isOpen ? "is-open" : ""}`}
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <div>
                    <p className="px-6 pb-5 leading-relaxed text-[var(--muted)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
