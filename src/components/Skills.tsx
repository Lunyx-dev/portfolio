"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML / CSS", badge: "Utilisé en prod", solid: true },
      { name: "JavaScript", badge: "Utilisé en prod", solid: true },
      { name: "Tailwind CSS", badge: "Utilisé en prod", solid: true },
      { name: "TypeScript", badge: "Apprentissage actif", solid: false },
      { name: "React / Next.js", badge: "Apprentissage actif", solid: false },
    ],
  },
  {
    label: "Backend & Outils",
    skills: [
      { name: "Node.js", badge: "Utilisé en prod", solid: true },
      { name: "Nodemailer / SMTP", badge: "Utilisé en prod", solid: true },
      { name: "discord.js", badge: "Utilisé en prod", solid: true },
      { name: "Vercel", badge: "Utilisé en prod", solid: true },
      { name: "Git / GitHub", badge: "Bases solides", solid: false },
    ],
  },
  {
    label: "Sécurité & Infra",
    skills: [
      { name: "Headers HTTP / CSP", badge: "Utilisé en prod", solid: true },
      { name: "Protection DDoS", badge: "Utilisé en prod", solid: true },
      { name: "Sécurité web", badge: "Utilisé en prod", solid: true },
      { name: "Config Nginx", badge: "Bases solides", solid: false },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competences" className="border-b border-off3 bg-off" ref={ref}>
      <div className="px-9 pt-5 pb-0">
        <span className="font-clash text-[11px] tracking-[0.15em] uppercase text-muted font-medium">
          Compétences
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 px-9 pt-5 pb-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: ci * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-off border border-off3 rounded-lg overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-off3 bg-off2">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted font-medium">
                {cat.label}
              </span>
            </div>
            <div className="px-5 py-4 flex flex-col gap-2.5">
              {cat.skills.map((sk, si) => (
                <motion.div
                  key={sk.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: ci * 0.1 + si * 0.06 + 0.2, duration: 0.35 }}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="text-[12px] font-medium text-ink">{sk.name}</span>
                  <span
                    className={`text-[10px] tracking-wide px-2.5 py-1 rounded-full font-medium whitespace-nowrap flex-shrink-0 ${
                      sk.solid
                        ? "bg-lime text-ink2"
                        : "bg-off2 border border-off3 text-muted"
                    }`}
                  >
                    {sk.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
