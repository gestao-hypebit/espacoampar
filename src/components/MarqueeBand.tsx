import { Marquee } from "./Marquee";

const items = [
  "Espaço Ampar",
  "Jardim Cuiabá",
  "Cuidado emocional",
  "Cuiabá · MT",
];

export function MarqueeBand() {
  return (
    <div className="border-y border-white/10 bg-terracotta py-5 text-white">
      <Marquee items={items} />
    </div>
  );
}
