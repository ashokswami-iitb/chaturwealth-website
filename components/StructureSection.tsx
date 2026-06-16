"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const requirements = [
  {
    icon: "◈",
    title: "Minimum Capital",
    body: "₹50 Lakhs, scalable in multiples of ₹10 Lakhs. There is no upper limit to capital deployed.",
  },
  {
    icon: "◈",
    title: "Account Ownership",
    body: "All trades execute within your own Demat and Trading account — new or existing. Funds are never pooled.",
  },
  {
    icon: "◈",
    title: "Pledging Option",
    body: "Existing long-term equity portfolios and mutual funds can be pledged, enabling algo execution at 20% of the normal capital requirement for Mark-to-Market margins.",
  },
  {
    icon: "◈",
    title: "Stop-Loss Framework",
    body: "Trading pauses automatically if capital falls by 25% from the deployed amount. This is a hard, non-negotiable parameter.",
  },
  {
    icon: "◈",
    title: "Account Hygiene",
    body: "No manual or non-algorithmic trades in the designated account. Parallel trading disrupts strategy execution and risk calculations.",
  },
  {
    icon: "◈",
    title: "Monthly Reporting",
    body: "Detailed monthly statements covering every trade, P&L, and account balance. Quarterly performance review calls with the team.",
  },
];

const fees = [
  {
    label: "Sign-up Fee",
    value: "Zero",
    note: "No upfront or onboarding charges",
  },
  {
    label: "Option A",
    value: "20%",
    note: "Flat commission on all profits generated",
  },
  {
    label: "Option B",
    value: "50%",
    note: "On profits above the 15% annual hurdle rate only",
  },
  {
    label: "Settlement",
    value: "Quarterly",
    note: "Performance fees settled every quarter",
  },
];

const journey = [
  { step: "01", title: "Submit Enquiry", desc: "Complete the consultation form. No commitment required at this stage." },
  { step: "02", title: "Private Consultation", desc: "A one-on-one conversation to understand your goals, timeline, and risk parameters." },
  { step: "03", title: "Account Configuration", desc: "Set up or designate your Demat/Trading account. Our team guides every step." },
  { step: "04", title: "Strategy Activation", desc: "Algorithms connect to your account. Automated execution begins." },
  { step: "05", title: "Ongoing Oversight", desc: "Daily monitoring, monthly reports, and quarterly review calls keep you fully informed." },
];

export default function StructureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="structure"
      ref={ref}
      className="py-28"
      style={{ background: "var(--white)" }}
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
            <span className="label">Investment Structure</span>
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
            Clear Structure.
            <br />
            Complete Alignment.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] leading-[1.8]"
            style={{ color: "var(--body)" }}
          >
            We believe that structural clarity is a form of respect. Every
            term, every requirement, and every fee is explicit — no hidden
            clauses, no ambiguity.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-16">
          {/* Capital Requirements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="serif font-bold text-[1.5rem] mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy)" }}
            >
              Capital Requirements
            </motion.h3>

            <div className="space-y-3 mb-12">
              {requirements.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5 p-6 rounded-[var(--r-md)] transition-all duration-200"
                  style={{
                    background: "var(--ivory)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold-border)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                >
                  <span
                    className="text-[1.1rem] mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    {r.icon}
                  </span>
                  <div>
                    <h4
                      className="font-bold text-[0.92rem] mb-1"
                      style={{ color: "var(--navy)" }}
                    >
                      {r.title}
                    </h4>
                    <p
                      className="text-[0.86rem] leading-[1.75]"
                      style={{ color: "var(--body)" }}
                    >
                      {r.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Investor Journey */}
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="serif font-bold text-[1.5rem] mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy)" }}
            >
              The Investor Journey
            </motion.h3>

            <div className="relative">
              <div
                className="absolute left-5 top-3 bottom-3 w-px"
                style={{
                  background: "linear-gradient(to bottom, var(--gold), var(--cream-mid))",
                }}
              />
              <div className="space-y-8">
                {journey.map((j, i) => (
                  <motion.div
                    key={j.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-7 relative"
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 font-bold text-[0.75rem] tracking-wide"
                      style={{
                        background: "var(--gold-pale)",
                        border: "1.5px solid var(--gold-border)",
                        color: "var(--gold)",
                      }}
                    >
                      {j.step}
                    </div>
                    <div className="pt-1.5">
                      <h4
                        className="font-bold text-[0.95rem] mb-1"
                        style={{ color: "var(--navy)" }}
                      >
                        {j.title}
                      </h4>
                      <p
                        className="text-[0.86rem] leading-[1.7]"
                        style={{ color: "var(--body)" }}
                      >
                        {j.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Fee Structure — sticky sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-24"
            >
              <div
                className="rounded-[var(--r-xl)] overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Header */}
                <div
                  className="px-8 py-7"
                  style={{ background: "var(--navy)" }}
                >
                  <span
                    className="text-[0.68rem] font-bold tracking-[0.18em] uppercase block mb-2"
                    style={{ color: "rgba(212,151,30,0.8)" }}
                  >
                    Fee Structure
                  </span>
                  <h3
                    className="serif font-bold text-[1.5rem] leading-tight text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Performance-Aligned
                    <br />
                    Compensation
                  </h3>
                  <p className="text-[0.82rem] mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    We earn only when our strategies generate profits for you.
                  </p>
                </div>

                {/* Fee rows */}
                <div style={{ background: "var(--white)" }}>
                  {fees.map((fee, i) => (
                    <div
                      key={fee.label}
                      className="px-8 py-6"
                      style={{
                        borderBottom: i < fees.length - 1 ? "1px solid var(--border-soft)" : "none",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className="text-[0.7rem] font-bold tracking-[0.14em] uppercase block mb-0.5"
                            style={{ color: "var(--muted)" }}
                          >
                            {fee.label}
                          </span>
                          <p
                            className="text-[0.84rem]"
                            style={{ color: "var(--body)" }}
                          >
                            {fee.note}
                          </p>
                        </div>
                        <span
                          className="font-bold leading-none shrink-0"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                            color: "var(--gold)",
                          }}
                        >
                          {fee.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="px-8 py-7"
                  style={{ background: "var(--ivory)", borderTop: "1px solid var(--border)" }}
                >
                  <a
                    href="#contact"
                    className="btn-primary w-full justify-center"
                  >
                    Begin Onboarding
                  </a>
                  <p
                    className="text-center text-[0.7rem] mt-3"
                    style={{ color: "var(--muted)" }}
                  >
                    No commitment at enquiry stage.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
