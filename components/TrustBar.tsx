"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "₹50L+", label: "Minimum Capital" },
  { value: "15%", label: "Hurdle Rate" },
  { value: "7+", label: "Years of Live Data" },
  { value: "1,100+", label: "Startups Backed by Founder" },
  { value: "Zero", label: "Upfront Fees" },
  { value: "100%", label: "Client-Owned Accounts" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-14"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(184,112,16,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.07]"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              <div
                className="font-bold mb-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  color: "var(--gold-light)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[0.67rem] font-semibold tracking-[0.14em] uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
