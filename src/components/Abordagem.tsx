"use client";
// 
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Contato inicial",
    text: "Você chama no WhatsApp e conta, em poucas palavras, o que te trouxe até aqui.",
  },
  {
    n: "02",
    title: "Sessão de acolhimento",
    text: "Uma primeira conversa para entender sua história e combinar como o acompanhamento vai funcionar.",
  },
  {
    n: "03",
    title: "Acompanhamento contínuo",
    text: "Sessões regulares, no seu ritmo, com o mesmo profissional do início ao fim do processo.",
  },
];

export function Abordagem() {
  return (
    <section id="acolhimento" className="bg-forest py-28 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-terracotta">Como funciona</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-5xl">
            Do primeiro contato à primeira sessão.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {steps.map((step) => (
            <Reveal key={step.n}>
              <div className="relative overflow-hidden border-b border-white/10 py-10 lg:py-14">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 select-none font-display text-[7rem] leading-none text-white/[0.06] sm:text-[10rem]"
                >
                  {step.n}
                </span>
                <div className="relative pl-16 sm:pl-32 lg:pl-40">
                  <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <motion.a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-terracotta-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Começar pelo WhatsApp
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
