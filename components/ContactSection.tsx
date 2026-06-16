"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormState = {
  name: string;
  mobile: string;
  email: string;
  investment: string;
  query: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "", mobile: "", email: "", investment: "", query: "",
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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
      id="contact"
      ref={ref}
      className="py-24"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="rule-gold" />
          <span className="label">Private Enquiries</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_520px] gap-14 xl:gap-20 items-start">

          {/* ── Left column ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[1.1] tracking-[-0.025em] mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                color: "var(--navy)",
              }}
            >
              Begin a<br />Conversation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.96rem] leading-[1.85] mb-10"
              style={{ color: "var(--body)", maxWidth: "400px" }}
            >
              We welcome serious enquiries from investors focused on
              long-term capital growth. Reach out directly — no
              intermediaries, no sales calls.
            </motion.p>

            {/* Office address */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3"
            >
              <div
                className="flex gap-4 p-5 rounded-[var(--r-md)] transition-all duration-200"
                style={{
                  background: "var(--ivory)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold-border)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-1.5"
                    style={{ color: "var(--gold)" }}
                  >
                    Office
                  </div>
                  <address className="not-italic text-[0.88rem] leading-[1.75]" style={{ color: "var(--body)" }}>
                    2100, Spaces, Inspire Hub<br />
                    Western Heights<br />
                    Andheri Link Road<br />
                    Andheri (W)<br />
                    Mumbai – 400053
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3"
            >
              <a
                href="mailto:deveshchawla@chaturideas.com"
                className="flex items-center gap-4 p-5 rounded-[var(--r-md)] group transition-all duration-200"
                style={{
                  background: "var(--ivory)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold-border)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: "var(--gold)" }}
                  >
                    Email
                  </div>
                  <div
                    className="text-[0.88rem] font-medium truncate group-hover:underline"
                    style={{ color: "var(--navy)" }}
                  >
                    deveshchawla@chaturideas.com
                  </div>
                  <div className="text-[0.75rem] mt-0.5" style={{ color: "var(--muted)" }}>
                    Replies within one business day
                  </div>
                </div>
                <span className="text-[0.9rem] shrink-0" style={{ color: "var(--muted)" }}>→</span>
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://www.linkedin.com/in/deveshchawla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-[var(--r-md)] group transition-all duration-200"
                style={{
                  background: "var(--ivory)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold-border)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--gold)">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div
                    className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: "var(--gold)" }}
                  >
                    LinkedIn
                  </div>
                  <div
                    className="text-[0.88rem] font-medium group-hover:underline"
                    style={{ color: "var(--navy)" }}
                  >
                    linkedin.com/in/deveshchawla
                  </div>
                  <div className="text-[0.75rem] mt-0.5" style={{ color: "var(--muted)" }}>
                    Professional profile
                  </div>
                </div>
                <span className="text-[0.9rem] shrink-0" style={{ color: "var(--muted)" }}>→</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right column: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[var(--r-xl)] overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              {/* Form header */}
              <div
                className="px-8 py-8 relative overflow-hidden"
                style={{ background: "var(--navy)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <span
                    className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: "rgba(212,151,30,0.85)" }}
                  >
                    Private Client Consultation
                  </span>
                  <h3
                    className="font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem" }}
                  >
                    Request a Consultation
                  </h3>
                  <p className="text-[0.82rem] mt-1.5" style={{ color: "rgba(255,255,255,0.42)" }}>
                    No obligation. No sales calls. A genuine conversation about your goals.
                  </p>
                </div>
              </div>

              {/* Form body */}
              <div className="px-8 py-8" style={{ background: "var(--white)" }}>
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-border)" }}
                    >
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                        <path d="M1 9l6 6L21 1" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h4
                      className="font-bold mb-2"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)" }}
                    >
                      Enquiry Received
                    </h4>
                    <p className="text-[0.88rem]" style={{ color: "var(--muted)" }}>
                      You will hear from our team within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { name: "name",   label: "Full Name",     type: "text", placeholder: "Your full name" },
                        { name: "mobile", label: "Mobile Number", type: "tel",  placeholder: "+91 98XXX XXXXX" },
                      ].map((f) => (
                        <div key={f.name}>
                          <label
                            className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                            style={{ color: "var(--muted)" }}
                          >
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            required
                            placeholder={f.placeholder}
                            value={form[f.name as keyof FormState]}
                            onChange={handle}
                            className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none"
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
                    </div>

                    <div>
                      <label
                        className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handle}
                        className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none"
                        style={{
                          background: "var(--ivory)",
                          border: "1px solid var(--border)",
                          color: "var(--navy)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        Investment Range
                      </label>
                      <select
                        name="investment"
                        required
                        value={form.investment}
                        onChange={handle}
                        className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none"
                        style={{
                          background: "var(--ivory)",
                          border: "1px solid var(--border)",
                          color: form.investment ? "var(--navy)" : "var(--muted)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                      >
                        <option value="">Select your investment range</option>
                        <option>₹50L – ₹1Cr</option>
                        <option>₹1Cr – ₹5Cr</option>
                        <option>₹5Cr – ₹10Cr</option>
                        <option>₹10Cr+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-[0.66rem] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        Your Query or Goals
                      </label>
                      <textarea
                        name="query"
                        rows={4}
                        placeholder="Describe your investment objectives, time horizon, or any specific questions…"
                        value={form.query}
                        onChange={handle}
                        className="w-full rounded-[var(--r-sm)] px-4 py-3 text-[0.88rem] outline-none resize-none"
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
                      className="btn-primary w-full justify-center"
                      style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                    >
                      {status === "loading" ? "Sending…" : "Submit Enquiry"}
                    </button>

                    <p className="text-center text-[0.7rem]" style={{ color: "var(--muted)" }}>
                      Your details are kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
