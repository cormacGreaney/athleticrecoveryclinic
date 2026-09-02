import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  "aria-hidden": true as const,
};

export function IconMassage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 32c6-10 10-16 16-16s10 6 16 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 26c4-6 7-9 12-9s8 3 12 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="24" cy="14" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconCupping(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="6.5" stroke="currentColor" strokeWidth="1.8" opacity="0.7" />
      <circle cx="24" cy="24" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconCompression(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14 12c8 4 12 8 12 12s-4 8-12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 12c8 4 12 8 12 12s-4 8-12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M30 12c8 4 12 8 12 12s-4 8-12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function IconPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6 24h8l4-10 6 20 4-10h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconNutrition(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M24 8c8 8 12 16 12 24a12 12 0 0 1-24 0c0-8 4-16 12-24Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 20v16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 8l7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 4.5a7.5 7.5 0 0 0-6.4 11.4L4.8 19.2l3.4-.9A7.5 7.5 0 1 0 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 9.6c.2-.4.3-.4.6-.4h.5c.2 0 .4.1.5.3l.6 1.4c.1.2 0 .4-.1.6l-.4.4c-.1.2 0 .4.2.6.3.4.8.8 1.3 1.1.2.1.5.1.6-.1l.4-.4c.2-.2.4-.2.6-.1l1.4.6c.2.1.3.3.3.5v.5c0 .3 0 .4-.4.6A4.4 4.4 0 0 1 9.4 9.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export const serviceIcons = {
  "sports-massage": IconMassage,
  cupping: IconCupping,
  compression: IconCompression,
  "tens-ems": IconPulse,
  nutrition: IconNutrition,
} as const;
