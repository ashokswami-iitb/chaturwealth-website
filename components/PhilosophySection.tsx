"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "I",
    title: "Discipline Over Intuition",
    body: "Human intuition is a liability in markets. Every trade executed by our system follows a pre-defined, backtested rule — not a hunch, a mood, or a market tip. We believe sustainable wealth is built on consistency, not cleverness.",
  },
  {
    number: "II",
    title: "Process Over Prediction",
    body: "No one can reliably predict markets. What we can control is the quality of our process — how we enter, how we size positions, how we exit, and how we respond to adverse conditions. Our edge is process, not prophecy.",
  },
  {
    number: "III",
    title: "Capital Preservation First",
    body: "Growth is meaningless without durability. Before any strategy is deployed, we design its risk framework — maximum drawdown limits, stop-loss parameters, and position sizing — so that preservation comes before appreciation.",
  },
  {
    number: "IV",
    title: "Transparency in Every Interaction",
    body: "Your capital never leaves your own Demat account. Monthly reports detail every trade, every position, every result. We believe investors deserve complete visibility, not just periodic summaries.",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-28"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="rule-gold" />
            <span className="label">Investment Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="serif font-bold leading-[1.1] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: "var(--navy)",
            }}
          >
            Risk comes from not knowing
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              what you are doing.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1.05rem] leading-[1.85]"
            style={{ color: "var(--body)", maxWidth: "580px" }}
          >
            At Chatur Wealth, we know exactly what we are doing. Our approach
            is built on first principles: eliminate emotion, enforce rules,
            and let data guide every decision. This is the foundation from
            which everything else follows.
          </motion.p>
        </div>

        {/* Pillars — editorial numbered list */}
        <div className="grid md:grid-cols-2 gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 lg:p-12 rounded-[var(--r-xl)] transition-all duration-300 cursor-default"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xs)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--ivory)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--white)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xs)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="shrink-0 w-10 h-10 rounded-[6px] flex items-center justify-center"
                  style={{
                    background: "var(--gold-pale)",
                    border: "1px solid var(--gold-border)",
                  }}
                >
                  <span
                    className="serif font-bold text-[1rem]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                  >
                    {p.number}
                  </span>
                </div>
                <div>
                  <h3
                    className="serif font-bold text-[1.3rem] mb-3 leading-tight group-hover:text-[#b87010] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)", color: "var(--navy)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[0.9rem] leading-[1.8]"
                    style={{ color: "var(--body)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative overflow-hidden rounded-[var(--r-xl)]"
          style={{ background: "var(--navy)" }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 px-10 py-10">
            <div
              className="leading-none shrink-0 mt-[-8px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 8vw, 7rem)",
                color: "var(--gold)",
                lineHeight: 1,
                opacity: 0.85,
              }}
            >
              &ldquo;
            </div>
            <div>
              <p
                className="italic leading-[1.65] mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.55rem)",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                The market is not a casino to be beaten on any given day. It is
                a long river — and our job is to build the vessel that keeps
                you on it.
              </p>
              <span
                className="text-[0.72rem] font-bold tracking-[0.16em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                — Devesh Chawla, Founder
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
