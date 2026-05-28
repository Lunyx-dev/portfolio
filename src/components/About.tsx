"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="apropos" className="border-b border-off3 bg-off" ref={ref}>
      <div className="px-9 pt-5 pb-0">
        <span className="font-clash text-[11px] tracking-[0.15em] uppercase text-muted font-medium">
          À propos
        </span>
      </div>

      <div className="grid grid-cols-2 border-t border-off3 mt-5">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-9 py-7 border-r border-off3"
        >
          <div className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-muted bg-off2 px-4 py-1.5 rounded-full border border-off3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime2 animate-pulse" />
            Remote-first
          </div>

          <h2 className="font-clash font-bold text-[32px] leading-[1] tracking-[-1.5px] text-ink mb-4">
            Qui je<br />
            <span className="font-normal text-muted">suis.</span>
          </h2>

          <p className="text-[14px] leading-[1.65] text-muted font-light max-w-[380px]">
            Je suis <strong className="text-ink font-medium">Lunyx</strong>, développeur web
            autodidacte basé à Paris. J&apos;apprends en construisant — j&apos;ai livré mon
            premier projet réel pour{" "}
            <strong className="text-ink font-medium">SDK Esport</strong> en autonomie
            complète : site multi-pages, boutique, bot Discord et sécurité serveur.
            <br /><br />
            Le travail à distance m&apos;arrange mieux — je suis{" "}
            <strong className="text-ink font-medium">
              plus efficace, plus concentré et plus productif
            </strong>{" "}
            en remote. Je cherche un poste où c&apos;est la norme, pas l&apos;exception.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-9 py-7"
        >
          {[
            {
              label: "Approche",
              value: "Autodidacte · Orienté résultat",
              sub: "J'apprends sur le terrain, pas uniquement en formation",
            },
            {
              label: "Mode de travail",
              value: "Remote de préférence",
              sub: "Le distanciel m'arrange vraiment mieux — Paris si ponctuel",
              lime: true,
            },
            {
              label: "Ce que j'apporte",
              value: "Un projet livré · Stack complète · Autonomie",
              sub: "Pas de formation, mais un vrai client et un site en prod",
            },
            {
              label: "Soft skills",
              value: "Curieux · Rigoureux · Direct",
              sub: "Je pose les bonnes questions et je livre ce que je promets",
            },
          ].map((item, i) => (
            <div key={i} className="py-4 border-b border-off3 last:border-0">
              <div className="text-[10px] tracking-[0.12em] uppercase text-muted2 mb-1">
                {item.label}
              </div>
              <div className="text-[13px] font-medium text-ink mb-0.5">
                {item.lime ? (
                  <span className="bg-lime text-ink2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {item.value}
                  </span>
                ) : (
                  item.value
                )}
              </div>
              <div className="text-[12px] text-muted font-light">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
