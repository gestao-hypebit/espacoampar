import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { PhotoBreak } from "@/components/PhotoBreak";
import { Especialidades } from "@/components/Especialidades";
import { Abordagem } from "@/components/Abordagem";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Diferenciais } from "@/components/Diferenciais";
import { FAQ } from "@/components/FAQ";
import { Contato } from "@/components/Contato";
import { Localizacao } from "@/components/Localizacao";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <PhotoBreak />
        <Especialidades />
        <Abordagem />
        <MarqueeBand />
        <Diferenciais />
        <FAQ />
        <Contato />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
