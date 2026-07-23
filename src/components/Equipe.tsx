"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { InstagramIcon, WhatsAppIcon } from "./icons";

type Member = {
  photo: string;
  name: string;
  specialty: string;
  bio: string;
  instagram?: string;
  whatsapp?: string;
};

function waHref(digits: string) {
  return `https://wa.me/${digits}`;
}

const team: Member[] = [
  {
    photo: "/equipe/giovanna-prates.jpg",
    name: "Giovanna Prates",
    specialty: "Terapias neurocerebrais · TCC, EMDR e Brainspotting",
    bio: "Especializada em terapias neurocerebrais, trabalhando com traumas complexos, TEPT, borderline, bipolaridade e TDAH, entre outros. Atende adultos, casais e adolescentes.",
    instagram: "psigiovannaprates",
    whatsapp: waHref("5565996174664"),
  },
  {
    photo: "/equipe/jennifer-mezzomo.jpg",
    name: "Jennifer Mezzomo",
    specialty: "TCC · Avaliação psicológica e neuropsicológica",
    bio: "Atua pela abordagem da TCC em psicoterapia para adolescentes, adultos e idosos. Realiza avaliação psicológica para cirurgias, concursos e empresas, avaliação neuropsicológica, orientação vocacional e palestras.",
    whatsapp: waHref("5565999160366"),
  },
  {
    photo: "/equipe/larissa-patias.jpg",
    name: "Larissa Patias",
    specialty: "Psicopedagogia e neurodesenvolvimento",
    bio: "9 anos de atuação ajudando crianças, adolescentes e adultos a desenvolver suas potencialidades e habilidades psicomotoras. Docente no Ensino Superior, pesquisadora e palestrante, com foco em avaliação psicopedagógica e intervenção em dificuldades de aprendizagem, autismo, TDAH e neurodesenvolvimento.",
    instagram: "psicolarissapatias",
    whatsapp: waHref("5566981419363"),
  },
  {
    photo: "/equipe/maria-elisa.jpg",
    name: "Maria Elisa",
    specialty: "TCC · Avaliação neuropsicológica",
    bio: "Atuação baseada na Terapia Cognitivo-Comportamental (TCC) e dedicação à Avaliação Neuropsicológica. Busca integrar evidências científicas à prática clínica, oferecendo avaliações e intervenções éticas, individualizadas e fundamentadas na ciência.",
  },
  {
    photo: "/equipe/maria-paula.jpg",
    name: "Maria Paula",
    specialty: "Psicanálise",
    bio: "Atuação através da psicanálise para adolescentes, jovens e adultos. Escuta clínica voltada ao autoconhecimento, à compreensão dos conflitos internos e ao alívio de sintomas emocionais, com atendimento individual para ansiedade, depressão, identidade e relacionamentos.",
    instagram: "psimariapaulakf",
    whatsapp: waHref("5565999652741"),
  },
  {
    photo: "/equipe/patricia-maciel.jpg",
    name: "Patrícia Maciel",
    specialty: "Abordagem integrativa · EMDR e Brainspotting",
    bio: "Mais de 12 anos de experiência clínica, com abordagem integrativa baseada em Terapia Sistêmica, EMDR, Brainspotting e Terapia Focada nas Emoções (TFE). Atende adultos e casais em ansiedade, traumas e transições de vida, presencialmente em Cuiabá/MT ou online.",
    instagram: "psicologaemcuiaba",
    whatsapp: waHref("5565999174899"),
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-terracotta">Quem vai te ouvir</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-5xl">
            Conheça a equipe do Espaço Ampar.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem
              key={member.name}
              className="group flex flex-col border border-forest/15 bg-white transition-colors hover:border-forest/30"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {member.instagram && (
                  <a
                    href={`https://www.instagram.com/${member.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${member.name}`}
                    className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-terracotta transition-colors hover:bg-white"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <span className="eyebrow text-terracotta">{member.specialty}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-forest">
                  {member.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  {member.bio}
                </p>

                <a
                  href={member.whatsapp ?? site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-terracotta"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar com {member.name}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
