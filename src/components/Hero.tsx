"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="grid grid-cols-[1fr_300px] border-b border-off3 bg-off">
      {/* Left */}
      <div className="px-9 py-14 border-r border-off3">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-muted bg-off2 px-4 py-1.5 rounded-full border border-off3 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime2 animate-pulse" />
          Remote-first · Disponible immédiatement
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-clash font-bold text-[54px] leading-[0.95] tracking-[-2.5px] text-ink mb-2"
        >
          Lunyx
          <br />
          <span className="font-normal text-muted">Développeur</span>
          <br />
          Web Fullstack
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[13px] tracking-[0.12em] uppercase text-muted mb-6 pl-0.5"
        >
          CDI · Alternance · Freelance
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[15px] leading-[1.65] text-muted max-w-[440px] mb-8 font-light"
        >
          J&apos;ai conçu et livré{" "}
          <strong className="text-ink font-medium">
            SDK Esport — un site complet multi-pages
          </strong>{" "}
          pour une association gaming : boutique en ligne, système de roster, recrutement, bot Discord intégré et sécurité serveur. Autonome, rapide, orienté résultat.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex gap-3"
        >
          <button
            onClick={() => scrollTo("projet")}
            className="text-[13px] font-bold px-6 py-3 bg-ink text-off rounded-[4px] hover:bg-ink2 transition-colors tracking-wide"
          >
            Voir le projet →
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-[13px] font-medium px-5 py-3 bg-transparent text-muted border border-off3 rounded-[4px] hover:border-ink hover:text-ink transition-all tracking-wide"
          >
            Me contacter
          </button>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-7 py-9 flex flex-col bg-off"
      >
        {[
          {
            label: "Disponibilité",
            value: "Immédiate",
            sub: "CDI · Alternance · Freelance",
            dot: true,
          },
          {
            label: "Mode de travail",
            value: "Remote-first",
            sub: "Paris si nécessaire",
          },
          {
            label: "Projet livré",
            value: "SDK Esport",
            sub: "Site complet · Client réel",
          },
          {
            label: "Contact",
            value: "lunyx.dev@outlook.fr",
            sub: "Réponse sous 24h",
            small: true,
          },
        ].map((item, i) => (
          <div key={i} className="py-[18px] border-b border-off3 last:border-0">
            <div className="text-[10px] tracking-[0.12em] uppercase text-muted2 mb-1.5">
              {item.label}
            </div>
            <div
              className={`font-medium text-ink ${item.small ? "text-[12px] break-all" : "text-[14px]"} ${item.dot ? "flex items-center gap-1.5" : ""}`}
            >
              {item.dot && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
              )}
              {item.value}
            </div>
            <div className="text-[12px] text-muted mt-0.5">{item.sub}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
