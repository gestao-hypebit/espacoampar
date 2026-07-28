import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const values = [
  {
    title: "Acolhimento",
    text: "Cada conversa começa sem pressa, no seu tempo — o primeiro passo é apenas ser ouvido.",
  },
  {
    title: "Sigilo profissional",
    text: "O que é dito no consultório fica no consultório, com o rigor ético da profissão.",
  },
  {
    title: "Cuidado individualizado",
    text: "Cada pessoa chega com uma história diferente, e o acompanhamento é pensado para ela.",
  },
];

const galleryPhotos = [
  {
    src: "/fotosespaco/entrada.jpg",
    alt: "Entrada do Espaço Ampar",
    hero: true,
  },
  {
    src: "/fotosespaco/sala-atendimento.jpg",
    alt: "Sala de atendimento do Espaço Ampar",
  },
  {
    src: "/fotosespaco/estante-leitura.jpg",
    alt: "Cantinho de leitura do Espaço Ampar",
  },
  {
    src: "/fotosespaco/detalhe-mesa.jpg",
    alt: "Detalhe de decoração do Espaço Ampar",
  },
  {
    src: "/fotosespaco/fachada.jpg",
    alt: "Fachada do Espaço Ampar",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-28">
      <span
        aria-hidden="true"
        className="watermark-word pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 select-none text-[13rem] leading-none lg:block"
      >
        amparar
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <span className="eyebrow text-terracotta">Sobre o espaço</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-4xl lg:text-5xl">
            Uma equipe multidisciplinar, um só compromisso: cuidar bem de você.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75">
            O Espaço Ampar nasceu para ser um lugar de referência em saúde
            mental em Cuiabá — um ambiente pensado para receber, sem
            pressa e sem julgamento. Por trás dele, uma equipe de
            profissionais dedicadas a caminhar ao lado de quem busca se
            entender melhor, atravessar um momento difícil ou apenas
            cuidar da própria saúde emocional com constância.
          </p>
        </Reveal>

        <div className="flex flex-col gap-10 lg:pt-2">
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/fotosespaco/sala-espera.jpg"
              alt="Sala de espera do Espaço Ampar"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <StaggerGroup className="flex flex-col gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title} className="flex gap-5 border-l-2 border-terracotta/40 pl-6">
                <div>
                  <h3 className="font-display text-lg font-medium text-forest">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {value.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      <StaggerGroup className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 sm:gap-5 lg:mt-24 lg:px-8 [grid-auto-rows:170px] sm:[grid-auto-rows:200px] lg:[grid-auto-rows:240px]">
        {galleryPhotos.map((photo) => (
          <StaggerItem
            key={photo.src}
            className={`overflow-hidden ${photo.hero ? "row-span-2" : ""}`}
          >
            <div className="group relative h-full w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
