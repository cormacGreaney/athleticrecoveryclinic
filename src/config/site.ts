export const site = {
  name: "Athletic Recovery Clinic",
  shortName: "ARC",
  tagline: "Move better. Feel better. Recover better.",
  description:
    "Sports massage, recovery treatments, and nutrition in Nenagh with Dan Nolan.",
  location: "Nenagh, Co. Tipperary",
  locationShort: "Nenagh",
  country: "Ireland",
  instagram: "https://www.instagram.com/athleticrecoveryclinic/",
  instagramHandle: "@athleticrecoveryclinic",
  email: "dan@athleticrecoveryclinic.ie",
  phone: "087 123 4567",
  phoneHref: "tel:+353871234567",
  practitioner: {
    name: "Dan Nolan",
    title: "Sports Massage Therapist & Sports Nutrition Coach",
    shortTitle: "Recovery Specialist",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "sports-massage",
    title: "Sports Massage",
    copy: "For tightness, soreness, and getting movement back after training or a long week.",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    copy: "Hands-on work for muscular pain and tension that isn’t shifting.",
  },
  {
    id: "cupping",
    title: "Cupping Therapy",
    copy: "To ease deep tightness and get circulation moving.",
  },
  {
    id: "compression",
    title: "Compression Boots",
    copy: "To take the heaviness out of tired legs.",
  },
  {
    id: "tens-ems",
    title: "TENS & EMS",
    copy: "For pain relief and muscle activation.",
  },
  {
    id: "nutrition",
    title: "Sports Nutrition",
    copy: "Personalised plans for training, recovery, and day-to-day health.",
  },
] as const;

export const whoItsFor = [
  "Tightness",
  "Soreness",
  "Muscular pain",
  "Fatigue",
  "General tension",
  "Performance recovery",
] as const;
