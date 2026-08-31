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

export function IconManual(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M24 8 L40 38 H8 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 18 L32 36 H16 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity="0.7"
      />
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

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7.2 3.8h2.4l1.2 3.2-1.6 1.2a12.5 12.5 0 0 0 5.6 5.6l1.2-1.6 3.2 1.2v2.4c0 .9-.7 1.7-1.6 1.8-7.2.8-13.2-5.2-12.4-12.4.1-.9.9-1.6 1.8-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
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
  "manual-therapy": IconManual,
  cupping: IconCupping,
  compression: IconCompression,
  "tens-ems": IconPulse,
  nutrition: IconNutrition,
} as const;
