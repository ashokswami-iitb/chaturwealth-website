"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#approach", label: "Approach" },
  { href: "#structure", label: "Structure" },
  { href: "#founder", label: "Founder" },
  { href: "#insights", label: "Insights" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        boxShadow: scrolled ? "0 1px 0 0 rgba(226,221,212,0.8)" : "none",
      }}
    >
      {/* ── Main bar — 68px mobile / 84px desktop ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[68px] lg:h-[84px]">

        {/* ── Logo ──────────────────────────────────────────────────── */}
        <a
          href="#"
          onClick={scrollTop}
          className="shrink-0 flex items-center"
          aria-label="Chatur Wealth — Home"
        >
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/*
              logo.png: 672 × 257 px (ratio 2.62 : 1 — wide wordmark)
              .nav-logo: height 42px mobile → 54px desktop, width auto, max-width none
              At 54px tall → renders ≈ 141px wide
            */}
            <Image
              src="/logo.png"
              alt="Chatur Wealth"
              width={672}
              height={257}
              className="nav-logo"
              priority
            />
          </motion.div>
        </a>

        {/* ── Desktop nav ───────────────────────────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9"
          role="navigation"
          aria-label="Primary"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link text-[0.67rem] font-semibold tracking-[0.13em] uppercase"
              style={{ color: "var(--body)" }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────────────── */}
        <motion.div
          className="hidden lg:flex items-center"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </motion.div>

        {/* ── Mobile hamburger ──────────────────────────────────────── */}
        <button
          className="lg:hidden p-2"
          style={{ color: "var(--navy)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`block h-px bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white"
            style={{ borderTop: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="py-3.5 text-[0.82rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[#b87010]"
                  style={{ color: "var(--body)", borderBottom: "1px solid var(--border-soft)" }}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 justify-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
