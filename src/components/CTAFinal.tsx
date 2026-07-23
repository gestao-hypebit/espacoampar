"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function CTAFinal() {
  return (
    <section className="bg-terracotta py-20 text-white">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-lg font-display text-3xl font-medium leading-tight sm:text-4xl">
          Dê o primeiro passo para se sentir amparado.
        </h2>
        <motion.a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-forest px-8 py-4 text-base font-medium text-white transition-colors hover:bg-forest-light"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar minha consulta
        </motion.a>
      </Reveal>
    </section>
  );
}
