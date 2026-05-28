"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const project = {
  title: "SDK Esport",
  url: "https://sdk-esport.netlify.app/",
  desc: "Site officiel d'une association esport française compétitive sur Call of Duty. Conçu, développé et livré de A à Z en autonomie complète.",
  longDesc: "Structure loi 1901 avec 13 joueurs actifs, 100+ tournois en 2026 et une communauté de 500 membres. Le projet couvre l'ensemble du besoin : présence web, vente en ligne et gestion communautaire.",
  features: [
    { icon: "🛒", label: "Boutique en ligne", desc: "Vente de maillots officiels avec gestion des tailles et variantes" },
    { icon: "🎮", label: "Roster & Recrutement", desc: "Pages joueurs, formulaire de candidature intégré" },
    { icon: "🤖", label: "Bot Discord", desc: "Intégration discord.js avec commandes et notifications automatiques" },
    { icon: "🔒", label: "Sécurité serveur", desc: "Headers HTTP, CSP, protection DDoS, config Nginx" },
    { icon: "📬", label: "Système de contact", desc: "Formulaire avec Nodemailer, réponse automatique" },
    { icon: "📱", label: "Responsive complet", desc: "Adapté mobile, tablette et desktop" },
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "discord.js", "Vercel"],
  stats: [
    { value: 13, suffix: "", label: "Joueurs actifs" },
    { value: 100, suffix: "+", label: "Tournois 2026" },
    { value: 500, suffix: "", label: "Communauté" },
    { value: 6, suffix: "", label: "Pages livrées" },
  ],
};

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span>
      {display}{suffix}
    </span>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projet" className="border-b border-off3 bg-off" ref={ref}>
      <div className="flex items-baseline justify-between px-9 pt-5 pb-0">
        <span className="font-clash text-[11px] tracking-[0.15em] uppercase text-muted font-medium">
          Projet réalisé
        </span>
        <span className="text-[11px] text-muted2">01 / 01</span>
      </div>

      <div className="px-9 pt-5 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border border-off3 rounded-lg overflow-hidden"
        >
          {/* Project Header */}
          <div className="grid grid-cols-[1fr_auto] items-start gap-4 px-7 py-6 border-b border-off3 bg-off2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-clash font-bold text-[22px] text-ink tracking-tight leading-none">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-muted hover:text-ink transition-colors tracking-wide"
                  >
                    {project.url} ↗
                  </a>
                </div>
              </div>
              <p className="text-[13px] text-muted font-light leading-relaxed max-w-[520px]">
                {project.desc}
              </p>
              <p className="text-[12px] text-muted2 font-light leading-relaxed max-w-[520px] mt-1">
                {project.longDesc}
              </p>
            </div>
            <span className="text-[9px] tracking-widest uppercase bg-lime text-ink px-3 py-1 rounded-full font-bold mt-1 whitespace-nowrap">
              Livré · Client réel
            </span>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-4 border-b border-off3">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className={`px-6 py-5 text-center ${i < 3 ? "border-r border-off3" : ""}`}
              >
                <div className="font-clash font-bold text-[30px] text-ink leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-muted2 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 border-b border-off3">
            {project.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                className={`px-5 py-4 ${i % 3 !== 2 ? "border-r" : ""} ${i < 3 ? "border-b" : ""} border-off3 hover:bg-off2 transition-colors`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{f.icon}</span>
                  <span className="text-[12px] font-medium text-ink">{f.label}</span>
                </div>
                <p className="text-[11px] text-muted2 font-light leading-snug">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex items-center gap-3 px-7 py-4 flex-wrap">
            <span className="text-[10px] tracking-widest uppercase text-muted2 mr-2">Stack</span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-3 py-1 bg-off2 border border-off3 rounded-full text-ink font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
