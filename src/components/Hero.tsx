"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { ArcMotif, WhatsAppIcon } from "./icons";
import { Marquee } from "./Marquee";

const easing = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

const marqueeItems = [
  "Terapia individual",
  "Terapia de casal",
  "Ansiedade e estresse",
  "Autoconhecimento",
  "Saúde emocional",
  "Acolhimento sem julgamento",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const arcY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const arcRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-forest text-white"
    >
      <motion.div
        style={{ y: arcY, rotate: arcRotate }}
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] text-cream/30 sm:-right-24 md:right-[-160px] md:top-[-120px] md:h-[820px] md:w-[820px]"
      >
        <ArcMotif className="h-full w-full" />
      </motion.div>

      <motion.div
        className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-32 lg:px-10 lg:pt-40"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="eyebrow text-sm font-bold! tracking-[0.22em] text-terracotta-light"
        >
          {site.tagline}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-white"
        >
          <span className="block font-light text-white/85">Um espaço para</span>
          <span className="block">pausar e ser</span>
          <span className="block italic text-terracotta">ouvido.</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-white/70">
            O Espaço Ampar reúne uma equipe multidisciplinar dedicada à saúde
            mental em Cuiabá — atendimento individual, de casal e um lugar
            para se conhecer melhor, sem pressa e sem julgamento.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <motion.a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar uma conversa
            </motion.a>
            <motion.a
              href="#especialidades"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              Especialidades
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="relative border-t border-white/10 bg-forest-light/60 py-5"
      >
        <Marquee items={marqueeItems} className="text-white/70" />
      </motion.div>
    </section>
  );
}
