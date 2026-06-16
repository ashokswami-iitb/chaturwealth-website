"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function DisclaimerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref}
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 lg:px-10 py-14"
      >
        {/* Label */}
        <div className="flex items-center gap-4 mb-7">
          <span
            className="text-[0.62rem] font-bold tracking-[0.22em] uppercase"
            style={{ color: "rgba(212,151,30,0.75)" }}
          >
            Important Disclosure
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p
            className="text-[0.82rem] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            Chatur Wealth operates as a facilitator for algorithmic trade execution only. It is not a
            Portfolio Management Service (PMS), Alternative Investment Fund (AIF), or registered
            investment adviser under the Securities and Exchange Board of India (SEBI) Act. Chatur
            Wealth does not hold client funds at any point — all capital remains within the
            client&apos;s own designated Demat and Trading account at all times.
          </p>
          <p
            className="text-[0.8rem] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Investment in securities markets is subject to market risks. Past performance of any
            algorithmic strategy does not guarantee or imply future results. Capital preservation
            mechanisms described on this website are structural risk controls and do not constitute a
            guarantee of capital protection. Clients are strongly advised to read all offer
            documents, disclosures, and agreements carefully and seek independent professional advice
            before committing capital.
          </p>
          <p
            className="text-[0.76rem] leading-[1.85]"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            This website is for informational purposes only and does not constitute an offer,
            solicitation, or recommendation to buy or sell any financial instrument. All information
            is provided in good faith and is subject to change without notice. Chatur Wealth
            reserves the right to modify strategy parameters, fee structures, and onboarding
            requirements at any time.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
