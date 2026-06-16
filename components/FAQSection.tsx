"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const faqs = [
  {
    q: "What is Chatur Wealth and how does it differ from a mutual fund or PMS?",
    a: "Chatur Wealth is an algorithmic strategy provider — we connect AI-driven trading systems to your own Demat account. Unlike a mutual fund or PMS, your funds never leave your account, are never pooled with others, and you retain full legal ownership at all times. We are facilitators of algo execution, not fund managers.",
  },
  {
    q: "What is the minimum capital requirement?",
    a: "The minimum is ₹50 Lakhs. This can be scaled upward in multiples of ₹10 Lakhs. If you hold an existing long-term equity portfolio or mutual funds, you may be able to pledge those assets and participate with a smaller liquid capital commitment — our team will assess this during your consultation.",
  },
  {
    q: "How does the fee structure work?",
    a: "There are zero upfront fees. You choose between two models: (A) 20% flat commission on all profits generated, or (B) 50% commission only on profits generated above a 15% annual hurdle rate. Settlement is quarterly. If no profits are generated, no performance fees are charged.",
  },
  {
    q: "What is a hurdle rate, and why does it matter?",
    a: "A hurdle rate is the minimum return threshold below which we charge zero performance fee. Our 15% hurdle rate means that the first 15% of annual returns belongs entirely to you — our fee only applies to profits beyond that level. This directly aligns our incentives with yours and is one of the most investor-friendly structures in the industry.",
  },
  {
    q: "How is my capital protected against loss?",
    a: "We operate a multi-layer risk framework. Trading is automatically paused if capital falls by 25% from the deployed amount. Every strategy has pre-defined stop-loss parameters. Pledging positions are checked daily. On any system or exchange anomaly, all open positions are immediately exited. No guarantee of capital protection exists, but structural safeguards are embedded throughout.",
  },
  {
    q: "Can I use my existing Demat or Trading account?",
    a: "Yes. You may use an existing Demat and Trading account or open a new one. The only requirement is that the designated account not be used for manual or non-algorithmic trades, as this can disrupt strategy execution and risk calculations.",
  },
  {
    q: "What transparency can I expect once onboarded?",
    a: "Complete transparency is a founding principle. You receive a detailed monthly report covering every trade executed, every position taken, and a full P&L breakdown. Our team is available for quarterly review calls. You have real-time visibility into your own account at all times via your broker's platform.",
  },
  {
    q: "What happens during extreme market events like a crash or circuit breaker?",
    a: "Our strategies incorporate fixed stop-loss parameters that respond to adverse market movements. In the event of circuit breakers, exchange halts, or major macro dislocations, our risk protocol defaults to exiting all open positions to protect capital. These scenarios are part of our risk framework design, not exceptions to it.",
  },
  {
    q: "Who is Devesh Chawla and what is his background?",
    a: "Devesh Chawla is the Founder and CEO of both Chatur Wealth and Chatur Ideas — one of India's largest startup-enabling platforms. He is a Forbes Top 100 Great People Managers awardee (2021), recipient of the Mahatma Gandhi Samman Award, 2× TEDx Speaker, and has worked with 1,100+ startups and 1,500+ investors. He brings a rigorous, systems-first approach to investing rooted in his experience building and advising high-growth businesses.",
  },
];

function Item({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-[0.95rem] leading-snug"
          style={{ color: open ? "var(--gold)" : "var(--navy)" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-all duration-200"
          style={{
            background: open ? "var(--gold-pale)" : "var(--cream)",
            border: `1px solid ${open ? "var(--gold-border)" : "var(--border)"}`,
            color: open ? "var(--gold)" : "var(--muted)",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          >
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-[0.9rem] leading-[1.85] pb-6"
              style={{ color: "var(--body)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-28"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 xl:gap-24">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="rule-gold" />
              <span className="label">Common Questions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="serif font-bold leading-[1.1] tracking-[-0.02em] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "var(--navy)",
              }}
            >
              Questions We
              <br />
              Hear Most Often
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-[0.9rem] leading-[1.8] mb-8"
              style={{ color: "var(--body)" }}
            >
              We believe informed investors make better long-term partners.
              If your question is not here, we welcome a direct conversation.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--gold)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
              }
            >
              Ask a direct question →
            </motion.a>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {faqs.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                delay={0.1 + i * 0.04}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
