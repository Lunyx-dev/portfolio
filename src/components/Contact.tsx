"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-b border-off3 bg-off">
      <div className="grid grid-cols-2">
        {/* Left */}
        <div className="px-9 py-8 border-r border-off3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-clash font-bold text-[28px] tracking-[-1px] text-ink mb-2.5">
              On travaille<br />ensemble ?
            </h2>

            <p className="text-[13px] text-muted leading-relaxed mb-6 font-light">
              Disponible pour un CDI, une alternance ou des missions freelance.{" "}
              <strong className="text-ink font-medium">Remote-first</strong>, Paris si nécessaire.
              Je progresse vite et je livre ce que je promets.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              <a
                href="mailto:lunyx.dev@outlook.fr"
                className="flex items-center gap-2.5 text-[13px] text-muted hover:text-ink transition-colors group"
              >
                <span className="w-7 h-7 bg-off2 border border-off3 rounded flex items-center justify-center text-[13px] group-hover:border-ink transition-colors">✉</span>
                lunyx.dev@outlook.fr
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-muted">
                <span className="w-7 h-7 bg-off2 border border-off3 rounded flex items-center justify-center text-[13px]">📍</span>
                Remote-first · Paris, France
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-muted">
                <span className="w-7 h-7 bg-off2 border border-off3 rounded flex items-center justify-center text-[13px]">⚡</span>
                Réponse sous 24h garantie
              </div>
            </div>

            {/* Reference client */}
            <div className="p-4 bg-off2 rounded-lg border border-off3">
              <div className="text-[10px] tracking-widest uppercase text-muted2 mb-2">
                Référence client · SDK Esport
              </div>
              <p className="text-[12px] text-muted font-light leading-relaxed mb-3">
                Mon client peut témoigner du travail réalisé — n&apos;hésitez pas à le contacter directement pour échanger sur le projet.
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:shadowrazzy1@gmail.com"
                  className="flex items-center gap-2 text-[12px] text-muted hover:text-ink transition-colors"
                >
                  <span className="text-[11px]">✉</span>
                  shadowrazzy1@gmail.com
                </a>
                <a
                  href="https://sdk-esport.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[12px] text-muted hover:text-ink transition-colors"
                >
                  <span className="text-[11px]">↗</span>
                  sdk-esport.netlify.app
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <div className="px-9 py-8 bg-off2">
          <div className="flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { key: "name", label: "Prénom *", placeholder: "Sophie" },
                { key: "company", label: "Société", placeholder: "Acme Studio" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-[10px] tracking-widest uppercase text-muted2 mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full bg-off border border-off3 rounded px-3 py-2.5 text-[13px] text-ink placeholder:text-muted2 outline-none focus:border-ink3 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-muted2 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                placeholder="sophie@acme.fr"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-off border border-off3 rounded px-3 py-2.5 text-[13px] text-ink placeholder:text-muted2 outline-none focus:border-ink3 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-muted2 mb-1.5">
                Message *
              </label>
              <textarea
                placeholder="Votre projet, votre besoin, le type de poste..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-off border border-off3 rounded px-3 py-2.5 text-[13px] text-ink placeholder:text-muted2 outline-none focus:border-ink3 transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full py-3 bg-ink text-off text-[12px] font-bold tracking-widest uppercase rounded hover:bg-ink2 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Envoi..." : status === "success" ? "Message envoyé ✓" : "Envoyer →"}
            </button>

            {status === "error" && (
              <p className="text-[12px] text-red-500 text-center">
                Erreur lors de l&apos;envoi. Écrivez à lunyx.dev@outlook.fr
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
