"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const faqs = [
  {
    question: "Preciso estar em crise para procurar terapia?",
    answer:
      "Não. A terapia também é um espaço de autoconhecimento e cuidado contínuo — muita gente procura o Espaço Ampar só para se entender melhor, sem estar passando por um momento difícil.",
  },
  {
    question: "As sessões são sigilosas?",
    answer:
      "Sim. Seguimos o código de ética da profissão: tudo o que é dito em sessão é confidencial.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Você chama no WhatsApp, conta brevemente o que te trouxe até aqui e combinamos uma sessão de acolhimento para nos conhecermos.",
  },
  {
    question: "Onde acontecem os atendimentos?",
    answer:
      "No Espaço Ampar, no Jardim Cuiabá. Fale com a equipe pelo WhatsApp para checar disponibilidade de horários.",
  },
  {
    question: "Como são combinados valores e frequência das sessões?",
    answer:
      "Isso é definido diretamente com a psicóloga durante a sessão de acolhimento, de acordo com a sua necessidade.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-terracotta">Dúvidas frequentes</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-5xl">
            Perguntas antes de começar.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 flex flex-col divide-y divide-forest/10 border-t border-b border-forest/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-forest">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-sm leading-relaxed text-ink/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
