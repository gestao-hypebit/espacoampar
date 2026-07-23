"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const links = [
  { n: "01", href: "#sobre", label: "Sobre" },
  { n: "02", href: "#equipe", label: "Equipe" },
  { n: "03", href: "#especialidades", label: "Especialidades" },
  { n: "04", href: "#acolhimento", label: "Acolhimento" },
  { n: "05", href: "#faq", label: "Dúvidas" },
  { n: "06", href: "#contato", label: "Contato" },
  { n: "07", href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" aria-label="Espaço Ampar — início">
          <Image
            src="/logo.jpg"
            alt="Espaço Ampar"
            width={42}
            height={42}
            priority
            className="rounded-lg"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 rounded-full border border-white/20 bg-forest/50 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white/40"
        >
          Menu
          <span className="flex flex-col gap-[3px]">
            <span className="h-[1.5px] w-4 bg-white" />
            <span className="h-[1.5px] w-4 bg-white" />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(3% at calc(100% - 56px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 56px) 40px)" }}
            exit={{ clipPath: "circle(3% at calc(100% - 56px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-forest text-white"
          >
            <div className="flex h-full flex-col justify-between px-6 py-6 lg:px-16 lg:py-10">
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.jpg"
                  alt="Espaço Ampar"
                  width={42}
                  height={42}
                  className="rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/50"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-baseline gap-5 border-b border-white/10 py-4 first:border-t"
                  >
                    <span className="font-body text-sm text-terracotta">{link.n}</span>
                    <span className="font-display text-4xl transition-transform duration-300 group-hover:translate-x-3 sm:text-6xl">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-6 text-sm text-white/60 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-1">
                  <span>{site.address.full}</span>
                  <span>{site.hours}</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-medium text-white transition-colors hover:bg-terracotta-dark"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={site.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white/50"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
