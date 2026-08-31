import Link from "next/link";

/** Shared mark: three-facet mountain A. Used in nav, hero, footer, and favicon. */
export function LogoMark({
  className = "h-9 w-9",
  gradientId = "arc-mark",
}: {
  className?: string;
  gradientId?: string;
}) {
  const left = `${gradientId}-left`;
  const right = `${gradientId}-right`;

  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={left}
          x1="12"
          y1="72"
          x2="44"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#17856A" />
          <stop offset="0.55" stopColor="#2DB85A" />
          <stop offset="1" stopColor="#5EE07A" />
        </linearGradient>
        <linearGradient
          id={right}
          x1="40"
          y1="72"
          x2="68"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F6B52" />
          <stop offset="1" stopColor="#34B743" />
        </linearGradient>
      </defs>
      <path d="M40 6 12 70H40L32 48Z" fill={`url(#${left})`} />
      <path d="M40 6 68 70H40L48 48Z" fill={`url(#${right})`} />
      <path d="M40 30 53 70H27Z" fill="#145C48" />
    </svg>
  );
}

export function Wordmark({
  compact = false,
  className = "",
  gradientId = "arc-mark",
}: {
  compact?: boolean;
  className?: string;
  gradientId?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark
        className={compact ? "h-8 w-8" : "h-9 w-9"}
        gradientId={gradientId}
      />
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[0.14em] text-arc-green">
        ARC
      </span>
    </span>
  );
}

export function LogoLockup({
  gradientId = "arc-lockup",
  className = "",
}: {
  gradientId?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-3 sm:gap-4">
        <LogoMark
          className="h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]"
          gradientId={gradientId}
        />
        <span className="font-display text-[2.75rem] font-semibold leading-none tracking-[0.14em] text-arc-green sm:text-6xl">
          ARC
        </span>
      </div>
      <span className="mt-3 font-medium tracking-[0.04em] text-white sm:mt-4 sm:text-lg">
        Athletic Recovery Clinic
      </span>
    </div>
  );
}

export function BrandLink({
  compact = false,
  className = "",
  gradientId = "arc-mark",
}: {
  compact?: boolean;
  className?: string;
  gradientId?: string;
}) {
  return (
    <Link
      href="#top"
      className={`inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-green/70 ${className}`}
      aria-label="Athletic Recovery Clinic home"
    >
      <Wordmark compact={compact} gradientId={gradientId} />
    </Link>
  );
}
