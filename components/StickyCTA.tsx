"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-cta-bar fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl md:hidden ${visible ? "is-visible" : ""}`}
      role="complementary"
      aria-label="Quick action bar"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">Start building free</p>
          <p className="text-xs text-[var(--muted)]">No credit card required</p>
        </div>
        <a href="#pricing" className="rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-5 py-2.5 text-sm font-semibold text-white">
          Get Started
        </a>
      </div>
    </div>
  );
}
