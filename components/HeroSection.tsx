"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  mobile: string;
  email: string;
  investment: string;
  query: string;
};

type Status = "idle" | "loading" | "success" | "error";

const investmentRanges = [
  "₹50L – ₹1Cr",
  "₹1Cr – ₹5Cr",
  "₹5Cr – ₹10Cr",
  "₹10Cr+",
];

const pillars = [
  { label: "7+ Years", sub: "Live strategy data" },
  { label: "₹50L+",   sub: "Minimum capital" },
  { label: "Zero",    sub: "Upfront fees" },
  { label: "100%",    sub: "Client-owned accounts" },
];

export default function HeroSection() {
  const [form, setForm] = useState<FormState>({
    name: "", mobile: "", email: "", investment: "", query: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px] lg:pt-[84px]"
      style={{ background: "var(--ivory)" }}
    >
      {/* Warm ivory-to-cream gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 0% 100%, rgba(237,233,224,0.6) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 100% 0%, rgba(253,246,232,0.45) 0%, transparent 55%)",
        }}
      />

      {/* Fine grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #b87010 0, #b87010 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 py-20 xl:py-24">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-20 items-start">

          {/* ── Left column ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="rule-gold" />
              <span className="label">Algorithmic Wealth Management</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6.5vw, 5.6rem)",
                color: "var(--navy)",
                lineHeight: 1.03,
                letterSpacing: "-0.025em",
                fontWeight: 700,
              }}
            >
              The Architecture
              <br />
              of{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Enduring Wealth.
              </em>
            </motion.h1>

            {/* Gold rule — animated width reveal */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left mt-8 mb-8"
              style={{ width: "64px", height: "2px", background: "var(--gold)", borderRadius: "2px" }}
            />

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1.05rem] leading-[1.9]"
              style={{ color: "var(--body)", maxWidth: "500px" }}
            >
              We build systematic, research-driven strategies that preserve
              your capital first and grow it second. Every decision is
              governed by rules — not emotion, not opinion, not market noise.
              This is long-term wealth management at institutional grade.
            </motion.p>

            {/* 4-stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-10"
              style={{
                background: "var(--border)",
                borderRadius: "var(--r-md)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="py-5 px-4 text-center transition-colors duration-300"
                  style={{ background: "var(--white)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--ivory)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--white)")}
                >
                  <div
                    className="font-bold mb-0.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
                      color: "var(--navy)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    className="text-[0.64rem] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.sub}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a href="#contact" className="btn-primary">
                Begin a Consultation
              </a>
              <a href="#philosophy" className="btn-outline">
                Our Philosophy
              </a>
            </motion.div>
          </div>

          {/* ── Right: Form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-4"
          >
            <div
              className="rounded-[var(--r-xl)] overflow-hidden"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              {/* Card header — navy */}
              <div
                className="px-8 py-7 relative overflow-hidden"
                style={{ background: "var(--navy)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <span
                    className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: "rgba(212,151,30,0.85)" }}
                  >
                    Private Client Enquiry
                  </span>
                  <h2
                    className="font-bold leading-tight text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.7rem",
                    }}
                  >
                    Begin Your Wealth Journey
                  </h2>
                  <p className="text-[0.8rem] mt-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Minimum ₹50 Lakh. Your funds stay in your account.
                  </p>
                </div>
              </div>

              <div className="px-8 py-7">
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
                    >
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                        <path d="M1 9l6 6L21 1" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)" }}
                    >
                      Enquiry Received
                    </h3>
                    <p className="text-[0.88rem]" style={{ color: "var(--muted)" }}>
                      Our team will reach out within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    {[
                      { name: "name",   label: "Full Name",     type: "text",  placeholder: "Your full name" },
                      { name: "mobile", label: "Mobile Number", type: "tel",   placeholder: "+91 98XXX XXXXX" },
                      { name: "email",  label: "Email Address", type: "email", placeholder: "you@example.com" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label
                          className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                          style={{ color: "var(--muted)" }}
                          htmlFor={`hero-${f.name}`}
                        >
                          {f.label}
                        </label>
                        <input
                          id={`hero-${f.name}`}
                          type={f.type}
                          name={f.name}
                          required
                          placeholder={f.placeholder}
                          value={form[f.name as keyof FormState]}
                          onChange={handle}
                          className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none transition-colors duration-150"
                          style={{
                            background: "var(--ivory)",
                            border: "1px solid var(--border)",
                            color: "var(--navy)",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                          onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--muted)" }}
                        htmlFor="hero-investment"
                      >
                        Investment Amount
                      </label>
                      <select
                        id="hero-investment"
                        name="investment"
                        required
                        value={form.investment}
                        onChange={handle}
                        className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none transition-colors duration-150"
                        style={{
                          background: "var(--ivory)",
                          border: "1px solid var(--border)",
                          color: form.investment ? "var(--navy)" : "var(--muted)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                      >
                        <option value="">Select range</option>
                        {investmentRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--muted)" }}
                        htmlFor="hero-query"
                      >
                        Your Query{" "}
                        <span style={{ color: "var(--muted)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                          (Optional)
                        </span>
                      </label>
                      <textarea
                        id="hero-query"
                        name="query"
                        rows={3}
                        placeholder="Investment goals, time horizon, questions…"
                        value={form.query}
                        onChange={handle}
                        className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none transition-colors duration-150 resize-none"
                        style={{
                          background: "var(--ivory)",
                          border: "1px solid var(--border)",
                          color: "var(--navy)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <div
                        className="rounded-[var(--r-sm)] px-4 py-3 text-[0.82rem]"
                        style={{ background: "#fff5f5", border: "1px solid #ffcccc", color: "#c0392b" }}
                      >
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center mt-1"
                      style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                    >
                      {status === "loading" ? "Sending…" : "Request Private Consultation"}
                    </button>

                    <p className="text-center text-[0.68rem]" style={{ color: "var(--muted)" }}>
                      Your details are kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Trust note below form */}
            <p
              className="text-center text-[0.72rem] mt-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              No obligation. No intermediaries. A direct conversation with our team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
