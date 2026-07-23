"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { InstagramIcon } from "./icons";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const points = [
  {
    title: "Equipe só de psicólogas",
    text: "Profissionais dedicadas exclusivamente ao cuidado em saúde mental, sob rigor ético e sigilo profissional.",
  },
  {
    title: "Negócio liderado por mulheres",
    text: "O Espaço Ampar é reconhecido no Google como uma empresa de empreendedoras.",
  },
  {
    title: "Ambiente pensado para acolher",
    text: "Um espaço físico tranquilo no Jardim Cuiabá, longe do ritmo acelerado do dia a dia.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow text-terracotta">Por que o Espaço Ampar</span>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-5xl">
                Um espaço para confiar.
              </h2>
            </Reveal>

            <StaggerGroup className="mt-10 flex flex-col gap-8">
              {points.map((point) => (
                <StaggerItem key={point.title} className="border-l-2 border-terracotta/40 pl-6">
                  <h3 className="font-display text-lg font-medium text-forest">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{point.text}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.15}>
            <motion.a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col justify-between overflow-hidden border border-forest/15 bg-cream transition-colors hover:border-forest/30"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/cuidado-maos.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-forest/10" />
                  <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-terracotta">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="px-10 pt-8">
                  <h3 className="font-display text-2xl font-medium text-forest">
                    Acompanhe os bastidores
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    No Instagram, a equipe compartilha conteúdo sobre saúde
                    emocional e os bastidores do espaço.
                  </p>
                </div>
              </div>
              <span className="mb-10 mt-8 inline-flex items-center gap-2 px-10 text-sm font-medium text-terracotta">
                {site.instagramHandle}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
