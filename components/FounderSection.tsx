"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const awards = [
  {
    title: "Forbes Top 100 Great People Managers",
    year: "2021",
    body: "Recognised by Forbes India among the top 100 people managers nationwide.",
  },
  {
    title: "Mahatma Gandhi Samman Award",
    year: "36th International Congress of NRIs",
    body: "Awarded to just 25 Indians globally. Presented by former Lok Sabha Speaker Meira Kumar.",
  },
  {
    title: "Entrepreneur of the Year",
    year: "Indian Achievers Forum, 2018",
    body: "Presented by Ashwini Kumar Choubey, Minister of State for Health and Family Welfare.",
  },
  {
    title: "CEO of the Year",
    year: "GISR Foundation & American College of Dubai, 2019",
    body: "Recognised for exceptional leadership and organisational performance.",
  },
  {
    title: "Youth Leadership Award",
    year: "Trade Commissioner of Canada",
    body: "Awarded for outstanding entrepreneurial contribution by a young Indian leader.",
  },
  {
    title: "Business World 40 Under 40",
    year: "BW Businessworld",
    body: "Listed among India's most impactful entrepreneurs under the age of 40.",
  },
];

const credentials = [
  { value: "1,100+", label: "Startups Mentored" },
  { value: "1,500+", label: "Investors Networked" },
  { value: "125+", label: "Cities Across India" },
  { value: "2×", label: "TEDx Speaker" },
];

export default function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="founder"
      ref={ref}
      className="overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[480px_1fr] xl:grid-cols-[560px_1fr]">

          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:min-h-[760px]"
            style={{ minHeight: "420px" }}
          >
            <Image
              src="/founder.jpg"
              alt="Devesh Chawla — Founder & CEO, Chatur Wealth"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
            {/* Right-edge fade into navy */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: "linear-gradient(to right, transparent 55%, var(--navy) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background: "linear-gradient(to top, var(--navy) 0%, transparent 40%)",
              }}
            />
            {/* Forbes badge */}
            <div
              className="absolute top-8 left-8 px-3 py-2 rounded-[6px] text-[0.62rem] font-black tracking-[0.12em] uppercase"
              style={{
                background: "rgba(13,31,60,0.85)",
                color: "var(--gold-light)",
                border: "1px solid rgba(212,151,30,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              Forbes Top 100 People Manager
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="px-8 py-16 lg:px-16 xl:px-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="w-8 h-px shrink-0"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="text-[0.68rem] font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                The Founder
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[1.05] tracking-[-0.02em] mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                color: "var(--white)",
              }}
            >
              Devesh Chawla
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.76rem] font-bold tracking-[0.18em] uppercase mb-8"
              style={{ color: "rgba(212,151,30,0.85)" }}
            >
              Founder &amp; CEO — Chatur Ideas &amp; Chatur Wealth
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-[0.95rem] leading-[1.9] mb-10"
              style={{ color: "rgba(255,255,255,0.6)", maxWidth: "560px" }}
            >
              <p>
                Devesh Chawla is an entrepreneur, strategist, and investor
                with a two-decade track record across the Indian startup
                ecosystem. As Founder and CEO of{" "}
                <strong style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>
                  Chatur Ideas
                </strong>{" "}
                — one of India&apos;s largest startup-enabling platforms — he
                has guided{" "}
                <strong style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>
                  1,100+ ventures
                </strong>{" "}
                from ideation to growth, working alongside{" "}
                <strong style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>
                  1,500+ investors
                </strong>{" "}
                across 125+ cities.
              </p>
              <p>
                That same discipline — rigorous evaluation, systematic
                process, and a deeply held aversion to speculation — forms
                the intellectual foundation of Chatur Wealth. The principles
                that identify promising startups govern every algorithmic
                strategy we deploy: clarity of thesis, respect for risk, and
                consistency of execution.
              </p>
              <p>
                A 2× TEDx Speaker, Independent Director of a listed company,
                and faculty member at IITs and IIMs, Devesh brings scholarly
                rigour and street-level operational experience to wealth
                management.
              </p>
            </motion.div>

            {/* Credential stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-10"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "var(--r-md)",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="py-6 px-5 text-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                      color: "var(--gold-light)",
                    }}
                  >
                    {c.value}
                  </div>
                  <div
                    className="text-[0.67rem] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: "rgba(255,255,255,0.32)" }}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Awards — compact 2-col grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="text-[0.63rem] font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Recognition &amp; Awards
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {awards.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.44 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-[var(--r-sm)] transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "rgba(212,151,30,0.3)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")
                    }
                  >
                    <div
                      className="text-[0.58rem] font-bold tracking-[0.14em] uppercase mb-1"
                      style={{ color: "var(--gold)" }}
                    >
                      {a.year}
                    </div>
                    <div
                      className="font-semibold text-[0.82rem] leading-snug"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {a.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mt-8 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <a
                href="https://www.linkedin.com/in/deveshchawla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[0.75rem] font-semibold transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(212,151,30,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")
                }
              >
                LinkedIn Profile →
              </a>
              <a
                href="mailto:deveshchawla@chaturideas.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[0.75rem] font-semibold transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(212,151,30,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")
                }
              >
                Direct Email →
              </a>
            </motion.div>

            {/* Bottom padding */}
            <div className="h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
