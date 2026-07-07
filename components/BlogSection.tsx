"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const featured = {
  tag: "Feature",
  title: "Why Disciplined Systems Beat Brilliant Traders",
  excerpt:
    "Every year, thousands of intelligent, motivated individuals attempt to beat the market through skill and insight. Most fail — not from lack of intelligence, but from a fundamental misunderstanding of what edge actually means in modern markets. The best-performing strategies over the long run share one characteristic: they are boring. Systematic. Unemotional. This is not a coincidence.",
  readTime: "12 min read",
  author: "Editorial",
  date: "June 2025",
  // FIX: Added href — was missing, button did nothing
  href: "https://www.linkedin.com/pulse/why-disciplined-systems-beat-brilliant-traders-devesh-chawla",
};

const articles = [
  {
    tag: "Education",
    title: "What Is Algo Trading? A Primer for Serious Investors",
    excerpt:
      "Algorithmic trading uses computer programs following precise instructions to execute trades based on market conditions — eliminating human error and emotional interference from the process.",
    readTime: "6 min",
    date: "May 2025",
    // FIX: Added href — was missing, button did nothing
    href: "https://www.linkedin.com/in/deveshchawla/recent-activity/articles/",
  },
  {
    tag: "Risk Management",
    title: "The Architecture of Capital Preservation",
    excerpt:
      "A framework for thinking about downside before upside. Why the best risk managers think in terms of scenarios, not forecasts, and how systematic rules protect capital through every cycle.",
    readTime: "8 min",
    date: "April 2025",
    href: "https://www.linkedin.com/in/deveshchawla/recent-activity/articles/",
  },
  {
    tag: "Research",
    title: "AI in Wealth Management: Signal vs. Noise",
    excerpt:
      "Not all applications of AI to finance are equal. We examine what AI can legitimately contribute to investment decision-making — and where its limitations demand human oversight.",
    readTime: "7 min",
    date: "March 2025",
    href: "https://www.linkedin.com/in/deveshchawla/recent-activity/articles/",
  },
  {
    tag: "Psychology",
    title: "The Hidden Cost of Emotional Decision-Making",
    excerpt:
      "Fear and greed are not character flaws — they are hardwired human responses to uncertainty. Understanding their mechanism is the first step to removing them from your investment process.",
    readTime: "5 min",
    date: "February 2025",
    href: "https://www.linkedin.com/in/deveshchawla/recent-activity/articles/",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="insights"
      ref={ref}
      className="py-28"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="rule-gold" />
              <span className="label">Insights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="serif font-bold leading-[1.1] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                color: "var(--navy)",
              }}
            >
              Thinking on Wealth,
              <br />
              Markets, and Discipline
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.88rem] leading-[1.7] max-w-xs md:text-right"
            style={{ color: "var(--muted)" }}
          >
            Long-form perspectives on investing, risk, and the evolving role
            of technology in wealth creation.
          </motion.p>
        </div>

        {/* Featured article */}
        {/* FIX: Wrapped entire card in <a> tag — previously had cursor-pointer but no href, so clicking did nothing */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--r-xl)] overflow-hidden group cursor-pointer transition-all duration-300"
            style={{
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-border)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            <div className="grid md:grid-cols-[1fr_1px_1fr]">
              {/* Visual panel */}
              <div
                className="min-h-[280px] md:min-h-[360px] flex flex-col justify-between p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, var(--navy) 0%, #0a1928 100%)",
                }}
              >
                {/* Architectural grid */}
                <div
                  className="absolute inset-0 opacity-[0.045]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Large typographic mark */}
                <div
                  className="absolute bottom-0 right-0 leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(8rem, 18vw, 14rem)",
                    color: "rgba(255,255,255,0.028)",
                    fontWeight: 700,
                    lineHeight: 0.85,
                  }}
                >
                  CW
                </div>
                {/* Top: Tag */}
                <div className="relative z-10">
                  <span
                    className="inline-block px-3 py-1.5 rounded-[4px] text-[0.62rem] font-bold tracking-[0.16em] uppercase"
                    style={{
                      background: "rgba(212,151,30,0.18)",
                      color: "var(--gold-light)",
                      border: "1px solid rgba(212,151,30,0.28)",
                    }}
                  >
                    {featured.tag}
                  </span>
                </div>
                {/* Bottom: meta */}
                <div className="relative z-10">
                  <div
                    className="text-[0.65rem] font-semibold tracking-wider uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {featured.author} · {featured.date} · {featured.readTime}
                  </div>
                  <div
                    className="font-bold leading-tight text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                    }}
                  >
                    {featured.title}
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div style={{ background: "var(--border)" }} />

              {/* Content panel */}
              <div className="p-8 md:p-10 flex flex-col justify-center" style={{ background: "var(--ivory)" }}>
                <div
                  className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  Feature · Editorial
                </div>
                <p
                  className="text-[0.92rem] leading-[1.85] mb-6"
                  style={{ color: "var(--body)" }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[0.78rem] font-semibold transition-colors duration-200 group-hover:text-[#b87010]"
                    style={{ color: "var(--navy)" }}
                  >
                    Read full article
                  </span>
                  <span
                    className="text-[0.78rem] transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "var(--gold)" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </a>

        {/* Secondary articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            // FIX: Wrapped each card in <a> tag — previously had cursor-pointer but no href, so clicking did nothing
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[var(--r-lg)] overflow-hidden group cursor-pointer transition-all duration-300 h-full"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-xs)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xs)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Colour accent bar */}
                <div
                  className="h-[2px] w-full"
                  style={{ background: "linear-gradient(to right, var(--gold), var(--gold-border))" }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[0.65rem] font-bold tracking-[0.14em] uppercase"
                      style={{ color: "var(--gold)" }}
                    >
                      {a.tag}
                    </span>
                    <span
                      className="text-[0.65rem]"
                      style={{ color: "var(--muted)" }}
                    >
                      {a.readTime}
                    </span>
                  </div>
                  <h4
                    className="serif font-bold leading-snug mb-3 group-hover:text-[#b87010] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      color: "var(--navy)",
                    }}
                  >
                    {a.title}
                  </h4>
                  <p
                    className="text-[0.82rem] leading-[1.75] mb-4"
                    style={{ color: "var(--body)" }}
                  >
                    {a.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[0.75rem] font-semibold"
                      style={{ color: "var(--navy)" }}
                    >
                      Read more
                    </span>
                    <span
                      className="text-[0.75rem] transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: "var(--gold)" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
