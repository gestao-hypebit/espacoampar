"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

export function PhotoBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[42vh] min-h-[320px] overflow-hidden bg-forest sm:h-[48vh] lg:h-[52vh]"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 top-[-12%] bottom-[-12%]">
        <Image
          src="/acolhimento.png"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-forest/10" />
      <div className="absolute inset-0 bg-forest/35" />

      <div className="relative flex h-full max-w-6xl flex-col justify-end px-6 pb-10 mx-auto lg:px-8 lg:pb-14">
        <Reveal>
          <span className="eyebrow font-bold! text-terracotta-light [text-shadow:0_1px_6px_rgba(0,0,0,0.65)]">
            Presença e escuta
          </span>
          <p className="mt-3 max-w-lg font-display text-2xl italic leading-tight text-white sm:text-3xl lg:text-4xl">
            Às vezes, o cuidado começa em ter alguém que escute de verdade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
