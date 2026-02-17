"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2" aria-label="LaunchDark home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--foreground)]">
              LaunchDark
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Sign in
            </a>
            <a href="#pricing" className="rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden" role="menu">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]" role="menuitem">
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-[var(--border)] pt-4">
              <a href="#pricing" className="px-3 py-2 text-sm text-[var(--muted)]">Sign in</a>
              <a href="#pricing" className="rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-4 py-2.5 text-center text-sm font-medium text-white">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
