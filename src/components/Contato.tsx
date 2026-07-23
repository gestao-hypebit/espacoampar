"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const areas = [
  "Terapia individual",
  "Terapia de casal",
  "Ansiedade e estresse",
  "Autoconhecimento",
  "Saúde emocional feminina",
  "Adolescentes e jovens adultos",
  "Ainda não sei",
];

function buildMessage(values: { nome: string; telefone: string; area: string; mensagem: string }) {
  const lines = [
    `Olá! Meu nome é ${values.nome}.`,
    `Meu telefone: ${values.telefone}.`,
    `Área de interesse: ${values.area || "Ainda não sei"}.`,
  ];
  if (values.mensagem.trim()) {
    lines.push(`Mensagem: ${values.mensagem.trim()}`);
  }
  return lines.join("\n");
}

export function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [area, setArea] = useState(areas[0]);
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome.trim() || !telefone.trim()) {
      setError("Preencha nome e WhatsApp para continuar.");
      return;
    }
    setError("");

    const href = site.buildWhatsappHref(buildMessage({ nome, telefone, area, mensagem }));
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-forest py-28 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <span className="eyebrow text-terracotta">Fale conosco</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-5xl">
            Vamos conversar sobre o que te trouxe até aqui.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Preencha os campos ao lado — ao enviar, abrimos o WhatsApp com
            sua mensagem já pronta para a nossa equipe. Sem cadastro,
            sem espera: é o jeito mais rápido de começar.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/50">
            <WhatsAppIcon className="h-4 w-4 text-terracotta" />
            Resposta direto pelo WhatsApp da clínica
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                Nome
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="border-b border-white/25 bg-transparent py-2 text-base text-white placeholder:text-white/35 focus:border-terracotta focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                WhatsApp
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(65) 90000-0000"
                  className="border-b border-white/25 bg-transparent py-2 text-base text-white placeholder:text-white/35 focus:border-terracotta focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm">
              Área de interesse
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="border-b border-white/25 bg-forest py-2 text-base text-white focus:border-terracotta focus:outline-none"
              >
                {areas.map((a) => (
                  <option key={a} value={a} className="bg-forest text-white">
                    {a}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Mensagem (opcional)
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Conte um pouco sobre o que você está buscando"
                rows={3}
                className="resize-none border-b border-white/25 bg-transparent py-2 text-base text-white placeholder:text-white/35 focus:border-terracotta focus:outline-none"
              />
            </label>

            {error && <p className="text-sm text-terracotta">{error}</p>}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enviar e continuar no WhatsApp
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
