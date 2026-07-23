import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Espaço Ampar | Psicologia em Cuiabá",
  description:
    "Espaço Ampar — clínica de psicologia e bem-estar em Cuiabá. Equipe de psicólogas para terapia individual, de casal e cuidado emocional. Agende pelo WhatsApp.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Espaço Ampar | Psicologia em Cuiabá",
    description:
      "Clínica de psicologia e bem-estar em Cuiabá. Equipe de psicólogas para terapia individual, de casal e cuidado emocional.",
    locale: "pt_BR",
    type: "website",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-body">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
