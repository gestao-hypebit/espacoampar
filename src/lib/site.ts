const phoneDisplay = "(65) 99965-2741";
const whatsappNumber = "5565999652741";
const whatsappMessage = "Olá! Gostaria de agendar uma consulta no Espaço Ampar.";

function buildWhatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Espaço Ampar",
  tagline: "Saúde mental e cuidado emocional em Cuiabá",
  address: {
    street: "Rua das Papoulas, 143",
    neighborhood: "Jardim Cuiabá",
    city: "Cuiabá - MT",
    zip: "78043-138",
    full: "Rua das Papoulas, 143 - Jardim Cuiabá, Cuiabá - MT, 78043-138",
  },
  hours: "Segunda a sexta, das 8h às 18h",
  phoneDisplay,
  whatsappHref: buildWhatsappHref(whatsappMessage),
  buildWhatsappHref,
  instagramHandle: "@amparpsicologia",
  instagramHref: "https://www.instagram.com/amparpsicologia/",
  mapsDirectionsHref:
    "https://www.google.com/maps/place/Espa%C3%A7o+Ampar/@-15.5957507,-56.1158597,17z/data=!3m1!4b1!4m6!3m5!1s0x939db16fe5978161:0x9da197629a78a072!8m2!3d-15.5957507!4d-56.1132848!16s%2Fg%2F11mzcpvfpy",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Espa%C3%A7o+Ampar,+Rua+das+Papoulas+143,+Jardim+Cuiab%C3%A1,+Cuiab%C3%A1+-+MT,+78043-138&output=embed",
} as const;
