"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    label: "Contrat",
    value: null,
    pills: [
      { text: "CDI", dark: true },
      { text: "Freelance", dark: false },
    ],
    sub: "Remote de préférence, Paris si ponctuel",
  },
  {
    label: "Disponibilité",
    value: null,
    pills: [{ text: "Immédiate", lime: true }],
    sub: "Pas de préavis, disponible dès maintenant",
  },
  {
    label: "Rémunération",
    value: "À négocier",
    pills: [],
    sub: "Selon le poste, la stack et les responsabilités",
  },
  {
    label: "Secteur",
    value: "Dev web",
    pills: [],
    sub: "Tout type de projet — startups, agences, clients directs",
  },
];

export default function Looking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="recherche" className="border-b border-off3 bg-off" ref={ref}>
      <div className="px-9 pt-5 pb-0">
        <span className="font-clash text-[11px] tracking-[0.15em] uppercase text-muted font-medium">
          Ce que je cherche
        </span>
      </div>

      {/* Grid 4 colonnes */}
      <div className="grid grid-cols-4 border-t border-off3 mt-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`px-6 py-5 ${i < 3 ? "border-r border-off3" : ""}`}
          >
            <div className="text-[10px] tracking-[0.12em] uppercase text-muted2 mb-2.5">
              {item.label}
            </div>

            <div className="flex flex-wrap gap-1.5 items-center mb-1.5">
              {item.pills.map((pill, pi) => (
                <span
                  key={pi}
                  className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${
                    "lime" in pill && pill.lime
                      ? "bg-lime text-ink2"
                      : "dark" in pill && pill.dark
                      ? "bg-ink text-off"
                      : "bg-off2 border border-off3 text-muted"
                  }`}
                >
                  {pill.text}
                </span>
              ))}
              {item.value && (
                <span className="text-[13px] font-medium text-ink">{item.value}</span>
              )}
            </div>

            <div className="text-[12px] text-muted font-light leading-snug">{item.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mx-9 mb-6 mt-0 p-4 bg-off2 border border-off3 rounded-md flex items-center gap-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-lime2 flex-shrink-0 animate-pulse" />
        <p className="text-[12px] text-muted font-light leading-relaxed">
          <strong className="text-ink font-medium">Autodidacte avec un projet en production.</strong>{" "}
          Je cherche une équipe où progresser vite, contribuer concrètement et monter en
          compétences sur des projets réels.
        </p>
      </motion.div>
    </section>
  );
}
