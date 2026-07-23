import Image from "next/image";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest py-14 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Image
            src="/logo.jpg"
            alt="Espaço Ampar"
            width={52}
            height={52}
            className="rounded-xl"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Clínica de psicologia e bem-estar no Jardim Cuiabá, Cuiabá – MT.
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/35 hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/35 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-medium text-white">Navegação</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#especialidades" className="hover:text-white">Especialidades</a></li>
              <li><a href="#acolhimento" className="hover:text-white">Acolhimento</a></li>
              <li><a href="#faq" className="hover:text-white">Dúvidas</a></li>
              <li><a href="#localizacao" className="hover:text-white">Localização</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Contato</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>{site.phoneDisplay}</li>
              <li>{site.instagramHandle}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">Endereço</p>
            <p className="mt-3 leading-relaxed">{site.address.full}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 text-xs text-white/40 lg:px-8">
        © {year} Espaço Ampar. Todos os direitos reservados.
      </div>
    </footer>
  );
}
