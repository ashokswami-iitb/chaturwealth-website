"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cols = [
  {
    heading: "Chatur Wealth",
    links: [
      { label: "Investment Philosophy", href: "#philosophy" },
      { label: "Our Approach", href: "#approach" },
      { label: "Investment Structure", href: "#structure" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About the Founder", href: "#founder" },
      { label: "Insights & Blog", href: "#insights" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "+91-98207 65679", href: "tel:+919820765679" },
      { label: "deveshchawla@chaturideas.com", href: "mailto:deveshchawla@chaturideas.com" },
      { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/deveshchawla" },
    ],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12"
        >
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Chatur Wealth"
                width={672}
                height={257}
                className="footer-logo"
              />
            </div>
            <p
              className="text-[0.84rem] leading-[1.8] max-w-[260px] mb-5"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Systematic wealth management built on discipline, rigorous process, and long-term thinking.
            </p>
            <p className="text-[0.75rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
              Andheri (W), Mumbai – 400053
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[0.84rem] transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Legal bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="text-[0.7rem]"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            © {new Date().getFullYear()} Chatur Wealth. All rights reserved.
          </p>
          <p
            className="text-[0.68rem] leading-[1.7] max-w-xl md:text-right"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            Chatur Wealth is a facilitator for algorithmic trade execution only. We do not guarantee capital
            protection or returns. Investment in markets is subject to risk. Past strategy behaviour is not
            indicative of future results. Please read all documentation before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
