export const site = {
  name: "Athletic Recovery Clinic",
  shortName: "ARC",
  tagline: "Move better. Feel better. Recover better.",
  description:
    "Sports massage, recovery treatments, and nutrition in Nenagh with Daniel Nolan.",
  location: "Nenagh, Co. Tipperary",
  locationShort: "Nenagh",
  country: "Ireland",
  instagram: "https://www.instagram.com/athleticrecoveryclinic/",
  instagramHandle: "@athleticrecoveryclinic",
  email: "athleticrecoveryclinic@gmail.com",
  phone: "089 402 5849",
  phoneHref: "tel:+353894025849",
  whatsapp: "https://wa.me/353894025849",
  practitioner: {
    name: "Daniel Nolan",
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

export const qualifications = [
  "Sports Massage",
  "Sports Nutrition",
  "Cupping Therapy",
  "International training completed in trigger point therapy at RSM Academy Chiang Mai",
] as const;
