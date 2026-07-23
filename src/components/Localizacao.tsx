import { site } from "@/lib/site";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="eyebrow text-terracotta">Localização</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest sm:text-5xl">
            Venha nos visitar no Jardim Cuiabá.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between border border-forest/15 bg-cream p-8">
            <div className="flex flex-col gap-7">
              <div className="flex gap-4">
                <PinIcon className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-medium text-forest">Endereço</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {site.address.full}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-medium text-forest">Horário</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{site.hours}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-medium text-forest">Telefone / WhatsApp</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {site.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={site.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-forest/15 px-6 py-3 text-sm font-medium text-forest transition-colors hover:border-forest/30"
            >
              Ver rotas no Google Maps
            </a>
          </div>

          <div className="overflow-hidden border border-forest/15 bg-cream">
            <iframe
              src={site.mapsEmbedSrc}
              className="h-[380px] w-full grayscale-[15%] lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa - ${site.name}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
