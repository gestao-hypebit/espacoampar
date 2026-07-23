"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const areas = [
  {
    n: "01",
    title: "Terapia individual",
    text: "Um espaço próprio para organizar pensamentos, emoções e decisões da vida cotidiana.",
  },
  {
    n: "02",
    title: "Terapia de casal",
    text: "Escuta conjunta para comunicação, conflitos e a reconstrução do vínculo a dois.",
  },
  {
    n: "03",
    title: "Ansiedade e estresse",
    text: "Acompanhamento para lidar com sobrecarga, inquietação e rotinas exigentes.",
  },
  {
    n: "04",
    title: "Autoconhecimento",
    text: "Processos voltados a entender padrões, histórico e escolhas com mais clareza.",
  },
  {
    n: "05",
    title: "Saúde emocional feminina",
    text: "Cuidado atento às fases e demandas específicas da vida da mulher.",
  },
  {
    n: "06",
    title: "Adolescentes e jovens adultos",
    text: "Suporte para as transições de identidade, autonomia e relações dessa fase.",
  },
];

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-terracotta">Áreas de atuação</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-5xl">
            Cuidado psicológico para diferentes momentos da vida.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-forest/15">
          {areas.map((area, i) => (
            <Reveal key={area.n} delay={i * 0.04}>
              <motion.div
                whileHover="hover"
                className="group grid gap-3 border-b border-forest/15 py-8 sm:grid-cols-[64px_1fr_1.1fr] sm:items-baseline sm:gap-8 lg:py-10"
              >
                <span className="font-display text-sm text-terracotta">{area.n}</span>
                <motion.h3
                  variants={{ hover: { x: 14 } }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl font-medium text-forest sm:text-3xl lg:text-4xl"
                >
                  {area.title}
                </motion.h3>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-base sm:pl-8">
                  {area.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
