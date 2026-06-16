"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frameworks = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    tag: "Risk Management",
    title: "A Framework Built Around Preservation",
    body: "Every strategy begins with its worst-case scenario. We define the maximum permissible drawdown before a trade is placed. If capital dips beyond a defined threshold, the system pauses automatically — protecting you from compounding losses in adverse conditions.",
    points: [
      "Fixed stop-loss at 25% of deployed capital",
      "Daily reconciliation of pledged positions",
      "Immediate exit on system or exchange anomalies",
      "No manual override of risk parameters",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 16l4-4 4 4 4-4" />
      </svg>
    ),
    tag: "AI-Assisted Research",
    title: "Data-Driven, Not Data-Dazzled",
    body: "Our AI models process market microstructure, volatility regimes, and macro signals to identify strategy entry and exit conditions. The machine identifies the signal. The rulebook determines action. Human judgment validates the framework — not the individual trade.",
    points: [
      "Live-tested and back-tested strategy cycles",
      "Continuous refinement as market conditions evolve",
      "No single-point-of-failure in signal generation",
      "Strategies updated only after rigorous validation",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tag: "Portfolio Monitoring",
    title: "Eyes on Every Position, Every Day",
    body: "Algorithmic execution does not mean absent management. Our team monitors live positions, system health, and brokerage connectivity daily. You receive a complete monthly report — every trade, every entry, every exit, every P&L line.",
    points: [
      "Daily position and ledger reconciliation",
      "Proactive alerts on margin or pledging issues",
      "Detailed monthly performance reporting",
      "Direct founder accessibility for major queries",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tag: "Capital Preservation",
    title: "Your Funds Stay in Your Name",
    body: "This is a non-negotiable principle. All trades execute within your own Demat and Trading account. We are facilitators, not custodians. We never hold, pool, or transfer client funds. Our alignment is architectural — we earn only when our strategies generate profits for you.",
    points: [
      "100% client-owned Demat account structure",
      "Zero pooling or commingling of funds",
      "Performance fee model — we earn when you earn",
      "No lock-in periods — exit on your terms",
    ],
  },
];

export default function ApproachSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="approach"
      ref={ref}
      className="py-28"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="rule-gold" />
            <span className="label">Our Approach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="serif font-bold leading-[1.1] tracking-[-0.02em] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              color: "var(--navy)",
            }}
          >
            How We Protect and
            <br />
            Grow Your Capital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] leading-[1.8]"
            style={{ color: "var(--body)" }}
          >
            Our process replaces market speculation with systematic, data-led
            decision making. Four integrated frameworks govern how we manage
            every rupee entrusted to us.
          </motion.p>
        </div>

        {/* Framework cards */}
        <div className="space-y-6">
          {frameworks.map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--r-xl)] overflow-hidden group transition-all duration-300"
              style={{
                background: "var(--white)",
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
              <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0">
                {/* Left */}
                <div className="p-9 lg:p-11">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        background: "var(--gold-pale)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--gold)",
                      }}
                    >
                      {f.icon}
                    </div>
                    <span className="label">{f.tag}</span>
                  </div>
                  <h3
                    className="serif font-bold text-[1.45rem] leading-tight mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--navy)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-[0.9rem] leading-[1.8]"
                    style={{ color: "var(--body)" }}
                  >
                    {f.body}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ background: "var(--border)" }} className="hidden md:block" />

                {/* Right — key points */}
                <div
                  className="p-9 lg:p-11 md:border-t-0 border-t"
                  style={{ background: "var(--ivory)", borderColor: "var(--border)" }}
                >
                  <p
                    className="text-[0.68rem] font-bold tracking-[0.18em] uppercase mb-5"
                    style={{ color: "var(--muted)" }}
                  >
                    Key Points
                  </p>
                  <ul className="space-y-4">
                    {f.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: "var(--gold)" }}
                        />
                        <span
                          className="text-[0.88rem] leading-[1.6]"
                          style={{ color: "var(--body)" }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison — algo vs manual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid md:grid-cols-2 gap-5 items-stretch"
        >
          <div
            className="rounded-[var(--r-lg)] p-8"
            style={{ background: "var(--white)", border: "1px solid var(--border)" }}
          >
            <h4
              className="serif font-bold text-[1.2rem] mb-5"
              style={{ fontFamily: "var(--font-display)", color: "#b91c1c" }}
            >
              Manual Trading — The Risks
            </h4>
            <ul className="space-y-3">
              {[
                "Emotion-driven decisions under market stress",
                "No systematic exit strategy in adverse conditions",
                "Inconsistent position sizing and risk management",
                "Prone to confirmation bias and recency effect",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.88rem]" style={{ color: "var(--body)" }}>
                  <span className="text-red-400 mt-0.5 shrink-0 text-[0.9rem]">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[var(--r-lg)] p-8"
            style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
          >
            <h4
              className="serif font-bold text-[1.2rem] mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy)" }}
            >
              Chatur Wealth — The Framework
            </h4>
            <ul className="space-y-3">
              {[
                "Rules-based execution — zero emotional interference",
                "Pre-defined exit parameters for every strategy",
                "Consistent position sizing governed by risk models",
                "AI-validated signals, human-audited frameworks",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.88rem]" style={{ color: "var(--body)" }}>
                  <svg
                    className="mt-1 shrink-0"
                    width="13"
                    height="11"
                    viewBox="0 0 13 11"
                    fill="none"
                  >
                    <path d="M1 5.5l3.5 3.5L12 1" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
